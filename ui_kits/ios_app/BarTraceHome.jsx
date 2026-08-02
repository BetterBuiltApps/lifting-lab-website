/* OWLHomeView.swift — Bar Trace home. Import-first, then saved analyses. */

function BarTraceHome({ onOpen }) {
  const { Card, SectionLabel, Button, Icon, NavRow, Badge } = window.OWLDesignSystem_875173;
  const rows = [
    { t: 'Snatch · 102.5 kg', d: 'Mar 14, 6:12 PM', g: 'A', v: '1.78 m/s' },
    { t: 'Clean & Jerk · 130 kg', d: 'Mar 12, 7:03 PM', g: 'B+', v: '1.42 m/s' },
    { t: 'Snatch · 100 kg', d: 'Mar 11, 6:40 PM', g: 'A-', v: '1.74 m/s' },
    { t: 'Power Clean · 110 kg', d: 'Mar 8, 5:58 PM', g: 'B', v: '1.51 m/s' },
  ];
  return (
    <div style={owlKitShell.pad}>
      <Card style={{ display: 'grid', gap: 14, paddingTop: 24, paddingBottom: 24, justifyItems: 'center' }}>
        <Icon name="activity" size={38} color="var(--amber)" />
        <div style={{ font: 'var(--type-title)', color: 'var(--text-primary)' }}>Analyze a lift</div>
        <div style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)', textAlign: 'center' }}>
          Record or import a side-on clip. We trace the bar and measure speed — all on device.
        </div>
        <div style={{ display: 'flex', gap: 12, width: '100%' }}>
          <Button size="medium" full icon={<Icon name="video" size={18} />}>Record</Button>
          <Button size="medium" full icon={<Icon name="download" size={18} />}>Import</Button>
        </div>
      </Card>
      <SectionLabel>Your analyses</SectionLabel>
      <div style={{ display: 'grid', gap: 12 }}>
        {rows.map((r, i) => (
          <NavRow key={r.t} title={r.t} caption={r.d} icon="activity" chevron={false}
            onClick={i === 0 ? onOpen : undefined}
            accessory={<><Badge>{r.g}</Badge><span style={{ font: 'var(--type-headline)', color: 'var(--amber)', fontVariantNumeric: 'tabular-nums' }}>{r.v}</span></>} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { BarTraceHome });
