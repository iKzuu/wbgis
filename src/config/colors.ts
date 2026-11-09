// Membuat warna biru dari kode kelurahan. Kode yang sama selalu menghasilkan warna yang sama.
export function blueFromCode(code: string): string {
  let hash = 0;
  for (let i = 0; i < code.length; i++) {
    hash = (hash * 31 + code.charCodeAt(i)) >>> 0;
  }
  const hue = 200 + (hash % 40);          // 200–239: biru sampai biru keunguan
  const sat = 55 + ((hash >> 8) % 25);    // 55–79%
  const light = 40 + ((hash >> 16) % 30); // 40–69%
  return `hsl(${hue}, ${sat}%, ${light}%)`;
}