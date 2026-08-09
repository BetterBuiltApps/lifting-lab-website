import React from 'react';

/**
 * SF Symbols substitute. The app uses SF Symbols exclusively (Apple's font is
 * not redistributable), so on the web we inline Lucide SVGs, matching stroke
 * weight and rounded caps, and let them inherit currentColor.
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
    if (!name || cache.has(name)) { setMarkup(cache.get(name) || null); return; }
    let live = true;
    fetch(`${CDN}${name}.svg`)
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((t) => {
        // Keep only the drawable children; the wrapper <svg> is ours.
        const inner = t.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
        cache.set(name, inner);
        if (live) setMarkup(inner);
      })
      .catch(() => { cache.set(name, ''); if (live) setMarkup(''); });
    return () => { live = false; };
  }, [name]);
  return markup;
}

export function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2, style, ...rest }) {
  const markup = useIconMarkup(name);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false"
      style={{ display: 'inline-block', flex: '0 0 auto', verticalAlign: 'middle', ...style }}
      dangerouslySetInnerHTML={{ __html: markup || '' }}
      {...rest}
    />
  );
}
