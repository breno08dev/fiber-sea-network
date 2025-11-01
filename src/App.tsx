import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Streaming from './components/Streaming';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    // Removemos o "bg-gradient-to-b from-black to-gray-950" daqui
    // para que o fundo do 'body' (definido no index.css) apareça.
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Plans />
      <Streaming />
      <About />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}

export default App;