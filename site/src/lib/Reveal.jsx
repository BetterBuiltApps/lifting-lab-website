import React from 'react';
import { motion } from 'motion/react';
import { slideFade, VIEWPORT_ONCE } from './motion';

/** Single-block scroll-reveal. For composite/staggered layouts (multiple
 * columns/cards that need per-child variants), compose motion.div + the
 * primitives in ./motion directly instead of wrapping in this. */
export function Reveal({ children, direction = 'up', distance = 20, amount = 0.3, className, style, ...rest }) {
  return (
    <motion.div
      variants={slideFade(direction, distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT_ONCE, amount }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
