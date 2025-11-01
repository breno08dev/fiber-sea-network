import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já deu consentimento
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Salva o consentimento no localStorage e esconde o banner
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 shadow-lg border-t-2 border-gray-800">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Texto e Ícone */}
          <div className="flex items-center space-x-3">
            <Cookie className="w-6 h-6 text-[#3BA9FC] flex-shrink-0 drop-shadow-[0_0_5px_rgba(59,169,252,0.7)]" />
            <p className="text-gray-300 text-sm md:text-base">
              Nós utilizamos cookies para melhorar sua experiência de navegação.
              Ao continuar, você concorda com nossa política de privacidade.
            </p>
          </div>

          {/* Botão de Aceite */}
          <button
            onClick={handleAccept}
            className="bg-[#3BA9FC] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2a8cd6] transition transform hover:scale-105 flex-shrink-0"
          >
            Entendi e aceito
          </button>
        </div>
      </div>
    </div>
  );
}