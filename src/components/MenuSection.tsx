import React, { useRef, useState } from 'react';
import { Play, Pause, Plus, Check, Volume2, VolumeX, Users } from 'lucide-react';
import { MenuCategory, MenuItem } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface MenuSectionProps {
  category: MenuCategory;
  onAddItem: (item: MenuItem) => void;
  isSearchActive?: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  category,
  onAddItem,
  isSearchActive = false,
}) => {
  const { t, getCategoryLocalized } = useLanguage();
  const localizedCat = getCategoryLocalized(category);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const togglePlay = () => {
    soundFx.play('click');
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    soundFx.play('click');
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleAddItem = (item: MenuItem) => {
    soundFx.play('add');
    onAddItem(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id={`cat-${category.id}`} className="scroll-mt-36 py-8 border-b border-[#1b4865]">
      
      {/* Category Video & Media Header */}
      {!isSearchActive && (
        <div className="relative mb-8 rounded-2xl overflow-hidden border-2 border-[#1b4865] bg-[#123b53] shadow-xl">
          <div className="relative h-56 sm:h-72 lg:h-80 w-full overflow-hidden">
            {!videoError ? (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover object-center scale-105"
              >
                <source src={category.videoUrl} type="video/mp4" />
                {t.videoNotSupported}
              </video>
            ) : (
              <img
                src={category.fallbackImage}
                alt={localizedCat.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            )}

            {/* Contrast Scrim for Clear Typography with Petrol Tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c202d] via-[#0c202d]/75 to-[#0c202d]/30" />

            {/* Video Controls */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-[#0c202d]/70 hover:bg-[#0c202d] text-[#F4F8FA] backdrop-blur-md border border-[#1b4865] transition-all cursor-pointer shadow-md"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg bg-[#0c202d]/70 hover:bg-[#0c202d] text-[#F4F8FA] backdrop-blur-md border border-[#1b4865] transition-all cursor-pointer shadow-md"
                title={isMuted ? t.soundOn : t.soundOff}
                aria-label={isMuted ? t.soundOn : t.soundOff}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Category Header Overlay Content */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#F4B41A] uppercase tracking-wider">
                <span>DIVINA GULA</span>
                {localizedCat.servingInfo && (
                  <>
                    <span className="text-[#326280]" aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-[#E2EDF4] font-normal">
                      <Users className="w-3.5 h-3.5 text-[#F4B41A]" />
                      <span>{localizedCat.servingInfo}</span>
                    </span>
                  </>
                )}
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-[#FFFFFF] font-serif-heading tracking-tight">
                {localizedCat.title}
              </h2>

              {localizedCat.subtitle && (
                <p className="text-xs sm:text-sm text-[#FFE082] font-serif italic max-w-2xl">
                  {localizedCat.subtitle}
                </p>
              )}

              <p className="text-xs sm:text-sm text-[#CAD8E2] max-w-3xl leading-relaxed pt-1">
                {localizedCat.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* When in Search mode, show clean Title */}
      {isSearchActive && (
        <div className="mb-4 pb-2 border-b border-[#1b4865]">
          <h2 className="text-xl font-bold font-serif-heading text-[#F4B41A]">
            {localizedCat.title}
          </h2>
        </div>
      )}

      {/* Vertical Structured Menu List */}
      <div className="divide-y divide-[#153e58]">
        {category.items.map((item) => {
          const isAdded = !!addedIds[item.id];
          return (
            <div
              key={item.id}
              className="py-4.5 group hover:bg-[#123b53]/50 px-3 sm:px-4 rounded-xl transition-all flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 sm:gap-6 border-b border-transparent hover:border-[#F4B41A]/20"
            >
              {/* Item Info Column */}
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF] group-hover:text-[#F4B41A] transition-colors">
                    {item.name}
                  </h3>

                  {/* Portion or Tag markers */}
                  {item.portion && (
                    <span className="text-xs text-[#A3B8C7] font-medium">
                      ({item.portion})
                    </span>
                  )}

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#F4B41A]">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx}>
                          {tIdx > 0 && <span className="text-[#326280] mr-1">·</span>}
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {item.description && (
                  <p className="text-xs sm:text-sm text-[#CAD8E2] leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Price & Action Column with red blur button */}
              <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 shrink-0 pt-1 sm:pt-0">
                <span className="text-base sm:text-lg font-bold text-[#F4B41A] font-mono tabular-nums">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </span>

                <button
                  onClick={() => handleAddItem(item)}
                  className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer active:scale-95 shadow-md ${
                    isAdded
                      ? 'bg-emerald-600 text-white shadow-emerald-900/40'
                      : 'btn-red-blur text-white'
                  }`}
                  title={t.addToOrder}
                  aria-label={`${t.addToOrder} ${item.name}`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span className="text-[11px]">{t.addedToOrder}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span className="text-[11px]">{t.addToOrder}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
