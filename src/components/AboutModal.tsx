import React, { useEffect } from 'react';
import { X, Code2, Palette, Sparkles, Building, ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#faf8f5] text-stone-900 rounded-2xl shadow-2xl border border-stone-200 z-10 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-stone-200 text-stone-700 hover:bg-stone-300 transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-stone-200 pb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-800/30 shadow-md shrink-0">
            <img
              src="/tuhin_ahmed_hero.jpg"
              alt={PROFILE.name}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-[#8e472a] font-semibold">
              {PROFILE.eyebrow}
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 mt-0.5">
              {PROFILE.name}
            </h2>
            <p className="text-stone-600 font-medium">{PROFILE.title}</p>
            <p className="text-xs text-stone-500 mt-1 italic font-editorial">
              "{PROFILE.quote.line1} {PROFILE.quote.line2}"
            </p>
          </div>
        </div>

        {/* Bio Content */}
        <div className="py-6 space-y-6 text-sm sm:text-base text-stone-700 leading-relaxed">
          <p>
            Hello, I’m <strong>Tuhin Ahmed</strong>. As a web designer, full-stack developer, and business builder, I bridge the gap between aesthetic digital craftsmanship and real-world commercial enterprises.
          </p>
          <p>
            My work spans from creating high-performance web applications with React, TypeScript, and modern design systems, to founding and operating tangible brick-and-mortar ventures—including culinary hospitality, artisan confectionery, boutique property developments, and student communities.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-white p-4 rounded-xl border border-stone-200 text-center">
              <Code2 className="w-6 h-6 text-[#8e472a] mx-auto mb-2" />
              <div className="font-semibold text-stone-900 text-sm">Engineering</div>
              <div className="text-xs text-stone-500 mt-1">React, Vite, Node, TypeScript, Modern UI/UX</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 text-center">
              <Palette className="w-6 h-6 text-amber-700 mx-auto mb-2" />
              <div className="font-semibold text-stone-900 text-sm">Design Systems</div>
              <div className="text-xs text-stone-500 mt-1">Editorial typography, spatial grids, micro-interactions</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 text-center">
              <Building className="w-6 h-6 text-emerald-800 mx-auto mb-2" />
              <div className="font-semibold text-stone-900 text-sm">Venture Builder</div>
              <div className="text-xs text-stone-500 mt-1">Hospitality, Real Estate, Community Housing</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">Available for select advisory & dev partnerships</span>
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="inline-flex items-center space-x-2 px-5 py-2 bg-[#8e472a] hover:bg-[#7a3c22] text-white text-sm font-medium rounded-lg shadow-xs transition-colors"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
