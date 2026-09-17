import React from 'react';
import { Carpark, UserProfile } from '../types';

interface FavoritesViewProps {
  carparks: Carpark[];
  userProfile: UserProfile;
  onSelectCarpark: (carpark: Carpark) => void;
  onToggleFavorite: (id: string) => void;
  onStartSession: (carpark: Carpark) => void;
  onOpenMapToCarpark: (carpark: Carpark) => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  carparks,
  userProfile,
  onSelectCarpark,
  onToggleFavorite,
  onStartSession,
  onOpenMapToCarpark,
}) => {
  const favoriteCarparks = carparks.filter((c) =>
    userProfile.favoriteCarparkIds.includes(c.id)
  );

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 pt-2 pb-24 space-y-3">
      {/* Header Banner */}
      <div className="bg-white p-3.5 rounded-2xl border border-[#e2e2e5] shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#ba1a1a] text-[22px]">
            favorite
          </span>
          <div>
            <h1 className="text-sm font-bold text-[#1a1c1e] flex items-center gap-1.5">
              <span>Saved Carparks</span>
              <span className="text-[11px] font-bold px-2 py-0.2 bg-[#ffdad6] text-[#ba1a1a] rounded-full">
                {favoriteCarparks.length}
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Favorites List */}
      {favoriteCarparks.length > 0 ? (
        <div className="space-y-2.5">
          {favoriteCarparks.map((carpark) => {
            const isFull = carpark.availableLots === 0;
            const isLimited = carpark.availableLots > 0 && carpark.availableLots < 20;
            const note = userProfile.savedNotes[carpark.id];

            return (
              <div
                key={carpark.id}
                className="bg-white rounded-2xl p-3.5 border border-[#e2e2e5] hover:border-[#003d9b]/40 shadow-sm transition-all flex flex-col gap-2.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div
                    onClick={() => onSelectCarpark(carpark)}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#eeeef0] text-[#434654] uppercase">
                        {carpark.area}
                      </span>
                      <span className="text-[11px] text-[#737685] flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[13px]">
                          near_me
                        </span>
                        {carpark.distanceKm} km
                      </span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-[#1a1c1e] hover:text-[#003d9b] transition-colors">
                      {carpark.name}
                    </h3>
                  </div>

                  {/* Vacancy Badge */}
                  <div className="flex items-center gap-2">
                    <div
                      className={`px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm ${
                        isFull
                          ? 'bg-[#ffdad6] text-[#93000a]'
                          : isLimited
                          ? 'bg-[#ffdcbf] text-[#2d1600]'
                          : 'bg-[#78fbb6] text-[#002111]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        local_parking
                      </span>
                      <span>{isFull ? 'FULL' : `${carpark.availableLots} Lots`}</span>
                    </div>

                    <button
                      onClick={() => onToggleFavorite(carpark.id)}
                      className="p-1.5 rounded-full hover:bg-[#ffdad6]/40 text-[#ba1a1a] transition-colors"
                      title="Remove Favorite"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        favorite
                      </span>
                    </button>
                  </div>
                </div>

                {/* User Note Banner (if any) */}
                {note && (
                  <div className="p-2 bg-[#fff8e1] rounded-xl border border-[#ffe082] text-xs text-[#874d00] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] shrink-0">
                      edit_note
                    </span>
                    <span className="font-medium truncate">{note}</span>
                  </div>
                )}

                {/* Quick Action Icon Buttons */}
                <div className="pt-2 border-t border-[#f3f3f6] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs text-[#434654]">
                    <span className="font-bold text-[#003d9b] flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">
                        payments
                      </span>
                      ${carpark.baseRatePerHour.toFixed(2)}/h
                    </span>
                    {carpark.hasEV && (
                      <span className="text-[#006d43] font-bold flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[13px]">
                          bolt
                        </span>
                        EV
                      </span>
                    )}
                  </div>

                  <div className="flex gap-1.5">
                    <button
                      onClick={() => onOpenMapToCarpark(carpark)}
                      className="p-2 rounded-xl bg-[#eeeef0] hover:bg-[#e2e2e5] text-[#1a1c1e] transition-colors flex items-center justify-center cursor-pointer"
                      title="Locate on Map"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        map
                      </span>
                    </button>

                    <button
                      onClick={() => onStartSession(carpark)}
                      className="px-3 py-1.5 rounded-xl bg-[#003d9b] hover:bg-[#0052cc] text-xs font-bold text-white transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        directions_car
                      </span>
                      <span>Park</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-3xl border border-[#e2e2e5] p-6 space-y-2">
          <span className="material-symbols-outlined text-4xl text-[#ba1a1a]">
            favorite_border
          </span>
          <h3 className="text-sm font-bold text-[#1a1c1e]">No Saved Carparks</h3>
          <p className="text-xs text-[#737685] max-w-xs mx-auto">
            Tap the heart icon on any carpark to pin it here for 1-tap navigation and vacancy alerts.
          </p>
        </div>
      )}
    </div>
  );
};
