import { Play, Music, Tv, Film, Gamepad2, Monitor } from 'lucide-react';

const platforms = [
  { name: 'Netflix', icon: Tv },
  { name: 'YouTube', icon: Play },
  { name: 'Spotify', icon: Music },
  { name: 'Prime Video', icon: Film },
  { name: 'Gaming', icon: Gamepad2 },
  { name: 'Streaming', icon: Monitor },
];

export default function Streaming() {
  return (
    <section id="streaming" className="py-20 bg-[#3BA9FC]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          Assista e jogue sem travar!
        </h2>
        <p className="text-center text-white text-xl mb-12 max-w-3xl mx-auto">
          Nosso link dedicado garante estabilidade até nos horários de pico.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.name}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-opacity-20 transition transform hover:scale-110"
              >
                <Icon className="w-12 h-12 text-white mb-3" />
                <span className="text-white font-semibold text-center">{platform.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
