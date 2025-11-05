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
      className={`py-20 text-base-text opacity-0 transition-all duration-[1500ms] ease-out
                  ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block bg-primary-dark text-white text-3xl md:text-4xl font-bold px-8 py-3 rounded-full shadow-lg shadow-primary-dark/30">
            Localização
          </h2>
          <p className="text-xl text-base-text-secondary max-w-2xl mx-auto">
            <br />Sua internet está a um passo de você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Coluna da Esquerda: Mapa (ATUALIZADO) */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-full">
            <iframe
              // 1. Usei o novo link que você forneceu
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.826792952547!2d-46.77818182475992!3d-23.682151366040873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce524f92c6aaab%3A0x7bef31a48c92a318!2sFiber%20Sea%20Network!5e0!3m2!1spt-BR!2sbr!4v1762301482558!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // Adicionado por segurança
              title="Localização da Empresa"
            />
          </div>

          {/* Coluna da Direita: Informações (AGORA EM CARDS) */}
          <div className="space-y-8">
            
            {/* Card de Endereço */}
            <div className="bg-base-white p-8 rounded-2xl shadow-lg border border-border-color">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-primary-dark flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-base-text">Nosso Endereço</h3>
                  <p className="text-base-text-secondary text-lg">
                    Rua Gagliano Netto, 363<br />
                    Jardin Soráia - São Paulo/SP<br />
                    CEP: 05872-080
                  </p>
                </div>
              </div>
            </div>

            {/* Card de Atendimento (Horários Atualizados) */}
            <div className="bg-base-white p-8 rounded-2xl shadow-lg border border-border-color">
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-primary-dark flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-base-text">Atendimento Local</h3>
                  <div className="text-base-text-secondary text-lg space-y-1">
                    <p>Segunda a Sexta: 08:00 às 20:00</p>
                    <p>Sábado: 09:00 às 14:00</p>
                    <p>Domingo: fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}