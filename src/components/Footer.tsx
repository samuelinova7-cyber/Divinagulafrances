import React from 'react';
import { MapPin, Phone, Instagram, Clock, Star, Navigation } from 'lucide-react';
import { RESTAURANT_INFO, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contato" className="bg-[#091924] text-[#CAD8E2] border-t border-[#1b4865] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#1b4865]">
          
          {/* Brand & Concept with Spinning Glowing Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#F4B41A] to-[#E5A912] shadow-lg logo-glow">
                <img
                  src={BRAND_ASSETS.logoUrl}
                  alt="Divina Gula Francês Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full animate-spin-slow"
                />
              </div>
              <div>
                <span className="text-xl font-bold font-brand text-[#FFFFFF] tracking-wider block">
                  DIVINA GULA
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#F4B41A] font-sans font-bold">
                  {t.heroLocation}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#CAD8E2] leading-relaxed">
              {t.footerDesc}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#F4B41A] font-semibold">
              <Star className="w-4 h-4 fill-[#F4B41A]" />
              <span>5.0 ⭐ ({RESTAURANT_INFO.reviewCount} {t.heroGoogleReviews})</span>
            </div>
          </div>

          {/* Location & Directions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FFFFFF] font-sans">
              {t.locationTitle}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#CAD8E2] leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4B41A] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <p className="text-[11px] text-[#A3B8C7] pl-6">
                📍 {RESTAURANT_INFO.locationRef}
              </p>
            </div>
            
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.play('click')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#123b53] hover:bg-[#184561] text-[#F4B41A] text-xs font-bold border border-[#1b4865] transition-colors mt-2 shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{t.locationOpenMaps}</span>
            </a>
          </div>

          {/* Hours & Happy Hour */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FFFFFF] font-sans">
              {t.footerOpeningHoursTitle}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex justify-between border-b border-[#123b53] pb-1">
                <span className="text-[#A3B8C7]">Ter - Qui</span>
                <span className="text-[#FFFFFF] font-medium">12h às 23h</span>
              </li>
              <li className="flex justify-between border-b border-[#123b53] pb-1">
                <span className="text-[#A3B8C7]">Sex - Sáb</span>
                <span className="text-[#FFFFFF] font-medium">12h às 00h</span>
              </li>
              <li className="flex justify-between border-b border-[#123b53] pb-1">
                <span className="text-[#A3B8C7]">Domingo</span>
                <span className="text-[#FFFFFF] font-medium">12h às 22h</span>
              </li>
              <li className="flex justify-between border-b border-[#123b53] pb-1">
                <span className="text-[#A3B8C7]">Segunda</span>
                <span className="text-[#FFFFFF] font-medium">Fechado</span>
              </li>
            </ul>
            <div className="p-2.5 rounded-lg bg-[#123b53] border border-[#1b4865] text-[11px] text-[#F4B41A]">
              <div className="flex items-center gap-1 font-bold mb-0.5">
                <Clock className="w-3 h-3" />
                <span>{t.heroHappyHourTitle}</span>
              </div>
              <span className="text-[#FFFFFF]">{t.heroHappyHourDesc}</span>
            </div>
          </div>

          {/* Social & Language */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FFFFFF] font-sans">
              {t.footerContactTitle}
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.play('click')}
                className="flex items-center gap-2 text-[#CAD8E2] hover:text-[#F4B41A] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#F4B41A]" />
                <span>{RESTAURANT_INFO.instagram}</span>
              </a>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.play('click')}
                className="flex items-center gap-2 text-[#CAD8E2] hover:text-[#25D366] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {t.navReserveWhatsApp}</span>
              </a>
              <a
                href={RESTAURANT_INFO.ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.play('click')}
                className="btn-red-blur inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-white font-bold text-xs shadow-md mt-1"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>{t.ifoodBadge}</span>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-[#A3B8C7] block mb-1.5 font-bold uppercase tracking-wider">
                {t.navSelectLanguage}:
              </span>
              <LanguageSelector variant="full" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A96A8] gap-4">
          <p>© {new Date().getFullYear()} Divina Gula Francês. {t.footerRights}</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Praia do Francês, Alagoas</span>
            <span>·</span>
            <span>{RESTAURANT_INFO.parentBrand}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
