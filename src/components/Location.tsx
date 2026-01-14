import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Nosso Endereço',
      content: 'Rua Gagliano Netto, 363',
      subContent: 'Jardin Soráia - São Paulo/SP | CEP: 05872-080',
      action: 'Ver no mapa',
    },
    {
      icon: Clock,
      title: 'Atendimento Local',
      content: 'Segunda a Sexta: 08:00 às 20:00',
      subContent: 'Sábado: 09:00 às 14:00 (Domingo: Fechado)',
    },
  ];

  return (
    <section
      ref={ref}
      id="localizacao"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background Decorativo (Pontilhada Sutil) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- COLUNA 1: Informações --- */}
          <div 
            className={`transition-all duration-1000 transform 
            ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <span className="inline-block py-1 px-3 rounded bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold tracking-widest uppercase mb-6">
              Localização
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              Sua internet está a <br/> um <span className="text-blue-700">passo</span> de você
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Estamos prontos para atender você. Confira nosso endereço e horários de funcionamento abaixo.
            </p>

            {/* Lista de Cards de Informação */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {info.title}
                    </h4>
                    <p className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {info.content}
                    </p>
                    {info.subContent && (
                      <p className="text-slate-500 text-sm mt-0.5">{info.subContent}</p>
                    )}
                    {info.action && (
                      <p className="text-blue-600 text-sm font-semibold mt-1 cursor-pointer hover:underline">
                        {info.action}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Botão de Ação (Traçar Rota) */}
            <div className="mt-10">
              <a 
                href="https://www.google.com/maps/dir//Rua+Gagliano+Netto,+363+-+Jardim+Soraia,+S%C3%A3o+Paulo+-+SP,+05872-080"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-900/20 group"
              >
                <Navigation className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Traçar Rota Agora
              </a>
            </div>
          </div>


          {/* --- COLUNA 2: Mapa com Moldura Premium --- */}
          <div 
            className={`relative transition-all duration-1000 delay-200 transform 
            ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {/* Elemento Decorativo atrás do mapa */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-slate-100 rounded-[2.5rem] transform rotate-2"></div>
            
            {/* Container do Mapa */}
            <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl shadow-slate-300/50 border border-slate-100">
              {/* MUDANÇA AQUI: Removidas as classes 'grayscale' e 'hover:grayscale-0' */}
              <div className="w-full h-[500px] rounded-[1.5rem] overflow-hidden relative transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.826792952547!2d-46.77818182475992!3d-23.682151366040873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce524f92c6aaab%3A0x7bef31a48c92a318!2sFiber%20Sea%20Network!5e0!3m2!1spt-BR!2sbr!4v1762301482558!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Empresa"
                  className="w-full h-full"
                />
                {/* Removi o overlay azul para deixar o mapa totalmente limpo */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}