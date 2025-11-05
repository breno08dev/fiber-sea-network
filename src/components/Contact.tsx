import { useState, useRef } from 'react';
// 1. Importar o ícone de E-mail (Mail)
import { User, MessageSquare, Clock, Headset, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    message: '',
  });

  // 2. Estado para controlar a mensagem de "copiado!"
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const validateForm = () => {
    const newErrors = { name: '', message: '' };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Por favor, preencha seu nome.';
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Por favor, digite sua mensagem.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    if (validateForm()) {
      const phoneNumber = '5511986339066'; 
      const text = `Olá! Meu nome é ${formData.name}.%0A%0A${formData.message}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
      
      setFormData({ name: '', message: '' });
      setErrors({ name: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Função para copiar e-mail e mostrar mensagem
  const handleEmailCopy = () => {
    const email = 'networkfibersea@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      // Mostra a mensagem de sucesso
      setShowCopyMessage(true);
      // Esconde a mensagem após 2 segundos
      setTimeout(() => {
        setShowCopyMessage(false);
      }, 2000);
    }).catch(err => {
      console.error('Erro ao copiar e-mail: ', err);
    });
  };


  return (
    <section
      ref={ref}
      id="contato"
      className={`py-20 bg-primary-light opacity-0 transition-all duration-[1500ms] ease-out
                  ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
       <div className="text-center mb-16">
          <h2 className="inline-block bg-primary-dark text-white text-3xl md:text-4xl font-bold px-8 py-3 rounded-full shadow-lg shadow-primary-dark/30">
           Atendimento
          </h2>
          
          <p className="text-xl text-base-text-secondary max-w-2xl mx-auto">
            <br />Estamos prontos para te atender. Envie sua mensagem ou venha nos visitar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* COLUNA DA ESQUERDA: Card de Horários e E-mail */}
          <div className="bg-base-white p-8 md:p-12 rounded-2xl shadow-lg border border-border-color space-y-8">
            
            <h3 className="text-3xl font-bold text-base-text text-center">Nossos Horários</h3>

            {/* Atendimento Comercial */}
            <div className="flex flex-col items-center text-center">
              <Clock className="w-8 h-8 text-primary-dark" />
              <h4 className="text-2xl font-semibold mt-2 mb-2 text-base-text">Atendimento Comercial</h4>
              <div className="text-base-text-secondary text-lg space-y-1">
                <p>Segunda a Sexta: 08:00 às 20:00</p>
                <p>Sábado: 09:00 às 14:00</p>
              </div>
            </div>

            {/* Suporte Técnico */}
            <div className="flex flex-col items-center text-center">
              <Headset className="w-8 h-8 text-primary-dark" />
              <h4 className="text-2xl font-semibold mt-2 mb-2 text-base-text">Suporte Técnico</h4>
              <div className="text-base-text-secondary text-lg space-y-1">
                <p>Segunda a Sexta: 08:00 às 20:00</p>
                <p>Sábado: 09:00 às 14:00</p>
              </div>
            </div>

            {/* 4. Divisor */}
            <hr className="w-3/4 mx-auto border-border-color" />

            {/* 5. Bloco de E-mail Adicionado */}
            <div className="flex flex-col items-center text-center">
              <Mail className="w-8 h-8 text-primary-dark" />
              <h4 className="text-2xl font-semibold mt-2 mb-2 text-base-text">E-mail</h4>
              
              <button
                type="button" 
                onClick={handleEmailCopy}
                className="text-base-text-secondary text-lg font-medium cursor-pointer hover:text-primary-dark transition"
                title="Copiar e-mail"
              >
                networkfibersea@gmail.com
              </button>
              
              {/* 6. Mensagem de Feedback (Toast) */}
              {showCopyMessage && (
                <p className="text-green-600 text-sm font-semibold mt-2">
                  E-mail copiado com sucesso!
                </p>
              )}
            </div>
          </div>

          {/* COLUNA DA DIREITA: Card de Formulário */}
          <div className="bg-base-white p-8 md:p-12 rounded-2xl shadow-lg border border-border-color">
            <h3 className="text-3xl font-bold text-base-text mb-6">Envie sua Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-base-text mb-2">
                  Seu Nome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-border-color rounded-lg focus:border-primary-dark focus:outline-none focus:ring-4 focus:ring-primary-dark/30 transition text-base-text"
                    placeholder="Nome completo"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-base-text mb-2">
                  Mensagem
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-border-color rounded-lg focus:border-primary-dark focus:outline-none focus:ring-4 focus:ring-primary-dark/30 transition text-base-text resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  />
                </div>
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#20ba5a] transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Enviar via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}