import { Eye, Target, Gem } from 'lucide-react';
import ValueCard from './ValueCard';

const values = [
  {
    title: 'Visão',
    description:
      'Ser referência em conectividade e inovação, levando internet de alta performance a todas as regiões, com atendimento humano e tecnologia de ponta.',
    icon: Eye, 
  },
  {
    title: 'Missão',
    description:
      'Oferecer soluções digitais que conectem pessoas, negócios e ideias, com qualidade, agilidade e suporte próximo do cliente.',
    icon: Target, 
  },
  {
    title: 'Valores',
    description:
      'Comprometimento, transparência, inovação e foco total na experiência do usuário. Cada conexão é uma parceria de confiança.',
    icon: Gem, 
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className={`py-20 bg-primary-light`}
    >
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          {/* MUDANÇA AQUI: Aplicando o novo estilo ao H2 */}
          <h2 className="inline-block bg-primary-dark text-base-white text-3xl md:text-4xl font-bold px-8 py-3 rounded-full shadow-lg border border-border-color">
            Nossa essência
          </h2>
          {/* Aumentei a margem (mt-6) para dar espaço ao novo título */}
          <p className="text-xl text-base-text-secondary mt-6 max-w-2xl mx-auto">
            O que nos move a conectar pessoas e negócios ao novo.
          </p>
        </div>

        {/* Grid responsivo para os 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}