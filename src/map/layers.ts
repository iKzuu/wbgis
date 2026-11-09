import type { LayerProps } from 'react-map-gl/maplibre';

// Warna kelurahan berdasarkan jarak ke faskes terdekat (meter).
// Jika warna diubah di sini, ubah juga config/distance.ts.
export const kelurahanFill: LayerProps = {
  id: 'kelurahan-fill',
  type: 'fill',
  paint: {
    'fill-color': ['get', 'warna'],
    'fill-opacity': 0.6,
  },
};

export const kelurahanLine: LayerProps = {
  id: 'kelurahan-line',
  type: 'line',
  paint: {
    'line-color': '#333333',
    'line-width': 1,
  },
};

// Bangunan 3D dari basemap vektor
export const buildingLayer: LayerProps = {
  id: 'bangunan-3d',
  type: 'fill-extrusion',
  source: 'openmaptiles',
  'source-layer': 'building',
  minzoom: 14,
  paint: {
    'fill-extrusion-color': '#d6d0c4',
    'fill-extrusion-height': ['coalesce', ['get', 'render_height'], 6],
    'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], 0],
    'fill-extrusion-opacity': 0.9,
  },
};