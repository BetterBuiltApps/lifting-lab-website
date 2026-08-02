import React from 'react';
import { SectionLabel } from '../core/SectionLabel.jsx';

export const PHASE_COLORS = {
  firstPull: 'var(--phase-first-pull)',
  transition: 'var(--phase-transition)',
  secondPull: 'var(--phase-second-pull)',
  turnover: 'var(--phase-turnover)',
  catch: 'var(--phase-catch)',
};

/** PhaseBreakdownCard: proportional timeline, per-phase rows, and the insight line. */
export function PhaseTimeline({ phases = [], insight, insightTone = 'secondary', style, ...rest }) {
  const total = phases.reduce((s, p) => s + p.duration, 0) || 0.01;
  return (
    <div style={{
      background: 'var(--surface)', borderRadius: 'var(--radius-row)', padding: 14,
      display: 'grid', gap: 12, ...style,
    }} {...rest}>
      <SectionLabel>Lift Phases</SectionLabel>
      <div style={{ display: 'flex', gap: 1, height: 8 }}>
        {phases.map((p) => (
          <div key={p.kind} style={{
            flex: `0 0 ${(p.duration / total) * 100}%`, minWidth: 3,
            background: PHASE_COLORS[p.kind], borderRadius: 2,
          }} />
        ))}
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        {phases.map((p) => (
          <div key={p.kind} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: PHASE_COLORS[p.kind], flex: '0 0 auto' }} />
            <span style={{ font: 'var(--type-subheadline)', color: 'var(--text-primary)' }}>{p.label}</span>
            <span style={{ flex: 1 }} />
            {p.peakVelocity > 0.05 && (
              <span style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>
                {p.peakVelocity.toFixed(2)} m/s
              </span>
            )}
            <span style={{
              font: 'var(--type-caption)', color: 'var(--text-tertiary)',
              fontVariantNumeric: 'tabular-nums', width: 52, textAlign: 'right',
            }}>{p.duration.toFixed(2)} s</span>
          </div>
        ))}
      </div>
      {insight && (
        <div style={{
          font: 'var(--type-caption)',
          color: insightTone === 'caution' ? 'var(--caution)' : 'var(--text-secondary)',
        }}>{insight}</div>
      )}
    </div>
  );
}
