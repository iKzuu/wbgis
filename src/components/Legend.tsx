import { panelStyle } from '../styles/panel';
import { LEGEND_ITEMS } from '../config/distance';

export function Legend() {
  return (
    <div style={panelStyle({ bottom: 20, left: 10 })}>
      {LEGEND_ITEMS.map(({ color, label }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 14, height: 14, background: color, display: 'inline-block' }} />
          {label}
        </div>
      ))}
    </div>
  );
}