import React from 'react';

/** PR progress line. No chart library — a single stroked path. */
export function Sparkline({ values = [], color = 'var(--amber)', width = 110, height = 32, style, ...rest }) {
  const enough = values.length >= 2;
  const min = Math.min(...values), max = Math.max(...values), range = max - min;
  const pts = enough
    ? values.map((v, i) => {
        const x = (i / (values.length - 1)) * width;
        const norm = range > 0 ? (v - min) / range : 0.5;
        return `${x},${height * (1 - norm)}`;
      }).join(' ')
    : `0,${height / 2} ${width},${height / 2}`;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible', ...style }} {...rest}>
      <polyline
        points={pts} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        stroke={enough ? color : 'var(--glyph-decorative)'}
        strokeDasharray={enough ? undefined : '3 3'}
      />
    </svg>
  );
}
