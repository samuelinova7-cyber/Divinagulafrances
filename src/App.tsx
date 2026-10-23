import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { InstagramSection } from './components/InstagramSection';
import { PromotionsSection } from './components/PromotionsSection';
import { CategoryNav } from './components/CategoryNav';
import { MenuSection } from './components/MenuSection';
import { TasteQuizModal } from './components/TasteQuizModal';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { FaqSection } from './components/FaqSection';
import { TableOrderDrawer } from './components/TableOrderDrawer';
import { Footer } from './components/Footer';
import { ParticlesBackground } from './components/ParticlesBackground';
import { IFoodSection } from './components/IFoodSection';
import { LiveNotificationsToast } from './components/LiveNotificationsToast';
import { MENU_CATEGORIES, MenuItem } from './data/menuData';
import { OrderItem } from './types';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { soundFx } from './utils/audio';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { t } = useLanguage();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState('entradinhas');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  // Add item to comanda / order
  const handleAddItem = (item: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((oi) => oi.item.id === item.id);
      if (existing) {
        return prev.map((oi) =>
          oi.item.id === item.id ? { ...oi, quantity: oi.quantity + 1 } : oi
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  // Update item quantity in comanda
  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setOrderItems((prev) => {
      return prev
        .map((oi) => {
          if (oi.item.id === itemId) {
            const newQty = oi.quantity + delta;
            return newQty > 0 ? { ...oi, quantity: newQty } : null;
          }
          return oi;
        })
        .filter(Boolean) as OrderItem[];
    });
  };

  // Remove item
  const handleRemoveItem = (itemId: string) => {
    setOrderItems((prev) => prev.filter((oi) => oi.item.id !== itemId));
  };

  // Clear comanda
  const handleClearOrder = () => {
    setOrderItems([]);
  };

  // Total quantity count
  const totalOrderCount = orderItems.reduce((sum, oi) => sum + oi.quantity, 0);

  // Recommended dish selection from Taste Quiz
  const handleSelectRecommendedDish = (keyword: string) => {
    setSearchQuery(keyword);
    setDietaryFilter('all');
    const el = document.getElementById('cardapio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to explore menu
  const handleExploreMenu = () => {
    const el = document.getElementById('cardapio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered categories and items based on search and dietary preferences
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return MENU_CATEGORIES.map((cat) => {
      let items = cat.items;

      if (dietaryFilter === 'frutos-mar') {
        items = items.filter(
          (i) =>
            cat.id === 'frutos-do-mar' ||
            cat.id === 'moquecas' ||
            i.name.toLowerCase().includes('camarão') ||
            i.name.toLowerCase().includes('peixe') ||
            i.name.toLowerCase().includes('robalo') ||
            i.name.toLowerCase().includes('polvo') ||
            i.name.toLowerCase().includes('salmão') ||
            i.name.toLowerCase().includes('siri')
        );
      } else if (dietaryFilter === 'carnes') {
        items = items.filter(
          (i) =>
            cat.id === 'grelhados-brasa' ||
            cat.id === 'pratos-da-casa' ||
            cat.id === 'linguicas-caseiras' ||
            cat.id === 'petiscos-brasa' ||
            i.name.toLowerCase().includes('picanha') ||
            i.name.toLowerCase().includes('costela') ||
            i.name.toLowerCase().includes('cupim') ||
            i.name.toLowerCase().includes('filé') ||
            i.name.toLowerCase().includes('carne de sol') ||
            i.name.toLowerCase().includes('maminha') ||
            i.name.toLowerCase().includes('carneiro')
        );
      } else if (dietaryFilter === 'petiscos') {
        items = items.filter(
          (i) =>
            cat.id === 'entradinhas' ||
            cat.id === 'petiscos' ||
            cat.id === 'petiscos-brasa' ||
            cat.id === 'linguicas-caseiras' ||
            cat.id === 'panelinhas-saladas'
        );
      } else if (dietaryFilter === 'bebidas') {
        items = items.filter(
          (i) =>
            cat.id === 'bebidas-nao-alcoolicas' ||
            cat.id === 'cervejas-chopes' ||
            cat.id === 'drinks-bar'
        );
      } else if (dietaryFilter === 'sobremesas') {
        items = items.filter((i) => cat.id === 'sobremesas');
      } else if (dietaryFilter === 'sem-gluten') {
        items = items.filter(
          (i) =>
            (i.tags && i.tags.some((t) => t.toLowerCase().includes('sem glúten'))) ||
            i.description?.toLowerCase().includes('sem glúten') ||
            i.description?.toLowerCase().includes('macaxeira') ||
            i.description?.toLowerCase().includes('tapioca')
        );
      }

      if (query) {
        items = items.filter(
          (i) =>
            i.name.toLowerCase().includes(query) ||
            (i.description && i.description.toLowerCase().includes(query)) ||
            (i.tags && i.tags.some((t) => t.toLowerCase().includes(query)))
        );
      }

      return {
        ...cat,
        items,
      };
    }).filter((cat) => cat.items.length > 0);
  }, [searchQuery, dietaryFilter]);

  return (
    <div className="min-h-screen bg-[#0c202d] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#F4B41A] selection:text-[#0C202D] relative">
      {/* Light Blue Particles Background */}
      <ParticlesBackground />
      
      {/* 1. Header & Top Bar Navigation */}
      <Navbar
        orderCount={totalOrderCount}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* 2. Hero Section */}
      <HeroBanner
        onOpenQuiz={() => setIsQuizOpen(true)}
        onExploreMenu={handleExploreMenu}
      />

      {/* 3. Instagram Section (Placed immediately below Hero as requested) */}
      <InstagramSection />

      {/* 4. Promotions & Happy Hour Section */}
      <PromotionsSection onAddItem={handleAddItem} />

      {/* 5. Menu Anchor & Category Scroller */}
      <div id="cardapio" className="scroll-mt-20">
        <CategoryNav
          categories={MENU_CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelectCategory={setActiveCategoryId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          dietaryFilter={dietaryFilter}
          onDietaryFilterChange={setDietaryFilter}
        />
      </div>

      {/* 6. Menu Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Search / Filter Feedback */}
        {(searchQuery || dietaryFilter !== 'all') && (
          <div className="p-4 rounded-xl bg-[#123b53] border-2 border-[#1b4865] flex items-center justify-between shadow-md">
            <div className="text-xs sm:text-sm text-[#D7E3EC]">
              <span>Resultados: </span>
              {searchQuery && <strong className="text-[#F4B41A]">"{searchQuery}" </strong>}
              {dietaryFilter !== 'all' && (
                <span className="text-[#A3B8C7]">({dietaryFilter})</span>
              )}
            </div>
            <button
              onClick={() => {
                soundFx.play('click');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="text-xs text-[#F4B41A] hover:underline font-bold cursor-pointer"
            >
              {t.clearFilters}
            </button>
          </div>
        )}

        {/* Categories with Video Headers & Vertical Item Lists */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <MenuSection
              key={category.id}
              category={category}
              onAddItem={handleAddItem}
              isSearchActive={!!searchQuery || dietaryFilter !== 'all'}
            />
          ))
        ) : (
          <div className="py-20 text-center space-y-3">
            <p className="text-lg text-[#FFFFFF] font-serif-heading">
              {t.noDishesFound}
            </p>
            <p className="text-xs sm:text-sm text-[#A3B8C7]">
              {t.searchPlaceholder}
            </p>
            <button
              onClick={() => {
                soundFx.play('click');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-2 px-5 py-2.5 rounded-lg bg-[#F4B41A] text-[#0C202D] text-xs font-bold shadow-md hover:bg-[#F7C438] transition-colors cursor-pointer"
            >
              {t.filterAll}
            </button>
          </div>
        )}

      </main>

      {/* Interactive Quiz do Sabor Banner in Flow */}
      <section className="bg-gradient-to-r from-[#0a1c26] via-[#123b53] to-[#0a1c26] border-y-2 border-[#1b4865] py-12 shadow-xl">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B41A] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>{t.quizTitle}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#FFFFFF]">
            {t.quizSubtitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#D7E3EC] max-w-xl mx-auto leading-relaxed">
            {t.heroStory}
          </p>
          <button
            onClick={() => {
              soundFx.play('click');
              setIsQuizOpen(true);
            }}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F4B41A] to-[#E5A912] hover:from-[#F7C438] hover:to-[#F4B41A] text-[#0C202D] font-bold text-sm transition-all shadow-xl inline-flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.quizTitle}</span>
          </button>
        </div>
      </section>

      {/* 6.5 iFood Delivery Section (alternating photo and video in the same block) */}
      <IFoodSection />

      {/* 7. Google 5.0 ⭐ Reviews & Rating Section with Location Alternating Media + Interactive Map */}
      <GoogleReviewsSection />

      {/* 8. Frequently Asked Questions (FAQ - 10 Perguntas e Respostas) */}
      <FaqSection />

      {/* 9. Footer */}
      <Footer />

      {/* Real-time Google Reviews and Order Notifications (Local Dining & iFood) with sound */}
      <LiveNotificationsToast />

      {/* Floating Comanda Button for Fast Access */}
      {totalOrderCount > 0 && (
        <div className="fixed bottom-6 right-6 z-40 animate-bounce">
          <button
            onClick={() => {
              soundFx.play('click');
              setIsOrderDrawerOpen(true);
            }}
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#F4B41A] to-[#E5A912] text-[#0C202D] font-bold text-sm shadow-2xl border-2 border-[#123b53] hover:scale-105 transition-transform cursor-pointer"
            aria-label="Abrir comanda com itens"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>{t.navComanda} ({totalOrderCount})</span>
          </button>
        </div>
      )}

      {/* Interactive Taste Quiz Modal */}
      <TasteQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectRecommendedDish={handleSelectRecommendedDish}
      />

      {/* Interactive Table Order Drawer */}
      <TableOrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />

    </div>
  );
}
