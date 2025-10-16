import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Streaming from './components/Streaming';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
