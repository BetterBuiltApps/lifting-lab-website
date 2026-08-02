import React from 'react';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';

/** The two 56pt tap targets for logging a set. Sized for chalked hands. */
export function MakeMissButtons({ onMade, onMiss, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 12, ...style }} {...rest}>
      <Button variant="make" full onClick={onMade}
        icon={<Icon name="check" size={20} color="#fff" />}
        style={{ minHeight: 'var(--tap-target-chalky)', fontSize: 'var(--text-title3)', fontWeight: 700 }}>
        Made
      </Button>
      <Button variant="miss" full onClick={onMiss}
        icon={<Icon name="x" size={20} color="#fff" />}
        style={{ minHeight: 'var(--tap-target-chalky)', fontSize: 'var(--text-title3)', fontWeight: 700 }}>
        Miss
      </Button>
    </div>
  );
}
