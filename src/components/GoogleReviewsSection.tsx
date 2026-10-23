import React, { useState, useRef, useEffect } from 'react';
import { Star, ExternalLink, Check, ChevronLeft, ChevronRight, MapPin, Search, Volume2, VolumeX, Copy } from 'lucide-react';
import { RESTAURANT_INFO, GOOGLE_REVIEWS, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

// Location alternating media component (Video and Photo of Location in the same block)
const LocationMediaBlock: React.FC = () => {
  const { t } = useLanguage();
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
    <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border-2 border-[#1b4865] bg-black shadow-2xl group">
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

      {/* Ambient gradient */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Top Controls */}
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

      {/* Bottom bar switcher */}
      <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
          <button
            onClick={() => {
              soundFx.play('pop');
              setActiveMedia('video');
            }}
            className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
              activeMedia === 'video'
                ? 'bg-[#F4B41A] text-[#0C202D] shadow-md'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            ▶ Vídeo
          </button>
          <button
            onClick={() => {
              soundFx.play('pop');
              setActiveMedia('image');
            }}
            className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
              activeMedia === 'image'
                ? 'bg-[#F4B41A] text-[#0C202D] shadow-md'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            📸 Foto
          </button>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-white/80 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Praia do Francês
        </span>
      </div>
    </div>
  );
};

export const GoogleReviewsSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedStars, setSelectedStars] = useState(5);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [reviewSearch, setReviewSearch] = useState('');
  const [copied, setCopied] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    soundFx.play('click');
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCopyAddress = () => {
    soundFx.play('click');
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const filteredReviews = GOOGLE_REVIEWS.filter(rev => 
    rev.author.toLowerCase().includes(reviewSearch.toLowerCase()) ||
    rev.text.toLowerCase().includes(reviewSearch.toLowerCase()) ||
    (rev.highlight && rev.highlight.toLowerCase().includes(reviewSearch.toLowerCase()))
  );

  return (
    <section id="avaliacoes" className="py-16 border-b border-[#1b4865] bg-[#0c202d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header with Google Rating Badge & Glowing Logo */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-[#1b4865] gap-6">
          <div className="flex items-start gap-4">
            {/* Glowing Logo in Review Section */}
            <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-[#F4B41A] to-[#E5A912] shadow-2xl logo-glow">
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
              <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-[#FFFFFF]">
                {t.reviewsSectionTitle}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#CAD8E2]">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[#F4B41A] text-[#F4B41A]" />
                  ))}
                </div>
                <span className="font-bold text-white text-base">5,0 / 5.0</span>
                <span className="text-[#326280]" aria-hidden="true">·</span>
                <span>{t.reviewsSectionSubtitle}</span>
              </div>
            </div>
          </div>

          {/* Controls & Action */}
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
              href={RESTAURANT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.play('click')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold text-sm transition-all shadow-lg whitespace-nowrap"
            >
              <Star className="w-4 h-4 fill-white" />
              <span>Google Reviews (5.0 ⭐)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Search bar inside reviews */}
        <div className="max-w-md relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3B8C7]" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={reviewSearch}
            onChange={(e) => setReviewSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#123b53] border border-[#225779] text-xs sm:text-sm text-white placeholder-[#A3B8C7] focus:outline-none focus:border-[#F4B41A]"
          />
        </div>

        {/* Side-by-Side Review Cards with Horizontal Swipe / Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#1b4865] scrollbar-track-[#0d222e]"
          style={{ scrollbarWidth: 'thin' }}
        >
          {filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="min-w-[300px] sm:min-w-[380px] max-w-[400px] snap-center p-6 sm:p-7 rounded-2xl bg-[#123b53] border-2 border-[#1b4865] flex flex-col justify-between space-y-4 hover:border-[#F4B41A] transition-all shadow-lg shrink-0"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-[#F4B41A] text-[#F4B41A]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#A3B8C7]">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#D7E3EC] leading-relaxed italic line-clamp-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#1b4865] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#FFFFFF]">{rev.author}</h4>
                  <span className="text-[11px] text-[#F4B41A] font-medium">{rev.highlight}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#4285F4]/20 text-[#4285F4] flex items-center justify-center font-bold text-xs shadow-inner">
                  G
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Google Map & Location Media Section for R. Massunim, 5 - Praia do Francês */}
        <div id="localizacao" className="pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5 text-[#F4B41A]" />
              <h3 className="text-xl sm:text-2xl font-bold font-serif-heading">{t.locationTitle}</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyAddress}
                className="text-xs text-[#CAD8E2] hover:text-white bg-[#123b53] hover:bg-[#184561] px-3.5 py-2 rounded-lg border border-[#1b4865] inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                title={t.locationCopyAddress}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#F4B41A]" />}
                <span>{copied ? t.locationCopied : t.locationCopyAddress}</span>
              </button>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.play('click')}
                className="text-xs text-[#0C202D] font-bold bg-[#F4B41A] hover:bg-[#F7C438] px-3.5 py-2 rounded-lg inline-flex items-center gap-1.5 cursor-pointer transition-colors shadow-md"
              >
                <span>{t.locationOpenMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Side by side: Alternating media block of the restaurant & Google Maps Embed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Alternating Media Block (Video & Photo of Location) */}
            <LocationMediaBlock />

            {/* Interactive Google Map Embed */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border-2 border-[#1b4865] shadow-2xl bg-[#123b53]">
              <iframe
                title="Mapa Interativo Divina Gula Francês"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.985654321098!2d-35.8365!3d-9.7612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701427c3f3f3f3f%3A0x3f3f3f3f3f3f3f3f!2sR.%20Massunim%2C%205%20-%20Praia%20do%20Franc%C3%AAs%2C%20Mal.%20Deodoro%20-%20AL%2C%2057160-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-110 brightness-95"
              />
              <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-[#0d222e]/90 backdrop-blur-md border border-[#1b4865] text-xs text-white shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#F4B41A] animate-ping" />
                <div>
                  <strong className="block text-[#F4B41A]">Divina Gula Francês</strong>
                  <span className="text-[11px] text-[#CAD8E2]">{RESTAURANT_INFO.locationRef} · {RESTAURANT_INFO.address}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Quick Feedback Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#123b53] to-[#0f2e42] border-2 border-[#F4B41A]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-[#FFFFFF] font-serif-heading">
              {t.heroLocation} · Divina Gula
            </h3>
            <p className="text-xs sm:text-sm text-[#CAD8E2]">
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
                    className="p-1 text-[#225779] hover:text-[#F4B41A] transition-colors cursor-pointer"
                    aria-label={`${star} stars`}
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= selectedStars ? 'fill-[#F4B41A] text-[#F4B41A]' : 'text-[#225779]'
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
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <Check className="w-5 h-5" />
              <span>{t.reviewsBadgeVerified}</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
