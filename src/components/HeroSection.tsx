import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
  onGetInTouch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePortfolio,
  onGetInTouch,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4efe6]">
      {/* Background container with split tone: warm ivory on left, office ambience on right */}
      <div className="relative min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col lg:flex-row items-stretch">
        
        {/* LEFT COLUMN: Editorial Typography & Call to Action */}
        <div className="w-full lg:w-[46%] xl:w-[44%] z-20 flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-18 py-12 lg:py-16 bg-[#f4efe6] lg:bg-gradient-to-r lg:from-[#f4efe6] lg:via-[#f4efe6] lg:to-transparent">
          
          {/* Eyebrow */}
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-stone-600 uppercase mb-5">
            <span className="w-8 sm:w-12 h-[1px] bg-stone-400" />
            <span>{PROFILE.eyebrow}</span>
            <span className="w-8 sm:w-12 h-[1px] bg-stone-400" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#16171a] leading-none mb-3">
            {PROFILE.name}
          </h1>

          {/* Subtitle */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#24262b] font-normal tracking-tight mb-2">
            {PROFILE.title}
          </h2>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-stone-600 font-normal tracking-wide mb-8">
            {PROFILE.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* Explore Portfolio button */}
            <button
              onClick={onExplorePortfolio}
              className="group inline-flex items-center space-x-2.5 px-6 py-3.5 bg-[#8e472a] hover:bg-[#7a3c22] text-white text-sm sm:text-base font-medium rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Get in Touch button */}
            <button
              onClick={onGetInTouch}
              className="inline-flex items-center px-6 py-3.5 bg-[#fbf9f5] hover:bg-white text-stone-900 border border-[#d2ccc0] text-sm sm:text-base font-medium rounded-lg shadow-xs hover:border-stone-400 transition-all duration-200 cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Quote */}
          <div className="border-l-2 border-stone-300 pl-4 py-1">
            <p className="font-editorial italic text-base sm:text-lg text-stone-700 leading-snug">
              {PROFILE.quote.line1}
            </p>
            <p className="font-editorial italic text-base sm:text-lg text-stone-700 leading-snug">
              {PROFILE.quote.line2}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Executive Office, Portrait & Typographic Elements */}
        <div className="w-full lg:w-[54%] xl:w-[56%] relative min-h-[440px] sm:min-h-[500px] lg:min-h-auto bg-[#141518] overflow-hidden flex items-center justify-center">
          
          {/* Main Hero Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/tuhin_ahmed_hero.jpg"
              alt="Tuhin Ahmed - Web Designer & Developer in Executive Studio"
              className="w-full h-full object-cover object-center lg:object-[center_right] filter brightness-[0.98] contrast-[1.02]"
              referrerPolicy="no-referrer"
            />
            {/* Left blending gradient into cream background on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#f4efe6] via-[#f4efe6]/60 to-transparent pointer-events-none" />
            {/* Subtle top and bottom atmospheric vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Decorative Wall Art 1: "A BRIGHTER TOMORROW TOGETHER" */}
          <div className="absolute top-10 sm:top-14 left-6 sm:left-14 hidden md:flex flex-col items-center justify-center bg-[#1d1e22]/85 border border-[#3c3e44]/60 p-3 sm:p-4 rounded shadow-lg backdrop-blur-xs text-center z-10 select-none">
            <div className="text-[9px] sm:text-[10px] tracking-[0.2em] leading-tight text-[#dcd7cc] font-light">
              <div>A</div>
              <div className="font-medium text-[#ede9e0]">BRIGHTER</div>
              <div className="font-medium text-[#ede9e0]">TOMORROW</div>
              <div>TOGETHER</div>
            </div>
            <div className="w-6 h-[1px] bg-amber-600/70 mt-2" />
          </div>

          {/* Decorative Wall Art 2: "BUILD DESIGN INVEST GROW" */}
          <div className="absolute top-36 sm:top-44 left-6 sm:left-14 hidden md:flex flex-col items-center justify-center bg-[#1d1e22]/85 border border-[#3c3e44]/60 px-4 py-3 rounded shadow-lg backdrop-blur-xs text-center z-10 select-none">
            <div className="text-[9px] sm:text-[10px] tracking-[0.2em] space-y-0.5 text-[#dcd7cc] font-light">
              <div>BUILD</div>
              <div>DESIGN</div>
              <div>INVEST</div>
              <div className="font-medium text-[#ede9e0]">GROW</div>
            </div>
          </div>

          {/* Ceramic Mug Graphic On Desk (Left of subject) */}
          <div className="absolute bottom-6 sm:bottom-12 left-16 sm:left-28 hidden lg:flex flex-col items-center justify-center bg-[#111214] border border-[#2b2c31] w-14 h-16 sm:w-16 sm:h-18 rounded-b-md rounded-t-xs shadow-2xl z-10 select-none">
            <div className="text-[8px] tracking-[0.1em] text-center font-serif text-amber-200/90 leading-tight">
              <div>Ideas</div>
              <div>Build</div>
              <div>Better</div>
              <div className="text-[7px]">Tomorrows</div>
            </div>
            {/* Mug handle */}
            <div className="absolute -right-2.5 top-3 w-3 h-7 border-2 border-[#2b2c31] rounded-r-md" />
          </div>

          {/* Right Wall Spaced Typography: PEOPLE / PLACES / GOOD FOOD / BRIGHTER / TOMORROWS */}
          <div className="absolute top-10 sm:top-14 right-6 sm:right-10 hidden sm:flex flex-col items-end space-y-2 text-right select-none z-10">
            {PROFILE.ambientTags.map((tag, idx) => (
              <span
                key={tag}
                className={`text-[10px] sm:text-xs tracking-[0.26em] uppercase font-light ${
                  idx === 3 || idx === 4
                    ? 'text-stone-300 font-medium'
                    : 'text-stone-400/90'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Right Floating Badge Pills: BUSINESS / TECHNOLOGY / COMMUNITY / OPPORTUNITY */}
          <div className="absolute bottom-4 sm:bottom-8 right-6 sm:right-10 flex flex-col items-end space-y-1 z-10 select-none">
            {PROFILE.bottomTags.map((badge) => (
              <span
                key={badge}
                className="bg-[#121316]/90 border border-[#2c2d33] text-[9px] sm:text-[10px] tracking-[0.18em] text-[#d4cfc5] px-3 py-1 rounded shadow-xs"
              >
                {badge}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
