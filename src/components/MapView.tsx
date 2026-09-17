import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Carpark, FilterState } from '../types';
import L from 'leaflet';

interface MapViewProps {
  carparks: Carpark[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onSelectCarpark: (carpark: Carpark) => void;
  selectedCarpark: Carpark | null;
  onToggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const MapView: React.FC<MapViewProps> = ({
  carparks,
  filters,
  onFilterChange,
  onSelectCarpark,
  selectedCarpark,
  onToggleFavorite,
  isFavorite,
}) => {
  const [activeInfoId, setActiveInfoId] = useState<string | null>(null);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);
  const leafletMapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  // Sync local filters with parent
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  // Filter carparks based on active filters
  const filteredCarparks = carparks.filter((c) => {
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

  const getCategoryIconSymbol = (cat?: string, agency?: string) => {
    if (cat === 'hospital' || agency === 'SingHealth' || agency === 'NHG' || agency === 'NUHS') return '🏥';
    if (cat === 'community' || agency === 'PA' || agency === 'SAFRA' || agency === 'HomeTeamNS') return '🏛️';
    if (cat === 'park' || cat === 'attraction' || agency === 'NParks' || agency === 'SDC') return '🌳';
    if (cat === 'transport' || agency === 'CAG' || agency === 'MPA') return '✈️';
    if (cat === 'commercial' || agency === 'NUS' || agency === 'NTU' || agency === 'SMU') return '🏢';
    if (cat === 'hdb' || agency === 'HDB') return '🅿️';
    return '🛍️';
  };

  // Render markers smoothly on Leaflet
  const updateMapMarkers = useCallback(() => {
    const map = mapInstanceRef.current;
    if (!map || !markersLayerRef.current) return;

    markersLayerRef.current.clearLayers();

    // Limit to visible/top 350 markers if zoomed out, or all in viewport when zoomed in
    const zoom = map.getZoom();
    const bounds = map.getBounds();
    
    // Sort or filter by visible bounds if zoomed in
    const visibleCarparks = zoom > 12 
      ? filteredCarparks.filter(cp => bounds.contains([cp.lat, cp.lng]))
      : filteredCarparks.slice(0, 250);

    visibleCarparks.forEach((cp) => {
      const isSelected = selectedCarpark?.id === cp.id || activeInfoId === cp.id;
      const isFull = cp.availableLots === 0;
      const isLimited = cp.availableLots > 0 && cp.availableLots < 20;

      const badgeBg = isFull ? '#ffdad6' : isLimited ? '#ffdcbf' : '#78fbb6';
      const badgeText = isFull ? '#93000a' : isLimited ? '#2d1600' : '#002111';
      const catSymbol = getCategoryIconSymbol(cp.category, cp.agency);

      const html = `
        <div style="transform: translate(-50%, -100%); display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: transform 0.15s ease;">
          <div style="background: ${badgeBg}; color: ${badgeText}; font-weight: 800; font-size: ${zoom > 13 ? '11px' : '10px'}; padding: 2px 7px; border-radius: 9999px; box-shadow: 0 4px 12px rgba(0,0,0,0.22); display: flex; align-items: center; gap: 3px; border: ${
            isSelected ? '2.5px solid #003d9b' : '1.5px solid white'
          }; white-space: nowrap;">
            <span style="font-size: 10px;">${catSymbol}</span>
            <span>${isFull ? 'Full' : cp.availableLots}</span>
            ${cp.hasEV ? '<span style="font-size: 11px;">⚡</span>' : ''}
          </div>
          <div style="width: 3px; height: 6px; background: ${badgeBg}; border-bottom-left-radius: 9999px; border-bottom-right-radius: 9999px;"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-carpark-pin',
        html,
        iconSize: [42, 28],
        iconAnchor: [21, 28],
      });

      const marker = L.marker([cp.lat, cp.lng], { icon: customIcon, zIndexOffset: isSelected ? 1000 : 10 });
      
      // Carpark name and details only appear when cursor hovers over the marker
      const escapedName = cp.name.replace(/"/g, '&quot;');
      const tooltipContent = `
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <div style="font-weight: 700; font-size: 12px; color: #ffffff; white-space: nowrap; max-width: 220px; overflow: hidden; text-overflow: ellipsis;">
            ${catSymbol} ${escapedName}
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 10px; color: #b2c5ff;">
            <span>${cp.area}</span>
            <span>•</span>
            <span>${isFull ? 'Full' : `${cp.availableLots} lots`}</span>
            <span>•</span>
            <span>$${cp.baseRatePerHour.toFixed(2)}/h</span>
            ${cp.hasEV ? '<span title="EV Available">⚡</span>' : ''}
          </div>
        </div>
      `;
      marker.bindTooltip(tooltipContent, {
        direction: 'top',
        offset: [0, -26],
        opacity: 1,
        className: 'carpark-hover-tip',
        sticky: false,
      });

      marker.on('click', (e) => {
        L.DomEvent.stopPropagation(e);
        setActiveInfoId(cp.id);
        onSelectCarpark(cp);
      });
      markersLayerRef.current?.addLayer(marker);
    });
  }, [filteredCarparks, selectedCarpark, activeInfoId, onSelectCarpark]);

  // Setup Leaflet map on mount
  useEffect(() => {
    if (!leafletMapRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(leafletMapRef.current, {
        center: [1.3521, 103.8198],
        zoom: 12,
        minZoom: 10,
        maxZoom: 18,
        zoomControl: false,
        touchZoom: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        dragging: true,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO &copy; OpenStreetMap',
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersLayerRef.current = markersGroup;
      mapInstanceRef.current = map;

      // Update markers on move/zoom
      map.on('moveend', () => {
        updateMapMarkers();
      });

      // Quick resize trigger
      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    }

    updateMapMarkers();
  }, [updateMapMarkers]);

  // When selectedCarpark changes, fly to its coordinates
  useEffect(() => {
    if (selectedCarpark && mapInstanceRef.current) {
      setActiveInfoId(selectedCarpark.id);
      mapInstanceRef.current.flyTo([selectedCarpark.lat, selectedCarpark.lng], 15, {
        animate: true,
        duration: 0.8,
      });
    }
  }, [selectedCarpark]);

  const handleRecenter = () => {
    setActiveInfoId(null);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([1.3521, 103.8198], 12, { animate: true });
    }
  };

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
    setFilterPanelOpen(false);
  };

  const handleClearFilters = () => {
    const cleared: FilterState = {
      ...localFilters,
      evOnly: false,
      fastChargingOnly: false,
      maxRate: null,
      minHeight: null,
      onlyAvailable: false,
      selectedArea: 'All',
    };
    setLocalFilters(cleared);
    onFilterChange(cleared);
    setFilterPanelOpen(false);
  };

  // Regions with icon representations
  const areaBadges = [
    { id: 'All', icon: 'travel_explore', label: 'All', center: [1.3521, 103.8198], zoom: 12 },
    { id: 'Orchard', icon: 'shopping_bag', label: 'Orchard', center: [1.3048, 103.8318], zoom: 15 },
    { id: 'Marina Bay', icon: 'apartment', label: 'MBS/CBD', center: [1.2840, 103.8580], zoom: 14 },
    { id: 'Central', icon: 'near_me', label: 'Central', center: [1.3000, 103.8400], zoom: 14 },
    { id: 'North', icon: 'park', label: 'North', center: [1.4360, 103.7865], zoom: 13 },
    { id: 'East', icon: 'flight', label: 'East', center: [1.3526, 103.9447], zoom: 13 },
    { id: 'West', icon: 'factory', label: 'West', center: [1.3329, 103.7436], zoom: 13 },
    { id: 'South', icon: 'sailing', label: 'South', center: [1.2644, 103.8222], zoom: 14 },
  ];

  const highlightedCarpark = carparks.find((c) => c.id === activeInfoId) || selectedCarpark;

  return (
    <div className="relative w-full h-[calc(100vh-140px-60px)] min-h-[520px] overflow-hidden select-none touch-manipulation">
      {/* Area Icon Selector on Top */}
      <div className="absolute top-2.5 left-3 right-28 z-30 flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
        {areaBadges.map((badge) => (
          <button
            key={badge.id}
            onClick={() => {
              const next = filters.selectedArea === badge.id ? 'All' : badge.id;
              onFilterChange({ ...filters, selectedArea: next });
              if (mapInstanceRef.current && badge.center) {
                mapInstanceRef.current.flyTo(badge.center as [number, number], badge.zoom, {
                  animate: true,
                  duration: 0.8,
                });
              }
            }}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-md flex items-center gap-1 cursor-pointer ${
              filters.selectedArea === badge.id
                ? 'bg-[#003d9b] text-white shadow-lg scale-105 ring-2 ring-blue-300'
                : 'bg-white/95 backdrop-blur-md text-[#434654] hover:bg-white border border-[#c3c6d6]/40'
            }`}
            title={badge.label}
          >
            <span className="material-symbols-outlined text-[14px]">
              {badge.icon}
            </span>
            <span>{badge.label}</span>
          </button>
        ))}
      </div>

      {/* Status Legend Overlay */}
      <div className="absolute top-14 left-3 z-30 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl text-[11px] font-bold text-[#434654] border border-[#c3c6d6]/30 shadow-md">
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#78fbb6] border border-[#006d43]"></span>
          Available
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffdcbf] border border-[#663800]"></span>
          Limited
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffdad6] border border-[#ba1a1a]"></span>
          Full
        </span>
        <span className="flex items-center gap-0.5 text-[#006d43]">
          <span className="material-symbols-outlined text-[13px]">bolt</span>
          EV
        </span>
      </div>

      {/* Interactive Drag & Zoom Leaflet Map Container */}
      <div
        ref={leafletMapRef}
        className="w-full h-full z-10 cursor-grab active:cursor-grabbing"
      />

      {/* Floating Filter Button (Top Right) */}
      <div className="absolute top-2.5 right-3 z-40 flex flex-col items-end">
        <button
          id="filterToggle"
          onClick={() => setFilterPanelOpen(!filterPanelOpen)}
          className={`rounded-full px-3.5 py-2 shadow-xl flex items-center gap-1.5 transition-all cursor-pointer ${
            filterPanelOpen
              ? 'bg-[#0052cc] text-white ring-2 ring-[#dae2ff]'
              : 'bg-[#003d9b] text-white hover:bg-[#0052cc]'
          }`}
          title="Filters"
        >
          <span className="material-symbols-outlined text-[18px]">tune</span>
          <span className="text-xs font-bold uppercase">Filters</span>
          {(localFilters.evOnly ||
            localFilters.fastChargingOnly ||
            localFilters.maxRate ||
            localFilters.minHeight) && (
            <span className="w-2 h-2 rounded-full bg-[#78fbb6]"></span>
          )}
        </button>

        {/* Expanding Filter Panel */}
        {filterPanelOpen && (
          <div
            id="filterPanel"
            className="mt-2 bg-white rounded-2xl shadow-2xl w-72 overflow-hidden border border-[#e2e2e5] flex flex-col z-50 animate-fadeIn"
          >
            <div className="p-3.5 bg-[#f3f3f6] border-b border-[#e2e2e5] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#003d9b] text-[18px]">
                  filter_alt
                </span>
                <h3 className="font-bold text-xs text-[#1a1c1e] uppercase">
                  Parking Filters
                </h3>
              </div>
              <button
                onClick={() => setFilterPanelOpen(false)}
                className="text-[#737685] hover:text-[#1a1c1e] p-1"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <div className="p-3.5 flex flex-col gap-3">
              {/* EV Charging */}
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0052cc] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      ev_station
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#1a1c1e]">
                    EV Charging
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={localFilters.evOnly}
                  onChange={(e) =>
                    setLocalFilters({ ...localFilters, evOnly: e.target.checked })
                  }
                  className="w-4 h-4 accent-[#003d9b] rounded cursor-pointer"
                />
              </label>

              {/* Fast DC */}
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#75f8b3] text-[#007147] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                  </div>
                  <span className="text-xs font-bold text-[#1a1c1e]">
                    Fast DC (50kW+)
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={localFilters.fastChargingOnly}
                  onChange={(e) =>
                    setLocalFilters({
                      ...localFilters,
                      fastChargingOnly: e.target.checked,
                    })
                  }
                  className="w-4 h-4 accent-[#003d9b] rounded cursor-pointer"
                />
              </label>

              {/* Rates < $2 */}
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#874d00] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      payments
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#1a1c1e]">
                    Rates &lt; $2/hr
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={localFilters.maxRate === 2}
                  onChange={(e) =>
                    setLocalFilters({
                      ...localFilters,
                      maxRate: e.target.checked ? 2 : null,
                    })
                  }
                  className="w-4 h-4 accent-[#003d9b] rounded cursor-pointer"
                />
              </label>

              {/* Height > 2.1m */}
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#e8e8ea] text-[#1a1c1e] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">height</span>
                  </div>
                  <span className="text-xs font-bold text-[#1a1c1e]">
                    Height &gt; 2.1m
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={localFilters.minHeight === 2.1}
                  onChange={(e) =>
                    setLocalFilters({
                      ...localFilters,
                      minHeight: e.target.checked ? 2.1 : null,
                    })
                  }
                  className="w-4 h-4 accent-[#003d9b] rounded cursor-pointer"
                />
              </label>
            </div>

            <div className="p-2.5 bg-[#eeeef0] border-t border-[#e2e2e5] flex gap-2 justify-end">
              <button
                onClick={handleClearFilters}
                className="px-2.5 py-1 text-xs text-[#434654] font-bold hover:bg-white rounded-lg transition-colors cursor-pointer"
              >
                Clear
              </button>
              <button
                onClick={handleApplyFilters}
                className="px-3.5 py-1 bg-[#003d9b] text-white text-xs font-bold rounded-lg shadow-sm hover:bg-[#0052cc] transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Map Control Buttons: Zoom In, Zoom Out, Recenter */}
      <div className="absolute bottom-24 right-3 z-30 flex flex-col gap-2">
        <div className="flex flex-col bg-white rounded-2xl shadow-xl border border-[#c3c6d6]/40 overflow-hidden">
          <button
            onClick={handleZoomIn}
            id="map-zoom-in"
            className="w-10 h-10 flex items-center justify-center text-[#1a1c1e] hover:bg-[#eeeef0] active:bg-[#e2e2e5] transition-colors border-b border-[#eeeef0] cursor-pointer"
            title="Zoom In"
          >
            <span className="material-symbols-outlined text-[22px]">add</span>
          </button>
          <button
            onClick={handleZoomOut}
            id="map-zoom-out"
            className="w-10 h-10 flex items-center justify-center text-[#1a1c1e] hover:bg-[#eeeef0] active:bg-[#e2e2e5] transition-colors cursor-pointer"
            title="Zoom Out"
          >
            <span className="material-symbols-outlined text-[22px]">remove</span>
          </button>
        </div>

        <button
          onClick={handleRecenter}
          id="location-center-btn"
          className="w-10 h-10 bg-white text-[#003d9b] rounded-2xl shadow-xl flex items-center justify-center hover:bg-[#eeeef0] active:scale-95 transition-all border border-[#c3c6d6]/40 cursor-pointer"
          title="Recenter Singapore Map"
        >
          <span className="material-symbols-outlined text-[22px]">
            my_location
          </span>
        </button>
      </div>

      {/* Floating Bottom Quick Peek Card (when a pin is active) */}
      {highlightedCarpark && (
        <div className="absolute bottom-2 inset-x-3 max-w-md mx-auto z-40 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#e2e2e5] p-3.5 animate-slideUp">
          <div className="flex items-start justify-between gap-2">
            <div
              className="flex-1 cursor-pointer"
              onClick={() => onSelectCarpark(highlightedCarpark)}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#eeeef0] text-[#434654] uppercase">
                  {highlightedCarpark.area}
                </span>
                <span className="text-[11px] text-[#737685] flex items-center gap-0.5 font-medium">
                  <span className="material-symbols-outlined text-[13px]">
                    near_me
                  </span>
                  {highlightedCarpark.distanceKm} km
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#1a1c1e] truncate hover:text-[#003d9b] transition-colors">
                {highlightedCarpark.name}
              </h3>
              <p className="text-xs text-[#737685] mt-0.5 flex items-center gap-1 leading-snug">
                <span className="material-symbols-outlined text-[13px] text-[#003d9b] shrink-0">
                  location_on
                </span>
                <span className="line-clamp-1">{highlightedCarpark.address}</span>
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onToggleFavorite(highlightedCarpark.id)}
                className={`p-1.5 rounded-full border transition-colors ${
                  isFavorite(highlightedCarpark.id)
                    ? 'bg-[#ffdad6] border-[#ffdad6] text-[#ba1a1a]'
                    : 'bg-white border-[#e2e2e5] text-[#737685] hover:text-[#ba1a1a]'
                }`}
                title="Favorite"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isFavorite(highlightedCarpark.id) ? 'favorite' : 'favorite_border'}
                </span>
              </button>

              <button
                onClick={() => setActiveInfoId(null)}
                className="p-1.5 rounded-full hover:bg-[#eeeef0] text-[#737685]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics & 1-Tap Action Icons */}
          <div className="mt-2.5 pt-2 border-t border-[#eeeef0] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs">
              <span
                className={`font-bold px-2 py-0.5 rounded-lg flex items-center gap-1 ${
                  highlightedCarpark.availableLots === 0
                    ? 'bg-[#ffdad6] text-[#93000a]'
                    : highlightedCarpark.availableLots < 20
                    ? 'bg-[#ffdcbf] text-[#663800]'
                    : 'bg-[#78fbb6] text-[#002111]'
                }`}
              >
                <span className="material-symbols-outlined text-[13px]">
                  local_parking
                </span>
                {highlightedCarpark.availableLots === 0
                  ? 'FULL'
                  : `${highlightedCarpark.availableLots} Lots`}
              </span>

              <span className="font-bold text-[#003d9b] flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[14px]">
                  payments
                </span>
                ${highlightedCarpark.baseRatePerHour.toFixed(2)}/h
              </span>

              {highlightedCarpark.hasEV && (
                <span className="text-[#006d43] flex items-center" title="EV Charging">
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                </span>
              )}
            </div>

            {/* Quick Action Icon Button */}
            <button
              onClick={() => onSelectCarpark(highlightedCarpark)}
              className="px-3 py-1.5 bg-[#003d9b] hover:bg-[#0052cc] text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
            >
              <span>Details</span>
              <span className="material-symbols-outlined text-[15px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
