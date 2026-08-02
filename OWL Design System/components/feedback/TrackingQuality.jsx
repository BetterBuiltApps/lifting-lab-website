import React from 'react';

const TONES = {
  good: { dot: 'var(--good)', word: 'Good' },
  fair: { dot: 'var(--caution)', word: 'Fair' },
  poor: { dot: 'var(--bad)', word: 'Poor' },
};

/**
 * The tracking-honesty card. A colored dot, the verdict, the raw evidence on the
 * right, and a plain-language sentence saying what that means for the numbers
 * above it — and what to do differently next time.
 */
export function TrackingQuality({ quality = 'good', evidence, note, style, ...rest }) {
  const t = TONES[quality] || TONES.good;
  return (
    <div style={{
      background: 'var(--surface)', borderRadius: 'var(--radius-row)', padding: 14,
      display: 'grid', gap: 8, ...style,
    }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: t.dot, flex: '0 0 auto' }} />
        <span style={{ font: 'var(--type-headline)', color: 'var(--text-primary)' }}>Tracking: {t.word}</span>
        <span style={{ flex: 1 }} />
        {evidence && (
          <span style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>{evidence}</span>
        )}
      </div>
      {note && (
        <div style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{note}</div>
      )}
    </div>
  );
}

/**
 * "What the trace says" — the prose verdict card. Its heading is sentence case
 * and secondary-weight, deliberately quieter than a SectionLabel, because the
 * sentence underneath is the content.
 */
export function TraceVerdict({ heading = 'What the trace says', children, style, ...rest }) {
  return (
    <div style={{
      background: 'var(--surface)', borderRadius: 'var(--radius-row)', padding: 14,
      display: 'grid', gap: 10, ...style,
    }} {...rest}>
      <div style={{ font: 'var(--type-subheadline)', fontWeight: 600, color: 'var(--text-secondary)' }}>{heading}</div>
      <div style={{ font: 'var(--type-body)', color: 'var(--text-primary)' }}>{children}</div>
    </div>
  );
}
