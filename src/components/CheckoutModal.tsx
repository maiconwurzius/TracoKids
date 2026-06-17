import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Mail, CreditCard, Check, Sparkles, X, Printer, ArrowRight, Smartphone, BookOpen, AlertCircle } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<number>(1); // 1: Info Form, 2: Payment Selector, 3: Success Download
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Por favor, preencha seu nome e e-mail para receber o material.");
      return;
    }
    setStep(2);
  };

  const executePaymentSimulation = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl border-4 border-slate-800 text-slate-800 overflow-hidden z-10 max-h-[90vh] flex flex-col justify-between">
        
        {/* Header ribbon */}
        <div className="bg-slate-900 text-white p-4 flex justify-between items-center px-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-yellow-400" />
            <span className="text-xs font-black uppercase tracking-wider">COMPRA SEGURA SIMULADA</span>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-grow">
          
          {/* Discount Tag banner */}
          {step < 3 && (
            <div className="bg-red-50 text-red-700 text-xs font-bold p-3 rounded-xl mb-6 text-center border border-red-100 flex items-center justify-center gap-1.5 animate-pulse">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span>SUPER DESCONTO ATIVADO: <strong>De R$ 67,00 por apenas R$ 17,90!</strong></span>
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* STEP 1: Personal Data Form */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-extrabold text-slate-900 leading-tight">Onde enviamos seu material?</h4>
                  <p className="text-slate-500 text-xs mt-1">
                    Preencha os campos abaixo de maneira correta para simular o recebimento instantâneo no e-mail informado.
                  </p>
                </div>

                <form onSubmit={handleInfoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                      Nome Completo do Responsável
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Amanda Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                      E-mail Principal para Envio
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 opacity-40 text-slate-500" />
                      <input 
                        type="email" 
                        required
                        placeholder="Ex: amanda@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-sm transition-all"
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      Evite colocar e-mails corporativos para garantir entrega imediata na caixa de entrada.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp com DDD (Opcional)
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 opacity-40 text-slate-500" />
                      <input 
                        type="tel" 
                        placeholder="Ex: (11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-black text-sm rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-6 active:translate-y-0.5"
                  >
                    CONTINUAR PARA O PAGAMENTO
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 2: Payment Simulator Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-lg font-black text-slate-900 text-center">Falta Pouco! Escolha a Forma de Pagamento</h4>
                  <div className="text-[11px] text-slate-500 mt-0.5 text-center flex items-center justify-center gap-1.5">
                    <span>Enviando para: <strong>{formData.email}</strong></span>
                    <button onClick={() => setStep(1)} className="text-purple-600 underline font-semibold text-[10px]">Alterar</button>
                  </div>
                </div>

                {/* Tab select methods */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3.5 rounded-xl border-2 flex items-center justify-center gap-2 font-extrabold text-xs cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-emerald-500 font-black">Pix</span>
                    <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded font-black">IMEDIATO</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3.5 rounded-xl border-2 flex items-center justify-center gap-2 font-extrabold text-xs cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-purple-500 bg-purple-50 text-purple-800'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-purple-500" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>

                {/* Dynamic Payment Details */}
                {paymentMethod === 'pix' ? (
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 border border-slate-200 rounded-2xl text-center">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">VALOR PROMOCIONAL ÚNICO</div>
                      <div className="text-3xl font-black text-slate-900 mt-1">R$ 17,90</div>
                      <p className="text-[10px] text-slate-400 mt-1">Sem mensalidades, acesso vitalício com atualizações.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3">
                      {/* Pix Mock QR */}
                      <div className="w-32 h-32 bg-slate-100 flex items-center justify-center border-2 border-slate-300 rounded-xl relative overflow-hidden p-2">
                        <img 
                          src="https://picsum.photos/seed/pixqr/150/150" 
                          alt="Pix QR Code" 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover rounded opacity-80"
                        />
                        <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center">
                          <span className="bg-slate-900 text-white font-extrabold text-[9px] px-2 py-1 rounded">CÓDIGO PIX</span>
                        </div>
                      </div>

                      <div className="w-full text-center">
                        <span className="text-[10px] bg-slate-100 px-3 py-1.5 rounded-lg font-mono font-bold text-slate-600 select-all border border-slate-200 block truncate max-w-xs mx-auto">
                          00020101021226870014BR.GOV.BCB.PIX2565traco_demo_pix_key_1790
                        </span>
                        <p className="text-[9px] text-slate-400 font-semibold mt-1">Clique para selecionar e copiar a chave Pix acima</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 border border-slate-200 rounded-2xl flex justify-between items-center">
                      <div>
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">SUBTOTAL</div>
                        <div className="text-xl font-black text-slate-800">R$ 17,90</div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 font-bold bg-slate-200/60 px-2 py-1 rounded">2x de R$ 9,40</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-black text-slate-650 uppercase tracking-wider mb-1">Nome Impresso no Cartão</label>
                        <input 
                          type="text" 
                          placeholder="EX: MARIA S OLIVEIRA"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value.toUpperCase())}
                          className="w-full px-3 py-2.5 rounded-lg border-2 border-slate-200 text-xs focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-black text-slate-650 uppercase tracking-wider mb-1">Número do Cartão</label>
                          <input 
                            type="text" 
                            maxLength={19}
                            placeholder="4444 5555 6666 7777"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-lg border-2 border-slate-200 text-xs focus:border-purple-500 focus:outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-black text-slate-650 uppercase tracking-wider mb-1">Valid.</label>
                            <input type="text" placeholder="MM/AA" className="w-full px-3.5 py-2.5 rounded-lg border-2 border-slate-200 text-xs text-center" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black text-slate-650 uppercase tracking-wider mb-1">CVV</label>
                            <input type="text" placeholder="123" className="w-full px-3.5 py-2.5 rounded-lg border-2 border-slate-200 text-xs text-center" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Process simulated payment action */}
                <div className="space-y-2">
                  <button
                    onClick={executePaymentSimulation}
                    disabled={isProcessing}
                    className={`w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 ${
                      isProcessing ? 'opacity-80 cursor-wait' : ''
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        PROCESSANDO PAGAMENTO...
                      </>
                    ) : (
                      <>
                        <Check className="w-5 h-5" />
                        CONFIRMAR COMPRA SIMULADA
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 font-bold text-center flex items-center justify-center gap-1">
                    🔒 SSL SECURE ENCRYPTION · AMBIENTE INTEGRADO DE TESTES · NENHUM VALOR DE FATO SERÁ COBRADO
                  </p>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Success Download Area */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="text-center py-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-extrabold text-emerald-800">Parabéns! Pagamento Confirmado! 🥳</h4>
                  <p className="text-slate-600 text-xs mt-1 max-w-xs mx-auto">
                    O material digital foi enviado automaticamente para: <strong>{formData.email}</strong>
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-black text-slate-700 uppercase tracking-widest">KIT DO TRAÇO KIDS PRONTO:</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { name: "Caderno 1: Coordenação Motora Fina (50 pág.)", size: "12 MB" },
                      { name: "Caderno 2: Alfabeto Completo e Associação (55 pág.)", size: "14 MB" },
                      { name: "Caderno 3: Sílabas Ativas e Sílabas Complexas (50 pág.)", size: "11 MB" },
                      { name: "Caderno 4: Palavras Simples e Exercícios (45 pág.)", size: "9 MB" },
                      { name: "Caderno 5: Frases Curtas e Leitura Prática (40 pág.)", size: "8 MB" },
                      { name: "Bônus Especial: 30 Desenhos para Colorir e Recortar", size: "6 MB" }
                    ].map((material, i) => (
                      <div 
                        key={i} 
                        className="bg-slate-50 hover:bg-slate-100 p-3 rounded-xl border border-slate-200 flex justify-between items-center transition-colors"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Printer className={`w-4 h-4 flex-shrink-0 ${i === 5 ? 'text-amber-500' : 'text-purple-500'}`} />
                          <span className="text-xs font-extrabold text-slate-700 truncate">{material.name}</span>
                        </div>
                        <a 
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            alert(`Simulação de Download: Baixando arquivo PDF - "${material.name}". No processo real, o PDF é aberto instantaneamente para impressão.`);
                          }}
                          className="text-[10px] font-black text-purple-600 hover:text-purple-800 uppercase hover:underline ml-2 flex-shrink-0"
                        >
                          BAIXAR ({material.size})
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 border border-yellow-250 rounded-xl flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-[11px] text-slate-650 leading-relaxed">
                    <strong>Importante:</strong> Este é um produto digital em formato PDF de alta resolução. Você pode imprimir as páginas na sua própria impressora em casa ou em qualquer gráfica do seu bairro quantas vezes desejar!
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      setStep(1);
                    }}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl"
                  >
                    FECHAR DIÁLOGO
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
