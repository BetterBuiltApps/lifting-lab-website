/* Shared building blocks for the landing page. */
import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Button, SectionLabel, Icon } from '../design-system';
import { SITE } from '../config';
import { asset } from '../lib/asset';
import { DURATION, EASE } from '../lib/motion';
import { useLightbox } from '../lib/Lightbox';
import { useDevice } from '../lib/device';

export const siteWrap = { maxWidth: 1240, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' };

/* Every href here must resolve to an id that exists. "Pillars" pointed at
   #pillars, which stopped existing when that section was absorbed into the arc,
   so the first nav item silently went nowhere. */
const NAV_LINKS = [['Watch', '#watch'], ['The cycle', '#cycle'], ['How it adapts', '#engine'], ['Pricing', '#pricing'], ['FAQ', '#faq'], ['Contact', '#contact']];

export function SiteNav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const prefersReduced = useReducedMotion();
  const toggleRef = React.useRef(null);
  // Escape closes the drawer and hands focus back to the toggle that opened it.
  React.useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') { setMenuOpen(false); toggleRef.current?.focus(); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(26,26,26,0.82)', backdropFilter: 'blur(20px)',
      borderBottom: 'var(--border-hairline-1)',
    }}>
    <nav aria-label="Primary">
      <div style={{ ...siteWrap, display: 'flex', alignItems: 'center', gap: 28, height: 68 }}>
        <a href="#main" aria-label="Lifting Lab, back to top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' }); }} style={{ display: 'inline-flex' }}>
          <img src={asset('assets/logo.svg')} alt="" style={{ height: 34 }} />
        </a>
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
          {/* A real link, so the pricing anchor is crawlable and works without
              JS; the click handler only adds the nav-height offset. */}
          <Button as="a" variant="outline" size="small" href="#pricing" onClick={(e) => {
            const el = document.getElementById('pricing');
            if (!el) return;
            e.preventDefault();
            window.scrollTo({ top: el.offsetTop - 88, behavior: prefersReduced ? 'auto' : 'smooth' });
          }}>
            Get Lifting Lab
          </Button>
        </span>
        <button
          ref={toggleRef}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu" aria-expanded={menuOpen} aria-controls="site-nav-drawer"
          className="site-nav-toggle"
        >
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} color="var(--text-primary)" />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="site-nav-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : DURATION.fade, ease: EASE.inOut }}
            style={{ overflow: 'hidden', borderTop: 'var(--border-hairline-1)' }}
          >
            <div style={{ ...siteWrap, display: 'grid', justifyItems: 'center', textAlign: 'center', padding: '8px 0 20px' }}>
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
    </header>
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
      display: 'grid', gap: 14,
      textAlign: center ? 'center' : 'left',
      justifyItems: center ? 'center' : 'start',
    }}>
      {/* The heading is not capped to `max`: that width is tuned for the
          body paragraph's reading measure, and a heading held to the same
          narrow box wraps to two lines far more readily than its own
          available column would require. The heading is free to use the
          rest of the section's real width instead. */}
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-extrabold)',
        fontSize: 'clamp(30px,3.4vw,48px)', lineHeight: 1.06, letterSpacing: '-1px',
        color: 'var(--text-primary)', textWrap: 'balance',
      }}>{title}</h2>
      {body && <p style={{ margin: 0, maxWidth: max, font: 'var(--type-body)', fontSize: 18, lineHeight: 1.5, color: 'var(--text-secondary)' }}>{body}</p>}
    </div>
  );
}

/** A still from a walkthrough video (see lib/stills.js): a headline above a phone, already composed as a 9:16 image, so it gets no
 * bezel of its own and is never cropped. Same hairline frame and shadow as the video, so stills and videos read as one family.
 * Explicit width and height reserve the space before the image decodes (no layout shift). The 600w file serves the page, the 900w
 * file opens in the lightbox. Pro stills carry their own "Pro" pill in the image itself. */
export function StillShot({ s, width = 260, caption, priority = false, lcp = false }) {
  const openLightbox = useLightbox();
  const height = Math.round((width * 16) / 9);
  return (
    <figure style={{ margin: 0, display: 'grid', gap: 12, justifyItems: 'center' }}>
      <button
        type="button"
        onClick={(e) => openLightbox({ src: asset(s.large), alt: s.alt, caption }, e.currentTarget)}
        aria-label={`View larger: ${s.alt}`}
        style={{ display: 'block', width, maxWidth: '100%', padding: 0, border: 'none', background: 'none', cursor: 'pointer', borderRadius: 28 }}
      >
        <motion.div
          whileHover={{ scale: 1.015, borderColor: 'rgba(255,255,255,0.22)' }}
          transition={{ duration: DURATION.spring, ease: EASE.spring }}
          style={{
            width: '100%', aspectRatio: '9 / 16', borderRadius: 28, overflow: 'hidden', background: '#000',
            border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 30px 70px rgba(0,0,0,0.55)',
          }}
        >
          <img
            src={asset(s.src)}
            srcSet={`${asset(s.src)} 600w, ${asset(s.large)} 900w`}
            sizes={`${width}px`}
            alt={s.alt}
            width={width}
            height={height}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            {...(lcp ? { fetchpriority: 'high' } : {})}
          />
        </motion.div>
      </button>
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

/** The unbranded "coming soon" pill, shared by the pre-release App Store
 * state and the Android state below: neither has a real badge to show (the
 * App Store Marketing Guidelines reserve the official badge for a live
 * listing; Google's badge is likewise only for a live Play listing), so both
 * fall back to this same honest,
 * unbranded slot rather than a dead or guideline-violating badge. */
function ComingSoonPill({ height, children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', height, boxSizing: 'border-box',
      padding: '0 22px', borderRadius: 'var(--radius-pill)',
      background: 'var(--amber-16)', border: '1px solid var(--amber-40)',
      font: 'var(--type-subheadline)', fontWeight: 700, color: 'var(--amber)',
    }}>
      {children}
    </span>
  );
}

/** App Store / Google Play CTA, used in hero and pricing. On Android
 * (`useDevice`, same UA sniff liftinglab.app/get uses), this reads
 * SITE.android: with a released listing it shows Google's official badge
 * linked to Play; before that it shows a "coming soon" pill rather than a
 * store badge nothing backs.
 *
 * Everywhere else, shows Apple's official badge (site/public/assets/,
 * downloaded per-app from toolbox.marketingtools.apple.com/app-store/) now
 * that SITE.released is true, per the Marketing Guidelines' own
 * badge-replacement rule ("replace with download badge immediately upon app
 * release"), linked to SITE.links.appStore. If a released listing is ever
 * pulled, flipping `released` back to false reverts this to the same
 * "coming soon" pill, see the !SITE.released branch below. */
export function AppStoreButton({ size = 'large' }) {
  const device = useDevice();
  const height = APP_STORE_BADGE_HEIGHT[size];

  if (device === 'android') {
    if (SITE.android.released && SITE.android.playStoreUrl) {
      return (
        <a href={SITE.android.playStoreUrl} aria-label="Get it on Google Play">
          {/* The official badge, scaled only. The artwork carries its own clear
              space (visible badge is 166 of 250px tall), so the element is
              sized to 250/166 of the height the visible badge should have. */}
          <img
            src={asset(SITE.googlePlayBadgeSrc)}
            alt="Get it on Google Play"
            width={Math.round(height * 1.506 * (646 / 250))}
            height={Math.round(height * 1.506)}
            style={{ display: 'block', height: height * 1.506, width: 'auto' }}
          />
        </a>
      );
    }
    return <ComingSoonPill height={height}>Coming soon to Google Play</ComingSoonPill>;
  }

  // Pre-release, this doesn't fall back to an unlinked copy of the real
  // badge: Apple's own badge-replacement rule reserves the "Download on the
  // App Store" artwork for an app that's actually live, so rendering it
  // before the listing exists is the guideline violation, not just the
  // link going nowhere. A plain, unbranded pill fills the same CTA slot
  // honestly instead, and costs nothing to swap out once `released` flips.
  if (!SITE.released) {
    return <ComingSoonPill height={height}>Coming soon to the App Store</ComingSoonPill>;
  }
  // Clear space is baked into the element itself, 1/4 of the badge's own
  // height on every side, so it's correct wherever this is dropped rather
  // than relying on a caller's layout gap to happen to be wide enough.
  const badge = (
    <img
      src={asset(SITE.appStoreBadgeSrc)}
      alt="Download on the App Store"
      style={{ height, display: 'block', padding: height / 4 }}
    />
  );
  return (
    <a href={SITE.links.appStore} aria-label={SITE.ctaPrimary}>
      {badge}
    </a>
  );
}

// Apple's on-screen minimum for this badge is 30px. It matches the App Store
// badge's own "large" height (56px) rather than sitting at its own minimum,
// since the two badges appear side by side in the hero, and two
// differently-sized official marks in one CTA row reads as unbalanced.
// The "smaller than your main message" placement rule this badge also carries
// is about the heading above it, not about matching a sibling badge, and 56px
// still clears its own 30px minimum with plenty of room.
const HEALTH_BADGE_HEIGHT = APP_STORE_BADGE_HEIGHT.large;

/** "Works with Apple Health" badge. Renders nothing until the real artwork is
 * in place (see SITE.healthBadgeReady in config.js), never a placeholder or a
 * hand-drawn stand-in: this is a licensed trademark, not decoration. Also
 * renders nothing on Android (`useDevice`): the Android app syncs with
 * Health Connect, not Apple Health, so this badge would be a false claim
 * there, not just an irrelevant one.
 *
 * Not a link (unlike AppStoreButton): Apple's guidelines describe this as a
 * compatibility mark placed next to the feature it describes, not a CTA, and
 * pairing it with a click target it doesn't control is not part of the
 * licensed use. Callers are responsible for the "one badge per promotion" and
 * "not alongside the Apple logo" rules, this component only renders the mark
 * itself plus its required clear space. */
export function HealthBadge() {
  const device = useDevice();
  if (device === 'android') return null;
  if (!SITE.healthBadgeReady) return null;
  return (
    <img
      src={asset(SITE.healthBadgeSrc)}
      alt="Works with Apple Health"
      style={{ height: HEALTH_BADGE_HEIGHT, display: 'block', padding: HEALTH_BADGE_HEIGHT / 4 }}
    />
  );
}
