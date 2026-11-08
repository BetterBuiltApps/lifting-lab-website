import React from 'react';
import { asset } from './asset';

/** One click-to-play walkthrough. Nothing loads until a visitor asks: the poster
 * is a still image, the video file and captions are fetched on click, nothing
 * moves on arrival, and the sound is a choice the visitor makes.
 *
 * `clip` = { id, title, seconds, body, mp4, poster, vtt, plan }, paths relative to
 * the site root (see src/data/videos.json). `plan` is "Free", "Pro" or "Mixed";
 * only "Pro" gets a label, so a Pro feature is never shown as if it were free. */
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

export function VideoClip({ clip, maxWidth = 300 }) {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef(null);
  const label = `${clip.title}, ${clip.seconds} second walkthrough with narration`;

  React.useEffect(() => {
    if (playing) videoRef.current?.play().catch(() => {});
  }, [playing]);

  const start = () => {
    setPlaying(true);
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'video_play', { video_title: clip.title, video_id: clip.id });
    }
  };

  return (
    <figure style={{ margin: 0, display: 'grid', gap: 14, justifyItems: 'center', width: '100%', maxWidth }}>
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '9 / 16', borderRadius: 28, overflow: 'hidden',
        background: '#000', border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 30px 70px rgba(0,0,0,0.55)',
      }}>
        {playing ? (
          <video
            ref={videoRef}
            src={asset(clip.mp4)}
            poster={asset(clip.poster)}
            controls
            playsInline
            preload="auto"
            aria-label={label}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          >
            <track kind="captions" src={asset(clip.vtt)} srcLang="en" label="English" default />
          </video>
        ) : (
          <button
            type="button"
            onClick={start}
            aria-label={`Play: ${label}`}
            style={{ display: 'block', width: '100%', height: '100%', padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <img
              src={asset(clip.poster)}
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
        {clip.plan === 'Pro' && (
          <span style={{
            display: 'inline-block', padding: '1px 8px', marginRight: 6, borderRadius: 'var(--radius-pill)',
            background: 'var(--amber-16)', border: '1px solid var(--amber-40)', color: 'var(--amber)',
            fontWeight: 'var(--weight-bold)', fontSize: 12, lineHeight: '18px',
          }}>Pro</span>
        )}
        {clip.body}
      </figcaption>
    </figure>
  );
}
