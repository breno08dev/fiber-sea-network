import { Gamepad2 } from 'lucide-react';

const videoPlatforms = [
  {
    name: 'Netflix',
    imageUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-white-png.png',
  },
  {
    name: 'Prime Video',
    imageUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/prime-video-logo-white-png.png',
  },
  {
    name: 'Disney+',
    imageUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/disney-plus-logo-white-png.png',
  },
   {
    name: 'YouTube',
    imageUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/youtube-logo-white-png.png',
  },
];

const audioGamePlatforms = [
  {
    name: 'Spotify',
    imageUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-white-png.png',
  },
  {
    name: 'Twitch',
    imageUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/twitch-logo-white-png.png',
  },
];


export default function Streaming() {
  return (
    <section id="streaming" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sua diversão em alta velocidade
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Assista a filmes, ouça músicas e jogue online com a estabilidade que só a nossa fibra óptica oferece.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card Filmes & Séries */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between h-96 bg-cover bg-center group"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 transition-all duration-300"></div>
            <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">Filmes & Séries</h3>
                <div className="flex flex-wrap gap-6">
                    {videoPlatforms.map(p => (
                        <img key={p.name} src={p.imageUrl} alt={p.name} className="h-8 object-contain" />
                    ))}
                </div>
            </div>
            <p className="relative z-10 text-white text-lg font-semibold">Streaming em 4K sem interrupções.</p>
          </div>

          {/* Card Música & Jogos */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between h-96 bg-cover bg-center group"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 transition-all duration-300"></div>
             <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">Música & Jogos</h3>
                <div className="flex flex-wrap items-center gap-6">
                    {audioGamePlatforms.map(p => (
                        <img key={p.name} src={p.imageUrl} alt={p.name} className="h-8 object-contain" />
                    ))}
                     <div className="flex items-center gap-2 text-white">
                        <Gamepad2 className="w-8 h-8" />
                        <span className="font-semibold text-xl">Gaming</span>
                    </div>
                </div>
            </div>
            <p className="relative z-10 text-[#3BA9FC] text-lg font-semibold">A menor latência para suas vitórias.</p>
          </div>
        </div>
      </div>
    </section>
  );
}