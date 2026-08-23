import React from 'react';
import { createPortal } from 'react-dom';
import { useReducedMotion } from 'motion/react';
import { Icon } from '../design-system';
import { DURATION } from './motion';

const LightboxContext = React.createContext(null);

/** Every `Shot` on the page opens through this one instance, not one modal
 * per screenshot: a single portal at the app root, so z-index and body-scroll
 * locking only ever have to be reasoned about in one place.
 *
 * Plain CSS transition, not Framer Motion's AnimatePresence: nesting the
 * modal in a portal confused AnimatePresence's exit tracking, the element
 * animated to opacity 0 and then never actually unmounted, silently leaving a
 * full-screen `pointer-events` blocker over the whole page. A CSS opacity
 * transition plus a matching `setTimeout` before the real unmount sidesteps
 * that entirely, and `tokens/motion.css`'s durations are already mirrored
 * into `lib/motion.js` for exactly this kind of plain-CSS use. */
export function LightboxProvider({ children }) {
  const [image, setImage] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const triggerRef = React.useRef(null);
  const closeButtonRef = React.useRef(null);
  const closeTimer = React.useRef(null);
  const prefersReduced = useReducedMotion();
  const duration = prefersReduced ? 0 : DURATION.fade;

  const open = React.useCallback((img, triggerEl) => {
    clearTimeout(closeTimer.current);
    triggerRef.current = triggerEl ?? null;
    setImage(img);
    // Mount at opacity 0 first, then flip to visible so the browser has a
    // "before" state to transition from. setTimeout, not requestAnimationFrame:
    // rAF is paused for a backgrounded/hidden document, which would leave the
    // modal stuck invisible if it's opened right as a tab loses focus.
    setTimeout(() => setVisible(true), 10);
  }, []);

  const close = React.useCallback(() => {
    setVisible(false);
    closeTimer.current = setTimeout(() => setImage(null), duration * 1000);
  }, [duration]);

  React.useEffect(() => () => clearTimeout(closeTimer.current), []);

  React.useEffect(() => {
    if (!image) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [image, close]);

  React.useEffect(() => {
    if (visible) closeButtonRef.current?.focus();
    else if (image === null) triggerRef.current?.focus();
  }, [visible, image]);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {image && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          onClick={close}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.85)',
            display: 'grid', placeItems: 'center', padding: 'clamp(20px,5vw,60px)',
            opacity: visible ? 1 : 0,
            transition: `opacity ${duration}s var(--ease-in-out)`,
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close"
            style={{
              position: 'fixed', top: 'clamp(12px,3vw,28px)', right: 'clamp(12px,3vw,28px)',
              width: 44, height: 44, display: 'grid', placeItems: 'center',
              background: 'rgba(35,35,35,0.9)', border: 'var(--border-hairline-1)',
              borderRadius: 'var(--radius-pill)', cursor: 'pointer',
            }}
          >
            <Icon name="x" size={22} color="var(--text-primary)" />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            style={{
              margin: 0, display: 'grid', gap: 14, justifyItems: 'center', maxWidth: '100%',
              transform: visible ? 'scale(1)' : 'scale(0.97)',
              transition: `transform ${duration}s var(--ease-in-out)`,
            }}
          >
            <img
              src={image.src} alt={image.alt}
              style={{
                display: 'block', maxWidth: '100%', maxHeight: '82vh',
                width: 'auto', height: 'auto', objectFit: 'contain',
                borderRadius: 16, boxShadow: '0 30px 70px rgba(0,0,0,0.55)',
              }}
            />
            {image.caption && (
              <figcaption style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '60ch' }}>
                {image.caption}
              </figcaption>
            )}
          </figure>
        </div>,
        document.body
      )}
    </LightboxContext.Provider>
  );
}

/** Returns `openLightbox(image, triggerEl)`, `image` is `{ src, alt, caption? }`. */
export function useLightbox() {
  const open = React.useContext(LightboxContext);
  if (!open) throw new Error('useLightbox must be used within a LightboxProvider');
  return open;
}
