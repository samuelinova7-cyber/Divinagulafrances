import React from 'react';
import { Star, MapPin, Clock, Sparkles, ArrowDown, Utensils } from 'lucide-react';
import { RESTAURANT_INFO, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface HeroBannerProps {
  onOpenQuiz: () => void;
  onExploreMenu: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenQuiz, onExploreMenu }) => {
  const { t } = useLanguage();

  return (
    <section id="topo" className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-[#1b4865]">
      {/* Background Video with Ambient Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src={BRAND_ASSETS.heroVideoUrl} type="video/mp4" />
        </video>
        {/* Measured Scrim for WCAG AA Contrast with Deep Petrol Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c202d] via-[#0c202d]/80 to-[#0c202d]/55" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0c202d]/40 to-[#0c202d]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-6">
        
        {/* Unboxed Editorial Trust Markers (No pills) */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-[#E2EDF4] font-medium tracking-wide">
          <span className="flex items-center gap-1 text-[#F4B41A]">
            <Star className="w-4 h-4 fill-[#F4B41A]" />
            <span className="font-bold text-white">5.0</span>
            <span className="text-[#A3B8C7]">({RESTAURANT_INFO.reviewCount} {t.heroGoogleReviews})</span>
          </span>
          <span className="text-[#326280]" aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#F4B41A]" />
            <span>{t.heroLocation}</span>
          </span>
          <span className="text-[#326280]" aria-hidden="true">·</span>
          <span className="text-[#A3B8C7]">{t.heroOutdoor}</span>
        </div>

        {/* Primary Title with Typography Restraint */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFFFF] font-brand leading-none drop-shadow-md">
            DIVINA GULA
          </h1>
          <p className="text-lg sm:text-2xl text-[#FFE082] font-serif italic max-w-2xl mx-auto leading-relaxed">
            "{t.heroTagline}"
          </p>
        </div>

        {/* Story Lead Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D7E3EC] leading-relaxed font-sans">
          {t.heroStory}
        </p>

        {/* Happy Hour High-Impact Notice with Petrol Card */}
        <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#123b53]/90 border border-[#F4B41A]/30 text-xs sm:text-sm text-[#F8FAFC] max-w-xl shadow-lg">
          <Clock className="w-4 h-4 text-[#F4B41A] shrink-0" />
          <span className="text-left">
            <strong className="text-[#F4B41A]">{t.heroHappyHourTitle}</strong> {t.heroHappyHourDesc}
          </span>
        </div>

        {/* Action Controls */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto">
          <button
            onClick={() => {
              soundFx.play('click');
              onExploreMenu();
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F4B41A] to-[#E5A912] hover:from-[#F7C438] hover:to-[#F4B41A] text-[#0C202D] font-black text-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Utensils className="w-4 h-4" />
            <span>{t.heroViewMenu}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          {/* Red blur button for iFood in Hero */}
          <a
            href={RESTAURANT_INFO.ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.play('click')}
            className="btn-red-blur w-full sm:w-auto px-6 py-3.5 rounded-xl text-white font-black text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <span>{t.heroOrderIfood}</span>
          </a>

          <button
            onClick={() => {
              soundFx.play('click');
              onOpenQuiz();
            }}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#123b53]/90 hover:bg-[#184561] text-[#FFFFFF] border border-[#225779] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#F4B41A]" />
            <span>{t.heroQuizBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
