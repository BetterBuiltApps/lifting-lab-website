function Hero() {
  return (
    <header style={{
      background: 'radial-gradient(110% 80% at 76% 6%, rgba(245,166,35,0.16), transparent 60%), var(--bg)',
      paddingBottom: 'clamp(56px,7vw,104px)',
    }}>
      <div style={{ ...owlSiteWrap, paddingTop: 'clamp(56px,7vw,96px)', display: 'grid', gap: 'clamp(32px,4vw,52px)' }}>
        <div style={{ display: 'grid', gap: 22, justifyItems: 'start', maxWidth: 680 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px',
            borderRadius: 999, background: 'var(--surface)', border: 'var(--border-hairline-1)',
            font: 'var(--type-caption)', color: 'var(--text-secondary)',
          }}>Built for Olympic weightlifting</span>
          <h1 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(44px,5.4vw,64px)', lineHeight: 1.0, letterSpacing: '-2px',
            color: 'var(--text-primary)',
          }}>
            The coach you don't have.
          </h1>
          <p style={{
            margin: 0, maxWidth: '52ch', fontSize: 19, lineHeight: 1.55,
            color: 'var(--text-secondary)',
          }}>
            OWL programs your cycle, analyzes your lifts frame by frame, tells you why the last one
            missed, and gets you through meet day. Built for one sport.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 6, flexWrap: 'wrap' }}>
            <AppStoreButton />
            <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{OWL_SITE.ctaNote}</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28, alignItems: 'end' }} className="hero-pair">
          <div style={{ display: 'grid', gap: 14, justifyItems: 'center' }}>
            <div style={{
              width: '100%', maxWidth: 300, borderRadius: 34, overflow: 'hidden', background: '#000',
              border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 30px 70px rgba(0,0,0,0.55)',
            }}>
              <img src="../../assets/screens/08-readiness-checkin.png" alt="Readiness check-in: energy, soreness and time build today's session" style={{ width: '100%', display: 'block' }} />
            </div>
            <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)', textAlign: 'center', maxWidth: 300 }}>Tell it how you feel — it builds the session</span>
          </div>
          <div style={{ position: 'relative', display: 'grid', gap: 14, justifyItems: 'center' }}>
            <div style={{
              position: 'absolute', inset: '-8% -8% 20%',
              background: 'radial-gradient(circle, rgba(245,166,35,0.14), transparent 65%)', filter: 'blur(8px)',
            }} />
            <div style={{
              position: 'relative', width: '100%', maxWidth: 300, borderRadius: 34, overflow: 'hidden', background: '#000',
              border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 30px 70px rgba(0,0,0,0.55)',
            }}>
              <img src="../../assets/screens/15-bar-trace-analysis-detail.png" alt="Bar Trace: skeleton overlay, bar path and phase split on a snatch turnover" style={{ width: '100%', display: 'block' }} />
            </div>
            <span style={{ position: 'relative', font: 'var(--type-caption)', color: 'var(--text-tertiary)', textAlign: 'center', maxWidth: 300 }}>Film a set — it reads the pull, phase by phase</span>
          </div>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Hero });
