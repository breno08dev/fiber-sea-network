import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../Assets/sea.logo.png'; // (Confirme se 'image.png' é o nome correto)

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openWhatsAppAssinatura = () => {
    const message = "Olá! Gostaria de saber mais sobre os planos de internet para assinar agora.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-base-white shadow-lg' : 'bg-base-white'
      }`}
    >
      {/* MUDANÇA AQUI: O padding vertical foi de 'py-4' para 'py-2' 
        Isso diminui a altura total do cabeçalho.
      */}
      <div className="container mx-auto px-4 py-0 flex items-center justify-between">
        <button onClick={() => scrollToSection('inicio')} aria-label="Página Inicial">
          {/* MUDANÇA AQUI: A altura da logo foi de 'h-10' (40px) para 'h-9' (36px)
            Como o padding do cabeçalho diminuiu, a logo agora parecerá maior.
          */}
          <img 
            src={logoImage} 
            alt="Logo da Empresa" 
            className="h-28 w-auto" 
          />
        </button>

        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('inicio')} className="text-base-text hover:text-primary-dark transition">
            Início
          </button>
          <button onClick={() => scrollToSection('planos')} className="text-base-text hover:text-primary-dark transition">
            Planos
          </button>
          <button onClick={() => scrollToSection('streaming')} className="text-base-text hover:text-primary-dark transition">
            Streaming
          </button>
          <button onClick={() => scrollToSection('sobre')} className="text-base-text hover:text-primary-dark transition">
            Sobre Nós
          </button>
          <button onClick={() => scrollToSection('localizacao')} className="text-base-text hover:text-primary-dark transition">
            Localização
          </button>
          <button onClick={() => scrollToSection('contato')} className="text-base-text hover:text-primary-dark transition">
            Contato
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8 text-base-text" /> : <Menu className="w-8 h-8 text-base-text" />}
          </button>
        </div>

        <button
          onClick={openWhatsAppAssinatura}
          className="hidden md:block btn-primary px-6 py-2"
        >
          Assine Agora
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-base-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <button onClick={() => scrollToSection('inicio')} className="text-base-text hover:text-primary-dark transition">
              Início
            </button>
            <button onClick={() => scrollToSection('planos')} className="text-base-text hover:text-primary-dark transition">
              Planos
            </button>
            <button onClick={() => scrollToSection('streaming')} className="text-base-text hover:text-primary-dark transition">
              Streaming
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-base-text hover:text-primary-dark transition">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="text-base-text hover:text-primary-dark transition">
              Localização
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-base-text hover:text-primary-dark transition">
              Contato
            </button>
            <button
              onClick={openWhatsAppAssinatura}
              className="btn-primary px-6 py-2"
            >
              Assine Agora
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}