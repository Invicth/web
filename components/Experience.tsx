import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experienceItems = [
    { id: 1, bullets: 3 },
    { id: 2, bullets: 3 },
    { id: 3, bullets: 2 },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-eng-dark relative overflow-hidden transition-colors duration-300">
        {/* Background Accent */}
      <div className="absolute left-0 top-1/4 w-full h-96 bg-gradient-to-r from-eng-red/5 to-transparent skew-y-3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-eng-red pl-4">{t('exp.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t('exp.subtitle')}</p>
          </div>
        </div>

        <div className="relative border-l border-gray-300 dark:border-zinc-700 ml-4 md:ml-8 space-y-12">
          
          {experienceItems.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              <span className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-gray-50 dark:bg-eng-dark border-4 border-eng-red group-hover:scale-125 transition-transform z-10"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-eng-red transition-colors">{t(`exp.${item.id}.role`)}</h3>
                  <p className="text-eng-red font-mono font-bold mt-1 text-lg">{t(`exp.${item.id}.company`)}</p>
                </div>
                <span className="text-gray-600 dark:text-gray-500 font-medium bg-white dark:bg-zinc-800/50 px-3 py-1 rounded-full border border-gray-200 dark:border-zinc-700 text-sm mt-2 sm:mt-0 inline-block shadow-sm dark:shadow-none">
                  {t(`exp.${item.id}.date`)}
                </span>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-eng-red/50 transition-all shadow-lg dark:shadow-xl">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic border-l-2 border-gray-300 dark:border-zinc-600 pl-4">
                  {t(`exp.${item.id}.desc`)}
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  {[...Array(item.bullets)].map((_, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-eng-red mt-1 shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t(`exp.${item.id}.p${i + 1}`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;