export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          A internet que conecta você ao futuro.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Planos rápidos, estáveis e com suporte de verdade.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-[#3BA9FC] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#2a8cd6] transition transform hover:scale-105 shadow-xl"
        >
          Assine Agora
        </button>
      </div>
    </section>
  );
}
