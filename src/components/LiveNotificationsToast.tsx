import React, { useState, useEffect } from 'react';
import { Star, ShoppingBag, Utensils, X, Bell, Bike } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

export type ToastType = 'review' | 'local_order' | 'ifood_order';

export interface LiveNotification {
  id: string;
  type: ToastType;
  title: string;
  subtitle: string;
  details: string;
  timeAgo: string;
  author?: string;
  rating?: number;
}

const LOCAL_TABLE_ORDERS = [
  { item: 'Moqueca de Robalo com Camarão', mesa: 'Mesa 08', price: 'R$ 189,00' },
  { item: 'Costela no Bafo para 4 Pessoas', mesa: 'Mesa 14', price: 'R$ 210,00' },
  { item: 'Bolinho de Camarão + 2 Chopps Heineken', mesa: 'Mesa 03', price: 'R$ 68,00' },
  { item: 'Atolado de Camarão com Macaxeira', mesa: 'Mesa 11', price: 'R$ 145,00' },
  { item: 'Picanha na Brasa com Farofa & Queijo Coalho', mesa: 'Mesa 06', price: 'R$ 178,00' },
  { item: 'Polvo à Lagareiro + Jarra de Clericot', mesa: 'Mesa 19', price: 'R$ 195,00' },
  { item: 'Dadinho de Tapioca com Geléia de Pimenta', mesa: 'Mesa 02', price: 'R$ 38,00' },
  { item: 'Sururu ao Coco com Farofa de Dendê', mesa: 'Mesa 15', price: 'R$ 62,00' },
];

const IFOOD_ORDERS = [
  { item: 'Combo Praya 4x3 + Bolinho de Macaxeira', client: 'Carlos E.' },
  { item: 'Moqueca Mista de Frutos do Mar', client: 'Beatriz M.' },
  { item: 'Filé Mignon ao Molho de Gorgonzola', client: 'Rodrigo S.' },
  { item: 'Camarão Jangadeiro + 2 Sucos Naturais', client: 'Fernanda P.' },
  { item: 'Picanha Completa Família', client: 'Marcelo T.' },
  { item: 'Bobó de Camarão Baiano + 4 Cervejas Praya', client: 'Camila V.' },
];

export const LiveNotificationsToast: React.FC = () => {
  const { t } = useLanguage();
  const [currentNotification, setCurrentNotification] = useState<LiveNotification | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const showRandomEvent = () => {
      const eventTypePicker = Math.random();
      let newEvent: LiveNotification;

      if (eventTypePicker < 0.45) {
        // Real-time Google review notification
        const randomReview = GOOGLE_REVIEWS[Math.floor(Math.random() * GOOGLE_REVIEWS.length)];
        newEvent = {
          id: `rev-${Date.now()}`,
          type: 'review',
          title: t.toastGoogleReview,
          subtitle: randomReview.author,
          details: `"${randomReview.text.slice(0, 95)}..."`,
          timeAgo: t.toastJustNow,
          author: randomReview.author,
          rating: randomReview.rating || 5,
        };
      } else if (eventTypePicker < 0.75) {
        // Pedido no Salão / Mesa Local
        const randomOrder = LOCAL_TABLE_ORDERS[Math.floor(Math.random() * LOCAL_TABLE_ORDERS.length)];
        newEvent = {
          id: `local-${Date.now()}`,
          type: 'local_order',
          title: t.toastLocalOrder,
          subtitle: `${randomOrder.mesa} · ${randomOrder.price}`,
          details: randomOrder.item,
          timeAgo: t.toastJustNow,
        };
      } else {
        // Pedido saindo para iFood Delivery
        const randomIfood = IFOOD_ORDERS[Math.floor(Math.random() * IFOOD_ORDERS.length)];
        newEvent = {
          id: `ifood-${Date.now()}`,
          type: 'ifood_order',
          title: t.toastIfoodOrder,
          subtitle: `${randomIfood.client} · Praia do Francês`,
          details: randomIfood.item,
          timeAgo: t.toastJustNow,
        };
      }

      setCurrentNotification(newEvent);

      // Play chime sound effect
      if (soundEnabled) {
        soundFx.play('notification');
      }

      // Hide toast after 6.5s
      setTimeout(() => {
        setCurrentNotification((prev) => (prev?.id === newEvent.id ? null : prev));
      }, 6500);

      // Schedule next event in 12-20s
      const nextDelay = 12000 + Math.random() * 8000;
      timeoutId = setTimeout(showRandomEvent, nextDelay);
    };

    const initialTimer = setTimeout(showRandomEvent, 4000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
    };
  }, [soundEnabled, t]);

  if (!currentNotification) return null;

  return (
    <aside
      aria-label="Notificações em tempo real do restaurante"
      className="fixed bottom-20 left-4 sm:left-6 z-50 max-w-sm sm:max-w-md w-full animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      <div className="p-4 rounded-2xl bg-[#0d222e]/95 backdrop-blur-xl border-2 border-[#1b4865] shadow-2xl relative overflow-hidden group hover:border-[#F4B41A]/60 transition-all">
        {/* Glow ambient background based on notification type */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-20 ${
            currentNotification.type === 'ifood_order'
              ? 'bg-red-500'
              : currentNotification.type === 'review'
              ? 'bg-blue-400'
              : 'bg-[#F4B41A]'
          }`}
        />

        <div className="flex items-start gap-3.5 relative z-10">
          {/* Leading Icon Badge */}
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
              currentNotification.type === 'ifood_order'
                ? 'bg-[#EA1D2C] text-white shadow-red-900/40'
                : currentNotification.type === 'review'
                ? 'bg-[#4285F4] text-white shadow-blue-900/40'
                : 'bg-[#F4B41A] text-[#0C202D] shadow-amber-900/40'
            }`}
          >
            {currentNotification.type === 'ifood_order' && <Bike className="w-5 h-5 animate-bounce" />}
            {currentNotification.type === 'review' && <Star className="w-5 h-5 fill-white" />}
            {currentNotification.type === 'local_order' && <Utensils className="w-5 h-5" />}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#F4B41A]">
                {currentNotification.title}
              </span>
              <span className="text-[10px] text-[#A3B8C7]">· {currentNotification.timeAgo}</span>
            </div>

            <p className="text-xs font-bold text-white truncate mt-0.5">
              {currentNotification.subtitle}
            </p>

            <p className="text-xs text-[#CAD8E2] line-clamp-2 mt-0.5 leading-snug">
              {currentNotification.details}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={() => {
              soundFx.play('click');
              setCurrentNotification(null);
            }}
            className="absolute top-3 right-3 p-1 rounded-lg text-[#7A96A8] hover:text-white hover:bg-[#123b53] transition-colors cursor-pointer"
            aria-label="Fechar notificação"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Subtle audio mute toggle indicator */}
        <div className="mt-2.5 pt-2 border-t border-[#1b4865]/60 flex items-center justify-between text-[10px] text-[#7A96A8]">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Feed ao vivo · Divina Gula</span>
          </span>
          <button
            onClick={() => {
              soundFx.play('click');
              setSoundEnabled(!soundEnabled);
            }}
            className="hover:text-white cursor-pointer transition-colors"
          >
            {soundEnabled ? '🔔 Som ativado' : '🔕 Som mudo'}
          </button>
        </div>
      </div>
    </aside>
  );
};
