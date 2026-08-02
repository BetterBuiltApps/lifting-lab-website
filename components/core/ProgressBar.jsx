import React from 'react';

/** JuicyProgressBar: a gradient capsule that springs to its value. */
export function ProgressBar({ progress = 0, height = 8, gradient = 'progress', style, ...rest }) {
  const p = Math.min(1, Math.max(0, progress));
  return (
    <div
      style={{
        height, borderRadius: 'var(--radius-pill)', background: 'var(--surface-elevated)',
        overflow: 'hidden', ...style,
      }}
      {...rest}
    >
      {p > 0 && (
        <div
          style={{
            height: '100%', width: `max(${height}px, ${p * 100}%)`,
            borderRadius: 'var(--radius-pill)',
            background: gradient === 'progress' ? 'var(--gradient-progress)' : 'var(--gradient-amber)',
            transition: 'width var(--duration-spring) var(--ease-spring)',
          }}
        />
      )}
    </div>
  );
}
