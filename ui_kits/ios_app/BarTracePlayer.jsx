/* OWLPlayerView.swift — the flagship read-out. Video stage with the progressive
   trace, pro playback controls, score ring, metrics grid, velocity graph, phase
   breakdown, technique findings, tracking honesty. */

const OWL_PHASES = [
  { kind: 'firstPull', label: 'First pull', start: 0, end: 0.62, duration: 0.62, peakVelocity: 0.95 },
  { kind: 'transition', label: 'Transition', start: 0.62, end: 0.80, duration: 0.18, peakVelocity: 0.81 },
  { kind: 'secondPull', label: 'Second pull', start: 0.80, end: 1.04, duration: 0.24, peakVelocity: 1.78 },
  { kind: 'turnover', label: 'Turnover', start: 1.04, end: 1.25, duration: 0.21, peakVelocity: 1.12 },
  { kind: 'catch', label: 'Catch', start: 1.25, end: 1.55, duration: 0.30, peakVelocity: 0.20 },
];

const OWL_SAMPLES = Array.from({ length: 96 }, (_, i) => {
  const t = (i / 95) * 1.55;
  const v = t < 0.62 ? 0.55 + t * 0.62
    : t < 0.80 ? 0.94 - (t - 0.62) * 0.78
    : t < 1.04 ? 0.80 + (t - 0.80) * 4.05
    : t < 1.25 ? 1.78 - (t - 1.04) * 3.15
    : Math.max(0.04, 1.12 - (t - 1.25) * 3.6);
  return { time: t, velocity: v };
});

/* The bar path: S-curve back toward the lifter, then loop over. Coordinates are
   in a 100×160 box so the overlay scales with the video stage. */
const OWL_TRACE = [
  [58, 152], [57, 140], [55, 126], [52, 112], [50, 98], [49, 86],
  [50, 72], [53, 58], [56, 46], [58, 36], [57, 28], [54, 22], [50, 19], [47, 20], [46, 24],
];

function BarTracePlayer({ onBack }) {
  const { Card, SectionLabel, Badge, Button, Icon, ScoreRing, PhaseTimeline, VelocityChart, StatCard } = window.OWLDesignSystem_875173;
  const [t, setT] = React.useState(1.55);
  const [playing, setPlaying] = React.useState(false);
  const [rate, setRate] = React.useState(1);

  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT((x) => {
      const n = x + 0.03 * rate;
      if (n >= 1.55) { setPlaying(false); return 1.55; }
      return n;
    }), 30);
    return () => clearInterval(id);
  }, [playing, rate]);

  const shown = Math.max(2, Math.round((t / 1.55) * OWL_TRACE.length));
  const pts = OWL_TRACE.slice(0, shown);
  const head = pts[pts.length - 1];
  const phaseAt = OWL_PHASES.find((p) => t >= p.start && t <= p.end) || OWL_PHASES[0];

  return (
    <div style={owlKitShell.pad}>
      <div style={{
        position: 'relative', borderRadius: 'var(--radius-card)', overflow: 'hidden',
        background: '#000', aspectRatio: '3 / 4',
      }}>
        <img src="../../assets/exercises/ex_snatch.jpg" alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover', opacity: 0.72, filter: 'saturate(0.85)',
        }} />
        <svg viewBox="0 0 100 160" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <polyline points={pts.map((p) => p.join(',')).join(' ')} fill="none"
            stroke="var(--amber)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
            vectorEffect="non-scaling-stroke" style={{ filter: 'drop-shadow(0 0 4px rgba(245,166,35,0.6))' }} />
          <circle cx={head[0]} cy={head[1]} r="2.2" fill="var(--amber)" />
        </svg>
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
          <Badge>A · 86</Badge>
          <Badge tone="make">Good tracking</Badge>
        </div>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: 12,
          background: 'var(--scrim-video)', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{
            font: 'var(--type-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase',
            color: 'var(--text-primary)',
          }}>{phaseAt.label}</span>
          <span style={{ flex: 1 }} />
          <span style={{ font: 'var(--type-label)', color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
            {t.toFixed(2)}s · frame {Math.round(t * 60)}
          </span>
        </div>
      </div>

      <Card padding={14} radius="row" style={{ display: 'grid', gap: 12 }}>
        <input type="range" min="0" max="1.55" step="0.01" value={t}
          onChange={(e) => setT(parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: 'var(--amber)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <IconBtn icon="chevron-left" onClick={() => setT((x) => Math.max(0, x - 1 / 60))} />
          <button onClick={() => setPlaying((p) => !p)} style={{
            width: 48, height: 48, borderRadius: '50%', border: 'none', background: 'var(--amber)',
            display: 'grid', placeItems: 'center', cursor: 'pointer',
          }}>
            <Icon name={playing ? 'pause' : 'play'} size={22} color="#000" />
          </button>
          <IconBtn icon="chevron-right" onClick={() => setT((x) => Math.min(1.55, x + 1 / 60))} />
          <span style={{ flex: 1 }} />
          {[0.25, 0.5, 1].map((r) => (
            <button key={r} onClick={() => setRate(r)} style={{
              border: 'none', cursor: 'pointer', padding: '6px 10px', borderRadius: 'var(--radius-pill)',
              background: rate === r ? 'var(--amber-16)' : 'var(--surface-elevated)',
              color: rate === r ? 'var(--amber)' : 'var(--text-secondary)',
              font: 'var(--type-label)', fontVariantNumeric: 'tabular-nums',
            }}>{r}×</button>
          ))}
        </div>
      </Card>

      <ScoreRing total={86} grade="A" straightness={0.92} smoothness={0.78} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <StatCard value="1.78 m/s" label="Peak speed" accent="var(--amber)" />
        <StatCard value="1.21 m/s" label="Mean pull" />
        <StatCard value="1.14 m" label="Bar height" />
        <StatCard value="7 cm" label="Horiz. drift" />
      </div>

      <VelocityChart samples={OWL_SAMPLES} phases={OWL_PHASES} currentTime={t} onSeek={setT} />

      <PhaseTimeline phases={OWL_PHASES}
        insight="Bar speed drops 15% through the transition — a smoother scoop keeps the pull building." />

      <Card padding={14} radius="row" style={{ display: 'grid', gap: 10 }}>
        <SectionLabel>Positions</SectionLabel>
        {[['Setup', 'Knee 68° · Hip 42°'], ['Transition', 'Knee 141° · Hip 96°'], ['Extension', 'Knee 172° · Hip 168°'], ['Catch', 'Knee 61° · Hip 55°']].map(([m, a]) => (
          <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ font: 'var(--type-subheadline)', color: 'var(--text-primary)' }}>{m}</span>
            <span style={{ flex: 1 }} />
            <span style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>{a}</span>
          </div>
        ))}
        <div style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)' }}>
          Bar stayed within 9 cm of the hip through the second pull.
        </div>
      </Card>

      <Card padding={14} radius="row" style={{ display: 'grid', gap: 10 }}>
        <SectionLabel>Technique findings</SectionLabel>
        {[['Bar swings out at the knee', 'Push the floor away and keep the shoulders over the bar longer.'],
          ['Early arm bend', 'Stay long — let the legs finish before the elbows do anything.']].map(([n, cue]) => (
          <div key={n} style={{ display: 'grid', gap: 3 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--caution)' }} />
              <span style={{ font: 'var(--type-headline)', color: 'var(--text-primary)' }}>{n}</span>
              <span style={{ flex: 1 }} />
              <Icon name="chevron-right" size={15} color="var(--glyph-decorative)" />
            </div>
            <div style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)', paddingLeft: 16 }}>{cue}</div>
          </div>
        ))}
      </Card>

      <Card padding={14} radius="row" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Icon name="circle-check" size={18} color="var(--make)" />
        <span style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)', flex: 1 }}>
          Tracking quality: Good — plate visible in 98% of frames.
        </span>
      </Card>

      <Button variant="gradient" full icon={<Icon name="share-2" size={18} />}>Share clip</Button>
    </div>
  );
}

function IconBtn({ icon, onClick }) {
  const { Icon } = window.OWLDesignSystem_875173;
  return (
    <button onClick={onClick} style={{
      width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer',
      background: 'var(--surface-elevated)', display: 'grid', placeItems: 'center',
    }}>
      <Icon name={icon} size={18} color="var(--text-primary)" />
    </button>
  );
}

Object.assign(window, { BarTracePlayer, OWL_PHASES, OWL_SAMPLES });
