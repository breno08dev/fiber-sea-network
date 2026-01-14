import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ToastCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Efeito para aparecer após 30 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // 30 segundos

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '5511986339066';
    const message = "Olá! Estava navegando no site e tenho uma dúvida. Pode me ajudar?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100%-3rem)] md:w-auto
                  transition-all duration-700 ease-out transform
                  ${isClosing ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}
                `}
    >
      <div className="relative group">
        
        {/* O Toast clicável (Estilo Card Premium) */}
        <button
          onClick={openWhatsApp}
          className="flex items-center w-full p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-100 hover:border-blue-300 hover:shadow-blue-900/10 transition-all duration-300 text-left"
        >
          {/* Ícone com indicador de Status */}
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
              <MessageCircle className="w-6 h-6" />
            </div>
            {/* Bolinha de "Online" (Pulsante) */}
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse shadow-sm"></span>
          </div>
          
          {/* Textos */}
          <div className="ml-4">
            <p className="font-bold text-slate-900 text-base mb-0.5 group-hover:text-blue-700 transition-colors">
              Podemos ajudar?
            </p>
            <p className="text-sm text-slate-500 font-medium leading-tight">
              Fale conosco agora mesmo pelo WhatsApp.
            </p>
          </div>
        </button>

        {/* Botão de Fechar (Estilo Pílula Flutuante) */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Evita abrir o whats ao clicar no fechar
            handleClose();
          }}
          className="absolute -top-3 -right-2 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 hover:border-red-100 shadow-md transition-all duration-300"
          aria-label="Fechar notificação"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}