import React from 'react';
import { siteWrap, AppStoreButton, HealthBadge, Shot } from './Chrome';
import { asset } from '../lib/asset';
import { STATIONS, gapAfter, HERO_WEEK_PX } from './Arc';

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
            fontSize: 'clamp(44px,5.4vw,64px)', lineHeight: 1.0,
            /* em, not px: at the 44px clamp floor a flat -2px is -0.045em, past
               the -0.04em tracking floor. */
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}>
            The coach you don't have.
          </h1>
          <p style={{
            margin: 0, maxWidth: '52ch', fontSize: 19, lineHeight: 1.55,
            color: 'var(--text-secondary)',
          }}>
            Lifting Lab programs your cycle, analyzes your lifts frame by frame, tells you why it missed,
            and gets you through meet day. Built for one sport, Olympic weightlifting: the snatch and
            the clean & jerk.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginTop: 6 }}>
            <AppStoreButton />
            <HealthBadge />
          </div>
        </div>

        <div className="hero-pair">
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-8% -8% 20%',
              background: 'radial-gradient(circle, rgba(245,166,35,0.14), transparent 65%)', filter: 'blur(8px)',
            }} />
            <div style={{ position: 'relative' }}>
              <Shot
                src={asset('assets/screens/15-bar-trace-analysis-detail.png')}
                alt="Bar Trace: skeleton overlay, bar path and phase split on a snatch turnover"
                width={260}
                priority
                lcp
                caption="Film a clean & jerk, and it reads the pull phase by phase"
              />
            </div>
          </div>
          <div>
            <Shot
              src={asset('assets/screens/34-technique-doctor-detail.png')}
              alt="Technique Doctor: a recurring fault trending worse across your last two clean lifts"
              width={260}
              priority
              caption="Arms bending early, and getting worse. It caught the trend before you did."
            />
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
