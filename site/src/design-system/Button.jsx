import React from 'react';
import { motion } from 'motion/react';
import { DURATION, EASE, PRESS_SCALE } from '../lib/motion';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  fontFamily: 'var(--font-display)', fontWeight: 600, border: 'none',
  borderRadius: 'var(--radius-button)', cursor: 'pointer', boxSizing: 'border-box',
  transition: 'opacity 150ms linear',
  WebkitTapHighlightColor: 'transparent',
};

const sizes = {
  // 52pt is the app's primary CTA height; 48 the secondary capture buttons.
  large: { minHeight: 'var(--tap-target-big)', fontSize: 'var(--text-headline)', padding: '0 20px' },
  medium: { minHeight: 48, fontSize: 'var(--text-headline)', padding: '0 18px' },
  small: { minHeight: 44, fontSize: 'var(--text-subheadline)', padding: '0 14px' },
};

const variants = {
  primary: { background: 'var(--amber)', color: 'var(--accent-fg)' },
  gradient: { background: 'var(--gradient-amber)', color: 'var(--accent-fg)' },
  make: { background: 'var(--make)', color: '#fff' },
  miss: { background: 'var(--miss)', color: '#fff' },
  secondary: { background: 'var(--surface-elevated)', color: 'var(--text-primary)' },
  plain: { background: 'transparent', color: 'var(--amber)' },
  outline: { background: 'transparent', color: 'var(--amber)', border: '1.5px solid var(--amber)' },
};

/** The app's button. One amber fill, black label, never an amber label on dark.
 * Hover settles on the spring idiom (scale + brightness); tap pops on the press
 * idiom (scale to --press-scale), two distinct, already-idiomatic feels. */
export function Button({
  variant = 'primary', size = 'large', full = false, disabled = false,
  icon = null, children, style, ...rest
}) {
  return (
    <motion.button
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.02, filter: 'brightness(1.08)', transition: { duration: DURATION.spring, ease: EASE.spring } }}
      whileTap={disabled ? undefined : { scale: PRESS_SCALE, transition: { duration: DURATION.press, ease: EASE.pop } }}
      style={{
        ...base, ...sizes[size], ...variants[variant],
        width: full ? '100%' : undefined,
        opacity: disabled ? 0.35 : 1,
        cursor: disabled ? 'default' : 'pointer',
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </motion.button>
  );
}
