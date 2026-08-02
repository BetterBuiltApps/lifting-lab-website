/* @ds-bundle: {"format":4,"namespace":"OWLDesignSystem_875173","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"BigNumberCard","sourcePath":"components/data/BigNumberCard.jsx"},{"name":"PHASE_COLORS","sourcePath":"components/data/PhaseTimeline.jsx"},{"name":"PhaseTimeline","sourcePath":"components/data/PhaseTimeline.jsx"},{"name":"PlateDiagram","sourcePath":"components/data/PlateDiagram.jsx"},{"name":"ScoreRing","sourcePath":"components/data/ScoreRing.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"VelocityChart","sourcePath":"components/data/VelocityChart.jsx"},{"name":"BadgeToast","sourcePath":"components/feedback/BadgeToast.jsx"},{"name":"TrackingQuality","sourcePath":"components/feedback/TrackingQuality.jsx"},{"name":"TraceVerdict","sourcePath":"components/feedback/TrackingQuality.jsx"},{"name":"WeightField","sourcePath":"components/forms/WeightField.jsx"},{"name":"NavRow","sourcePath":"components/navigation/NavRow.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"ToolTile","sourcePath":"components/navigation/ToolTile.jsx"},{"name":"MakeMissButtons","sourcePath":"components/session/MakeMissButtons.jsx"},{"name":"SetTarget","sourcePath":"components/session/SetTarget.jsx"},{"name":"TimerRing","sourcePath":"components/session/TimerRing.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5b2a5f7f1af4","components/core/Button.jsx":"8f0b26cab415","components/core/Card.jsx":"e3004b70b37e","components/core/Icon.jsx":"1912f1492322","components/core/ProgressBar.jsx":"e8500861bc4a","components/core/SectionLabel.jsx":"fd50b0852da6","components/core/StatusDot.jsx":"4dc5e8f6df42","components/data/BigNumberCard.jsx":"c186f311fd6e","components/data/PhaseTimeline.jsx":"de28dd77f0b6","components/data/PlateDiagram.jsx":"a1dcb2b5f451","components/data/ScoreRing.jsx":"cf978f0c48cc","components/data/Sparkline.jsx":"1f2f2491ebde","components/data/StatCard.jsx":"000e3ce27fe2","components/data/VelocityChart.jsx":"1665949ac5d8","components/feedback/BadgeToast.jsx":"e116dfd7fa41","components/feedback/TrackingQuality.jsx":"c4b7541b5afe","components/forms/WeightField.jsx":"ea6f8e2ba2b2","components/navigation/NavRow.jsx":"f06c76deb122","components/navigation/TabBar.jsx":"2fa80d10cc40","components/navigation/ToolTile.jsx":"d2ee0844b0ca","components/session/MakeMissButtons.jsx":"7d4ff95c40d5","components/session/SetTarget.jsx":"a0d42ecfeb69","components/session/TimerRing.jsx":"3f427f3af881","ui_kits/ios_app/ActiveSession.jsx":"a231c7d5ebe2","ui_kits/ios_app/BarTraceHome.jsx":"1460bfb791a3","ui_kits/ios_app/BarTracePlayer.jsx":"372dfc9dac68","ui_kits/ios_app/Dashboard.jsx":"14f8595c3035","ui_kits/ios_app/Shell.jsx":"9d76f2e4fc55","ui_kits/ios_app/ToolsHub.jsx":"e446de8dd4f6","ui_kits/ios_app/ios-frame.jsx":"24642b887be3","ui_kits/marketing_site/Chrome.jsx":"38bd6f2e69fd","ui_kits/marketing_site/Comparison.jsx":"fbf3e0028896","ui_kits/marketing_site/Explore.jsx":"a4eccf10b6d0","ui_kits/marketing_site/FAQFooter.jsx":"c211ec6b50a5","ui_kits/marketing_site/Hero.jsx":"cba0df775cc2","ui_kits/marketing_site/LogBook.jsx":"0da17fab5b51","ui_kits/marketing_site/Pillars.jsx":"333d2a9cf5c0","ui_kits/marketing_site/Pricing.jsx":"936420328511","ui_kits/marketing_site/Problem.jsx":"f25a0d7adfe5","ui_kits/marketing_site/Progress.jsx":"8b65a96a9656","ui_kits/marketing_site/Spotlight.jsx":"b9a845c18064","ui_kits/marketing_site/config.jsx":"b1a110e6515a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OWLDesignSystem_875173 = window.OWLDesignSystem_875173 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  amber: {
    color: 'var(--amber)',
    background: 'var(--amber-16)'
  },
  make: {
    color: 'var(--make)',
    background: 'rgba(52,199,89,0.16)'
  },
  miss: {
    color: 'var(--miss)',
    background: 'rgba(255,59,48,0.16)'
  },
  neutral: {
    color: 'var(--text-secondary)',
    background: 'var(--surface-elevated)'
  }
};

/** The capsule chip: grade letters, tracking quality, phase tags, streak counts. */
function Badge({
  tone = 'amber',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-caption)',
      fontWeight: 900,
      padding: '4px 8px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  border: 'none',
  borderRadius: 'var(--radius-button)',
  cursor: 'pointer',
  transition: 'transform var(--duration-press) var(--ease-pop), opacity 150ms linear',
  WebkitTapHighlightColor: 'transparent'
};
const sizes = {
  // 52pt is the app's primary CTA height; 48 the secondary capture buttons.
  large: {
    minHeight: 'var(--tap-target-big)',
    fontSize: 'var(--text-headline)',
    padding: '0 20px'
  },
  medium: {
    minHeight: 48,
    fontSize: 'var(--text-headline)',
    padding: '0 18px'
  },
  small: {
    minHeight: 36,
    fontSize: 'var(--text-subheadline)',
    padding: '0 14px'
  }
};
const variants = {
  primary: {
    background: 'var(--amber)',
    color: 'var(--accent-fg)'
  },
  gradient: {
    background: 'var(--gradient-amber)',
    color: 'var(--accent-fg)'
  },
  make: {
    background: 'var(--make)',
    color: '#fff'
  },
  miss: {
    background: 'var(--miss)',
    color: '#fff'
  },
  secondary: {
    background: 'var(--surface-elevated)',
    color: 'var(--text-primary)'
  },
  plain: {
    background: 'transparent',
    color: 'var(--amber)'
  }
};

/** The app's button. One amber fill, black label — never an amber label on dark. */
function Button({
  variant = 'primary',
  size = 'large',
  full = false,
  disabled = false,
  icon = null,
  children,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      width: full ? '100%' : undefined,
      opacity: disabled ? 0.35 : 1,
      cursor: disabled ? 'default' : 'pointer',
      transform: pressed && !disabled ? 'scale(var(--press-scale))' : 'scale(1)',
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The standard elevated card surface — bpCard(). Fill only, no border, no shadow. */
function Card({
  padding = 16,
  radius = 'card',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface)',
      borderRadius: radius === 'card' ? 'var(--radius-card)' : 'var(--radius-row)',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SF Symbols substitute. The app uses SF Symbols exclusively (Apple's font is
 * not redistributable), so on the web we inline Lucide SVGs — matching stroke
 * weight and rounded caps — and let them inherit currentColor.
 * See ICONOGRAPHY in readme.md for the SF Symbol → Lucide name map.
 *
 * The SVG markup is fetched once per name and cached, then inlined rather than
 * used as a CSS mask: inline markup survives DOM-serializing renderers
 * (html-to-image, print, PDF export) that drop `mask-image`.
 */
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
const cache = new Map();
function useIconMarkup(name) {
  const [markup, setMarkup] = React.useState(() => cache.get(name) || null);
  React.useEffect(() => {
    if (!name || cache.has(name)) {
      setMarkup(cache.get(name) || null);
      return;
    }
    let live = true;
    fetch(`${CDN}${name}.svg`).then(r => r.ok ? r.text() : Promise.reject(r.status)).then(t => {
      // Keep only the drawable children; the wrapper <svg> is ours.
      const inner = t.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
      cache.set(name, inner);
      if (live) setMarkup(inner);
    }).catch(() => {
      cache.set(name, '');
      if (live) setMarkup('');
    });
    return () => {
      live = false;
    };
  }, [name]);
  return markup;
}
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  ...rest
}) {
  const markup = useIconMarkup(name);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      display: 'inline-block',
      flex: '0 0 auto',
      verticalAlign: 'middle',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: markup || ''
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** JuicyProgressBar: a gradient capsule that springs to its value. */
function ProgressBar({
  progress = 0,
  height = 8,
  gradient = 'progress',
  style,
  ...rest
}) {
  const p = Math.min(1, Math.max(0, progress));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-elevated)',
      overflow: 'hidden',
      ...style
    }
  }, rest), p > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `max(${height}px, ${p * 100}%)`,
      borderRadius: 'var(--radius-pill)',
      background: gradient === 'progress' ? 'var(--gradient-progress)' : 'var(--gradient-amber)',
      transition: 'width var(--duration-spring) var(--ease-spring)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The uppercase caption label that sits above every grouped block. */
function SectionLabel({
  tone = 'secondary',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: tone === 'amber' ? 'var(--amber)' : tone === 'tertiary' ? 'var(--text-tertiary)' : 'var(--text-secondary)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const colors = {
  good: 'var(--good)',
  caution: 'var(--caution)',
  imbalanced: 'var(--bad)',
  none: 'var(--glyph-decorative)'
};

/** 10px dot for strength ratios and readiness rows. */
function StatusDot({
  status = 'none',
  size = 10,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: '50%',
      background: colors[status] || colors.none,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/data/BigNumberCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A large primary number with a unit and optional caption. For result displays. */
function BigNumberCard({
  number,
  unit,
  caption,
  accent = 'var(--amber)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    style: {
      paddingTop: 24,
      paddingBottom: 24,
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-big-number)',
      color: accent,
      fontVariantNumeric: 'tabular-nums'
    }
  }, number), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-secondary)'
    }
  }, unit)), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, caption));
}
Object.assign(__ds_scope, { BigNumberCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BigNumberCard.jsx", error: String((e && e.message) || e) }); }

// components/data/PhaseTimeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PHASE_COLORS = {
  firstPull: 'var(--phase-first-pull)',
  transition: 'var(--phase-transition)',
  secondPull: 'var(--phase-second-pull)',
  turnover: 'var(--phase-turnover)',
  catch: 'var(--phase-catch)'
};

/** PhaseBreakdownCard: proportional timeline, per-phase rows, and the insight line. */
function PhaseTimeline({
  phases = [],
  insight,
  insightTone = 'secondary',
  style,
  ...rest
}) {
  const total = phases.reduce((s, p) => s + p.duration, 0) || 0.01;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-row)',
      padding: 14,
      display: 'grid',
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, null, "Lift Phases"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 1,
      height: 8
    }
  }, phases.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.kind,
    style: {
      flex: `0 0 ${p.duration / total * 100}%`,
      minWidth: 3,
      background: PHASE_COLORS[p.kind],
      borderRadius: 2
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, phases.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.kind,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: PHASE_COLORS[p.kind],
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-primary)'
    }
  }, p.label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), p.peakVelocity > 0.05 && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.peakVelocity.toFixed(2), " m/s"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)',
      fontVariantNumeric: 'tabular-nums',
      width: 52,
      textAlign: 'right'
    }
  }, p.duration.toFixed(2), " s")))), insight && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: insightTone === 'caution' ? 'var(--caution)' : 'var(--text-secondary)'
    }
  }, insight));
}
Object.assign(__ds_scope, { PHASE_COLORS, PhaseTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PhaseTimeline.jsx", error: String((e && e.message) || e) }); }

// components/data/PlateDiagram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PLATE = {
  25: {
    color: 'var(--plate-25)',
    h: 1,
    w: 22
  },
  20: {
    color: 'var(--plate-20)',
    h: 1,
    w: 20
  },
  15: {
    color: 'var(--plate-15)',
    h: 1,
    w: 18
  },
  10: {
    color: 'var(--plate-10)',
    h: 1,
    w: 14
  },
  5: {
    color: 'var(--plate-5)',
    h: 0.72,
    w: 11
  },
  2.5: {
    color: 'var(--plate-2-5)',
    h: 0.55,
    w: 8
  },
  2: {
    color: 'var(--plate-2)',
    h: 0.55,
    w: 8
  },
  1.5: {
    color: 'var(--plate-1-5)',
    h: 0.44,
    w: 6
  },
  1: {
    color: 'var(--plate-1)',
    h: 0.44,
    w: 6
  }
};
const FALLBACK = {
  color: 'var(--plate-chrome)',
  h: 0.34,
  w: 6
};

/** One side of a loaded bar in IWF competition colors, largest plate inward. */
function PlateDiagram({
  perSide = [],
  height = 120,
  style,
  ...rest
}) {
  const seq = perSide.flatMap(p => Array(p.count).fill(p.kg));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      height,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 10,
      background: 'var(--bar-steel)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: height * 0.35,
      background: 'rgba(142,142,147,0.9)',
      borderRadius: 2
    }
  }), seq.length === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      paddingLeft: 8
    }
  }, "empty bar") : seq.map((kg, i) => {
    const p = PLATE[kg] || FALLBACK;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      title: `${kg} kg`,
      style: {
        width: p.w,
        height: height * p.h,
        background: p.color,
        borderRadius: 'var(--radius-plate)',
        border: 'var(--border-plate)'
      }
    });
  }));
}
Object.assign(__ds_scope, { PlateDiagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PlateDiagram.jsx", error: String((e && e.message) || e) }); }

// components/data/ScoreRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The lift-score readout: amber ring + grade letter, total, and sub-bars. */
function ScoreRing({
  total,
  grade,
  straightness,
  smoothness,
  style,
  ...rest
}) {
  const has = typeof total === 'number';
  const r = 50,
    c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 110,
      height: 110,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "110",
    height: "110",
    viewBox: "0 0 110 110",
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "55",
    cy: "55",
    r: r,
    fill: "none",
    stroke: "var(--surface-elevated)",
    strokeWidth: "10"
  }), has && /*#__PURE__*/React.createElement("circle", {
    cx: "55",
    cy: "55",
    r: r,
    fill: "none",
    stroke: "var(--amber)",
    strokeWidth: "10",
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - Math.min(1, total / 100)),
    style: {
      transition: 'stroke-dashoffset var(--duration-spring) var(--ease-spring)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      font: 'var(--type-huge-number)',
      fontSize: 52,
      color: has ? 'var(--amber)' : 'var(--text-tertiary)'
    }
  }, has ? grade : '—')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 10
    }
  }, has ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-big-number)',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, total), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)'
    }
  }, "/100")), /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, null, "Path score"), /*#__PURE__*/React.createElement(Sub, {
    label: "Straightness",
    value: straightness
  }), /*#__PURE__*/React.createElement(Sub, {
    label: "Smoothness",
    value: smoothness
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, null, "Path score"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, "Not enough tracking data to grade this lift."))));
}
function Sub({
  label,
  value = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      fontSize: 'var(--text-caption2)',
      color: 'var(--text-tertiary)'
    }
  }, label), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    progress: value,
    height: 6
  }));
}
Object.assign(__ds_scope, { ScoreRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ScoreRing.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** PR progress line. No chart library — a single stroked path. */
function Sparkline({
  values = [],
  color = 'var(--amber)',
  width = 110,
  height = 32,
  style,
  ...rest
}) {
  const enough = values.length >= 2;
  const min = Math.min(...values),
    max = Math.max(...values),
    range = max - min;
  const pts = enough ? values.map((v, i) => {
    const x = i / (values.length - 1) * width;
    const norm = range > 0 ? (v - min) / range : 0.5;
    return `${x},${height * (1 - norm)}`;
  }).join(' ') : `0,${height / 2} ${width},${height / 2}`;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    style: {
      overflow: 'visible',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: enough ? color : 'var(--glyph-decorative)',
    strokeDasharray: enough ? undefined : '3 3'
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  medium: 'var(--text-stat-value)',
  large: 40
};

/** A compact labeled statistic — the unit of every stat strip and grid. */
function StatCard({
  value,
  label,
  accent = 'var(--text-primary)',
  size = 'medium',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    padding: 14,
    style: {
      display: 'grid',
      gap: 4,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontWeight: size === 'large' ? 700 : 600,
      fontSize: sizes[size],
      lineHeight: 'var(--leading-snug)',
      color: accent,
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, value), /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, null, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/VelocityChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VelocityChartCard — bar speed over the lift, phase-colored, doubling as a
 * second scrubber. Click or drag anywhere to seek.
 */
function VelocityChart({
  samples = [],
  phases = [],
  currentTime = 0,
  height = 140,
  onSeek,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const t0 = samples.length ? samples[0].time : 0;
  const t1 = samples.length ? samples[samples.length - 1].time : 1;
  const vMax = Math.max(0.5, ...samples.map(s => s.velocity)) * 1.1;
  const W = 1000,
    H = 300;
  const x = t => (t - t0) / (t1 - t0 || 1) * W;
  const y = v => H - v / vMax * H;
  const runs = phases.length ? phases.map(p => ({
    color: __ds_scope.PHASE_COLORS[p.kind],
    pts: samples.filter(s => s.time >= p.start && s.time <= p.end)
  })).filter(r => r.pts.length > 1) : [{
    color: 'var(--amber)',
    pts: samples
  }];
  const now = samples.length ? samples.reduce((a, b) => Math.abs(b.time - currentTime) < Math.abs(a.time - currentTime) ? b : a).velocity : 0;
  function seek(e) {
    if (!onSeek || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    onSeek(t0 + (e.clientX - r.left) / r.width * (t1 - t0));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-row)',
      padding: 14,
      display: 'grid',
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Bar Speed"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--amber)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, now.toFixed(2), " m/s")), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onPointerDown: seek,
    onPointerMove: e => e.buttons === 1 && seek(e),
    style: {
      height,
      cursor: onSeek ? 'ew-resize' : 'default',
      touchAction: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none"
  }, [0.25, 0.5, 0.75].map(f => /*#__PURE__*/React.createElement("line", {
    key: f,
    x1: "0",
    x2: W,
    y1: H * f,
    y2: H * f,
    stroke: "var(--hairline)",
    strokeWidth: "1.5"
  })), runs.map((r, i) => /*#__PURE__*/React.createElement("polyline", {
    key: i,
    fill: "none",
    stroke: r.color,
    strokeWidth: "6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    points: r.pts.map(s => `${x(s.time)},${y(s.velocity)}`).join(' ')
  })), /*#__PURE__*/React.createElement("line", {
    x1: x(currentTime),
    x2: x(currentTime),
    y1: "0",
    y2: H,
    stroke: "rgba(255,255,255,0.7)",
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke"
  }))));
}
Object.assign(__ds_scope, { VelocityChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/VelocityChart.jsx", error: String((e && e.message) || e) }); }

// components/feedback/BadgeToast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A non-blocking capsule toast for a badge unlocked mid-session. */
function BadgeToast({
  title,
  icon = 'award',
  label = 'Badge unlocked',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-elevated)',
      border: 'var(--border-accent-1)',
      boxShadow: 'var(--shadow-toast)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "var(--amber)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-headline)',
      color: 'var(--text-primary)'
    }
  }, title)));
}
Object.assign(__ds_scope, { BadgeToast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/BadgeToast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TrackingQuality.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  good: {
    dot: 'var(--good)',
    word: 'Good'
  },
  fair: {
    dot: 'var(--caution)',
    word: 'Fair'
  },
  poor: {
    dot: 'var(--bad)',
    word: 'Poor'
  }
};

/**
 * The tracking-honesty card. A colored dot, the verdict, the raw evidence on the
 * right, and a plain-language sentence saying what that means for the numbers
 * above it — and what to do differently next time.
 */
function TrackingQuality({
  quality = 'good',
  evidence,
  note,
  style,
  ...rest
}) {
  const t = TONES[quality] || TONES.good;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-row)',
      padding: 14,
      display: 'grid',
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: t.dot,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-headline)',
      color: 'var(--text-primary)'
    }
  }, "Tracking: ", t.word), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), evidence && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, evidence)), note && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)'
    }
  }, note));
}

/**
 * "What the trace says" — the prose verdict card. Its heading is sentence case
 * and secondary-weight, deliberately quieter than a SectionLabel, because the
 * sentence underneath is the content.
 */
function TraceVerdict({
  heading = 'What the trace says',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-row)',
      padding: 14,
      display: 'grid',
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-subheadline)',
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-primary)'
    }
  }, children));
}
Object.assign(__ds_scope, { TrackingQuality, TraceVerdict });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TrackingQuality.jsx", error: String((e && e.message) || e) }); }

// components/forms/WeightField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WeightField — a titled weight row that stores kg and edits in the athlete's
 * preferred unit. Right-aligned value, unit suffix, decimal keypad.
 */
function WeightField({
  title,
  value,
  unit = 'kg',
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("label", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      maxWidth: 110,
      textAlign: 'right',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      font: 'var(--type-headline)',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)'
    }
  }, unit));
}
Object.assign(__ds_scope, { WeightField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/WeightField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A list row: leading amber glyph, title + caption, trailing accessory or chevron. */
function NavRow({
  title,
  caption,
  icon,
  accessory,
  chevron = true,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 14,
      background: 'var(--surface)',
      borderRadius: 'var(--radius-row)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "var(--amber)",
    style: {
      width: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 3,
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-headline)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, caption)), accessory, chevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--glyph-decorative)"
  }));
}
Object.assign(__ds_scope, { NavRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TABS = [{
  id: 'train',
  label: 'Train',
  icon: 'dumbbell'
}, {
  id: 'tools',
  label: 'Tools',
  icon: 'sliders-horizontal'
}, {
  id: 'me',
  label: 'Me',
  icon: 'user'
}];

/** The three-tab bar: Train / Tools / Me, amber tint on the selected tab. */
function TabBar({
  active = 'train',
  tabs = TABS,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      background: 'rgba(28,28,30,0.94)',
      backdropFilter: 'blur(20px)',
      borderTop: 'var(--border-hairline-1)',
      paddingBottom: 20,
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange && onChange(t.id),
      style: {
        flex: 1,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'grid',
        gap: 3,
        justifyItems: 'center',
        padding: '8px 0 4px'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 24,
      color: on ? 'var(--amber)' : 'var(--glyph-decorative)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-caption2)',
        fontWeight: 500,
        color: on ? 'var(--amber)' : 'var(--glyph-decorative)'
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ToolTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A tappable tool tile for the Tools hub grid. Amber glyph, title, 2-line subtitle. */
function ToolTile({
  title,
  subtitle,
  icon = 'wrench',
  onClick,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    onClick: onClick,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      minHeight: 120,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      cursor: onClick ? 'pointer' : 'default',
      transform: pressed ? 'scale(var(--press-scale))' : 'scale(1)',
      transition: 'transform var(--duration-press) var(--ease-pop)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "var(--amber)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-headline)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      minHeight: 32
    }
  }, subtitle));
}
Object.assign(__ds_scope, { ToolTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ToolTile.jsx", error: String((e && e.message) || e) }); }

// components/session/MakeMissButtons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The two 56pt tap targets for logging a set. Sized for chalked hands. */
function MakeMissButtons({
  onMade,
  onMiss,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "make",
    full: true,
    onClick: onMade,
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 20,
      color: "#fff"
    }),
    style: {
      minHeight: 'var(--tap-target-chalky)',
      fontSize: 'var(--text-title3)',
      fontWeight: 700
    }
  }, "Made"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "miss",
    full: true,
    onClick: onMiss,
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "x",
      size: 20,
      color: "#fff"
    }),
    style: {
      minHeight: 'var(--tap-target-chalky)',
      fontSize: 'var(--text-title3)',
      fontWeight: 700
    }
  }, "Miss"));
}
Object.assign(__ds_scope, { MakeMissButtons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/session/MakeMissButtons.jsx", error: String((e && e.message) || e) }); }

// components/session/SetTarget.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The set-target card at the top of an active set: exercise name, set count,
 * coach cue, the big amber load with its rep suffix, percent of PR, then the
 * per-side loading as plain text and the film affordance.
 */
function SetTarget({
  exercise,
  weight,
  unit = 'kg',
  reps,
  setLabel,
  cue,
  percentOfPR,
  loadPerSide,
  onFilm,
  onEditWeight,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    style: {
      display: 'grid',
      gap: 8,
      justifyItems: 'center',
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-exercise-name)',
      color: 'var(--text-primary)'
    }
  }, exercise), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "info",
    size: 18,
    color: "var(--glyph-decorative)"
  })), setLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)'
    }
  }, setLabel), cue && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontStyle: 'italic',
      color: 'var(--text-tertiary)'
    }
  }, "\u201C", cue, "\u201D"), /*#__PURE__*/React.createElement("button", {
    onClick: onEditWeight,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      margin: '6px 0 0',
      cursor: onEditWeight ? 'pointer' : 'default',
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-big-number)',
      color: 'var(--amber)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, weight), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-secondary)'
    }
  }, unit, reps ? ` × ${reps}` : '')), percentOfPR && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)'
    }
  }, percentOfPR), loadPerSide && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--hairline)',
      width: '100%',
      margin: '10px 0 2px'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, null, "Load / side"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      fontWeight: 600,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, loadPerSide)), onFilm && /*#__PURE__*/React.createElement("button", {
    onClick: onFilm,
    style: {
      marginTop: 6,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      padding: '10px 18px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--surface-elevated)',
      color: 'var(--amber)',
      font: 'var(--type-headline)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "video",
    size: 18,
    color: "var(--amber)"
  }), "Film this set"));
}
Object.assign(__ds_scope, { SetTarget });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/session/SetTarget.jsx", error: String((e && e.message) || e) }); }

// components/session/TimerRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TimerRingView — the rest timer. Green when the rest is up; pulses in endgame. */
function TimerRing({
  progress = 0,
  centerText = '0:00',
  emphasized = false,
  pulsing = false,
  size = 160,
  style,
  ...rest
}) {
  const r = size / 2 - 5,
    c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      animation: pulsing ? 'owl-pulse var(--duration-pulse) var(--ease-in-out) infinite alternate' : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes owl-pulse{to{transform:scale(var(--pulse-scale))}}'), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--surface-elevated)",
    strokeWidth: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: emphasized ? 'var(--make)' : 'var(--amber)',
    strokeWidth: "10",
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - Math.min(1, Math.max(0, progress))),
    style: {
      transition: 'stroke-dashoffset var(--duration-scrub) linear, stroke var(--duration-fade) var(--ease-in-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-numeric)',
      fontSize: 'var(--text-timer)',
      fontWeight: 900,
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-primary)'
    }
  }, centerText));
}
Object.assign(__ds_scope, { TimerRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/session/TimerRing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/ActiveSession.jsx
try { (() => {
/* ActiveSessionView.swift — one set at a time: big target, plate loading,
   rest ring, make/miss, last-time panel. */

function ActiveSession({
  onExit
}) {
  const {
    Card,
    SectionLabel,
    SetTarget,
    TimerRing,
    MakeMissButtons,
    PlateDiagram,
    Button,
    Icon,
    Badge
  } = window.OWLDesignSystem_875173;
  const [setNo, setSetNo] = React.useState(3);
  const [resting, setResting] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const [logged, setLogged] = React.useState([true, true]);
  React.useEffect(() => {
    if (!resting) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [resting]);
  const rest = 120;
  const mmss = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  function log(made) {
    setLogged(l => [...l, made]);
    setSetNo(n => Math.min(5, n + 1));
    setSeconds(0);
    setResting(true);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: owlKitShell.pad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Specification \u2014 Day 2"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Exercise 1 of 4")), /*#__PURE__*/React.createElement(SetTarget, {
    exercise: "Snatch",
    weight: "102.5",
    setLabel: `Set ${setNo} of 5`,
    percentOfPR: "82% of 125 kg PR",
    onEditWeight: () => {}
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    radius: "row",
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Per side"), /*#__PURE__*/React.createElement(PlateDiagram, {
    perSide: [{
      kg: 25,
      count: 1
    }, {
      kg: 10,
      count: 1
    }, {
      kg: 5,
      count: 1
    }, {
      kg: 1,
      count: 1
    }],
    height: 72
  })), resting ? /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 12,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Rest"), /*#__PURE__*/React.createElement(TimerRing, {
    progress: Math.min(1, seconds / rest),
    centerText: mmss,
    emphasized: seconds >= rest,
    pulsing: seconds >= rest - 5 && seconds < rest,
    size: 150
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "plain",
    size: "small",
    onClick: () => {
      setResting(false);
      setSeconds(0);
    }
  }, "Skip rest")) : /*#__PURE__*/React.createElement(MakeMissButtons, {
    onMade: () => log(true),
    onMiss: () => log(false)
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    radius: "row",
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "This exercise"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [1, 2, 3, 4, 5].map(n => {
    const done = logged[n - 1];
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        flex: 1,
        height: 44,
        borderRadius: 'var(--radius-row)',
        background: done === undefined ? 'var(--surface-elevated)' : done ? 'rgba(52,199,89,0.16)' : 'rgba(255,59,48,0.16)',
        display: 'grid',
        placeItems: 'center',
        border: n === setNo && !resting ? 'var(--border-accent-1)' : 'none'
      }
    }, done === undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-tertiary)'
      }
    }, n) : /*#__PURE__*/React.createElement(Icon, {
      name: done ? 'check' : 'x',
      size: 18,
      color: done ? 'var(--make)' : 'var(--miss)'
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "video",
      size: 16
    })
  }, "Film this set"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "flame",
      size: 16,
      color: "var(--amber)"
    })
  }, "Warm-up"))), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    radius: "row",
    style: {
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Last time \xB7 Mar 11"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)'
    }
  }, "5\xD72 @ 100 kg \u2014 all made, RPE 7.5")), /*#__PURE__*/React.createElement(Button, {
    variant: "plain",
    full: true,
    onClick: onExit
  }, "Finish session"));
}
Object.assign(window, {
  ActiveSession
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/ActiveSession.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/BarTraceHome.jsx
try { (() => {
/* OWLHomeView.swift — Bar Trace home. Import-first, then saved analyses. */

function BarTraceHome({
  onOpen
}) {
  const {
    Card,
    SectionLabel,
    Button,
    Icon,
    NavRow,
    Badge
  } = window.OWLDesignSystem_875173;
  const rows = [{
    t: 'Snatch · 102.5 kg',
    d: 'Mar 14, 6:12 PM',
    g: 'A',
    v: '1.78 m/s'
  }, {
    t: 'Clean & Jerk · 130 kg',
    d: 'Mar 12, 7:03 PM',
    g: 'B+',
    v: '1.42 m/s'
  }, {
    t: 'Snatch · 100 kg',
    d: 'Mar 11, 6:40 PM',
    g: 'A-',
    v: '1.74 m/s'
  }, {
    t: 'Power Clean · 110 kg',
    d: 'Mar 8, 5:58 PM',
    g: 'B',
    v: '1.51 m/s'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: owlKitShell.pad
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 14,
      paddingTop: 24,
      paddingBottom: 24,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "activity",
    size: 38,
    color: "var(--amber)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-primary)'
    }
  }, "Analyze a lift"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)',
      textAlign: 'center'
    }
  }, "Record or import a side-on clip. We trace the bar and measure speed \u2014 all on device."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "medium",
    full: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "video",
      size: 18
    })
  }, "Record"), /*#__PURE__*/React.createElement(Button, {
    size: "medium",
    full: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 18
    })
  }, "Import"))), /*#__PURE__*/React.createElement(SectionLabel, null, "Your analyses"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(NavRow, {
    key: r.t,
    title: r.t,
    caption: r.d,
    icon: "activity",
    chevron: false,
    onClick: i === 0 ? onOpen : undefined,
    accessory: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, null, r.g), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-headline)',
        color: 'var(--amber)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, r.v))
  }))));
}
Object.assign(window, {
  BarTraceHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/BarTraceHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/BarTracePlayer.jsx
try { (() => {
/* OWLPlayerView.swift — the flagship read-out. Video stage with the progressive
   trace, pro playback controls, score ring, metrics grid, velocity graph, phase
   breakdown, technique findings, tracking honesty. */

const OWL_PHASES = [{
  kind: 'firstPull',
  label: 'First pull',
  start: 0,
  end: 0.62,
  duration: 0.62,
  peakVelocity: 0.95
}, {
  kind: 'transition',
  label: 'Transition',
  start: 0.62,
  end: 0.80,
  duration: 0.18,
  peakVelocity: 0.81
}, {
  kind: 'secondPull',
  label: 'Second pull',
  start: 0.80,
  end: 1.04,
  duration: 0.24,
  peakVelocity: 1.78
}, {
  kind: 'turnover',
  label: 'Turnover',
  start: 1.04,
  end: 1.25,
  duration: 0.21,
  peakVelocity: 1.12
}, {
  kind: 'catch',
  label: 'Catch',
  start: 1.25,
  end: 1.55,
  duration: 0.30,
  peakVelocity: 0.20
}];
const OWL_SAMPLES = Array.from({
  length: 96
}, (_, i) => {
  const t = i / 95 * 1.55;
  const v = t < 0.62 ? 0.55 + t * 0.62 : t < 0.80 ? 0.94 - (t - 0.62) * 0.78 : t < 1.04 ? 0.80 + (t - 0.80) * 4.05 : t < 1.25 ? 1.78 - (t - 1.04) * 3.15 : Math.max(0.04, 1.12 - (t - 1.25) * 3.6);
  return {
    time: t,
    velocity: v
  };
});

/* The bar path: S-curve back toward the lifter, then loop over. Coordinates are
   in a 100×160 box so the overlay scales with the video stage. */
const OWL_TRACE = [[58, 152], [57, 140], [55, 126], [52, 112], [50, 98], [49, 86], [50, 72], [53, 58], [56, 46], [58, 36], [57, 28], [54, 22], [50, 19], [47, 20], [46, 24]];
function BarTracePlayer({
  onBack
}) {
  const {
    Card,
    SectionLabel,
    Badge,
    Button,
    Icon,
    ScoreRing,
    PhaseTimeline,
    VelocityChart,
    StatCard
  } = window.OWLDesignSystem_875173;
  const [t, setT] = React.useState(1.55);
  const [playing, setPlaying] = React.useState(false);
  const [rate, setRate] = React.useState(1);
  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT(x => {
      const n = x + 0.03 * rate;
      if (n >= 1.55) {
        setPlaying(false);
        return 1.55;
      }
      return n;
    }), 30);
    return () => clearInterval(id);
  }, [playing, rate]);
  const shown = Math.max(2, Math.round(t / 1.55 * OWL_TRACE.length));
  const pts = OWL_TRACE.slice(0, shown);
  const head = pts[pts.length - 1];
  const phaseAt = OWL_PHASES.find(p => t >= p.start && t <= p.end) || OWL_PHASES[0];
  return /*#__PURE__*/React.createElement("div", {
    style: owlKitShell.pad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      background: '#000',
      aspectRatio: '3 / 4'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/exercises/ex_snatch.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.72,
      filter: 'saturate(0.85)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 160",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts.map(p => p.join(',')).join(' '),
    fill: "none",
    stroke: "var(--amber)",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    style: {
      filter: 'drop-shadow(0 0 4px rgba(245,166,35,0.6))'
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: head[0],
    cy: head[1],
    r: "2.2",
    fill: "var(--amber)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "A \xB7 86"), /*#__PURE__*/React.createElement(Badge, {
    tone: "make"
  }, "Good tracking")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 12,
      background: 'var(--scrim-video)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, phaseAt.label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, t.toFixed(2), "s \xB7 frame ", Math.round(t * 60)))), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    radius: "row",
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "1.55",
    step: "0.01",
    value: t,
    onChange: e => setT(parseFloat(e.target.value)),
    style: {
      width: '100%',
      accentColor: 'var(--amber)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    icon: "chevron-left",
    onClick: () => setT(x => Math.max(0, x - 1 / 60))
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(p => !p),
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--amber)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: playing ? 'pause' : 'play',
    size: 22,
    color: "#000"
  })), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "chevron-right",
    onClick: () => setT(x => Math.min(1.55, x + 1 / 60))
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), [0.25, 0.5, 1].map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setRate(r),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '6px 10px',
      borderRadius: 'var(--radius-pill)',
      background: rate === r ? 'var(--amber-16)' : 'var(--surface-elevated)',
      color: rate === r ? 'var(--amber)' : 'var(--text-secondary)',
      font: 'var(--type-label)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r, "\xD7")))), /*#__PURE__*/React.createElement(ScoreRing, {
    total: 86,
    grade: "A",
    straightness: 0.92,
    smoothness: 0.78
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "1.78 m/s",
    label: "Peak speed",
    accent: "var(--amber)"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "1.21 m/s",
    label: "Mean pull"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "1.14 m",
    label: "Bar height"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "7 cm",
    label: "Horiz. drift"
  })), /*#__PURE__*/React.createElement(VelocityChart, {
    samples: OWL_SAMPLES,
    phases: OWL_PHASES,
    currentTime: t,
    onSeek: setT
  }), /*#__PURE__*/React.createElement(PhaseTimeline, {
    phases: OWL_PHASES,
    insight: "Bar speed drops 15% through the transition \u2014 a smoother scoop keeps the pull building."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    radius: "row",
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Positions"), [['Setup', 'Knee 68° · Hip 42°'], ['Transition', 'Knee 141° · Hip 96°'], ['Extension', 'Knee 172° · Hip 168°'], ['Catch', 'Knee 61° · Hip 55°']].map(([m, a]) => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-primary)'
    }
  }, m), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, "Bar stayed within 9 cm of the hip through the second pull.")), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    radius: "row",
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Technique findings"), [['Bar swings out at the knee', 'Push the floor away and keep the shoulders over the bar longer.'], ['Early arm bend', 'Stay long — let the legs finish before the elbows do anything.']].map(([n, cue]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--caution)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-headline)',
      color: 'var(--text-primary)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 15,
    color: "var(--glyph-decorative)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      paddingLeft: 16
    }
  }, cue)))), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    radius: "row",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 18,
    color: "var(--make)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, "Tracking quality: Good \u2014 plate visible in 98% of frames.")), /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    full: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "share-2",
      size: 18
    })
  }, "Share clip"));
}
function IconBtn({
  icon,
  onClick
}) {
  const {
    Icon
  } = window.OWLDesignSystem_875173;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--surface-elevated)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--text-primary)"
  }));
}
Object.assign(window, {
  BarTracePlayer,
  OWL_PHASES,
  OWL_SAMPLES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/BarTracePlayer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/Dashboard.jsx
try { (() => {
/* Train tab home — DashboardView.swift. Builder hero, week stats, today's
   session, recent PRs, next session, quick-link grid. */

function Dashboard({
  onStart,
  onNav
}) {
  const {
    Card,
    SectionLabel,
    Button,
    StatCard,
    Icon,
    NavRow
  } = window.OWLDesignSystem_875173;
  const prs = [{
    name: 'Snatch',
    kg: '102.5',
    date: 'Mar 14'
  }, {
    name: 'Clean & Jerk',
    kg: '130',
    date: 'Mar 12'
  }, {
    name: 'Front Squat',
    kg: '150',
    date: 'Mar 8'
  }];
  const links = [['Programs', 'list'], ['PRs', 'trophy'], ['History', 'history'], ['Exercises', 'library'], ['Technique', 'stethoscope'], ['Learn', 'graduation-cap']];
  return /*#__PURE__*/React.createElement("div", {
    style: owlKitShell.pad
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Custom workout"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-primary)'
    }
  }, "Train how you feel"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)'
    }
  }, "A quick check-in builds today's session around your energy, soreness, and equipment."), /*#__PURE__*/React.createElement(Button, {
    full: true
  }, "How are you feeling?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "12.4t",
    label: "Wk Tonnage"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "3/4",
    label: "Sessions"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "Peak",
    label: "Phase",
    accent: "var(--amber)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "From your program"), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Today's session"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-primary)'
    }
  }, "Snatch + Squat"), [['Snatch', '5×2 @ 102.5kg'], ['Clean Pull', '4×3 @ 140kg'], ['Front Squat', '5×3 @ RPE 8'], ['Back Extension', '3×10']].map(([n, s]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)'
    }
  }, n), /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 13,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, s))), /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    full: true,
    onClick: onStart
  }, "Start Session"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Recent PRs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      paddingBottom: 2
    }
  }, prs.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: 12,
    style: {
      width: 110,
      flex: '0 0 auto',
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-stat-value)',
      color: 'var(--amber)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.kg, "kg"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, p.date))))), /*#__PURE__*/React.createElement(NavRow, {
    title: "Specification \u2014 Day 2",
    caption: "NEXT \xB7 THU",
    icon: "calendar"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, links.map(([label, icon]) => /*#__PURE__*/React.createElement(Card, {
    key: label,
    padding: 10,
    onClick: () => onNav && onNav(label),
    style: {
      minHeight: 70,
      display: 'grid',
      gap: 6,
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: "var(--amber)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-primary)'
    }
  }, label)))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/Shell.jsx
try { (() => {
/* Shared chrome for the OWL app kit: screen scaffold, iOS large-title header,
   and the amber back bar. Reads only design-system tokens. */

const owlKitShell = {
  screen: {
    minHeight: '100%',
    background: 'var(--bg)',
    display: 'flex',
    flexDirection: 'column'
  },
  scroll: {
    flex: 1,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch'
  },
  pad: {
    padding: 'var(--screen-padding)',
    display: 'grid',
    gap: 16,
    alignContent: 'start'
  }
};
function OwlLargeTitle({
  title,
  trailing
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '52px 16px 4px',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.4px',
      color: 'var(--text-primary)'
    }
  }, title), trailing);
}
function OwlInlineNav({
  title,
  onBack,
  backLabel = 'Back',
  trailing
}) {
  const {
    Icon
  } = window.OWLDesignSystem_875173;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '52px 12px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(26,26,26,0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: 'var(--border-hairline-1)',
      position: 'sticky',
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      color: 'var(--amber)',
      font: 'var(--type-body)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 20,
    color: "var(--amber)"
  }), backLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      textAlign: 'center',
      pointerEvents: 'none',
      font: 'var(--type-headline)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), trailing);
}
function OwlStreakChip({
  streak = 4
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-headline)',
      color: 'var(--amber)'
    }
  }, streak));
}
Object.assign(window, {
  owlKitShell,
  OwlLargeTitle,
  OwlInlineNav,
  OwlStreakChip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/ToolsHub.jsx
try { (() => {
/* ToolsHubView.swift — Video / Prepare / Daily / Competition, all offline. */

function ToolsHub({
  onOpenBarTrace
}) {
  const {
    SectionLabel,
    ToolTile
  } = window.OWLDesignSystem_875173;
  const daily = [['Training %', 'Loads off a PR', 'percent'], ['Barbell Loader', 'Plate diagram', 'dumbbell'], ['1RM Estimator', 'From a submax set', 'trending-up'], ['Strength Ratios', 'Find your limiter', 'scale'], ['kg ↔ lb', 'Unit converter', 'arrow-left-right']];
  const comp = [['Meet Day', 'Warm-up room & attempts', 'clipboard-list'], ['Sinclair', 'Cross-class score', 'medal'], ['Robi Points', 'Vs. world record', 'trophy'], ['World Records', 'IWF categories', 'globe']];
  const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12
  };
  return /*#__PURE__*/React.createElement("div", {
    style: owlKitShell.pad
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Video"), /*#__PURE__*/React.createElement(ToolTile, {
    title: "Bar Trace",
    subtitle: "Trace & measure a lift",
    icon: "activity",
    onClick: onOpenBarTrace
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Prepare"), /*#__PURE__*/React.createElement(ToolTile, {
    title: "Warm-Up",
    subtitle: "RAMP protocol + bar ramp",
    icon: "flame"
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Daily"), /*#__PURE__*/React.createElement("div", {
    style: grid
  }, daily.map(([t, s, i]) => /*#__PURE__*/React.createElement(ToolTile, {
    key: t,
    title: t,
    subtitle: s,
    icon: i
  }))), /*#__PURE__*/React.createElement(SectionLabel, null, "Competition"), /*#__PURE__*/React.createElement("div", {
    style: grid
  }, comp.map(([t, s, i]) => /*#__PURE__*/React.createElement(ToolTile, {
    key: t,
    title: t,
    subtitle: s,
    icon: i
  }))));
}
Object.assign(window, {
  ToolsHub
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/ToolsHub.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Chrome.jsx
try { (() => {
/* Shared building blocks for the landing page. */

const owlSiteWrap = {
  maxWidth: 1240,
  margin: '0 auto',
  padding: '0 clamp(20px,5vw,60px)'
};
function SiteNav() {
  const {
    Button
  } = window.OWLDesignSystem_875173;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(26,26,26,0.82)',
      backdropFilter: 'blur(20px)',
      borderBottom: 'var(--border-hairline-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...owlSiteWrap,
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      height: 68
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/owl-logo.svg",
    alt: "OWL",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26
    },
    className: "site-nav-links"
  }, [['Pillars', '#pillars'], ['Explore', '#explore'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    onClick: () => {
      const el = document.getElementById('pricing');
      if (el) window.scrollTo({
        top: el.offsetTop - 88,
        behavior: 'smooth'
      });
    }
  }, "Get OWL")));
}

/** Section heading. `eyebrow` is the amber uppercase label the app uses. */
function SiteHead({
  eyebrow,
  title,
  body,
  center = false,
  max = 640,
  accent = 'var(--amber)'
}) {
  const {
    SectionLabel
  } = window.OWLDesignSystem_875173;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      maxWidth: max,
      margin: center ? '0 auto' : undefined,
      textAlign: center ? 'center' : 'left',
      justifyItems: center ? 'center' : 'start'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "amber",
    style: {
      color: accent
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(30px,3.4vw,48px)',
      lineHeight: 1.06,
      letterSpacing: '-1px',
      color: 'var(--text-primary)'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, body));
}

/** A real app screenshot in a minimal dark bezel. */
function Shot({
  src,
  alt,
  width = 300,
  caption
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'grid',
      gap: 12,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      borderRadius: 34,
      overflow: 'hidden',
      background: '#000',
      border: '1px solid rgba(255,255,255,0.14)',
      boxShadow: '0 30px 70px rgba(0,0,0,0.55)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      display: 'block'
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)',
      textAlign: 'center',
      maxWidth: width
    }
  }, caption));
}

/** App Store CTA button — used in hero, pricing, and footer. */
function AppStoreButton({
  size = 'large'
}) {
  const {
    Button
  } = window.OWLDesignSystem_875173;
  return /*#__PURE__*/React.createElement("a", {
    href: OWL_SITE.links.appStore,
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: size
  }, OWL_SITE.ctaPrimary));
}
Object.assign(window, {
  owlSiteWrap,
  SiteNav,
  SiteHead,
  Shot,
  AppStoreButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Comparison.jsx
try { (() => {
const COMPARISON_ROWS = [['Hardware required', 'No', 'No', 'Yes $249+'], ['Built for competitive weightlifting', 'Yes', '\u2013', '\u2013'], ['Adapts today\u2019s session to how you feel', 'Yes', '\u2013', '\u2013'], ['Periodized programs', 'Yes', '\u2013', '\u2013'], ['Lift phase breakdown', 'Yes', '\u2013', '\u2013'], ['Illustrated exercise library', 'Yes', '\u2013', '\u2013'], ['Miss diagnosis + corrective drills', 'Yes', '\u2013', '\u2013'], ['Meet day planning', 'Yes', '\u2013', '\u2013'], ['Sinclair, Robi, IWF classes', 'Yes', '\u2013', '\u2013'], ['Plate loading for your gym', 'Yes', '\u2013', '\u2013'], ['Bar path video', 'Yes', 'Yes', 'Yes'], ['Bar velocity', 'Camera', 'Camera', 'Sensor'], ['Imports hardware VBT data', 'Yes', '\u2013', '\u2013'], ['Unlimited free training history', 'Yes', '\u2013', 'Yes'], ['Training log book & reflections', 'Yes', '\u2013', '\u2013'], ['Team roster & leaderboards', '\u2013', 'Yes', 'Yes'], ['Android', '\u2013', 'Yes', 'Yes']];
function Comparison() {
  return /*#__PURE__*/React.createElement("section", {
    id: "compare",
    style: {
      padding: 'clamp(60px,7vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: owlSiteWrap
  }, /*#__PURE__*/React.createElement(SiteHead, {
    center: true,
    title: "How OWL stacks up.",
    max: 640
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      borderRadius: 16,
      overflow: 'hidden',
      border: 'var(--border-hairline-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      background: 'var(--surface)'
    },
    className: "compare-head"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      textAlign: 'center',
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "Metric"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      textAlign: 'center',
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "OVR Connect"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      textAlign: 'center',
      background: 'var(--surface-elevated)',
      font: 'var(--type-headline)',
      fontWeight: 700,
      color: 'var(--amber)'
    }
  }, "OWL")), COMPARISON_ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      background: i % 2 ? '#1e1e1e' : 'var(--bg)',
      borderTop: 'var(--border-hairline-1)'
    },
    className: "compare-row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '15px 18px',
      font: 'var(--type-subheadline)',
      color: 'var(--text-primary)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    className: "owl-numeric",
    style: {
      padding: 15,
      textAlign: 'center',
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)'
    }
  }, r[1]), /*#__PURE__*/React.createElement("div", {
    className: "owl-numeric",
    style: {
      padding: 15,
      textAlign: 'center',
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)'
    }
  }, r[2]), /*#__PURE__*/React.createElement("div", {
    className: "owl-numeric",
    style: {
      padding: 15,
      textAlign: 'center',
      background: 'rgba(245,166,35,0.06)',
      font: 'var(--type-subheadline)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, r[3]))))));
}
Object.assign(window, {
  Comparison
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Comparison.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Explore.jsx
try { (() => {
const EXPLORE_GROUPS = [{
  g: 'Train',
  items: [{
    k: 'pr',
    label: 'PR tracker',
    body: 'Every 1-rep max, logged the moment you hit it.',
    src: '../../assets/screens/03-pr-tracker.png'
  }, {
    k: 'chart',
    label: 'Progress charts',
    body: 'Snatch, clean & jerk, and every accessory, charted over time.',
    src: '../../assets/screens/04-exercise-progress-chart-snatch.png'
  }, {
    k: 'warmup',
    label: 'Warm-up ramps',
    body: 'Raise, potentiate, ramp \u2014 sets built the way a coach would jump you.',
    src: '../../assets/screens/09-warmup-raise-phase.png'
  }]
}, {
  g: 'Learn',
  items: [{
    k: 'library',
    label: 'Exercise library',
    body: 'Illustrated library for every lift and accessory.',
    src: '../../assets/screens/05-exercise-library.png'
  }, {
    k: 'detail',
    label: 'Lift detail',
    body: 'Cues, video, and common faults for the snatch.',
    src: '../../assets/screens/06-exercise-detail-snatch.png'
  }, {
    k: 'learn',
    label: 'Learn the Lifts',
    body: 'Step-by-step breakdowns of the classic lifts.',
    src: '../../assets/screens/07-learn-the-snatch.png'
  }]
}, {
  g: 'Calculate',
  items: [{
    k: '1rm',
    label: '1RM estimator',
    body: 'Estimate a true max without testing it.',
    src: '../../assets/screens/19-1rm-estimator.png'
  }, {
    k: 'ratios',
    label: 'Strength ratios',
    body: 'Where your lifts sit relative to each other.',
    src: '../../assets/screens/20-strength-ratios.png'
  }, {
    k: 'records',
    label: 'World records',
    body: 'IWF records by class, for reference against your own.',
    src: '../../assets/screens/22-world-records.png'
  }]
}, {
  g: 'Coach Studio',
  items: [{
    k: 'editor',
    label: 'Program editor',
    body: 'Author a multi-week cycle from scratch.',
    src: '../../assets/screens/31-coach-studio-program-editor.png'
  }, {
    k: 'share',
    label: 'Share a program',
    body: 'Send a finished program straight to an athlete.',
    src: '../../assets/screens/32-coach-studio-program-list-share.png'
  }]
}, {
  g: 'Setup',
  items: [{
    k: 'gym',
    label: 'Gym profile',
    body: 'Tell OWL what plates and bars your gym actually has.',
    src: '../../assets/screens/30-gym-profile-equipment.png'
  }, {
    k: 'integrations',
    label: 'Integrations',
    body: 'HealthKit, Strava, CSV \u2014 your data, your call.',
    src: '../../assets/screens/36-settings-integrations.png'
  }, {
    k: 'about',
    label: 'About the data',
    body: 'What\u2019s tracked, what\u2019s not, and why.',
    src: '../../assets/screens/37-about-the-data.png'
  }]
}];
const EXPLORE_FLAT = EXPLORE_GROUPS.flatMap(g => g.items);
function Explore() {
  const [active, setActive] = React.useState(EXPLORE_FLAT[0].k);
  const current = EXPLORE_FLAT.find(i => i.k === active) || EXPLORE_FLAT[0];
  return /*#__PURE__*/React.createElement("section", {
    id: "explore",
    style: {
      padding: 'clamp(60px,7vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: owlSiteWrap
  }, /*#__PURE__*/React.createElement(SiteHead, {
    eyebrow: "Everything else",
    title: "Every feature, one tap away.",
    max: 640,
    body: "The pillars above are the headline. Here's the rest of what's in the app."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)',
      gap: 'clamp(28px,4vw,60px)',
      alignItems: 'start'
    },
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28
    }
  }, EXPLORE_GROUPS.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.g,
    style: {
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '4px 0'
    }
  }, group.g), group.items.map(item => {
    const isActive = item.k === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.k,
      onClick: () => setActive(item.k),
      style: {
        display: 'grid',
        gap: 4,
        textAlign: 'left',
        width: '100%',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        borderLeft: isActive ? '2px solid var(--amber)' : '2px solid transparent',
        padding: '10px 0 10px 16px',
        borderRadius: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-headline)',
        fontWeight: 700,
        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)'
      }
    }, item.label), isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-subheadline)',
        color: 'var(--text-secondary)'
      }
    }, item.body));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 100,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Shot, {
    key: current.k,
    src: current.src,
    alt: current.label,
    width: 260
  })))));
}
Object.assign(window, {
  Explore
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Explore.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/FAQFooter.jsx
try { (() => {
function FAQItem({
  q,
  a
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-hairline-1)',
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      font: 'var(--type-headline)',
      color: 'var(--text-primary)'
    }
  }, q, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-tertiary)',
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'transform 150ms'
    }
  }, "+")), open && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      maxWidth: '70ch'
    }
  }, a));
}
function FAQ() {
  const items = [['Is it really free?', 'Yes. Training log, the adaptive daily builder, all five programs, the PR tracker, the illustrated exercise library, every calculator, and three bar-path analyses a month never expire and never lock.'], ['Do I have to follow a fixed program?', 'No. Tell OWL how you feel, what\u2019s sore, and how much time you have, and it builds the session \u2014 or run one of the five periodized programs if you want a full cycle. Either way, nothing is locked: reorder, swap, or adjust anything before or during the workout.'], ['Do I need any hardware?', 'No. Bar Trace reads speed, path and phase timing from a phone video \u2014 no sensor, no clip-on unit, no pairing.'], ['How accurate is the video analysis?', 'It depends on the clip: side-on, whole bar in frame, steady phone. When tracking is weak, OWL says so and shows the evidence, rather than giving you a number it can\u2019t back up.'], ['Does my data leave my phone?', 'No. Analysis runs on-device. Nothing is uploaded, and there\u2019s no account required to use it.'], ['Kilos only?', 'Yes \u2014 kg is the only unit, matching IWF competition and the way the sport is actually coached.'], ['Android?', 'Not yet. OWL is iOS-only today.'], ['Do I have to fill any of this in?', 'No. Every field is optional, nothing is scored, and skipping it costs you nothing. OWL suggests a reflection every few weeks and that suggestion is dismissible.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      padding: 'clamp(60px,7vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...owlSiteWrap,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(SiteHead, {
    title: "Questions.",
    max: 640
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, items.map(([q, a]) => /*#__PURE__*/React.createElement(FAQItem, {
    key: q,
    q: q,
    a: a
  })))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'clamp(48px,6vw,80px) 0 56px',
      borderTop: 'var(--border-hairline-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...owlSiteWrap,
      display: 'grid',
      gap: 24,
      justifyItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/owl-logo.svg",
    alt: "OWL",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement(AppStoreButton, {
    size: "medium"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: OWL_SITE.links.privacy
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: OWL_SITE.links.terms
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: OWL_SITE.links.support
  }, "Support")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '68ch',
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, "Built for competitive weightlifting. Sinclair coefficients are the official 2021\u20132024 IWF values. World-record data should be verified against iwf.sport. Lifting Lab is not affiliated with, endorsed by, or connected to the IWF, USA Weightlifting, or any equipment manufacturer.")));
}
Object.assign(window, {
  FAQItem,
  FAQ,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/FAQFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'radial-gradient(110% 80% at 76% 6%, rgba(245,166,35,0.16), transparent 60%), var(--bg)',
      paddingBottom: 'clamp(56px,7vw,104px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...owlSiteWrap,
      paddingTop: 'clamp(56px,7vw,96px)',
      display: 'grid',
      gap: 'clamp(32px,4vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22,
      justifyItems: 'start',
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 14px',
      borderRadius: 999,
      background: 'var(--surface)',
      border: 'var(--border-hairline-1)',
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, "Built for competitive weightlifting"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(44px,5.4vw,64px)',
      lineHeight: 1.0,
      letterSpacing: '-2px',
      color: 'var(--text-primary)'
    }
  }, "The coach you don't have."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '52ch',
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, "OWL programs your cycle, analyzes your lifts frame by frame, tells you why the last one missed, and gets you through meet day. Built for one sport."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(AppStoreButton, null), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, OWL_SITE.ctaNote))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 28,
      alignItems: 'end'
    },
    className: "hero-pair"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 300,
      borderRadius: 34,
      overflow: 'hidden',
      background: '#000',
      border: '1px solid rgba(255,255,255,0.14)',
      boxShadow: '0 30px 70px rgba(0,0,0,0.55)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/screens/08-readiness-checkin.png",
    alt: "Readiness check-in: energy, soreness and time build today's session",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)',
      textAlign: 'center',
      maxWidth: 300
    }
  }, "Tell it how you feel \u2014 it builds the session")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gap: 14,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-8% -8% 20%',
      background: 'radial-gradient(circle, rgba(245,166,35,0.14), transparent 65%)',
      filter: 'blur(8px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 300,
      borderRadius: 34,
      overflow: 'hidden',
      background: '#000',
      border: '1px solid rgba(255,255,255,0.14)',
      boxShadow: '0 30px 70px rgba(0,0,0,0.55)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/screens/15-bar-trace-analysis-detail.png",
    alt: "Bar Trace: skeleton overlay, bar path and phase split on a snatch turnover",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)',
      textAlign: 'center',
      maxWidth: 300
    }
  }, "Film a set \u2014 it reads the pull, phase by phase")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/LogBook.jsx
try { (() => {
function LogBookTimeline() {
  const {
    Card,
    SectionLabel
  } = window.OWLDesignSystem_875173;
  const entries = [{
    kind: 'reflection',
    label: 'Reflection',
    title: 'Weeks 9–11',
    sub: 'Sleep: Solid · Fatigue: Heavy'
  }, {
    kind: 'session',
    label: 'Session',
    title: 'Snatch + Back Squat',
    sub: '“Third rep felt heavy, backed off 5kg.”'
  }, {
    kind: 'session',
    label: 'Session',
    title: 'Clean & Jerk technique',
    sub: 'No notes'
  }, {
    kind: 'reflection',
    label: 'Reflection',
    title: 'Weeks 6–8',
    sub: 'Fatigue: Wrecked · Consistency: Patchy'
  }];
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      background: 'var(--bg)',
      padding: 22,
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "secondary",
    style: {
      marginBottom: 8
    }
  }, "November"), entries.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      padding: '12px 0',
      borderTop: i ? '1px solid rgba(255,255,255,0.06)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: 3,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: e.kind === 'reflection' ? 'var(--amber)' : 'var(--text-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: e.kind === 'reflection' ? 'var(--amber)' : 'var(--text-tertiary)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, e.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-subheadline)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, e.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, e.sub)))));
}
function LogBook() {
  return /*#__PURE__*/React.createElement("section", {
    id: "logbook",
    style: {
      padding: 'clamp(60px,7vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...owlSiteWrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'clamp(28px,4vw,60px)',
      alignItems: 'center'
    },
    className: "split"
  }, /*#__PURE__*/React.createElement(SiteHead, {
    eyebrow: "Log book",
    title: "A log book for what a sensor can't measure.",
    max: 560,
    body: "Sessions and reflections land on one timeline. Nothing is required, nothing is scored, and the chart knows five-out-of-five sleep is good news while five-out-of-five fatigue is not."
  }), /*#__PURE__*/React.createElement(LogBookTimeline, null)));
}
Object.assign(window, {
  LogBook
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/LogBook.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Pillars.jsx
try { (() => {
function Pillar({
  eyebrow,
  title,
  body,
  shots,
  reverse
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: reverse ? 'minmax(0,1.1fr) minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 'clamp(28px,4vw,60px)',
      alignItems: 'center'
    },
    className: "split"
  }, reverse ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SiteHead, {
    eyebrow: eyebrow,
    title: title,
    body: body,
    max: 520
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      justifyContent: 'center'
    }
  }, shots)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      justifyContent: 'center'
    }
  }, shots), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SiteHead, {
    eyebrow: eyebrow,
    title: title,
    body: body,
    max: 520
  }))));
}
function Pillars() {
  return /*#__PURE__*/React.createElement("section", {
    id: "pillars",
    style: {
      padding: 'clamp(60px,7vw,110px) 0',
      display: 'grid',
      gap: 'clamp(60px,7vw,100px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: owlSiteWrap
  }, /*#__PURE__*/React.createElement(Pillar, {
    eyebrow: "It builds today's session",
    title: "Tell it how you feel. It builds the workout.",
    body: "Tell OWL how you feel, what's sore, what's in your gym, and how much time you've got. It builds a full session around that \u2014 the right classic lift for today's rotation, strength work that avoids what's sore, accessories that balance the day out. Then it's yours: reorder it, swap anything, dial a block up or down, and once you start, work through it in whatever order you want. OWL builds the session. You run it.",
    shots: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Shot, {
      src: "../../assets/screens/08-readiness-checkin.png",
      alt: "Readiness check-in: energy, soreness, equipment and time",
      width: 240
    }), /*#__PURE__*/React.createElement(Shot, {
      src: "../../assets/screens/11-session-hub.png",
      alt: "Resulting session: reorder, swap, dial blocks up or down",
      width: 240
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: owlSiteWrap
  }, /*#__PURE__*/React.createElement(Pillar, {
    reverse: true,
    eyebrow: "It programs the cycle",
    title: "Five programs, loaded off your real PRs.",
    body: "Technique, strength, specification, peak, and a masters cycle \u2014 periodized templates that load off your real PRs, not a generic template. Every set arrives with the target weight, the percentage, and the plates for your bar. Miss a session and OWL reschedules it instead of scolding you.",
    shots: /*#__PURE__*/React.createElement(Shot, {
      src: "../../assets/screens/02-programs-list.png",
      alt: "Programs list: five periodized cycles",
      width: 260
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: owlSiteWrap
  }, /*#__PURE__*/React.createElement(Pillar, {
    eyebrow: "It sees the lift",
    title: "Film a set. OWL reads the pull.",
    body: "Film a set, right from your session. OWL tracks the plate through the whole lift and breaks it into first pull, transition, second pull, turnover, and catch \u2014 then scores the path and shows you the drift. Compare today's snatch against your best one. And when the tracking isn't clean, OWL tells you that too, instead of pretending.",
    shots: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Shot, {
      src: "../../assets/screens/16-bar-trace-compare.png",
      alt: "Compare: two lifts overlaid at true scale",
      width: 230
    }), /*#__PURE__*/React.createElement(Shot, {
      src: "../../assets/screens/15b-bar-trace-live-metrics.png",
      alt: "Bar Trace metrics: peak speed, mean pull speed, bar height",
      width: 230
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: owlSiteWrap
  }, /*#__PURE__*/React.createElement(Pillar, {
    reverse: true,
    eyebrow: "It knows the sport",
    title: "Built on Sinclair, Robi, and IWF classes.",
    body: "Sinclair and Robi. IWF weight classes and world records. Prilepin. Plate math for your gym's actual inventory. Warm-up ramps that shape jumps the way a coach would. An illustrated library for every lift. And a meet-day planner that counts attempts, not minutes, so you're warm when the bar is loaded.",
    shots: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Shot, {
      src: "../../assets/screens/21-sinclair.png",
      alt: "Sinclair score calculator",
      width: 230
    }), /*#__PURE__*/React.createElement(Shot, {
      src: "../../assets/screens/17-barbell-loader.png",
      alt: "Barbell loader: plate math for your gym",
      width: 230
    }))
  })));
}
Object.assign(window, {
  Pillars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Pillars.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Pricing.jsx
try { (() => {
function Pricing() {
  const {
    Card,
    SectionLabel,
    Icon
  } = window.OWLDesignSystem_875173;
  const {
    free,
    pro,
    coach,
    founding
  } = OWL_SITE.pricing;
  const tiers = [{
    t: free.name,
    price: free.price,
    note: 'Unlimited training log and history, forever.',
    highlight: false,
    items: ['Adaptive daily workout builder \u2014 feel, soreness, equipment, time', 'All 5 periodized programs', 'PR tracker', 'Illustrated exercise library (71 movements)', 'Log book \u2014 per-session notes, periodic reflections, and trends', 'Every calculator \u2014 plate loader, 1RM, % table, Prilepin, Sinclair, Robi, ratios, world records', 'Warm-up generator', 'Learn the Lifts', '3 bar-path analyses per month', 'HealthKit + Strava', 'CSV export']
  }, {
    t: pro.name,
    price: pro.monthly,
    sub: `${pro.yearly} \u00b7 ${pro.lifetime}`,
    note: 'The unlock for Bar Trace at full depth.',
    highlight: true,
    items: ['Unlimited analyses', 'Side-by-side compare', 'Fix My Miss + Technique Doctor', 'Meet Day', 'Multi-week program authoring (Coach Studio)', 'Hardware VBT import', 'Advanced analytics', 'iCloud clip sync']
  }, {
    t: coach.name,
    price: coach.monthly,
    sub: coach.yearly,
    note: 'Flat price, unlimited athletes, never per-athlete.',
    highlight: false,
    items: ['Everything in Pro', 'Receive completed sessions from athletes', 'Annotate a clip and send it back', 'Program distribution']
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      background: 'var(--surface)',
      padding: 'clamp(60px,7vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...owlSiteWrap,
      display: 'grid',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement(SiteHead, {
    center: true,
    eyebrow: "Pricing",
    title: "Free, unlimited, forever.",
    max: 720,
    body: "The training log, programs, and calculators never expire and never lock. Pro adds full-depth video analysis. Coach adds a roster."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 16,
      maxWidth: 1080,
      margin: '0 auto',
      width: '100%'
    }
  }, tiers.map(tier => /*#__PURE__*/React.createElement(Card, {
    key: tier.t,
    style: {
      background: 'var(--bg)',
      display: 'grid',
      gap: 14,
      alignContent: 'start',
      border: tier.highlight ? 'var(--border-accent-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: tier.highlight ? 'amber' : 'secondary'
  }, tier.t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-title)',
      fontSize: 34,
      fontWeight: 900,
      color: tier.highlight ? 'var(--amber)' : 'var(--text-primary)'
    }
  }, tier.price)), tier.sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, tier.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)',
      fontWeight: 600
    }
  }, tier.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8,
      marginTop: 4
    }
  }, tier.items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: tier.highlight ? 'var(--amber)' : 'var(--make)',
    style: {
      marginTop: 3,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      justifyItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(AppStoreButton, null), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, OWL_SITE.ctaNote))));
}
Object.assign(window, {
  Pricing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Problem.jsx
try { (() => {
function Problem() {
  const {
    Card
  } = window.OWLDesignSystem_875173;
  const cards = [['Your program lives in a spreadsheet.', 'Percentages calculated by hand, on a phone, covered in chalk.'], ['You missed. You don\u2019t know why.', 'The lift felt fine until it wasn\u2019t, and there\u2019s nobody watching.'], ['Your first meet is in six weeks.', 'Nobody has explained what actually happens in the warm-up room.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "problem",
    style: {
      padding: 'clamp(56px,6vw,90px) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...owlSiteWrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 16
    }
  }, cards.map(([h, b]) => /*#__PURE__*/React.createElement(Card, {
    key: h,
    style: {
      display: 'grid',
      gap: 10,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-primary)'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-subheadline)',
      color: 'var(--text-secondary)'
    }
  }, b)))));
}
Object.assign(window, {
  Problem
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Problem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Progress.jsx
try { (() => {
function Progress() {
  return /*#__PURE__*/React.createElement("section", {
    id: "progress",
    style: {
      background: 'radial-gradient(80% 100% at 88% 10%, rgba(245,166,35,0.10), transparent 60%), var(--surface)',
      padding: 'clamp(60px,7vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...owlSiteWrap,
      display: 'grid',
      gap: 'clamp(40px,5vw,64px)'
    }
  }, /*#__PURE__*/React.createElement(SiteHead, {
    center: true,
    eyebrow: "Progress",
    title: "Every session counts for something.",
    max: 680,
    body: "Levels and streaks built from your actual training \u2014 sessions finished, sets made, tonnage moved, PRs set, weeks run perfectly. Badges unlock for real milestones across strength, Sinclair, programs completed, and lifts analyzed. No fake points: it's computed straight from your log, so your history counts from day one."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 'clamp(28px,4vw,60px)',
      alignItems: 'center'
    },
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Shot, {
    src: "../../assets/screens/27-progress-levels-xp-badges.png",
    alt: "Level ring and streak, computed from real training",
    width: 240
  }), /*#__PURE__*/React.createElement(Shot, {
    src: "../../assets/screens/28-badges-grid-full.png",
    alt: "Badge grid: unlocked in full color, locked desaturated",
    width: 240
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Shot, {
    src: "../../assets/screens/29-badge-detail-first-blood.png",
    alt: "Badge unlocked share card",
    width: 260
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, "Shareable, one tap")))));
}
Object.assign(window, {
  Progress
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Progress.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Spotlight.jsx
try { (() => {
function FixMyMiss() {
  return /*#__PURE__*/React.createElement("section", {
    id: "fix-my-miss",
    style: {
      background: 'radial-gradient(90% 120% at 12% 50%, rgba(255,59,48,0.12), transparent 60%), var(--surface)',
      padding: 'clamp(60px,7vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...owlSiteWrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)',
      gap: 'clamp(28px,4vw,60px)',
      alignItems: 'center'
    },
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SiteHead, {
    eyebrow: "Fix My Miss",
    accent: "var(--miss)",
    title: "Missed it? Say where.",
    max: 520,
    body: "One tap after a miss \u2014 in front, behind, soft elbows, crashed on the shoulders \u2014 and OWL gives you the likely causes, the drills that fix them, and a cue to take into the next set. It's the conversation you'd have with a coach standing three metres away."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Shot, {
    src: "../../assets/screens/33-technique-doctor-list.png",
    alt: "Fix My Miss: select where the lift went wrong",
    width: 230
  }), /*#__PURE__*/React.createElement(Shot, {
    src: "../../assets/screens/34-technique-doctor-detail.png",
    alt: "Fix My Miss: likely causes and corrective drills",
    width: 230
  }))));
}
function MeetDay() {
  return /*#__PURE__*/React.createElement("section", {
    id: "meet-day",
    style: {
      padding: 'clamp(60px,7vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...owlSiteWrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)',
      gap: 'clamp(28px,4vw,60px)',
      alignItems: 'center'
    },
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Shot, {
    src: "../../assets/screens/24-meet-day-warmup-room.png",
    alt: "Meet Day: warm-up room, attempts not the clock",
    width: 230
  }), /*#__PURE__*/React.createElement(Shot, {
    src: "../../assets/screens/25-meet-day-attempt-board.png",
    alt: "Meet Day: six-attempt board",
    width: 230
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SiteHead, {
    eyebrow: "Meet Day",
    title: "Your first meet, handled.",
    max: 520,
    body: "The warm-up room runs on attempts, not the clock. OWL counts them for you, tells you when to take your next warm-up, holds you in a pattern when the count stretches, and tracks your six attempts on the board. Openers you'll make. Totals you'll keep."
  }))));
}
Object.assign(window, {
  FixMyMiss,
  MeetDay
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Spotlight.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/config.jsx
try { (() => {
/* OWL landing page — configuration. Post-prelaunch presentation: designed to
   read correctly once the App Store listing exists, even though today the
   button still points nowhere. */

const OWL_SITE = {
  pricing: {
    free: {
      name: 'Free',
      price: '$0'
    },
    pro: {
      name: 'Pro',
      monthly: '$4.99/mo',
      yearly: '$29.99/yr',
      lifetime: '$79.99 lifetime'
    },
    coach: {
      name: 'Coach',
      monthly: '$12.99/mo',
      yearly: '$99/yr'
    }
  },
  links: {
    appStore: '#app-store',
    privacy: '#privacy',
    terms: '#terms',
    support: 'mailto:support@owl.example'
  },
  ctaPrimary: 'Download on the App Store',
  ctaNote: 'Free. No account required.'
};
Object.assign(window, {
  OWL_SITE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/config.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.BigNumberCard = __ds_scope.BigNumberCard;

__ds_ns.PHASE_COLORS = __ds_scope.PHASE_COLORS;

__ds_ns.PhaseTimeline = __ds_scope.PhaseTimeline;

__ds_ns.PlateDiagram = __ds_scope.PlateDiagram;

__ds_ns.ScoreRing = __ds_scope.ScoreRing;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.VelocityChart = __ds_scope.VelocityChart;

__ds_ns.BadgeToast = __ds_scope.BadgeToast;

__ds_ns.TrackingQuality = __ds_scope.TrackingQuality;

__ds_ns.TraceVerdict = __ds_scope.TraceVerdict;

__ds_ns.WeightField = __ds_scope.WeightField;

__ds_ns.NavRow = __ds_scope.NavRow;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.ToolTile = __ds_scope.ToolTile;

__ds_ns.MakeMissButtons = __ds_scope.MakeMissButtons;

__ds_ns.SetTarget = __ds_scope.SetTarget;

__ds_ns.TimerRing = __ds_scope.TimerRing;

})();
