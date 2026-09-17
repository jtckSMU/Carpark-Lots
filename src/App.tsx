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

  // Fetch full Singapore carpark catalog (all 2,000+ carparks from LTA/HDB/URA + Shopping Malls)
  const fetchCarparkCatalog = useCallback(async () => {
    try {
      const res = await fetch('/api/carparks');
      if (!res.ok) return;
      const json = await res.json();
      if (json.carparks && Array.isArray(json.carparks) && json.carparks.length > 0) {
        // Keep all shopping malls at the forefront, and append all LTA carparks without duplication
        const existingIds = new Set(INITIAL_CARPARKS.map((m) => m.id.toLowerCase()));
        const existingNames = new Set(INITIAL_CARPARKS.map((m) => m.name.toLowerCase().trim()));

        const additionalCarparks = json.carparks.filter((c: Carpark) => {
          const cid = (c.id || '').toLowerCase();
          const cname = (c.name || '').toLowerCase().trim();
          return !existingIds.has(cid) && !existingNames.has(cname);
        });

        setCarparks([...INITIAL_CARPARKS, ...additionalCarparks]);
      }
    } catch (err) {
      console.warn('Could not fetch full carpark catalog, using built-in:', err);
    }
  }, []);

  // Real-time synchronization with Singapore LTA DataMall v2 API
  const fetchLtaLiveCarparks = useCallback(async () => {
    try {
      const res = await fetch('/api/carparks/live');
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

        setCarparks((prevCarparks) => {
          return prevCarparks.map((cp) => {
            const rawId = (cp as any).carParkId || cp.id;
            const updatedLots = lotMap.get(rawId.toLowerCase()) ?? lotMap.get(cp.id.toLowerCase());

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
