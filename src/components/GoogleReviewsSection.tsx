import React, { useState, useRef, useEffect } from 'react';
import { Star, ExternalLink, Check, ChevronLeft, ChevronRight, MapPin, Search, Volume2, VolumeX, Copy } from 'lucide-react';
import { RESTAURANT_INFO, GOOGLE_REVIEWS, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

// Location alternating media component (Video and Photo of Location in the same block)
const LocationMediaBlock: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<'video' | 'image'>('video');
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Alternates automatically every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMedia((prev) => (prev === 'video' ? 'image' : 'video'));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    soundFx.play('click');
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border-2 border-slate-200 bg-black shadow-lg group">
      {/* Video Layer */}
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
          <source src={BRAND_ASSETS.locationVideo} type="video/mp4" />
        </video>
      </div>

      {/* Image Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          activeMedia === 'image' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <img
          src={BRAND_ASSETS.locationImage}
          alt="Divina Gula Francês - Espaço e Fachada"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700"
        />
      </div>

      {/* Media Overlay Tags & Controls */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-white border border-white/20">
          {activeMedia === 'video' ? '🎥 Espaço ao Vivo' : '📸 Ambiente Divina Gula'}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
        {activeMedia === 'video' && (
          <button
            onClick={toggleSound}
            className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:text-amber-400 border border-white/20 transition-colors cursor-pointer"
            aria-label={isMuted ? 'Ativar áudio' : 'Desativar áudio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Bottom info pill */}
      <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-xs text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-medium text-slate-100 truncate">Rua Massunim, 5 · Praia do Francês</span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => setActiveMedia('video')}
            className={`w-2 h-2 rounded-full transition-all ${
              activeMedia === 'video' ? 'w-5 bg-amber-400' : 'bg-white/50'
            }`}
            aria-label="Ver vídeo do local"
          />
          <button
            onClick={() => setActiveMedia('image')}
            className={`w-2 h-2 rounded-full transition-all ${
              activeMedia === 'image' ? 'w-5 bg-amber-400' : 'bg-white/50'
            }`}
            aria-label="Ver foto do local"
          />
        </div>
      </div>
    </div>
  );
};

export const GoogleReviewsSection: React.FC = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [reviewSearch, setReviewSearch] = useState('');
  const [selectedStars, setSelectedStars] = useState(5);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    soundFx.play('click');
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleCopyAddress = () => {
    soundFx.play('click');
    navigator.clipboard.writeText(
      `${RESTAURANT_INFO.address}, ${RESTAURANT_INFO.locationRef}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredReviews = GOOGLE_REVIEWS.filter(
    (rev) =>
      rev.author.toLowerCase().includes(reviewSearch.toLowerCase()) ||
      rev.text.toLowerCase().includes(reviewSearch.toLowerCase()) ||
      (rev.highlight && rev.highlight.toLowerCase().includes(reviewSearch.toLowerCase()))
  );

  return (
    <section id="avaliacoes" className="py-16 border-b border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header with Google Rating Badge & Glowing Logo */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-slate-200 gap-6">
          <div className="flex items-start gap-4">
            {/* Spinning Logo in Review Section */}
            <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-amber-400 to-amber-500 shadow-md">
              <img
                src={BRAND_ASSETS.logoUrl}
                alt="Divina Gula Francês Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full animate-spin-slow"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#4285F4] text-xs font-bold uppercase tracking-wider">
                <Star className="w-4 h-4 fill-[#4285F4]" />
                <span>{t.reviewsSectionBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-slate-900">
                {t.reviewsSectionTitle}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900 text-base">5,0 / 5.0</span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span>{t.reviewsSectionSubtitle}</span>
              </div>
            </div>
          </div>

          {/* Controls & Action */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1">
              <button 
                onClick={() => scroll('left')}
                className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors cursor-pointer shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-amber-500" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors cursor-pointer shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-amber-500" />
              </button>
            </div>

            <a
              href={RESTAURANT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.play('click')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold text-sm transition-all shadow-md whitespace-nowrap"
            >
              <Star className="w-4 h-4 fill-white" />
              <span>Google Reviews (5.0 ⭐)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Search bar inside reviews */}
        <div className="max-w-md relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={reviewSearch}
            onChange={(e) => setReviewSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 shadow-sm"
          />
        </div>

        {/* Side-by-Side Review Cards with Horizontal Swipe / Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-none"
        >
          {filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="min-w-[300px] sm:min-w-[380px] max-w-[400px] snap-center p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 hover:border-amber-400 hover:shadow-lg transition-all shadow-sm shrink-0"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic line-clamp-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{rev.author}</h4>
                  <span className="text-[11px] text-amber-600 font-medium">{rev.highlight}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center font-bold text-xs">
                  G
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Google Map & Location Media Section */}
        <div id="localizacao" className="pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-slate-900">
              <MapPin className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl sm:text-2xl font-bold font-serif-heading">{t.locationTitle}</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyAddress}
                className="text-xs text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 px-3.5 py-2 rounded-lg border border-slate-300 inline-flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm"
                title={t.locationCopyAddress}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-amber-500" />}
                <span>{copied ? t.locationCopied : t.locationCopyAddress}</span>
              </button>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.play('click')}
                className="text-xs text-white font-bold bg-amber-500 hover:bg-amber-600 px-3.5 py-2 rounded-lg inline-flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm"
              >
                <span>{t.locationOpenMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Side by side: Alternating media block & Google Maps Embed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Alternating Media Block (Video & Photo of Location) */}
            <LocationMediaBlock />

            {/* Interactive Google Map Embed */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg bg-slate-100">
              <iframe
                title="Mapa Interativo Divina Gula Francês"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.985654321098!2d-35.8365!3d-9.7612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701427c3f3f3f3f%3A0x3f3f3f3f3f3f3f3f!2sR.%20Massunim%2C%205%20-%20Praia%20do%20Franc%C3%AAs%2C%20Mal.%20Deodoro%20-%20AL%2C%2057160-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
              />
              <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs text-slate-800 shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
                <div>
                  <strong className="block text-slate-900 font-bold">Divina Gula Francês</strong>
                  <span className="text-[11px] text-slate-500">{RESTAURANT_INFO.locationRef} · {RESTAURANT_INFO.address}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Feedback Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900 font-serif-heading">
              {t.heroLocation} · Divina Gula
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.reviewsSectionSubtitle}
            </p>
          </div>

          {!feedbackSubmitted ? (
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => {
                      soundFx.play('click');
                      setSelectedStars(star);
                    }}
                    className="p-1 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
                    aria-label={`${star} stars`}
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= selectedStars ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <a
                href={RESTAURANT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  soundFx.play('success');
                  setFeedbackSubmitted(true);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#4285F4] hover:bg-[#3367D6] text-white text-xs font-bold transition-all whitespace-nowrap shadow-md cursor-pointer"
              >
                Google 5 ⭐
              </a>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
              <Check className="w-5 h-5" />
              <span>{t.reviewsBadgeVerified}</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
