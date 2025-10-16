import { Wifi, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wifi className="w-8 h-8 text-[#3BA9FC]" />
              <span className="text-2xl font-bold">NetFuture</span>
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
            &copy; 2025 NetFuture - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
