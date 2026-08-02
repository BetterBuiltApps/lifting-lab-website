import React from 'react';

/**
 * WeightField — a titled weight row that stores kg and edits in the athlete's
 * preferred unit. Right-aligned value, unit suffix, decimal keypad.
 */
export function WeightField({ title, value, unit = 'kg', onChange, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, padding: '10px 0', ...style,
    }} {...rest}>
      <label style={{ font: 'var(--type-body)', color: 'var(--text-secondary)', flex: 1 }}>{title}</label>
      <input
        type="text" inputMode="decimal" value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{
          maxWidth: 110, textAlign: 'right', background: 'transparent', border: 'none', outline: 'none',
          font: 'var(--type-headline)', color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums',
        }}
      />
      <span style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{unit}</span>
    </div>
  );
}
