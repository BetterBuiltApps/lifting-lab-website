/* Train tab home, DashboardView.swift. Builder hero, week stats, today's
   session, recent PRs, next session, quick-link grid. */

function Dashboard({ onStart, onNav }) {
  const { Card, SectionLabel, Button, StatCard, Icon, NavRow } = window.OWLDesignSystem_875173;
  const prs = [
    { name: 'Snatch', kg: '102.5', date: 'Mar 14' },
    { name: 'Clean & Jerk', kg: '130', date: 'Mar 12' },
    { name: 'Front Squat', kg: '150', date: 'Mar 8' },
  ];
  const links = [
    ['Programs', 'list'], ['PRs', 'trophy'], ['History', 'history'],
    ['Exercises', 'library'], ['Technique', 'stethoscope'], ['Learn', 'graduation-cap'],
  ];
  return (
    <div style={owlKitShell.pad}>
      <Card style={{ display: 'grid', gap: 12 }}>
        <SectionLabel>Custom workout</SectionLabel>
        <div style={{ font: 'var(--type-title)', color: 'var(--text-primary)' }}>Train how you feel</div>
        <div style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>
          A quick check-in builds today's session around your energy, soreness, and equipment.
        </div>
        <Button full>How are you feeling?</Button>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
        <StatCard value="12.4t" label="Wk Tonnage" />
        <StatCard value="3/4" label="Sessions" />
        <StatCard value="Peak" label="Phase" accent="var(--amber)" />
      </div>

      <div style={{ display: 'grid', gap: 8 }}>
        <SectionLabel>From your program</SectionLabel>
        <Card style={{ display: 'grid', gap: 12 }}>
          <SectionLabel>Today's session</SectionLabel>
          <div style={{ font: 'var(--type-title)', color: 'var(--text-primary)' }}>Snatch + Squat</div>
          {[['Snatch', '5×2 @ 102.5kg'], ['Clean Pull', '4×3 @ 140kg'], ['Front Squat', '5×3 @ RPE 8'], ['Back Extension', '3×10']].map(([n, s]) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{n}</span>
              <Icon name="info" size={13} color="var(--text-tertiary)" />
              <span style={{ flex: 1 }} />
              <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{s}</span>
            </div>
          ))}
          <Button variant="gradient" full onClick={onStart}>Start Session</Button>
        </Card>
      </div>

      <div style={{ display: 'grid', gap: 8 }}>
        <SectionLabel>Recent PRs</SectionLabel>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 2 }}>
          {prs.map((p) => (
            <Card key={p.name} padding={12} style={{ width: 110, flex: '0 0 auto', display: 'grid', gap: 4 }}>
              <span style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</span>
              <span style={{ font: 'var(--type-stat-value)', color: 'var(--amber)', fontVariantNumeric: 'tabular-nums' }}>{p.kg}kg</span>
              <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{p.date}</span>
            </Card>
          ))}
        </div>
      </div>

      <NavRow title="Specification, Day 2" caption="NEXT · THU" icon="calendar" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
        {links.map(([label, icon]) => (
          <Card key={label} padding={10} onClick={() => onNav && onNav(label)} style={{
            minHeight: 70, display: 'grid', gap: 6, placeItems: 'center', cursor: 'pointer',
          }}>
            <Icon name={icon} size={20} color="var(--amber)" />
            <span style={{ font: 'var(--type-caption)', color: 'var(--text-primary)' }}>{label}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Dashboard });
