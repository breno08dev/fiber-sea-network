import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Eye, Target, Gem, ChevronRight } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  const values = [
    {
      title: 'Visão',
      description: 'Ser referência absoluta em conectividade, levando o futuro da fibra óptica para dentro de cada lar e empresa da nossa região.',
      icon: Eye,
      // Tons de azul tecnológico e ciano (Foco em Futuro)
      gradient: 'from-blue-600 to-cyan-500', 
    },
    {
      title: 'Missão',
      description: 'Conectar pessoas, negócios e ideias com velocidade real e estabilidade, garantindo um atendimento humano que entende sua necessidade.',
      icon: Target,
      // Tons de azul royal e indigo (Foco em Profissionalismo)
      gradient: 'from-blue-700 to-indigo-600', 
    },
    {
      title: 'Valores',
      description: 'Transparência em cada mega contratado, inovação constante e, acima de tudo, respeito e compromisso com a sua experiência online.',
      icon: Gem,
      // Tons de azul profundo (Foco em Confiança)
      gradient: 'from-sky-600 to-blue-800', 
    },
  ];

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative py-24 bg-slate-50 overflow-hidden"
    >
      {/* Background Sutil (Sem esfumaçados, apenas textura leve opcional) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
        <div 
          className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 transform 
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block py-1 px-3 rounded bg-white text-blue-700 border border-blue-100 text-xs font-bold tracking-widest uppercase mb-5 shadow-sm">
            Quem Somos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Conectando você ao <span className="text-blue-700">futuro</span>
          </h2>
          <p className="text-slate-600 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Mais do que internet rápida, entregamos a estabilidade e a confiança que você precisa para ir mais longe.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <article
              key={value.title}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/60 border border-slate-100
                         hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1
                         transition-all duration-300 ease-out
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              {/* Barra de destaque superior (Sutil e elegante) */}
              <div className={`absolute top-0 left-6 right-6 h-1 rounded-b-md bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Ícone (Limpo, sem borrões) */}
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} p-3.5 text-white shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
                  <value.icon className="w-full h-full" strokeWidth={1.5} />
                </div>
              </div>

              {/* Conteúdo */}
              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
                {value.title}
              </h3>

              <p className="text-slate-500 leading-relaxed text-base mb-6 font-medium">
                {value.description}
              </p>

              {/* Link discreto */}
              <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors mt-auto cursor-pointer">
                <span>Saiba mais</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}