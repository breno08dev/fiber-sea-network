import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Tv, Smartphone, Tablet, Cast, PlayCircle, Film, Wifi } from 'lucide-react';
// IMPORTANDO A IMAGEM DOS ASSETS
import streamingScreenImage from '../Assets/streaming.png'; 

export default function Streaming() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  // Lista de Benefícios
  const features = [
    {
      title: 'Multi-telas',
      description: 'Assista na TV, celular ou tablet simultaneamente sem travar.',
      icon: Cast,
    },
    {
      title: 'Conteúdo 4K',
      description: 'Filmes e séries com a máxima definição de imagem e som.',
      icon: Film,
    },
    {
      title: 'Apps Favoritos',
      description: 'Acesso direto aos principais streamings do mercado.',
      icon: PlayCircle,
    },
  ];

  return (
    <section
      ref={ref}
      id="streaming"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-sky-50 to-blue-100"
    >
      {/* Background Decorativo (Ondas Suaves) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-200 to-transparent rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-sky-200 to-transparent rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div 
          className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 transform 
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-[#1d4ed8] border border-blue-200 text-sm font-bold tracking-wider mb-4 uppercase">
            Entretenimento Premium
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
            O cinema vai até a <span className="text-[#1d4ed8]">sua casa</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Transforme sua sala em uma central de entretenimento com a estabilidade que só a nossa Internet oferece.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LADO ESQUERDO: IMAGEM MODERNIZADA --- */}
          <div 
            className={`relative group perspective-1000 transition-all duration-1000 delay-200 transform 
            ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* 1. Efeito AMBILIGHT (Brilho atrás da TV) */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-slow"></div>

            {/* 2. Card Principal (A Tela) */}
            <div className="relative z-10 bg-slate-900 p-1.5 rounded-[2rem] shadow-2xl shadow-blue-900/40 transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
              <div className="relative rounded-[1.7rem] overflow-hidden aspect-video bg-black">
                
                {/* Imagem Limpa com Zoom Suave */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${streamingScreenImage})` }}
                />
                
                {/* Brilho especular (reflexo de vidro) no canto superior */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>

            {/* 3. ELEMENTOS FLUTUANTES (Badges 3D) */}
            
            {/* Badge 1: 4K Ultra HD (Direita - Mais ALTO) */}
            {/* Ajuste: -top-12 (mais alto) e bg-slate-900/90 (mais escuro) */}
            <div className="absolute -right-6 -top-12 z-20 animate-float">
              <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform">
                <div className="bg-blue-500/20 p-2.5 rounded-xl text-blue-400">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 font-bold uppercase tracking-wider mb-0.5">Qualidade</p>
                  <p className="text-white font-black text-base">4K Ultra HD</p>
                </div>
              </div>
            </div>

            {/* Badge 2: Conexão Estável (Esquerda - Mais BAIXO) */}
            {/* Ajuste: -bottom-12 (mais baixo) e bg-slate-900/90 (mais escuro) */}
            <div className="absolute -left-6 -bottom-12 z-20 animate-float-delayed">
              <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform">
                <div className="bg-green-500/20 p-2.5 rounded-xl text-green-400">
                  <Wifi className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-green-200 font-bold uppercase tracking-wider mb-0.5">Conexão</p>
                  <p className="text-white font-black text-base">Ultra Estável</p>
                </div>
              </div>
            </div>

          </div>


          {/* --- LADO DIREITO: FEATURES --- */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-400 transform 
            ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {features.map((feature, index) => (
              <article 
                key={index}
                className="group flex items-start p-6 rounded-2xl bg-white/60 hover:bg-white border border-white/50 hover:border-blue-200 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-[#1d4ed8] transition-colors duration-300 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-[#1d4ed8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#1d4ed8] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}

            {/* CTA Pequeno */}
            <div className="pt-4">
              <a 
                href="#planos" 
                className="inline-flex items-center text-[#1d4ed8] font-bold hover:text-blue-700 transition-colors group"
              >
                Ver planos com streaming 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Faixa de Logos (Apps) */}
        <div className="mt-20 pt-10 border-t border-blue-200/50">
           <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">
             Compatível com seus dispositivos favoritos
           </p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <Tv className="w-10 h-10 text-slate-600 group-hover:text-[#1d4ed8] transition-colors" />
                <span className="text-xs font-medium text-slate-500">Smart TV</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <Smartphone className="w-10 h-10 text-slate-600 group-hover:text-[#1d4ed8] transition-colors" />
                <span className="text-xs font-medium text-slate-500">Mobile</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <Tablet className="w-10 h-10 text-slate-600 group-hover:text-[#1d4ed8] transition-colors" />
                <span className="text-xs font-medium text-slate-500">Tablet</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <Cast className="w-10 h-10 text-slate-600 group-hover:text-[#1d4ed8] transition-colors" />
                <span className="text-xs font-medium text-slate-500">TV Box</span>
              </div>
           </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}