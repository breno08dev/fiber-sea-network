import { Gamepad2, Tv, Upload, Users } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

// Imagens da sua pasta Assets
import streamingImageUrl from '../Assets/familia22.png';
import gamingImageUrl from '../Assets/gamer2.jpg';

const benefits = [
  {
    icon: Tv,
    title: 'Streaming em 4K UHD',
    description:
      'Assista a filmes e séries na máxima resolução, sem buffering ou travamentos — mesmo com várias telas conectadas.',
  },
  {
    icon: Gamepad2,
    title: 'Jogos Online Sem Lag',
    description:
      'Conquiste suas vitórias com a menor latência (ping). Nossa fibra é a arma secreta para quem busca desempenho máximo.',
  },
  {
    icon: Upload,
    title: 'Upload Rápido para Criadores',
    description:
      'Faça lives, participe de reuniões em HD e envie arquivos grandes para a nuvem em segundos, não em horas.',
  },
  {
    icon: Users,
    title: 'Toda a Casa Conectada',
    description:
      'Conecte Smart TVs, notebooks e celulares ao mesmo tempo — estabilidade total em todos os cômodos.',
  },
];

export default function Streaming() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="streaming"
      className={`bg-base-white py-16 border-t-2 border-primary-light opacity-0 transition-all duration-[1500ms] ease-out
                  ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">

        {/* 1. TÍTULO E SUBTÍTULO CENTRALIZADOS */}
        <div className="text-center mb-16">
          {/* MUDANÇA AQUI: Alterado de 'bg-premium-gold' para 'bg-primary-dark' */}
          <h2 className="inline-block bg-primary-dark text-white text-3xl md:text-4xl font-bold px-8 py-3 rounded-full shadow-lg shadow-primary-dark/30">
            Sua diversão em alta velocidade
          </h2>
          
          <p className="text-xl text-base-text-secondary mt-6 max-w-3xl mx-auto">
            Uma conexão pensada para tudo que você mais gosta de fazer online — com estabilidade, velocidade real e suporte de verdade.
          </p>
        </div>

        {/* 2. Grid de 2 colunas: Imagens (Esquerda) e Benefícios (Direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUNA DA ESQUERDA (Imagens sobrepostas) */}
          <div className="flex flex-col items-center lg:relative lg:h-[500px]">
            <img
              src={streamingImageUrl}
              alt="Pessoas assistindo streaming"
              className="w-11/12 h-64 rounded-2xl shadow-2xl object-cover z-10
                         transform -rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105
                         lg:absolute lg:top-0 lg:left-0 lg:w-3/4 lg:h-3/4"
            />
            <img
              src={gamingImageUrl}
              alt="Amigos jogando video game"
              className="w-11/12 h-64 rounded-2xl shadow-2xl object-cover border-4 border-base-white z-20
                         transform rotate-6 -mt-32 transition-transform duration-500 hover:rotate-0 hover:scale-105
                         lg:absolute lg:bottom-0 lg:right-0 lg:w-3/4 lg:h-3/4 lg:mt-0"
            />
          </div>

          {/* COLUNA DA DIREITA (Apenas os Benefícios) */}
          <div className="space-y-8">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start space-x-5">
                  <div className="flex-shrink-0 bg-primary-light p-3 rounded-full">
                    <Icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-base-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}