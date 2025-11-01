import { Wifi, Facebook, Instagram, Mail } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      // Duração alterada para 1500ms
      className={`text-white py-12 opacity-0 transition-all duration-[1500ms] ease-out
                  ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wifi className="w-8 h-8 text-[#3BA9FC] drop-shadow-[0_0_5px_rgba(59,169,252,0.7)]" />
              <span className="text-2xl font-bold">SUA EMPRESA</span>
            </div>
            <p className="text-gray-400">
              Conectando você ao que realmente importa com velocidade e estabilidade.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#3BA9FC]">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-[#3BA9FC] transition">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('planos')} className="text-gray-400 hover:text-[#3BA9FC] transition">
                  Planos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('streaming')} className="text-gray-400 hover:text-[#3BA9FC] transition">
                  Streaming
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-gray-400 hover:text-[#3BA9FC] transition">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#3BA9FC]">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#3BA9FC] transition transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#3BA9FC] transition transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#3BA9FC] transition transform hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SUA EMPRESA - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}