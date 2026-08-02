import React from 'react';
import { Card } from '../core/Card.jsx';
import { Icon } from '../core/Icon.jsx';

/** A tappable tool tile for the Tools hub grid. Amber glyph, title, 2-line subtitle. */
export function ToolTile({ title, subtitle, icon = 'wrench', onClick, style, ...rest }) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <Card
      onClick={onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        minHeight: 120, display: 'flex', flexDirection: 'column', gap: 10,
        cursor: onClick ? 'pointer' : 'default',
        transform: pressed ? 'scale(var(--press-scale))' : 'scale(1)',
        transition: 'transform var(--duration-press) var(--ease-pop)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={22} color="var(--amber)" />
      <div style={{ flex: 1 }} />
      <div style={{ font: 'var(--type-headline)', color: 'var(--text-primary)' }}>{title}</div>
      <div style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)', minHeight: 32 }}>{subtitle}</div>
    </Card>
  );
}
