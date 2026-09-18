import React, { useEffect } from 'react';
import { X, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { INSIGHTS } from '../data/portfolioData';

interface InsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic?: (topic: string) => void;
}

export const InsightsModal: React.FC<InsightsModalProps> = ({ isOpen, onClose }) => {
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

        <div className="border-b border-stone-200 pb-4 mb-6">
          <span className="text-xs uppercase tracking-widest text-[#8e472a] font-semibold">
            Ideas & Perspectives
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
            Insights & Field Notes
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Reflections on architecture, technology, hospitality, and sustainable enterprise building.
          </p>
        </div>

        <div className="space-y-4">
          {INSIGHTS.map((insight) => (
            <article
              key={insight.id}
              className="bg-white p-5 rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span className="font-medium text-[#8e472a] uppercase tracking-wider">
                  {insight.category}
                </span>
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{insight.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{insight.readTime}</span>
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 hover:text-[#8e472a] transition-colors cursor-pointer">
                {insight.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                {insight.excerpt}
              </p>

              <button className="text-xs font-semibold text-[#8e472a] flex items-center space-x-1 hover:underline">
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
