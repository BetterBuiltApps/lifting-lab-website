import React from 'react';

/** TimerRingView, the rest timer. Green when the rest is up; pulses in endgame. */
export function TimerRing({ progress = 0, centerText = '0:00', emphasized = false, pulsing = false, size = 160, style, ...rest }) {
  const r = size / 2 - 5, c = 2 * Math.PI * r;
  return (
    <div style={{
      position: 'relative', width: size, height: size,
      animation: pulsing ? 'owl-pulse var(--duration-pulse) var(--ease-in-out) infinite alternate' : undefined,
      ...style,
    }} {...rest}>
      <style>{'@keyframes owl-pulse{to{transform:scale(var(--pulse-scale))}}'}</style>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-elevated)" strokeWidth="10" />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={emphasized ? 'var(--make)' : 'var(--amber)'} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - Math.min(1, Math.max(0, progress)))}
          style={{ transition: 'stroke-dashoffset var(--duration-scrub) linear, stroke var(--duration-fade) var(--ease-in-out)' }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
        fontFamily: 'var(--font-numeric)', fontSize: 'var(--text-timer)', fontWeight: 900,
        fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)',
      }}>{centerText}</div>
    </div>
  );
}
