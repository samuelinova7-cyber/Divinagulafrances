import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface LanguageSelectorProps {
  variant?: 'compact' | 'full' | 'card';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'compact',
  className = '',
}) => {
  const { language, setLanguage, languages, currentLanguageOption } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    soundFx.play('click');
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${variant === 'card' ? 'w-full' : 'inline-block'} text-left ${className}`} ref={dropdownRef}>
      {variant === 'card' ? (
        <button
          type="button"
          onClick={() => {
            soundFx.play('pop');
            setIsOpen(!isOpen);
          }}
          className="w-full h-full p-3 sm:p-3.5 rounded-2xl bg-gradient-to-b from-[#163a50] to-[#0f2838] hover:from-[#1b4865] hover:to-[#123b53] border-2 border-[#1b4865] hover:border-[#F4B41A] transition-all flex flex-col items-center text-center gap-1.5 shadow-lg group cursor-pointer active:scale-95 relative"
          aria-label="Selecionar idioma / Select language"
          aria-expanded={isOpen}
        >
          <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded-full bg-[#1b4865] border border-[#23587b] text-[#CAD8E2] text-[9px] font-bold uppercase tracking-wider shadow">
            5 Idiomas
          </span>
          <div className="w-10 h-10 rounded-xl bg-[#1b4865] group-hover:bg-[#F4B41A] text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span role="img" aria-label={currentLanguageOption.label}>{currentLanguageOption.flag}</span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#F4B41A] transition-colors">
            {currentLanguageOption.nativeName}
          </span>
          <span className="text-[10px] text-[#A3B8C7] line-clamp-1 flex items-center gap-1">
            <span>Mudar Idioma</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </span>
        </button>
      ) : (
        /* Trigger Button showing the current flag */
        <button
          type="button"
          onClick={() => {
            soundFx.play('pop');
            setIsOpen(!isOpen);
          }}
          className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-1.5 rounded-lg sm:rounded-xl bg-[#123b53] hover:bg-[#184561] text-[#F8FAFC] border border-[#225779] transition-all text-xs font-semibold cursor-pointer shadow-sm active:scale-95"
          aria-label="Selecionar idioma / Select language"
          aria-expanded={isOpen}
        >
          <span className="text-base leading-none select-none" role="img" aria-label={currentLanguageOption.label}>
            {currentLanguageOption.flag}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#F4B41A] font-bold">
            {currentLanguageOption.code.toUpperCase()}
          </span>
          {variant === 'full' && (
            <span className="hidden sm:inline text-xs text-[#CAD8E2]">
              {currentLanguageOption.nativeName}
            </span>
          )}
          <ChevronDown className={`w-3.5 h-3.5 text-[#A3B8C7] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#0d222e] border-2 border-[#1b4865] shadow-2xl z-50 py-1.5 overflow-hidden animate-fadeIn">
          <div className="px-3 py-1.5 border-b border-[#1b4865] flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#A3B8C7]">
            <Globe className="w-3.5 h-3.5 text-[#F4B41A]" />
            <span>Idioma / Language</span>
          </div>

          <div className="py-1">
            {languages.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[#123b53] text-[#F4B41A] font-bold'
                      : 'text-[#CAD8E2] hover:bg-[#123b53]/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg leading-none" role="img" aria-label={lang.label}>
                      {lang.flag}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs leading-tight">{lang.nativeName}</span>
                      <span className="text-[10px] text-[#7A96A8] leading-tight font-mono">{lang.label}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#F4B41A]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
