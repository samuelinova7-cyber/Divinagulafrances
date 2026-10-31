import React, { useState, useEffect } from 'react';
import { Utensils, ArrowDown } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface FloatingMenuDockProps {
  onSelectCategory?: (id: string) => void;
}

export const FloatingMenuDock: React.FC<FloatingMenuDockProps> = ({
  onSelectCategory,
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

  // If not visible or already arrived at the menu, do not show
  if (!isVisible || isPastMenu) return null;

  return (
    <aside aria-label="Navegação rápida do cardápio" className="fixed z-35 transition-all duration-300">
      {/* Floating Bar accompanying descent down to the menu */}
      <div className="fixed top-20 inset-x-0 mx-auto max-w-4xl px-4 animate-slideDown pointer-events-none">
        <div className="pointer-events-auto bg-white/95 backdrop-blur-lg border border-slate-200/90 rounded-2xl shadow-xl p-2 sm:p-2.5 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
          
          {/* Main Cardápio Completo Button */}
          <button
            onClick={() => scrollToSection('cardapio')}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-xs shadow-md whitespace-nowrap hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <Utensils className="w-4 h-4 stroke-[2.5]" />
            <span>📖 Cardápio Completo</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>

          {/* Quick Category Jump Buttons */}
          <div className="flex items-center gap-1.5 shrink-0 text-xs">
            <button
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory('entradinhas');
                } else {
                  scrollToSection('cat-entradinhas');
                }
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>🍤</span>
              <span>Entradinhas</span>
            </button>

            <button
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory('petiscos');
                } else {
                  scrollToSection('cat-petiscos');
                }
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>🥘</span>
              <span>Petiscos</span>
            </button>

            <button
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory('frutos-do-mar');
                } else {
                  scrollToSection('cat-frutos-do-mar');
                }
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 font-semibold whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>🐟</span>
              <span>Frutos do Mar</span>
            </button>

            <button
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory('grelhados-brasa');
                } else {
                  scrollToSection('cat-grelhados-brasa');
                }
              }}
              className="hidden sm:flex px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold whitespace-nowrap transition-colors items-center gap-1 cursor-pointer"
            >
              <span>🥩</span>
              <span>Grelhados</span>
            </button>

            <button
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory('bebidas-nao-alcoolicas');
                } else {
                  scrollToSection('cat-bebidas-nao-alcoolicas');
                }
              }}
              className="hidden md:flex px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold whitespace-nowrap transition-colors items-center gap-1 cursor-pointer"
            >
              <span>🍹</span>
              <span>Bebidas</span>
            </button>
          </div>

        </div>
      </div>
    </aside>
  );
};
