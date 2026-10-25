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
  const [soundEnabled, setSoundEnabled] = useState(false);

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
          details: `"${randomReview.text.slice(0, 75)}..."`,
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

      // Play soft chime sound effect if user enabled it
      if (soundEnabled) {
        soundFx.play('notification');
      }

      // Hide toast after 4.2s (discreet, doesn't linger)
      setTimeout(() => {
        setCurrentNotification((prev) => (prev?.id === newEvent.id ? null : prev));
      }, 4200);

      // Schedule next event in 30-50s (much longer, less invasive interval)
      const nextDelay = 30000 + Math.random() * 20000;
      timeoutId = setTimeout(showRandomEvent, nextDelay);
    };

    // Initial wait of 18s before first notification appears
    const initialTimer = setTimeout(showRandomEvent, 18000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
    };
  }, [soundEnabled, t]);

  if (!currentNotification) return null;

  return (
    <aside
      aria-label="Notificações em tempo real do restaurante"
      className="fixed bottom-4 left-4 z-40 max-w-[280px] sm:max-w-[320px] w-full animate-in fade-in slide-in-from-bottom-3 duration-200 pointer-events-auto"
    >
      <div className="p-2.5 sm:p-3 rounded-xl bg-[#091822]/95 backdrop-blur-md border border-[#1b4865] shadow-lg relative overflow-hidden transition-all hover:border-[#F4B41A]/50">
        
        <div className="flex items-center gap-2.5 relative z-10">
          {/* Leading Icon Badge - Compact */}
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
              currentNotification.type === 'ifood_order'
                ? 'bg-[#EA1D2C] text-white'
                : currentNotification.type === 'review'
                ? 'bg-[#4285F4] text-white'
                : 'bg-[#F4B41A] text-[#0C202D]'
            }`}
          >
            {currentNotification.type === 'ifood_order' && <Bike className="w-4 h-4" />}
            {currentNotification.type === 'review' && <Star className="w-4 h-4 fill-white" />}
            {currentNotification.type === 'local_order' && <Utensils className="w-4 h-4" />}
          </div>

          {/* Details - Compact & Truncated */}
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4B41A]">
                {currentNotification.title}
              </span>
              <span className="text-[9px] text-[#7A96A8]">· {currentNotification.timeAgo}</span>
            </div>

            <p className="text-[11px] font-bold text-white truncate mt-0.5">
              {currentNotification.subtitle}
            </p>

            <p className="text-[10px] text-[#CAD8E2] truncate mt-0.5 leading-tight">
              {currentNotification.details}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={() => {
              soundFx.play('click');
              setCurrentNotification(null);
            }}
            className="p-1 rounded text-[#7A96A8] hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Fechar notificação"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
