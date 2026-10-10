import React, { useState, useRef } from 'react';
import { Instagram, Heart, Volume2, VolumeX, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';

export const InstagramSection: React.FC = () => {
  // Track mute state per video index
  const [mutedStates, setMutedStates] = useState<{ [key: string]: boolean }>({
    'ig-v1': true,
    'ig-v2': true,
    'ig-v3': true,
    'ig-v4': true,
    'ig-v5': true,
    'ig-v6': true,
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleMute = (id: string) => {
    soundFx.play('click');
    setMutedStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scroll = (direction: 'left' | 'right') => {
    soundFx.play('click');
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="instagram" className="py-16 border-b border-[#1b4865] bg-[#0c202d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#1b4865] gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#F4B41A] text-xs font-bold uppercase tracking-wider">
              <Instagram className="w-4 h-4" />
              <span>Conecte-se Conosco</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-[#FFFFFF]">
              Instagram {RESTAURANT_INFO.instagram}
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#A3B8C7]">
              <span className="font-bold text-[#F4B41A] font-mono tabular-nums">
                {RESTAURANT_INFO.followers} seguidores
              </span>
              <span className="text-[#326280]" aria-hidden="true">·</span>
              <span>Filial de {RESTAURANT_INFO.parentBrand}</span>
              <span className="text-[#326280]" aria-hidden="true">·</span>
              <span>{RESTAURANT_INFO.locationRef}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1">
              <button 
                onClick={() => scroll('left')}
                className="p-2.5 rounded-xl bg-[#123b53] hover:bg-[#1a4f70] text-white border border-[#225779] transition-colors cursor-pointer"
                aria-label="Rolar para esquerda"
              >
                <ChevronLeft className="w-5 h-5 text-[#F4B41A]" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-2.5 rounded-xl bg-[#123b53] hover:bg-[#1a4f70] text-white border border-[#225779] transition-colors cursor-pointer"
                aria-label="Rolar para direita"
              >
                <ChevronRight className="w-5 h-5 text-[#F4B41A]" />
              </button>
            </div>

            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.play('click')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-bold text-xs sm:text-sm hover:opacity-95 transition-opacity shadow-md whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir no Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Side-by-Side Videos Carousel (Horizontal Swipe / Scroll) */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#1b4865] scrollbar-track-[#0d222e]"
          style={{ scrollbarWidth: 'thin' }}
        >
          {BRAND_ASSETS.instagramVideos.map((item) => {
            const isMuted = mutedStates[item.id] ?? true;
            return (
              <div
                key={item.id}
                className="min-w-[280px] sm:min-w-[320px] max-w-[320px] snap-center rounded-2xl overflow-hidden bg-[#123b53] border-2 border-[#1b4865] hover:border-[#F4B41A] transition-all flex flex-col shadow-lg shrink-0 group"
              >
                {/* Video Player Container */}
                <div className="relative aspect-[9/16] w-full bg-[#0d222e] overflow-hidden">
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Top Overlay Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white border border-white/10">
                      <Instagram className="w-3 h-3 text-[#F4B41A]" />
                      <span>{RESTAURANT_INFO.instagram}</span>
                    </span>

                    {/* Audio Toggle Button */}
                    <button
                      onClick={() => toggleMute(item.id)}
                      className="pointer-events-auto p-2 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
                      aria-label={isMuted ? "Ativar som" : "Desativar som"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-red-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Video Gradient Overlay with Likes */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
                    <span className="flex items-center gap-1.5 text-xs font-bold">
                      <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                      <span className="font-mono">{item.likes} curtidas</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#F4B41A] font-semibold bg-black/40 px-2 py-0.5 rounded">
                      {isMuted ? 'Mudo 🔇' : 'Com Som 🔊'}
                    </span>
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-[#0d222e]">
                  <p className="text-xs text-[#D7E3EC] line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                  <a
                    href={RESTAURANT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.play('click')}
                    className="mt-3 pt-2 border-t border-[#1b4865] flex items-center justify-between text-[11px] text-[#F4B41A] font-semibold hover:underline"
                  >
                    <span>Assistir no Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
