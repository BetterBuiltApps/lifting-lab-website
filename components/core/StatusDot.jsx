import React from 'react';

const colors = {
  good: 'var(--good)', caution: 'var(--caution)', imbalanced: 'var(--bad)',
  none: 'var(--glyph-decorative)',
};

/** 10px dot for strength ratios and readiness rows. */
export function StatusDot({ status = 'none', size = 10, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-block', width: size, height: size, borderRadius: '50%',
        background: colors[status] || colors.none, flex: '0 0 auto', ...style,
      }}
      {...rest}
    />
  );
}
