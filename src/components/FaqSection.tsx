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
    <section id="faq" className="py-16 border-b border-[#1b4865] bg-[#091924]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-[#F4B41A] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>{t.faqBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-[#FFFFFF]">
            {t.faqTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#CAD8E2] max-w-xl mx-auto">
            {t.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#123b53] border-2 border-[#1b4865] overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#FFFFFF] group-hover:text-[#F4B41A] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#0d222e] text-[#F4B41A] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-[#1b4865]/60 text-xs sm:text-sm text-[#D7E3EC] leading-relaxed bg-[#0d222e]/40">
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
