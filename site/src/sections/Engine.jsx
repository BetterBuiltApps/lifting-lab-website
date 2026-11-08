import React from 'react';
import { siteWrap, SiteHead, StillShot } from './Chrome';
import { Reveal } from '../lib/Reveal';
import { still } from '../lib/stills';
import { released } from '../lib/release';

/* Real sentences pulled from a live "how this session was built" card, not invented copy. The labels are the site's own
   grouping of the app's signals, not names the app uses. The Technique line names Technique Doctor, so it only appears once
   that feature is released (release flag, see RELEASING.md). */
const FACTS = [
  ['Effort', 'You trained 5 of the last 12 scheduled days.'],
  ['Pacing', 'Your last 8 sessions ran about 100 minutes against a 73 minute estimate.'],
  ['Fatigue', '9 of your last 9 misses came in the last third of a session.'],
  ...(released('1.5')
    ? [['Technique', 'Bar Trace caught "Bar Swung Away" twice on film. Technique Doctor named it, and today\'s session swaps in Segment Clean to fix it.']]
    : []),
];

export function Engine() {
  return (
    <section id="engine" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={siteWrap}>
        <Reveal>
          <div className="split" style={{ '--split-cols': 'minmax(0,1fr) minmax(0,1fr)', alignItems: 'start' }}>
            <div style={{ display: 'grid', gap: 28 }}>
              <SiteHead title="It already knows how you train." max={560}
                body="Before it builds today's session, Lifting Lab reads your last month: how often you trained, how long sessions ran, where your misses clustered. Then it scales volume, intensity and rest to match. It never rewrites your program, and it shows its work." />
              <dl className="engine-facts">
                {FACTS.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <p className="center-sm" style={{ margin: 0, font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>
                A rough month never spirals: a floor stops it from easing a session below 70% of normal.
                Free, from the first session.
              </p>
            </div>
            <div className="shot-row">
              <StillShot s={still('B13', 2)} />
              <StillShot s={still('C3', 2)} caption="Every pick says why it is there" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
