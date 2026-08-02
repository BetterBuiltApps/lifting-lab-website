/* Shared chrome for the Lifting Lab app kit: screen scaffold, iOS large-title header,
   and the amber back bar. Reads only design-system tokens. */

const owlKitShell = {
  screen: { minHeight: '100%', background: 'var(--bg)', display: 'flex', flexDirection: 'column' },
  scroll: { flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' },
  pad: { padding: 'var(--screen-padding)', display: 'grid', gap: 16, alignContent: 'start' },
};

function OwlLargeTitle({ title, trailing }) {
  return (
    <div style={{ padding: '52px 16px 4px', display: 'flex', alignItems: 'flex-end', gap: 12 }}>
      <h1 style={{
        margin: 0, flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 34, letterSpacing: '-0.4px', color: 'var(--text-primary)',
      }}>{title}</h1>
      {trailing}
    </div>
  );
}

function OwlInlineNav({ title, onBack, backLabel = 'Back', trailing }) {
  const { Icon } = window.OWLDesignSystem_875173;
  return (
    <div style={{
      padding: '52px 12px 8px', display: 'flex', alignItems: 'center', gap: 6,
      background: 'rgba(26,26,26,0.9)', backdropFilter: 'blur(20px)',
      borderBottom: 'var(--border-hairline-1)', position: 'sticky', top: 0, zIndex: 5,
    }}>
      <button onClick={onBack} style={{
        background: 'none', border: 'none', cursor: 'pointer', display: 'flex',
        alignItems: 'center', gap: 2, color: 'var(--amber)', font: 'var(--type-body)', padding: 0,
      }}>
        <Icon name="chevron-left" size={20} color="var(--amber)" />{backLabel}
      </button>
      <div style={{
        position: 'absolute', left: 0, right: 0, textAlign: 'center', pointerEvents: 'none',
        font: 'var(--type-headline)', color: 'var(--text-primary)',
      }}>{title}</div>
      <span style={{ flex: 1 }} />
      {trailing}
    </div>
  );
}

function OwlStreakChip({ streak = 4 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, paddingBottom: 6 }}>
      <span style={{ fontSize: 15 }}>🔥</span>
      <span style={{ font: 'var(--type-headline)', color: 'var(--amber)' }}>{streak}</span>
    </div>
  );
}

Object.assign(window, { owlKitShell, OwlLargeTitle, OwlInlineNav, OwlStreakChip });
