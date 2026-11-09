import { Popup } from 'react-map-gl/maplibre';
import type { PopupInfo } from '../types/kelurahan';

type Props = {
  info: PopupInfo;
  onClose: () => void;
};

export function KelurahanPopup({ info, onClose }: Props) {
  const { p } = info;

  return (
    <Popup
      longitude={info.lng}
      latitude={info.lat}
      onClose={onClose}
      closeOnClick={false}
      anchor="bottom"
    >
      <div style={{ fontSize: 13, lineHeight: 1.5 }}>
        <strong>{p.ori_name}</strong><br />
        Kecamatan: {p.kecamatan}<br />
        Penduduk (2024): {Number(p.jumlah_penduduk_2024).toLocaleString('id-ID')} jiwa<br />
        RS umum: {p.rs_umum}, RS khusus: {p.rs_khusus}<br />
        Puskesmas: {p.puskesmas}<br />
        Jarak: {Math.round(p.jarak_faskes_m)} m
      </div>
    </Popup>
  );
}