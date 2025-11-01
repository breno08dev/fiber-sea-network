import {
  Wifi,
  Activity,
  Gamepad2,
  Users,
  Diamond,
  Tv,
  Film,
  Music,
  AppWindow, // Ícone para o separador
} from 'lucide-react';
import PlanCard from './PlanCard'; 

const internetPlans = [
  {
    name: '300 MB',
    speed: '300 MB',
    price: 'R$ 64,99',
    icon: Activity,
    features: [
      'Ideal para redes sociais e e-mail',
      'Streaming em HD',
      '1-3 dispositivos',
    ],
    type: 'internet' as const,
  },
  {
    name: '500 MB',
    speed: '500 MB',
    price: 'R$ 79,99',
    icon: Wifi,
    features: [
      'Streaming em 4K e Home Office',
      'Downloads rápidos',
      '3-5 dispositivos',
    ],
    type: 'internet' as const,
  },
  {
    name: '700 MB',
    speed: '700 MB',
    price: 'R$ 99,99',
    icon: Gamepad2,
    features: [
      'Jogos online sem lag',
      'Múltiplos streams em 4K',
      '5-7 dispositivos',
    ],
    type: 'internet' as const,
  },
  {
    name: '1 GB',
    speed: '1 GB',
    price: 'R$ 119,99',
    icon: Users,
    features: [
      'Casa conectada (IoT)',
      'Uso intenso e profissional',
      '+10 dispositivos',
    ],
    type: 'internet' as const,
  },
];

const interactivePlans = [
  {
    name: '400 MB + Conteúdo',
    speed: '400 MB',
    price: 'R$ 114,99',
    icon: Tv,
    features: [
      'Internet + 1 App Premium',
      '1 App Advanced ou Standard',
      'Perfeito para streaming',
    ],
    type: 'interactive' as const,
  },
  {
    name: '600 MB + Conteúdo',
    speed: '600 MB',
    price: 'R$ 129,99',
    icon: Film,
    features: [
      'Internet + 1 App Premium',
      '1 App Advanced ou Standard',
      'Mais velocidade para mais telas',
    ],
    type: 'interactive' as const,
  },
  {
    name: '800 MB + Conteúdo',
    speed: '800 MB',
    price: 'R$ 149,99',
    icon: Music,
    features: [
      'Internet + 1 App Premium',
      '1 App Advanced ou Standard',
      'Ideal para famílias conectadas',
    ],
    type: 'interactive' as const,
  },
  {
    name: '1 GB + Conteúdo',
    speed: '1 GB',
    price: 'R$ 179,99',
    icon: Diamond,
    features: [
      'Internet + 1 App Premium',
      '1 App Advanced ou Standard',
      'Velocidade máxima e todo o conteúdo',
    ],
    popular: true, // Este é o plano premium
    type: 'interactive' as const,
  },
];


export default function Plans() {
  
  const openWhatsApp = (planName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o plano *${planName}*.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="planos"
      className={`py-20`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Escolha o plano ideal para você
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Velocidade, estabilidade e o melhor custo-benefício.
        </p>

        {/* Grid para Planos de Internet */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {internetPlans.map((plan, index) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              delay={index * 150} 
              onSelectPlan={() => openWhatsApp(plan.name)}
            />
          ))}
        </div>

        {/* Separador de Conteúdo Interativo (baseado na imagem) */}
        <div className="my-16 md:my-20">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center">
              {/* *** MODIFICAÇÃO AQUI ***
                - text-base md:text-xl (fonte menor no mobile)
                - px-4 md:px-6 (padding menor no mobile)
                - flex items-center (para alinhar ícone e texto)
                - whitespace-nowrap (para impedir a quebra de linha) 
              */}
              <span className="bg-[#3BA9FC] px-4 py-3 md:px-6 rounded-full text-base md:text-xl font-bold text-white shadow-lg shadow-[#3BA9FC]/30 flex items-center whitespace-nowrap">
                <AppWindow className="w-5 h-5 md:w-6 md:h-6 inline-block mr-2 md:mr-3" />
                Planos com Conteúdo Interativo
              </span>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-6 text-lg max-w-2xl mx-auto px-4">
            Escolha seu plano e tenha acesso total para usar os aplicativos de streaming que quiser.
          </p>
        </div>


        {/* Grid para Planos Interativos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {interactivePlans.map((plan, index) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              delay={index * 150}
              onSelectPlan={() => openWhatsApp(plan.name)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}