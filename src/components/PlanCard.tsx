import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { LucideIcon } from 'lucide-react';

// Definindo os tipos para o objeto plan
interface Plan {
  name: string;
  speed: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  popular?: boolean;
  type?: 'internet' | 'interactive';
}

interface PlanCardProps {
  plan: Plan;
  delay: number; // Prop para o atraso da animação
  onSelectPlan: () => void; // Função para o botão
}

export default function PlanCard({ plan, delay, onSelectPlan }: PlanCardProps) {
  const ref = useRef(null);
  // A animação vai disparar quando 20% do card estiver visível
  const isInView = useInView(ref, { threshold: 0.2 });

  const Icon = plan.icon;
  const isPremium = plan.popular;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out transform hover:-translate-y-2 border-2 
                  ${
                    isPremium
                      ? 'border-amber-400 scale-105'
                      : 'border-gray-800'
                  }
                  ${
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
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
              isPremium
                ? 'text-amber-400'
                : 'text-[#3BA9FC] drop-shadow-[0_0_5px_rgba(59,169,252,0.7)]'
            }`}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center mb-2 text-white">
        {plan.name}
      </h3>
      <div className="text-center mb-6">
        <span
          className={`text-5xl font-bold [text-shadow:_0_0_8px_rgba(59,169,252,0.5)] ${
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

      {/* Deixei um min-h para os cards manterem a altura alinhada */}
      <ul className="space-y-3 mb-8 min-h-[100px]">
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
        onClick={onSelectPlan}
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
}