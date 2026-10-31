import React from 'react';
import { Utensils } from 'lucide-react';
import { BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { IFoodButton } from './IFoodButton';

interface HeroBannerProps {
  onOpenQuiz?: () => void;
  onExploreMenu: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ 
  onExploreMenu,
}) => {
  const { t } = useLanguage();

  return (
    <section id="topo" className="relative flex flex-col border-b border-slate-200 bg-white">
      
      {/* 1. Clean Hero Video Animation (No letters, texts, or titles covering the video) */}
      <div className="relative w-full overflow-hidden bg-black flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto max-h-[85vh] object-cover object-center"
        >
          <source src={BRAND_ASSETS.heroVideoUrl} type="video/mp4" />
        </video>
      </div>

      {/* 2. Featured Shortcuts Bar (Placed directly below the hero video, clean white theme) */}
      <div className="bg-slate-50/70 py-4 sm:py-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
            
            {/* Shortcut 1: Cardápio */}
            <button
              onClick={() => {
                soundFx.play('click');
                onExploreMenu();
              }}
              className="p-3 sm:p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all flex flex-col items-center text-center gap-1.5 shadow-xs group cursor-pointer active:scale-95"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Utensils className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {t.navMenu}
              </span>
              <span className="text-[10px] text-slate-500 line-clamp-1 font-medium">
                Entradas, Pratos & Drinks
              </span>
            </button>

            {/* Shortcut 2: iFood */}
            <IFoodButton variant="hero" />

            {/* Shortcut 3: Seleção de Idioma */}
            <div className="flex flex-col">
              <LanguageSelector variant="card" className="w-full h-full" />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
