import React from 'react';
import { siteWrap, AppStoreButton, HealthBadge, StillShot } from './Chrome';
import { useDevice } from '../lib/device';
import { asset } from '../lib/asset';
import { VideoClip } from '../lib/VideoClip';
import { still } from '../lib/stills';
import videos from '@videos';
import { SITE } from '../config';
import { STATIONS, gapAfter, HERO_WEEK_PX } from './Arc';

// The overview video: ML0 (live items only) until the release that has the full master M0.
const HERO_VIDEO = videos.videos[videos.hero];

function HealthBadgeNote() {
  const device = useDevice();
  if (device === 'android') return null;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <HealthBadge />
      <span style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)', maxWidth: '16ch' }}>
        Syncs with the Apple Health app.
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <header style={{
      background: `radial-gradient(110% 80% at 76% 6%, rgba(245,166,35,0.16), transparent 60%),
        linear-gradient(90deg, var(--bg) 0%, var(--bg) 30%, rgba(26,26,26,0.72) 62%, rgba(26,26,26,0.42) 100%),
        url(${asset('assets/backgrounds/hero-mens-snatch.webp')})`,
      backgroundSize: 'auto, auto, cover',
      backgroundPosition: 'center, center, right center',
      backgroundRepeat: 'no-repeat',
      paddingBottom: 'clamp(56px,7vw,104px)',
    }}>
      <div className="hero-grid" style={{ ...siteWrap, paddingTop: 'clamp(36px,4vw,60px)' }}>
        {/* No pill row above the h1. It used to read "Coming soon" and "Built for
            competitive weightlifting", a kicker stack saying nothing the
            heading and subhead don't, and the same device removed from every
            other section. The real App Store badge is the CTA now, no
            caption needed beside it. */}
        <div style={{ display: 'grid', gap: 22, justifyItems: 'start', maxWidth: 680 }}>
          <h1 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-extrabold)',
            fontSize: 'clamp(44px,5.4vw,59px)', lineHeight: 1.0,
            /* em, not px: at the 44px clamp floor a flat -2px is -0.045em, past
               the -0.04em tracking floor. */
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}>
            {SITE.slogan}
          </h1>
          <p style={{
            margin: 0, maxWidth: '52ch', fontSize: 19, lineHeight: 1.55,
            color: 'var(--text-secondary)',
          }}>
            Film a lift and see where the bar went. Get the fix before your next set. Built for one sport:
            the snatch and the clean & jerk.
          </p>
          <p style={{
            margin: 0, fontSize: 17, fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)',
          }}>
            No account. No signup. Free to download.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginTop: 6 }}>
            <AppStoreButton />
            {/* Apple's Works with Apple Health rules: smaller than the main badge, paired with text about the Health
                feature, one per page. HealthBadge renders nothing on Android. */}
            <HealthBadgeNote />
          </div>
        </div>

        <div className="hero-pair">
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-8% -8% 20%',
              background: 'radial-gradient(circle, rgba(245,166,35,0.14), transparent 65%)', filter: 'blur(8px)',
            }} />
            <div style={{ position: 'relative' }}>
              <VideoClip clip={HERO_VIDEO} />
            </div>
          </div>
          <div>
            <StillShot s={still('F3', 1)} priority lcp caption="One grade out of 100, checked against the competition rules" />
          </div>
        </div>
      </div>

      {/* The spine, in the first screen. The arc is the page's structure, so the
          reader should see it before scrolling rather than discovering it two
          viewports down, which is why the hero above is deliberately compact.
          Item width is weeks x HERO_WEEK_PX and the rule is ruled one tick per
          week, so distance here means the same thing it means on the rail. */}
      <nav className="hero-spine" aria-label="What this page covers">
        <div style={siteWrap}>
          <ol className="hero-spine-list">
            {STATIONS.map((s, i) => (
              <li key={s.id} className="hero-spine-item" style={{ '--span': gapAfter(i, HERO_WEEK_PX) + 'px' }}>
                <a href={`#${s.id}`} className="hero-spine-link" aria-current={i === 0 ? 'step' : undefined}>
                  <span className="hero-spine-week owl-numeric">{s.week}</span>
                  <span className="hero-spine-label">{s.label}</span>
                </a>
              </li>
            ))}
          </ol>
          <p className="hero-spine-caption">Weeks out from the platform</p>
        </div>
      </nav>
    </header>
  );
}
