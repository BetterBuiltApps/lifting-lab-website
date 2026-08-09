import React from 'react';
import { Card } from '../core/Card.jsx';
import { SectionLabel } from '../core/SectionLabel.jsx';

const sizes = { medium: 'var(--text-stat-value)', large: 40 };

/** A compact labeled statistic, the unit of every stat strip and grid. */
export function StatCard({ value, label, accent = 'var(--text-primary)', size = 'medium', style, ...rest }) {
  return (
    <Card padding={14} style={{ display: 'grid', gap: 4, ...style }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-numeric)', fontWeight: size === 'large' ? 700 : 600,
        fontSize: sizes[size], lineHeight: 'var(--leading-snug)', color: accent,
        fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap',
      }}>{value}</div>
      <SectionLabel>{label}</SectionLabel>
    </Card>
  );
}
