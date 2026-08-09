import React from 'react';
import { motion } from 'motion/react';
import { Card, SectionLabel } from '../design-system';
import { siteWrap, SiteHead } from './Chrome';
import { fadeUpItem, slideFade, staggerContainer, VIEWPORT_ONCE } from '../lib/motion';

// Card is both the right-column reveal target (arrives from the right) AND the
// stagger trigger for its own timeline rows, merge the two into one variant
// set so a single "visible" state drives both.
const cardVariant = (() => {
  const base = slideFade('right', 24);
  return {
    hidden: base.hidden,
    visible: { ...base.visible, transition: { ...base.visible.transition, staggerChildren: 0.06 } },
  };
})();

function LogBookTimeline() {
  const entries = [
    { kind: 'reflection', label: 'Reflection', title: 'Weeks 9-11', sub: 'Sleep: Solid · Fatigue: Heavy' },
    { kind: 'session', label: 'Session', title: 'Snatch + Back Squat', sub: '“Third rep felt heavy, backed off 5kg.”' },
    { kind: 'session', label: 'Session', title: 'Clean & Jerk technique', sub: 'No notes' },
    { kind: 'reflection', label: 'Reflection', title: 'Weeks 6-8', sub: 'Fatigue: Wrecked · Consistency: Patchy' },
  ];
  return (
    <Card variants={cardVariant} style={{ background: 'var(--bg)', padding: 22, display: 'grid', gap: 4 }}>
      <SectionLabel tone="secondary" style={{ marginBottom: 8 }}>November</SectionLabel>
      {entries.map((e, i) => (
        <motion.div key={i} variants={fadeUpItem(12)} style={{ display: 'flex', gap: 14, padding: '12px 0', borderTop: i ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
          <span style={{
            flexShrink: 0, marginTop: 3, width: 8, height: 8, borderRadius: '50%',
            background: e.kind === 'reflection' ? 'var(--amber)' : 'var(--text-tertiary)',
          }} />
          <div style={{ display: 'grid', gap: 2 }}>
            <span style={{ font: 'var(--type-caption)', color: e.kind === 'reflection' ? 'var(--amber)' : 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{e.label}</span>
            <span style={{ font: 'var(--type-subheadline)', fontWeight: 700, color: 'var(--text-primary)' }}>{e.title}</span>
            <span style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)' }}>{e.sub}</span>
          </div>
        </motion.div>
      ))}
    </Card>
  );
}

export function LogBook() {
  return (
    <section id="logbook" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      {/* Centred column, not a text-beside-image split: the timeline is the
          point, and the arc above has already spent the page's budget for
          two-column rows. */}
      <div style={{ ...siteWrap, display: 'grid', gap: 32, justifyItems: 'center', textAlign: 'center' }}>
        <SiteHead center title="A log book for what a sensor can't measure." max={620}
          body="Sessions and reflections land on one timeline. Nothing is required, nothing is scored, and the chart knows five-out-of-five sleep is good news while five-out-of-five fatigue is not." />
        <div style={{ width: '100%', maxWidth: 520, textAlign: 'left' }}>
          <LogBookTimeline />
        </div>
      </div>
    </section>
  );
}
