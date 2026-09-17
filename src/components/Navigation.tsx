import React from 'react';

interface NavigationProps {
  activeTab: 'map' | 'directory' | 'favorites' | 'profile';
  onTabChange: (tab: 'map' | 'directory' | 'favorites' | 'profile') => void;
  favoritesCount: number;
  hasActiveSession: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  favoritesCount,
  hasActiveSession,
}) => {
  const tabs = [
    {
      id: 'map' as const,
      icon: 'map',
      activeIcon: 'explore',
      label: 'Map',
      badge: null,
    },
    {
      id: 'directory' as const,
      icon: 'format_list_bulleted',
      activeIcon: 'list_alt',
      label: 'Directory',
      badge: null,
    },
    {
      id: 'favorites' as const,
      icon: 'favorite_border',
      activeIcon: 'favorite',
      label: 'Saved',
      badge: favoritesCount > 0 ? favoritesCount : null,
    },
    {
      id: 'profile' as const,
      icon: 'account_circle',
      activeIcon: 'account_circle',
      label: 'Profile',
      badge: hasActiveSession ? '●' : null,
    },
  ];

  return (
    <nav
      id="bottom-navigation-bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#f9f9fc]/95 backdrop-blur-xl border-t border-[#eeeef0] shadow-[0_-1px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`nav-tab-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all cursor-pointer ${
                isActive
                  ? 'text-[#003d9b] bg-[#dae2ff]/50 scale-105'
                  : 'text-[#737685] hover:text-[#1a1c1e] hover:bg-[#eeeef0]/50'
              }`}
              title={tab.label}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`material-symbols-outlined text-[24px] transition-transform ${
                    isActive ? 'font-bold scale-110' : ''
                  }`}
                >
                  {isActive ? tab.activeIcon : tab.icon}
                </span>

                {/* Notification / Count Badge */}
                {tab.badge && (
                  <span
                    className={`absolute -top-1.5 -right-2 text-[10px] font-extrabold flex items-center justify-center shadow-sm ${
                      tab.id === 'profile'
                        ? 'text-[#006d43] w-2.5 h-2.5 bg-[#75f8b3] rounded-full animate-ping'
                        : 'bg-[#ba1a1a] text-white w-4 h-4 rounded-full border border-white'
                    }`}
                  >
                    {tab.id !== 'profile' ? tab.badge : ''}
                  </span>
                )}
              </div>

              <span
                className={`text-[10px] font-bold tracking-tight uppercase mt-0.5 ${
                  isActive ? 'text-[#003d9b]' : 'text-[#737685]'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
