import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { siteWrap, SiteHead, AppStoreButton } from './Chrome';
import { SITE } from '../config';
import { asset } from '../lib/asset';
import { DURATION, EASE } from '../lib/motion';

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
            width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration, ease: EASE.inOut }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ margin: '12px 0 0', font: 'var(--type-body)', color: 'var(--text-secondary)', maxWidth: '70ch' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const items = [
    ['Is Lifting Lab out yet?', 'Not yet — Lifting Lab is in active development. This site previews what’s coming, and the App Store link goes live at launch.'],
    ['Is it really free?', 'Yes. Training log, the adaptive daily builder, all five programs, the PR tracker, the illustrated exercise library, every calculator, and three bar-path analyses a month never expire and never lock.'],
    ['Do I have to follow a fixed program?', 'No. Tell Lifting Lab how you feel, what’s sore, and how much time you have, and it builds the session — or run one of the five periodized programs if you want a full cycle. Either way, nothing is locked: reorder, swap, or adjust anything before or during the workout.'],
    ['Do I need any hardware?', 'No. Bar Trace reads speed, path and phase timing from a phone video — no sensor, no clip-on unit, no pairing.'],
    ['How accurate is the video analysis?', 'It depends on the clip: side-on, whole bar in frame, steady phone. When tracking is weak, Lifting Lab says so and shows the evidence, rather than giving you a number it can’t back up.'],
    ['Does my data leave my phone?', 'Video analysis runs entirely on-device — no clip or lift data is sent anywhere to score it. Training data syncs to your own private iCloud so it follows you across devices (clip sync is a separate opt-in), never to a third-party server, and there’s no Lifting Lab account required.'],
    ['Kilos or pounds?', 'Both — pick kg or lb in Settings and every screen follows your choice, plus there’s a dedicated kg ↔ lb converter in Tools. Everything is stored in kg internally, matching IWF competition and the way the sport is actually coached, and converted for display.'],
    ['Android?', 'Not yet. Lifting Lab is iOS-only today.'],
    ['Do I have to fill any of this in?', 'No. Every field is optional, nothing is scored, and skipping it costs you nothing. Lifting Lab suggests a reflection every few weeks and that suggestion is dismissible.'],
  ];
  return (
    <section id="faq" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={{ ...siteWrap, maxWidth: 760 }}>
        <SiteHead title="Questions." max={640} />
        <div style={{ marginTop: 20 }}>
          {items.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ padding: 'clamp(48px,6vw,80px) 0 56px', borderTop: 'var(--border-hairline-1)' }}>
      <div style={{ ...siteWrap, display: 'grid', gap: 24, justifyItems: 'center', textAlign: 'center' }}>
        <img src={asset('assets/logo.svg')} alt="Lifting Lab" style={{ height: 40 }} />
        <AppStoreButton size="medium" />
        {/* Only renders links whose target exists — see SITE.links. A link that
            goes nowhere is worse than an absent one, and privacy/terms have no
            pages yet. */}
        <nav aria-label="Legal and support" style={{ display: 'flex', gap: 22, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[['Privacy', SITE.links.privacy], ['Terms', SITE.links.terms], ['Support', SITE.links.support]]
            .filter(([, href]) => href)
            .map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <p style={{ margin: 0, maxWidth: '68ch', font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>
          Built for competitive weightlifting. Sinclair coefficients are the official 2021–2024 IWF values.
          World-record data should be verified against iwf.sport. Lifting Lab is not affiliated with, endorsed by,
          or connected to the IWF, USA Weightlifting, or any equipment manufacturer.
        </p>
      </div>
    </footer>
  );
}
