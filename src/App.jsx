import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-white text-brandDark">
      <Navigation />
      <main className="space-y-2">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
