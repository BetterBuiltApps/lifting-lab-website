/* ToolsHubView.swift — Video / Prepare / Daily / Competition, all offline. */

function ToolsHub({ onOpenBarTrace }) {
  const { SectionLabel, ToolTile } = window.OWLDesignSystem_875173;
  const daily = [
    ['Training %', 'Loads off a PR', 'percent'],
    ['Barbell Loader', 'Plate diagram', 'dumbbell'],
    ['1RM Estimator', 'From a submax set', 'trending-up'],
    ['Strength Ratios', 'Find your limiter', 'scale'],
    ['kg ↔ lb', 'Unit converter', 'arrow-left-right'],
  ];
  const comp = [
    ['Meet Day', 'Warm-up room & attempts', 'clipboard-list'],
    ['Sinclair', 'Cross-class score', 'medal'],
    ['Robi Points', 'Vs. world record', 'trophy'],
    ['World Records', 'IWF categories', 'globe'],
  ];
  const grid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 };
  return (
    <div style={owlKitShell.pad}>
      <SectionLabel>Video</SectionLabel>
      <ToolTile title="Bar Trace" subtitle="Trace & measure a lift" icon="activity" onClick={onOpenBarTrace} />
      <SectionLabel>Prepare</SectionLabel>
      <ToolTile title="Warm-Up" subtitle="RAMP protocol + bar ramp" icon="flame" />
      <SectionLabel>Daily</SectionLabel>
      <div style={grid}>
        {daily.map(([t, s, i]) => <ToolTile key={t} title={t} subtitle={s} icon={i} />)}
      </div>
      <SectionLabel>Competition</SectionLabel>
      <div style={grid}>
        {comp.map(([t, s, i]) => <ToolTile key={t} title={t} subtitle={s} icon={i} />)}
      </div>
    </div>
  );
}

Object.assign(window, { ToolsHub });
