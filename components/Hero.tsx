

import React from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- CONFIGURACIÓN DE IMAGEN DE PERFIL ---
// Cambia esta URL por la de tu foto de perfil
const PROFILE_IMAGE_URL = 'victor.jpeg';
// ----------------------------------------

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-eng-dark grid-bg transition-colors duration-300">
      
      {/* Abstract Overlay Elements to simulate Blueprint */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-eng-red/5 dark:bg-eng-red/10 border-l border-eng-red/10 dark:border-eng-red/20 hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 border border-gray-300 dark:border-white/10 rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-full shadow-sm">
              <span className="h-2 w-2 rounded-full bg-eng-red animate-ping"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-400">{t('hero.available')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              {t('hero.title.civil')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-eng-red to-red-500">{t('hero.title.eng')}</span> <br />
              {t('hero.title.bim')}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#portfolio" className="flex items-center justify-center px-8 py-4 bg-eng-red hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(190,59,69,0.3)]">
                {t('hero.viewWork')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="flex items-center justify-center px-8 py-4 bg-transparent border border-gray-400 dark:border-zinc-600 hover:border-eng-red dark:hover:border-white text-gray-800 dark:text-white font-bold rounded-lg transition-all">
                {t('hero.contact')}
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 mt-12 md:mt-0 flex justify-end relative">
            {/* Artistic representation of technical drawing */}
            <div className="relative w-full max-w-md aspect-square bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-gray-200 dark:border-zinc-700 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="absolute -top-4 -left-4 bg-eng-red text-white text-xs font-bold px-3 py-1 rounded shadow-lg uppercase">
                  Victor Andres Diaz Osorio
               </div>
               <img 
                 src={PROFILE_IMAGE_URL} 
                 alt="BIM Model Abstract" 
                 className="w-full h-full object-cover rounded-lg opacity-90 dark:opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded border-l-4 border-eng-red shadow-lg">
                 <p className="text-xs text-gray-600 dark:text-gray-400 uppercase">{t('hero.spec')}</p>
                 <p className="font-bold text-gray-900 dark:text-white">{t('hero.spec.network')}</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-500">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;