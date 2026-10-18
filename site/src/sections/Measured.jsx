import React from 'react';
import { siteWrap, SiteHead } from './Chrome';
import { SITE } from '../config';
import { asset } from '../lib/asset';
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
    seconds: 14,
    body: 'Count the attempts, pace your warm-up, log every lift.',
  },
];

function PlayIcon() {
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
        width: 68, height: 68, borderRadius: '50%', background: 'var(--accent)',
        display: 'grid', placeItems: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#000" style={{ marginLeft: 4 }}>
        <path d="M6 3.5v17a1 1 0 0 0 1.5.86l14-8.5a1 1 0 0 0 0-1.72l-14-8.5A1 1 0 0 0 6 3.5Z" />
      </svg>
    </span>
  );
}

function Clip({ clip }) {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef(null);
  const base = `assets/video/${clip.k}`;
  const label = `${clip.title}, ${clip.seconds} second walkthrough with narration`;

  React.useEffect(() => {
    if (playing) videoRef.current?.play().catch(() => {});
  }, [playing]);

  const start = () => {
    setPlaying(true);
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'video_play', { video_title: clip.title });
    }
  };

  return (
    <figure style={{ margin: 0, display: 'grid', gap: 14, justifyItems: 'center', width: '100%', maxWidth: 300 }}>
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '9 / 16', borderRadius: 28, overflow: 'hidden',
        background: '#000', border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 30px 70px rgba(0,0,0,0.55)',
      }}>
        {playing ? (
          <video
            ref={videoRef}
            src={asset(`${base}.mp4`)}
            poster={asset(`${base}-poster.webp`)}
            controls
            playsInline
            preload="auto"
            aria-label={label}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          >
            <track kind="captions" src={asset(`${base}.vtt`)} srcLang="en" label="English" default />
          </video>
        ) : (
          <button
            type="button"
            onClick={start}
            aria-label={`Play: ${label}`}
            style={{ display: 'block', width: '100%', height: '100%', padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <img
              src={asset(`${base}-poster.webp`)}
              alt=""
              width={720}
              height={1280}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <PlayIcon />
          </button>
        )}
      </div>
      <figcaption style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)', textAlign: 'center', maxWidth: 280 }}>
        <strong style={{ color: 'var(--text-secondary)', fontWeight: 'var(--weight-bold)' }}>{clip.title}.</strong>{' '}
        {clip.body}
      </figcaption>
    </figure>
  );
}

export function Measured() {
  return (
    <section id="measured" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={siteWrap}>
        <Reveal>
          <SiteHead
            title={SITE.slogan}
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
