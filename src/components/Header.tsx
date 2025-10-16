import { useState, useEffect } from 'react';
import { Wifi } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Wifi className="w-8 h-8 text-[#3BA9FC]" />
          <span className="text-2xl font-bold text-black">NetFuture</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('inicio')} className="text-black hover:text-[#3BA9FC] transition">
            Início
          </button>
          <button onClick={() => scrollToSection('planos')} className="text-black hover:text-[#3BA9FC] transition">
            Planos
          </button>
          <button onClick={() => scrollToSection('streaming')} className="text-black hover:text-[#3BA9FC] transition">
            Streaming
          </button>
          <button onClick={() => scrollToSection('sobre')} className="text-black hover:text-[#3BA9FC] transition">
            Sobre Nós
          </button>
          <button onClick={() => scrollToSection('localizacao')} className="text-black hover:text-[#3BA9FC] transition">
            Localização
          </button>
          <button onClick={() => scrollToSection('contato')} className="text-black hover:text-[#3BA9FC] transition">
            Contato
          </button>
        </nav>

        <button
          onClick={() => scrollToSection('contato')}
          className="bg-[#3BA9FC] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2a8cd6] transition transform hover:scale-105"
        >
          Assine Agora
        </button>
      </div>
    </header>
  );
}
