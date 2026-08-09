/* Shared building blocks for the landing page. */

const owlSiteWrap = { maxWidth: 1240, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' };

function SiteNav() {
  const { Button } = window.OWLDesignSystem_875173;
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(26,26,26,0.82)', backdropFilter: 'blur(20px)',
      borderBottom: 'var(--border-hairline-1)',
    }}>
      <div style={{ ...owlSiteWrap, display: 'flex', alignItems: 'center', gap: 28, height: 68 }}>
        <img src="../../assets/owl-logo.svg" alt="Lifting Lab" style={{ height: 34 }} />
        <span style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 26 }} className="site-nav-links">
          {[['Pillars', '#pillars'], ['Explore', '#explore'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([l, h]) => (
            <a key={l} href={h} style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{l}</a>
          ))}
        </div>
        <Button size="small" onClick={() => {
          const el = document.getElementById('pricing');
          if (el) window.scrollTo({ top: el.offsetTop - 88, behavior: 'smooth' });
        }}>
          Get Lifting Lab
        </Button>
      </div>
    </nav>
  );
}

/** Section heading. `eyebrow` is the amber uppercase label the app uses. */
function SiteHead({ eyebrow, title, body, center = false, max = 640, accent = 'var(--amber)' }) {
  const { SectionLabel } = window.OWLDesignSystem_875173;
  return (
    <div style={{
      display: 'grid', gap: 14, maxWidth: max,
      margin: center ? '0 auto' : undefined, textAlign: center ? 'center' : 'left',
      justifyItems: center ? 'center' : 'start',
    }}>
      {eyebrow && <SectionLabel tone="amber" style={{ color: accent }}>{eyebrow}</SectionLabel>}
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 'clamp(30px,3.4vw,48px)', lineHeight: 1.06, letterSpacing: '-1px',
        color: 'var(--text-primary)',
      }}>{title}</h2>
      {body && <p style={{ margin: 0, font: 'var(--type-body)', fontSize: 18, lineHeight: 1.5, color: 'var(--text-secondary)' }}>{body}</p>}
    </div>
  );
}

/** A real app screenshot in a minimal dark bezel. */
function Shot({ src, alt, width = 300, caption }) {
  return (
    <figure style={{ margin: 0, display: 'grid', gap: 12, justifyItems: 'center' }}>
      <div style={{
        width, borderRadius: 34, overflow: 'hidden', background: '#000',
        border: '1px solid rgba(255,255,255,0.14)',
        boxShadow: '0 30px 70px rgba(0,0,0,0.55)',
      }}>
        <img src={src} alt={alt} style={{ width: '100%', display: 'block' }} />
      </div>
      {caption && (
        <figcaption style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)', textAlign: 'center', maxWidth: width }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** App Store CTA button, used in hero, pricing, and footer. */
function AppStoreButton({ size = 'large' }) {
  const { Button } = window.OWLDesignSystem_875173;
  return (
    <a href={SITE.links.appStore} style={{ textDecoration: 'none' }}>
      <Button size={size}>{SITE.ctaPrimary}</Button>
    </a>
  );
}

Object.assign(window, { owlSiteWrap, SiteNav, SiteHead, Shot, AppStoreButton });
