import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VentureCard } from './components/VentureCard';
import { VentureModal } from './components/VentureModal';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { InsightsModal } from './components/InsightsModal';
import { BrowserChrome } from './components/BrowserChrome';
import { VENTURES, PROFILE } from './data/portfolioData';
import { Venture } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [showBrowserFrame, setShowBrowserFrame] = useState(true);

  const handleExplorePortfolio = () => {
    const section = document.getElementById('ventures-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    setShowContact(true);
  };

  const handleOpenAbout = () => {
    setShowAbout(true);
  };

  const handleOpenInsights = () => {
    setShowInsights(true);
  };

  return (
    <div className="min-h-screen bg-[#0f1012] text-stone-100 flex flex-col selection:bg-amber-900/30 selection:text-amber-100 font-sans">
      {/* Authentic Browser Frame (like in the user's reference screenshot) */}
      <BrowserChrome
        showChrome={showBrowserFrame}
        onToggleChrome={() => setShowBrowserFrame((prev) => !prev)}
      />

      {/* Main Website Container */}
      <div className="flex-1 flex flex-col w-full">
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          onTabClick={(tab) => setActiveTab(tab)}
          onOpenContact={handleOpenContact}
          onOpenAbout={handleOpenAbout}
          onOpenPortfolio={handleExplorePortfolio}
          onOpenInsights={handleOpenInsights}
        />

        {/* Hero Section */}
        <main className="flex-1">
          <HeroSection
            onExplorePortfolio={handleExplorePortfolio}
            onGetInTouch={handleOpenContact}
          />

          {/* Bottom Business Ventures Grid (The 4 Cards from the screenshot) */}
          <section
            id="ventures-section"
            className="w-full bg-[#f4efe6] pt-4 pb-12 px-4 sm:px-6 lg:px-10 border-t border-stone-300/40"
          >
            <div className="max-w-[1540px] mx-auto">
              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {VENTURES.map((venture) => (
                  <VentureCard
                    key={venture.id}
                    venture={venture}
                    onClick={() => setSelectedVenture(venture)}
                  />
                ))}
              </div>

              {/* Decorative Divider & Footer Tagline from screenshot */}
              <div className="mt-10 mb-2 flex items-center justify-center space-x-3 text-stone-500 text-xs sm:text-sm font-medium tracking-[0.24em] select-none uppercase">
                <span className="w-12 sm:w-20 h-[1px] bg-stone-400/80" />
                <span>{PROFILE.footerTagline}</span>
                <span className="w-12 sm:w-20 h-[1px] bg-stone-400/80" />
              </div>
            </div>
          </section>
        </main>

        {/* Minimal Dark Website Footer */}
        <footer className="bg-[#111215] border-t border-[#23252a] text-[#8e8b83] text-xs py-6 px-4 sm:px-8">
          <div className="max-w-[1540px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif tracking-widest text-stone-300 font-semibold">
                TUHIN AHMED
              </span>
              <span>© {new Date().getFullYear()} All Rights Reserved.</span>
            </div>
            <div className="flex items-center space-x-6 text-stone-400">
              <button
                onClick={handleOpenAbout}
                className="hover:text-stone-200 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={handleExplorePortfolio}
                className="hover:text-stone-200 transition-colors cursor-pointer"
              >
                Businesses
              </button>
              <button
                onClick={handleOpenInsights}
                className="hover:text-stone-200 transition-colors cursor-pointer"
              >
                Insights
              </button>
              <button
                onClick={handleOpenContact}
                className="hover:text-stone-200 transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Interactive Modals */}
      <VentureModal
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
        onContactClick={handleOpenContact}
      />

      <AboutModal
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
        onContactClick={handleOpenContact}
      />

      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />

      <InsightsModal
        isOpen={showInsights}
        onClose={() => setShowInsights(false)}
      />
    </div>
  );
}
