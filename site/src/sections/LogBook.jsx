import React from 'react';
import { siteWrap, SiteHead, Shot } from './Chrome';
import { asset } from '../lib/asset';
import { Reveal } from '../lib/Reveal';

export function LogBook() {
  return (
    <section id="logbook" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={siteWrap}>
        <Reveal>
          <div className="split" style={{ '--split-cols': 'minmax(0,1fr) minmax(0,1fr)', alignItems: 'start' }}>
            <SiteHead title="A log book for what a sensor can't measure." max={560}
              body="Sessions and reflections land on one timeline. Nothing is required, nothing is scored, and the chart knows five-out-of-five sleep is good news while five-out-of-five fatigue is not." />
            {/* .shot-row: the two screenshots sit side by side on desktop and stack
                below 980px, like the other sections that pair phone shots. The even
                column split leaves each phone about its 260px width. */}
            <div className="shot-row logbook-shots">
              <Shot
                src={asset('assets/screens/logbook-timeline.png')}
                alt="Log Book: sessions and a written reflection on one timeline, grouped by month"
                width={260}
              />
              <Shot
                src={asset('assets/screens/logbook-reflection-input.png')}
                alt="Writing a reflection: sleep, nutrition, and fatigue rated in a few taps"
                width={260}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
