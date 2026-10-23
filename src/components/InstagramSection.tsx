import React, { useState, useRef } from 'react';
import { Instagram, Heart, Volume2, VolumeX, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

export const InstagramSection: React.FC = () => {
  const { t } = useLanguage();
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
              <span>{t.igConnect}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-[#FFFFFF]">
              Instagram {RESTAURANT_INFO.instagram}
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#A3B8C7]">
              <span className="font-bold text-[#F4B41A] font-mono tabular-nums">
                {RESTAURANT_INFO.followers} {t.igFollowers}
              </span>
              <span className="text-[#326280]" aria-hidden="true">·</span>
              <span>{t.igBranchOf} {RESTAURANT_INFO.parentBrand}</span>
              <span className="text-[#326280]" aria-hidden="true">·</span>
              <span>{RESTAURANT_INFO.locationRef}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1">
              <button 
                onClick={() => scroll('left')}
                className="p-2.5 rounded-xl bg-[#123b53] hover:bg-[#1a4f70] text-white border border-[#225779] transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-[#F4B41A]" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-2.5 rounded-xl bg-[#123b53] hover:bg-[#1a4f70] text-white border border-[#225779] transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-[#F4B41A]" />
              </button>
            </div>

            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.play('click')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-bold text-sm transition-all shadow-lg whitespace-nowrap cursor-pointer active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>{t.igFollowBtn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Video Reels Horizontal Scroller */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-5 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#1b4865] scrollbar-track-[#0d222e]"
          style={{ scrollbarWidth: 'thin' }}
        >
          {BRAND_ASSETS.instagramVideos.map((video) => {
            const isMuted = mutedStates[video.id] ?? true;
            return (
              <div 
                key={video.id} 
                className="min-w-[260px] sm:min-w-[280px] max-w-[280px] snap-start rounded-2xl overflow-hidden border-2 border-[#1b4865] bg-[#123b53] shadow-xl relative group shrink-0 flex flex-col justify-between"
              >
                {/* 9:16 Video Container */}
                <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>

                  {/* Gradient Scrim for readable overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c202d] via-transparent to-[#0c202d]/40 pointer-events-none" />

                  {/* Audio Toggle Button in Reel */}
                  <button
                    onClick={() => toggleMute(video.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer z-20"
                    title={isMuted ? t.soundOn : t.soundOff}
                    aria-label={isMuted ? t.soundOn : t.soundOff}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>

                  {/* Floating Instagram handle indicator */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-bold text-white border border-white/10">
                    <Instagram className="w-3 h-3 text-[#F4B41A]" />
                    <span>@divinagulafrances</span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 space-y-2 z-10 pointer-events-none">
                    <p className="text-xs text-[#FFFFFF] line-clamp-3 leading-relaxed font-medium drop-shadow-md">
                      {video.caption}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-[#CAD8E2] pt-1">
                      <div className="flex items-center gap-1 font-semibold text-[#F4B41A]">
                        <Heart className="w-3.5 h-3.5 fill-[#F4B41A]" />
                        <span>{video.likes} curtidas</span>
                      </div>
                      <span className="text-[10px] text-[#A3B8C7]">Reels</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link below Reel */}
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.play('click')}
                  className="py-2.5 px-3 bg-[#0d222e] hover:bg-[#153e58] text-[#F4B41A] hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border-t border-[#1b4865]"
                >
                  <span>Ver no Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
