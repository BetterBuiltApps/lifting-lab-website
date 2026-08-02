import React from 'react';
import { Card } from '../core/Card.jsx';

/** A large primary number with a unit and optional caption. For result displays. */
export function BigNumberCard({ number, unit, caption, accent = 'var(--amber)', style, ...rest }) {
  return (
    <Card style={{ paddingTop: 24, paddingBottom: 24, textAlign: 'center', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
        <span style={{ font: 'var(--type-big-number)', color: accent, fontVariantNumeric: 'tabular-nums' }}>{number}</span>
        {unit && <span style={{ font: 'var(--type-title)', color: 'var(--text-secondary)' }}>{unit}</span>}
      </div>
      {caption && (
        <div style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)', marginTop: 6 }}>{caption}</div>
      )}
    </Card>
  );
}
