import React, { useState, useEffect } from 'react';
import { ChefHat, Utensils, Sparkles, ArrowDown } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface FloatingMenuDockProps {
  onOpenExecutive: () => void;
}

export const FloatingMenuDock: React.FC<FloatingMenuDockProps> = ({
  onOpenExecutive,
}) => {
  const [isPastMenu, setIsPastMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Show after user starts scrolling down (past top 180px)
      if (currentScroll > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if user has reached or passed #cardapio
      const menuEl = document.getElementById('cardapio');
      if (menuEl) {
        const rect = menuEl.getBoundingClientRect();
        setIsPastMenu(rect.top <= 140);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    soundFx.play('click');
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Navegação rápida do cardápio" className="fixed z-35 transition-all duration-300">
      
      {/* 1. WHILE SCROLLING DOWN UNTIL REACHING THE MENU: Persistent Floating Bar accompanying the descent */}
      {!isPastMenu ? (
        <div className="fixed top-20 inset-x-0 mx-auto max-w-4xl px-4 animate-slideDown pointer-events-none">
          <div className="pointer-events-auto bg-white/95 backdrop-blur-lg border border-slate-200/90 rounded-2xl shadow-xl p-2 sm:p-2.5 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
            
            {/* Direct Executive Menu Launcher */}
            <button
              onClick={() => {
                soundFx.play('click');
                onOpenExecutive();
              }}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-xs shadow-md whitespace-nowrap hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <ChefHat className="w-4 h-4 stroke-[2.5]" />
              <span>🍽️ Cardápio Executivo</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white text-amber-700 text-[10px] font-mono font-bold">
                R$ 36,90
              </span>
            </button>

            {/* Quick jump buttons down to menu sections */}
            <div className="flex items-center gap-1.5 shrink-0 text-xs">
              
              <button
                onClick={() => {
                  soundFx.play('click');
                  onOpenExecutive();
                }}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>🥩</span>
                <span className="hidden xs:inline">Executivo (3 Etapas)</span>
                <span className="xs:hidden">Executivo</span>
              </button>

              <button
                onClick={() => scrollToSection('cardapio')}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Utensils className="w-3.5 h-3.5 text-cyan-600" />
                <span>Cardápio Completo</span>
                <ArrowDown className="w-3 h-3 text-cyan-600 animate-bounce" />
              </button>

              <button
                onClick={() => scrollToSection('promocoes')}
                className="hidden md:flex px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold whitespace-nowrap transition-colors items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Promoções</span>
              </button>

            </div>

          </div>
        </div>
      ) : (
        /* 2. ONCE IN THE MENU: Floating Executive Button floating on bottom-left */
        <div className="fixed bottom-6 left-6 z-40 animate-fadeIn">
          <button
            onClick={() => {
              soundFx.play('click');
              onOpenExecutive();
            }}
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-white hover:bg-amber-500 text-slate-800 hover:text-white font-extrabold text-xs shadow-xl border-2 border-amber-400 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Abrir Cardápio Executivo"
          >
            <div className="w-7 h-7 rounded-full bg-amber-500 group-hover:bg-white text-white group-hover:text-amber-600 flex items-center justify-center transition-colors">
              <ChefHat className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <span className="block leading-none font-bold">🍽️ Cardápio Executivo</span>
              <span className="text-[10px] text-amber-700 group-hover:text-white font-mono leading-none">
                A partir de R$ 36,90
              </span>
            </div>
          </button>
        </div>
      )}

    </aside>
  );
};
