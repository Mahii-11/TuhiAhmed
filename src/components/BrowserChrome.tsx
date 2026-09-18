import React from 'react';
import { Lock, ArrowLeft, ArrowRight, RotateCw, Plus, X, Star } from 'lucide-react';

interface BrowserChromeProps {
  url?: string;
  title?: string;
  showChrome: boolean;
  onToggleChrome: () => void;
}

export const BrowserChrome: React.FC<BrowserChromeProps> = ({
  url = 'https://tuhinahmed.com',
  title = 'Tuhin Ahmed | Building busine',
  showChrome,
  onToggleChrome,
}) => {
  if (!showChrome) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={onToggleChrome}
          title="Toggle authentic browser mockup frame"
          className="bg-[#1e2025] hover:bg-[#2b2d33] text-stone-300 text-xs px-3 py-1.5 rounded-full border border-stone-700/70 shadow-lg transition-all flex items-center space-x-1.5 cursor-pointer select-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Show Browser Frame</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#202124] text-[#e8eaed] text-xs select-none border-b border-[#3c4043]">
      {/* Top Tabs Bar */}
      <div className="flex items-center justify-between px-3 pt-2">
        {/* Left Window Control Buttons */}
        <div className="flex items-center space-x-2 mr-3">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
        </div>

        {/* Tab */}
        <div className="flex-1 flex items-center max-w-sm">
          <div className="flex items-center space-x-2 bg-[#292a2d] px-3 py-1.5 rounded-t-lg border-t border-x border-[#3c4043] text-[#e8eaed] text-[11px] font-normal w-56 truncate">
            {/* Favicon icon */}
            <span className="w-3.5 h-3.5 rounded bg-amber-600/90 text-[8px] font-serif font-bold text-white flex items-center justify-center shrink-0">
              T
            </span>
            <span className="truncate flex-1">{title}</span>
            <X className="w-3 h-3 text-stone-400 hover:text-white shrink-0 cursor-pointer" />
          </div>
          <button className="p-1 hover:bg-[#35363a] rounded ml-1 text-stone-400">
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Toggle */}
        <div className="flex items-center space-x-2 text-[11px] text-stone-400">
          <button
            onClick={onToggleChrome}
            className="hover:text-white px-2 py-0.5 rounded hover:bg-[#35363a] transition-colors"
          >
            Hide Frame
          </button>
        </div>
      </div>

      {/* Address Bar Row */}
      <div className="flex items-center space-x-2 px-3 py-1.5 bg-[#292a2d] border-t border-[#3c4043]">
        <div className="flex items-center space-x-1 text-stone-400">
          <button className="p-1 hover:text-white rounded hover:bg-[#35363a]">
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button className="p-1 hover:text-white rounded hover:bg-[#35363a]">
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button className="p-1 hover:text-white rounded hover:bg-[#35363a]">
            <RotateCw className="w-3 h-3" />
          </button>
        </div>

        {/* Omnibox / URL Field */}
        <div className="flex-1 max-w-2xl mx-auto flex items-center justify-between bg-[#202124] px-3 py-1 rounded-full border border-[#3c4043] text-stone-300">
          <div className="flex items-center space-x-2 truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="text-[11px] text-stone-300 font-mono tracking-tight">
              {url}
            </span>
          </div>
          <Star className="w-3 h-3 text-stone-400 hover:text-amber-400 cursor-pointer shrink-0 ml-2" />
        </div>

        <div className="w-16 hidden sm:block" />
      </div>
    </div>
  );
};
