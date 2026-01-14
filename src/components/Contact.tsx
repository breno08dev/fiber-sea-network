import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Send, Phone, MessageCircle, Mail, Copy, Check, Clock } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formState.name}. Telefone: ${formState.phone}. Mensagem: ${formState.message}`;
    const whatsappUrl = `https://wa.me/5511986339066?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setFormState({ name: '', phone: '', message: '' });
  };

  const copyEmail = () => {
    const email = 'networkfibersea@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  return (
    <section
      ref={ref}
      id="contato"
      className="relative py-24 bg-slate-50 overflow-hidden" // Base sólida limpa
    >
      {/* --- BACKGROUND PREMIUM --- */}
      
      {/* 1. Grid de Pontos de Alta Precisão */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{ 
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      />

      {/* 2. Máscara Radial (Vignette) para focar no centro e limpar as bordas */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f8fafc_100%)] pointer-events-none" />

      {/* 3. Luz de Topo Suave (Highlight) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50" />
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent opacity-80 pointer-events-none" />


      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* --- LADO ESQUERDO: Chamada e Contatos Diretos --- */}
          <div 
            className={`flex flex-col justify-center transition-all duration-1000 transform 
            ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <span className="inline-block py-1 px-3 rounded bg-white text-blue-700 border border-blue-100 text-xs font-bold tracking-widest uppercase mb-6 w-fit shadow-sm">
              Fale Conosco
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Pronto para <br/>
              <span className="text-blue-700">acelerar</span> sua vida?
            </h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed max-w-md font-medium">
              Não deixe para depois. Nossa equipe está online agora para tirar suas dúvidas e instalar sua ultra velocidade.
            </p>

            {/* Cards de Contato Rápido */}
            <div className="space-y-4">
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/5511986339066"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center p-5 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-100/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors border border-green-100/50">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">WhatsApp (Recomendado)</p>
                  <p className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors">(11) 98633-9066</p>
                </div>
              </a>

              {/* E-mail */}
              <div 
                onClick={copyEmail}
                className="group flex items-center p-5 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-100/50">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-5 flex-grow">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">E-mail</p>
                  <div className="flex items-center gap-2">
                    <p className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors break-all">
                      networkfibersea@gmail.com
                    </p>
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-green-500 animate-in fade-in zoom-in" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  {emailCopied && <span className="text-xs text-green-500 font-medium absolute right-5 top-5">Copiado!</span>}
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/60">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shadow-inner">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Horário de Atendimento</p>
                  <div className="text-slate-700 font-medium text-sm space-y-1">
                    <p><span className="font-bold text-slate-900">Seg - Sex:</span> 08:00 às 20:00</p>
                    <p><span className="font-bold text-slate-900">Sábado:</span> 09:00 às 14:00</p>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* --- LADO DIREITO: Formulário --- */}
          <div 
            className={`relative transition-all duration-1000 delay-200 transform 
            ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              
              {/* Efeito de brilho sutil no topo do card */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-80" />

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Envie uma mensagem</h3>
              <p className="text-slate-500 mb-8 text-sm">Preencha e retornaremos via WhatsApp.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Seu Nome</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 placeholder:font-normal"
                    placeholder="Como podemos te chamar?"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Seu WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 placeholder:font-normal"
                    placeholder="(11) 99999-9999"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 placeholder:font-normal resize-none"
                    placeholder="Gostaria de saber mais sobre..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Enviar no WhatsApp</span>
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}