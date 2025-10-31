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
      className={`py-20 bg-black opacity-0 transition-all duration-[1500ms] ease-out
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          
          <div className="relative h-96 lg:h-[500px] w-full">
            <div
              className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl bg-cover bg-center shadow-2xl transform -rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105"
              style={{
                backgroundImage: `url(${streamingImageUrl})`,
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-2xl bg-cover bg-center shadow-2xl transform rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105 border-4 border-black"
              style={{
                backgroundImage: `url(${gamingImageUrl})`,
              }}
            />
          </div>

          <div className="space-y-8">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start space-x-5">
                  <div className="flex-shrink-0 bg-[#3BA9FC]/10 p-3 rounded-full">
                    <Icon className="w-7 h-7 text-[#3BA9FC]" />
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