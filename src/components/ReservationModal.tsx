import React, { useState, useEffect } from 'react';
import { Carpark, UserProfile } from '../types';

interface ReservationModalProps {
  carpark: Carpark;
  userProfile: UserProfile;
  onClose: () => void;
  onConfirmPark: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  carpark,
  userProfile,
  onClose,
  onConfirmPark,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const timeFormatted = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-5 border border-[#e2e2e5] text-center flex flex-col items-center animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-12 rounded-full bg-[#75f8b3]/30 text-[#007147] flex items-center justify-center mb-3">
          <span className="material-symbols-outlined text-2xl">verified</span>
        </div>

        <h2 className="text-lg font-bold text-[#1a1c1e]">15-Minute Spot Hold Active</h2>
        <p className="text-xs text-[#737685] mt-1">
          A parking slot has been reserved for your vehicle at <strong>{carpark.name}</strong>.
        </p>

        {/* Countdown Pill */}
        <div className="my-4 px-4 py-2 bg-[#ffdcbf] text-[#663800] rounded-2xl font-mono text-xl font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">timer</span>
          <span>{timeFormatted}</span>
        </div>

        {/* QR Code Pass Simulation */}
        <div className="p-4 bg-[#f3f3f6] rounded-2xl border border-[#e2e2e5] w-full flex flex-col items-center">
          <div className="w-36 h-36 bg-white p-2 rounded-xl shadow-inner flex items-center justify-center border border-[#e2e2e5]">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#1a1c1e]">
              <rect x="0" y="0" width="30" height="30" fill="currentColor" />
              <rect x="5" y="5" width="20" height="20" fill="white" />
              <rect x="10" y="10" width="10" height="10" fill="currentColor" />
              
              <rect x="70" y="0" width="30" height="30" fill="currentColor" />
              <rect x="75" y="5" width="20" height="20" fill="white" />
              <rect x="80" y="10" width="10" height="10" fill="currentColor" />
              
              <rect x="0" y="70" width="30" height="30" fill="currentColor" />
              <rect x="5" y="75" width="20" height="20" fill="white" />
              <rect x="10" y="80" width="10" height="10" fill="currentColor" />
              
              <rect x="40" y="10" width="10" height="20" fill="currentColor" />
              <rect x="40" y="40" width="20" height="20" fill="currentColor" />
              <rect x="70" y="40" width="20" height="10" fill="currentColor" />
              <rect x="40" y="70" width="10" height="20" fill="currentColor" />
              <rect x="60" y="70" width="30" height="10" fill="currentColor" />
              <rect x="70" y="85" width="20" height="15" fill="currentColor" />
            </svg>
          </div>
          <div className="text-[11px] font-mono text-[#434654] font-bold mt-2">
            PASS-SG-{carpark.id.toUpperCase()}-8829
          </div>
          <div className="text-[10px] text-[#737685] mt-0.5">
            Plate: {userProfile.vehiclePlate} • IU: {userProfile.iuNumber}
          </div>
        </div>

        <div className="mt-4 w-full flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-[#eeeef0] text-[#1a1c1e] text-xs font-bold rounded-xl hover:bg-[#e2e2e5] transition-colors cursor-pointer"
          >
            Cancel Hold
          </button>
          <button
            onClick={() => {
              onConfirmPark();
              onClose();
            }}
            className="flex-1 py-2.5 bg-[#003d9b] text-white text-xs font-bold rounded-xl hover:bg-[#0052cc] transition-colors shadow-sm cursor-pointer"
          >
            Arrived & Park
          </button>
        </div>
      </div>
    </div>
  );
};
