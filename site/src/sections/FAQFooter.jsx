import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { owlSiteWrap, SiteHead, AppStoreButton } from './Chrome';
import { OWL_SITE } from '../config';
import { asset } from '../lib/asset';
import { DURATION, EASE, fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion';

function FAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  const prefersReduced = useReducedMotion();
  const duration = prefersReduced ? 0 : DURATION.fade;
  return (
    <motion.div variants={fadeUpItem(12)} style={{ borderTop: 'var(--border-hairline-1)', padding: '18px 0' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
        background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left',
        font: 'var(--type-headline)', color: 'var(--text-primary)',
      }}>
        {q}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration, ease: EASE.inOut }}
          style={{ font: 'var(--type-title)', color: 'var(--text-tertiary)' }}
        >+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
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
    </motion.div>
  );
}

export function FAQ() {
  const items = [
    ['Is OWL out yet?', 'Not yet — OWL is in active development. This site previews what’s coming, and the App Store link goes live at launch.'],
    ['Is it really free?', 'Yes. Training log, the adaptive daily builder, all five programs, the PR tracker, the illustrated exercise library, every calculator, and three bar-path analyses a month never expire and never lock.'],
    ['Do I have to follow a fixed program?', 'No. Tell OWL how you feel, what’s sore, and how much time you have, and it builds the session — or run one of the five periodized programs if you want a full cycle. Either way, nothing is locked: reorder, swap, or adjust anything before or during the workout.'],
    ['Do I need any hardware?', 'No. Bar Trace reads speed, path and phase timing from a phone video — no sensor, no clip-on unit, no pairing.'],
    ['How accurate is the video analysis?', 'It depends on the clip: side-on, whole bar in frame, steady phone. When tracking is weak, OWL says so and shows the evidence, rather than giving you a number it can’t back up.'],
    ['Does my data leave my phone?', 'No. Analysis runs on-device. Nothing is uploaded, and there’s no account required to use it.'],
    ['Kilos only?', 'Yes — kg is the only unit, matching IWF competition and the way the sport is actually coached.'],
    ['Android?', 'Not yet. OWL is iOS-only today.'],
    ['Do I have to fill any of this in?', 'No. Every field is optional, nothing is scored, and skipping it costs you nothing. OWL suggests a reflection every few weeks and that suggestion is dismissible.'],
  ];
  return (
    <section id="faq" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={{ ...owlSiteWrap, maxWidth: 760 }}>
        <SiteHead title="Questions." max={640} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.05)}
          style={{ marginTop: 20 }}
        >
          {items.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
        </motion.div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ padding: 'clamp(48px,6vw,80px) 0 56px', borderTop: 'var(--border-hairline-1)' }}>
      <div style={{ ...owlSiteWrap, display: 'grid', gap: 24, justifyItems: 'center', textAlign: 'center' }}>
        <img src={asset('assets/owl-logo.svg')} alt="OWL" style={{ height: 40 }} />
        <AppStoreButton size="medium" />
        <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={OWL_SITE.links.privacy}>Privacy</a>
          <a href={OWL_SITE.links.terms}>Terms</a>
          <a href={OWL_SITE.links.support}>Support</a>
        </div>
        <p style={{ margin: 0, maxWidth: '68ch', font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>
          Built for Olympic weightlifting. Sinclair coefficients are the official 2021–2024 IWF values.
          World-record data should be verified against iwf.sport. OWL is not affiliated with, endorsed by,
          or connected to the IWF, USA Weightlifting, or any equipment manufacturer.
        </p>
      </div>
    </footer>
  );
}
