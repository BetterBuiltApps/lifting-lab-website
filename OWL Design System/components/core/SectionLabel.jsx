import React from 'react';

/** The uppercase caption label that sits above every grouped block. */
export function SectionLabel({ tone = 'secondary', children, style, ...rest }) {
  return (
    <div
      style={{
        font: 'var(--type-label)', letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: tone === 'amber' ? 'var(--amber)' : tone === 'tertiary' ? 'var(--text-tertiary)' : 'var(--text-secondary)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
