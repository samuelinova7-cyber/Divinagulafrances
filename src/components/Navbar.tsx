import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Phone, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';

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
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#CAD8E2]">
          <a 
            href="#promocoes" 
            onClick={() => soundFx.play('click')}
            className="hover:text-[#F4B41A] transition-colors"
          >
            Promoções
          </a>
          <a 
            href="#cardapio" 
            onClick={() => soundFx.play('click')}
            className="hover:text-[#F4B41A] transition-colors"
          >
            Cardápio Completo
          </a>
          <button 
            onClick={() => {
              soundFx.play('click');
              onOpenQuiz();
            }}
            className="flex items-center gap-1.5 text-[#F4B41A] hover:text-[#F7C438] font-semibold cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quiz do Sabor</span>
          </button>
          <a 
            href="#instagram" 
            onClick={() => soundFx.play('click')}
            className="hover:text-[#F4B41A] transition-colors"
          >
            Instagram
          </a>
          <a 
            href="#avaliacoes" 
            onClick={() => soundFx.play('click')}
            className="hover:text-[#F4B41A] transition-colors"
          >
            Avaliações (5.0 ⭐)
          </a>
          <a 
            href="#contato" 
            onClick={() => soundFx.play('click')}
            className="hover:text-[#F4B41A] transition-colors"
          >
            Como Chegar
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.play('click');
              onOpenOrderDrawer();
            }}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#123b53] hover:bg-[#184561] text-[#F8FAFC] border border-[#225779] transition-all text-xs sm:text-sm font-medium cursor-pointer"
            aria-label="Abrir comanda do pedido"
          >
            <ShoppingBag className="w-4 h-4 text-[#F4B41A]" />
            <span className="hidden sm:inline">Comanda / Mesa</span>
            {orderCount > 0 && (
              <span className="inline-flex items-center justify-center bg-[#F4B41A] text-[#0C202D] font-bold text-xs h-5 min-w-5 px-1.5 rounded-full font-mono tabular-nums">
                {orderCount}
              </span>
            )}
          </button>

          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.play('click')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#0C202D] bg-gradient-to-r from-[#F4B41A] to-[#E5A912] hover:from-[#F7C438] hover:to-[#F4B41A] rounded-lg shadow-sm transition-all whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Reservas</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#EDE6DD] bg-[#123b53] border border-[#225779]"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d222e] border-b border-[#1b4865] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-[#CAD8E2]">
            <a
              href="#promocoes"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-[#F4B41A]"
            >
              🌟 Promoções & Destaques
            </a>
            <a
              href="#cardapio"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-[#F4B41A]"
            >
              📖 Cardápio Completo
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
              <span>Quiz do Sabor (Descubra seu Prato)</span>
            </button>
            <a
              href="#instagram"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-[#F4B41A]"
            >
              📸 Instagram @divinagulafrances
            </a>
            <a
              href="#avaliacoes"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-[#F4B41A]"
            >
              ⭐ Avaliações no Google (5.0)
            </a>
            <a
              href="#contato"
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.play('click');
              }}
              className="py-1 hover:text-[#F4B41A]"
            >
              📍 Localização & Horários
            </a>
          </div>

          <div className="pt-3 border-t border-[#1b4865] flex flex-col gap-2">
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 font-bold text-xs text-[#0C202D] bg-[#F4B41A] rounded-lg"
            >
              Fazer Reserva via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
