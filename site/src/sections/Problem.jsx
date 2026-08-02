import React from 'react';
import { Card } from '../design-system';
import { owlSiteWrap } from './Chrome';

export function Problem() {
  const cards = [
    ['Your program lives in a spreadsheet.', 'Percentages calculated by hand, on a phone, covered in chalk.'],
    ['You missed. You don’t know why.', 'The lift felt fine until it wasn’t, and there’s nobody watching.'],
    ['Your first meet is in six weeks.', 'Nobody has explained what actually happens in the warm-up room.'],
  ];
  return (
    <section id="problem" style={{ padding: 'clamp(56px,6vw,90px) 0 0' }}>
      <div style={{ ...owlSiteWrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
        {cards.map(([h, b]) => (
          <Card key={h} style={{ display: 'grid', gap: 10, alignContent: 'start' }}>
            <div style={{ font: 'var(--type-title)', color: 'var(--text-primary)' }}>{h}</div>
            <div style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{b}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
