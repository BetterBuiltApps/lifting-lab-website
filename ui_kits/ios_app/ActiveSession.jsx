/* ActiveSessionView.swift, one set at a time: big target, plate loading,
   rest ring, make/miss, last-time panel. */

function ActiveSession({ onExit }) {
  const { Card, SectionLabel, SetTarget, TimerRing, MakeMissButtons, PlateDiagram, Button, Icon, Badge } = window.OWLDesignSystem_875173;
  const [setNo, setSetNo] = React.useState(3);
  const [resting, setResting] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const [logged, setLogged] = React.useState([true, true]);

  React.useEffect(() => {
    if (!resting) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [resting]);

  const rest = 120;
  const mmss = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

  function log(made) {
    setLogged((l) => [...l, made]);
    setSetNo((n) => Math.min(5, n + 1));
    setSeconds(0);
    setResting(true);
  }

  return (
    <div style={owlKitShell.pad}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <SectionLabel>Specification, Day 2</SectionLabel>
        <span style={{ flex: 1 }} />
        <Badge tone="neutral">Exercise 1 of 4</Badge>
      </div>

      <SetTarget exercise="Snatch" weight="102.5" setLabel={`Set ${setNo} of 5`} percentOfPR="82% of 125 kg PR" onEditWeight={() => {}} />

      <Card padding={14} radius="row" style={{ display: 'grid', gap: 8 }}>
        <SectionLabel>Per side</SectionLabel>
        <PlateDiagram perSide={[{ kg: 25, count: 1 }, { kg: 10, count: 1 }, { kg: 5, count: 1 }, { kg: 1, count: 1 }]} height={72} />
      </Card>

      {resting ? (
        <Card style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
          <SectionLabel>Rest</SectionLabel>
          <TimerRing progress={Math.min(1, seconds / rest)} centerText={mmss}
            emphasized={seconds >= rest} pulsing={seconds >= rest - 5 && seconds < rest} size={150} />
          <Button variant="plain" size="small" onClick={() => { setResting(false); setSeconds(0); }}>Skip rest</Button>
        </Card>
      ) : (
        <MakeMissButtons onMade={() => log(true)} onMiss={() => log(false)} />
      )}

      <Card padding={14} radius="row" style={{ display: 'grid', gap: 10 }}>
        <SectionLabel>This exercise</SectionLabel>
        <div style={{ display: 'flex', gap: 8 }}>
          {[1, 2, 3, 4, 5].map((n) => {
            const done = logged[n - 1];
            return (
              <div key={n} style={{
                flex: 1, height: 44, borderRadius: 'var(--radius-row)',
                background: done === undefined ? 'var(--surface-elevated)' : done ? 'rgba(52,199,89,0.16)' : 'rgba(255,59,48,0.16)',
                display: 'grid', placeItems: 'center',
                border: n === setNo && !resting ? 'var(--border-accent-1)' : 'none',
              }}>
                {done === undefined
                  ? <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{n}</span>
                  : <Icon name={done ? 'check' : 'x'} size={18} color={done ? 'var(--make)' : 'var(--miss)'} />}
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="secondary" size="small" icon={<Icon name="video" size={16} />}>Film this set</Button>
          <Button variant="secondary" size="small" icon={<Icon name="flame" size={16} color="var(--amber)" />}>Warm-up</Button>
        </div>
      </Card>

      <Card padding={14} radius="row" style={{ display: 'grid', gap: 6 }}>
        <SectionLabel>Last time · Mar 11</SectionLabel>
        <div style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>
          5×2 @ 100 kg, all made, RPE 7.5
        </div>
      </Card>

      <Button variant="plain" full onClick={onExit}>Finish session</Button>
    </div>
  );
}

Object.assign(window, { ActiveSession });
