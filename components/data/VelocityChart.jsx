import React from 'react';
import { PHASE_COLORS } from './PhaseTimeline.jsx';

/**
 * VelocityChartCard — bar speed over the lift, phase-colored, doubling as a
 * second scrubber. Click or drag anywhere to seek.
 */
export function VelocityChart({
  samples = [], phases = [], currentTime = 0, height = 140, onSeek, style, ...rest
}) {
  const ref = React.useRef(null);
  const t0 = samples.length ? samples[0].time : 0;
  const t1 = samples.length ? samples[samples.length - 1].time : 1;
  const vMax = Math.max(0.5, ...samples.map((s) => s.velocity)) * 1.1;
  const W = 1000, H = 300;
  const x = (t) => ((t - t0) / (t1 - t0 || 1)) * W;
  const y = (v) => H - (v / vMax) * H;

  const runs = phases.length
    ? phases.map((p) => ({
        color: PHASE_COLORS[p.kind],
        pts: samples.filter((s) => s.time >= p.start && s.time <= p.end),
      })).filter((r) => r.pts.length > 1)
    : [{ color: 'var(--amber)', pts: samples }];

  const now = samples.length
    ? (samples.reduce((a, b) => (Math.abs(b.time - currentTime) < Math.abs(a.time - currentTime) ? b : a)).velocity)
    : 0;

  function seek(e) {
    if (!onSeek || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    onSeek(t0 + ((e.clientX - r.left) / r.width) * (t1 - t0));
  }

  return (
    <div style={{
      background: 'var(--surface)', borderRadius: 'var(--radius-row)', padding: 14,
      display: 'grid', gap: 10, ...style,
    }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ font: 'var(--type-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Bar Speed</span>
        <span style={{ flex: 1 }} />
        <span style={{ font: 'var(--type-label)', color: 'var(--amber)', fontVariantNumeric: 'tabular-nums' }}>{now.toFixed(2)} m/s</span>
      </div>
      <div
        ref={ref}
        onPointerDown={seek}
        onPointerMove={(e) => e.buttons === 1 && seek(e)}
        style={{ height, cursor: onSeek ? 'ew-resize' : 'default', touchAction: 'none' }}
      >
        <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="var(--hairline)" strokeWidth="1.5" />
          ))}
          {runs.map((r, i) => (
            <polyline
              key={i} fill="none" stroke={r.color} strokeWidth="6"
              strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"
              points={r.pts.map((s) => `${x(s.time)},${y(s.velocity)}`).join(' ')}
            />
          ))}
          <line
            x1={x(currentTime)} x2={x(currentTime)} y1="0" y2={H}
            stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}
