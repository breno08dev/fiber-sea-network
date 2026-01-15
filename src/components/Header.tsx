import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../Assets/sea.logo.png'; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função ajustada para funcionar com âncoras
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openWhatsAppAssinatura = () => {
    const message = "Olá! Gostaria de saber mais sobre os planos de internet para assinar agora.";
    const whatsappUrl = `https://wa.me/5511986339066?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Planos', id: 'planos' },
    { label: 'Streaming', id: 'streaming' },
    { label: 'Sobre Nós', id: 'sobre' },
    { label: 'Localização', id: 'localizacao' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'glass shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Link */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, 'inicio')}
          aria-label="Ir para o início"
          className="flex-shrink-0"
        >
          <img 
            src={logoImage} 
            alt="Fiber Sea Network Logo" 
            className={`transition-all duration-300 w-auto ${isScrolled ? 'h-16' : 'h-12 md:h-16'}`} 
          />
        </a>

        {/* Desktop Nav - Semanticamente correto com UL/LI */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                    isScrolled ? 'text-base-text hover:text-primary-dark' : 'text-base-text md:text-white md:hover:text-primary-light hover:text-primary-dark'
                  }`}
                  // Nota: Se o Header ficar sobre uma imagem escura no topo (Hero), o texto branco é melhor.
                  // Ajustei a lógica de cor: se não scrollou (topo), texto branco (para contraste com Hero), senão escuro.
                  // Se o fundo do seu Hero for claro, remova a lógica de cor branca.
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão Desktop */}
        <div className="hidden md:block">
          <button
            onClick={openWhatsAppAssinatura}
            className="btn-primary text-sm px-6 py-2.5 shadow-lg shadow-primary-dark/20"
          >
            Assine Agora
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`focus:outline-none transition-colors ${
               !isScrolled && !isMenuOpen ? 'text-white drop-shadow-md' : 'text-base-text'
            }`}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-base-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-300 origin-top ${
          isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col items-center py-6 space-y-6">
          <ul className="flex flex-col items-center space-y-4 w-full">
            {navItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block text-lg font-medium text-base-text hover:text-primary-dark transition py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={openWhatsAppAssinatura}
            className="btn-primary w-3/4 max-w-xs text-center justify-center"
          >
            Assine Agora
          </button>
        </nav>
      </div>
    </header>
  );
}