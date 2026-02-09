import React from 'react';
import { Layers, Box, Database, Droplets, Flame, Cpu, Code2, Terminal, GraduationCap, Award, GitBranch } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    {
      category: t('skills.cat.automation'),
      highlight: true,
      items: [
        { name: t('skills.python'), icon: <Code2 /> },
        { name: t('skills.pyrevit'), icon: <Terminal /> },
        { name: t('skills.dynamo'), icon: <Cpu /> },
        { name: t('skills.github'), icon: <GitBranch /> },
      ]
    },
    {
      category: t('skills.cat.core'),
      highlight: false,
      items: [
        { name: t('skills.revit'), icon: <Box /> },
        { name: t('skills.navis'), icon: <Layers /> },
        { name: t('skills.acc'), icon: <Database /> },
      ]
    },
    {
      category: t('skills.cat.engineering'),
      highlight: false,
      items: [
        { name: t('skills.hydro'), icon: <Droplets /> },
        { name: t('skills.fire'), icon: <Flame /> },
        { name: t('skills.calc'), icon: <Box /> },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-eng-red pl-4">{t('skills.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            {t('skills.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, idx) => (
            <div 
              key={idx} 
              className={`
                p-8 rounded-2xl border transition-all duration-300
                ${group.highlight 
                  ? 'bg-gradient-to-br from-white to-red-50 dark:from-zinc-800 dark:to-zinc-900 border-eng-red shadow-lg dark:shadow-red-900/10 scale-[1.02] md:col-span-1' 
                  : 'bg-gray-50 dark:bg-zinc-800/30 border-gray-200 dark:border-zinc-700/50 hover:border-eng-red/30'
                }
              `}
            >
              <h3 className={`text-xl font-bold mb-8 flex items-center ${group.highlight ? 'text-eng-red' : 'text-gray-900 dark:text-white'}`}>
                {group.highlight && <Cpu className="mr-3 h-6 w-6" />}
                {!group.highlight && <span className="w-8 h-1 bg-eng-red mr-3 rounded-full"></span>}
                {group.category}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center space-x-4 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-gray-100 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors group shadow-sm">
                    <div className="text-gray-400 group-hover:text-eng-red transition-colors">
                      {React.cloneElement(skill.icon as React.ReactElement<any>, { size: 20 })}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;