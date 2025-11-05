// 1. "Mail" foi removido da importação
import { Facebook, Instagram } from 'lucide-react'; 
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import logoImage from '../Assets/sea.logo.png';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openConectNewWhatsApp = () => {
    const phoneNumber = '5516988392871';
    const message = "Olá, Conect New! Vi o site da Fiber Sea Network e gostaria de saber mais sobre seus serviços de desenvolvimento.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer
      ref={ref}
      className={`text-base-text py-12 opacity-0 transition-all duration-[1500ms] ease-out
                  ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        {/* Grid principal (centralizado no mobile) */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logoImage} 
              alt="Logo Fiber Sea Network" 
              className="h-36 w-auto mb-4" 
            />
            <p className="text-base-text-secondary">
              Fiber Sea Network — Internet sem limites, do jeito que você merece.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-dark">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-base-text-secondary hover:text-primary-dark transition">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('planos')} className="text-base-text-secondary hover:text-primary-dark transition">
                  Planos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('streaming')} className="text-base-text-secondary hover:text-primary-dark transition">
                  Streaming
                </button>
              </li>
               <li>
                <button onClick={() => scrollToSection('sobre')} className="text-base-text-secondary hover:text-primary-dark transition">
                  Nossa Essência
                </button>
              </li>
               <li>
                <button onClick={() => scrollToSection('localizacao')} className="text-base-text-secondary hover:text-primary-dark transition">
                  Localização
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-base-text-secondary hover:text-primary-dark transition">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-primary-dark">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1CivRXTnDZ/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-100 text-primary-dark p-3 rounded-full hover:bg-primary-dark hover:text-white transition transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                // 2. Link do Instagram ATUALIZADO
                href="https://www.instagram.com/fiberseanetwork" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-100 text-primary-dark p-3 rounded-full hover:bg-primary-dark hover:text-white transition transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* 3. Ícone de E-mail REMOVIDO */}
            </div>
          </div>
        </div>

        {/* Divisor e Copyright */}
        <div className="border-t border-border-color pt-8 text-center">
          <p className="text-base-text-secondary">
            © 2025 Fiber Sea Network - Todos os direitos reservados.
          </p>
          <p className="text-base-text-secondary text-sm mt-4">
            Desenvolvido por 
            <button 
              onClick={openConectNewWhatsApp} 
              className="text-primary-dark font-semibold hover:underline ml-1"
            >
              Conect New
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}