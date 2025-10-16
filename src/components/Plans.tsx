import { Zap, Rocket, Star } from 'lucide-react';

const plans = [
  {
    name: 'Plano Start',
    speed: '200 MB',
    price: 'R$ 89,90',
    icon: Zap,
    features: ['Ideal para navegar', 'Suporte 24/7', 'Instalação grátis'],
  },
  {
    name: 'Plano Turbo',
    speed: '400 MB',
    price: 'R$ 119,90',
    icon: Rocket,
    features: ['Para streaming HD', 'Suporte prioritário', 'Wi-Fi incluso'],
    popular: true,
  },
  {
    name: 'Plano Ultra',
    speed: '600 MB',
    price: 'R$ 149,90',
    icon: Star,
    features: ['Gaming e 4K', 'Suporte VIP', 'Roteador premium'],
  },
];

export default function Plans() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">
          Escolha o plano ideal pra você
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Velocidade, estabilidade e o melhor custo-benefício
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-2 ${
                  plan.popular ? 'border-[#3BA9FC] scale-105' : 'border-gray-200'
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

                <h3 className="text-2xl font-bold text-center mb-2 text-black">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-[#3BA9FC]">{plan.speed}</span>
                  <p className="text-3xl font-bold text-black mt-2">{plan.price}<span className="text-lg text-gray-600">/mês</span></p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-[#3BA9FC] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-[#3BA9FC] text-white hover:bg-[#2a8cd6]'
                      : 'bg-gray-100 text-[#3BA9FC] hover:bg-gray-200'
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
