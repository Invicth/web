import React from 'react';
import { Mail, Linkedin, MapPin, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-gray-100 dark:bg-zinc-950 py-24 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {t('contact.desc')}
            </p>
            
            <div className="space-y-6">
              {/* Email Button - Hidden email text for scraping protection */}
              <a href="mailto:victordiaz.prancing505@aleeas.com" className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-eng-red dark:hover:text-eng-red transition-colors p-4 bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 hover:border-eng-red group shadow-sm">
                <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-full group-hover:bg-eng-red/10 transition-colors">
                  <Mail className="h-6 w-6 text-eng-red" />
                </div>
                <span className="text-lg font-bold">{t('contact.email.label')}</span>
              </a>
              
              {/* LinkedIn Button */}
              <a href="https://linkedin.com/in/victordiazo" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-eng-red dark:hover:text-eng-red transition-colors p-4 bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 hover:border-eng-red group shadow-sm">
                 <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-full group-hover:bg-eng-red/10 transition-colors">
                  <Linkedin className="h-6 w-6 text-eng-red" />
                </div>
                <span className="text-lg font-bold">{t('contact.linkedin.label')}</span>
              </a>

              <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm">
                 <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-eng-red" />
                </div>
                <span className="text-lg">Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 flex flex-col justify-center items-center text-center shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('contact.download.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm">
              {t('contact.download.desc')}
            </p>
            <a 
              href="/CV_CE_ES.pdf" 
              download="CV-Victor-Diaz.pdf"
              className="flex items-center px-8 py-4 bg-eng-dark dark:bg-white text-white dark:text-eng-dark hover:opacity-90 font-bold rounded-lg transition-all shadow-lg group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              {t('contact.download.btn')}
            </a>
            <p className="text-xs text-gray-400 mt-2">File: CV_CE_ES.pdf</p>
          </div>
          
        </div>

        <div className="mt-24 pt-8 border-t border-gray-300 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Victor Andres Diaz Osorio. {t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">{t('footer.tag')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;