import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, Copy, Check, Users, Receipt } from 'lucide-react';
import { OrderItem } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface TableOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearOrder: () => void;
}

export const TableOrderDrawer: React.FC<TableOrderDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
}) => {
  const { t } = useLanguage();
  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');
  const [includeServiceFee, setIncludeServiceFee] = useState(true);
  const [peopleCount, setPeopleCount] = useState(2);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const subtotal = orderItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const serviceFee = includeServiceFee ? subtotal * 0.1 : 0;
  const total = subtotal + serviceFee;
  const perPerson = peopleCount > 0 ? total / peopleCount : total;

  const generateOrderText = () => {
    let text = `📋 *PEDIDO / COMANDA - DIVINA GULA FRANCÊS*\n`;
    if (tableNumber) text += `📍 Local/Mesa: ${tableNumber}\n`;
    if (customerName) text += `👤 Cliente: ${customerName}\n`;
    text += `\n*ITENS SELECIONADOS:*\n`;
    orderItems.forEach((oi) => {
      text += `• ${oi.quantity}x ${oi.item.name} - R$ ${(oi.item.price * oi.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    text += `\nSubtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (includeServiceFee) {
      text += `\nTaxa de Serviço (10%): R$ ${serviceFee.toFixed(2).replace('.', ',')}`;
    }
    text += `\n*Total Estimado: R$ ${total.toFixed(2).replace('.', ',')}*`;
    if (peopleCount > 1) {
      text += ` (${peopleCount} pessoas = R$ ${perPerson.toFixed(2).replace('.', ',')}/pessoa)`;
    }
    if (notes) {
      text += `\n\nObservações: ${notes}`;
    }
    return text;
  };

  const handleCopy = () => {
    soundFx.play('click');
    navigator.clipboard.writeText(generateOrderText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = () => {
    soundFx.play('success');
    const encoded = encodeURIComponent(generateOrderText());
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-[#0c202d] h-full flex flex-col border-l-2 border-[#1b4865] shadow-2xl">
        
        {/* Header */}
        <div className="p-5 border-b border-[#1b4865] bg-[#0d222e] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Receipt className="w-5 h-5 text-[#F4B41A]" />
            <div>
              <h3 className="font-bold text-base text-[#FFFFFF] font-serif-heading">
                {t.orderDrawerTitle}
              </h3>
              <p className="text-[11px] text-[#A3B8C7]">
                {orderItems.length} {orderItems.length === 1 ? 'item' : 'itens'}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.play('click');
              onClose();
            }}
            className="p-2 text-[#A3B8C7] hover:text-white rounded-lg hover:bg-[#123b53]"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {orderItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#123b53] text-[#7A96A8] flex items-center justify-center border border-[#1b4865]">
                <Receipt className="w-6 h-6" />
              </div>
              <p className="text-sm text-[#CAD8E2]">{t.orderEmptyTitle}</p>
              <p className="text-xs text-[#7A96A8]">
                {t.orderEmptySubtitle}
              </p>
            </div>
          ) : (
            <>
              {/* Order Items List */}
              <div className="space-y-3 divide-y divide-[#153e58]">
                {orderItems.map((oi) => (
                  <div key={oi.item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-[#FFFFFF]">{oi.item.name}</h4>
                      <span className="text-xs text-[#F4B41A] font-bold font-mono tabular-nums">
                        R$ {(oi.item.price * oi.quantity).toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-[#123b53] rounded-lg border border-[#1b4865]">
                        <button
                          onClick={() => {
                            soundFx.play('pop');
                            onUpdateQuantity(oi.item.id, -1);
                          }}
                          className="p-1.5 text-[#CAD8E2] hover:text-white"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold font-mono text-[#FFFFFF]">
                          {oi.quantity}
                        </span>
                        <button
                          onClick={() => {
                            soundFx.play('add');
                            onUpdateQuantity(oi.item.id, 1);
                          }}
                          className="p-1.5 text-[#CAD8E2] hover:text-white"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          soundFx.play('pop');
                          onRemoveItem(oi.item.id);
                        }}
                        className="p-1.5 text-[#7A96A8] hover:text-red-400"
                        title={t.orderClear}
                        aria-label="Remover item da comanda"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table & Notes Form */}
              <div className="space-y-3 pt-4 border-t border-[#1b4865]">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] text-[#A3B8C7] font-medium block mb-1">
                      {t.orderTableInputLabel}
                    </label>
                    <input
                      type="text"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      placeholder={t.orderTableInputPlaceholder}
                      className="w-full px-3 py-1.5 bg-[#123b53] border border-[#1b4865] rounded-lg text-xs text-[#FFFFFF] placeholder-[#7A96A8] focus:outline-none focus:border-[#F4B41A]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#A3B8C7] font-medium block mb-1">
                      {t.orderNameInputLabel}
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={t.orderNameInputPlaceholder}
                      className="w-full px-3 py-1.5 bg-[#123b53] border border-[#1b4865] rounded-lg text-xs text-[#FFFFFF] placeholder-[#7A96A8] focus:outline-none focus:border-[#F4B41A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-[#A3B8C7] font-medium block mb-1">
                    {t.orderNotesInputLabel}
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.orderNotesInputPlaceholder}
                    className="w-full px-3 py-1.5 bg-[#123b53] border border-[#1b4865] rounded-lg text-xs text-[#FFFFFF] placeholder-[#7A96A8] focus:outline-none focus:border-[#F4B41A]"
                  />
                </div>
              </div>

              {/* Split Calculator */}
              <div className="p-3.5 rounded-xl bg-[#123b53] border border-[#1b4865] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-[#CAD8E2]">
                    <Users className="w-3.5 h-3.5 text-[#F4B41A]" />
                    <span>{t.orderSplitBillLabel}</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                      className="w-6 h-6 rounded bg-[#16374a] hover:bg-[#1b4865] text-white flex items-center justify-center text-xs"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-bold text-xs text-[#F4B41A] font-mono">
                      {peopleCount}
                    </span>
                    <button
                      onClick={() => setPeopleCount(peopleCount + 1)}
                      className="w-6 h-6 rounded bg-[#16374a] hover:bg-[#1b4865] text-white flex items-center justify-center text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
                {peopleCount > 1 && (
                  <div className="text-[11px] text-[#CAD8E2] flex justify-between pt-1 border-t border-[#1b4865]">
                    <span>{t.orderPerPerson}:</span>
                    <span className="font-bold text-[#FFFFFF] font-mono tabular-nums">
                      R$ {perPerson.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer with Totals & Actions */}
        {orderItems.length > 0 && (
          <div className="p-5 border-t border-[#1b4865] bg-[#0d222e] space-y-3.5">
            <div className="space-y-1.5 text-xs text-[#CAD8E2]">
              <div className="flex justify-between">
                <span>{t.orderSubtotal}</span>
                <span className="font-mono tabular-nums text-[#FFFFFF]">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeServiceFee}
                    onChange={(e) => setIncludeServiceFee(e.target.checked)}
                    className="rounded border-[#1b4865] text-[#F4B41A] focus:ring-0"
                  />
                  <span>{t.orderServiceFeeLabel}</span>
                </label>
                <span className="font-mono tabular-nums text-[#FFFFFF]">
                  R$ {serviceFee.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#FFFFFF] pt-2 border-t border-[#1b4865]">
                <span>{t.orderTotal}</span>
                <span className="text-[#F4B41A] font-mono tabular-nums">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:from-[#2ce06f] hover:to-[#22cf66] text-black font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.orderSendWhatsApp}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopy}
                  className="py-2.5 px-3 rounded-lg bg-[#123b53] hover:bg-[#184561] text-[#CAD8E2] text-xs font-semibold border border-[#1b4865] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.orderCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.orderCopyText}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    soundFx.play('pop');
                    onClearOrder();
                  }}
                  className="py-2.5 px-3 rounded-lg bg-[#123b53] hover:bg-red-950/40 text-[#A3B8C7] hover:text-red-300 text-xs font-semibold border border-[#1b4865] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t.orderClear}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
