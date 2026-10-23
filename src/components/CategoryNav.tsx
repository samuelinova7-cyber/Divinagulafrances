import React from 'react';
import { Search, X, Filter } from 'lucide-react';
import { MenuCategory } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  dietaryFilter: string;
  onDietaryFilterChange: (filter: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  dietaryFilter,
  onDietaryFilterChange,
}) => {
  const { t, getCategoryLocalized } = useLanguage();

  const filterChips = [
    { id: 'all', label: t.filterAll },
    { id: 'frutos-mar', label: t.filterSeafood },
    { id: 'carnes', label: t.filterMeat },
    { id: 'petiscos', label: t.filterSnacks },
    { id: 'bebidas', label: t.filterDrinks },
    { id: 'sobremesas', label: t.filterDesserts },
    { id: 'sem-gluten', label: t.filterGlutenFreeBadge },
  ];

  return (
    <div className="sticky top-20 z-30 bg-[#0d222e]/95 backdrop-blur-md border-b border-[#1b4865] py-3.5 transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        
        {/* Top line: Search Bar + Filter Tags */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A96A8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9.5 pr-8 py-2 bg-[#123b53] border border-[#1b4865] rounded-lg text-xs sm:text-sm text-[#FFFFFF] placeholder-[#7A96A8] focus:outline-none focus:border-[#F4B41A] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  soundFx.play('click');
                  onSearchChange('');
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#7A96A8] hover:text-white"
                aria-label="Limpar busca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Dietary Filters (interactive segmented tabs with click handlers) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            <div className="flex items-center gap-1 text-[#7A96A8] pr-1 shrink-0 font-medium">
              <Filter className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Filtro:</span>
            </div>
            {filterChips.map((chip) => {
              const isActive = dietaryFilter === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => {
                    soundFx.play('click');
                    onDietaryFilterChange(chip.id);
                  }}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#F4B41A] text-[#0C202D] font-bold shadow-sm'
                      : 'bg-[#123b53] text-[#CAD8E2] hover:bg-[#184561] hover:text-white border border-[#1b4865]'
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Bottom line: Categories Horizontal Scroller */}
        {!searchQuery && dietaryFilter === 'all' && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none text-xs">
            {categories.map((cat) => {
              const localized = getCategoryLocalized(cat);
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundFx.play('click');
                    onSelectCategory(cat.id);
                    const el = document.getElementById(`cat-${cat.id}`);
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
                  }}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#16374a] text-[#F4B41A] border border-[#F4B41A]/50 font-bold shadow-sm'
                      : 'bg-[#0f2a3a] text-[#CAD8E2] hover:text-white hover:bg-[#123b53] border border-[#1b4865]'
                  }`}
                >
                  <span>{localized.title}</span>
                  <span className="text-[10px] text-[#7A96A8] font-mono tabular-nums">
                    ({cat.items.length})
                  </span>
                </button>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
