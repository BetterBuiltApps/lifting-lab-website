import React from 'react';

/** The standard elevated card surface, bpCard(). Fill only, no border, no shadow. */
export function Card({ padding = 16, radius = 'card', children, style, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: radius === 'card' ? 'var(--radius-card)' : 'var(--radius-row)',
        padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
