import React, { useState } from 'react';
import { Carpark, FilterState } from '../types';

interface DirectoryViewProps {
  carparks: Carpark[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onSelectCarpark: (carpark: Carpark) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const DirectoryView: React.FC<DirectoryViewProps> = ({
  carparks,
  filters,
  onFilterChange,
  onSelectCarpark,
  onToggleFavorite,
  isFavorite,
}) => {
  const [displayCount, setDisplayCount] = useState(48);

  const filtered = carparks.filter((c) => {
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase().trim();
      const matchName = c.name.toLowerCase().includes(q);
      const matchArea = c.area.toLowerCase().includes(q);
      const matchAddress = c.address.toLowerCase().includes(q);
      const matchAgency = c.agency ? c.agency.toLowerCase().includes(q) : false;
      const matchOperator = c.operator ? c.operator.toLowerCase().includes(q) : false;
      const matchCategory = c.category ? c.category.toLowerCase().includes(q) : false;

      if (!matchName && !matchArea && !matchAddress && !matchAgency && !matchOperator && !matchCategory) {
        return false;
      }
    }
    if (filters.selectedArea !== 'All' && c.area !== filters.selectedArea) {
      return false;
    }
    if (filters.category && filters.category !== 'all') {
      const carparkCat = c.category || (c.agency === 'HDB' ? 'hdb' : 'mall');
      if (filters.category === 'park' && (carparkCat === 'park' || carparkCat === 'attraction')) {
        // match both
      } else if (carparkCat !== filters.category) {
        return false;
      }
    }
    if (filters.evOnly && !c.hasEV) {
      return false;
    }
    if (filters.fastChargingOnly && !c.hasFastEV) {
      return false;
    }
    if (filters.maxRate !== null && c.baseRatePerHour > filters.maxRate) {
      return false;
    }
    if (filters.minHeight !== null && c.heightLimitM < filters.minHeight) {
      return false;
    }
    if (filters.onlyAvailable && c.availableLots <= 0) {
      return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (filters.sortBy === 'price') return a.baseRatePerHour - b.baseRatePerHour;
    if (filters.sortBy === 'availability') return b.availableLots - a.availableLots;
    if (filters.sortBy === 'rating') return (b.rating || 4.5) - (a.rating || 4.5);
    return a.distanceKm - b.distanceKm;
  });

  const displayedCarparks = sorted.slice(0, displayCount);

  const categoryBadges = [
    { id: 'all', icon: 'travel_explore', label: 'All Places' },
    { id: 'mall', icon: 'shopping_bag', label: 'Malls' },
    { id: 'hospital', icon: 'local_hospital', label: 'Hospitals' },
    { id: 'community', icon: 'diversity_3', label: 'Community & CC' },
    { id: 'park', icon: 'forest', label: 'Parks & Attractions' },
    { id: 'commercial', icon: 'domain', label: 'Offices & Uni' },
    { id: 'hdb', icon: 'home_pin', label: 'HDB & Public' },
  ];

  const areaBadges = [
    { id: 'All', icon: 'travel_explore', label: 'All Areas' },
    { id: 'Orchard', icon: 'shopping_bag', label: 'Orchard' },
    { id: 'Marina Bay', icon: 'apartment', label: 'MBS/CBD' },
    { id: 'Central', icon: 'near_me', label: 'Central' },
    { id: 'North', icon: 'park', label: 'North' },
    { id: 'East', icon: 'flight', label: 'East' },
    { id: 'West', icon: 'factory', label: 'West' },
    { id: 'South', icon: 'sailing', label: 'South' },
  ];

  const getCategoryMeta = (cat?: string, agency?: string) => {
    if (cat === 'hospital' || agency === 'SingHealth' || agency === 'NHG' || agency === 'NUHS') {
      return { icon: 'local_hospital', label: 'Hospital', bg: 'bg-[#ffebee]', text: 'text-[#c62828]' };
    }
    if (cat === 'community' || agency === 'PA' || agency === 'SAFRA' || agency === 'HomeTeamNS') {
      return { icon: 'diversity_3', label: 'Community', bg: 'bg-[#e8f5e9]', text: 'text-[#2e7d32]' };
    }
    if (cat === 'park' || cat === 'attraction' || agency === 'NParks' || agency === 'SDC') {
      return { icon: 'forest', label: 'Park / Attraction', bg: 'bg-[#e0f2f1]', text: 'text-[#00695c]' };
    }
    if (cat === 'transport' || agency === 'CAG' || agency === 'MPA') {
      return { icon: 'flight', label: 'Transport / Airport', bg: 'bg-[#e3f2fd]', text: 'text-[#1565c0]' };
    }
    if (cat === 'commercial' || agency === 'NUS' || agency === 'NTU' || agency === 'SMU' || agency === 'JTC') {
      return { icon: 'domain', label: 'Commercial / Campus', bg: 'bg-[#f3e5f5]', text: 'text-[#6a1b9a]' };
    }
    if (cat === 'hdb' || agency === 'HDB') {
      return { icon: 'home_pin', label: 'HDB Estate', bg: 'bg-[#fff3e0]', text: 'text-[#e65100]' };
    }
    return { icon: 'shopping_bag', label: 'Mall', bg: 'bg-[#dae2ff]/50', text: 'text-[#003d9b]' };
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 pt-2 pb-24 space-y-3">
      {/* Top Header & Sort Strip */}
      <div className="flex items-center justify-between gap-2 bg-white p-3 rounded-2xl border border-[#e2e2e5] shadow-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#003d9b] text-[20px]">
            format_list_bulleted
          </span>
          <span className="font-bold text-sm text-[#1a1c1e]">
            {sorted.length.toLocaleString()} Singapore Carparks
          </span>
        </div>

        {/* Sort selector with icon */}
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#737685] text-[18px]">
            swap_vert
          </span>
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                sortBy: e.target.value as FilterState['sortBy'],
              })
            }
            className="text-xs font-bold bg-[#f3f3f6] border border-[#c3c6d6]/40 rounded-xl px-2.5 py-1.5 text-[#1a1c1e] outline-none cursor-pointer"
          >
            <option value="distance">📍 Nearest</option>
            <option value="price">💲 Lowest Price</option>
            <option value="availability">🅿️ Most Lots</option>
            <option value="rating">⭐️ Top Rated</option>
          </select>
        </div>
      </div>

      {/* Category Pills Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categoryBadges.map((badge) => {
          const isSelected = (filters.category || 'all') === badge.id;
          return (
            <button
              key={badge.id}
              onClick={() => {
                onFilterChange({ ...filters, category: badge.id });
                setDisplayCount(48);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-[#003d9b] text-white shadow-md scale-105'
                  : 'bg-white text-[#434654] hover:bg-[#eeeef0] border border-[#e2e2e5]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {badge.icon}
              </span>
              <span>{badge.label}</span>
            </button>
          );
        })}
      </div>

      {/* Area Icon Ribbon */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
        {areaBadges.map((badge) => (
          <button
            key={badge.id}
            onClick={() => {
              onFilterChange({ ...filters, selectedArea: badge.id });
              setDisplayCount(48);
            }}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm flex items-center gap-1 cursor-pointer ${
              filters.selectedArea === badge.id
                ? 'bg-[#434654] text-white shadow-md'
                : 'bg-[#f3f3f6] text-[#434654] hover:bg-[#e2e2e5] border border-transparent'
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">
              {badge.icon}
            </span>
            <span>{badge.label}</span>
          </button>
        ))}
      </div>

      {/* Carpark Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {displayedCarparks.map((carpark) => {
          const isFull = carpark.availableLots === 0;
          const isLimited = carpark.availableLots > 0 && carpark.availableLots < 20;
          const catMeta = getCategoryMeta(carpark.category, carpark.agency);

          return (
            <div
              key={carpark.id}
              onClick={() => onSelectCarpark(carpark)}
              className="bg-white rounded-2xl p-3.5 border border-[#e2e2e5] hover:border-[#003d9b]/50 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${catMeta.bg} ${catMeta.text}`}>
                        <span className="material-symbols-outlined text-[12px]">
                          {catMeta.icon}
                        </span>
                        {catMeta.label}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#eeeef0] text-[#434654] uppercase">
                        {carpark.area}
                      </span>
                      <span className="text-[11px] text-[#737685] flex items-center gap-0.5 font-medium">
                        <span className="material-symbols-outlined text-[13px]">
                          near_me
                        </span>
                        {carpark.distanceKm} km
                      </span>
                      {carpark.agency && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#dae2ff]/50 text-[#003d9b]">
                          {carpark.agency}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-[#1a1c1e] group-hover:text-[#003d9b] transition-colors leading-tight">
                      {carpark.name}
                    </h3>
                    <p className="text-xs text-[#737685] mt-1 flex items-center gap-1 leading-snug">
                      <span className="material-symbols-outlined text-[13px] text-[#003d9b] shrink-0">
                        location_on
                      </span>
                      <span className="line-clamp-1">{carpark.address}</span>
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(carpark.id);
                    }}
                    className={`p-1.5 rounded-full transition-colors ${
                      isFavorite(carpark.id)
                        ? 'text-[#ba1a1a]'
                        : 'text-[#c3c6d6] hover:text-[#ba1a1a]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isFavorite(carpark.id) ? 'favorite' : 'favorite_border'}
                    </span>
                  </button>
                </div>

                {/* Metrics Badges Row with Icons */}
                <div className="mt-2.5 grid grid-cols-3 gap-1.5 py-1.5 px-2 bg-[#f9f9fc] rounded-xl border border-[#eeeef0] text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-0.5 text-[10px] text-[#737685]">
                      <span className="material-symbols-outlined text-[12px]">
                        local_parking
                      </span>
                      <span>Lots</span>
                    </div>
                    <div
                      className={`text-xs font-bold ${
                        isFull
                          ? 'text-[#ba1a1a]'
                          : isLimited
                          ? 'text-[#874d00]'
                          : 'text-[#006d43]'
                      }`}
                    >
                      {isFull ? 'FULL' : `${carpark.availableLots.toLocaleString()} Lots`}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-0.5 text-[10px] text-[#737685]">
                      <span className="material-symbols-outlined text-[12px]">
                        payments
                      </span>
                      <span>Rate</span>
                    </div>
                    <div className="text-xs font-bold text-[#1a1c1e]">
                      ${carpark.baseRatePerHour.toFixed(2)}/h
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-0.5 text-[10px] text-[#737685]">
                      <span className="material-symbols-outlined text-[12px]">
                        height
                      </span>
                      <span>Height</span>
                    </div>
                    <div className="text-xs font-bold text-[#1a1c1e]">
                      {carpark.heightLimitM}m
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Badges & Icon Button */}
              <div className="mt-2.5 pt-2 border-t border-[#f3f3f6] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {carpark.hasEV && (
                    <span className="px-1.5 py-0.5 bg-[#75f8b3]/25 text-[#007147] text-[10px] font-bold rounded flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[12px]">
                        bolt
                      </span>
                      {carpark.hasFastEV ? '50kW+' : 'EV'}
                    </span>
                  )}
                  <span className="text-[10px] text-[#737685] flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">timer</span>
                    {carpark.gracePeriodMins}m
                  </span>
                  <span className="text-[10px] text-[#874d00] font-semibold flex items-center gap-0.5">
                    ★ {carpark.rating || 4.5}
                  </span>
                </div>

                <span className="text-xs font-bold text-[#003d9b] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {sorted.length > displayCount && (
        <div className="pt-3 flex justify-center">
          <button
            onClick={() => setDisplayCount((prev) => prev + 48)}
            className="px-6 py-2.5 bg-white hover:bg-[#eeeef0] border border-[#c3c6d6]/60 rounded-xl text-xs font-bold text-[#003d9b] shadow-sm flex items-center gap-2 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
            <span>Load More ({sorted.length - displayCount} remaining)</span>
          </button>
        </div>
      )}
    </div>
  );
};
