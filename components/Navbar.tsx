import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat, Languages, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-eng-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-eng-red p-2 rounded-lg">
              <HardHat className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">VICTOR <span className="text-eng-red">DIAZ</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-eng-red dark:hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-3 ml-4 border-l border-gray-300 dark:border-gray-700 pl-6">
                <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle Dark Mode"
                >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 px-3 py-1.5 rounded-full border border-gray-200 dark:border-zinc-700 transition-colors"
                >
                <Languages size={16} className="text-eng-red" />
                <span className="text-xs font-bold text-gray-900 dark:text-white uppercase w-4 text-center">{language}</span>
                </button>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
             <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full border border-gray-200 dark:border-zinc-700 transition-colors"
            >
              <span className="text-xs font-bold text-gray-900 dark:text-white uppercase">{language}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-eng-red dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-eng-red dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;