import React from 'react';
import { motion } from 'motion/react';

/** The standard elevated card surface — bpCard(). Fill only, no border, no shadow.
 * motion.div so callers can pass variants/whileInView straight through this API. */
export function Card({ padding = 16, radius = 'card', children, style, ...rest }) {
  return (
    <motion.div
      style={{
        background: 'var(--surface)',
        borderRadius: radius === 'card' ? 'var(--radius-card)' : 'var(--radius-row)',
        padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
