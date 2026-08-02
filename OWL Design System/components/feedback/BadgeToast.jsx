import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** A non-blocking capsule toast for a badge unlocked mid-session. */
export function BadgeToast({ title, icon = 'award', label = 'Badge unlocked', style, ...rest }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '10px 18px', borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-elevated)', border: 'var(--border-accent-1)',
      boxShadow: 'var(--shadow-toast)', ...style,
    }} {...rest}>
      <Icon name={icon} size={22} color="var(--amber)" />
      <div style={{ display: 'grid', gap: 1 }}>
        <span style={{
          font: 'var(--type-label)', letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase', color: 'var(--text-secondary)',
        }}>{label}</span>
        <span style={{ font: 'var(--type-headline)', color: 'var(--text-primary)' }}>{title}</span>
      </div>
    </div>
  );
}
