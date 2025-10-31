import {
  Wifi,
  Activity,
  Briefcase,
  Gamepad2,
  Users,
  Diamond,
} from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const plans = [
  {
    name: 'Plano Básico',
    speed: '100 MB',
    price: 'R$ 79,90',
    icon: Wifi,
    features: [
      'Perfeito para navegar e redes sociais',
      'E-mails e apps de mensagem',
      'Suporte técnico 24/7',
    ],
  },
  {
    name: 'Plano Start',
    speed: '300 MB',
    price: 'R$ 99,90',
    icon: Activity,
    features: [
      'Streaming de músicas e vídeos em HD',
      'Bom para 1-2 dispositivos conectados',
      'Wi-Fi de alta velocidade',
    ],
  },
  {
    name: 'Plano Pro',
    speed: '500 MB',
    price: 'R$ 129,90',
    icon: Briefcase,
    features: [
      'Home office estável e videochamadas',
      'Streaming em 4K (Ultra HD)',
      'Roteador Wi-Fi 6 premium',
    ],
  },
  {
    name: 'Plano Gamer',
    speed: '700 MB',
    price: 'R$ 159,90',
    icon: Gamepad2,
    features: [
      'Latência ultrabaixa para jogos online',
      'Upload de alta velocidade para streams',
      'IP fixo (opcional)',
    ],
  },
  {
    name: 'Plano Ultra',
    speed: '1 GB',
    price: 'R$ 199,90',
    icon: Users,
    features: [
      'Conexão robusta para toda a família',
      'Múltiplos streamings em 4K simultâneos',
      'Ideal para casas conectadas (IoT)',
    ],
  },
  {
    name: 'Plano Diamond',
    speed: '2 GB',
    price: 'R$ 299,90',
    icon: Diamond,
    features: [
      'Performance extrema para todos os usos',
      'Atendimento VIP dedicado',
      'Todos os benefícios e prioridade de rede',
    ],
    popular: true, // Plano PREMIUM
  },
];

export default function Plans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os planos de internet.`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      ref={ref}
      id="planos"
      // Duração alterada para 1500ms
      className={`py-20 bg-black opacity-0 transition-all duration-[1500ms] ease-in-out
                  ${isInView ? 'opacity-100 translate-x-0' : '-translate-x-20'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Escolha o plano ideal para você
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Velocidade, estabilidade e o melhor custo-benefício.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isPremium = plan.popular;

            return (
              <div
                key={plan.name}
                className={`relative bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-2 ${
                  isPremium
                    ? 'border-amber-400 scale-105'
                    : 'border-gray-800'
                }`}
              >
                {isPremium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    PREMIUM
                  </div>
                )}

                <div className="flex justify-center mb-6">
                  <div
                    className={`p-4 rounded-full ${
                      isPremium ? 'bg-amber-400/10' : 'bg-[#3BA9FC]/10'
                    }`}
                  >
                    <Icon
                      className={`w-10 h-10 ${
                        isPremium ? 'text-amber-400' : 'text-[#3BA9FC]'
                      }`}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-2 text-white">
                  {plan.name}
                </h3>
                <div className="text-center mb-6">
                  <span
                    className={`text-5xl font-bold ${
                      isPremium ? 'text-amber-400' : 'text-[#3BA9FC]'
                    }`}
                  >
                    {plan.speed}
                  </span>
                  <p className="text-3xl font-bold text-white mt-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">/mês</span>
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg
                        className={`w-5 h-5 mr-2 flex-shrink-0 ${
                          isPremium ? 'text-amber-400' : 'text-[#3BA9FC]'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openWhatsApp}
                  className={`w-full py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                    isPremium
                      ? 'bg-amber-400 text-black hover:bg-amber-300'
                      : 'bg-gray-800 text-[#3BA9FC] hover:bg-gray-700'
                  }`}
                >
                  Contratar Agora
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}