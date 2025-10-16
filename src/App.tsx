import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Streaming from './components/Streaming';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // 1. Importe o novo componente

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Plans />
      <Streaming />
      <About />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton /> {/* 2. Adicione o botão aqui */}
    </div>
  );
}

export default App;