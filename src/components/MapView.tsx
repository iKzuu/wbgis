import { useCallback, useState } from 'react';
import Map, { Source, Layer, NavigationControl } from 'react-map-gl/maplibre';
import type { MapLayerMouseEvent } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

import { DATA_URL, MAP_STYLE, INITIAL_VIEW } from '../config/map';
import { kelurahanFill, kelurahanLine, buildingLayer } from '../map/layers';
import { useKelurahanData } from '../data/useKelurahanData';
import type { KelurahanProps, PopupInfo } from '../types/kelurahan';
import { KelurahanPopup } from './KelurahanPopup';

export function MapView() {
  const [popup, setPopup] = useState<PopupInfo | null>(null);
  const [hovering, setHovering] = useState(false);
  const geojson = useKelurahanData(DATA_URL);

  const handleClick = useCallback((e: MapLayerMouseEvent) => {
    const f = e.features?.[0];
    if (!f) {
      setPopup(null);
      return;
    }
    setPopup({
      lng: e.lngLat.lng,
      lat: e.lngLat.lat,
      p: f.properties as unknown as KelurahanProps,
    });
  }, []);

  return (
    <Map
      initialViewState={INITIAL_VIEW}
      mapStyle={MAP_STYLE}
      style={{ width: '100%', height: '100%' }}
      interactiveLayerIds={['kelurahan-fill']}
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      cursor={hovering ? 'pointer' : 'auto'}
    >
      <NavigationControl position="top-right" />

      {geojson && (
        <Source id="kelurahan" type="geojson" data={geojson}>
          <Layer {...kelurahanFill} />
          <Layer {...kelurahanLine} />
        </Source>
      )}

      {/* Ditaruh setelah Source agar bangunan tampil di atas warna kelurahan */}
      <Layer {...buildingLayer} />

      {popup && (
        <KelurahanPopup info={popup} onClose={() => setPopup(null)} />
      )}
    </Map>
  );
}