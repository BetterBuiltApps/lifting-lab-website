import React from 'react';

const PLATE = {
  25: { color: 'var(--plate-25)', h: 1, w: 22 },
  20: { color: 'var(--plate-20)', h: 1, w: 20 },
  15: { color: 'var(--plate-15)', h: 1, w: 18 },
  10: { color: 'var(--plate-10)', h: 1, w: 14 },
  5: { color: 'var(--plate-5)', h: 0.72, w: 11 },
  2.5: { color: 'var(--plate-2-5)', h: 0.55, w: 8 },
  2: { color: 'var(--plate-2)', h: 0.55, w: 8 },
  1.5: { color: 'var(--plate-1-5)', h: 0.44, w: 6 },
  1: { color: 'var(--plate-1)', h: 0.44, w: 6 },
};
const FALLBACK = { color: 'var(--plate-chrome)', h: 0.34, w: 6 };

/** One side of a loaded bar in IWF competition colors, largest plate inward. */
export function PlateDiagram({ perSide = [], height = 120, style, ...rest }) {
  const seq = perSide.flatMap((p) => Array(p.count).fill(p.kg));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, height, ...style }} {...rest}>
      <div style={{ width: 40, height: 10, background: 'var(--bar-steel)' }} />
      <div style={{ width: 8, height: height * 0.35, background: 'rgba(142,142,147,0.9)', borderRadius: 2 }} />
      {seq.length === 0 ? (
        <span style={{ font: 'var(--type-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-secondary)', paddingLeft: 8 }}>
          empty bar
        </span>
      ) : seq.map((kg, i) => {
        const p = PLATE[kg] || FALLBACK;
        return (
          <div key={i} title={`${kg} kg`} style={{
            width: p.w, height: height * p.h, background: p.color,
            borderRadius: 'var(--radius-plate)', border: 'var(--border-plate)',
          }} />
        );
      })}
    </div>
  );
}
