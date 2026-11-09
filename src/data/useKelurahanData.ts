import { useEffect, useState } from 'react';
import type { FeatureCollection, Geometry } from 'geojson';
import { blueFromCode } from '../config/colors';
import type { KelurahanProps } from '../types/kelurahan';

export type KelurahanFeatureCollection = FeatureCollection<
  Geometry,
  KelurahanProps & { warna: string }
>;

// Memuat GeoJSON dan menambahkan properti `warna` ke setiap kelurahan.
export function useKelurahanData(url: string) {
  const [data, setData] = useState<KelurahanFeatureCollection | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(url)
      .then((r) => r.json() as Promise<FeatureCollection<Geometry, KelurahanProps>>)
      .then((geo) => {
        const features = geo.features.map((f) => ({
          ...f,
          properties: {
            ...f.properties,
            warna: blueFromCode(f.properties.kode_kd),
          },
        }));
        if (!cancelled) setData({ type: 'FeatureCollection', features });
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return data;
}