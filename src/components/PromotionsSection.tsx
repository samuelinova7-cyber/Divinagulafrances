import React from 'react';
import { Sparkles, Clock } from 'lucide-react';
import { RESTAURANT_INFO, MenuItem, BRAND_ASSETS } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

export const PromotionsSection: React.FC = () => {
  const { t } = useLanguage();

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
    <section id="promocoes" className="py-12 border-b border-slate-200 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{t.promoBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-slate-900">
              {t.promoTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            {t.promoDesc}
          </p>
        </div>

        {/* Grid of Highlight Deals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Praya Experience Card */}
          <div className="lg:col-span-1 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-amber-400 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                  {t.tagSpecialCombo}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.tagGlutenFree}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif-heading">
                  {promoItems[0].name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {promoItems[0].description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Combo Especial</span>
                <span className="text-2xl font-extrabold text-amber-700 font-mono tabular-nums">
                  R$ 55,00
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                Mais Pedido
              </span>
            </div>
          </div>

          {/* Praya 4x3 Card with Image */}
          <div className="lg:col-span-1 rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:border-amber-400 hover:shadow-md transition-all">
            <div className="relative h-44 w-full overflow-hidden bg-slate-100">
              <img
                src={BRAND_ASSETS.praya4x3Image}
                alt="Promoção Praya 4x3"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                    {t.tagColdBeer}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{t.tagBuy3Get4}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif-heading">
                  {promoItems[1].name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {promoItems[1].description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">4 Unidades</span>
                  <span className="text-2xl font-extrabold text-amber-700 font-mono tabular-nums">
                    R$ 37,50
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  4 por 3
                </span>
              </div>
            </div>
          </div>

          {/* Happy Hour Divino Card with Image */}
          <div className="lg:col-span-1 rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:border-amber-400 hover:shadow-md transition-all">
            <div className="relative h-44 w-full overflow-hidden bg-slate-100">
              <img
                src={BRAND_ASSETS.happyHourImage}
                alt="Happy Hour Divino"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-600 text-xs font-bold">
                  <Clock className="w-4 h-4" />
                  <span>{RESTAURANT_INFO.happyHour.days} · {RESTAURANT_INFO.happyHour.time}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif-heading">
                  Happy Hour
                </h3>
                <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                  {RESTAURANT_INFO.happyHour.deals.map((deal, idx) => (
                    <li key={idx} className="flex items-center justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-700 font-medium">{deal.item}</span>
                      <span className="text-amber-700 font-bold font-mono tabular-nums">
                        R$ {deal.price.toFixed(2).replace('.', ',')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-2 text-[11px] text-slate-500 italic">
                * {t.heroHappyHourTitle} {t.heroHappyHourDesc}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
