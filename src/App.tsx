import React, { useState, useEffect, useCallback } from 'react';
import { Carpark, FilterState, ActiveParkingSession, UserProfile } from './types';
import { INITIAL_CARPARKS, INITIAL_USER_PROFILE } from './data/carparks';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { MapView } from './components/MapView';
import { DirectoryView } from './components/DirectoryView';
import { FavoritesView } from './components/FavoritesView';
import { ProfileView } from './components/ProfileView';
import { CarparkDetailModal } from './components/CarparkDetailModal';
import { ActiveParkingSessionBanner } from './components/ActiveParkingSessionBanner';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  // Load persistent user profile from localStorage if present
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('urbanflow_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_USER_PROFILE;
      }
    }
    return INITIAL_USER_PROFILE;
  });

  const [carparks, setCarparks] = useState<Carpark[]>(INITIAL_CARPARKS);
  const [activeTab, setActiveTab] = useState<'map' | 'directory' | 'favorites' | 'profile'>('map');
  const [selectedCarpark, setSelectedCarpark] = useState<Carpark | null>(null);
  const [reservationCarpark, setReservationCarpark] = useState<Carpark | null>(null);

  // Active parking session state
  const [activeSession, setActiveSession] = useState<ActiveParkingSession | null>(() => {
    const saved = localStorage.getItem('urbanflow_session');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  // Global filters
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    evOnly: false,
    fastChargingOnly: false,
    maxRate: null,
    minHeight: null,
    onlyAvailable: false,
    selectedArea: 'All',
    sortBy: 'distance',
  });

  // Save profile changes to localStorage
  useEffect(() => {
    localStorage.setItem('urbanflow_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  // Save active session to localStorage
  useEffect(() => {
    if (activeSession) {
      localStorage.setItem('urbanflow_session', JSON.stringify(activeSession));
    } else {
      localStorage.removeItem('urbanflow_session');
    }
  }, [activeSession]);

  // Extract only the simulate value from the page address
  const getSimulateQuery = () => {
    if (typeof window === 'undefined') return '';
    const params = new URLSearchParams(window.location.search);
    const sim = params.get('simulate');
    return sim ? `simulate=${encodeURIComponent(sim)}` : '';
  };

  // Fetch full Singapore carpark catalog (curated accurate catalog + all 2,000+ LTA/HDB/URA carparks)
  const fetchCarparkCatalog = useCallback(async () => {
    try {
      const sim = getSimulateQuery();
      const url = sim ? `/api/carparks?${sim}` : '/api/carparks';
      const res = await fetch(url);
      if (!res.ok) {
        if (sim) {
          setCarparks([]);
        }
        return;
      }
      const json = await res.json();
      if (json.state === 'empty' || (Array.isArray(json.data) && json.data.length === 0 && json.state)) {
        setCarparks([]);
        return;
      }
      if (json.carparks && Array.isArray(json.carparks) && json.carparks.length > 0) {
        setCarparks(json.carparks);
      }
    } catch (err) {
      console.warn('Could not fetch full carpark catalog, using built-in curated:', err);
    }
  }, []);

  // Real-time synchronization with Singapore LTA DataMall v2 API
  const fetchLtaLiveCarparks = useCallback(async () => {
    try {
      const sim = getSimulateQuery();
      const url = sim ? `/api/carparks/live?${sim}` : '/api/carparks/live';
      const res = await fetch(url);
      if (!res.ok) return;
      const json = await res.json();
      const ltaRecords: Array<{
        CarParkID: string;
        Area: string;
        Development: string;
        Location: string;
        AvailableLots: number;
        LotType: string;
        Agency: string;
      }> = json.data || [];

      if (ltaRecords.length > 0) {
        const lotMap = new Map<string, number>();
        ltaRecords.forEach((r) => {
          if (typeof r.AvailableLots === 'number') {
            lotMap.set(r.CarParkID.toLowerCase(), r.AvailableLots);
          }
        });

        // Mall mapping for LTA numeric IDs
        const mallIdLookup: Record<string, string> = {
          suntec_city: '1',
          marina_square: '2',
          raffles_city: '3',
          millenia_walk: '5',
          plaza_singapura: '9',
          takashimaya_ngee_ann_city: '13',
          wisma_atria: '14',
          vivocity_mall: '16',
          ion_orchard: '23',
          '313_somerset': '24',
          resorts_world_sentosa: '26',
          westgate: '43',
          orchard_gateway: '52',
          imm_building: '53',
          paragon_shopping_centre: '55',
          bukit_panjang_plaza: '58',
          bugis_plus: '61',
          lot_one: '62',
          tampines_mall: '63',
          junction_8: '64',
          bedok_mall: '65',
          funan_mall: '66',
        };

        setCarparks((prevCarparks) => {
          return prevCarparks.map((cp) => {
            const rawId = (cp as any).carParkId || cp.id;
            const ltaNumericId = mallIdLookup[cp.id];
            
            let updatedLots: number | undefined;
            if (ltaNumericId && lotMap.has(ltaNumericId.toLowerCase())) {
              updatedLots = lotMap.get(ltaNumericId.toLowerCase());
            } else if (lotMap.has(rawId.toLowerCase())) {
              updatedLots = lotMap.get(rawId.toLowerCase());
            } else if (lotMap.has(cp.id.toLowerCase())) {
              updatedLots = lotMap.get(cp.id.toLowerCase());
            }

            if (typeof updatedLots === 'number') {
              return {
                ...cp,
                availableLots: updatedLots,
                lotStatus: updatedLots === 0 ? 'full' : updatedLots < 20 ? 'limited' : 'available',
              };
            }
            return cp;
          });
        });
      }
    } catch (err) {
      console.warn('LTA Live sync note:', err);
    }
  }, []);

  // Initial load and periodic LTA DataMall refresh (every 30 seconds)
  useEffect(() => {
    fetchCarparkCatalog().then(() => {
      fetchLtaLiveCarparks();
    });
    const interval = setInterval(fetchLtaLiveCarparks, 30000);
    return () => clearInterval(interval);
  }, [fetchCarparkCatalog, fetchLtaLiveCarparks]);

  const handleToggleFavorite = (id: string) => {
    setUserProfile((prev) => {
      const exists = prev.favoriteCarparkIds.includes(id);
      const newFavorites = exists
        ? prev.favoriteCarparkIds.filter((favId) => favId !== id)
        : [...prev.favoriteCarparkIds, id];
      return {
        ...prev,
        favoriteCarparkIds: newFavorites,
      };
    });
  };

  const isFavorite = (id: string) => {
    return userProfile.favoriteCarparkIds.includes(id);
  };

  const handleSaveNote = (carparkId: string, note: string) => {
    setUserProfile((prev) => ({
      ...prev,
      savedNotes: {
        ...prev.savedNotes,
        [carparkId]: note,
      },
    }));
  };

  const handleStartSession = (
    carpark: Carpark,
    bayNumber: string = 'B2-18',
    floor: string = 'Basement 2'
  ) => {
    const newSession: ActiveParkingSession = {
      id: 'session-' + Date.now(),
      carparkId: carpark.id,
      carparkName: carpark.name,
      startTime: Date.now(),
      bayNumber,
      floor,
      vehiclePlate: userProfile.vehiclePlate,
      vehicleModel: userProfile.vehicleModel,
      chargingActive: carpark.hasEV,
      initialChargePercent: 42,
      currentChargePercent: 42,
    };
    setActiveSession(newSession);
  };

  const handleEndSession = () => {
    setActiveSession(null);
  };

  const handleOpenMapToCarpark = (carpark: Carpark) => {
    setSelectedCarpark(carpark);
    setActiveTab('map');
  };

  return (
    <div className="min-h-screen bg-[#f9f9fc] text-[#1a1c1e] flex flex-col font-sans">
      {/* Top Header */}
      <Header
        userProfile={userProfile}
        carparks={carparks}
        filters={filters}
        onFilterChange={setFilters}
        onSelectCarpark={(cp) => {
          setSelectedCarpark(cp);
        }}
        onOpenProfile={() => setActiveTab('profile')}
        activeTab={activeTab}
      />

      {/* Main Content Area with top offset for fixed header */}
      <main className="flex-1 w-full pt-[136px] sm:pt-[130px]">
        {activeTab === 'map' && (
          <MapView
            carparks={carparks}
            filters={filters}
            onFilterChange={setFilters}
            onSelectCarpark={setSelectedCarpark}
            selectedCarpark={selectedCarpark}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        )}

        {activeTab === 'directory' && (
          <DirectoryView
            carparks={carparks}
            filters={filters}
            onFilterChange={setFilters}
            onSelectCarpark={setSelectedCarpark}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        )}

        {activeTab === 'favorites' && (
          <FavoritesView
            carparks={carparks}
            userProfile={userProfile}
            onSelectCarpark={setSelectedCarpark}
            onToggleFavorite={handleToggleFavorite}
            onStartSession={(cp) => handleStartSession(cp)}
            onOpenMapToCarpark={handleOpenMapToCarpark}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView
            userProfile={userProfile}
            onUpdateProfile={setUserProfile}
            activeSession={activeSession}
            onEndSession={handleEndSession}
          />
        )}
      </main>

      {/* Floating Active Session Banner (if parked and not on profile tab) */}
      {activeSession && activeTab !== 'profile' && (
        <ActiveParkingSessionBanner
          session={activeSession}
          onEndSession={handleEndSession}
          onOpenDetails={() => setActiveTab('profile')}
        />
      )}

      {/* Carpark Detail Bottom Sheet / Modal */}
      {selectedCarpark && (
        <CarparkDetailModal
          carpark={selectedCarpark}
          onClose={() => setSelectedCarpark(null)}
          onStartSession={handleStartSession}
          onReserveSpot={(cp) => {
            setReservationCarpark(cp);
            setSelectedCarpark(null);
          }}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite(selectedCarpark.id)}
          userProfile={userProfile}
          onSaveNote={handleSaveNote}
        />
      )}

      {/* 15-Minute Reservation QR Pass Modal */}
      {reservationCarpark && (
        <ReservationModal
          carpark={reservationCarpark}
          userProfile={userProfile}
          onClose={() => setReservationCarpark(null)}
          onConfirmPark={() => {
            handleStartSession(reservationCarpark);
            setReservationCarpark(null);
          }}
        />
      )}

      {/* Fixed Bottom Navigation */}
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        favoritesCount={userProfile.favoriteCarparkIds.length}
        hasActiveSession={!!activeSession}
      />
    </div>
  );
}
