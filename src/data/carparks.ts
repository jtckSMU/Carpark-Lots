import { Carpark, UserProfile } from '../types';
import { SINGAPORE_SHOPPING_MALLS } from './singaporeMalls';
import { SINGAPORE_HOSPITALS } from './singaporeHospitals';
import { SINGAPORE_COMMUNITY_CENTRES } from './singaporeCommunityCentres';
import { SINGAPORE_ATTRACTIONS_PARKS } from './singaporeAttractionsParks';
import { SINGAPORE_COMMERCIAL_PUBLIC } from './singaporeCommercialPublic';
import { CSV_NEW_CARPARKS, findCsvRate } from './csvRatesData';

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Jonathan Tang',
  email: 'Jonathan.Tang011@gmail.com',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxeX_UDVv0QhTL1hzeSQr4V1IPD3IbStaQr3MDq6zQx5sLMZq9o_-dCiHxAgcMk7gZmXxwHgJixa9amP1J55mNI69WzM-pj78HYS7PsOpGVpuQoM7zp6EpMQBoN23qLKzhVYipAw6lTlZBhUa9hLIr91Ec4Hk22GFzJiokCNX3OPledl7UEG_HaoM3UxZSNms2mpAh0D47ef-qwUxTjX0luKTSlr1gzz3bpigvnJxR2ki3XoRQaWfy2A',
  vehiclePlate: 'SGX 8829K',
  vehicleModel: 'Tesla Model Y Performance (Pearl White)',
  isEV: true,
  iuNumber: '1098442190',
  autoPayEnabled: true,
  lowOccupancyAlertThreshold: 15,
  favoriteCarparkIds: [
    'the_clementi_mall',
    'sgh_carpark',
    'our_tampines_hub',
    'gardens_by_the_bay_main',
    'changi_t1_jewel',
    'smu_connexion_carpark',
    'ion_orchard',
    'vivocity_mall',
  ],
  savedNotes: {
    the_clementi_mall: 'B2 has fast SP Mobility DC charger right next to the mall lift',
    sgh_carpark: 'Bowyer Block basement has direct underground connection to specialist clinics',
    our_tampines_hub: 'Basement 2 zone C is closest to hawker centre and library lift',
    gardens_by_the_bay_main: 'Main South basement has 60kW fast chargers and sheltered dome access',
    changi_t1_jewel: 'B3 zone green has 120kW superfast DC charging',
  },
};

const BASE_CARPARKS: Carpark[] = [
  ...SINGAPORE_SHOPPING_MALLS,
  ...SINGAPORE_HOSPITALS,
  ...SINGAPORE_COMMUNITY_CENTRES,
  ...SINGAPORE_ATTRACTIONS_PARKS,
  ...SINGAPORE_COMMERCIAL_PUBLIC,
];

// Preserved explicit user overrides from previous instructions
const EXPLICIT_PRESERVED_IDS = new Set(['smu_connexion_carpark', 'nus_carpark_3']);

// Merged master directory across all Singapore parking domains with updated CSV rates
export const INITIAL_CARPARKS: Carpark[] = [
  ...BASE_CARPARKS.map((cp) => {
    if (EXPLICIT_PRESERVED_IDS.has(cp.id)) {
      return cp;
    }
    const csvRate = findCsvRate(cp.name) || findCsvRate(cp.id);
    if (csvRate) {
      return {
        ...cp,
        baseRatePerHour: csvRate.baseRatePerHour,
        dayRates: csvRate.dayRates,
      };
    }
    return cp;
  }),
  ...CSV_NEW_CARPARKS,
];


