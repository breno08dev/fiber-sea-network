import { Target, Eye, Heart } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const values = [
  {
    title: 'Nossa Missão',
    description: 'Encurtar distâncias e possibilitar novas conquistas, entregando uma conexão de alta performance que transforma a vida de nossos clientes.',
    icon: Target,
  },
  {
    title: 'Nossa Visão',
    description: 'Ser a ponte para o futuro digital da nossa região, reconhecidos pela excelência e por conectar pessoas aos seus sonhos.',
    icon: Eye,
  },
  {
    title: 'Nossos Valores',
    description: 'Compromisso com a sua velocidade, transparência em cada mega e uma paixão incansável por inovar e servir.',
    icon: Heart,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="sobre"
      // Duração alterada para 1500ms
      className={`py-20 bg-black opacity-0 transition-all duration-[1500ms] ease-out
                  ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Nosso Propósito
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-gray-900 rounded-2xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-2 border-2 border-gray-800"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-[#3BA9FC] bg-opacity-10 p-4 rounded-full">
                    <Icon className="w-10 h-10 text-[#3BA9FC]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400 text-lg">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}