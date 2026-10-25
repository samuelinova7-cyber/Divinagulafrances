import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { MenuCategory } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface MenuSectionProps {
  category: MenuCategory;
  isSearchActive?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'promocoes': return '🌟';
    case 'executivo': return '🍽️';
    case 'entradinhas': return '🍤';
    case 'petiscos': return '🥘';
    case 'frutos-do-mar': return '🐟';
    case 'moquecas': return '🍲';
    case 'pratos-da-casa': return '🥩';
    case 'petiscos-brasa': return '🔥';
    case 'linguicas-caseiras': return '🌭';
    case 'panelinhas-saladas': return '🥗';
    case 'grelhados-brasa': return '🥩';
    case 'menu-infantil': return '🧒';
    case 'sobremesas': return '🍰';
    case 'bebidas-nao-alcoolicas': return '🥤';
    case 'cervejas-chopes': return '🍺';
    case 'drinks-bar': return '🍹';
    default: return '🍴';
  }
};

export const MenuSection: React.FC<MenuSectionProps> = ({
  category,
  isSearchActive = false,
  isExpanded = false,
  onToggleExpand,
}) => {
  const { getCategoryLocalized } = useLanguage();
  const localizedCat = getCategoryLocalized(category);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoError, setVideoError] = useState<boolean>(false);

  // When search is active, category is always expanded
  const isOpen = isSearchActive || isExpanded;

  // Calculate minimum price for badge
  const minPrice = category.items.length > 0
    ? Math.min(...category.items.map(i => i.price))
    : 0;

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.play('click');
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id={`cat-${category.id}`} className="scroll-mt-32 transition-all">
      
      {/* 1. Large, Tactile Category Button Header with Clean White / Neutral Styling */}
      <button
        onClick={() => {
          soundFx.play('click');
          onToggleExpand?.();
        }}
        className={`w-full p-4 sm:p-5 rounded-2xl border transition-all text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer shadow-xs active:scale-[0.99] select-none ${
          isOpen
            ? 'bg-amber-50/40 border-amber-500/80 shadow-md ring-1 ring-amber-500/20'
            : 'bg-white border-slate-200/90 hover:border-amber-400 hover:bg-slate-50/70 shadow-xs'
        }`}
        aria-expanded={isOpen}
      >
        {/* Left icon and title */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl shadow-xs transition-colors ${
            isOpen
              ? 'bg-amber-500 text-white'
              : 'bg-slate-100 text-slate-800'
          }`}>
            <span>{getCategoryIcon(category.id)}</span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-xl font-bold font-serif-heading text-slate-900 tracking-tight truncate">
                {localizedCat.title}
              </h2>
              {localizedCat.servingInfo && (
                <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-medium shrink-0">
                  <Users className="w-3 h-3 text-amber-600" />
                  <span>{localizedCat.servingInfo}</span>
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-normal">
              {localizedCat.subtitle || localizedCat.description}
            </p>
          </div>
        </div>

        {/* Right meta details & accordion chevron */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <div className="text-right hidden sm:block">
            {minPrice > 0 && (
              <span className="text-xs font-bold text-amber-600 font-mono block">
                A partir de R$ {minPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <span className="text-[10px] text-slate-400 block font-medium">
              {category.items.length} {category.items.length === 1 ? 'opção' : 'opções'}
            </span>
          </div>

          <div className="sm:hidden px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-mono text-amber-700 font-bold border border-slate-200">
            {category.items.length}
          </div>

          <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all ${
            isOpen
              ? 'bg-amber-500 text-white rotate-180'
              : 'bg-slate-100 text-slate-600'
          }`}>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </div>
        </div>
      </button>

      {/* 2. Expanded Category Content (Clean White / Light Cards without Add buttons) */}
      {isOpen && (
        <div className="mt-3 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
          
          {/* Optional Category Media Header (Only if video/image exists and not searching) */}
          {!isSearchActive && category.videoUrl && (
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 h-44 sm:h-60 w-full shadow-xs">
              {!videoError ? (
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover object-center"
                >
                  <source src={category.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={category.fallbackImage}
                  alt={localizedCat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              )}

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Media Controls */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer shadow"
                  title={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer shadow"
                  title={isMuted ? 'Ativar som' : 'Desativar som'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-cyan-300" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                </button>
              </div>

              {/* Bottom info on video */}
              <div className="absolute bottom-3 left-4 right-4 z-10">
                <p className="text-xs sm:text-sm text-white/95 font-medium line-clamp-2 drop-shadow">
                  {localizedCat.description}
                </p>
              </div>
            </div>
          )}

          {/* Dishes List with Clean White Cards and Clear Price Display (No Add Button) */}
          <div className="grid grid-cols-1 gap-3">
            {category.items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 shadow-xs"
                >
                  {/* Dish Info */}
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-heading">
                        {item.name}
                      </h3>

                      {item.portion && (
                        <span className="text-xs text-slate-500 font-medium">
                          ({item.portion})
                        </span>
                      )}

                      {item.tags && item.tags.length > 0 && (
                        <div className="flex items-center gap-1.5 text-xs text-amber-700 font-medium">
                          {item.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="inline-flex items-center">
                              {tIdx > 0 && <span className="text-slate-300 mx-1.5">·</span>}
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {item.description && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Clean, Prominent Price Display (No add to order button) */}
                  <div className="flex items-center justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/60">
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-extrabold text-amber-700 font-mono tabular-nums tracking-tight">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Collapse Footer */}
          <div className="pt-2 text-center border-t border-slate-200">
            <button
              onClick={() => {
                soundFx.play('click');
                onToggleExpand?.();
              }}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-600 font-medium py-1.5 px-3 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <ChevronUp className="w-4 h-4" />
              <span>Recolher {localizedCat.title}</span>
            </button>
          </div>

        </div>
      )}

    </section>
  );
};
