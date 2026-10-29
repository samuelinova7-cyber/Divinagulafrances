import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const { t, faqList } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    soundFx.play('click');
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-cyan-600" />
            <span>{t.faqBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-slate-900">
            {t.faqTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            {t.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-cyan-700 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white text-slate-600 border border-slate-200 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-cyan-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
