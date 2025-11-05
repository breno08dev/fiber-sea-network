import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ToastCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Efeito para aparecer após 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // 30 segundos

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
  }, []); // O array vazio garante que isso rode apenas uma vez

  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '5511986339066'; // Seu número principal
    const message = "Olá! Estava navegando no site e tenho uma dúvida. Pode me ajudar?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    handleClose(); // Fecha o toast ao clicar
  };

  // Função para fechar (com animação de saída)
  const handleClose = () => {
    setIsClosing(true);
    // Remove do DOM após a animação de 500ms
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  // Não renderiza nada se não estiver visível
  if (!isVisible) {
    return null;
  }

  return (
    <div
      // MUDANÇA AQUI: "top-6" alterado para "bottom-6"
      className={`fixed bottom-6 right-6 z-50 max-w-sm
                  transition-all duration-500 ease-out
                  ${isClosing ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}
                `}
    >
      {/* O Toast clicável */}
      <button
        onClick={openWhatsApp}
        className="flex items-center w-full p-4 bg-base-white rounded-lg shadow-2xl border border-border-color hover:shadow-primary-dark/20 hover:-translate-y-1 transition-all"
      >
        {/* Ícone */}
        <div className="flex-shrink-0">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-light">
            <MessageCircle className="w-6 h-6 text-primary-dark" />
          </span>
        </div>
        
        {/* Textos */}
        <div className="ml-4 text-left">
          <p className="font-semibold text-base-text">Podemos ajudar?</p>
          <p className="text-sm text-base-text-secondary">Fale conosco agora mesmo pelo WhatsApp.</p>
        </div>
      </button>

      {/* Botão de Fechar separado */}
      <button
        onClick={handleClose}
        className="absolute -top-2 -right-2 w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-all"
        aria-label="Fechar notificação"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}