import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { siteWrap, SiteHead } from './Chrome';
import { SITE } from '../config';
import { asset } from '../lib/asset';
import { DURATION, EASE } from '../lib/motion';

// The FAQ's real content. Exported so StructuredData.jsx can build the
// FAQPage JSON-LD from the exact same list rather than a restated copy that
// could drift from what this section actually renders.
export const FAQ_ITEMS = [
  ['Is it really free?', 'Yes, and generously. The daily dashboard, guided workouts, Build My Workout, the Beginner Foundation program, the PR tracker, the illustrated exercise library, every calculator, sharing, and three bar-path analyses a month never expire, never lock, and need no account. Pro is a separate add-on for unlimited analysis and the rest of the programs.'],
  ['Do I have to follow a fixed program?', 'No. Tell Lifting Lab how you feel, what\'s sore, and how much time you have, and it builds the session, or run one of the five periodized programs if you want a full cycle. Either way, nothing is locked: reorder, swap, or adjust anything before or during the workout.'],
  ['Do I need any hardware?', 'No. Bar Trace reads speed, path and phase timing from a phone video. No sensor, no clip-on unit, no pairing.'],
  ['How accurate is the video analysis?', 'It depends on the clip: side-on, whole bar in frame, steady phone. When tracking is weak, Lifting Lab says so and shows the evidence, rather than giving you a number it can\'t back up.'],
  ['Does my data leave my phone?', 'Video analysis runs entirely on-device. No clip or lift data is sent anywhere to score it. Training data syncs to your own private iCloud so it follows you across devices (clip sync is a separate opt-in), never to a third-party server, and there\'s no Lifting Lab account required.'],
  ['Kilos or pounds?', 'Both. Pick kg or lb in Settings and every screen follows your choice, plus there\'s a dedicated kg to lb converter in Tools. Everything is stored in kg internally, matching IWF competition and the way the sport is actually coached, and converted for display.'],
  ['Android?', 'Not yet. Lifting Lab is iOS-only today.'],
  ['Do I have to fill any of this in?', 'No. Every field is optional, nothing is scored, and skipping it costs you nothing. Lifting Lab suggests a reflection every few weeks and that suggestion is dismissible.'],
];

function FAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  const prefersReduced = useReducedMotion();
  const duration = prefersReduced ? 0 : DURATION.fade;
  // Stable ids tie the trigger to its panel for screen readers. The question
  // text is unique across the list, so it makes a usable slug without an
  // external counter that would break if the list is reordered.
  const id = React.useMemo(() => `faq-${q.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`, [q]);
  return (
    <div style={{ borderTop: 'var(--border-hairline-1)', padding: '18px 0' }}>
      <h3 style={{ margin: 0 }}>
        <button
          id={`${id}-trigger`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          style={{
            width: '100%', minHeight: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
            background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left',
            font: 'var(--type-headline)', color: 'var(--text-primary)',
          }}
        >
          {q}
          <motion.span
            aria-hidden="true"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration, ease: EASE.inOut }}
            style={{ font: 'var(--type-title)', color: 'var(--text-tertiary)' }}
          >+</motion.span>
        </button>
      </h3>
      {/* Always mounted, never conditionally rendered: the answer is the
          page's best-matching text for real search queries, and a crawler
          that skips the click (all of them but Google, and even Google only
          on a deferred pass) would otherwise see a page with no answers.
          Collapsed state is CSS height/opacity, same visual result as the
          old mount/unmount, but the text stays in the DOM either way. */}
      <motion.div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration, ease: EASE.inOut }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{ margin: '12px 0 0', font: 'var(--type-body)', color: 'var(--text-secondary)', maxWidth: '70ch' }}>{a}</p>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={{ ...siteWrap, maxWidth: 760 }}>
        <SiteHead title="Questions." max={640} />
        <div style={{ marginTop: 20 }}>
          {FAQ_ITEMS.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer style={{
      background: `linear-gradient(180deg, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.6) 40%, var(--bg) 92%),
        url(${asset('assets/backgrounds/footer-mens-jerk.webp')})`,
      backgroundSize: 'auto, cover',
      backgroundPosition: 'center, center 30%',
      backgroundRepeat: 'no-repeat',
      padding: 'clamp(48px,6vw,80px) 0 56px',
      borderTop: 'var(--border-hairline-1)',
    }}>
      <div style={{ ...siteWrap, display: 'grid', gap: 24, justifyItems: 'center', textAlign: 'center' }}>
        <img src={asset('assets/logo.svg')} alt="Lifting Lab" style={{ height: 40 }} />
        {/* Only renders links whose target exists, see SITE.links. A link that
            goes nowhere is worse than an absent one, and privacy/terms have no
            pages yet.

            Support used to be a third entry here, a mailto:. The contact form
            sits directly above this footer now and is the only route in, so the
            mailto went with it rather than offering two doors to one room. */}
        <nav aria-label="Legal" style={{ display: 'flex', gap: 22, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[['Privacy', SITE.links.privacy], ['Terms', SITE.links.terms]]
            .filter(([, href]) => href)
            .map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <p style={{ margin: 0, maxWidth: '68ch', font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>
          Built for competitive weightlifting. Sinclair coefficients are the official 2021 to 2024 IWF values.
          Lifting Lab is not affiliated with, endorsed by, or connected to the IWF, USA Weightlifting, or any
          equipment manufacturer.
          {/* App Store is referenced in copy throughout the page (the hero
              and pricing CTAs show the real badge), so this credit runs
              unconditionally, per the App Store Marketing
              Guidelines' credit line requirement. The Apple Health line only
              joins it once that badge actually ships, see
              SITE.healthBadgeReady, crediting a trademark for a mark the page
              doesn't show would be false. */}
          {' App Store is a service mark of Apple Inc.'}
          {SITE.healthBadgeReady && ' Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries.'}
        </p>
      </div>
    </footer>
  );
}
