import { useEffect, useState } from 'react';

/** Shared UA sniffing. liftinglab.app/get (get.js, no React) uses this to
 * redirect outright; AppStoreButton and HealthBadge (Chrome.jsx) use the
 * `useDevice` hook below to swap in Android-specific copy instead of
 * claiming an Apple-only capability, or a Play Store listing that doesn't
 * exist yet. One place to sniff the UA so the two never drift apart. */
export function detectDevice() {
  const ua = navigator.userAgent;
  // iPadOS 13+ reports as "Macintosh" with touch support, not "iPad".
  const isIOS = /iPhone|iPad|iPod/.test(ua)
    || (ua.includes('Macintosh') && navigator.maxTouchPoints > 1);
  if (isIOS) return 'ios';
  if (/Android/.test(ua)) return 'android';
  return 'other';
}

/** Starts as 'other' (what the prerendered snapshot and a non-JS visitor both
 * see, same as today's App Store default) and resolves to the real device
 * once this runs client-side, same as every other interactive piece of this
 * page: there's no SSR framework here, just a prerendered snapshot that
 * React re-renders over on mount. */
export function useDevice() {
  const [device, setDevice] = useState('other');
  useEffect(() => { setDevice(detectDevice()); }, []);
  return device;
}
