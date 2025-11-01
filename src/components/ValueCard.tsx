import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number; // Atraso para a animação
}

export default function ValueCard({
  icon: Icon,
  title,
  description,
  delay,
}: ValueCardProps) {
  const ref = useRef(null);
  // Anima quando 30% do card estiver visível
  const isInView = useInView(ref, { threshold: 0.3 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      // Classes de animação individual (fade e slide-up)
      className={`bg-gray-900 rounded-2xl p-8 text-center transition-all duration-1000 ease-out transform hover:-translate-y-2 border-2 border-gray-800
                  ${
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
    >
      <div className="flex justify-center mb-6">
        <div className="bg-[#3BA9FC] bg-opacity-10 p-4 rounded-full">
          {/* Efeito de Glow no ícone */}
          <Icon className="w-10 h-10 text-[#3BA9FC] drop-shadow-[0_0_5px_rgba(59,169,252,0.7)]" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>
  );
}