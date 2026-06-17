import React, { useState, useEffect } from 'react';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  Star, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Printer, 
  ChevronRight, 
  Lock, 
  ChevronDown, 
  Heart,
  MessageCircle,
  Clock,
  BookOpen,
  X,
  CreditCard,
  Smartphone,
  Award
} from 'lucide-react';

// Import our custom interactive components
import CheckoutModal from './components/CheckoutModal';

// Path for our high resolution generated image asset representing the physical-looking sheets
const heroImage = "/src/assets/images/traco_kids_hero_1781710173235.jpg";

// Helper to track Meta Pixel simulated events
function trackPixelSimulated(eventName: string, params?: any) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params);
  }
  console.log(`[Meta Pixel Event]: ${eventName}`, params || '');
}

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Dynamic high-converting countdown timer (Ticks every second to boost urgency)
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 54 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 9, seconds: 54 }; // Restart or default
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOpenCheckout = (origin: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    trackPixelSimulated('InitiateCheckout', { origin_section: origin });
    const baseUrl = 'https://pay.wiapy.com/11hogzugB6';
    const search = typeof window !== 'undefined' ? window.location.search : '';
    window.location.href = `${baseUrl}${search}`;
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Modules list exactly corresponding to the physical notebooks in the screenshot
  const MODULES = [
    {
      num: "01",
      title: "Coordenação Motora",
      desc: "A base de tudo. Traçados, linhas e curvas divertidas que preparam a mão da criança para escrever com firmeza e postura correta.",
      tags: ["Traçados", "Linhas", "Esferas", "Precisão"],
      icon: "✍️",
      worksheet: {
        headerBg: "bg-[#BA3C13]",
        headerText: "MÓDULO 1 - TRAÇADOS",
        instruction: "Cubra os traçados pontilhados sem tirar o lápis do papel.",
        preview: (
          <div className="space-y-1.5 py-0.5 select-none pointer-events-none">
            {/* Curvy Dotted Lines with colorful pins representing real worksheets */}
            <div className="relative h-6 w-full flex items-center justify-between px-2">
              <span className="text-xs z-10">✏️</span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 24" fill="none">
                <path d="M 15 12 Q 50 2, 85 12 T 155 12 T 225 12" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4,5" />
                <circle cx="15" cy="12" r="3" fill="#3B82F6" />
                <circle cx="85" cy="12" r="3" fill="#10B981" />
                <circle cx="155" cy="12" r="3" fill="#F59E0B" />
                <circle cx="225" cy="12" r="3" fill="#EF4444" />
              </svg>
              <span className="text-xs z-10">🧁</span>
            </div>
            {/* Zigzag Dotted Lines */}
            <div className="relative h-6 w-full flex items-center justify-between px-2">
              <span className="text-xs z-10">✏️</span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 24" fill="none">
                <path d="M 15 12 L 50 3 L 85 21 L 120 3 L 155 21 L 190 3 L 225 18" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4,5" />
                <circle cx="15" cy="12" r="3" fill="#EF4444" />
                <circle cx="50" cy="3" r="3" fill="#3B82F6" />
                <circle cx="120" cy="3" r="3" fill="#10B981" />
                <circle cx="190" cy="3" r="3" fill="#FAF1E3" stroke="#C2410C" strokeWidth="1.5" />
              </svg>
              <span className="text-xs z-10">🌟</span>
            </div>
          </div>
        ),
        page: "06"
      }
    },
    {
      num: "02",
      title: "Alfabeto Completo",
      desc: "Reconhecimento lúdico e intuitivo das letras, maiúsculas e minúsculas, com suporte visual de animais fofos e associação direta.",
      tags: ["Letras", "Maiúsculas", "Minúsculas", "Caligrafia"],
      icon: "🅰️",
      worksheet: {
        headerBg: "bg-[#D97706]",
        headerText: "MÓDULO 2 - ALFABETO",
        instruction: "Vamos treinar a Letra A — cubra e copie as letras!",
        preview: (
          <div className="space-y-1.5 py-0.5 select-none pointer-events-none text-center">
            <div className="flex justify-around items-center">
              <div className="text-center">
                <span className="text-2xl font-extrabold text-slate-300 border-2 border-dashed border-slate-300 rounded-lg px-2 block">A</span>
                <span className="text-[7px] font-black text-slate-400 mt-0.5 uppercase tracking-widest block">CUBRA</span>
              </div>
              <div className="text-center font-mono">
                <div className="flex gap-1 justify-center">
                  <span className="text-xs font-black text-slate-300 border border-dashed border-slate-300 px-0.5 rounded block">A</span>
                  <span className="text-xs font-black text-slate-300 border border-dashed border-slate-300 px-0.5 rounded block">A</span>
                  <span className="text-xs font-black text-slate-300 border border-dashed border-slate-300 px-0.5 rounded block">A</span>
                </div>
                <span className="text-[7px] font-black text-slate-400 mt-0.5 uppercase tracking-widest block">REPETIR</span>
              </div>
              <div className="text-center">
                <span className="w-8 h-8 border border-amber-300 rounded-lg flex items-center justify-center text-[8px] font-black text-amber-700 bg-amber-50">LIVRE</span>
                <span className="text-[7px] font-black text-slate-400 mt-0.5 uppercase tracking-widest block">ESCREVER</span>
              </div>
            </div>
          </div>
        ),
        page: "18"
      }
    },
    {
      num: "03",
      title: "Sílabas Simples",
      desc: "Introdução suave e descontraída à junção fonética natural das consoantes com vogais, ensinando o poder da junção silábica.",
      tags: ["Junção Fonética", "Silabação", "Sons"],
      icon: "🗣️",
      worksheet: {
        headerBg: "bg-[#059669]",
        headerText: "MÓDULO 3 - SÍLABAS",
        instruction: "Ligue a consoante com cada vogal para formar a sílaba.",
        preview: (
          <div className="space-y-1 py-0.5 select-none pointer-events-none">
            <div className="flex justify-center items-center gap-3 text-xs font-black">
              <div className="bg-slate-100 px-2 py-1 rounded-md border border-slate-200 text-[10px]">B</div>
              <span className="text-slate-400 text-sm">+</span>
              <div className="flex flex-col gap-0 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 text-[8px] text-emerald-800">
                <span>A ➔ ba</span>
                <span>E ➔ be</span>
              </div>
              <span className="text-slate-400 text-sm">➔</span>
              <div className="flex gap-1 animate-pulse">
                <span className="border border-dashed border-slate-300 p-0.5 px-1 rounded bg-white text-[9px] text-slate-300 font-bold">ba</span>
                <span className="border border-dashed border-slate-300 p-0.5 px-1 rounded bg-white text-[9px] text-slate-300 font-bold">be</span>
              </div>
            </div>
          </div>
        ),
        page: "35"
      }
    },
    {
      num: "04",
      title: "Palavras Ativas",
      desc: "Interação inteligente de montagem onde o pequeno liga as sílabas e as escreve, formando suas primeiras palavras autônomas.",
      tags: ["Escrita Ativa", "Associação", "Palavrinhas"],
      icon: "🎯",
      worksheet: {
        headerBg: "bg-[#2563EB]",
        headerText: "MÓDULO 4 - PALAVRAS",
        instruction: "Tema Animais: Observe, leia e copie cada palavra!",
        preview: (
          <div className="space-y-1 py-0.5 select-none pointer-events-none">
            <div className="flex items-center justify-between bg-slate-50 px-2.5 py-0.5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">🦁</span>
                <span className="text-[10px] font-black text-slate-700">leão</span>
              </div>
              <div className="border-b border-dashed border-[#C2410C]/80 w-16 h-1"></div>
            </div>
            <div className="flex items-center justify-between bg-slate-50 px-2.5 py-0.5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">🐯</span>
                <span className="text-[10px] font-black text-slate-700">tigre</span>
              </div>
              <div className="border-b border-dashed border-[#C2410C]/80 w-16 h-1"></div>
            </div>
          </div>
        ),
        page: "52"
      }
    },
    {
      num: "05",
      title: "Frases Curtas",
      desc: "Elevação natural da fluência leitora da criança através de pequenas narrativas guiadas, finalizando com o certificado comemorativo.",
      tags: ["Fluência de Leitura", "Historinhas", "Certificado"],
      icon: "🏆",
      worksheet: {
        headerBg: "bg-[#7C3AED]",
        headerText: "MÓDULO 5 - FRASES",
        instruction: "Leia bem alto e pratique copiando a frase inteira.",
        preview: (
          <div className="space-y-1 py-0.5 select-none pointer-events-none text-left">
            <div className="bg-purple-50/50 p-1.5 rounded-md border border-purple-100">
              <p className="text-[8px] font-black text-slate-800 leading-tight">O macaco mimi come banana.</p>
              <div className="border-b border-dashed border-[#C2410C]/45 w-full h-2 mt-0.5"></div>
            </div>
            <div className="bg-purple-50/50 p-1.5 rounded-md border border-purple-100">
              <p className="text-[8px] font-black text-slate-800 leading-tight">A abelha ama as flores do jardim.</p>
              <div className="border-b border-dashed border-[#C2410C]/45 w-full h-2 mt-0.5"></div>
            </div>
          </div>
        ),
        page: "90"
      }
    }
  ];

  // Carousel/Slide tracker state for the Modules on Mobile (simulated)
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const nextModule = () => {
    setActiveModuleIndex((prev) => (prev + 1) % MODULES.length);
  };

  const prevModule = () => {
    setActiveModuleIndex((prev) => (prev - 1 + MODULES.length) % MODULES.length);
  };

  return (
    <div id="landing-page-root" className="min-h-screen flex flex-col font-sans bg-[#FCF8F2] text-[#2C241E] antialiased">
      
      {/* 1. DYNAMIC TOP BAR (Aviso Urgente de Tráfego Ads - CRO Otimizado com Cores Refinadas) */}
      <div id="ads-header-announcement" className="bg-[#BA3C13] text-[#FAF6EE] text-center py-2.5 px-4 text-[10px] md:text-xs font-bold tracking-wider flex items-center justify-center gap-2 z-30 shadow-md">
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse flex-shrink-0" />
        <span>✨ OFERTA EXCLUSIVA: 78% DE DESCONTO SOMENTE HOJE.</span>
      </div>

      {/* 2. MAIN HEADER (Logo Oficial + Material Oficial Red Badge) */}
      <header id="main-site-header" className="bg-[#FCF8F2]/90 backdrop-blur-md border-b border-[#EAE3D5]/80 py-4 px-6 sticky top-0 z-40 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div id="site-branding" className="flex items-center gap-2 select-none">
            <div className="w-8 h-8 bg-[#C2410C] rounded-xl flex items-center justify-center text-white font-black text-base shadow-md">T</div>
            <span className="font-extrabold text-xl tracking-tight text-[#2C241E]">
              Traço<span className="text-[#C2410C]">Kids</span>
            </span>
          </div>

          {/* Red official pill badge to reinforce authenticity on Cold Traffic */}
          <div id="official-badge" className="bg-[#4E3F35] text-[#FAF6EE] px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2 select-none shadow-sm hover:bg-[#3d3129] transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            MATERIAL OFICIAL
          </div>
        </div>
      </header>

      {/* 3. HERO / VALUE PROPOSITION SECTION */}
      <section id="hero-value-proposition" className="py-12 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side Content column */}
        <div id="hero-content-column" className="lg:col-span-7 space-y-7 text-center lg:text-left">
          
          {/* Proof rating pill above headline */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-[#FAF1E3] border border-[#E4D9C5] text-[#7A5B43] px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">
            <div className="flex gap-0.5 select-none text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>DIFICULDADE COM TELAS?</span>
            <span className="text-[#C2410C]">• RECOMENDADO DE 3 A 7 ANOS</span>
          </div>

          <h1 id="main-conversion-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-[900] leading-[1.12] tracking-tight text-[#241B15]">
            Tire seu filho do celular com <span className="text-[#C2410C] border-b-4 border-dashed border-[#C2410C]/30 pb-1">atividades que realmente prendem a atenção.</span>
          </h1>

          <p id="hero-persuasive-description" className="text-[#55463C] text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Mais de 1.500 atividades educativas prontas para imprimir que desenvolvem a coordenação motora fina, alfabetização natural e o foco cognitivo de maneira divertida e leve.
          </p>

          {/* Primary CTA (Immediate Purchase in Vermilion Orange with pulse design and subtext) */}
          <div id="hero-action-box" className="pt-2 flex flex-col items-center lg:items-start gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#oferta"
              id="hero-buy-button"
              className="w-full sm:w-auto px-9 py-5 bg-[#C2410C] hover:bg-[#A0350B] text-[#FAF6EE] font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer text-sm md:text-base tracking-widest uppercase relative overflow-hidden group border-b-4 border-[#8C2E08] inline-flex"
            >
              {/* Inner glowing reflection effect */}
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              <span>QUERO MEU KIT AGORA</span>
              <ArrowRight className="w-5 h-5 text-[#FAF6EE] stroke-[3]" />
            </motion.a>

            {/* Subtext to break click friction */}
            <div className="text-[11px] text-[#806E61] font-bold flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> COMPRA SEGURA • AMADO POR +3.200 PAIS BRASILEIROS
            </div>

            {/* Quick trust flags */}
            <div id="hero-trust-indicators" className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1.5 text-xs text-[#736053] font-bold pt-1">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Acesso imediato no e-mail
              </span>
              <span className="text-[#3D3129] hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-[#55463C]">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Imprima quantas vezes precisar
              </span>
              <span className="text-[#3D3129] hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-[#55463C]">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Garantia de 7 dias
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Visual Column (Screenshot High-Conversion mockup representation) */}
        <div id="hero-visual-column" className="lg:col-span-5 flex justify-center">
          <div className="relative">
            {/* Soft backdrop decorative shadow shape */}
            <div className="absolute inset-0 bg-[#EFE9DB] rounded-[32px] transform rotate-3 scale-[1.03] -z-10 shadow-lg"></div>

            <div id="hero-activity-mockup" className="relative bg-white p-5 rounded-[32px] border border-[#E4D9C5] shadow-2xl max-w-sm sm:max-w-md text-[#2C241E]">
              
              {/* Illustrated printed page representing Módulo 4 - Palavras */}
              <div className="bg-[#FAF8F5] border border-[#EAE3D5] rounded-2xl p-4 sm:p-6 select-none shadow-sm">
                {/* Simulated TracoKids printed sheet wrapper */}
                <div className="flex justify-between items-center border-b border-[#EADFCB] pb-2.5 mb-4">
                  <div className="text-[10px] font-black tracking-wider text-[#736053] uppercase">TraçoKids</div>
                  <div className="text-[9px] font-black bg-[#C2410C] text-white px-2 py-0.5 rounded uppercase">MÓDULO 4 - PALAVRAS</div>
                </div>

                <div className="space-y-1.5 mb-4 text-left">
                  <div className="text-[10px] font-bold text-slate-400">Nome: _________________  Data: __/__/____</div>
                  <h4 className="text-xs font-black text-[#2C241E] mt-2">Tema: Animais — Observe, leia e copie cada palavra!</h4>
                </div>

                {/* Simulated handwriting tracing tasks inside the book preview */}
                <div className="space-y-4">
                  {/* Task 1: Leão */}
                  <div className="bg-white p-2.5 text-left rounded-xl border border-[#EFE9DB] flex items-center justify-between gap-3 shadow-sm hover:border-[#C2410C]/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FCF5E3] rounded-lg flex items-center justify-center text-sm shadow-inner font-sans">🦁</div>
                      <div>
                        <div className="text-xs font-black text-[#2C241E]">leão</div>
                        <div className="text-[9px] text-slate-400 font-bold">L - E - Ã - O</div>
                      </div>
                    </div>
                    {/* Trace exercise illustration line */}
                    <div className="border-b-2 border-dashed border-[#C2410C] w-24 h-4 mr-2 opacity-80"></div>
                  </div>

                  {/* Task 2: Tigre */}
                  <div className="bg-white p-2.5 text-left rounded-xl border border-[#EFE9DB] flex items-center justify-between gap-3 shadow-sm hover:border-[#C2410C]/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FAF1E3] rounded-lg flex items-center justify-center text-sm shadow-inner font-sans">🐯</div>
                      <div>
                        <div className="text-xs font-black text-[#2C241E]">tigre</div>
                        <div className="text-[9px] text-slate-400 font-bold">T - I - G - R - E</div>
                      </div>
                    </div>
                    <div className="border-b-2 border-dashed border-[#C2410C] w-24 h-4 mr-2 opacity-80"></div>
                  </div>

                  {/* Task 3: Elefante */}
                  <div className="bg-white p-2.5 text-left rounded-xl border border-[#EFE9DB] flex items-center justify-between gap-3 shadow-sm hover:border-[#C2410C]/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#ECEBF8] rounded-lg flex items-center justify-center text-sm shadow-inner font-sans">🐘</div>
                      <div>
                        <div className="text-xs font-black text-[#2C241E]">elefante</div>
                        <div className="text-[9px] text-slate-400 font-bold">E-L-E-F-A-N-T-E</div>
                      </div>
                    </div>
                    <div className="border-b-2 border-dashed border-[#C2410C] w-24 h-4 mr-2 opacity-80"></div>
                  </div>
                </div>

                <div className="text-[8px] text-slate-400 text-center mt-5 font-semibold">TraçoKids — Do Traço à Escrita · Página 09</div>
              </div>

              {/* Verified Badge Overlay (Enriched with subtle shadow and border details) */}
              <div className="absolute -bottom-4 -right-4 bg-[#FAF6EE] text-[#2C241E] p-3 rounded-2xl shadow-2xl border border-[#E4D9C5] flex items-center gap-3 max-w-[210px] hover:scale-[1.02] transition-transform">
                <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600 flex-shrink-0">
                  <Star className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black leading-none uppercase tracking-wide">THALLES (5 ANOS)</div>
                  <p className="text-[8px] text-[#55463C] mt-1 font-extrabold leading-normal">"Ele me pede para imprimir as folhas todo dia!"</p>
                </div>
              </div>

              {/* Page count indicator offset badge */}
              <div className="absolute -top-3 -left-3 bg-[#C2410C] text-[#FAF6EE] px-3.5 py-2 rounded-xl shadow-lg text-[9px] font-black tracking-wider uppercase flex items-center gap-1 select-none">
                <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" /> +1.500 ATIVIDADES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REASSURANCE TRUST BAR (Micro-spaced and stylized) */}
      <section id="trust-bar" className="bg-[#FAF1E3] border-y border-[#E4D9C5]/80 py-6 text-center text-[#55463C] text-xs font-bold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-y-4 gap-x-8 md:gap-14">
          <span className="flex items-center gap-2 bg-[#FCF8F2] px-4 py-2.5 rounded-xl border border-[#EADFCB] shadow-sm">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
            <span>Compra 100% Segura</span>
          </span>
          <span className="flex items-center gap-2 bg-[#FCF8F2] px-4 py-2.5 rounded-xl border border-[#EADFCB] shadow-sm">
            <Heart className="w-4.5 h-4.5 text-rose-500 fill-rose-500" />
            <span>+3.200 Famílias Apoiadas</span>
          </span>
          <span className="flex items-center gap-2 bg-[#FCF8F2] px-4 py-2.5 rounded-xl border border-[#EADFCB] shadow-sm">
            <Printer className="w-4.5 h-4.5 text-[#BA3C13]" />
            <span>PDF Pronto para Imprimir</span>
          </span>
        </div>
      </section>

      {/* 6. WHY IT WORKS (POR QUE FUNCIONA - Stylized Cards and Micro-contrasts) */}
      <section id="why-it-works" className="bg-[#FAF0DF] py-16 md:py-24 px-6 border-t border-[#EAE3D5]/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-3.5 mb-16">
            <span className="text-[#C2410C] text-xs font-black uppercase tracking-widest block">POR QUE FUNCIONA</span>
            <h2 className="text-3xl md:text-4xl font-[900] text-[#2C241E] tracking-tight leading-tight">
              O que torna o Traço Kids diferente
            </h2>
            <p className="text-[#5D4E41] text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
              Desenvolvido com foco pedagógico ativo e psicomotricidade infantil.
            </p>
          </div>

          {/* Cards Grid */}
          <div id="features-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "✍️",
                title: "Progressão inteligente",
                desc: "Começa do traçado mais simples e evolui gradualmente até as frases curtas, respeitando o tempo de desenvolvimento."
              },
              {
                num: "✨",
                title: "Visual que encanta",
                desc: "Layout altamente lúdico e temático que prende o interesse sensorial e faz a criança querer fazer mais folhas."
              },
              {
                num: "🖨️",
                title: "Imprima quando quiser",
                desc: "Acesso vitalício ao kit. Imprima quantas vezes precisar — ideal para irmãos, reforço escolar ou salas de aula inteiras."
              },
              {
                num: "🤸",
                title: "Sem tela, sem stress",
                desc: "Foco real no papel estruturado. Estimula novos caminhos e foco cognitivo puro, longe dos nocivos aparelhos eletrônicos."
              }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-7 border border-[#E3DCD1] hover:border-[#C2410C] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF1E3] flex items-center justify-center text-xl shadow-inner mb-6">
                    {card.num}
                  </div>
                  <h3 className="text-base font-black text-[#2C241E] mb-2">{card.title}</h3>
                  <p className="text-[#6B5A4B] text-[12px] md:text-xs leading-relaxed font-semibold">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. PROGRESSIVE MODULES (CONTEÚDO COMPLETO) */}
      <section id="progressive-modules" className="py-16 md:py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        
        <div className="text-center space-y-3.5 mb-12">
          <span className="text-[#C2410C] text-xs font-black uppercase tracking-widest block">CONTEÚDO COMPLETO</span>
          <h2 className="text-3xl md:text-5xl font-[950] text-[#2C241E] tracking-tight leading-tight">
            São 5 módulos progressivos, e mais <span className="text-[#C2410C] border-b-4 border-dashed border-[#C2410C]/30 pb-0.5">+1500 atividades</span>
          </h2>
          <p className="text-[#5D4E41] text-sm md:text-base max-w-2xl mx-auto font-medium">
            Formulado em uma esteira lógica para guiar o aprendizado saudável do rabisco inicial ao letramento espontâneo, sem pular etapas cognitivas importantes.
          </p>
        </div>

        {/* Modules Interactive Carousel Framework (Aesthetic, fully fluid stateful slider) */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-12 py-6">
          
          {/* Main Horizontal Track */}
          <div className="flex items-center justify-center gap-6 md:gap-8">
            
            {/* Left Column (flanking preview card) - hidden on mobile, clickable to slide previous */}
            <div 
              onClick={prevModule}
              className="hidden md:block w-72 flex-shrink-0 cursor-pointer select-none transition-all duration-300 transform scale-90 opacity-40 hover:opacity-60 hover:scale-[0.93] origin-right"
            >
              {(() => {
                const prevIdx = (activeModuleIndex - 1 + MODULES.length) % MODULES.length;
                const mPrev = MODULES[prevIdx];
                return (
                  <div className="bg-white rounded-3xl p-4 border border-[#EAE3D5] shadow-sm pointer-events-none">
                    {/* Simulated Worksheet cover */}
                    <div className="bg-[#FCFBF8] rounded-2xl border border-slate-200/80 p-2.5 relative shadow-inner overflow-hidden min-h-[110px] opacity-85">
                      <div className={`w-full h-5 ${mPrev.worksheet.headerBg} rounded-t-lg flex items-center justify-between px-2 text-[7px] font-black text-white`}>
                        <span>TRAÇOKIDS</span>
                        <span>{mPrev.worksheet.headerText}</span>
                      </div>
                      <div className="p-1.5 space-y-1 text-left">
                        <div className="text-[6px] text-slate-400 font-bold">Nome: _________________</div>
                        <div className="text-[6px] text-slate-500 font-bold leading-none truncate">{mPrev.worksheet.instruction}</div>
                        <div className="h-7 flex items-center justify-center opacity-45 overflow-hidden scale-75 origin-top">{mPrev.worksheet.preview}</div>
                      </div>
                    </div>
                    {/* Text block */}
                    <div className="mt-3 text-left">
                      <span className="text-[9px] font-black text-[#C2410C] bg-[#FAF1E3] px-2 py-0.5 rounded uppercase">MÓDULO {mPrev.num}</span>
                      <h4 className="text-sm font-black text-[#2C241E] mt-1">{mPrev.title}</h4>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Active Highlight Center Card (Present on all screens, styled beautifully) */}
            <motion.div 
              key={activeModuleIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-sm md:max-w-md bg-white rounded-[32px] p-6 border-4 border-[#C2410C] shadow-2xl relative z-10"
            >
              {/* Notebook Spiral Ribbon decorative element */}
              <div className="absolute top-1/2 -left-3.5 -translate-y-1/2 flex flex-col gap-2 z-20 pointer-events-none select-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-5 h-3 bg-gradient-to-r from-slate-300 to-slate-200 rounded-full border-b border-r border-[#C2410C]/20" />
                ))}
              </div>

              {/* simulated physical worksheet */}
              <div id="simulated-worksheet" className="bg-[#FAF9F5] rounded-2xl border-2 border-slate-200 p-3 pb-2 relative shadow-inner overflow-hidden min-h-[145px] flex flex-col justify-between">
                {/* School notebook background horizontal line grid representation for high craft */}
                <div className="absolute inset-0 bg-[linear-gradient(#E8E3D7_1px,transparent_1px)] [background-size:100%_20px] opacity-10 pointer-events-none mt-8"></div>
                
                <div>
                  {/* Worksheet Header strip */}
                  <div className={`w-full h-7 ${MODULES[activeModuleIndex].worksheet.headerBg} rounded-t-xl flex items-center justify-between px-3 text-[8px] md:text-[9px] font-black text-white relative z-10`}>
                    <span className="tracking-widest flex items-center gap-1">🏫 TRAÇOKIDS</span>
                    <span>{MODULES[activeModuleIndex].worksheet.headerText}</span>
                  </div>

                  {/* Student Credentials info */}
                  <div className="p-2 space-y-1 relative z-10 text-left">
                    <div className="flex justify-between items-center text-[7px] md:text-[8px] text-[#7E6D62] font-extrabold font-mono tracking-tight">
                      <span>NOME: ___________________________</span>
                      <span>DATA: ___/___/___</span>
                    </div>
                    
                    {/* Activity Teacher Instruction */}
                    <div className="bg-[#FAF5ED] border-l-4 border-[#C2410C] px-2 py-1 rounded text-[7px] md:text-[8px] text-[#4E3F35] font-black leading-snug">
                      🎯 {MODULES[activeModuleIndex].worksheet.instruction}
                    </div>

                    {/* Simulated Tracing/Interactive visual preview inside sheet */}
                    <div className="py-1 min-h-[45px] flex items-center justify-center overflow-hidden">
                      <div className="w-full scale-95 origin-center">{MODULES[activeModuleIndex].worksheet.preview}</div>
                    </div>
                  </div>
                </div>

                {/* Worksheet page footer */}
                <div className="border-t border-[#EAE3D5]/60 pt-1.5 flex justify-between items-center text-[7px] md:text-[8px] text-[#806E61] font-bold font-mono tracking-widest px-2 relative z-10">
                  <span>Módulo {MODULES[activeModuleIndex].num} de 05</span>
                  <span className="text-[#C2410C]">PÁGINA {MODULES[activeModuleIndex].worksheet.page}</span>
                </div>
              </div>

              {/* Active Card description content */}
              <div className="mt-5 text-left space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-[#C2410C] bg-[#FAF1E3] px-3 py-1 rounded-full uppercase tracking-widest border border-[#E4D9C5]">
                    MÓDULO {MODULES[activeModuleIndex].num}
                  </span>
                  <span className="text-sm select-none">{MODULES[activeModuleIndex].icon}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-[950] text-[#2C241E] leading-tight">
                  {MODULES[activeModuleIndex].title}
                </h3>

                <p className="text-[#5D4E41] text-xs sm:text-sm font-semibold leading-relaxed">
                  {MODULES[activeModuleIndex].desc}
                </p>

                {/* Tags bottom badge array */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#F5EFE4]">
                  {MODULES[activeModuleIndex].tags.map((tg, idx) => (
                    <span key={idx} className="bg-[#FAF6EE] text-[#736053] text-[9px] font-bold px-2.5 py-0.5 rounded-full border border-[#E2D9CA] tracking-wide uppercase">
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column (flanking preview card) - hidden on mobile, clickable to slide next */}
            <div 
              onClick={nextModule}
              className="hidden md:block w-72 flex-shrink-0 cursor-pointer select-none transition-all duration-300 transform scale-90 opacity-40 hover:opacity-60 hover:scale-[0.93] origin-left"
            >
              {(() => {
                const nextIdx = (activeModuleIndex + 1) % MODULES.length;
                const mNext = MODULES[nextIdx];
                return (
                  <div className="bg-white rounded-3xl p-4 border border-[#EAE3D5] shadow-sm pointer-events-none">
                    {/* Simulated Worksheet cover */}
                    <div className="bg-[#FCFBF8] rounded-2xl border border-slate-200/80 p-2.5 relative shadow-inner overflow-hidden min-h-[110px] opacity-85">
                      <div className={`w-full h-5 ${mNext.worksheet.headerBg} rounded-t-lg flex items-center justify-between px-2 text-[7px] font-black text-white`}>
                        <span>TRAÇOKIDS</span>
                        <span>{mNext.worksheet.headerText}</span>
                      </div>
                      <div className="p-1.5 space-y-1 text-left">
                        <div className="text-[6px] text-slate-400 font-bold">Nome: _________________</div>
                        <div className="text-[6px] text-slate-500 font-bold leading-none truncate">{mNext.worksheet.instruction}</div>
                        <div className="h-7 flex items-center justify-center opacity-45 overflow-hidden scale-75 origin-top">{mNext.worksheet.preview}</div>
                      </div>
                    </div>
                    {/* Text block */}
                    <div className="mt-3 text-left">
                      <span className="text-[9px] font-black text-[#C2410C] bg-[#FAF1E3] px-2 py-0.5 rounded uppercase font-sans">MÓDULO {mNext.num}</span>
                      <h4 className="text-sm font-black text-[#2C241E] mt-1">{mNext.title}</h4>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

          {/* Quick Slider Controls Overlay (Left/Right arrow chevrons matching precisely) */}
          <div className="absolute top-1/2 inset-x-0 -translate-y-1/2 flex justify-between pointer-events-none select-none px-1 md:-px-4">
            <button 
              onClick={prevModule}
              id="carousel-arrow-prev"
              className="w-10 h-10 rounded-full bg-white border border-[#E4D9C5] shadow-lg flex items-center justify-center text-[#2C241E] hover:bg-[#FAF6EE] transition-all cursor-pointer pointer-events-auto active:scale-95"
              aria-label="Módulo anterior"
            >
              <ChevronRight className="w-5 h-5 rotate-180 stroke-[3]" />
            </button>
            <button 
              onClick={nextModule}
              id="carousel-arrow-next"
              className="w-10 h-10 rounded-full bg-white border border-[#E4D9C5] shadow-lg flex items-center justify-center text-[#2C241E] hover:bg-[#FAF6EE] transition-all cursor-pointer pointer-events-auto active:scale-95"
              aria-label="Próximo módulo"
            >
              <ChevronRight className="w-5 h-5 stroke-[3]" />
            </button>
          </div>

        </div>

        {/* Dynamic Dot selectors layout matching visual long-pill design index */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {MODULES.map((_, dotIdx) => (
            <button 
              key={dotIdx} 
              onClick={() => setActiveModuleIndex(dotIdx)}
              className={`transition-all duration-300 h-2.5 rounded-full cursor-pointer focus:outline-none ${dotIdx === activeModuleIndex ? 'bg-[#C2410C] w-7' : 'bg-[#EAE3D5] hover:bg-slate-300 w-2.5'}`}
              aria-label={`Ir para módulo ${dotIdx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* 8. COMO FUNCIONA (Simples assim: comprou, imprimiu, evoluiu!) */}
      <section id="how-it-works-steps" className="bg-[#FAF0DF] py-16 md:py-24 px-6 border-t border-[#EAE3D5]/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-3.5 mb-16">
            <span className="text-[#C2410C] text-xs font-black uppercase tracking-widest block">COMO FUNCIONA</span>
            <h2 className="text-3xl md:text-4xl font-[900] text-[#2C241E] tracking-tight leading-tight">
              Simples assim: comprou, imprimiu, evoluiu!
            </h2>
            <p className="text-[#5D4E41] text-sm max-w-sm mx-auto font-medium">
              Sem mensalidades secretas, assinatura mensal obrigatória ou enrolação pedagógica.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div id="instructions-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "1",
                title: "Compre o kit completo",
                desc: "Acesso imediato no mesmo minuto após aprovação. Funciona lindamente em celular ou PC."
              },
              {
                num: "2",
                title: "Escolha as atividades",
                desc: "Todas as 1500 folhas organizadas por módulos evolutivos e nível de dificuldade recomendado."
              },
              {
                num: "3",
                title: "Imprima direto em casa",
                desc: "Qualquer impressora padrão. Compatível com preto e branco de baixo custo de tinta ou colorido."
              },
              {
                num: "4",
                title: "Atividades sem estresse",
                desc: "Foco real físico. Sem distrações digitais, notificações nocivas ou excesso de radiação de tela."
              }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-7 border border-[#E3DCD1] relative overflow-hidden shadow-sm"
              >
                {/* Custom Big step indicators */}
                <div className="absolute top-5 right-5 font-[950] text-4xl text-[#F2ECE0] select-none">{step.num}</div>
                <h3 className="text-base font-black text-[#2C241E] mb-2 pr-8">{step.title}</h3>
                <p className="text-[#6B5A4B] text-[12px] leading-relaxed font-semibold">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Sub-badge icons representation from screenshot */}
          <div id="sub-badges-line" className="mt-12 bg-white rounded-2xl border border-[#EAE3D5] p-5 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {[
              { label: "Acesso pelo celular", emoji: "📱" },
              { label: "Qualquer impressora", emoji: "🖨️" },
              { label: "Impressões ilimitadas", emoji: "🔁" },
              { label: "Acesso vitalício", emoji: "🔐" }
            ].map((bg, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2.5">
                <span className="text-xl select-none">{bg.emoji}</span>
                <span className="text-xs font-black text-[#55463C]">{bg.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. SOCIAL PROOF SECTION (DEPOIMENTOS) */}
      <section id="proof-testimonials" className="bg-[#FAF0DF] py-16 md:py-24 px-6 border-y border-[#EAE3D5]/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-3.5 mb-16">
            <span className="text-[#C2410C] text-xs font-black uppercase tracking-widest block">FEEDBACK GERAL</span>
            <h2 className="text-3xl md:text-4xl font-[900] text-[#2C241E] tracking-tight leading-tight">
              Mais de 3.200 famílias já utilizam o material
            </h2>
            
            {/* Rating average indicator */}
            <div className="flex flex-col items-center gap-1.5 pt-2">
              <div className="flex gap-1 select-none text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#55463C] tracking-wide">
                <span className="font-black text-[#2C241E]">4.9 / 5.0</span> — Média de aprovação por pais reais
              </p>
            </div>
          </div>

          {/* Cards wrapper Grid matching the layout precisely */}
          <div id="testimonial-cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "“Minha filha de 5 anos adora! Ela mesma pede para imprimir mais. A coordenação motora dela melhorou demais em poucas semanas.”",
                author: "Ana Paula M.",
                role: "Mãe de Júlia, 5 anos",
                badge: "✓ Compra Verificada"
              },
              {
                text: "“Comprei com receio, mas surpreendeu muito. Meu filho largou o tablet e ficou quase 45 minutos concentrado no alfabeto. Não acreditei!”",
                author: "Ricardo F.",
                role: "Pai de Bento, 6 anos",
                badge: "✓ Compra Verificada"
              },
              {
                text: "“Sou educadora infantil e utilizo de reforço toda semana. Material muito bem ilustrado, fofo e sequencial. Indico aos pais de olhos fechados.”",
                author: "Carla S.",
                role: "Professora de Educação Infantil",
                badge: "✓ Compra Verificada"
              }
            ].map((test, index) => (
              <div 
                key={index}
                className="bg-white p-7 md:p-8 rounded-2xl border border-[#DED7CC] shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all duration-200"
              >
                <div>
                  <div className="flex gap-1 mb-4 select-none text-amber-500">
                    {[...Array(5)].map((_, st) => (
                      <Star key={st} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#3A3029] text-xs md:text-sm italic font-semibold leading-relaxed mb-6">
                    {test.text}
                  </p>
                </div>

                <div className="border-t border-[#F1EBE0] pt-4 flex justify-between items-center bg-white mt-auto">
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-black text-[#2C241E]">{test.author}</h4>
                    <p className="text-[10px] text-[#736053] font-bold">{test.role}</p>
                  </div>
                  <span className="text-[9px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    {test.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. SPECIAL PRICING / ACCELERATED OFFER SECTION */}
      <section id="oferta" className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
        
        <div id="pricing-hero" className="text-center space-y-3 mb-12">
          <span className="text-[#C2410C] text-xs font-black uppercase tracking-widest block">ACESSO VITALÍCIO</span>
          <h2 className="text-3xl md:text-[38px] font-[900] text-[#2C241E] tracking-tight leading-none">
            Garanta agora mesmo com preço exclusivo
          </h2>
          <p className="text-[#6B5A4B] text-sm font-semibold max-w-md mx-auto">
            Libere o kit completo com mais de 1.500 atividades prontas. Pagamento único, sem qualquer mensalidade.
          </p>
        </div>

        {/* Pricing card matching the screenshot precisely with timer block */}
        <div id="pricing-card" className="bg-white rounded-[32px] border-2 border-[#D3C9B8] shadow-2xl relative overflow-hidden max-w-xl mx-auto">
          
          {/* OFERTA EXPIRA ticking countdown timer wrapper */}
          <div id="offer-countdown-top" className="bg-[#BA3C13] text-white py-3.5 px-4 flex justify-center items-center gap-4 border-b border-[#A0330E]">
            <span className="text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-200 animate-pulse" /> OFERTA EXPIRA EM
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-black text-lg bg-[#FAF6EE] text-[#C2410C] px-2 py-0.5 rounded leading-none shadow-inner">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-bold text-xs text-amber-200">:</span>
              <span className="font-mono font-black text-lg bg-[#FAF6EE] text-[#C2410C] px-2 py-0.5 rounded leading-none shadow-inner">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[9px] font-black text-amber-250 uppercase tracking-widest">MINUTOS</span>
          </div>

          <div className="p-6 sm:p-10 text-center space-y-6">
            
            {/* Price display tags */}
            <div className="space-y-1 bg-amber-50/20 p-4 rounded-2xl border border-[#FAF1E3]/60">
              <span className="text-xs sm:text-sm text-slate-500 font-bold block">
                De: <span className="line-through text-slate-400">R$127,90</span>
              </span>
              <span className="text-xs font-black text-[#55463C] uppercase tracking-widest block mt-1.5">
                Por apenas:
              </span>
              <div className="text-5xl sm:text-7xl font-[1000] text-[#C2410C] tracking-tight flex items-baseline justify-center gap-1.5 mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#C2410C]">R$</span>
                <span className="text-6xl sm:text-7xl font-black">{`27,90`}</span>
              </div>
              <span className="text-[10px] text-[#736053] font-bold uppercase tracking-wider block mt-2">PAGAMENTO ÚNICO • SEM OUTRAS COBRANÇAS</span>
            </div>

            {/* Checklist details inside pricing card */}
            <div className="border-t border-b border-[#F1EADF] py-6 text-left text-xs text-[#5D4E41] font-bold space-y-3 max-w-sm mx-auto">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3.5] flex-shrink-0" />
                <span>+1.500 atividades educativas em PDF</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3.5] flex-shrink-0" />
                <span>Os 5 módulos progressivos completos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3.5] flex-shrink-0" />
                <span>Impressão ilimitada (imprima quando quiser)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3.5] flex-shrink-0" />
                <span>Acesso vitalício e sem limite de descarga</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3.5] flex-shrink-0" />
                <span>Garantia incondicional de 7 dias</span>
              </div>
            </div>

            {/* Burning Vermilion checkout trigger */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://pay.wiapy.com/11hogzugB6"
                onClick={(e) => handleOpenCheckout('offer_special_panel', e)}
                className="w-full py-5 bg-[#C2410C] hover:bg-[#A0350B] text-white font-[950] rounded-2xl text-sm md:text-base shadow-xl transition-all uppercase tracking-widest cursor-pointer inline-flex items-center justify-center gap-2 border-b-4 border-[#8C2E08]"
              >
                QUERO MEU KIT AGORA
                <ArrowRight className="w-5 h-5 text-white stroke-[3.5]" />
              </motion.a>

              <div className="flex justify-center items-center gap-4 mt-4 text-[10px] text-[#806E61] font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-emerald-600" /> Site Seguro</span>
                <span>•</span>
                <span>Acesso Imediato</span>
                <span>•</span>
                <span>7 Dias de Garantia</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. RISK REVERSAL BADGE BLOCK (GARANTIA INCONDICIONAL DE 7 DIAS) */}
      <section id="risk-reversal-block" className="bg-[#FAF0DF] py-16 md:py-24 px-6 border-y border-[#EAE3D5]/80">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Big high-fidelity 7-DAY outline seal from screenshot */}
          <div className="w-20 h-20 bg-white border-4 border-[#C2410C] rounded-full flex flex-col items-center justify-center text-[#2C241E] shadow-lg mx-auto relative select-none">
            <span className="font-black text-2xl leading-none text-[#C2410C]">7</span>
            <span className="text-[7px] font-black uppercase text-slate-400 tracking-wider">DIAS</span>
            <div className="absolute inset-1 border border-dashed border-slate-200 rounded-full shrink-0"></div>
          </div>

          <span className="text-[#C2410C] text-xs font-black uppercase tracking-widest block">GARANTIA DE SATISFAÇÃO MIL POR CENTO</span>
          
          <h2 className="text-2xl md:text-3xl font-[900] text-[#2C241E] tracking-tight">
            Garantia Incondicional de 7 Dias
          </h2>
          
          <p className="text-[#5D4E41] text-xs md:text-sm leading-relaxed max-w-xl mx-auto font-semibold">
            Se por qualquer motivo o seu pequeno não se adaptar ou as folhas não ajudarem na concentração dele na primeira semana, basta mandar um e-mail. Devolvemos 100% do seu pagamento sem enrolação pedagógica.
          </p>
        </div>
      </section>

      {/* 13. ACCORDION FAQ (Ficou alguma dúvida?) */}
      <section id="faq-accordions" className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
        
        <h2 className="text-2xl md:text-3xl font-black text-center text-[#2C241E] tracking-tight mb-12">
          Ficou alguma dúvida?
        </h2>

        <div id="faq-list" className="space-y-3.5 max-w-3xl mx-auto">
          {[
            {
              q: "Como recebo as atividades após a compra?",
              a: "O Traço Kids é um material completamente digital entregue em formato PDF de excelente resolução. Você receberá o link para download de maneira instantânea e segura em seu e-mail cadastrado logo após a confirmação do Pix."
            },
            {
              q: "Preciso ter uma impressora especial ou colorida?",
              a: "Não! Os arquivos do material foram desenhados e programados de forma vetorizada com traços limpos. Eles ficam absolutamente perfeitos e fáceis de ler mesmo na folha A4 comum em impressões normais em tons de cinza."
            },
            {
              q: "Para qual idade exata o material é indicado?",
              a: "É focado e indicado para crianças de 3 a 7 anos de idade. Ele evolui sequencialmente: o Caderno 1 estimula a pegada de lápis básica (3 a 4 anos) e as folhas guiam progressivamente rumo às sílabas e leitura ativa de frases básicas."
            },
            {
              q: "Quantas vezes posso imprimir?",
              a: "Quantas vezes você quiser! Como o seu acesso ao material é vitalício, caso seu pequeno precise fixar melhor alguma curva pedagógica, erre algum exercício ou queira repetir uma folha, basta selecionar a página e reimprimir."
            },
            {
              q: "E se meu filho não gostar ou não se concentrar?",
              a: "Disponibilizamos a nossa garantia incondicional de 7 dias de teste livre. Baixe o kit, imprima as primeiras atividades e veja o progresso de perto. Caso não mude a rotina dele na primeira semana, basta solicitar o reembolso instantâneo."
            }
          ].map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-[#DCD3C7] overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex justify-between items-center font-black text-xs sm:text-sm text-[#2C241E] hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                >
                  <span className="pr-4 leading-normal">{item.q}</span>
                  <div className="text-[#C2410C] shrink-0 font-[900] text-sm md:text-base flex items-center justify-center w-6 h-6 rounded-full bg-[#FAF1E3] border border-[#EADFCB] select-none transition-transform duration-200">
                    {isOpen ? '−' : '＋'}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 border-t border-[#EDE7DD] bg-[#FCFAF7] text-xs leading-relaxed text-[#5A4B40] font-semibold">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 14. FOOTER SOLID CALL TO ACTION (Fundo Escuro) */}
      <section id="final-footer-cta" className="bg-[#1A1410] text-[#EAE3D5] py-20 px-6 text-center relative overflow-hidden">
        
        {/* Soft background glow circles to optimize premium visual feel */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#C2410C]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          
          <h2 id="final-cta-headline" className="text-3xl sm:text-[40px] font-black text-white tracking-tight leading-tight">
            Seu filho merece aprender <span className="text-[#C2410C] block sm:inline">brincando.</span>
          </h2>

          <p className="text-[#A3968C] text-xs sm:text-sm max-w-lg mx-auto font-semibold leading-relaxed">
            Tenha em mãos mais de 1.500 atividades divertidas prontas para imprimir por apenas R$ 27,90. Pagamento único com acesso vitalício.
          </p>

          <div className="pt-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#oferta"
              id="footer-action-button"
              className="w-full sm:w-auto px-10 py-5 bg-[#C2410C] hover:bg-[#A0350B] text-[#FAF6EE] font-black text-sm tracking-wider uppercase rounded-2xl shadow-2xl transition-all cursor-pointer border-b-4 border-[#8C2E08] inline-flex items-center justify-center font-sans"
            >
              QUERO O KIT TRAÇO KIDS COMPLETÍSSIMO
            </motion.a>
          </div>

          <div id="footer-badges" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] text-[#85766C] font-bold uppercase tracking-wider pt-3">
            <span>✓ Acesso Imediato</span>
            <span>•</span>
            <span>Impressão Ilimitada</span>
            <span>•</span>
            <span>Selo de Garantia 7 Dias</span>
          </div>
        </div>
      </section>

      {/* Minimalistic physical footer info */}
      <footer id="legal-footer" className="bg-[#14100C] text-[#55463C] py-8 text-center text-[10px] px-6 border-t border-[#261E1A] font-semibold">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="text-[12px] text-[#A3968C] font-bold">Traço Kids</div>
          <p className="max-w-xl mx-auto text-[#705E51] font-semibold leading-normal">
            Material educativo criado com dedicação para apoiar o desenvolvimento intelectual infantil em casa e na sala de aula de forma saudável.
          </p>
          <div className="pt-2 text-[#55463C]/80">
            © {new Date().getFullYear()} Traço Kids · Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Simulated Checkout Modal for Pix/Credit mock transactions */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />

    </div>
  );
}
