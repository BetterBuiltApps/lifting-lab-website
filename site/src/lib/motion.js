/* Motion primitives derived from the app's existing motion tokens
   (tokens/motion.css). Kept duration/cubic-bezier based rather than spring
   physics — there's no reliable conversion from the bounce-tuned curves, and
   this scope has no drag/velocity-aware gestures that would need real springs. */

export const EASE = {
  pop: [0.28, 1.66, 0.6, 1], // --ease-pop
  spring: [0.34, 1.42, 0.64, 1], // --ease-spring
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
 * those stay reserved for value-settling and press feedback so reveals don't
 * read as a bounce/gimmick on repeat scrolling. */
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
