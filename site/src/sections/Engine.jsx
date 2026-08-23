import React from 'react';
import { siteWrap, SiteHead, Shot } from './Chrome';
import { asset } from '../lib/asset';
import { Reveal } from '../lib/Reveal';

/* Real sentences pulled from a live "how this session was built" card (see the
   screenshot beside this), not invented copy. The four labels are the site's
   own grouping of the app's signals, not a name the app itself uses:
   effort and pacing come from the athlete's training log (consistency and
   realism), fatigue and technique come from the same recurring-fault review
   that also runs the miss coach and the technique doctor. */
const FACTS = [
  ['Effort', 'You trained 5 of the last 12 scheduled days.'],
  ['Pacing', 'Your last 8 sessions ran about 100 minutes against a 73 minute estimate.'],
  ['Fatigue', '9 of your last 9 misses came in the last third of a session.'],
  ['Technique', 'Bar Trace caught "Bar Swung Away" twice on film. Technique Doctor named it, and today\'s session swaps in Segment Clean to fix it.'],
];

export function Engine() {
  return (
    <section id="engine" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={siteWrap}>
        <Reveal>
          <div className="split" style={{ '--split-cols': 'minmax(0,1.15fr) minmax(0,0.85fr)', alignItems: 'start' }}>
            <SiteHead title="It already knows how you actually train." max={560}
              body="Before it builds today's session, Lifting Lab reads your last month: how often you trained, how long sessions actually ran, where your misses clustered, and what Bar Trace and Technique Doctor caught on film. Then it scales volume, intensity, and rest to match, real progressive overload instead of a fixed plan, and swaps in a corrective exercise for a fault that keeps showing up. It never rewrites your program, and it always shows its work." />
            <Shot
              src={asset('assets/screens/session-signals.png')}
              alt="How this session was built: effort, pacing, fatigue, and technique summarized from your training log"
              width={260}
            />
          </div>
        </Reveal>
        <div style={{ '--split-cols': 'minmax(0,1.15fr) minmax(0,0.85fr)', alignItems: 'start' }} className="split engine-lower">
          <div>
            <dl className="engine-facts">
              {FACTS.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <p style={{ margin: '20px 0 0', font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>
              A rough month never spirals: a floor stops it from easing a session
              below 70% of normal. Free, from the first session, no upgrade required.
            </p>
          </div>
          <Shot
            src={asset('assets/screens/session-rationale.png')}
            alt="How this session was built: a technique fault caught on film, named, and matched to today's corrective exercise"
            width={260}
            caption="Every line is a fact it counted, never a guess"
          />
        </div>
      </div>
    </section>
  );
}
