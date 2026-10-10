import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { soundFx } from '../utils/audio';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: "Onde o Divina Gula Francês está localizado?",
    answer: `Estamos localizados na ${RESTAURANT_INFO.address}, em frente à famosa La Rue, no coração da Praia do Francês, Marechal Deodoro - AL.`
  },
  {
    question: "Como faço para reservar uma mesa?",
    answer: "Você pode fazer sua reserva de forma rápida e prática clicando no botão 'Reservas' no topo da página ou através do nosso WhatsApp oficial (82) 99999-9999."
  },
  {
    question: "Quais são os dias e horários de funcionamento?",
    answer: "Funcionamos de Terça a Quinta das 12h às 23h, Sexta e Sábado das 12h às 00h, e aos Domingos das 12h às 22h. Às segundas-feiras estamos fechados para descanso da equipe."
  },
  {
    question: "O restaurante possui opções sem glúten?",
    answer: "Sim! Temos excelentes opções como o famoso Bolinho de Camarão feito com massa de macaxeira, cervejas artesanais sem glúten (Praya e Amstel Ultra), além de pratos com mandioca e acompanhamentos seguros."
  },
  {
    question: "Como funciona o Happy Hour?",
    answer: "Nosso Happy Hour acontece de Terça a Sexta, das 16h às 19h, com preços especiais em Chopp Amstel (R$ 6,50), Chopp Heineken (R$ 8,90) e Caipiroska Tradicional (R$ 14,90)."
  },
  {
    question: "O Divina Gula Francês é adequado para crianças (Menu Infantil)?",
    answer: "Sim! Oferecemos o Menu Infantil com porções individuais equilibradas como Picadinho de Filé, Picadinho de Frango e Peixinho empanado com batatas fritas."
  },
  {
    question: "Quais são as principais especialidades da casa?",
    answer: "Nossos destaques incluem as Moquecas borbulhantes na panela de barro (Camarão, Peixe e Polvo), a Costela Minga cozida por 24h a 45h, o Atolado de Camarão e a Picanha na brasa."
  },
  {
    question: "É permitido animais de estimação (Pet Friendly)?",
    answer: "Sim, aceitamos pets de pequeno porte na nossa área externa voltada para a calçada e brisa da praia, com total conforto para você e seu companheiro."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartões de crédito e débito das principais bandeiras, Pix, dinheiro e pagamento via comanda digital direto no seu celular."
  },
  {
    question: "Posso fazer pedidos para viagem ou delivery?",
    answer: "Sim, você pode montar seu pedido em nossa comanda digital e enviar diretamente pelo WhatsApp para retirada no balcão ou entrega na região da Praia do Francês."
  }
];

export const FaqSection: React.FC = () => {
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
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-[#FFFFFF]">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-[#CAD8E2] max-w-xl mx-auto">
            Tudo o que você precisa saber sobre o Divina Gula Francês, reservas, cardápio e funcionamento.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
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
