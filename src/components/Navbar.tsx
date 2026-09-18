import React from 'react';

interface NavbarProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onOpenPortfolio: () => void;
  onOpenInsights: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabClick,
  onOpenContact,
  onOpenAbout,
  onOpenPortfolio,
  onOpenInsights,
}) => {
  const handleNav = (tab: string) => {
    onTabClick(tab);
    if (tab === 'About') onOpenAbout();
    else if (tab === 'Contact') onOpenContact();
    else if (tab === 'Portfolio' || tab === 'Businesses') onOpenPortfolio();
    else if (tab === 'Insights') onOpenInsights();
  };

  const navItems = ['Home', 'Businesses', 'About', 'Portfolio', 'Insights', 'Contact'];

  return (
    <header className="bg-[#111215] text-[#ede8df] border-b border-[#23252a] select-none sticky top-0 z-40">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => onTabClick('Home')}
          className="group text-left flex items-center space-x-2 focus:outline-none"
        >
          <span className="font-serif tracking-[0.18em] text-xl sm:text-2xl font-semibold text-[#f4efe6] group-hover:text-amber-200 transition-colors">
            TUHIN AHMED
          </span>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className={`relative py-1.5 transition-colors focus:outline-none ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#9c9a96] hover:text-[#f4efe6]'
                }`}
              >
                {item}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side tagline from screenshot */}
        <div className="hidden lg:flex items-center space-x-3 text-xs tracking-wider text-[#a09c95]">
          <span className="w-8 h-[1px] bg-[#36383e]" />
          <span className="font-light tracking-[0.12em]">
            Ideas <span className="text-amber-600/80">•</span> Businesses <span className="text-amber-600/80">•</span> Better Tomorrows
          </span>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenContact}
            className="text-xs bg-[#8e472a] hover:bg-[#7d3d23] text-white px-3 py-1.5 rounded-md font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};
