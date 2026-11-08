import React from 'react';
import { siteWrap, SiteHead, StillShot } from './Chrome';
import { Reveal } from '../lib/Reveal';
import { still } from '../lib/stills';

/* The Log Book and progress, one section. Levels and badges are computed from the training log, so history counts from day
   one. Nothing here needs filling in. */
export function Record() {
  return (
    <section id="record" style={{
      background: 'radial-gradient(80% 100% at 88% 10%, rgba(245,166,35,0.10), transparent 60%), var(--surface)',
      padding: 'clamp(60px,7vw,110px) 0',
    }}>
      <div style={{ ...siteWrap, display: 'grid', gap: 'clamp(40px,5vw,64px)' }}>
        <Reveal>
          <SiteHead center title="Every session counts." max={640}
            body="Your PRs, your Log Book and your notes in one place. Levels, streaks and badges come from your real training, so your history counts from day one. Nothing to fill in." />
        </Reveal>
        <div className="record-row">
          <StillShot s={still('G1', 1)} width={240} />
          <StillShot s={still('G7', 1)} width={240} />
          <StillShot s={still('K4', 1)} width={240} />
          <StillShot s={still('K5', 1)} width={240} />
        </div>
      </div>
    </section>
  );
}
