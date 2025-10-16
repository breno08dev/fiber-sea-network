import { useState, useEffect } from 'react';
import { Wifi, Menu, X } from 'lucide-react';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Wifi className="w-8 h-8 text-[#3BA9FC]" />
          <span className="text-2xl font-bold text-white">NetFuture</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-[#3BA9FC] transition">
            Início
          </button>
          <button onClick={() => scrollToSection('planos')} className="text-white hover:text-[#3BA9FC] transition">
            Planos
          </button>
          <button onClick={() => scrollToSection('streaming')} className="text-white hover:text-[#3BA9FC] transition">
            Streaming
          </button>
          <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-[#3BA9FC] transition">
            Sobre Nós
          </button>
          <button onClick={() => scrollToSection('localizacao')} className="text-white hover:text-[#3BA9FC] transition">
            Localização
          </button>
          <button onClick={() => scrollToSection('contato')} className="text-white hover:text-[#3BA9FC] transition">
            Contato
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
          </button>
        </div>

        <button
          onClick={() => scrollToSection('contato')}
          className="hidden md:block bg-[#3BA9FC] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2a8cd6] transition transform hover:scale-105"
        >
          Assine Agora
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-[#3BA9FC] transition">
              Início
            </button>
            <button onClick={() => scrollToSection('planos')} className="text-white hover:text-[#3BA9FC] transition">
              Planos
            </button>
            <button onClick={() => scrollToSection('streaming')} className="text-white hover:text-[#3BA9FC] transition">
              Streaming
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-[#3BA9FC] transition">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="text-white hover:text-[#3BA9FC] transition">
              Localização
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-white hover:text-[#3BA9FC] transition">
              Contato
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#3BA9FC] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2a8cd6] transition transform hover:scale-105"
            >
              Assine Agora
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}