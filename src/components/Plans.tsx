import {
  Wifi,
  Tv,
  Star,
} from 'lucide-react';
import PlanCard from './PlanCard';

// 1. Dados dos Planos (Mantidos)
const internetPlans = [
  { name: '300 Mega', price: 'R$64,99', icon: Wifi, description: 'Internet Fibra' },
  { name: '500 Mega', price: 'R$79,99', icon: Wifi, description: 'Internet Fibra' },
  { name: '700 Mega', price: 'R$99,99', icon: Wifi, description: 'Internet Fibra' },
  { name: '1 GB', price: 'R$119,99', icon: Wifi, description: 'Internet Fibra' },
];

const streamingPlans = [
  { name: '400 Mega', price: 'R$114,99', icon: Tv, descriptionItems: ['Streaming', 'Filmes', 'Séries'] },
  { name: '600 Mega', price: 'R$129,99', icon: Tv, descriptionItems: ['Streaming', 'Filmes', 'Séries'] },
  { name: '800 Mega', price: 'R$149,99', icon: Tv, descriptionItems: ['Streaming', 'Filmes', 'Séries'] },
  { name: '1 GB', price: 'R$179,99', icon: Tv, descriptionItems: ['Streaming', 'Filmes', 'Séries'] },
];

const premiumPlan = {
  name: '700 Mega',
  price: 'R$179,99',
  icon: Star,
  description: 'Streaming + Câmera de Segurança',
  isPremium: true,
};

export default function Plans() {

  const openWhatsApp = (planName: string, description: string, isPremium: boolean = false) => {
    const phoneNumber = '5511986339066';
    let message = '';
    const planDescription = Array.isArray(description) ? description.join(', ') : description;

    if (isPremium) {
      message = `Olá! Quero contratar o plano PREMIUM (*${planName}* - ${planDescription}).`;
    } else {
      message = `Olá! Quero contratar o plano *${planName}* (${planDescription}).`;
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="planos"
      // NOVO BACKGROUND: Gradiente profissional de Azul Bebê (sky-50/100) para um Azul Médio (blue-200)
      className="py-24 relative overflow-hidden bg-gradient-to-b from-sky-50 via-blue-100 to-blue-200"
    >
      {/* Elementos decorativos de fundo ajustados para o novo tema azul */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Blob Branco suave para iluminar o topo */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/40 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob" />
        {/* Blob Azul mais escuro para profundidade na direita */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-primary-dark mb-6 tracking-tight drop-shadow-sm">
            Escolha o plano <span className="text-blue-700">ideal</span> para você
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium">
            Velocidade ultra-rápida, estabilidade garantida e o melhor custo-benefício da região.
          </p>
        </div>

        {/* --- GRUPO 1: Planos de Internet --- */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            {/* Pílula com fundo mais branco para destacar no fundo azul */}
            <div className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg shadow-blue-900/10 border border-blue-200 flex items-center gap-3">
              <div className="bg-primary-dark p-2 rounded-full text-white shadow-md">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-primary-dark tracking-wide">Planos de Internet</span>
            </div>
          </div>

          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {internetPlans.map((plan, index) => (
              <li key={plan.name} className="h-full">
                <PlanCard
                  {...plan}
                  delay={index * 100}
                  onSelectPlan={() => openWhatsApp(plan.name, plan.description, false)}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* --- GRUPO 2: Planos com Streaming --- */}
        <div className="mb-20">
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg shadow-blue-900/10 border border-blue-200 flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-full text-white shadow-md">
                <Tv className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-primary-dark tracking-wide">Planos com Streaming</span>
            </div>
            {/* Texto secundário escurecido para contraste no azul */}
            <p className="text-slate-700 font-medium mt-4 text-center max-w-lg mx-auto bg-white/30 py-1 px-4 rounded-full backdrop-blur-sm">
              Incluso 2 telas simultâneas para você assistir onde quiser.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {streamingPlans.map((plan, index) => (
              <li key={plan.name} className="h-full">
                <PlanCard
                  {...plan}
                  delay={index * 100}
                  onSelectPlan={() => openWhatsApp(plan.name, plan.descriptionItems.join(', '), false)}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* --- GRUPO 3: Promoção Especial --- */}
        <div className="relative">
          <div className="flex items-center justify-center mb-12">
             <div className="bg-gradient-to-r from-amber-50 to-white px-10 py-4 rounded-full shadow-xl shadow-premium-gold/20 border border-premium-gold/30 flex items-center gap-3 transform hover:scale-105 transition-transform">
              <Star className="w-6 h-6 text-premium-gold fill-current animate-pulse" />
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-premium-gold to-amber-600">
                Promoção Especial
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-[28%]">
              <PlanCard
                {...premiumPlan}
                delay={0}
                onSelectPlan={() => openWhatsApp(premiumPlan.name, premiumPlan.description, true)}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}