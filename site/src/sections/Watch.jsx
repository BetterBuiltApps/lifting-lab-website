import React from 'react';
import { siteWrap, SiteHead } from './Chrome';
import { Reveal } from '../lib/Reveal';
import { VideoClip } from '../lib/VideoClip';
// The data file is picked at build time for the release being built (vite.config.js, alias @videos): videos.<release>.json,
// written by the video project's scripts/v2/web-export.mjs. A release that is not reached is not imported, so its titles,
// captions and paths are not in the shipped JavaScript.
import data from '@videos';

/* A gallery of short walkthroughs, one tab per area: the area's summary first,
   then the videos that go deeper. The data is generated (src/data/videos.<release>.json, written by the video project's
   scripts/v2/web-export.mjs) and already resolved for the release being built, so this section never announces a feature
   that has not shipped: later releases are staged behind the release flag, see RELEASING.md. Click to play, never
   autoplay (see lib/VideoClip.jsx). */

export function Watch() {
  const [active, setActive] = React.useState(data.tabs[0].key);
  const tabRefs = React.useRef({});
  const tab = data.tabs.find((t) => t.key === active) ?? data.tabs[0];
  const clips = tab.ids.map((id) => data.videos[id]).filter(Boolean);

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
            title="See it in 45 seconds."
            body="Start with the overview. Then open any area. Short videos, with sound and captions."
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
        </div>

        <p className="watch-foot">
          Pro marks a feature that Pro unlocks. Lifting Lab is free to download, with no account needed.{' '}
          <a href="/help/">Step by step guides</a>
        </p>
      </div>
    </section>
  );
}
