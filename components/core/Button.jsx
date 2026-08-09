import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  fontFamily: 'var(--font-display)', fontWeight: 600, border: 'none',
  borderRadius: 'var(--radius-button)', cursor: 'pointer',
  transition: 'transform var(--duration-press) var(--ease-pop), opacity 150ms linear',
  WebkitTapHighlightColor: 'transparent',
};

const sizes = {
  // 52pt is the app's primary CTA height; 48 the secondary capture buttons.
  large: { minHeight: 'var(--tap-target-big)', fontSize: 'var(--text-headline)', padding: '0 20px' },
  medium: { minHeight: 48, fontSize: 'var(--text-headline)', padding: '0 18px' },
  small: { minHeight: 36, fontSize: 'var(--text-subheadline)', padding: '0 14px' },
};

const variants = {
  primary: { background: 'var(--amber)', color: 'var(--accent-fg)' },
  gradient: { background: 'var(--gradient-amber)', color: 'var(--accent-fg)' },
  make: { background: 'var(--make)', color: '#fff' },
  miss: { background: 'var(--miss)', color: '#fff' },
  secondary: { background: 'var(--surface-elevated)', color: 'var(--text-primary)' },
  plain: { background: 'transparent', color: 'var(--amber)' },
};

/** The app's button. One amber fill, black label, never an amber label on dark. */
export function Button({
  variant = 'primary', size = 'large', full = false, disabled = false,
  icon = null, children, style, ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <button
      disabled={disabled}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        ...base, ...sizes[size], ...variants[variant],
        width: full ? '100%' : undefined,
        opacity: disabled ? 0.35 : 1,
        cursor: disabled ? 'default' : 'pointer',
        transform: pressed && !disabled ? 'scale(var(--press-scale))' : 'scale(1)',
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
