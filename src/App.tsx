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
// 1. Importar o novo componente Toast
import ToastCTA from './components/ToastCTA';

function App() {
  return (
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
      <ToastCTA />
    </div>
  );
}

export default App;