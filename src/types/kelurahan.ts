export type KelurahanProps = {
  ori_name: string;
    kode_kd: string;
  kecamatan: string;
  jumlah_penduduk_2024: number;
  rs_umum: number;
  rs_khusus: number;
  puskesmas: number;
  jarak_faskes_m: number;
};

export type PopupInfo = {
  lng: number;
  lat: number;
  p: KelurahanProps;
};