import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { InstagramSection } from './components/InstagramSection';
import { PromotionsSection } from './components/PromotionsSection';
import { CategoryNav } from './components/CategoryNav';
import { MenuSection } from './components/MenuSection';
import { FloatingMenuDock } from './components/FloatingMenuDock';
import { TasteQuizModal } from './components/TasteQuizModal';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { IFoodSection } from './components/IFoodSection';
import { LiveNotificationsToast } from './components/LiveNotificationsToast';
import { MENU_CATEGORIES } from './data/menuData';
import { Sparkles, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { soundFx } from './utils/audio';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { t } = useLanguage();
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState('executivo');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  // Compact Interactive Menu: categories collapsed by default
  const [openCategoryIds, setOpenCategoryIds] = useState<Set<string>>(new Set());

  // Toggle single category
  const handleToggleCategory = (catId: string) => {
    setOpenCategoryIds((prev) => {
      const next = new Set(prev);
      if (next.has(catId)) {
        next.delete(catId);
      } else {
        next.add(catId);
      }
      return next;
    });
  };

  // Select category from CategoryNav or quick links
  const handleSelectCategory = (catId: string) => {
    setActiveCategoryId(catId);
    setOpenCategoryIds((prev) => new Set(prev).add(catId));
    const el = document.getElementById(`cat-${catId}`);
    if (el) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Open Executive Menu directly inside the standard cardápio accordion
  const handleOpenExecutive = () => {
    handleSelectCategory('executivo');
  };

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
            cat.id === 'panelinhas'
        );
      } else if (dietaryFilter === 'bebidas') {
        items = items.filter(
          (i) =>
            cat.id === 'bebidas-nao-alcoolicas' ||
            cat.id === 'cervejas-chopes' ||
            cat.id === 'drinks-bar' ||
            cat.id === 'destilados-licores'
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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00BCD4] selection:text-white relative">
      
      {/* Floating Menu Dock (accompanies user down until reaching cardápio) */}
      <FloatingMenuDock onOpenExecutive={handleOpenExecutive} />
      
      {/* 1. Header & Top Bar Navigation */}
      <Navbar
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenExecutive={handleOpenExecutive}
      />

      {/* 2. Hero Section */}
      <HeroBanner
        onOpenQuiz={() => setIsQuizOpen(true)}
        onExploreMenu={handleExploreMenu}
        onOpenExecutive={handleOpenExecutive}
      />

      {/* 3. Instagram Section (Placed immediately below Hero) */}
      <InstagramSection />

      {/* 4. Promotions & Happy Hour Section */}
      <PromotionsSection />

      {/* 5. Menu Anchor & Category Scroller */}
      <div id="cardapio" className="scroll-mt-20">
        <CategoryNav
          categories={MENU_CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelectCategory={handleSelectCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          dietaryFilter={dietaryFilter}
          onDietaryFilterChange={setDietaryFilter}
        />
      </div>

      {/* 6. Menu Content Area - Compact & Interactive */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Search / Filter Feedback */}
        {(searchQuery || dietaryFilter !== 'all') && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm">
            <div className="text-xs sm:text-sm text-slate-700">
              <span>Resultados: </span>
              {searchQuery && <strong className="text-cyan-700">"{searchQuery}" </strong>}
              {dietaryFilter !== 'all' && (
                <span className="text-slate-500 font-medium">({dietaryFilter})</span>
              )}
            </div>
            <button
              onClick={() => {
                soundFx.play('click');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="text-xs text-cyan-600 hover:text-cyan-700 hover:underline font-bold cursor-pointer"
            >
              {t.clearFilters}
            </button>
          </div>
        )}

        {/* Global Toolbar: Expand/Collapse All (Shown when not searching) */}
        {!searchQuery && dietaryFilter === 'all' && (
          <div className="flex items-center justify-between py-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-900 font-serif-heading">
                Categorias do Cardápio
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">
                (Toque em uma categoria para visualizar os pratos e preços)
              </span>
            </div>

            <button
              onClick={() => {
                soundFx.play('click');
                const isAllOpen = filteredCategories.every(c => openCategoryIds.has(c.id));
                if (isAllOpen) {
                  setOpenCategoryIds(new Set());
                } else {
                  setOpenCategoryIds(new Set(filteredCategories.map(c => c.id)));
                }
              }}
              className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 cursor-pointer transition-colors px-3 py-1.5 rounded-lg bg-cyan-50 hover:bg-cyan-100"
            >
              {filteredCategories.every(c => openCategoryIds.has(c.id)) ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span>Recolher Tudo</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  <span>Expandir Tudo</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Compact Expandable Categories (Cardápio Executivo is presented in the exact same format as normal categories) */}
        <div className="space-y-4">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <MenuSection
                key={category.id}
                category={category}
                isSearchActive={!!searchQuery || dietaryFilter !== 'all'}
                isExpanded={openCategoryIds.has(category.id)}
                onToggleExpand={() => handleToggleCategory(category.id)}
              />
            ))
          ) : (
            <div className="py-20 text-center space-y-3 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-lg text-slate-900 font-serif-heading">
                {t.noDishesFound}
              </p>
              <p className="text-xs sm:text-sm text-slate-500">
                {t.searchPlaceholder}
              </p>
              <button
                onClick={() => {
                  soundFx.play('click');
                  setSearchQuery('');
                  setDietaryFilter('all');
                }}
                className="mt-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
              >
                {t.filterAll}
              </button>
            </div>
          )}
        </div>

      </main>

      {/* Interactive Quiz do Sabor Banner in Flow */}
      <section className="bg-gradient-to-r from-cyan-900 via-slate-900 to-cyan-950 py-12 shadow-md text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{t.quizTitle}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white">
            {t.quizSubtitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t.heroStory}
          </p>
          <button
            onClick={() => {
              soundFx.play('click');
              setIsQuizOpen(true);
            }}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold text-sm transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.quizTitle}</span>
          </button>
        </div>
      </section>

      {/* 6.5 iFood Delivery Section (alternating photo and video in the same block) */}
      <IFoodSection />

      {/* 7. Google 5.0 ⭐ Reviews & Rating Section */}
      <GoogleReviewsSection />

      {/* 8. Frequently Asked Questions (FAQ) */}
      <FaqSection />

      {/* 9. Footer */}
      <Footer />

      {/* Real-time Google Reviews and Order Notifications */}
      <LiveNotificationsToast />

      {/* Interactive Taste Quiz Modal */}
      <TasteQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectRecommendedDish={handleSelectRecommendedDish}
      />

    </div>
  );
}
