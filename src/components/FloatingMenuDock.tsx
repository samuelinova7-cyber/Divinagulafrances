import React, { useState, useEffect } from 'react';
import { ChefHat, Utensils, Sparkles, ChevronDown, Flame, Fish, ArrowDown } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface FloatingMenuDockProps {
  onOpenExecutive: () => void;
}

export const FloatingMenuDock: React.FC<FloatingMenuDockProps> = ({
  onOpenExecutive,
}) => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [isPastMenu, setIsPastMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      // Show after user starts scrolling down (e.g. past top 180px)
      if (currentScroll > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if user has reached or passed #cardapio
      const menuEl = document.getElementById('cardapio');
      if (menuEl) {
        const rect = menuEl.getBoundingClientRect();
        // If the top of menu has reached near the top of viewport (e.g. within 120px)
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
          <div className="pointer-events-auto bg-[#0a1c26]/95 backdrop-blur-lg border-2 border-[#F4B41A]/50 rounded-2xl shadow-2xl p-2 sm:p-2.5 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
            
            {/* Direct Executive Menu Launcher */}
            <button
              onClick={() => {
                soundFx.play('click');
                onOpenExecutive();
              }}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-[#F4B41A] to-[#FF8A00] text-[#0C202D] font-extrabold text-xs shadow-md whitespace-nowrap hover:scale-105 active:scale-95 transition-all cursor-pointer ring-2 ring-[#F4B41A]/40 shrink-0"
            >
              <ChefHat className="w-4 h-4 stroke-[2.5]" />
              <span>🍽️ Cardápio Executivo</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-[#0C202D] text-[#F4B41A] text-[10px] font-mono font-bold">
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
                className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#123b53] hover:bg-[#184561] text-[#CAD8E2] hover:text-white border border-[#1b4865] font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>🥩</span>
                <span className="hidden xs:inline">Executivo (3 Etapas)</span>
                <span className="xs:hidden">Executivo</span>
              </button>

              <button
                onClick={() => scrollToSection('cardapio')}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#123b53] hover:bg-[#184561] text-[#CAD8E2] hover:text-white border border-[#1b4865] font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Utensils className="w-3.5 h-3.5 text-[#F4B41A]" />
                <span>Cardápio Completo</span>
                <ArrowDown className="w-3 h-3 text-[#F4B41A] animate-bounce" />
              </button>

              <button
                onClick={() => scrollToSection('promocoes')}
                className="hidden md:flex px-2.5 py-1.5 rounded-lg bg-[#123b53] hover:bg-[#184561] text-[#CAD8E2] hover:text-white border border-[#1b4865] font-semibold whitespace-nowrap transition-colors items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F4B41A]" />
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
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#123b53] to-[#0c202d] hover:from-[#F4B41A] hover:to-[#FF8A00] text-[#F8FAFC] hover:text-[#0C202D] font-extrabold text-xs shadow-2xl border-2 border-[#F4B41A] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Abrir Cardápio Executivo"
          >
            <div className="w-7 h-7 rounded-full bg-[#F4B41A] group-hover:bg-[#0C202D] text-[#0C202D] group-hover:text-[#F4B41A] flex items-center justify-center transition-colors">
              <ChefHat className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <span className="block leading-none font-bold">🍽️ Cardápio Executivo</span>
              <span className="text-[10px] text-[#F4B41A] group-hover:text-[#0C202D] font-mono leading-none">
                A partir de R$ 36,90
              </span>
            </div>
          </button>
        </div>
      )}

    </aside>
  );
};
