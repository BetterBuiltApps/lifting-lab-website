import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** A list row: leading amber glyph, title + caption, trailing accessory or chevron. */
export function NavRow({ title, caption, icon, accessory, chevron = true, onClick, style, ...rest }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, padding: 14,
        background: 'var(--surface)', borderRadius: 'var(--radius-row)',
        cursor: onClick ? 'pointer' : 'default', ...style,
      }}
      {...rest}
    >
      {icon && <Icon name={icon} size={22} color="var(--amber)" style={{ width: 32 }} />}
      <div style={{ display: 'grid', gap: 3, minWidth: 0, flex: 1 }}>
        <div style={{ font: 'var(--type-headline)', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</div>
        {caption && <div style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)' }}>{caption}</div>}
      </div>
      {accessory}
      {chevron && <Icon name="chevron-right" size={16} color="var(--glyph-decorative)" />}
    </div>
  );
}
