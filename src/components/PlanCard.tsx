import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { LucideIcon, Check } from 'lucide-react';

// Atualizar interface de Props
interface PlanCardProps {
  icon: LucideIcon;
  name: string;
  price: string;
  description?: string; // Descrição simples (opcional)
  descriptionItems?: string[]; // Lista de itens (opcional)
  isPremium?: boolean;
  delay: number;
  onSelectPlan: () => void;
}

export default function PlanCard({
  icon: Icon,
  name,
  price,
  description,
  descriptionItems,
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
                      ? 'border-premium-gold scale-105'
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

      {/* Lógica condicional para Descrição */}
      {descriptionItems ? (
        // Se for uma lista de itens, renderiza a lista centralizada
        <ul className="space-y-1 text-base-text-secondary mb-4 text-center">
          {descriptionItems.map((item) => (
            <li key={item} className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-primary-dark" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        // Senão, renderiza a descrição simples (como antes)
        <p className="text-center text-base-text-secondary mb-4">{description}</p>
      )}


      <div className="text-center mb-6 flex justify-center items-end gap-1">
        <span
          className={`
            font-bold ${isPremium ? 'text-premium-gold' : 'text-primary-dark'}
            text-5xl lg:text-4xl 
            leading-none
          `}
        >
          {price}
        </span>
        <span 
          className="text-base-text-secondary
                     text-lg lg:text-base
                     leading-none pb-1 lg:pb-[0.2rem]"
        >
          /mês
        </span>
      </div>
      
      {/* Botão */}
      <button
        onClick={onSelectPlan}
        className={`w-full py-3 rounded-full font-semibold text-lg transition transform hover:scale-105 ${
          isPremium
            ? 'bg-premium-gold text-white hover:bg-amber-600'
            : 'btn-secondary'
        }`}
      >
        Contratar Agora
      </button>
    </div>
  );
}