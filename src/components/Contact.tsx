import { useState, useRef } from 'react';
import { User, MessageSquare } from 'lucide-react';
import contactImage from '../assets/atendimento.png';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.name}.%0A%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      id="contato"
      // Duração alterada para 1500ms
      className={`py-20 opacity-0 transition-all duration-[1500ms] ease-out
                  ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Preencha o formulário e nossa equipe entrará em contato com você pelo WhatsApp.
            </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-lg border border-gray-800 grid md:grid-cols-2">
            <div
                className="relative rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${contactImage})` }}
            >
                <div className="absolute inset-0 bg-[#000000] bg-opacity-70 flex flex-col items-center justify-center p-8 text-center rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
                    <h3 className="text-3xl font-bold text-white mb-2">Contato Direto</h3>
                    <p className="text-white">Estamos a uma mensagem de distância para tirar suas dúvidas e ajudar você a escolher o melhor plano.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Seu Nome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:border-[#3BA9FC] focus:outline-none focus:ring-4 focus:ring-[#3BA9FC]/30 transition text-white"
                    placeholder="Nome completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Mensagem
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:border-[#3BA9FC] focus:outline-none focus:ring-4 focus:ring-[#3BA9FC]/30 transition text-white resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#20ba5a] transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Enviar via WhatsApp</span>
              </button>
            </form>
        </div>
      </div>
    </section>
  );
}