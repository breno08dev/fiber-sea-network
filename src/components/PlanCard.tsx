import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { LucideIcon } from 'lucide-react';

// Nova interface de Props para o card
interface PlanCardProps {
  icon: LucideIcon;
  name: string; // Ex: "300 Mega"
  price: string; // Ex: "R$64,99"
  description: string; // Ex: "Plano de Internet"
  isPremium?: boolean; // Para o destaque
  delay: number;
  onSelectPlan: () => void;
}

export default function PlanCard({
  icon: Icon,
  name,
  price,
  description,
  isPremium = false,
  delay,
  onSelectPlan,
}: PlanCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative bg-base-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out transform hover:-translate-y-2 border-2 
                  ${
                    isPremium
                      ? 'border-premium-gold scale-105' // Borda dourada e um leve zoom
                      : 'border-border-color'
                  }
                  ${
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
    >
      {/* Selo Premium */}
      {isPremium && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-premium-gold text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
          Premium
        </div>
      )}

      {/* Ícone */}
      <div className="flex justify-center mb-6">
        <div
          className={`p-4 rounded-full ${
            isPremium ? 'bg-premium-gold/10' : 'bg-primary-light'
          }`}
        >
          <Icon
            className={`w-10 h-10 ${
              isPremium
                ? 'text-premium-gold'
                : 'text-primary-dark'
            }`}
          />
        </div>
      </div>

      {/* Nome do Plano */}
      <h3 className="text-3xl font-bold text-center mb-2 text-base-text">
        {name}
      </h3>
      {/* Descrição (Internet ou IPTV) */}
      <p className="text-center text-base-text-secondary mb-4">{description}</p>


      {/* Preço */}
      <div className="text-center mb-6">
        <span
          className={`text-5xl font-bold ${
            isPremium ? 'text-premium-gold' : 'text-primary-dark'
          }`}
        >
          {price}
        </span>
        <span className="text-lg text-base-text-secondary">/mês</span>
      </div>
      
      {/* Botão */}
      <button
        onClick={onSelectPlan}
        className={`w-full py-3 rounded-full font-semibold text-lg transition transform hover:scale-105 ${
          isPremium
            ? 'bg-premium-gold text-white hover:bg-amber-600' // Botão Dourado
            : 'btn-secondary' // Botão Azul Claro (do index.css)
        }`}
      >
        Contratar Agora
      </button>
    </div>
  );
}