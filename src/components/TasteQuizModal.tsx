import React, { useState } from 'react';
import { X, Sparkles, Star, Instagram, RotateCcw, Utensils, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { soundFx } from '../utils/audio';

interface TasteQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommendedDish: (dishName: string) => void;
}

interface Question {
  q: string;
  o: string[];
}

const QUIZ_DATA: Question[] = [
  { q: "1/12 - Qual é a sua vibe para começar o dia na Praia do Francês?", o: ["Curtir a brisa do mar com uma água de coco gelada", "Chegar com energia total para um mergulho"] },
  { q: "2/12 - Como prefere abrir o apetite (sua entradinha favorita)?", o: ["Um caldinho bem quentinho e aconchegante", "Petiscos crocantes para partilhar com os amigos"] },
  { q: "3/12 - Qual é a sua proteína principal de eleição?", o: ["Frutos do mar fresquinhos da costa", "Carnes vermelhas suculentas e saborosas"] },
  { q: "4/12 - Como você gosta da textura da comida?", o: ["Cremosa, com bastante queijo ou catupiry", "Grelhada na brasa com toque defumado"] },
  { q: "5/12 - Escolha um acompanhamento clássico brasileiro:", o: ["Arroz de castanha e purê de banana-da-terra", "Mandioca frita (macaxeira) bem crocante ou feijão tropeiro"] },
  { q: "6/12 - Qual é o estilo de prato que mais combina com você?", o: ["Uma moqueca caprichada bem servida", "Um grelhado robusto na brasa"] },
  { q: "7/12 - No quesito bebida, qual é a sua escolha número um?", o: ["Um drink especial da casa bem refrescante", "Um chopp bem gelado para o calor"] },
  { q: "8/12 - Prefere refeições leves ou pratos bem fartos para partilhar?", o: ["Prato individual na medida certa", "Pratos fartos para partilhar até 2 ou 3 pessoas"] },
  { q: "9/12 - Qual tempero ou toque regional não pode faltar?", o: ["Azeite de dendê e leite de coco", "Manteiga de garrafa e alho crocante"] },
  { q: "10/12 - Como você prefere finalizar a refeição (sobremesa)?", o: ["Algo doce com chocolate ou texturas cremosas", "Frutas regionais, castanhas ou um toque crocante de tapioca"] },
  { q: "11/12 - Qual é a sua principal companhia num almoço de restaurante?", o: ["Família reunida num domingo especial", "Amigos para botar a conversa em dia no happy hour"] },
  { q: "12/12 - Por fim, qual é a sua maior prioridade ao escolher onde comer?", o: ["Qualidade superior de comida brasileira autêntica", "Ambiente agradável com mesas externas e ótimo atendimento"] }
];

export const TasteQuizModal: React.FC<TasteQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectRecommendedDish,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scoreTypeA, setScoreTypeA] = useState(0); // Frutos do Mar / Moquecas / Leve
  const [scoreTypeB, setScoreTypeB] = useState(0); // Carnes / Brasa / Pratos da Casa
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (index: number) => {
    soundFx.play('click');
    if (index === 0) {
      setScoreTypeA((prev) => prev + 1);
    } else {
      setScoreTypeB((prev) => prev + 1);
    }

    if (currentStep + 1 < QUIZ_DATA.length) {
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
  const progressPercent = ((currentStep + (isFinished ? 1 : 0)) / QUIZ_DATA.length) * 100;

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
          aria-label="Fechar Quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFinished ? (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4B41A] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quiz do Sabor</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#FFFFFF]">
                Descubra seu Prato Ideal
              </h2>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] text-[#A3B8C7] font-mono">
                <span>Etapa {currentStep + 1} de {QUIZ_DATA.length}</span>
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
                {QUIZ_DATA[currentStep].q}
              </p>
            </div>

            {/* Options Buttons */}
            <div className="flex flex-col gap-3">
              {QUIZ_DATA[currentStep].o.map((optionText, idx) => (
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
                Resultado Personalizado
              </span>
              <h2 className="text-2xl font-bold font-serif-heading text-[#FFFFFF] mt-1">
                🎉 O seu Prato do Dia Ideal!
              </h2>
            </div>

            <div className="p-5 rounded-xl bg-[#123b53] border-2 border-[#F4B41A]/30 text-left text-xs sm:text-sm text-[#D7E3EC] leading-relaxed space-y-2">
              {isSeafoodWinner ? (
                <>
                  <p className="font-bold text-[#F4B41A] text-base">
                    🦐 Camarão Catupiry & Moqueca de Peixe
                  </p>
                  <p>
                    Com base nas suas escolhas, o seu prato ideal é a nossa deliciosa <strong>Moqueca em panela de barro</strong> ou o <strong>Camarão ao molho com Catupiry gratinado</strong>, acompanhado de arroz de castanha e purê de banana-da-terra! Perfeito para quem ama os sabores marcantes do mar alagoano.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-bold text-[#F4B41A] text-base">
                    🥩 Costela Minga ao Bafo ou Picanha na Brasa
                  </p>
                  <p>
                    O seu perfil pede robustez e sabor autêntico! O prato do dia ideal para você é a nossa <strong>Costela bovina cozida por 24h na manteiga de garrafa</strong> ou a <strong>Picanha na brasa</strong> com macaxeira frita bem dourada e farofa matuta. Suculência garantida!
                  </p>
                </>
              )}
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
                <span>Ver Pratos Recomendados no Cardápio</span>
              </button>

              <a
                href={RESTAURANT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.play('click')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Star className="w-4 h-4 fill-white" />
                <span>⭐ Avaliar no Google (5.0 Estrelas)</span>
              </a>

              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.play('click')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Instagram className="w-4 h-4" />
                <span>📸 Seguir no Instagram @divinagulafrances</span>
              </a>

              <button
                onClick={handleRestart}
                className="w-full py-2 px-4 text-xs text-[#A3B8C7] hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer o Quiz</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
