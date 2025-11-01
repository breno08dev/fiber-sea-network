import { Gamepad2, Tv, Upload, Users } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

import streamingImageUrl from '../assets/vovo.png';
import gamingImageUrl from '../assets/amigos.png';

const benefits = [
  {
    icon: Tv,
    title: 'Streaming em 4K UHD',
    description:
      'Assista a filmes e séries na máxima resolução, sem buffering ou travamentos, mesmo em várias telas.',
  },
  {
    icon: Gamepad2,
    title: 'Jogos Online Sem Lag',
    description:
      'Conquiste suas vitórias com a menor latência (ping). Nossa fibra óptica é a arma secreta para sua performance.',
  },
  {
    icon: Upload,
    title: 'Upload Rápido para Criadores',
    description:
      'Faça lives, participe de videochamadas em HD ou suba vídeos e arquivos pesados para a nuvem em segundos, não em horas.',
  },
  {
    icon: Users,
    title: 'Toda a Casa Conectada',
    description:
      'Conecte Smart TVs, notebooks, celulares e consoles ao mesmo tempo sem que ninguém sofra com lentidão.',
  },
];

export default function Streaming() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="streaming"
      // Duração alterada para 1500ms (mantendo a animação suave de subida)
      className={`py-20 opacity-0 transition-all duration-[1500ms] ease-out
                  ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sua diversão em alta velocidade
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma conexão pensada para tudo que você mais gosta de fazer online.
          </p>
        </div>

        {/* Grid principal: 1 coluna no mobile, 2 em desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          
          {/* Coluna de Imagens (MODIFICADA para "Bonito" no Mobile) */}
          {/*
            Mobile (Padrão):
            - flex-col / items-center: Centraliza o "stack" de imagens.
            - as imagens usam w-11/12 para não cortar nas bordas com a rotação.
            - A segunda imagem usa -mt-32 (uma sobreposição grande) e z-20.
            
            Desktop (lg:):
            - lg:relative / lg:h-[500px]: Reseta o flex e define altura para o position absolute.
            - as imagens resetam suas larguras/rotações/margens para o layout de desktop.
          */}
          <div className="flex flex-col items-center lg:relative lg:h-[500px]">
            {/* Imagem 1: Fica por baixo, rotacionada */}
            <img
              src={streamingImageUrl}
              alt="Pessoas assistindo streaming"
              className="w-11/12 h-64 rounded-2xl shadow-2xl object-cover z-10
                         transform -rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105
                         lg:absolute lg:top-0 lg:left-0 lg:w-3/4 lg:h-3/4"
            />
            {/* Imagem 2: Fica por cima, rotacionada na outra direção e sobreposta */}
            <img
              src={gamingImageUrl}
              alt="Amigos jogando video game"
              className="w-11/12 h-64 rounded-2xl shadow-2xl object-cover border-4 border-black z-20
                         transform rotate-6 -mt-32 transition-transform duration-500 hover:rotate-0 hover:scale-105
                         lg:absolute lg:bottom-0 lg:right-0 lg:w-3/4 lg:h-3/4 lg:mt-0"
            />
          </div>

          {/* Coluna de Texto/Benefícios */}
          <div className="space-y-8">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start space-x-5">
                  <div className="flex-shrink-0 bg-[#3BA9FC]/10 p-3 rounded-full">
                    <Icon className="w-7 h-7 text-[#3BA9FC] drop-shadow-[0_0_5px_rgba(59,169,252,0.7)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
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