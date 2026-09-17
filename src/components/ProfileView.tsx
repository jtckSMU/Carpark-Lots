import React, { useState, useEffect } from 'react';
import { UserProfile, ActiveParkingSession } from '../types';

interface ProfileViewProps {
  userProfile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
  activeSession: ActiveParkingSession | null;
  onEndSession: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  userProfile,
  onUpdateProfile,
  activeSession,
  onEndSession,
}) => {
  const [editingVehicle, setEditingVehicle] = useState(false);
  const [vehiclePlate, setVehiclePlate] = useState(userProfile.vehiclePlate);
  const [vehicleModel, setVehicleModel] = useState(userProfile.vehicleModel);
  const [iuNumber, setIuNumber] = useState(userProfile.iuNumber);
  const [isEV, setIsEV] = useState(userProfile.isEV);
  const [elapsedMinutes, setElapsedMinutes] = useState(0);

  useEffect(() => {
    if (!activeSession) return;
    const updateElapsed = () => {
      const diffSecs = Math.floor((Date.now() - activeSession.startTime) / 1000);
      setElapsedMinutes(Math.max(1, Math.floor(diffSecs / 60)));
    };
    updateElapsed();
    const interval = setInterval(updateElapsed, 5000);
    return () => clearInterval(interval);
  }, [activeSession]);

  const handleSaveVehicle = () => {
    onUpdateProfile({
      ...userProfile,
      vehiclePlate,
      vehicleModel,
      iuNumber,
      isEV,
    });
    setEditingVehicle(false);
  };

  const estimatedCost = activeSession
    ? Math.max(1.2, (elapsedMinutes / 60) * 1.5).toFixed(2)
    : '0.00';

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 pt-2 pb-24 space-y-3">
      {/* Profile Header Card */}
      <div className="bg-white p-4 rounded-3xl border border-[#e2e2e5] shadow-sm flex items-center gap-3.5">
        <div className="relative">
          <img
            src={userProfile.avatarUrl}
            alt={userProfile.name}
            className="w-14 h-14 rounded-full object-cover shadow-sm ring-2 ring-[#003d9b]/20"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#006d43] border-2 border-white rounded-full flex items-center justify-center text-[8px] text-white font-bold">
            ✓
          </span>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-bold text-[#1a1c1e]">{userProfile.name}</h1>
            <span className="px-2 py-0.5 bg-[#dae2ff] text-[#003d9b] text-[10px] font-bold rounded-full">
              Gold
            </span>
          </div>
          <p className="text-xs text-[#737685]">{userProfile.email}</p>

          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 bg-[#eeeef0] text-[#434654] text-[10px] font-medium rounded-md flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[12px] text-[#003d9b]">
                pin
              </span>
              IU: {userProfile.iuNumber}
            </span>
            <span className="px-2 py-0.5 bg-[#75f8b3]/25 text-[#007147] text-[10px] font-bold rounded-md flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[12px]">
                credit_card
              </span>
              ERP Ready
            </span>
          </div>
        </div>
      </div>

      {/* Active Parking Session Card */}
      {activeSession && (
        <div className="bg-[#003d9b] text-white p-4 rounded-3xl shadow-xl border border-blue-400/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#75f8b3] animate-ping"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#75f8b3] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  timer
                </span>
                Active Parking Meter
              </span>
            </div>
            <span className="text-xs font-mono bg-white/20 px-2 py-0.5 rounded-md">
              {elapsedMinutes} mins
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-2 bg-white/10 p-2.5 rounded-2xl">
            <div>
              <div className="text-[10px] text-blue-200">Location</div>
              <div className="text-xs font-bold truncate">{activeSession.carparkName}</div>
              <div className="text-[10px] text-blue-100">{activeSession.floor} • {activeSession.bayNumber}</div>
            </div>

            <div>
              <div className="text-[10px] text-blue-200">Vehicle</div>
              <div className="text-xs font-bold">{activeSession.vehiclePlate}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="text-[10px] text-blue-200">Estimated Fee</div>
              <div className="text-lg font-extrabold text-[#75f8b3]">
                ${estimatedCost}
              </div>
            </div>
          </div>

          <button
            onClick={onEndSession}
            className="w-full mt-1 py-2 bg-white hover:bg-white/90 text-[#003d9b] font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">output</span>
            <span>End Session & Pay via ERP</span>
          </button>
        </div>
      )}

      {/* Registered Vehicle Card with Icons */}
      <div className="bg-white p-4 rounded-3xl border border-[#e2e2e5] shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-[#eeeef0] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#003d9b] text-[20px]">
              directions_car
            </span>
            <h2 className="text-sm font-bold text-[#1a1c1e]">Registered Vehicle</h2>
          </div>

          <button
            onClick={() => setEditingVehicle(!editingVehicle)}
            className="p-1 rounded-lg hover:bg-[#eeeef0] text-[#003d9b] text-xs font-bold flex items-center gap-0.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">edit</span>
            <span>{editingVehicle ? 'Cancel' : 'Edit'}</span>
          </button>
        </div>

        {!editingVehicle ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 bg-[#f3f3f6] rounded-2xl flex items-center gap-3">
              <span className="material-symbols-outlined text-[#003d9b] text-[24px]">
                badge
              </span>
              <div>
                <div className="text-[10px] text-[#737685]">License Plate</div>
                <div className="text-sm font-bold text-[#1a1c1e]">
                  {userProfile.vehiclePlate}
                </div>
                <div className="text-[11px] text-[#434654]">{userProfile.vehicleModel}</div>
              </div>
            </div>

            <div className="p-3 bg-[#f3f3f6] rounded-2xl flex items-center gap-3">
              <span className="material-symbols-outlined text-[#006d43] text-[24px]">
                bolt
              </span>
              <div>
                <div className="text-[10px] text-[#737685]">Propulsion & IU</div>
                <div className="text-xs font-bold text-[#006d43]">
                  {userProfile.isEV ? 'Electric Vehicle (EV)' : 'Petrol/Diesel'}
                </div>
                <div className="text-[11px] text-[#737685]">
                  IU: {userProfile.iuNumber}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2.5 p-3 bg-[#f9f9fc] rounded-2xl border border-[#e2e2e5] text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="font-bold text-[#1a1c1e] block mb-1">Plate</label>
                <input
                  type="text"
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  className="w-full p-2 bg-white rounded-xl border border-[#c3c6d6]/40 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-[#1a1c1e] block mb-1">Model</label>
                <input
                  type="text"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="w-full p-2 bg-white rounded-xl border border-[#c3c6d6]/40"
                />
              </div>

              <div>
                <label className="font-bold text-[#1a1c1e] block mb-1">IU Number</label>
                <input
                  type="text"
                  value={iuNumber}
                  onChange={(e) => setIuNumber(e.target.value)}
                  className="w-full p-2 bg-white rounded-xl border border-[#c3c6d6]/40 font-mono"
                />
              </div>

              <div className="flex items-center gap-2 pt-4">
                <input
                  type="checkbox"
                  id="ev-toggle"
                  checked={isEV}
                  onChange={(e) => setIsEV(e.target.checked)}
                  className="w-4 h-4 accent-[#003d9b] rounded"
                />
                <label htmlFor="ev-toggle" className="font-bold text-xs text-[#1a1c1e]">
                  Electric Vehicle (EV)
                </label>
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <button
                onClick={handleSaveVehicle}
                className="px-3.5 py-1.5 bg-[#003d9b] text-white text-xs font-bold rounded-xl shadow hover:bg-[#0052cc]"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Smart Parking Preferences */}
      <div className="bg-white p-4 rounded-3xl border border-[#e2e2e5] shadow-sm space-y-2">
        <div className="flex items-center gap-1.5 border-b border-[#eeeef0] pb-2">
          <span className="material-symbols-outlined text-[#003d9b] text-[20px]">
            settings
          </span>
          <h2 className="text-sm font-bold text-[#1a1c1e]">Preferences</h2>
        </div>

        <div className="divide-y divide-[#eeeef0] text-xs">
          <div className="py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#007147] text-[18px]">
                credit_card
              </span>
              <div>
                <div className="font-semibold text-[#1a1c1e]">Auto-Pay Gantry</div>
                <div className="text-[10px] text-[#737685]">Cardless IU settlement</div>
              </div>
            </div>
            <input
              type="checkbox"
              checked={userProfile.autoPayEnabled}
              onChange={(e) =>
                onUpdateProfile({ ...userProfile, autoPayEnabled: e.target.checked })
              }
              className="w-4 h-4 accent-[#003d9b] rounded cursor-pointer"
            />
          </div>

          <div className="py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#874d00] text-[18px]">
                notifications
              </span>
              <div>
                <div className="font-semibold text-[#1a1c1e]">Vacancy Alerts</div>
                <div className="text-[10px] text-[#737685]">Notify when favorites &lt; 15 lots</div>
              </div>
            </div>
            <input
              type="checkbox"
              defaultChecked={true}
              className="w-4 h-4 accent-[#003d9b] rounded cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
