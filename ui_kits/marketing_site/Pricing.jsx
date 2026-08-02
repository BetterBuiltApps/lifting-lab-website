function Pricing() {
  const { Card, SectionLabel, Icon } = window.OWLDesignSystem_875173;
  const { free, pro, coach, founding } = SITE.pricing;
  const tiers = [
    { t: free.name, price: free.price, note: 'Unlimited training log and history, forever.', highlight: false, items: [
      'Adaptive daily workout builder \u2014 feel, soreness, equipment, time',
      'All 5 periodized programs', 'PR tracker', 'Illustrated exercise library (71 movements)',
      'Log book \u2014 per-session notes, periodic reflections, and trends',
      'Every calculator \u2014 plate loader, 1RM, % table, Prilepin, Sinclair, Robi, ratios, world records',
      'Warm-up generator', 'Learn the Lifts', '3 bar-path analyses per month', 'HealthKit + Strava', 'CSV export',
    ] },
    { t: pro.name, price: pro.monthly, sub: `${pro.yearly} \u00b7 ${pro.lifetime}`, note: 'The unlock for Bar Trace at full depth.', highlight: true, items: [
      'Unlimited analyses', 'Side-by-side compare', 'Fix My Miss + Technique Doctor', 'Meet Day',
      'Multi-week program authoring (Coach Studio)', 'Hardware VBT import', 'Advanced analytics', 'iCloud clip sync',
    ] },
    { t: coach.name, price: coach.monthly, sub: coach.yearly, note: 'Flat price, unlimited athletes, never per-athlete.', highlight: false, items: [
      'Everything in Pro', 'Receive completed sessions from athletes', 'Annotate a clip and send it back', 'Program distribution',
    ] },
  ];
  return (
    <section id="pricing" style={{ background: 'var(--surface)', padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={{ ...owlSiteWrap, display: 'grid', gap: 36 }}>
        <SiteHead center eyebrow="Pricing" title="Free, unlimited, forever." max={720}
          body="The training log, programs, and calculators never expire and never lock. Pro adds full-depth video analysis. Coach adds a roster." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16, maxWidth: 1080, margin: '0 auto', width: '100%' }}>
          {tiers.map((tier) => (
            <Card key={tier.t} style={{
              background: 'var(--bg)', display: 'grid', gap: 14, alignContent: 'start',
              border: tier.highlight ? 'var(--border-accent-1)' : 'none',
            }}>
              <SectionLabel tone={tier.highlight ? 'amber' : 'secondary'}>{tier.t}</SectionLabel>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ font: 'var(--type-title)', fontSize: 34, fontWeight: 900, color: tier.highlight ? 'var(--amber)' : 'var(--text-primary)' }}>{tier.price}</span>
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
        <div style={{ display: 'grid', gap: 14, justifyItems: 'center', marginTop: 8 }}>
          <AppStoreButton />
          <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{SITE.ctaNote}</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing });
