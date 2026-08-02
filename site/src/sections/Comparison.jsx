import React from 'react';
import { owlSiteWrap, SiteHead } from './Chrome';

const COMPARISON_ROWS = [
  ['Hardware required', 'No', 'No', 'Yes $249+'],
  ['Built for Olympic weightlifting', 'Yes', '–', '–'],
  ['Adapts today’s session to how you feel', 'Yes', '–', '–'],
  ['Periodized programs', 'Yes', '–', '–'],
  ['Lift phase breakdown', 'Yes', '–', '–'],
  ['Illustrated exercise library', 'Yes', '–', '–'],
  ['Miss diagnosis + corrective drills', 'Yes', '–', '–'],
  ['Meet day planning', 'Yes', '–', '–'],
  ['Sinclair, Robi, IWF classes', 'Yes', '–', '–'],
  ['Plate loading for your gym', 'Yes', '–', '–'],
  ['Bar path video', 'Yes', 'Yes', 'Yes'],
  ['Bar velocity', 'Camera', 'Camera', 'Sensor'],
  ['Imports hardware VBT data', 'Yes', '–', '–'],
  ['Unlimited free training history', 'Yes', '–', 'Yes'],
  ['Training log book & reflections', 'Yes', '–', '–'],
  ['Team roster & leaderboards', '–', 'Yes', 'Yes'],
  ['Android', '–', 'Yes', 'Yes'],
];

export function Comparison() {
  return (
    <section id="compare" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={owlSiteWrap}>
        <SiteHead center title="How OWL stacks up." max={640} />
        <div style={{ marginTop: 36, borderRadius: 16, overflow: 'hidden', border: 'var(--border-hairline-1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', background: 'var(--surface)' }} className="compare-head">
            <div />
            <div style={{ padding: 16, textAlign: 'center', font: 'var(--type-caption)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Metric</div>
            <div style={{ padding: 16, textAlign: 'center', font: 'var(--type-caption)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>OVR Connect</div>
            <div style={{ padding: 16, textAlign: 'center', background: 'var(--surface-elevated)', font: 'var(--type-headline)', fontWeight: 700, color: 'var(--amber)' }}>OWL</div>
          </div>
          {COMPARISON_ROWS.map((r, i) => (
            <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', background: i % 2 ? '#1e1e1e' : 'var(--bg)', borderTop: 'var(--border-hairline-1)' }} className="compare-row">
              <div style={{ padding: '15px 18px', font: 'var(--type-subheadline)', color: 'var(--text-primary)' }}>{r[0]}</div>
              <div className="owl-numeric" style={{ padding: 15, textAlign: 'center', font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{r[1]}</div>
              <div className="owl-numeric" style={{ padding: 15, textAlign: 'center', font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{r[2]}</div>
              <div className="owl-numeric" style={{ padding: 15, textAlign: 'center', background: 'rgba(245,166,35,0.06)', font: 'var(--type-subheadline)', fontWeight: 600, color: 'var(--text-primary)' }}>{r[3]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
