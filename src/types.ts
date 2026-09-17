export interface EVCharger {
  available: number;
  total: number;
  type: string; // e.g. "CCS2 50kW DC", "Type 2 22kW AC"
  powerKw: number;
  isFast?: boolean;
  pricePerKwh: number;
}

export interface HourlyRate {
  timeRange: string;
  rate: number;
  unit: string; // e.g. "per hr", "per 30 mins", "first 2 hrs"
}

export interface DayRates {
  weekday: HourlyRate[];
  saturday: HourlyRate[];
  sundayHoliday: HourlyRate[];
}

export interface OccupancyPoint {
  hour: string; // e.g. "08:00", "12:00", "18:00"
  occupancyPercent: number;
}

export interface Carpark {
  id: string;
  carParkId?: string;
  name: string;
  shortName?: string;
  agency?: string;
  category?: 'all' | 'mall' | 'hospital' | 'community' | 'park' | 'commercial' | 'transport' | 'hdb' | 'attraction';
  area: string;
  address: string;
  availableLots: number;
  totalLots: number;
  lotStatus: 'available' | 'limited' | 'full';
  baseRatePerHour: number;
  dayRates: DayRates;
  gracePeriodMins: number;
  heightLimitM: number;
  rating?: number;
  reviewCount?: number;
  distanceKm: number;
  hasEV: boolean;
  hasFastEV: boolean;
  evChargers?: EVCharger[];
  amenities: string[];
  lat: number;
  lng: number;
  mapPos: {
    top: number; // percentage from top
    left: number; // percentage from left
  };
  occupancyTrend?: OccupancyPoint[];
  operator?: string;
  erpZone?: string;
  floorCount?: string;
  cctvSecurity?: boolean;
  covered?: boolean;
  disabledLots?: number;
}

export interface FilterState {
  searchQuery: string;
  category?: string;
  evOnly: boolean;
  fastChargingOnly: boolean;
  maxRate: number | null; // e.g. 2.0
  minHeight: number | null; // e.g. 2.1
  onlyAvailable: boolean;
  selectedArea: string; // "All" or area name
  sortBy: 'distance' | 'price' | 'availability' | 'rating';
}

export interface ActiveParkingSession {
  id: string;
  carparkId: string;
  carparkName: string;
  startTime: number; // timestamp
  bayNumber: string;
  floor: string;
  vehiclePlate: string;
  vehicleModel: string;
  chargingActive: boolean;
  initialChargePercent?: number;
  currentChargePercent?: number;
  energyDeliveredKwh?: number;
}

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  vehiclePlate: string;
  vehicleModel: string;
  isEV: boolean;
  iuNumber: string;
  autoPayEnabled: boolean;
  lowOccupancyAlertThreshold: number;
  favoriteCarparkIds: string[];
  savedNotes: Record<string, string>; // carparkId -> user custom note
}
