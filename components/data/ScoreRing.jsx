import React from 'react';
import { Card } from '../core/Card.jsx';
import { SectionLabel } from '../core/SectionLabel.jsx';
import { ProgressBar } from '../core/ProgressBar.jsx';

/** The lift-score readout: amber ring + grade letter, total, and sub-bars. */
export function ScoreRing({ total, grade, straightness, smoothness, style, ...rest }) {
  const has = typeof total === 'number';
  const r = 50, c = 2 * Math.PI * r;
  return (
    <Card style={{ display: 'flex', gap: 20, alignItems: 'center', ...style }} {...rest}>
      <div style={{ position: 'relative', width: 110, height: 110, flex: '0 0 auto' }}>
        <svg width="110" height="110" viewBox="0 0 110 110" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="55" cy="55" r={r} fill="none" stroke="var(--surface-elevated)" strokeWidth="10" />
          {has && (
            <circle
              cx="55" cy="55" r={r} fill="none" stroke="var(--amber)" strokeWidth="10"
              strokeLinecap="round" strokeDasharray={c}
              strokeDashoffset={c * (1 - Math.min(1, total / 100))}
              style={{ transition: 'stroke-dashoffset var(--duration-spring) var(--ease-spring)' }}
            />
          )}
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
          font: 'var(--type-huge-number)', fontSize: 52,
          color: has ? 'var(--amber)' : 'var(--text-tertiary)',
        }}>{has ? grade : '-'}</div>
      </div>
      <div style={{ flex: 1, display: 'grid', gap: 10 }}>
        {has ? (
          <>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
              <span style={{ font: 'var(--type-big-number)', color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>{total}</span>
              <span style={{ font: 'var(--type-label)', color: 'var(--text-secondary)' }}>/100</span>
            </div>
            <SectionLabel>Path score</SectionLabel>
            <Sub label="Straightness" value={straightness} />
            <Sub label="Smoothness" value={smoothness} />
          </>
        ) : (
          <>
            <SectionLabel>Path score</SectionLabel>
            <div style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)' }}>
              Not enough tracking data to grade this lift.
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

function Sub({ label, value = 0 }) {
  return (
    <div style={{ display: 'grid', gap: 3 }}>
      <div style={{ font: 'var(--type-caption)', fontSize: 'var(--text-caption2)', color: 'var(--text-tertiary)' }}>{label}</div>
      <ProgressBar progress={value} height={6} />
    </div>
  );
}
