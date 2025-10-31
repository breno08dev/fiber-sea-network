import { MapPin, Clock } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="localizacao"
      // Duração alterada para 1500ms
      className={`py-20 bg-black text-white opacity-0 transition-all duration-[1500ms] ease-out
                  ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Localização & Atendimento
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-[#3BA9FC] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Nosso Endereço</h3>
                <p className="text-gray-300 text-lg">
                  Rua da Fibra Óptica, 1000<br />
                  Centro - Sua Cidade/UF<br />
                  CEP: 12345-678
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-[#3BA9FC] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Horário de Atendimento</h3>
                <div className="text-gray-300 text-lg space-y-1">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p className="text-[#3BA9FC] font-semibold mt-2">Suporte técnico 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977545040516!2d-46.65927368502205!3d-23.561684784682997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635789456789!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização NetFuture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}