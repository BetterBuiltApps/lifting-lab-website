import React from 'react';
import { siteWrap, SiteHead } from './Chrome';
import { asset } from '../lib/asset';
import { Reveal } from '../lib/Reveal';
import { VideoClip } from '../lib/VideoClip';
import { useLightbox } from '../lib/Lightbox';
import data from '../data/videos.json';

/* A gallery of short walkthroughs, one tab per area: the area's summary first,
   then the videos that go deeper. Generated data: src/data/videos.json comes from
   the video project's scripts/v2/web-export.mjs, which only exports features that
   are live in the App Store build, so this section never announces a feature that
   has not shipped. Click to play, never autoplay (see lib/VideoClip.jsx). The stills
   under the videos are frames from the same walkthroughs. */

function Still({ still }) {
  const openLightbox = useLightbox();
  return (
    <button
      type="button"
      className="watch-still"
      onClick={(e) => openLightbox({ src: asset(still.large), alt: still.alt }, e.currentTarget)}
      aria-label={`View larger: ${still.alt}`}
    >
      <img src={asset(still.src)} alt={still.alt} width={150} height={267} loading="lazy" decoding="async" />
    </button>
  );
}

export function Watch() {
  const [active, setActive] = React.useState(data.tabs[0].key);
  const tabRefs = React.useRef({});
  const tab = data.tabs.find((t) => t.key === active) ?? data.tabs[0];
  const clips = tab.ids.map((id) => data.videos[id]).filter(Boolean);
  const stills = clips.flatMap((c) => c.stills ?? []);

  const onKeyDown = (e) => {
    const i = data.tabs.findIndex((t) => t.key === active);
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: data.tabs.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const target = data.tabs[(next + data.tabs.length) % data.tabs.length];
    setActive(target.key);
    tabRefs.current[target.key]?.focus();
  };

  return (
    <section id="watch" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={siteWrap}>
        <Reveal>
          <SiteHead
            title="Watch it work."
            body="Every area has a short video, with sound and captions. Start with the overview, then open any area."
          />
        </Reveal>

        <div className="watch-tabs" role="tablist" aria-label="Areas of the app" onKeyDown={onKeyDown}>
          {data.tabs.map((t) => (
            <button
              key={t.key}
              ref={(el) => { tabRefs.current[t.key] = el; }}
              type="button"
              role="tab"
              id={`watch-tab-${t.key}`}
              aria-selected={t.key === active}
              aria-controls="watch-panel"
              tabIndex={t.key === active ? 0 : -1}
              className="watch-tab"
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div id="watch-panel" role="tabpanel" aria-labelledby={`watch-tab-${tab.key}`}>
          <div className="watch-grid">
            {clips.map((c) => <VideoClip key={c.id} clip={c} maxWidth={260} />)}
          </div>

          {stills.length > 0 && (
            <div className="watch-stills-wrap">
              <h3 className="watch-stills-title">Screens from these videos</h3>
              <div className="watch-stills">
                {stills.map((s) => <Still key={s.src} still={s} />)}
              </div>
            </div>
          )}
        </div>

        <p className="watch-foot">
          Pro marks a feature that Pro unlocks. Lifting Lab is free to download, with no account needed.{' '}
          <a href="/help/">Step by step guides</a>
        </p>
      </div>
    </section>
  );
}
