import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { LucideIcon, Check, Star } from 'lucide-react';

interface PlanCardProps {
  icon: LucideIcon;
  name: string;
  price: string;
  description?: string;
  descriptionItems?: string[];
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
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col h-full bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 
                  transition-all duration-700 ease-out transform
                  border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                  hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,90,156,0.15)]
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  ${isPremium ? 'ring-2 ring-premium-gold/50 shadow-premium-gold/10 hover:shadow-premium-gold/20' : 'hover:border-primary-light'}
      `}
    >
      {/* Efeito de brilho de fundo no hover (Glow) */}
      <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
        ${isPremium 
          ? 'bg-gradient-to-tr from-amber-100/30 via-transparent to-transparent' 
          : 'bg-gradient-to-tr from-blue-50/50 via-transparent to-transparent'
        }`} 
      />

      {/* Selo Premium Flutuante */}
      {isPremium && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-premium-gold to-amber-500 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-amber-500/30 flex items-center gap-2">
            <Star className="w-3 h-3 fill-current" /> Premium
          </div>
        </div>
      )}

      {/* Cabeçalho do Card */}
      <div className="relative z-10 flex flex-col items-center flex-grow">
        
        {/* Ícone com fundo moderno */}
        <div className={`mb-6 p-4 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
          ${isPremium 
            ? 'bg-amber-100/50 text-premium-gold' 
            : 'bg-primary-light/50 text-primary-dark'
          }`}
        >
          <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
        </div>

        {/* Nome do Plano */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-base-text mb-2 text-center tracking-tight">
          {name}
        </h3>

        {/* Descrição / Lista de Itens */}
        <div className="mt-4 mb-8 w-full">
          {descriptionItems ? (
            <ul className="space-y-3">
              {descriptionItems.map((item) => (
                <li key={item} className="flex items-center justify-center space-x-3 text-base-text-secondary">
                  <span className={`flex-shrink-0 p-1 rounded-full ${isPremium ? 'bg-amber-100 text-premium-gold' : 'bg-blue-50 text-primary-dark'}`}>
                    <Check className="w-3 h-3 md:w-4 md:h-4" strokeWidth={3} />
                  </span>
                  <span className="font-medium text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-base-text-secondary font-medium px-4">
              {description}
            </p>
          )}
        </div>

        {/* Preço (Gradiente no texto) */}
        <div className="mt-auto mb-8 text-center">
          <div className="flex items-end justify-center gap-1">
            <span className="text-lg text-base-text-secondary font-medium mb-2">R$</span>
            <span className={`text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text
              ${isPremium 
                ? 'bg-gradient-to-br from-premium-gold to-amber-600' 
                : 'bg-gradient-to-br from-base-text to-primary-dark'
              }`}
            >
              {price.replace('R$', '')}
            </span>
          </div>
          <span className="text-sm text-base-text-secondary uppercase tracking-widest font-semibold opacity-60">
            /mês
          </span>
        </div>
      </div>

      {/* Botão de Ação */}
      <div className="relative z-10 mt-2">
        <button
          onClick={onSelectPlan}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95 shadow-md
            ${isPremium
              ? 'bg-gradient-to-r from-premium-gold to-amber-600 text-white hover:shadow-amber-500/25'
              : 'bg-white border-2 border-primary-light text-primary-dark hover:bg-primary-light hover:border-primary-light hover:text-primary-dark-hover'
            }`}
        >
          Contratar Agora
        </button>
      </div>
    </article>
  );
}