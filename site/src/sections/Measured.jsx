import React from 'react';
import { siteWrap, SiteHead } from './Chrome';
import { VideoClip } from '../lib/VideoClip';
import { Reveal } from '../lib/Reveal';

/* Three short walkthroughs, with sound and captions. Click to play, never
   autoplay: nothing loads until a visitor asks (the poster is a still image,
   the video file and captions are fetched on click), nothing moves on arrival,
   and the sound is a choice the visitor makes. The clips are the first three
   sections of the narrated videos, cut before their end cards. */
const CLIPS = [
  {
    k: 'bar-trace',
    title: 'Bar Trace',
    seconds: 14,
    body: 'Film a lift, get a path score.',
  },
  {
    k: 'technique-doctor',
    title: 'Technique Doctor',
    seconds: 13,
    body: 'Pick the miss, get the likely causes and the drills.',
  },
  {
    k: 'meet-day',
    title: 'Meet Day',
    plan: 'Pro',
    seconds: 14,
    body: 'Count the attempts, pace your warm-up, log every lift.',
  },
];

function Clip({ clip }) {
  const base = `assets/video/${clip.k}`;
  return (
    <VideoClip
      clip={{ id: clip.k, title: clip.title, seconds: clip.seconds, body: clip.body, plan: clip.plan, mp4: `${base}.mp4`, poster: `${base}-poster.webp`, vtt: `${base}.vtt` }}
    />
  );
}

export function Measured() {
  return (
    <section id="measured" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={siteWrap}>
        <Reveal>
          <SiteHead
            title="Film it. Measure it. Fix it."
            body="Three short walkthroughs, with sound and captions. Film a lift and get a path score. Miss one and get the cause and the fix. Plan meet day one attempt at a time."
          />
        </Reveal>
        <div className="clip-row">
          {CLIPS.map((clip) => <Clip key={clip.k} clip={clip} />)}
        </div>
      </div>
    </section>
  );
}
