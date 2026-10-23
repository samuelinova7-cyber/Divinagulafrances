import React, { useState } from 'react';
import { X, Sparkles, Star, Instagram, RotateCcw, Utensils, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface TasteQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommendedDish: (dishName: string) => void;
}

export const TasteQuizModal: React.FC<TasteQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectRecommendedDish,
}) => {
  const { t, quizQuestions } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [scoreTypeA, setScoreTypeA] = useState(0); // Seafood / Coastal / Moqueca
  const [scoreTypeB, setScoreTypeB] = useState(0); // Meats / Charcoal Grill
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = quizQuestions[currentStep] || quizQuestions[0];

  const handleSelectOption = (index: number) => {
    soundFx.play('click');
    if (index === 0) {
      setScoreTypeA((prev) => prev + 1);
    } else {
      setScoreTypeB((prev) => prev + 1);
    }

    if (currentStep + 1 < quizQuestions.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      soundFx.play('success');
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    soundFx.play('click');
    setCurrentStep(0);
    setScoreTypeA(0);
    setScoreTypeB(0);
    setIsFinished(false);
  };

  const isSeafoodWinner = scoreTypeA >= scoreTypeB;
  const progressPercent = ((currentStep + (isFinished ? 1 : 0)) / quizQuestions.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0c202d] border-2 border-[#F4B41A] rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.play('click');
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-[#A3B8C7] hover:text-white rounded-lg hover:bg-[#123b53] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFinished ? (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4B41A] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.quizTitle}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#FFFFFF]">
                {t.quizSubtitle}
              </h2>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] text-[#A3B8C7] font-mono">
                <span>{t.quizQuestionOf} {currentStep + 1} / {quizQuestions.length}</span>
                <span>{Math.round(progressPercent)}%</span>
              </div>
              <div className="w-full h-2.5 bg-[#123b53] rounded-full overflow-hidden border border-[#1b4865]">
                <div
                  className="h-full bg-gradient-to-r from-[#F4B41A] to-[#F7C438] transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="min-h-[70px] flex items-center justify-center">
              <p className="text-base sm:text-lg font-medium text-[#FFFFFF] leading-snug">
                {currentQ.q}
              </p>
            </div>

            {/* Options Buttons */}
            <div className="flex flex-col gap-3">
              {currentQ.o.map((optionText, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className="w-full p-4 rounded-xl bg-[#123b53] hover:bg-[#F4B41A] text-[#F8FAFC] hover:text-[#0C202D] font-medium text-sm text-left border border-[#1b4865] hover:border-[#F4B41A] transition-all transform active:scale-[0.99] flex items-start gap-3 cursor-pointer group shadow-sm"
                >
                  <span className="w-5 h-5 rounded-full border border-[#326280] group-hover:border-[#0C202D] flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-mono font-bold">
                    {idx === 0 ? 'A' : 'B'}
                  </span>
                  <span className="flex-1 leading-relaxed">{optionText}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="space-y-6 animate-fadeIn py-2">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#F4B41A]/15 border border-[#F4B41A]/40 flex items-center justify-center text-[#F4B41A]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4B41A]">
                {t.quizTitle}
              </span>
              <h2 className="text-2xl font-bold font-serif-heading text-[#FFFFFF] mt-1">
                {isSeafoodWinner ? t.quizSeafoodResultTitle : t.quizMeatResultTitle}
              </h2>
            </div>

            <div className="p-5 rounded-xl bg-[#123b53] border-2 border-[#F4B41A]/30 text-left text-xs sm:text-sm text-[#D7E3EC] leading-relaxed space-y-2">
              <p className="font-bold text-[#F4B41A] text-base">
                {isSeafoodWinner ? `🦐 ${t.quizSeafoodResultDish}` : `🥩 ${t.quizMeatResultDish}`}
              </p>
              <p>
                {isSeafoodWinner ? t.quizSeafoodResultDesc : t.quizMeatResultDesc}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={() => {
                  soundFx.play('click');
                  onClose();
                  onSelectRecommendedDish(isSeafoodWinner ? 'camarão' : 'picanha');
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F4B41A] to-[#E5A912] text-[#0C202D] font-bold text-sm hover:from-[#F7C438] hover:to-[#F4B41A] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Utensils className="w-4 h-4" />
                <span>{t.quizSeeDishInMenu}</span>
              </button>

              <a
                href={RESTAURANT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.play('click')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Star className="w-4 h-4 fill-white" />
                <span>⭐ Google Reviews (5.0)</span>
              </a>

              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.play('click')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Instagram className="w-4 h-4" />
                <span>📸 Instagram {RESTAURANT_INFO.instagram}</span>
              </a>

              <button
                onClick={handleRestart}
                className="w-full py-2 px-4 text-xs text-[#A3B8C7] hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.quizRetake}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
