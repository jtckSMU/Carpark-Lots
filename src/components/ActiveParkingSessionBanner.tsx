import React, { useState, useEffect } from 'react';
import { ActiveParkingSession } from '../types';

interface ActiveParkingSessionBannerProps {
  session: ActiveParkingSession;
  onEndSession: () => void;
  onOpenDetails: () => void;
}

export const ActiveParkingSessionBanner: React.FC<ActiveParkingSessionBannerProps> = ({
  session,
  onEndSession,
  onOpenDetails,
}) => {
  const [elapsedMinutes, setElapsedMinutes] = useState(1);

  useEffect(() => {
    const update = () => {
      const diff = Math.floor((Date.now() - session.startTime) / 1000);
      setElapsedMinutes(Math.max(1, Math.floor(diff / 60)));
    };
    update();
    const interval = setInterval(update, 5000);
    return () => clearInterval(interval);
  }, [session]);

  const estimatedFee = Math.max(1.2, (elapsedMinutes / 60) * 1.5).toFixed(2);

  return (
    <div className="fixed bottom-20 inset-x-3 max-w-lg mx-auto z-40 bg-[#003d9b] text-white p-3 rounded-2xl shadow-2xl border border-blue-400/40 flex items-center justify-between animate-slideUp">
      <div
        className="flex items-center gap-2.5 cursor-pointer flex-1 mr-2"
        onClick={onOpenDetails}
      >
        <div className="w-9 h-9 rounded-xl bg-[#0052cc] flex items-center justify-center text-[#78fbb6] shrink-0">
          <span className="material-symbols-outlined text-[20px] animate-pulse">
            directions_car
          </span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#78fbb6] animate-ping"></span>
            <h4 className="font-bold text-xs uppercase tracking-wider text-blue-100 truncate">
              {session.carparkName}
            </h4>
          </div>
          <div className="text-[11px] font-semibold text-white mt-0.5 flex items-center gap-1.5">
            <span>{session.floor} • {session.bayNumber}</span>
            <span>•</span>
            <span className="text-[#78fbb6] font-bold">${estimatedFee} ({elapsedMinutes}m)</span>
          </div>
        </div>
      </div>

      <button
        onClick={onEndSession}
        className="px-3 py-1.5 bg-[#ba1a1a] hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer flex items-center gap-1 shrink-0"
      >
        <span className="material-symbols-outlined text-[15px]">output</span>
        <span>Exit</span>
      </button>
    </div>
  );
};
