import React from 'react';
import { Sparkles, Plus, Clock, Check } from 'lucide-react';
import { RESTAURANT_INFO, MenuItem, BRAND_ASSETS } from '../data/menuData';
import { soundFx } from '../utils/audio';

interface PromotionsSectionProps {
  onAddItem: (item: MenuItem) => void;
}

export const PromotionsSection: React.FC<PromotionsSectionProps> = ({ onAddItem }) => {
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
      name: "Praya Experience",
      price: 55.00,
      description: "2 Cervejas Prayas bem geladas + Bolinho de Camarão (crocante por fora, macio por dentro, feito com massa de macaxeira sem glúten e catupiry).",
      tags: ["Combo Especial", "Sem Glúten", "Favorito"],
      isHighlight: true,
    },
    {
      id: "praya-4x3",
      name: "Promoção Praya 4x3",
      price: 37.50,
      description: "Na compra de 3 cervejas artesanais Praya puro malte (sem glúten), a 4ª unidade sai 100% por nossa conta!",
      tags: ["Cerveja Gelada", "Pague 3 Leve 4"],
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
              <span>Destaques da Praia</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#FFFFFF]">
              Promoções & Happy Hour
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#CAD8E2] max-w-md">
            Condições especiais para aproveitar a brisa do mar com cerveja gelada, petiscos artesanais e drinks selecionados.
          </p>
        </div>

        {/* Grid of Highlight Deals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Praya Experience Card */}
          <div className="lg:col-span-1 rounded-2xl bg-[#123b53] border-2 border-[#F4B41A]/30 p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#F4B41A] transition-all shadow-lg hover:shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#F4B41A] uppercase tracking-wider">
                  Combo Exclusivo
                </span>
                <span className="text-xs text-[#A3B8C7] font-medium">Sem Glúten</span>
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
                <span className="text-[11px] text-[#A3B8C7] block">Valor do Combo</span>
                <span className="text-xl font-bold text-[#F4B41A] font-mono tabular-nums">
                  R$ 55,00
                </span>
              </div>
              <button
                onClick={() => handleAdd(promoItems[0])}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F4B41A] hover:bg-[#F7C438] text-[#0C202D] font-bold text-xs transition-all cursor-pointer shadow-sm"
              >
                {addedIds[promoItems[0].id] ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Adicionado</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Pedir Combo</span>
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
                    Promoção Oficial
                  </span>
                  <span className="text-xs text-[#A3B8C7] font-medium">Leve 4 Pague 3</span>
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
                  <span className="text-[11px] text-[#A3B8C7] block">Valor 4 Garrafas</span>
                  <span className="text-xl font-bold text-[#F4B41A] font-mono tabular-nums">
                    R$ 37,50
                  </span>
                </div>
                <button
                  onClick={() => handleAdd(promoItems[1])}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F4B41A] hover:bg-[#F7C438] text-[#0C202D] font-bold text-xs transition-all cursor-pointer shadow-sm"
                >
                  {addedIds[promoItems[1].id] ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Adicionado</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Pedir 4x3</span>
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
                  Happy Hour Divino
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
                * Preços válidos exclusivamente durante o horário do Happy Hour.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
