// Singapore HDB Estate Prefix and Town Coordinate Reference Map
export interface HdbTownMeta {
  town: string;
  area: string;
  lat: number;
  lng: number;
  defaultAddress: string;
}

export const HDB_PREFIX_MAP: Record<string, HdbTownMeta> = {
  // Ang Mo Kio
  AM: { town: 'Ang Mo Kio', area: 'North-East', lat: 1.3691, lng: 103.8454, defaultAddress: 'Ang Mo Kio Ave' },
  // Bedok
  BM: { town: 'Bedok', area: 'East', lat: 1.3236, lng: 103.9273, defaultAddress: 'Bedok North / South' },
  BL: { town: 'Bedok Reservoir', area: 'East', lat: 1.3364, lng: 103.9248, defaultAddress: 'Bedok Reservoir Rd' },
  // Bishan
  BS: { town: 'Bishan', area: 'Central', lat: 1.3526, lng: 103.8492, defaultAddress: 'Bishan Street' },
  // Bukit Batok
  BB: { town: 'Bukit Batok', area: 'West', lat: 1.3590, lng: 103.7496, defaultAddress: 'Bukit Batok Central' },
  // Bukit Merah
  BR: { town: 'Bukit Merah', area: 'Central', lat: 1.2819, lng: 103.8239, defaultAddress: 'Bukit Merah View' },
  BT: { town: 'Bukit Timah', area: 'Central', lat: 1.3294, lng: 103.8021, defaultAddress: 'Toh Yi Drive' },
  // Bukit Panjang / Choa Chu Kang
  BP: { town: 'Bukit Panjang', area: 'West', lat: 1.3774, lng: 103.7719, defaultAddress: 'Bukit Panjang Ring Rd' },
  CC: { town: 'Choa Chu Kang', area: 'West', lat: 1.3840, lng: 103.7470, defaultAddress: 'Choa Chu Kang Ave' },
  CK: { town: 'Choa Chu Kang / Yew Tee', area: 'West', lat: 1.3972, lng: 103.7474, defaultAddress: 'Choa Chu Kang North' },
  // Clementi
  CL: { town: 'Clementi', area: 'West', lat: 1.3162, lng: 103.7649, defaultAddress: 'Clementi Ave' },
  // Geylang / Eunos
  GL: { town: 'Geylang', area: 'Central', lat: 1.3201, lng: 103.8918, defaultAddress: 'Geylang East Ave' },
  // Hougang
  HG: { town: 'Hougang', area: 'North-East', lat: 1.3713, lng: 103.8915, defaultAddress: 'Hougang Ave' },
  // Jurong East / West
  JE: { town: 'Jurong East', area: 'West', lat: 1.3329, lng: 103.7436, defaultAddress: 'Jurong East St' },
  JW: { town: 'Jurong West', area: 'West', lat: 1.3404, lng: 103.7090, defaultAddress: 'Jurong West St' },
  JB: { town: 'Boon Lay', area: 'West', lat: 1.3484, lng: 103.7132, defaultAddress: 'Boon Lay Drive' },
  // Kallang / Whampoa
  KM: { town: 'Kallang / Whampoa', area: 'Central', lat: 1.3120, lng: 103.8628, defaultAddress: 'Kallang Bahru' },
  // Marine Parade
  MP: { town: 'Marine Parade', area: 'East', lat: 1.3020, lng: 103.9056, defaultAddress: 'Marine Drive' },
  // Pasir Ris
  PR: { town: 'Pasir Ris', area: 'East', lat: 1.3721, lng: 103.9474, defaultAddress: 'Pasir Ris Drive' },
  PE: { town: 'Pasir Ris Elias', area: 'East', lat: 1.3778, lng: 103.9421, defaultAddress: 'Elias Road' },
  // Punggol
  PG: { town: 'Punggol', area: 'North-East', lat: 1.4010, lng: 103.9073, defaultAddress: 'Punggol Central / Walk' },
  PL: { town: 'Punggol Waterway', area: 'North-East', lat: 1.4054, lng: 103.9022, defaultAddress: 'Punggol Field' },
  // Queenstown
  QT: { town: 'Queenstown', area: 'Central', lat: 1.2942, lng: 103.8061, defaultAddress: 'Commonwealth Ave' },
  TB: { town: 'Tiong Bahru', area: 'Central', lat: 1.2865, lng: 103.8272, defaultAddress: 'Tiong Bahru Rd' },
  // Sembawang
  SB: { town: 'Sembawang', area: 'North', lat: 1.4491, lng: 103.8185, defaultAddress: 'Sembawang Vista' },
  SE: { town: 'Sembawang East', area: 'North', lat: 1.4532, lng: 103.8234, defaultAddress: 'Canberra Cres' },
  // Sengkang
  SK: { town: 'Sengkang', area: 'North-East', lat: 1.3916, lng: 103.8954, defaultAddress: 'Compassvale / Rivervale' },
  SEK: { town: 'Sengkang East', area: 'North-East', lat: 1.3942, lng: 103.9028, defaultAddress: 'Sengkang East Way' },
  // Serangoon
  SR: { town: 'Serangoon', area: 'North-East', lat: 1.3554, lng: 103.8679, defaultAddress: 'Serangoon Central' },
  // Tampines
  TM: { town: 'Tampines', area: 'East', lat: 1.3541, lng: 103.9452, defaultAddress: 'Tampines Ave / St' },
  TP: { town: 'Tampines North/West', area: 'East', lat: 1.3582, lng: 103.9388, defaultAddress: 'Tampines St 81' },
  // Toa Payoh
  TO: { town: 'Toa Payoh', area: 'Central', lat: 1.3343, lng: 103.8563, defaultAddress: 'Lorong Toa Payoh' },
  TPM: { town: 'Toa Payoh Central', area: 'Central', lat: 1.3328, lng: 103.8488, defaultAddress: 'Toa Payoh Central' },
  // Woodlands
  WL: { town: 'Woodlands', area: 'North', lat: 1.4382, lng: 103.7890, defaultAddress: 'Woodlands Ave / Ring Rd' },
  WN: { town: 'Woodlands North', area: 'North', lat: 1.4468, lng: 103.7845, defaultAddress: 'Woodlands St 82' },
  // Yishun
  YS: { town: 'Yishun', area: 'North', lat: 1.4304, lng: 103.8354, defaultAddress: 'Yishun Ring Rd / Ave' },
  YI: { town: 'Yishun South', area: 'North', lat: 1.4218, lng: 103.8392, defaultAddress: 'Yishun Ave 4' },
};

// Resolve an HDB Carpark code (e.g. "AM18", "BM24", "HG88") to realistic coordinates & names
export function resolveHdbCarpark(code: string, index: number): {
  name: string;
  town: string;
  area: string;
  lat: number;
  lng: number;
  address: string;
} {
  const upper = code.toUpperCase().trim();
  let prefix = upper.replace(/[0-9].*$/, '');
  
  if (!prefix || !HDB_PREFIX_MAP[prefix]) {
    // Try 2-letter fallback
    prefix = upper.slice(0, 2);
  }

  const meta = HDB_PREFIX_MAP[prefix] || {
    town: 'HDB Estate',
    area: 'Central',
    lat: 1.3521,
    lng: 103.8198,
    defaultAddress: 'Singapore HDB Housing Estate',
  };

  // Add slight pseudo-deterministic jitter so each block number renders distinctly on the map
  const numPart = parseInt(upper.replace(/[^0-9]/g, ''), 10) || (index % 100) + 1;
  const latOffset = ((numPart % 23) - 11) * 0.0016;
  const lngOffset = (((numPart * 7) % 27) - 13) * 0.0016;

  const lat = Math.min(1.47, Math.max(1.22, meta.lat + latOffset));
  const lng = Math.min(104.02, Math.max(103.62, meta.lng + lngOffset));

  return {
    name: `HDB ${meta.town} (Blk ${numPart || code})`,
    town: meta.town,
    area: meta.area,
    lat,
    lng,
    address: `Blk ${numPart || code} ${meta.defaultAddress}, Singapore`,
  };
}
