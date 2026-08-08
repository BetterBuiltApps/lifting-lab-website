import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../design-system';
import { siteWrap } from './Chrome';
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion';

export function Problem() {
  const cards = [
    ['Your program lives in a spreadsheet.', 'Percentages calculated by hand, on a phone, covered in chalk.'],
    ['You missed. You don’t know why.', 'The lift felt fine until it wasn’t, and there’s nobody watching.'],
    ['Your first meet is in six weeks.', 'Nobody has explained what actually happens in the warm-up room.'],
  ];
  return (
    <section id="problem" style={{ padding: 'clamp(56px,6vw,90px) 0 0' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        variants={staggerContainer(0.08)}
        style={{ ...siteWrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}
      >
        {cards.map(([h, b]) => (
          <Card key={h} variants={fadeUpItem(16)} style={{ display: 'grid', gap: 10, alignContent: 'start' }}>
            {/* A real heading, not a styled div: this section has no SiteHead,
                so without it these three cards contribute nothing to the
                document outline and the section is unreachable by heading
                navigation. h2 because they sit directly under the h1. */}
            <h2 style={{ margin: 0, font: 'var(--type-title)', color: 'var(--text-primary)' }}>{h}</h2>
            <p style={{ margin: 0, font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{b}</p>
          </Card>
        ))}
      </motion.div>
    </section>
  );
}
