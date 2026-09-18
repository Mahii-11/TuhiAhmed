import React from 'react';
import { Utensils, IceCream, Home, GraduationCap, ArrowRight } from 'lucide-react';
import { Venture } from '../types';

interface VentureCardProps {
  venture: Venture;
  onClick: () => void;
}

export const VentureCard: React.FC<VentureCardProps> = ({ venture, onClick }) => {
  const renderIcon = () => {
    switch (venture.iconName) {
      case 'utensils':
        return <Utensils className="w-5 h-5 text-white" />;
      case 'ice-cream':
        return <IceCream className="w-5 h-5 text-white" />;
      case 'home':
        return <Home className="w-5 h-5 text-white" />;
      case 'graduation-cap':
        return <GraduationCap className="w-5 h-5 text-white" />;
      default:
        return <Utensils className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-stone-200/80 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700/40"
    >
      {/* Card Image */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-stone-100">
        <img
          src={venture.image}
          alt={venture.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
      </div>

      {/* Card Info Bar */}
      <div className="p-4 sm:p-5 flex items-center space-x-3.5 bg-white">
        {/* Circle Icon Badge */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundColor: venture.iconBgColor }}
        >
          {renderIcon()}
        </div>

        {/* Text Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] sm:text-base font-semibold text-stone-900 tracking-tight truncate group-hover:text-[#8e472a] transition-colors">
              {venture.title}
            </h3>
            <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-[#8e472a] group-hover:translate-x-1 transition-all shrink-0 ml-1" />
          </div>
          <p className="text-xs text-stone-500 font-normal mt-0.5 truncate">
            {venture.tagline}
          </p>
        </div>
      </div>
    </div>
  );
};
