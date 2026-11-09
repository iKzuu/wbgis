import type { CSSProperties } from 'react';

// Gaya dasar untuk panel melayang di atas peta
export const panelStyle = (pos: CSSProperties): CSSProperties => ({
  position: 'absolute',
  background: '#fff',
  padding: '10px 14px',
  borderRadius: 6,
  boxShadow: '0 1px 4px rgba(0,0,0,.3)',
  fontSize: 13,
  ...pos,
});