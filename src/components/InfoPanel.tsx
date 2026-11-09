import { panelStyle } from '../styles/panel';

export function InfoPanel() {
  return (
    <div style={panelStyle({ top: 10, left: 10, maxWidth: 280 })}>
      <strong>Jarak ke Faskes Terdekat</strong><br />
      Warna menunjukkan jarak garis lurus dari pusat kelurahan ke RS atau puskesmas terdekat.<br />
      <small>Sumber: BPS Kota Surakarta (penduduk dan faskes 2024), OpenStreetMap (lokasi faskes).</small>
    </div>
  );
}