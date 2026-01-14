import { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se já aceitou ou recusou
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Pequeno delay para aparecer suavemente
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 flex justify-center md:justify-end pointer-events-none">
      <div 
        className="bg-white/90 backdrop-blur-md border border-slate-200 p-6 rounded-[1.5rem] shadow-2xl shadow-slate-300/50 max-w-md w-full pointer-events-auto transform transition-all duration-500 animate-in slide-in-from-bottom-10 fade-in zoom-in-95"
      >
        {/* Cabeçalho com Ícone e Fechar */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Ícone de Cookie em AZUL (Padrão do site) */}
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-lg leading-tight">Cookies e Privacidade</h4>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-wide">Transparência Total</p>
            </div>
          </div>
          <button 
            onClick={handleDecline} 
            className="text-slate-400 hover:text-slate-600 transition-colors p-1"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Texto Explicativo */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
          Nós utilizamos cookies para personalizar sua experiência e garantir que você encontre a melhor conexão possível. 
          Ao continuar, você concorda com nossa política.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            // Botão Aceitar no AZUL PADRÃO (#1d4ed8 / blue-700)
            className="flex-1 bg-[#1d4ed8] hover:bg-blue-800 text-white py-3 px-4 rounded-xl font-bold text-sm shadow-lg hover:shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            Aceitar Todos
          </button>
          
          <button
            onClick={handleDecline}
            className="flex-1 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}