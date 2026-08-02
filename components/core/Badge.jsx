import React from 'react';

const tones = {
  amber: { color: 'var(--amber)', background: 'var(--amber-16)' },
  make: { color: 'var(--make)', background: 'rgba(52,199,89,0.16)' },
  miss: { color: 'var(--miss)', background: 'rgba(255,59,48,0.16)' },
  neutral: { color: 'var(--text-secondary)', background: 'var(--surface-elevated)' },
};

/** The capsule chip: grade letters, tracking quality, phase tags, streak counts. */
export function Badge({ tone = 'amber', children, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        fontFamily: 'var(--font-display)', fontSize: 'var(--text-caption)', fontWeight: 900,
        padding: '4px 8px', borderRadius: 'var(--radius-pill)',
        ...tones[tone], ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
