import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ShoppingBag, Volume2, VolumeX, Flame, Clock, Bike, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

export const IFoodSection: React.FC = () => {
  const { t } = useLanguage();
  // Toggle alternating media: 'video' | 'image'
  const [activeMedia, setActiveMedia] = useState<'video' | 'image'>('video');
  const [isMuted, setIsMuted] = useState(true);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Alternating media every 6 seconds if autoCycling is active
  useEffect(() => {
    if (!isAutoCycling) return;

    const interval = setInterval(() => {
      setActiveMedia((prev) => (prev === 'video' ? 'image' : 'video'));
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const toggleSound = () => {
    soundFx.play('click');
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const selectMedia = (media: 'video' | 'image') => {
    soundFx.play('pop');
    setActiveMedia(media);
    setIsAutoCycling(false); // user took manual control
  };

  return (
    <section id="ifood" className="py-16 border-b border-[#1b4865] bg-gradient-to-b from-[#0c202d] via-[#102a3a] to-[#0c202d] relative overflow-hidden">
      {/* Background ambient red/gold aura */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#F4B41A]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold tracking-wider uppercase">
            <Bike className="w-4 h-4 animate-bounce" />
            <span>{t.ifoodBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-white">
            {t.ifoodTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#CAD8E2] leading-relaxed">
            {t.ifoodDesc}
          </p>
        </div>

        {/* Featured Card with Alternating Media Block */}
        <div className="rounded-3xl bg-[#123b53]/85 backdrop-blur-xl border-2 border-[#EA1D2C]/40 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Media Block (Alternates Video & Photo in the same block) */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] bg-black overflow-hidden flex items-center justify-center group">
            
            {/* 1. Video Layer */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeMedia === 'video' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700"
              >
                <source src={BRAND_ASSETS.ifoodVideo} type="video/mp4" />
              </video>
            </div>

            {/* 2. Image Layer */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeMedia === 'image' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={BRAND_ASSETS.ifoodImage}
                alt="Divina Gula no iFood - Pratos e Bebidas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Gradient Scrim for controls visibility */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* Interactive media toggle controls at top right */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
              {activeMedia === 'video' && (
                <button
                  onClick={toggleSound}
                  className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
                  title={isMuted ? t.soundOn : t.soundOff}
                  aria-label={isMuted ? t.soundOn : t.soundOff}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
              )}
            </div>

            {/* Alternating media indicator switcher at bottom */}
            <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                <button
                  onClick={() => selectMedia('video')}
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    activeMedia === 'video'
                      ? 'bg-[#EA1D2C] text-white shadow-md'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  ▶ Vídeo
                </button>
                <button
                  onClick={() => selectMedia('image')}
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    activeMedia === 'image'
                      ? 'bg-[#EA1D2C] text-white shadow-md'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  📸 Foto
                </button>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-white/80 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live iFood
              </span>
            </div>

          </div>

          {/* Details & Action Block */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#EA1D2C] text-white flex items-center justify-center font-black text-sm shadow-md">
                    iF
                  </div>
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-red-400 block">
                      iFood
                    </span>
                    <strong className="text-white text-base">Divina Gula Francês</strong>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-black/30 px-2.5 py-1 rounded-lg border border-white/10 text-xs text-[#F4B41A] font-bold">
                  ★ 4.9 Super Restaurante
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <h3 className="text-2xl font-bold font-serif-heading text-white">
                  {t.ifoodFeature3Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#CAD8E2] leading-relaxed">
                  {t.ifoodFeature3Desc}
                </p>
              </div>

              {/* Delivery perks list */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#E2EDF4]">
                  <Clock className="w-4 h-4 text-[#F4B41A] shrink-0" />
                  <span>{t.ifoodFeature1Title}: <strong className="text-white">{t.ifoodAvgTime}</strong></span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#E2EDF4]">
                  <Flame className="w-4 h-4 text-[#EA1D2C] shrink-0" />
                  <span>{t.ifoodFeature2Desc}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#E2EDF4]">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.ifoodSchedule}</span>
                </div>
              </div>
            </div>

            {/* Red Blur Action Button */}
            <div className="pt-4 space-y-3 border-t border-[#1b4865]">
              <a
                href={RESTAURANT_INFO.ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.play('click')}
                className="btn-red-blur w-full py-4 px-6 rounded-2xl text-white font-black text-base flex items-center justify-center gap-3 cursor-pointer group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.ifoodBtnMain}</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              <p className="text-[11px] text-center text-[#A3B8C7]">
                {t.ifoodSchedule}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
