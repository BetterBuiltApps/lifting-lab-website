/* Shared building blocks for the landing page. */
import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Button, SectionLabel, Icon } from '../design-system';
import { SITE } from '../config';
import { asset } from '../lib/asset';
import { DURATION, EASE } from '../lib/motion';

export const siteWrap = { maxWidth: 1240, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' };

/* Every href here must resolve to an id that exists. "Pillars" pointed at
   #pillars, which stopped existing when that section was absorbed into the arc,
   so the first nav item silently went nowhere. */
const NAV_LINKS = [['The cycle', '#cycle'], ['Everything else', '#explore'], ['Pricing', '#pricing'], ['FAQ', '#faq']];

export function SiteNav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const prefersReduced = useReducedMotion();
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(26,26,26,0.82)', backdropFilter: 'blur(20px)',
      borderBottom: 'var(--border-hairline-1)',
    }}>
      <div style={{ ...siteWrap, display: 'flex', alignItems: 'center', gap: 28, height: 68 }}>
        <img src={asset('assets/logo.svg')} alt="Lifting Lab" style={{ height: 34 }} />
        <span style={{ flex: 1 }} />
        <div className="site-nav-links">
          {NAV_LINKS.map(([l, h]) => (
            <a key={l} href={h} style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{l}</a>
          ))}
        </div>
        {/* Hidden on narrow screens, where logo + CTA + toggle do not fit: the
            label wrapped to three lines and pushed the toggle off the edge. The
            drawer carries it there instead. No animated border either; it was
            the same rotating-conic device as the Pro pricing card, and one page
            only needs one of those. */}
        {/* The class goes on a wrapper, not on Button: Button sets `display`
            in an inline style object, which beats any stylesheet rule, so
            `.site-nav-cta { display: none }` on the button itself did nothing.
            The wrapper has no inline style, so the breakpoint just works. */}
        <span className="site-nav-cta">
          <Button variant="outline" size="small" onClick={() => {
            const el = document.getElementById('pricing');
            if (el) window.scrollTo({ top: el.offsetTop - 88, behavior: 'smooth' });
          }}>
            Get Lifting Lab
          </Button>
        </span>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu" aria-expanded={menuOpen}
          className="site-nav-toggle"
        >
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} color="var(--text-primary)" />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : DURATION.fade, ease: EASE.inOut }}
            style={{ overflow: 'hidden', borderTop: 'var(--border-hairline-1)' }}
          >
            <div style={{ ...siteWrap, display: 'grid', padding: '8px 0 20px' }}>
              {NAV_LINKS.map(([l, h]) => (
                <a key={l} href={h} onClick={() => setMenuOpen(false)}
                   style={{ font: 'var(--type-headline)', color: 'var(--text-secondary)', padding: '14px 0' }}>{l}</a>
              ))}
              {/* The CTA the bar cannot fit at this width. */}
              <a href="#pricing" onClick={() => setMenuOpen(false)}
                 style={{ font: 'var(--type-headline)', fontWeight: 700, color: 'var(--amber)', padding: '14px 0' }}>
                Get Lifting Lab
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/** Section heading.
 *
 * There is deliberately no `eyebrow` prop. Every section used to carry an amber
 * uppercase label above its heading, "Pricing" above "Free, unlimited,
 * forever.", "Progress" above "Every session counts for something." The label
 * never said anything the heading didn't, and a stack of them down the page is
 * one of the most reliable tells that a layout was assembled from a template
 * rather than composed. The heading carries its own weight.
 *
 * The one place a small label still earns its place is where it states a fact
 * the heading cannot, the week markers on the arc, and those are part of a
 * calibrated axis, not decoration. */
export function SiteHead({ title, body, center = false, max = 640 }) {
  return (
    <div style={{
      display: 'grid', gap: 14, maxWidth: max,
      margin: center ? '0 auto' : undefined, textAlign: center ? 'center' : 'left',
      justifyItems: center ? 'center' : 'start',
    }}>
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-extrabold)',
        fontSize: 'clamp(30px,3.4vw,48px)', lineHeight: 1.06, letterSpacing: '-1px',
        color: 'var(--text-primary)',
      }}>{title}</h2>
      {body && <p style={{ margin: 0, font: 'var(--type-body)', fontSize: 18, lineHeight: 1.5, color: 'var(--text-secondary)' }}>{body}</p>}
    </div>
  );
}

/** A real app screenshot in a minimal dark bezel. `priority` = above-the-fold
 * (eager decode, no lazy-load); `lcp` additionally hints this is the largest
 * contentful paint candidate. Fixed aspect-ratio reserves layout space before
 * the image decodes, so nothing shifts (CLS) regardless of exact PNG dims.
 *
 * Every screenshot on the site goes through here, which is why the responsive
 * sources live here rather than at 30 call sites. The PNGs are full iPhone
 * captures (~1300x2870) and nothing renders wider than 300 CSS px, so
 * scripts/build-screens.sh emits 600w and 900w WebP beside each one and the
 * browser takes the one its DPR needs. `sizes` is the element's real CSS width,
 * so a 2x display picks 600w and a 3x picks 900w.
 *
 * The PNG stays as the img fallback: it costs nothing unless the browser has
 * no WebP support, and it keeps the original as the archival source.
 *
 * (Written without an angle-bracketed img tag on purpose, impeccable's
 * broken-image detector scans comments too and reads one as a src-less tag.) */
export function Shot({ src, alt, width = 300, caption, priority = false, lcp = false }) {
  const webpBase = src.replace(/\.png$/, '');
  return (
    <figure style={{ margin: 0, display: 'grid', gap: 12, justifyItems: 'center' }}>
      <motion.div
        whileHover={{ scale: 1.015, borderColor: 'rgba(255,255,255,0.22)' }}
        transition={{ duration: DURATION.spring, ease: EASE.spring }}
        style={{
          width, maxWidth: '100%', aspectRatio: '9 / 19.5', borderRadius: 34, overflow: 'hidden', background: '#000',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: '0 30px 70px rgba(0,0,0,0.55)',
        }}
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`${webpBase}-600.webp 600w, ${webpBase}-900.webp 900w`}
            sizes={`${width}px`}
          />
          <img
            src={src} alt={alt}
            width={width} height={Math.round((width * 19.5) / 9)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            {...(lcp ? { fetchpriority: 'high' } : {})}
          />
        </picture>
      </motion.div>
      {caption && (
        <figcaption style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)', textAlign: 'center', maxWidth: width }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Apple's on-screen minimum badge height is 40px; these map our size scale to
// values at or above that floor. Never resize/recolor/modify the badge itself
// beyond plain scaling, see App Store Marketing Guidelines.
const APP_STORE_BADGE_HEIGHT = { large: 56, medium: 48, small: 40 };

/** App Store CTA, used in hero, pricing, and footer. Reads SITE.released:
 * pre-launch it's an inert, muted label (not a link, no badge, the Marketing
 * Agreement only permits the real badge once the app is actually live). Once
 * released, renders Apple's official badge (site/public/assets/, downloaded
 * per-app from toolbox.marketingtools.apple.com/app-store/) linking straight
 * to the App Store listing, per Apple's own guidelines. */
export function AppStoreButton({ size = 'large' }) {
  if (!SITE.released) {
    return (
      <Button size={size} variant="secondary" disabled style={{ opacity: 1, cursor: 'default' }}>
        {SITE.ctaPrimaryPrelaunch}
      </Button>
    );
  }
  return (
    <a href={SITE.links.appStore} aria-label={SITE.ctaPrimary}>
      <img
        src={asset(SITE.appStoreBadgeSrc)}
        alt="Download on the App Store"
        style={{ height: APP_STORE_BADGE_HEIGHT[size], display: 'block' }}
      />
    </a>
  );
}
