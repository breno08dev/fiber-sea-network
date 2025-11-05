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
    // 1. Fundo branco (bg-base-white) e borda clara (border-border-color)
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-base-white shadow-lg border-t-2 border-border-color">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Texto e Ícone */}
          <div className="flex items-center space-x-3">
            {/* 2. Ícone no novo azul escuro (text-primary-dark) */}
            <Cookie className="w-6 h-6 text-primary-dark flex-shrink-0 drop-shadow-[0_0_5px_rgba(0,90,156,0.3)]" />
            {/* 3. Texto no novo cinza secundário (text-base-text-secondary) */}
            <p className="text-base-text-secondary text-sm md:text-base">
              Nós utilizamos cookies para melhorar sua experiência de navegação.
              Ao continuar, você concorda com nossa política de privacidade.
            </p>
          </div>

          {/* Botão de Aceite */}
          <button
            onClick={handleAccept}
            // 4. Usando a classe de botão global (btn-primary) que já criamos
            className="btn-primary"
          >
            Entendi e aceito
          </button>
        </div>
      </div>
    </div>
  );
}