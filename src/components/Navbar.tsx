import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Phone, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  orderCount: number;
  onOpenOrderDrawer: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  orderCount,
  onOpenOrderDrawer,
  onOpenQuiz,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#0d222e]/95 backdrop-blur-md border-b border-[#1b4865] transition-colors shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark with Rotating Glowing Logo */}
        <a 
          href="#topo" 
          onClick={() => soundFx.play('click')}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#F4B41A] to-[#E5A912] shadow-lg logo-glow">
            <img
              src={BRAND_ASSETS.logoUrl}
              alt="Divina Gula Francês Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full animate-spin-slow"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xl sm:text-2xl font-bold tracking-wider font-brand text-[#FFFFFF] group-hover:text-[#F4B41A] transition-colors">
              DIVINA GULA
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#A3B8C7] font-sans font-medium">
              Praia do Francês · Alagoas
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Clean text links with hover effect) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#CAD8E2]">
          <a 
            href="#promocoes" 
            onClick={() => soundFx.play('click')}
            className="hover:text-[#F4B41A] transition-colors"
          >
            {t.navPromo}
          </a>
          <a 
            href="#cardapio" 
            onClick={() => soundFx.play('click')}
            className="hover:text-[#F4B41A] transition-colors"
          >
            {t.navMenu}
          </a>
          <button 
            onClick={() => {
              soundFx.play('click');
              onOpenQuiz();
            }}
            className="flex items-center gap-1.5 text-[#F4B41A] hover:text-[#F7C438] font-semibold cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.navQuiz}</span>
          </button>
          <a 
            href="#instagram" 
            onClick={() => soundFx.play('click')}
            className="hover:text-[#F4B41A] transition-colors"
          >
            {t.navInstagram}
          </a>
          <a 
            href="#avaliacoes" 
            onClick={() => soundFx.play('click')}
            className="hover:text-[#F4B41A] transition-colors"
          >
            {t.navReviews}
          </a>
          <a 
            href="#contato" 
            onClick={() => soundFx.play('click')}
            className="hover:text-[#F4B41A] transition-colors"
          >
            {t.navDirections}
          </a>
        </nav>

        {/* Zone 3: Actions (Language Flag Selector + Comanda + iFood + WhatsApp) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Selector with visible Flag */}
          <LanguageSelector variant="compact" />

          {/* Comanda Button */}
          <button
            onClick={() => {
              soundFx.play('click');
              onOpenOrderDrawer();
            }}
            className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#123b53] hover:bg-[#184561] text-[#F8FAFC] border border-[#225779] transition-all text-xs font-semibold cursor-pointer shadow-sm active:scale-95"
            aria-label="Abrir comanda do pedido"
          >
            <ShoppingBag className="w-4 h-4 text-[#F4B41A]" />
            <span className="hidden xl:inline">{t.navComanda}</span>
            {orderCount > 0 && (
              <span className="inline-flex items-center justify-center bg-[#F4B41A] text-[#0C202D] font-bold text-xs h-5 min-w-5 px-1 rounded-full font-mono tabular-nums">
                {orderCount}
              </span>
            )}
          </button>

          {/* iFood Red-Blur Button in Top-Right */}
          <a
            href={RESTAURANT_INFO.ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.play('click')}
            className="btn-red-blur inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-black text-white rounded-xl shadow-lg whitespace-nowrap cursor-pointer active:scale-95"
            title="Pedir no iFood"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>iFood</span>
          </a>

          {/* WhatsApp Button in Top-Right */}
          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.play('click')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer active:scale-95 border border-emerald-300/40"
            title="Fale conosco no WhatsApp"
          >
            <Phone className="w-3.5 h-3.5 fill-white" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => {
              soundFx.play('pop');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-xl text-[#EDE6DD] bg-[#123b53] border border-[#225779] active:scale-95"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d222e] border-b border-[#1b4865] px-6 py-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#1b4865]/60">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A3B8C7]">
              {t.navSelectLanguage}
            </span>
            <LanguageSelector variant="full" />
          </div>

          <div className="flex flex-col space-y-3 text-sm font-medium text-[#CAD8E2]">
            <a
              href="#promocoes"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-[#F4B41A]"
            >
              🌟 {t.navPromo}
            </a>
            <a
              href="#cardapio"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-[#F4B41A]"
            >
              📖 {t.navMenu}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
                onOpenQuiz();
              }}
              className="py-1 text-left flex items-center gap-2 text-[#F4B41A] font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.navQuiz} ({t.heroQuizBtn})</span>
            </button>
            <a
              href="#instagram"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-[#F4B41A]"
            >
              📸 {t.navInstagram} {RESTAURANT_INFO.instagram}
            </a>
            <a
              href="#avaliacoes"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-[#F4B41A]"
            >
              ⭐ {t.navReviews}
            </a>
            <a
              href="#contato"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-[#F4B41A]"
            >
              📍 {t.navDirections}
            </a>
          </div>

          <div className="pt-3 border-t border-[#1b4865] flex flex-col gap-2">
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 font-bold text-xs text-[#0C202D] bg-[#F4B41A] rounded-lg"
            >
              {t.navReserveWhatsApp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
