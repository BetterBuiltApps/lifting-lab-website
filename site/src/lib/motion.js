/* Motion primitives mirroring tokens/motion.css. Duration/cubic-bezier based
   rather than spring physics: this scope has no drag or velocity-aware gestures
   that would need real springs.

   These must stay numerically identical to the CSS custom properties — Motion
   can't read a CSS variable into a JS transition, so the values are duplicated
   by hand and the comment on each line names its counterpart. */

export const EASE = {
  pop: [0.16, 1, 0.3, 1], // --ease-pop
  spring: [0.22, 1, 0.36, 1], // --ease-spring
  inOut: [0.4, 0, 0.2, 1], // --ease-in-out
};

export const DURATION = {
  press: 0.25, // --duration-press
  spring: 0.35, // --duration-spring
  fade: 0.4, // --duration-fade
};

// Mirrors --press-scale. Motion can't resolve a CSS custom property into a
// transform value, so this has no automatic bridge — keep in sync by hand.
export const PRESS_SCALE = 0.93;

/** Scroll-reveal idiom: a "state crossfade" (fade/in-out), not spring/pop —
 * those stay reserved for value-settling and press feedback so reveals stay
 * quiet on repeat scrolling. */
export const fadeUpItem = (distance = 16) => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.fade, ease: EASE.inOut } },
});

/** Directional reveal: content arrives from the edge it visually sits at. */
export const slideFade = (direction = 'up', distance = 24) => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const sign = direction === 'left' || direction === 'up' ? -1 : 1;
  return {
    hidden: { opacity: 0, [axis]: sign * distance },
    visible: { opacity: 1, [axis]: 0, transition: { duration: DURATION.fade, ease: EASE.inOut } },
  };
};

/** No-op visual container whose only job is to stagger children's "visible" variant. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const VIEWPORT_ONCE = { once: true, amount: 0.3 };
