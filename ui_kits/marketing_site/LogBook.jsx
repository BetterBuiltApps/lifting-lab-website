function LogBookTimeline() {
  const { Card, SectionLabel } = window.OWLDesignSystem_875173;
  const entries = [
    { kind: 'reflection', label: 'Reflection', title: 'Weeks 9-11', sub: 'Sleep: Solid · Fatigue: Heavy' },
    { kind: 'session', label: 'Session', title: 'Snatch + Back Squat', sub: '“Third rep felt heavy, backed off 5kg.”' },
    { kind: 'session', label: 'Session', title: 'Clean & Jerk technique', sub: 'No notes' },
    { kind: 'reflection', label: 'Reflection', title: 'Weeks 6-8', sub: 'Fatigue: Wrecked · Consistency: Patchy' },
  ];
  return (
    <Card style={{ background: 'var(--bg)', padding: 22, display: 'grid', gap: 4 }}>
      <SectionLabel tone="secondary" style={{ marginBottom: 8 }}>November</SectionLabel>
      {entries.map((e, i) => (
        <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 0', borderTop: i ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
          <span style={{
            flexShrink: 0, marginTop: 3, width: 8, height: 8, borderRadius: '50%',
            background: e.kind === 'reflection' ? 'var(--amber)' : 'var(--text-tertiary)',
          }} />
          <div style={{ display: 'grid', gap: 2 }}>
            <span style={{ font: 'var(--type-caption)', color: e.kind === 'reflection' ? 'var(--amber)' : 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{e.label}</span>
            <span style={{ font: 'var(--type-subheadline)', fontWeight: 700, color: 'var(--text-primary)' }}>{e.title}</span>
            <span style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)' }}>{e.sub}</span>
          </div>
        </div>
      ))}
    </Card>
  );
}

function LogBook() {
  return (
    <section id="logbook" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={{ ...owlSiteWrap, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(28px,4vw,60px)', alignItems: 'center' }} className="split">
        <SiteHead eyebrow="Log book" title="A log book for what a sensor can't measure." max={560}
          body="Sessions and reflections land on one timeline. Nothing is required, nothing is scored, and the chart knows five-out-of-five sleep is good news while five-out-of-five fatigue is not." />
        <LogBookTimeline />
      </div>
    </section>
  );
}

Object.assign(window, { LogBook });
