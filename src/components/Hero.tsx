import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import heroBackgroundImage from '../Assets/familia2.jpg';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const openWhatsApp = () => {
    const phoneNumber = '5511986339066';
    const message = "Olá! Vi seu site e gostaria de contratar a melhor internet da região!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Imagem de fundo com efeito Parallax (fixo) opcional ou cover normal */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10s] ease-linear hover:scale-110"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
        }}
      >
        {/* Overlay Moderno: Gradiente radial + linear para foco no conteúdo */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
        <div 
          className={`max-w-3xl transition-all duration-1000 ease-out transform ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          {/* Badge / Tagline pequena */}
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-dark/30 backdrop-blur-md border border-primary-light/20 shadow-lg">
            <span className="text-primary-light font-semibold tracking-wider text-sm uppercase">
              O futuro chegou
            </span>
          </div>
          
          {/* 1. Título Principal (H1) - Design Moderno (Tight tracking, Drop Shadow) */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight drop-shadow-xl">
            Contrate agora a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              melhor internet
            </span> 
            <br/> da região!
          </h1>
          
          {/* 2. Descrição Principal */}
          <p className="text-gray-100 text-lg md:text-2xl max-w-2xl mb-6 font-light leading-relaxed drop-shadow-md">
            Tenha <strong className="font-semibold text-white">100% de fibra óptica</strong> com velocidade real, estabilidade e qualidade garantida.
          </p>

          {/* 3. Nome da Empresa / Slogan */}
          <div className="border-l-4 border-primary-dark pl-4 mb-8 backdrop-blur-[2px]">
            <p className="text-white text-lg md:text-xl font-medium">
               Fiber Sea Network — Internet sem limites, do jeito que você merece.
            </p>
          </div>

          {/* 4. Chamada final */}
          <p className="text-gray-300 text-base md:text-lg mb-8 italic opacity-90">
            Pergunte pra quem tem, e comprove a diferença!
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openWhatsApp}
              className="btn-primary text-lg px-10 py-4 shadow-[0_0_30px_rgba(0,90,156,0.6)] animate-pulse-slow"
            >
              Contratar Agora
            </button>
            
            {/* Botão Secundário Opcional (apenas visual, ou link para planos) */}
            <a 
              href="#planos"
              className="px-10 py-4 rounded-full font-bold text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all text-center flex items-center justify-center"
            >
              Ver Planos
            </a>
          </div>
        </div>
      </div>

    
    </section>
  );
}