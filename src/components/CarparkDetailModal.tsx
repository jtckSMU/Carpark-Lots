import React, { useState } from 'react';
import { Carpark, UserProfile } from '../types';

interface CarparkDetailModalProps {
  carpark: Carpark | null;
  onClose: () => void;
  onStartSession: (carpark: Carpark, bayNumber?: string, floor?: string) => void;
  onReserveSpot: (carpark: Carpark) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
  userProfile: UserProfile;
  onSaveNote: (carparkId: string, note: string) => void;
}

export const CarparkDetailModal: React.FC<CarparkDetailModalProps> = ({
  carpark,
  onClose,
  onStartSession,
  onReserveSpot,
  onToggleFavorite,
  isFavorite,
  userProfile,
  onSaveNote,
}) => {
  if (!carpark) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'rates' | 'ev' | 'forecast'>('overview');
  const [bayInput, setBayInput] = useState('B2-44A');
  const [floorInput, setFloorInput] = useState('Basement 2');
  const [showSessionStarter, setShowSessionStarter] = useState(false);
  const [noteText, setNoteText] = useState(userProfile.savedNotes[carpark.id] || '');
  const [noteSaved, setNoteSaved] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(carpark.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const isFull = carpark.availableLots === 0;
  const occupancyPercent = Math.round(
    ((carpark.totalLots - carpark.availableLots) / carpark.totalLots) * 100
  );

  const handleSaveUserNote = () => {
    onSaveNote(carpark.id, noteText);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  const tabs = [
    { id: 'overview' as const, icon: 'info', label: 'Info' },
    { id: 'rates' as const, icon: 'payments', label: 'Rates' },
    ...(carpark.hasEV
      ? [{ id: 'ev' as const, icon: 'bolt', label: 'EV Power' }]
      : []),
    { id: 'forecast' as const, icon: 'bar_chart', label: 'Trends' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-end sm:items-center p-0 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden border border-[#e2e2e5] animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="p-3.5 sm:p-4 bg-[#f9f9fc] border-b border-[#eeeef0] flex items-start justify-between">
          <div className="flex-1 pr-2">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#003d9b]/10 text-[#003d9b]">
                {carpark.area} • {carpark.operator}
              </span>
              {carpark.erpZone && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#874d00]/10 text-[#874d00]">
                  {carpark.erpZone}
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1a1c1e] leading-tight">
              {carpark.name}
            </h2>
            <div className="text-xs text-[#434654] mt-1 flex items-start gap-1 leading-snug">
              <span className="material-symbols-outlined text-[15px] text-[#003d9b] shrink-0 mt-0.5">location_on</span>
              <span className="font-semibold text-[#1a1c1e] select-all break-words">{carpark.address}</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleFavorite(carpark.id)}
              className={`p-2 rounded-full border transition-colors ${
                isFavorite
                  ? 'bg-[#ffdad6] border-[#ffdad6] text-[#ba1a1a]'
                  : 'bg-white border-[#e2e2e5] text-[#737685] hover:text-[#ba1a1a]'
              }`}
              title="Save Favorite"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isFavorite ? 'favorite' : 'favorite_border'}
              </span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white border border-[#e2e2e5] text-[#737685] hover:text-[#1a1c1e] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Real-time Vacancy Status Banner */}
        <div className="px-4 py-2.5 bg-[#eeeef0]/50 border-b border-[#e2e2e5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-11 h-11 rounded-2xl flex flex-col items-center justify-center font-bold shadow-sm ${
                isFull
                  ? 'bg-[#ffdad6] text-[#93000a]'
                  : carpark.availableLots < 20
                  ? 'bg-[#ffdcbf] text-[#2d1600]'
                  : 'bg-[#78fbb6] text-[#002111]'
              }`}
            >
              <span className="text-base leading-none">
                {isFull ? '0' : carpark.availableLots}
              </span>
              <span className="text-[8px] uppercase tracking-tighter">Lots</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isFull
                      ? 'bg-[#ba1a1a]'
                      : carpark.availableLots < 20
                      ? 'bg-[#874d00]'
                      : 'bg-[#006d43] animate-pulse'
                  }`}
                ></span>
                <span className="text-xs font-bold uppercase text-[#1a1c1e]">
                  {isFull
                    ? 'Full'
                    : carpark.availableLots < 20
                    ? 'Limited Lots'
                    : 'Lots Available'}
                </span>
              </div>
              <p className="text-[11px] text-[#737685]">
                {carpark.totalLots - carpark.availableLots} / {carpark.totalLots} filled ({occupancyPercent}%)
              </p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm font-bold text-[#003d9b] flex items-center justify-end gap-0.5">
              <span className="material-symbols-outlined text-[15px]">payments</span>
              <span>${carpark.baseRatePerHour.toFixed(2)}/h</span>
            </div>
            <div className="text-[10px] text-[#006d43] font-bold flex items-center justify-end gap-0.5">
              <span className="material-symbols-outlined text-[12px]">timer</span>
              {carpark.gracePeriodMins}m Grace
            </div>
          </div>
        </div>

        {/* Dedicated Address & Fast Navigation Strip */}
        <div className="px-4 py-2.5 bg-[#f3f3f6] border-b border-[#e2e2e5] flex items-center justify-between gap-2.5">
          <div className="flex items-start gap-2 min-w-0 flex-1">
            <div className="w-7 h-7 rounded-lg bg-white border border-[#e2e2e5] flex items-center justify-center text-[#003d9b] shrink-0 mt-0.5 shadow-2xs">
              <span className="material-symbols-outlined text-[16px]">pin_drop</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#737685] flex items-center gap-1.5">
                <span>Carpark Address</span>
                {carpark.distanceKm !== undefined && (
                  <span className="text-[#003d9b] font-semibold">• {carpark.distanceKm} km away</span>
                )}
              </div>
              <div className="text-xs font-semibold text-[#1a1c1e] select-all leading-snug break-words">
                {carpark.address}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleCopyAddress}
              className="px-2.5 py-1.5 bg-white hover:bg-[#eeeef0] active:scale-95 text-[#1a1c1e] text-[11px] font-semibold rounded-xl border border-[#e2e2e5] transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
              title="Copy address to clipboard"
            >
              <span className="material-symbols-outlined text-[14px] text-[#003d9b]">
                {copiedAddress ? 'check' : 'content_copy'}
              </span>
              <span>{copiedAddress ? 'Copied' : 'Copy'}</span>
            </button>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                carpark.name + ', ' + carpark.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 bg-[#003d9b] hover:bg-[#002d73] active:scale-95 text-white text-[11px] font-semibold rounded-xl transition-all flex items-center gap-1 shadow-2xs"
              title="Get directions in Google Maps"
            >
              <span className="material-symbols-outlined text-[14px]">directions</span>
              <span>Directions</span>
            </a>
          </div>
        </div>

        {/* Tab Navigation with Icons */}
        <div className="flex border-b border-[#e2e2e5] px-4 bg-white text-xs font-bold">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`py-2 px-3 border-b-2 transition-colors flex items-center gap-1 cursor-pointer ${
                activeTab === t.id
                  ? 'border-[#003d9b] text-[#003d9b]'
                  : 'border-transparent text-[#737685] hover:text-[#1a1c1e]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-4 overflow-y-auto max-h-[380px] space-y-3">
          {activeTab === 'overview' && (
            <>
              {/* Key Specs Grid with Icons */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 bg-[#f3f3f6] rounded-xl text-center flex flex-col items-center">
                  <span className="material-symbols-outlined text-[#003d9b] text-[18px]">
                    height
                  </span>
                  <div className="text-[10px] text-[#737685]">Height</div>
                  <div className="text-xs font-bold text-[#1a1c1e]">
                    {carpark.heightLimitM}m
                  </div>
                </div>

                <div className="p-2.5 bg-[#f3f3f6] rounded-xl text-center flex flex-col items-center">
                  <span className="material-symbols-outlined text-[#006d43] text-[18px]">
                    ev_station
                  </span>
                  <div className="text-[10px] text-[#737685]">EV Power</div>
                  <div className="text-xs font-bold text-[#1a1c1e]">
                    {carpark.hasEV ? 'Installed' : 'None'}
                  </div>
                </div>

                <div className="p-2.5 bg-[#f3f3f6] rounded-xl text-center flex flex-col items-center">
                  <span className="material-symbols-outlined text-[#874d00] text-[18px]">
                    accessible
                  </span>
                  <div className="text-[10px] text-[#737685]">Accessible</div>
                  <div className="text-xs font-bold text-[#1a1c1e]">
                    {carpark.disabledLots} Lots
                  </div>
                </div>
              </div>

              {/* Amenities chips with icons */}
              <div>
                <h4 className="text-[11px] font-bold text-[#737685] uppercase tracking-wider mb-1.5">
                  Amenities
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {carpark.amenities.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 bg-[#eeeef0] text-[#1a1c1e] rounded-lg text-xs font-medium flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[13px] text-[#003d9b]">
                        check
                      </span>
                      {item}
                    </span>
                  ))}
                  {carpark.cctvSecurity && (
                    <span className="px-2 py-0.5 bg-[#eeeef0] text-[#1a1c1e] rounded-lg text-xs font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px] text-[#006d43]">
                        videocam
                      </span>
                      CCTV
                    </span>
                  )}
                </div>
              </div>

              {/* User Custom Note Field */}
              <div className="p-2.5 bg-[#fff8e1] rounded-xl border border-[#ffe082]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#874d00] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">edit_note</span>
                    My Parking Note
                  </span>
                  {noteSaved && (
                    <span className="text-[10px] text-[#006d43] font-bold">Saved!</span>
                  )}
                </div>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="e.g. Park B2 near Lobby D"
                    className="flex-1 text-xs bg-white p-1.5 rounded-lg border border-[#ffe082] text-[#1a1c1e] outline-none"
                  />
                  <button
                    onClick={handleSaveUserNote}
                    className="px-2.5 py-1 bg-[#874d00] text-white text-xs font-bold rounded-lg hover:bg-[#663800]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'rates' && (
            <div className="space-y-2.5 text-xs">
              {(() => {
                const formatRateDisplay = (rate: number, unit?: string) => {
                  if (!unit) return `$${rate.toFixed(2)}/h`;
                  const trimmed = unit.trim();
                  if (trimmed.startsWith('$') || /^free/i.test(trimmed) || /coupon/i.test(trimmed)) {
                    return trimmed;
                  }
                  if (rate === 0) {
                    return trimmed;
                  }
                  return `$${rate.toFixed(2)} ${trimmed}`;
                };

                return (
                  <>
                    <div className="p-2.5 bg-[#f9f9fc] rounded-xl border border-[#e2e2e5]">
                      <h4 className="font-bold text-[#003d9b] mb-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">calendar_today</span>
                        Monday - Friday (Weekdays)
                      </h4>
                      <div className="space-y-1.5 divide-y divide-[#eeeef0]">
                        {carpark.dayRates.weekday.map((r, i) => (
                          <div key={i} className="flex justify-between items-start pt-1 gap-2">
                            <span className="text-[#434654] font-medium shrink-0">{r.timeRange}</span>
                            <span className="font-bold text-[#1a1c1e] text-right">
                              {formatRateDisplay(r.rate, r.unit)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 bg-[#f9f9fc] rounded-xl border border-[#e2e2e5]">
                      <h4 className="font-bold text-[#003d9b] mb-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">weekend</span>
                        Saturday
                      </h4>
                      <div className="space-y-1.5 divide-y divide-[#eeeef0]">
                        {carpark.dayRates.saturday.map((r, i) => (
                          <div key={i} className="flex justify-between items-start pt-1 gap-2">
                            <span className="text-[#434654] font-medium shrink-0">{r.timeRange}</span>
                            <span className="font-bold text-[#1a1c1e] text-right">
                              {formatRateDisplay(r.rate, r.unit)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 bg-[#f9f9fc] rounded-xl border border-[#e2e2e5]">
                      <h4 className="font-bold text-[#003d9b] mb-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">wb_sunny</span>
                        Sunday & Public Holidays
                      </h4>
                      <div className="space-y-1.5 divide-y divide-[#eeeef0]">
                        {carpark.dayRates.sundayHoliday.map((r, i) => (
                          <div key={i} className="flex justify-between items-start pt-1 gap-2">
                            <span className="text-[#434654] font-medium shrink-0">{r.timeRange}</span>
                            <span className="font-bold text-[#1a1c1e] text-right">
                              {formatRateDisplay(r.rate, r.unit)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}

              <div className="p-2 bg-[#e8e8ea] rounded-lg text-[#434654] text-[11px] flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">timer</span>
                <span>Grace Period: <strong>{carpark.gracePeriodMins}m free drop-off</strong></span>
              </div>
            </div>
          )}

          {activeTab === 'ev' && (
            <div className="space-y-2">
              <div className="p-2.5 bg-[#75f8b3]/15 border border-[#007147]/30 rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#007147] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">bolt</span>
                    EV Chargers
                  </span>
                  <span className="px-2 py-0.5 bg-[#006d43] text-white text-[9px] font-bold rounded-full">
                    SP / Shell
                  </span>
                </div>
              </div>

              {carpark.evChargers?.map((ev, i) => (
                <div
                  key={i}
                  className="p-2.5 bg-white rounded-xl border border-[#e2e2e5] flex items-center justify-between shadow-sm"
                >
                  <div>
                    <div className="font-bold text-xs text-[#1a1c1e] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[#006d43] text-[16px]">
                        power
                      </span>
                      {ev.type}
                    </div>
                    <div className="text-[11px] text-[#737685] mt-0.5">
                      ${ev.pricePerKwh.toFixed(2)}/kWh • {ev.powerKw}kW
                    </div>
                  </div>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      ev.available > 0
                        ? 'bg-[#75f8b3]/40 text-[#007147]'
                        : 'bg-[#ffdad6] text-[#ba1a1a]'
                    }`}
                  >
                    {ev.available} / {ev.total}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'forecast' && (
            <div className="space-y-2">
              <div className="h-36 flex items-end justify-between gap-1 pt-4 px-2 bg-[#f9f9fc] rounded-2xl border border-[#e2e2e5]">
                {carpark.occupancyTrend.map((point, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                    <div
                      style={{ height: `${point.occupancyPercent}%` }}
                      className={`w-full max-w-[24px] rounded-t-md ${
                        point.occupancyPercent >= 85
                          ? 'bg-[#ba1a1a]'
                          : point.occupancyPercent > 60
                          ? 'bg-[#874d00]'
                          : 'bg-[#003d9b]'
                      }`}
                    ></div>
                    <span className="text-[9px] text-[#737685] font-semibold mt-1">
                      {point.hour.split(':')[0]}h
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action Tray */}
        <div className="p-3 bg-[#f9f9fc] border-t border-[#eeeef0]">
          {!showSessionStarter ? (
            <div className="flex gap-2">
              <button
                onClick={() => onReserveSpot(carpark)}
                className="flex-1 py-2.5 px-2 rounded-xl border border-[#003d9b] text-[#003d9b] font-bold text-xs hover:bg-[#dae2ff]/40 transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[17px]">timer</span>
                <span>Hold 15m Spot</span>
              </button>

              <button
                onClick={() => setShowSessionStarter(true)}
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#003d9b] hover:bg-[#0052cc] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[17px]">directions_car</span>
                <span>Park Now</span>
              </button>
            </div>
          ) : (
            <div className="space-y-2 bg-white p-3 rounded-2xl border border-[#c3c6d6]/40 animate-fadeIn">
              <div className="flex justify-between items-center text-xs font-bold text-[#1a1c1e]">
                <span>Check-in Bay</span>
                <button
                  onClick={() => setShowSessionStarter(false)}
                  className="text-[#737685]"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="text-[10px] text-[#737685] block">Floor</label>
                  <input
                    type="text"
                    value={floorInput}
                    onChange={(e) => setFloorInput(e.target.value)}
                    className="w-full p-1.5 bg-[#f3f3f6] rounded-lg border border-[#e2e2e5] font-semibold"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#737685] block">Bay #</label>
                  <input
                    type="text"
                    value={bayInput}
                    onChange={(e) => setBayInput(e.target.value)}
                    className="w-full p-1.5 bg-[#f3f3f6] rounded-lg border border-[#e2e2e5] font-semibold"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  onStartSession(carpark, bayInput, floorInput);
                  onClose();
                }}
                className="w-full py-2 bg-[#006d43] hover:bg-[#005232] text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Start Meter</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
