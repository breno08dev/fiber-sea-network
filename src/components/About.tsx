import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    title: 'Missão',
    description: 'Oferecer internet de qualidade com atendimento humano.',
    icon: Target,
  },
  {
    title: 'Visão',
    description: 'Ser referência regional em conectividade.',
    icon: Eye,
  },
  {
    title: 'Valores',
    description: 'Transparência, inovação e compromisso com o cliente.',
    icon: Heart,
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
          Nosso Propósito
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-[#3BA9FC] bg-opacity-10 p-4 rounded-full">
                    <Icon className="w-10 h-10 text-[#3BA9FC]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{value.title}</h3>
                <p className="text-gray-700 text-lg">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
