import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-eng-dark font-sans text-slate-900 dark:text-slate-50 selection:bg-rose-500 selection:text-white transition-colors duration-300">
          <Navbar />
          <main>
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Portfolio />
          </main>
          <Contact />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;