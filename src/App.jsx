import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header scrolled={scrolled} />
      <main>
        <section id="home" className="pt-16">
          <Hero />
        </section>
        <section id="summary" className="py-16 bg-white">
          <Summary />
        </section>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="experience" className="py-16 bg-white">
          <Experience />
        </section>
        <section id="projects" className="py-16">
          <Projects />
        </section>
        <section id="skills" className="py-16 bg-white">
          <Skills />
        </section>
        <section id="certifications" className="py-16">
          <Certifications />
        </section>
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;