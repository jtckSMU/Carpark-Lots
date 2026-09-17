import React, { useState, useRef, useEffect } from 'react';
import { Carpark, FilterState, UserProfile } from '../types';

interface HeaderProps {
  userProfile: UserProfile;
  carparks: Carpark[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onSelectCarpark: (carpark: Carpark) => void;
  onOpenProfile: () => void;
  activeTab: string;
}

export const Header: React.FC<HeaderProps> = ({
  userProfile,
  carparks,
  filters,
  onFilterChange,
  onSelectCarpark,
  onOpenProfile,
}) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = filters.searchQuery.trim()
    ? carparks.filter(
        (c) =>
          c.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          c.area.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          c.address.toLowerCase().includes(filters.searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalAvailable = carparks.reduce((acc, c) => acc + c.availableLots, 0);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#f9f9fc]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#eeeef0]">
      <div className="max-w-7xl mx-auto">
        {/* Brand bar */}
        <div className="h-14 px-3 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSriQUS3-jtYSAYcOAtjx3HYM8sOOCgfIqQdKkiAXnV9_PglsV0_1xBgTfPdCH9AmSRoipii4Kudik8izsMDrRDyTFZ3siH4XuB92XldSShSoy5IxFmHKhGgtYZ34Ksx-7ry-cQG8EHsWojzyGjpIwpZs4EBRCQ_uUIyaYKvqpuUe2Vv8EPyF--C0X6Qa3nwU6si5mbFwpdCflEQVCXNL3xhQIWeVkHsEg3mp-iFpQsxL9PWDkPVRaTg"
              alt="UrbanFlow"
              className="h-7 w-auto object-contain cursor-pointer transition-transform hover:scale-105"
            />
            <span className="font-bold text-lg tracking-tight text-[#003d9b]">
              UrbanFlow
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Live City Status with Icons */}
            <div className="flex items-center gap-1 px-2.5 py-1 bg-[#75f8b3]/25 border border-[#007147]/20 rounded-full text-xs font-bold text-[#007147]">
              <span className="material-symbols-outlined text-[15px] text-[#006d43] animate-pulse">
                sensors
              </span>
              <span className="material-symbols-outlined text-[14px]">local_parking</span>
              <span>{totalAvailable}</span>
            </div>

            {/* Profile Avatar Button */}
            <button
              onClick={onOpenProfile}
              id="profile-avatar-button"
              className="relative p-0.5 rounded-full ring-2 ring-[#003d9b]/20 hover:ring-[#003d9b] transition-all cursor-pointer"
              title="Jonathan Tang"
            >
              <img
                src={userProfile.avatarUrl}
                alt={userProfile.name}
                className="w-7 h-7 rounded-full object-cover shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#006d43] border-2 border-white rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Search Bar + Quick 1-Tap Icon Filter Ribbon */}
        <div className="px-3 sm:px-6 pb-2.5 pt-0.5 space-y-2" ref={searchRef}>
          <div className="relative flex items-center gap-2 bg-[#eeeef0] hover:bg-[#e8e8ea] transition-colors rounded-xl px-3 h-11 shadow-sm border border-[#c3c6d6]/30">
            <span className="material-symbols-outlined text-[#434654] text-[20px]">
              search
            </span>
            <input
              type="text"
              id="carpark-search-input"
              value={filters.searchQuery}
              onChange={(e) =>
                onFilterChange({ ...filters, searchQuery: e.target.value })
              }
              onFocus={() => setSearchFocused(true)}
              placeholder="Search carparks, malls, streets..."
              className="bg-transparent border-none outline-none flex-1 text-xs sm:text-sm font-medium text-[#1a1c1e] placeholder:text-[#737685]"
            />

            {filters.searchQuery && (
              <button
                onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
                className="p-1 hover:bg-[#dadadc] rounded-full text-[#737685] transition-colors"
                title="Clear"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {searchFocused && filteredSuggestions.length > 0 && (
            <div className="absolute left-3 right-3 sm:left-6 sm:right-6 mt-1 bg-white rounded-2xl shadow-2xl border border-[#e2e2e5] max-h-72 overflow-y-auto z-50 divide-y divide-[#f3f3f6]">
              {filteredSuggestions.map((carpark) => (
                <div
                  key={carpark.id}
                  onClick={() => {
                    onSelectCarpark(carpark);
                    setSearchFocused(false);
                  }}
                  className="p-3 hover:bg-[#f3f3f6] cursor-pointer flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        carpark.lotStatus === 'available'
                          ? 'bg-[#75f8b3]/30 text-[#007147]'
                          : carpark.lotStatus === 'limited'
                          ? 'bg-[#ffdcbf] text-[#663800]'
                          : 'bg-[#ffdad6] text-[#ba1a1a]'
                      }`}
                    >
                      {carpark.availableLots === 0 ? '0' : carpark.availableLots}
                    </div>
                    <div>
                      <div className="font-bold text-xs text-[#1a1c1e]">
                        {carpark.name}
                      </div>
                      <div className="text-[11px] text-[#434654] flex items-center gap-1 mt-0.5">
                        <span>${carpark.baseRatePerHour.toFixed(2)}/h</span>
                        {carpark.hasEV && (
                          <span className="text-[#006d43] flex items-center">
                            <span className="material-symbols-outlined text-[12px]">bolt</span>
                          </span>
                        )}
                        <span>•</span>
                        <span>{carpark.distanceKm}km</span>
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#003d9b] text-[18px]">
                    chevron_right
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* 1-Tap Icon Filter Pills (Ultra Fast Usability) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {/* EV Only Icon Pill */}
            <button
              onClick={() => onFilterChange({ ...filters, evOnly: !filters.evOnly })}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                filters.evOnly
                  ? 'bg-[#003d9b] text-white shadow-sm scale-105'
                  : 'bg-[#eeeef0] text-[#434654] hover:bg-[#e2e2e5]'
              }`}
              title="Electric Vehicle Charging Only"
            >
              <span className="material-symbols-outlined text-[15px]">ev_station</span>
              <span>EV</span>
            </button>

            {/* Fast DC Charging */}
            <button
              onClick={() =>
                onFilterChange({
                  ...filters,
                  fastChargingOnly: !filters.fastChargingOnly,
                })
              }
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                filters.fastChargingOnly
                  ? 'bg-[#006d43] text-white shadow-sm scale-105'
                  : 'bg-[#eeeef0] text-[#434654] hover:bg-[#e2e2e5]'
              }`}
              title="50kW+ Fast DC Charging"
            >
              <span className="material-symbols-outlined text-[15px]">bolt</span>
              <span>50kW+</span>
            </button>

            {/* Price < $2 */}
            <button
              onClick={() =>
                onFilterChange({
                  ...filters,
                  maxRate: filters.maxRate === 2 ? null : 2,
                })
              }
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                filters.maxRate === 2
                  ? 'bg-[#874d00] text-white shadow-sm scale-105'
                  : 'bg-[#eeeef0] text-[#434654] hover:bg-[#e2e2e5]'
              }`}
              title="Rates under $2/hour"
            >
              <span className="material-symbols-outlined text-[15px]">payments</span>
              <span>&lt;$2/h</span>
            </button>

            {/* Height > 2.1m */}
            <button
              onClick={() =>
                onFilterChange({
                  ...filters,
                  minHeight: filters.minHeight === 2.1 ? null : 2.1,
                })
              }
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                filters.minHeight === 2.1
                  ? 'bg-[#434654] text-white shadow-sm scale-105'
                  : 'bg-[#eeeef0] text-[#434654] hover:bg-[#e2e2e5]'
              }`}
              title="High Clearance > 2.1m"
            >
              <span className="material-symbols-outlined text-[15px]">height</span>
              <span>&gt;2.1m</span>
            </button>

            {/* Available Lots Only */}
            <button
              onClick={() =>
                onFilterChange({
                  ...filters,
                  onlyAvailable: !filters.onlyAvailable,
                })
              }
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                filters.onlyAvailable
                  ? 'bg-[#007147] text-white shadow-sm scale-105'
                  : 'bg-[#eeeef0] text-[#434654] hover:bg-[#e2e2e5]'
              }`}
              title="Available Lots Only"
            >
              <span className="material-symbols-outlined text-[15px]">check_circle</span>
              <span>Lots</span>
            </button>

            {/* Reset Filter Button if any active */}
            {(filters.evOnly ||
              filters.fastChargingOnly ||
              filters.maxRate ||
              filters.minHeight ||
              filters.onlyAvailable) && (
              <button
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    evOnly: false,
                    fastChargingOnly: false,
                    maxRate: null,
                    minHeight: null,
                    onlyAvailable: false,
                  })
                }
                className="p-1 rounded-lg bg-[#ffdad6] text-[#ba1a1a] hover:bg-red-200 transition-colors shrink-0"
                title="Reset all filters"
              >
                <span className="material-symbols-outlined text-[16px]">restart_alt</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
