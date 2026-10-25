import React, { useState } from 'react';
import { Sparkles, Phone, Menu as MenuIcon, X, ChefHat } from 'lucide-react';
import { RESTAURANT_INFO, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenExecutive: () => void;
}

const TICKER_ITEMS = [
  "DIVINA GULA - PRAIA DO FRANCÊS / ALAGOAS",
  "O MELHOR DA CULINÁRIA REGIONAL E FRUTOS DO MAR",
  "PEÇA TAMBÉM PELO IFOOD",
  "AMBIENTE ACONCHEGANTE E SABOR INCOMPARÁVEL",
  "FAÇA SUA RESERVA PELO WHATSAPP",
  "OPEN TODOS OS DIAS",
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuiz,
  onOpenExecutive,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors">
      {/* Top Navbar Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Zone 1: Brand Wordmark with Circular Rotating Glowing Logo */}
        <a 
          href="#topo" 
          onClick={() => soundFx.play('click')}
          className="group flex items-center gap-2 sm:gap-3 focus:outline-none min-w-0 shrink"
          style={{ maxWidth: 'calc(100% - 150px)' }}
        >
          {/* Circular logo container with 12s smooth continuous rotation */}
          <div 
            className="relative shadow-xs shrink-0 w-9 h-9 sm:w-11 sm:h-11 border-2 border-amber-500"
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
              aspectRatio: '1 / 1',
              animation: 'spin 12s linear infinite',
            }}
          >
            <img
              src={BRAND_ASSETS.logoUrl}
              alt="Divina Gula Francês Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              style={{
                borderRadius: '50%',
                aspectRatio: '1 / 1',
              }}
            />
          </div>

          {/* Typography container with ellipsis and responsive clamp */}
          <div className="flex flex-col items-start min-w-0 overflow-hidden leading-tight">
            <span 
              className="font-bold tracking-tight sm:tracking-wider font-brand text-slate-950 group-hover:text-amber-600 transition-colors overflow-hidden whitespace-nowrap block"
              style={{ 
                fontSize: 'clamp(0.78rem, 3.2vw, 1.45rem)',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              DIVINA GULA
            </span>
            <span 
              className="uppercase text-slate-500 font-sans font-semibold tracking-wide sm:tracking-[0.2em] overflow-hidden whitespace-nowrap block"
              style={{ 
                fontSize: 'clamp(0.48rem, 1.8vw, 0.65rem)',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              PRAIA DO FRANCÊS • ALAGOAS
            </span>
          </div>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
          <a 
            href="#promocoes" 
            onClick={() => soundFx.play('click')}
            className="hover:text-amber-600 transition-colors"
          >
            {t.navPromo}
          </a>
          <a 
            href="#cardapio" 
            onClick={() => soundFx.play('click')}
            className="hover:text-amber-600 transition-colors"
          >
            {t.navMenu}
          </a>
          <button 
            onClick={() => {
              soundFx.play('click');
              onOpenExecutive();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 font-bold cursor-pointer transition-all active:scale-95 text-xs shadow-xs"
          >
            <ChefHat className="w-3.5 h-3.5" />
            <span>Cardápio Executivo</span>
          </button>
          <button 
            onClick={() => {
              soundFx.play('click');
              onOpenQuiz();
            }}
            className="flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-semibold cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.navQuiz}</span>
          </button>
          <a 
            href="#instagram" 
            onClick={() => soundFx.play('click')}
            className="hover:text-amber-600 transition-colors"
          >
            {t.navInstagram}
          </a>
          <a 
            href="#avaliacoes" 
            onClick={() => soundFx.play('click')}
            className="hover:text-amber-600 transition-colors"
          >
            {t.navReviews}
          </a>
          <a 
            href="#contato" 
            onClick={() => soundFx.play('click')}
            className="hover:text-amber-600 transition-colors"
          >
            {t.navDirections}
          </a>
        </nav>

        {/* Zone 3: Actions (Language Flag + iFood + WhatsApp + Mobile Toggle) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Language Selector */}
          <LanguageSelector variant="compact" />

          {/* iFood Red-Blur Button (Strictly Red as required) */}
          <a
            href={RESTAURANT_INFO.ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.play('click')}
            className="btn-red-blur inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-black text-white rounded-lg sm:rounded-xl shadow-md whitespace-nowrap cursor-pointer active:scale-95 shrink-0"
            title="Pedir no iFood"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-ping" />
            <span>iFood</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.play('click')}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg sm:rounded-xl shadow-xs transition-all whitespace-nowrap cursor-pointer active:scale-95 border border-emerald-500 shrink-0"
            title="Fale conosco no WhatsApp"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => {
              soundFx.play('pop');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-slate-700 bg-slate-100 border border-slate-200 active:scale-95 shrink-0"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <MenuIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Marquee Ticker Bar Pinned Directly Under Header */}
      <div className="bg-slate-900 border-t border-slate-800 py-1.5 sm:py-2 overflow-hidden shadow-inner select-none relative">
        <div className="animate-marquee-continuous flex items-center">
          {[0, 1].map((copyIndex) => (
            <div 
              key={copyIndex} 
              className="flex items-center shrink-0 pr-2 text-[11px] sm:text-xs font-medium text-slate-200 tracking-wide"
              aria-hidden={copyIndex > 0 ? 'true' : undefined}
            >
              {[0, 1].map((subSet) => (
                <React.Fragment key={subSet}>
                  {TICKER_ITEMS.map((item, idx) => (
                    <span key={idx} className="inline-flex items-center">
                      <span className="text-amber-400 font-bold mx-2 sm:mx-3 text-xs sm:text-sm select-none drop-shadow-xs">
                        ⭐
                      </span>
                      <span className={`whitespace-nowrap ${
                        item.includes('IFOOD') 
                          ? 'text-[#ff4d5a] font-black' 
                          : item.includes('WHATSAPP')
                          ? 'text-[#25D366] font-bold'
                          : item.includes('DIVINA GULA')
                          ? 'text-white font-bold tracking-wider'
                          : item.includes('OPEN')
                          ? 'text-amber-400 font-bold'
                          : 'text-slate-200'
                      }`}>
                        {item}
                      </span>
                    </span>
                  ))}
                  <span className="text-amber-400 font-bold mx-2 sm:mx-3 text-xs sm:text-sm select-none drop-shadow-xs">
                    ⭐
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {t.navSelectLanguage}
            </span>
            <LanguageSelector variant="full" />
          </div>

          <div className="flex flex-col space-y-3 text-sm font-semibold text-slate-700">
            <a
              href="#promocoes"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-amber-600"
            >
              🌟 {t.navPromo}
            </a>
            <a
              href="#cardapio"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-amber-600"
            >
              📖 {t.navMenu}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
                onOpenExecutive();
              }}
              className="py-2 px-3 rounded-xl bg-amber-50 text-left flex items-center gap-2 text-amber-900 font-bold border border-amber-300 text-xs shadow-xs cursor-pointer"
            >
              <ChefHat className="w-4 h-4 text-amber-700" />
              <span>🍽️ Cardápio Executivo</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
                onOpenQuiz();
              }}
              className="py-1 text-left flex items-center gap-2 text-amber-700 font-semibold"
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
              className="py-1 hover:text-amber-600"
            >
              📸 {t.navInstagram} {RESTAURANT_INFO.instagram}
            </a>
            <a
              href="#avaliacoes"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-amber-600"
            >
              ⭐ {t.navReviews}
            </a>
            <a
              href="#contato"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-amber-600"
            >
              📍 {t.navDirections}
            </a>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
            >
              {t.navReserveWhatsApp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
