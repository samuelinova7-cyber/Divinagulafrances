import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

interface IFoodButtonProps {
  className?: string;
  variant?: 'nav' | 'hero' | 'section' | 'footer';
  label?: string;
}

export const IFoodButton: React.FC<IFoodButtonProps> = ({
  className = '',
  variant = 'nav',
  label,
}) => {
  if (variant === 'nav') {
    return (
      <a
        href={RESTAURANT_INFO.ifoodUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-ifood-glow inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-black text-white rounded-lg sm:rounded-xl shadow-lg whitespace-nowrap cursor-pointer active:scale-95 shrink-0 relative overflow-hidden group border border-red-400/60 ${className}`}
        title="Pedir no iFood"
      >
        {/* Shimmer light sweep */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-20 animate-ifood-shimmer pointer-events-none" />
        
        <span className="w-2 h-2 rounded-full bg-white shadow-xs animate-ping shrink-0" />
        <span className="relative z-10 tracking-wide font-black">iFood</span>
      </a>
    );
  }

  if (variant === 'hero') {
    return (
      <a
        href={RESTAURANT_INFO.ifoodUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-ifood-glow w-full h-full p-3 sm:p-3.5 rounded-2xl transition-all flex flex-col items-center text-center gap-1.5 shadow-xl group cursor-pointer active:scale-95 relative text-white border-2 border-red-400/80 overflow-hidden ${className}`}
      >
        {/* Shimmer sweep */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20 animate-ifood-shimmer pointer-events-none" />

        <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded-full bg-white text-[#EA1D2C] text-[9px] font-black uppercase tracking-wider shadow-md animate-pulse">
          Delivery
        </span>
        <div className="w-10 h-10 rounded-xl bg-white text-[#EA1D2C] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
          <span className="font-black text-sm">iFood</span>
        </div>
        <span className="text-xs sm:text-sm font-bold text-white group-hover:text-red-100 transition-colors">
          {label || 'Pedir no iFood'}
        </span>
        <span className="text-[10px] text-red-100 line-clamp-1 font-medium">
          Entrega Rápida
        </span>
      </a>
    );
  }

  // Large Section / Footer CTA
  return (
    <a
      href={RESTAURANT_INFO.ifoodUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-ifood-glow w-full py-4 px-6 rounded-2xl text-white font-black text-base flex items-center justify-center gap-3 cursor-pointer group shadow-2xl relative overflow-hidden border-2 border-red-400/80 active:scale-98 transition-all ${className}`}
    >
      {/* Shimmer sweep */}
      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-20 animate-ifood-shimmer pointer-events-none" />

      <span className="w-2.5 h-2.5 rounded-full bg-white shadow animate-ping shrink-0" />
      <span className="relative z-10">{label || 'Pedir Agora pelo iFood'}</span>
    </a>
  );
};
