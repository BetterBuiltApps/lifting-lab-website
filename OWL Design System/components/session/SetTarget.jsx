import React from 'react';
import { Card } from '../core/Card.jsx';
import { SectionLabel } from '../core/SectionLabel.jsx';
import { Icon } from '../core/Icon.jsx';

/**
 * The set-target card at the top of an active set: exercise name, set count,
 * coach cue, the big amber load with its rep suffix, percent of PR, then the
 * per-side loading as plain text and the film affordance.
 */
export function SetTarget({
  exercise, weight, unit = 'kg', reps, setLabel, cue, percentOfPR,
  loadPerSide, onFilm, onEditWeight, style, ...rest
}) {
  return (
    <Card style={{ display: 'grid', gap: 8, justifyItems: 'center', textAlign: 'center', paddingTop: 20, paddingBottom: 20, ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ font: 'var(--type-exercise-name)', color: 'var(--text-primary)' }}>{exercise}</span>
        <Icon name="info" size={18} color="var(--glyph-decorative)" />
      </div>
      {setLabel && <div style={{ font: 'var(--type-body)', color: 'var(--text-secondary)' }}>{setLabel}</div>}
      {cue && <div style={{ font: 'var(--type-body)', fontStyle: 'italic', color: 'var(--text-tertiary)' }}>“{cue}”</div>}
      <button onClick={onEditWeight} style={{
        background: 'none', border: 'none', padding: 0, margin: '6px 0 0',
        cursor: onEditWeight ? 'pointer' : 'default',
        display: 'flex', alignItems: 'baseline', gap: 6,
      }}>
        <span style={{ font: 'var(--type-big-number)', color: 'var(--amber)', fontVariantNumeric: 'tabular-nums' }}>{weight}</span>
        <span style={{ font: 'var(--type-title)', color: 'var(--text-secondary)' }}>
          {unit}{reps ? ` × ${reps}` : ''}
        </span>
      </button>
      {percentOfPR && <div style={{ font: 'var(--type-body)', color: 'var(--text-secondary)' }}>{percentOfPR}</div>}
      {loadPerSide && (
        <>
          <div style={{ height: 1, background: 'var(--hairline)', width: '100%', margin: '10px 0 2px' }} />
          <SectionLabel>Load / side</SectionLabel>
          <div style={{ font: 'var(--type-title)', fontWeight: 600, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>{loadPerSide}</div>
        </>
      )}
      {onFilm && (
        <button onClick={onFilm} style={{
          marginTop: 6, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
          padding: '10px 18px', borderRadius: 'var(--radius-pill)', border: 'none',
          background: 'var(--surface-elevated)', color: 'var(--amber)', font: 'var(--type-headline)',
        }}>
          <Icon name="video" size={18} color="var(--amber)" />Film this set
        </button>
      )}
    </Card>
  );
}
