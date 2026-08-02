/* Shared building blocks for the landing page. */
import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Button, SectionLabel, Icon } from '../design-system';
import { SITE } from '../config';
import { asset } from '../lib/asset';
import { DURATION, EASE } from '../lib/motion';

export const siteWrap = { maxWidth: 1240, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' };

const NAV_LINKS = [['Pillars', '#pillars'], ['Explore', '#explore'], ['Pricing', '#pricing'], ['FAQ', '#faq']];

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
        <div style={{ display: 'flex', gap: 26 }} className="site-nav-links">
          {NAV_LINKS.map(([l, h]) => (
            <a key={l} href={h} style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{l}</a>
          ))}
        </div>
        <Button variant="outline" size="small" className="animated-border" onClick={() => {
          const el = document.getElementById('pricing');
          if (el) window.scrollTo({ top: el.offsetTop - 88, behavior: 'smooth' });
        }}>
          Get Lifting Lab
        </Button>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu" aria-expanded={menuOpen}
          className="site-nav-toggle"
          style={{ display: 'none', background: 'none', border: 'none', padding: 8, cursor: 'pointer' }}
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
            <div style={{ ...siteWrap, display: 'grid', padding: '8px 0 16px' }}>
              {NAV_LINKS.map(([l, h]) => (
                <a key={l} href={h} onClick={() => setMenuOpen(false)}
                   style={{ font: 'var(--type-headline)', color: 'var(--text-secondary)', padding: '14px 0' }}>{l}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/** Section heading. `eyebrow` is the amber uppercase label the app uses. */
export function SiteHead({ eyebrow, title, body, center = false, max = 640, accent = 'var(--amber)' }) {
  return (
    <div style={{
      display: 'grid', gap: 14, maxWidth: max,
      margin: center ? '0 auto' : undefined, textAlign: center ? 'center' : 'left',
      justifyItems: center ? 'center' : 'start',
    }}>
      {eyebrow && <SectionLabel tone="amber" style={{ color: accent }}>{eyebrow}</SectionLabel>}
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900,
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
 * the image decodes, so nothing shifts (CLS) regardless of exact PNG dims. */
export function Shot({ src, alt, width = 300, caption, priority = false, lcp = false }) {
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
        <img
          src={src} alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...(lcp ? { fetchpriority: 'high' } : {})}
        />
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
// beyond plain scaling — see App Store Marketing Guidelines.
const APP_STORE_BADGE_HEIGHT = { large: 56, medium: 48, small: 40 };

/** App Store CTA — used in hero, pricing, and footer. Reads SITE.released:
 * pre-launch it's an inert, muted label (not a link, no badge — the Marketing
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
