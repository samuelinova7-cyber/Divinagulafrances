import React from 'react';
import { Sparkles, Plus, Clock, Check } from 'lucide-react';
import { RESTAURANT_INFO, MenuItem, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface PromotionsSectionProps {
  onAddItem: (item: MenuItem) => void;
}

export const PromotionsSection: React.FC<PromotionsSectionProps> = ({ onAddItem }) => {
  const { t } = useLanguage();
  const [addedIds, setAddedIds] = React.useState<Record<string, boolean>>({});

  const handleAdd = (item: MenuItem) => {
    soundFx.play('add');
    onAddItem(item);
    setAddedIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const promoItems: MenuItem[] = [
    {
      id: "praya-exp",
      name: t.promoPrayaExpTitle,
      price: 55.00,
      description: t.promoPrayaExpDesc,
      tags: [t.tagSpecialCombo, t.tagGlutenFree, t.tagFavorite],
      isHighlight: true,
    },
    {
      id: "praya-4x3",
      name: t.promoPraya4x3Title,
      price: 37.50,
      description: t.promoPraya4x3Desc,
      tags: [t.tagColdBeer, t.tagBuy3Get4],
      isHighlight: true,
    }
  ];

  return (
    <section id="promocoes" className="py-12 border-b border-[#1b4865] bg-[#0c202d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#1b4865] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#F4B41A] text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{t.promoBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#FFFFFF]">
              {t.promoTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#CAD8E2] max-w-md">
            {t.promoDesc}
          </p>
        </div>

        {/* Grid of Highlight Deals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Praya Experience Card */}
          <div className="lg:col-span-1 rounded-2xl bg-[#123b53] border-2 border-[#F4B41A]/30 p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#F4B41A] transition-all shadow-lg hover:shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#F4B41A] uppercase tracking-wider">
                  {t.tagSpecialCombo}
                </span>
                <span className="text-xs text-[#A3B8C7] font-medium">{t.tagGlutenFree}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFFFFF] font-serif-heading">
                  {promoItems[0].name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#D7E3EC] leading-relaxed">
                  {promoItems[0].description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1b4865] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#A3B8C7] block">Combo</span>
                <span className="text-xl font-bold text-[#F4B41A] font-mono tabular-nums">
                  R$ 55,00
                </span>
              </div>
              <button
                onClick={() => handleAdd(promoItems[0])}
                className="btn-red-blur flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-bold text-xs transition-all cursor-pointer shadow-md active:scale-95"
              >
                {addedIds[promoItems[0].id] ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{t.addedToOrder}</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>{t.addToOrder}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Praya 4x3 Card with Image */}
          <div className="lg:col-span-1 rounded-2xl bg-[#123b53] border-2 border-[#F4B41A]/30 overflow-hidden flex flex-col justify-between group hover:border-[#F4B41A] transition-all shadow-lg hover:shadow-xl">
            <div className="relative h-40 w-full overflow-hidden bg-[#0d222e]">
              <img
                src={BRAND_ASSETS.praya4x3Image}
                alt="Promoção Praya 4x3"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123b53] via-transparent to-transparent" />
            </div>
            <div className="p-6 pt-2 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#F4B41A] uppercase tracking-wider">
                    {t.tagColdBeer}
                  </span>
                  <span className="text-xs text-[#A3B8C7] font-medium">{t.tagBuy3Get4}</span>
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] font-serif-heading">
                  {promoItems[1].name}
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E3EC] leading-relaxed">
                  {promoItems[1].description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1b4865] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#A3B8C7] block">4 Unid.</span>
                  <span className="text-xl font-bold text-[#F4B41A] font-mono tabular-nums">
                    R$ 37,50
                  </span>
                </div>
                <button
                  onClick={() => handleAdd(promoItems[1])}
                  className="btn-red-blur flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-bold text-xs transition-all cursor-pointer shadow-md active:scale-95"
                >
                  {addedIds[promoItems[1].id] ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{t.addedToOrder}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>{t.addToOrder}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Happy Hour Divino Card with Image */}
          <div className="lg:col-span-1 rounded-2xl bg-[#123b53] border-2 border-[#F4B41A]/40 overflow-hidden flex flex-col justify-between shadow-lg group hover:border-[#F4B41A] transition-all">
            <div className="relative h-40 w-full overflow-hidden bg-[#0d222e]">
              <img
                src={BRAND_ASSETS.happyHourImage}
                alt="Happy Hour Divino"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123b53] via-transparent to-transparent" />
            </div>
            <div className="p-6 pt-2 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#F4B41A] text-xs font-bold">
                  <Clock className="w-4 h-4" />
                  <span>{RESTAURANT_INFO.happyHour.days} · {RESTAURANT_INFO.happyHour.time}</span>
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] font-serif-heading">
                  Happy Hour
                </h3>
                <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                  {RESTAURANT_INFO.happyHour.deals.map((deal, idx) => (
                    <li key={idx} className="flex items-center justify-between border-b border-[#1d4d6b] pb-1">
                      <span className="text-[#E2EDF4] font-medium">{deal.item}</span>
                      <span className="text-[#F4B41A] font-bold font-mono tabular-nums">
                        R$ {deal.price.toFixed(2).replace('.', ',')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-2 text-[11px] text-[#A3B8C7] italic">
                * {t.heroHappyHourTitle} {t.heroHappyHourDesc}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
