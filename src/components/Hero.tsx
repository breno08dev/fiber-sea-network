import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import heroBackgroundImage from '../assets/familia2.jpg';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

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
      // Hero com altura total da tela
      className={`relative h-screen flex items-center text-base-text pt-24
                 opacity-0 transition-all duration-[1500ms] ease-in-out
                 ${isInView ? 'opacity-100 scale-100' : 'scale-90'}`}
    >
      {/* Imagem de fundo com gradiente */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
        }}
      >
        {/* Overlay de gradiente para destacar o texto à esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 via-primary-dark/30 to-transparent" />
      </div>

      {/* Conteúdo do Hero - alinhado à esquerda */}
      <div className="relative z-10 container mx-auto px-4 text-left max-w-7xl">
        
        {/* 1. Título Principal (H1) - Grande e em negrito */}
        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 leading-tight max-w-2xl">
           Contrate agora a melhor internet da região!
        </h1>
        
        {/* 2. Descrição Principal - Tamanho médio */}
        <p className="text-white text-xl md:text-2xl max-w-2xl mb-4">
          Tenha 100% de fibra óptica com velocidade real, estabilidade e qualidade garantida.
        </p>

        {/* 3. Nome da Empresa / Slogan - Destaque com negrito médio */}
        <p className="text-white text-lg md:text-xl font-semibold max-w-2xl mb-4">
           Fiber Sea Network — Internet sem limites, do jeito que você merece.
        </p>

        {/* 4. Chamada final - Itálico e cor mais suave */}
        <p className="text-gray-200 text-lg max-w-2xl mb-8 italic">
          Pergunte pra quem tem, e comprove a diferença!
        </p>

        {/* Botão CTA */}
        <button
          onClick={openWhatsApp}
          className="btn-primary px-10 py-4 text-lg"
        >
          Contratar Agora
        </button>

      </div>
    </section>
  );
}