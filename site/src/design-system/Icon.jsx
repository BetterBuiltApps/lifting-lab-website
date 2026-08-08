import React from 'react';

/**
 * SF Symbols substitute. The app uses SF Symbols exclusively (Apple's font is
 * not redistributable), so on the web we inline Lucide SVGs — matching stroke
 * weight and rounded caps — and let them inherit currentColor.
 *
 * The paths are inlined rather than used as a CSS mask: inline markup survives
 * DOM-serializing renderers (html-to-image, print, PDF export) that drop
 * `mask-image`.
 *
 * These used to be fetched per-name from unpkg.com at runtime, which put a
 * third-party CDN on the render path: icons popped in after paint, and any CSP,
 * offline preview, or unpkg outage silently rendered nothing (the catch cached
 * an empty string). The site uses exactly three icons, so they are vendored
 * here instead — no network, no dependency, no flash.
 *
 * Copied verbatim from lucide-static v0.544.0 (ISC). To add one, take the
 * <path> children from node_modules or unpkg.com/lucide-static@0.544.0/icons/
 * and paste them below; keep the version note accurate so the source is
 * traceable.
 */
const ICONS = {
  menu: <><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></>,
  x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
};

export function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2, style, ...rest }) {
  const glyph = ICONS[name];
  if (!glyph && name && import.meta.env.DEV) {
    console.warn(`<Icon name="${name}"> is not vendored. Add it to ICONS in design-system/Icon.jsx.`);
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false"
      style={{ display: 'inline-block', flex: '0 0 auto', verticalAlign: 'middle', ...style }}
      {...rest}
    >
      {glyph || null}
    </svg>
  );
}
