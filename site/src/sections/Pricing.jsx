import React from 'react';
import { Card, SectionLabel, Icon } from '../design-system';
import { siteWrap, SiteHead, AppStoreButton } from './Chrome';
import { SITE } from '../config';
import { asset } from '../lib/asset';

export function Pricing() {
  const { free, pro } = SITE.pricing;
  const tiers = [
    { t: free.name, price: free.price, note: 'Everything you need to train, forever, no account required.', highlight: false, items: [
      'Unlimited training log and history',
      'The adaptive daily workout builder, shaped by your own training record',
      'Beginner Foundation, the full 12-week program',
      'Technique Doctor, including recent-lift technique diagnosis',
      'PR tracker, exercise library, and every training calculator',
      'Warm-up generator',
      'Three bar-path video analyses every month',
      'Levels, streaks, badges, and HealthKit sync',
    ] },
    { t: pro.name, price: pro.monthly, sub: pro.yearly, note: 'The coaching: full video analysis and the rest of the programs.', highlight: true, items: [
      'Unlimited bar-path analyses, with side-by-side compare',
      'Full Technique Doctor history',
      'The other four programs: Strength, Specification, Peak, and Masters',
      'Meet Day: warm-up pacing and the attempt board',
      'Import data from a VBT sensor you already own',
    ] },
  ];
  return (
    <section id="pricing" style={{
      background: `linear-gradient(180deg, rgba(35,35,35,0.85) 0%, rgba(35,35,35,0.68) 45%, rgba(35,35,35,0.82) 100%),
        url(${asset('assets/backgrounds/pricing-womens-clean.webp')})`,
      backgroundSize: 'auto, cover',
      backgroundPosition: 'center, center 20%',
      backgroundRepeat: 'no-repeat',
      padding: 'clamp(60px,7vw,110px) 0',
    }}>
      <div style={{ ...siteWrap, display: 'grid', gap: 36 }}>
        <SiteHead center title="Everything you need to start is free." max={720}
          body="Log your training, get an adaptive session every day, and run Beginner Foundation, free, forever. Pro adds unlimited video analysis, the other four programs, and meet day." />
        <div className="pricing-grid">
          {tiers.map((tier) => (
            <Card key={tier.t} className={tier.highlight ? 'animated-border' : undefined} style={{
              background: 'var(--bg)', display: 'grid', gap: 14, alignContent: 'start',
              border: tier.highlight ? 'var(--border-accent-1)' : 'none',
            }}>
              <SectionLabel tone={tier.highlight ? 'amber' : 'secondary'}>{tier.t}</SectionLabel>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ font: 'var(--type-title)', fontSize: 34, fontWeight: 'var(--weight-extrabold)', color: tier.highlight ? 'var(--amber)' : 'var(--text-primary)' }}>{tier.price}</span>
              </div>
              {tier.sub && <div style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{tier.sub}</div>}
              <div style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)', fontWeight: 600 }}>{tier.note}</div>
              <div style={{ display: 'grid', gap: 8, marginTop: 4 }}>
                {tier.items.map((i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Icon name="check" size={16} color={tier.highlight ? 'var(--amber)' : 'var(--make)'} style={{ marginTop: 3, flexShrink: 0 }} />
                    <span style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{i}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        {!SITE.released && (
          <p style={{ margin: 0, textAlign: 'center', font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>
            Pricing shown reflects planned launch pricing and may change before release.
          </p>
        )}
        <div style={{ display: 'grid', gap: 14, justifyItems: 'center', marginTop: 8 }}>
          {/* The Works with Apple Health badge lives in the hero, not here:
              Apple's guideline caps it at one per web page, and this is a
              single-page site. */}
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}
