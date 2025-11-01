import { Target, Eye, Heart } from 'lucide-react';
// 1. Importar o novo componente de card
import ValueCard from './ValueCard';
// 2. Importar a imagem para a nova seção
import aboutImage from '../assets/equipe-de-telemarketing.jpeg';

const values = [
  {
    title: 'Nossa Missão',
    description:
      'Encurtar distâncias e possibilitar novas conquistas, entregando uma conexão de alta performance que transforma a vida de nossos clientes.',
    icon: Target,
  },
  {
    title: 'Nossa Visão',
    description:
      'Ser a ponte para o futuro digital da nossa região, reconhecidos pela excelência e por conectar pessoas aos seus sonhos.',
    icon: Eye,
  },
  {
    title: 'Nossos Valores',
    description:
      'Compromisso com a sua velocidade, transparência em cada mega e uma paixão incansável por inovar e servir.',
    icon: Heart,
  },
];

export default function About() {
  // 3. Removemos o 'useRef' e 'useInView' da seção principal
  // A animação agora é controlada por 'ValueCard'

  return (
    <section
      id="sobre"
      // 4. Removemos as classes de animação da seção inteira
      className={`py-20`}
    >
      <div className="container mx-auto px-4">
        {/* --- SEÇÃO 1: SOBRE A EMPRESA --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Coluna de Imagem */}
          <div>
            <img
              src={aboutImage}
              alt="Equipe de atendimento da SUA EMPRESA"
              className="rounded-2xl shadow-2xl w-full h-full object-cover max-h-[450px]"
            />
          </div>
          {/* Coluna de Texto */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conectando Histórias, Entregando o Futuro
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              Somos mais do que um provedor de internet. Nascemos com o
              propósito de conectar pessoas, encurtar distâncias e impulsionar
              o desenvolvimento da nossa comunidade.
            </p>
            <p className="text-lg text-gray-400">
              Com tecnologia de ponta em fibra óptica e uma equipe local
              dedicada, garantimos não apenas velocidade, mas a estabilidade
              que sua família e seu negócio precisam para navegar, trabalhar,
              estudar e se divertir sem limites.
            </p>
          </div>
        </div>

        {/* --- SEÇÃO 2: MISSÃO, VISÃO E VALORES --- */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Nosso Propósito
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            // 5. Usando o ValueCard com animação individual e delay
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 150} // Atraso de 0ms, 150ms, 300ms
            />
          ))}
        </div>
      </div>
    </section>
  );
}