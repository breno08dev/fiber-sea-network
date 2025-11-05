import {
  Wifi,    // Ícone para Internet
  Tv,      // Ícone para IPTV
  Star,    // Ícone para Premium
   // Ícone para o separador
} from 'lucide-react';
import PlanCard from './PlanCard';

// 1. Novos Planos de Internet
const internetPlans = [
  {
    name: '300 Mega',
    price: 'R$64,99',
    icon: Wifi,
    description: 'Internet Fibra',
  },
  {
    name: '500 Mega',
    price: 'R$79,99',
    icon: Wifi,
    description: 'Internet Fibra',
  },
  {
    name: '700 Mega',
    price: 'R$99,99',
    icon: Wifi,
    description: 'Internet Fibra',
  },
  {
    name: '1 GB',
    price: 'R$119,99',
    icon: Wifi,
    description: 'Internet Fibra',
  },
];

// 2. Novos Planos com IPTV
const iptvPlans = [
  {
    name: '400 Mega',
    price: 'R$114,99',
    icon: Tv,
    description: 'Internet + IPTV (2 telas)',
  },
  {
    name: '600 Mega',
    price: 'R$129,99',
    icon: Tv,
    description: 'Internet + IPTV (2 telas)',
  },
  {
    name: '800 Mega',
    price: 'R$149,99',
    icon: Tv,
    description: 'Internet + IPTV (2 telas)',
  },
  {
    name: '1 GB',
    price: 'R$179,99',
    icon: Tv,
    description: 'Internet + IPTV (2 telas)',
  },
];

// 3. Plano Premium
const premiumPlan = {
  name: '700 Mega',
  price: 'R$179,99',
  icon: Star,
  description: 'Streams + Câmera de Segurança',
  isPremium: true,
};


export default function Plans() {

  // 4. MUDANÇA AQUI: Função de WhatsApp atualizada
  const openWhatsApp = (planName: string, description: string, isPremium: boolean = false) => {
    const phoneNumber = '5511986339066';
    let message = '';

    if (isPremium) {
      // Mensagem específica para o plano PREMIUM
      message = `Olá! Quero contratar o plano PREMIUM (*${planName}* - ${description}).`;
    } else {
      // Mensagem direta para os outros planos
      message = `Olá! Quero contratar o plano *${planName}* (${description}).`;
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="planos"
      className={`py-20 bg-primary-light`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-base-text">
          Escolha o plano ideal para você
        </h2>
        <p className="text-center text-base-text-secondary mb-12 text-lg">
          Velocidade, estabilidade e o melhor custo-benefício.
        </p>

        {/* --- SEPARADOR 1: Planos de Internet --- */}
        <div className="mb-16 md:mb-20">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border-color" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-primary-dark px-4 py-3 md:px-6 rounded-full text-base md:text-xl font-bold text-base-white shadow-lg shadow-primary-dark/30 flex items-center whitespace-nowrap">
                <Wifi className="w-5 h-5 md:w-6 md:h-6 inline-block mr-2 md:mr-3" />
                Planos de Internet
              </span>
            </div>
          </div>
        </div>

        {/* Grid para Planos de Internet */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {internetPlans.map((plan, index) => (
            <PlanCard
              key={plan.name}
              icon={plan.icon}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              delay={index * 150}
              // 5. MUDANÇA AQUI: Passando os novos parâmetros
              onSelectPlan={() => openWhatsApp(plan.name, plan.description, false)}
            />
          ))}
        </div>

        {/* --- SEPARADOR 2: Planos com IPTV --- */}
        <div className="my-16 md:my-20">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border-color" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-primary-dark px-4 py-3 md:px-6 rounded-full text-base md:text-xl font-bold text-base-white shadow-lg shadow-primary-dark/30 flex items-center whitespace-nowrap">
                <Tv className="w-5 h-5 md:w-6 md:h-6 inline-block mr-2 md:mr-3" />
                Planos com IPTV
              </span>
            </div>
          </div>
           <p className="text-center text-base-text-secondary mt-6 text-lg max-w-2xl mx-auto px-4">
            Incluso 2 telas simultâneas para você assistir onde quiser.
          </p>
        </div>


        {/* Grid para Planos Interativos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {iptvPlans.map((plan, index) => (
            <PlanCard
              key={plan.name}
              icon={plan.icon}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              delay={index * 150}
              // 6. MUDANÇA AQUI: Passando os novos parâmetros
              onSelectPlan={() => openWhatsApp(plan.name, plan.description, false)}
            />
          ))}
        </div>

        {/* --- SEPARADOR 3: Promoção Especial --- */}
        <div className="my-16 md:my-20">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border-color" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-premium-gold px-4 py-3 md:px-6 rounded-full text-base md:text-xl font-bold text-white shadow-lg shadow-premium-gold/30 flex items-center whitespace-nowrap">
                <Star className="w-5 h-5 md:w-6 md:h-6 inline-block mr-2 md:mr-3" />
                Promoção Especial
              </span>
            </div>
          </div>
        </div>

        {/* Grid para Plano Premium (Centralizado) */}
        <div className="flex justify-center">
           <div className="w-full md:w-1/2 lg:w-1/4">
            <PlanCard
              key={premiumPlan.name}
              icon={premiumPlan.icon}
              name={premiumPlan.name}
              price={premiumPlan.price}
              description={premiumPlan.description}
              isPremium={premiumPlan.isPremium}
              delay={0}
              // 7. MUDANÇA AQUI: Passando os novos parâmetros (isPremium: true)
              onSelectPlan={() => openWhatsApp(premiumPlan.name, premiumPlan.description, true)}
            />
          </div>
        </div>

      </div>
    </section>
  );
}