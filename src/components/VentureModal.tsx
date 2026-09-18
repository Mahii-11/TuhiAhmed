import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Venture } from '../types';

interface VentureModalProps {
  venture: Venture | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const VentureModal: React.FC<VentureModalProps> = ({
  venture,
  onClose,
  onContactClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (venture) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [venture, onClose]);

  if (!venture) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#faf8f5] text-stone-900 rounded-2xl shadow-2xl border border-stone-200 z-10 flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={venture.image}
            alt={venture.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ backgroundColor: venture.accentColor }}
            >
              {venture.category}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              {venture.title}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-1 italic font-editorial">
              "{venture.tagline}"
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata chips */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-600 border-b border-stone-200/80 pb-4">
            {venture.location && (
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span>{venture.location}</span>
              </div>
            )}
            {venture.founded && (
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-stone-400" />
                <span>Est. {venture.founded}</span>
              </div>
            )}
            <div className="flex items-center space-x-1.5 text-[#8e472a] font-medium">
              <ExternalLink className="w-4 h-4" />
              <span>Active Venture</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">
              Vision & Overview
            </h3>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {venture.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-3">
              Impact & Metrics
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {venture.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-white p-3.5 rounded-xl border border-stone-200/90 text-center shadow-2xs"
                >
                  <div className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    {m.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-3">
              Core Pillars & Operations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {venture.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-2.5 bg-white p-3 rounded-lg border border-stone-200/80 text-xs sm:text-sm text-stone-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#8e472a] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-stone-500 hover:text-stone-800 text-sm font-medium"
            >
              Back to Overview
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#8e472a] hover:bg-[#7a3c22] text-white text-sm font-medium rounded-lg shadow-sm transition-colors"
            >
              <span>Inquire About {venture.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
