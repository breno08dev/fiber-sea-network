import { Zap, Rocket, Star, Shield, Award, Gem } from 'lucide-react';

const plans = [
  {
    name: 'Plano Básico',
    speed: '100 MB',
    price: 'R$ 79,90',
    icon: Zap,
    features: ['Ideal para redes sociais', 'Suporte 24/7', 'Instalação grátis'],
  },
  {
    name: 'Plano Start',
    speed: '300 MB',
    price: 'R$ 99,90',
    icon: Rocket,
    features: ['Streaming em HD', 'Wi-Fi incluso', 'Suporte prioritário'],
  },
  {
    name: 'Plano Pro',
    speed: '500 MB',
    price: 'R$ 129,90',
    icon: Award,
    features: ['Ideal para home office', 'Streaming em 4K', 'Roteador premium'],
    popular: true,
  },
  {
    name: 'Plano Gamer',
    speed: '700 MB',
    price: 'R$ 159,90',
    icon: Shield,
    features: ['Baixa latência para jogos', 'IP fixo opcional', 'Suporte VIP'],
  },
  {
    name: 'Plano Ultra',
    speed: '1 GB',
    price: 'R$ 199,90',
    icon: Star,
    features: ['Para toda a família', 'Conexão simultânea', 'Benefícios exclusivos'],
  },
  {
    name: 'Plano Diamond',
    speed: '2 GB',
    price: 'R$ 299,90',
    icon: Gem,
    features: ['Máxima performance', 'Atendimento exclusivo', 'Todos os benefícios inclusos'],
  },
];

export default function Plans() {
  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os planos de internet.`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="planos" className="py-20 bg-black">
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
            return (
              <div
                key={plan.name}
                className={`relative bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-2 ${
                  plan.popular ? 'border-[#3BA9FC] scale-105' : 'border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#3BA9FC] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}

                <div className="flex justify-center mb-6">
                  <div className="bg-[#3BA9FC] bg-opacity-10 p-4 rounded-full">
                    <Icon className="w-10 h-10 text-[#3BA9FC]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-2 text-white">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-[#3BA9FC]">{plan.speed}</span>
                  <p className="text-3xl font-bold text-white mt-2">{plan.price}<span className="text-lg text-gray-400">/mês</span></p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-[#3BA9FC] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openWhatsApp}
                  className={`w-full py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-[#3BA9FC] text-white hover:bg-[#2a8cd6]'
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