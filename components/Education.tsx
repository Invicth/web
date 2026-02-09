import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, BookOpenCheck, Code, Building } from 'lucide-react';

const Education: React.FC = () => {
  const { t } = useLanguage();

  const educationItems = [
    {
      icon: <GraduationCap className="h-8 w-8 text-eng-red" />,
      title: t('edu.unal.title'),
      subtitle: t('edu.unal.subtitle'),
      type: 'formal',
    },
    {
      icon: <Code className="h-8 w-8 text-eng-red" />,
      title: t('edu.web.title'),
      subtitle: t('edu.web.subtitle'),
      type: 'cont',
    },
    {
        icon: <Building className="h-8 w-8 text-eng-red" />,
        title: t('edu.python.title'),
        subtitle: t('edu.python.subtitle'),
        type: 'cont',
    },
  ];

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('edu.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t('edu.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna de Educación Formal */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-l-4 border-eng-red pl-4">{t('edu.formal.title')}</h3>
            {educationItems.filter(item => item.type === 'formal').map((item, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 bg-eng-red/10 p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Columna de Formación Complementaria */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-l-4 border-eng-red pl-4">{t('edu.cont.title')}</h3>
            {educationItems.filter(item => item.type === 'cont').map((item, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 bg-eng-red/10 p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
