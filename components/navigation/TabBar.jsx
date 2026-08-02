import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TABS = [
  { id: 'train', label: 'Train', icon: 'dumbbell' },
  { id: 'tools', label: 'Tools', icon: 'sliders-horizontal' },
  { id: 'me', label: 'Me', icon: 'user' },
];

/** The three-tab bar: Train / Tools / Me, amber tint on the selected tab. */
export function TabBar({ active = 'train', tabs = TABS, onChange, style, ...rest }) {
  return (
    <nav style={{
      display: 'flex', background: 'rgba(28,28,30,0.94)', backdropFilter: 'blur(20px)',
      borderTop: 'var(--border-hairline-1)', paddingBottom: 20, ...style,
    }} {...rest}>
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <button
            key={t.id} onClick={() => onChange && onChange(t.id)}
            style={{
              flex: 1, background: 'none', border: 'none', cursor: 'pointer',
              display: 'grid', gap: 3, justifyItems: 'center', padding: '8px 0 4px',
            }}
          >
            <Icon name={t.icon} size={24} color={on ? 'var(--amber)' : 'var(--glyph-decorative)'} />
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--text-caption2)', fontWeight: 500,
              color: on ? 'var(--amber)' : 'var(--glyph-decorative)',
            }}>{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
