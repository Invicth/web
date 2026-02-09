import React, { useState } from 'react';
import { Project } from '../types';
import { Maximize2, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- ÁREA DE CONFIGURACIÓN DE IMÁGENES ---
// Coloca aquí los enlaces a tus imágenes. 
// Puedes usar enlaces externos o rutas locales (ej: '/assets/proyecto1.jpg')
const PROJECT_IMAGES = {
  'eng-1': '/cafam.jpg', // CORREGIDO: La ruta debe empezar con / y no debe incluir "public"
  'eng-2': '/TOPO.jpg', // Parque Tomocoro
  'eng-3': '/ELEMENTAL.jpg', // Elemental
  'eng-4': '/BANCO.jpg', // Bóvedas Banrep
  'eng-5': '/METRO.jpg', // Metro Bogotá
  'bim-1': '/PYREVIT.png', // Plugins pyRevit
  'bim-2': '/DYNAMO.jpg', // Dynamo
  'bim-3': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800', // Eficiencia
  'bim-4': '/AUTO.jpg', // AutoSprink
  'bim-5': '/FAMILY.jpg', // Familias Reportes
  'bim-6': '/FAMI-CONS.jpg', // Familias Construcción
};
// ----------------------------------------

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-black/10 dark:bg-black/20">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto max-h-[55vh] object-contain"
            />
             <button 
                onClick={onClose}
                className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
            >
                <X size={24} />
            </button>
        </div>
        <div className="p-8 flex flex-col flex-grow overflow-y-auto">
            <div className="flex-grow">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                    {project.longDescription || project.description}
                </p>
            </div>
            <div className="flex-shrink-0 pt-6">
                 <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 text-sm rounded-full border border-gray-200 dark:border-zinc-700">
                        {tag}
                    </span>
                    ))}
                </div>
                <button 
                    onClick={onClose}
                    className="w-full bg-eng-red hover:bg-eng-red-dark text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                    Cerrar
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};


const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Design' | 'Modeling' | 'Coordination' | 'BIM Management'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { language, t } = useLanguage();

  const projectsData: Record<string, Project[]> = {
    es: [
      // COMO INGENIERO
      {
        id: 'eng-1',
        title: 'Cafam Ciudad Central (En Curso)',
        category: 'Design',
        description: 'Diseño de sistemas hidrosanitarios, de protección contra incendios (RCI), agua nebulizada y sistemas tradicionales para megaproyecto urbano.',
        longDescription: 'Como diseñador especializado para el megaproyecto en curso "Ciudad Central", mi responsabilidad abarca el diseño técnico de los sistemas hidrosanitarios (HYS), sistemas de protección contra incendios (RCI), e implementaciones avanzadas como agua nebulizada y sistemas de rociadores tradicionales. Mi labor se enfoca en asegurar que las redes de servicios cumplan con la normativa y se integren eficientemente en este complejo urbano de gran escala.',
        imageUrl: PROJECT_IMAGES['eng-1'],
        tags: ['Uso Mixto', 'Diseño', 'HYS', 'RCI', 'Agua Nebulizada']
      },
      {
        id: 'eng-2',
        title: 'Parque Topocoro',
        category: 'Design',
        description: 'Diseño técnico de redes de gas, protección contra incendios (RCI) e hidrosanitarias para el Parque Turístico Topocoro.',
        longDescription: "Como especialista técnico, estuve a cargo del diseño de las redes de gas, sistemas de protección contra incendios (RCI) y las redes hidrosanitarias (HYS) para el Parque Turístico Topocoro. Mi labor fue fundamental para integrar estas instalaciones esenciales dentro de un complejo diseño urbano y paisajístico que respeta las preexistencias naturales del embalse. El diseño garantizó la seguridad, funcionalidad y sostenibilidad de los sistemas MEP en armonía con la visión arquitectónica del proyecto, que busca maximizar las vistas al embalse y preservar la vegetación patrimonial.",
        imageUrl: PROJECT_IMAGES['eng-2'],
        tags: ['Espacio Público', 'Redes Húmedas', 'RCI', 'Gas', 'Diseño']
      },
      {
        id: 'eng-3',
        title: 'Elemental',
        category: 'Modeling',
        description: 'Modelado BIM detallado para proyecto residencial, asegurando precisión constructiva y detección de cruces.',
        longDescription: "Realicé el modelado BIM de las disciplinas hidrosanitaria, protección contra incendios (RCI) y gas para el proyecto residencial 'Elemental'. El modelo se desarrolló con un alto nivel de detalle (LOD 350), enfocado en la pre-construcción digital para identificar y resolver conflictos con otras disciplinas antes de llegar a la obra. Este enfoque redujo significativamente los sobrecostos y retrasos en la fase de construcción.",
        imageUrl: PROJECT_IMAGES['eng-3'],
        tags: ['Residencial', 'Revit', 'Modelado 3D', 'LOD 350', 'MEP']
      },
      {
        id: 'eng-4',
        title: 'Bóvedas Banrep',
        category: 'Design',
        description: 'Diseño de sistemas de protección contra incendios para infraestructura crítica, basado en normativas NFPA.',
        longDescription: 'Mi rol en este proyecto de alta seguridad fue el diseño de los sistemas de protección contra incendios, adhiriéndome estrictamente a las normativas internacionales NFPA 770, NFPA 750 (Agua Nebulizada) y NFPA 2001 (Agentes Limpios). El diseño garantizó la máxima protección para una infraestructura crítica, cumpliendo con los más altos estándares de seguridad y redundancia para la operación del Banco de la República.',
        imageUrl: PROJECT_IMAGES['eng-4'],
        tags: ['Seguridad', 'Institucional', 'NFPA 770', 'NFPA 750', 'NFPA 2001', 'RCI']
      },
      {
        id: 'eng-5',
        title: 'Metro Bogotá',
        category: 'Coordination',
        description: 'Coordinación BIM y gestión de interferencias para estaciones y tramos de la primera línea del metro.',
        longDescription: 'Trabajé en la coordinación BIM de la Primera Línea del Metro de Bogotá, utilizando Navisworks para la detección y gestión de interferencias entre las múltiples disciplinas involucradas (estructuras, arquitectura, MEP, sistemas ferroviarios). Mi labor fue clave para mantener el modelo federado actualizado y facilitar las reuniones de coordinación que permitieron resolver miles de colisiones de forma virtual.',
        imageUrl: PROJECT_IMAGES['eng-5'],
        tags: ['Infraestructura', 'Transporte', 'Navisworks', 'Coordinación BIM']
      },
      // COMO LIDER BIM
      {
        id: 'bim-1',
        title: 'Plugins con pyRevit',
        category: 'BIM Management',
        description: 'Desarrollo de plugins personalizados usando Python para automatizar tareas repetitivas y gestión de datos.',
        longDescription: 'Como parte de la estrategia de optimización, desarrollé una suite de herramientas personalizadas para Revit utilizando pyRevit. Estos plugins automatizaron tareas como la numeración de elementos, la gestión de parámetros y la exportación de datos, ahorrando cientos de horas de trabajo manual al equipo y estandarizando la calidad de los entregables.',
        imageUrl: PROJECT_IMAGES['bim-1'],
        tags: ['Python', 'pyRevit', 'Automatización', 'API']
      },
      {
        id: 'bim-2',
        title: 'Parametrización con Dynamo',
        category: 'BIM Management',
        description: 'Generación de scripts de Dynamo para parametrización masiva de elementos cumpliendo estándares del proyecto.',
        longDescription: 'Creé y mantuve una librería de scripts de Dynamo para la gestión de datos de los modelos BIM. Estos scripts permitían la validación masiva de información, la asignación de parámetros según matrices de Excel y la automatización de la nomenclatura, garantizando el cumplimiento de los Estándares BIM del proyecto y del cliente de manera consistente.',
        imageUrl: PROJECT_IMAGES['bim-2'],
        tags: ['Dynamo', 'Estándares', 'Gestión de Datos', 'Automatización']
      },
      {
        id: 'bim-3',
        title: 'Eficiencia de Modelado',
        category: 'BIM Management',
        description: 'Creación de rutinas de Dynamo para agilizar procesos de modelado y reducir tiempos de entrega.',
        imageUrl: PROJECT_IMAGES['bim-3'],
        tags: ['Optimización', 'Flujos de Trabajo', 'Eficiencia']
      },
      {
        id: 'bim-4',
        title: 'Implementación AutoSprink RVT',
        category: 'BIM Management',
        description: 'Despliegue y configuración de AutoSprink RVT para optimizar el diseño y cálculo de redes contra incendio.',
        imageUrl: PROJECT_IMAGES['bim-4'],
        tags: ['Fire Protection', 'Add-ins', 'Cálculo']
      },
      {
        id: 'bim-5',
        title: 'Familias Paramétricas (Reportes)',
        category: 'BIM Management',
        description: 'Implementación de familias inteligentes capaces de generar reportes automáticos y documentación precisa.',
        imageUrl: PROJECT_IMAGES['bim-5'],
        tags: ['Familias Revit', 'Documentación', 'Paramétrico']
      },
      {
        id: 'bim-6',
        title: 'Familias Paramétricas (Construcción)',
        category: 'BIM Management',
        description: 'Desarrollo de contenido paramétrico avanzado para agilizar procesos de coordinación y construcción.',
        imageUrl: PROJECT_IMAGES['bim-6'],
        tags: ['LOD 400', 'Construcción', 'Activos Digitales']
      }
    ],
    en: [
      // AS ENGINEER
      {
        id: 'eng-1',
        title: 'Cafam Ciudad Central (Ongoing)',
        category: 'Design',
        description: 'Design of hydro-sanitary, fire protection (RCI), water mist, and traditional fire suppression systems for a large-scale urban megaproject.',
        longDescription: 'As a specialized designer for the ongoing "Ciudad Central" megaproject, my responsibility covers the technical design of hydro-sanitary systems (HYS), fire protection systems (RCI), and advanced implementations such as water mist and traditional sprinkler systems. My work focuses on ensuring that the utility networks comply with regulations and are efficiently integrated into this large-scale urban complex.',
        imageUrl: PROJECT_IMAGES['eng-1'],
        tags: ['Mixed Use', 'Design', 'HYS', 'Fire Protection', 'Water Mist']
      },
      {
        id: 'eng-2',
        title: 'Topocoro Park',
        category: 'Design',
        description: 'Technical design of gas, fire protection (RCI), and hydro-sanitary networks for the Topocoro Tourist Park.',
        longDescription: "As a technical specialist, I was in charge of designing the gas networks, fire protection systems (RCI), and hydro-sanitary networks (HYS) for the Topocoro Tourist Park. My work was essential for integrating these critical installations within a complex urban and landscape design that respects the natural pre-existing conditions of the reservoir. The design ensured the safety, functionality, and sustainability of the MEP systems in harmony with the architectural vision of the project, which aims to maximize views of the reservoir and preserve heritage vegetation.",
        imageUrl: PROJECT_IMAGES['eng-2'],
        tags: ['Public Space', 'Wet Utilities', 'Fire Protection', 'Gas', 'Design']
      },
      {
        id: 'eng-3',
        title: 'Elemental',
        category: 'Modeling',
        description: 'Detailed BIM modeling for residential project, ensuring construction accuracy and clash detection.',
        longDescription: "I performed the BIM modeling for the plumbing, fire protection (RCI), and gas disciplines for the 'Elemental' residential project. The model was developed with a high level of detail (LOD 350), focused on digital pre-construction to identify and resolve conflicts with other disciplines before reaching the worksite. This approach significantly reduced cost overruns and delays during the construction phase.",
        imageUrl: PROJECT_IMAGES['eng-3'],
        tags: ['Residential', 'Revit', '3D Modeling', 'LOD 350', 'MEP']
      },
      {
        id: 'eng-4',
        title: 'Banrep Vaults',
        category: 'Design',
        description: 'Design of fire protection systems for critical infrastructure, based on NFPA standards.',
        longDescription: "My role in this high-security project was to design the fire protection systems, strictly adhering to international standards NFPA 770, NFPA 750 (Water Mist), and NFPA 2001 (Clean Agents). The design ensured maximum protection for critical infrastructure, meeting the highest standards of safety and redundancy for the operations of the Bank of the Republic.",
        imageUrl: PROJECT_IMAGES['eng-4'],
        tags: ['Security', 'Institutional', 'NFPA 770', 'NFPA 750', 'NFPA 2001', 'Fire Protection']
      },
      {
        id: 'eng-5',
        title: 'Metro Bogotá',
        category: 'Coordination',
        description: 'BIM coordination and clash management for stations and sections of the first metro line.',
        longDescription: 'I worked on the BIM coordination of the First Line of the Bogotá Metro, using Navisworks for clash detection and management between the multiple disciplines involved (structures, architecture, MEP, railway systems). My work was key to keeping the federated model updated and facilitating coordination meetings that allowed for the virtual resolution of thousands of clashes.',
        imageUrl: PROJECT_IMAGES['eng-5'],
        tags: ['Infrastructure', 'Transport', 'Navisworks', 'BIM Coordination']
      },
      // AS BIM LEADER
      {
        id: 'bim-1',
        title: 'pyRevit Plugins',
        category: 'BIM Management',
        description: 'Development of custom plugins using Python to automate repetitive tasks and data management.',
        longDescription: 'As part of the optimization strategy, I developed a suite of custom tools for Revit using pyRevit. These plugins automated tasks such as element numbering, parameter management, and data export, saving the team hundreds of hours of manual work and standardizing the quality of deliverables.',
        imageUrl: PROJECT_IMAGES['bim-1'],
        tags: ['Python', 'pyRevit', 'Automation', 'API']
      },
      {
        id: 'bim-2',
        title: 'Dynamo Parametrization',
        category: 'BIM Management',
        description: 'Generation of Dynamo scripts for massive element parametrization complying with project standards.',
        longDescription: 'I created and maintained a library of Dynamo scripts for managing BIM model data. These scripts allowed for mass validation of information, parameter assignment according to Excel matrices, and nomenclature automation, ensuring consistent compliance with the project\'s and client\'s BIM Standards.',
        imageUrl: PROJECT_IMAGES['bim-2'],
        tags: ['Dynamo', 'Standards', 'Data Management', 'Automation']
      },
      {
        id: 'bim-3',
        title: 'Modeling Efficiency',
        category: 'BIM Management',
        description: 'Creation of Dynamo routines to streamline modeling processes and reduce delivery times.',
        imageUrl: PROJECT_IMAGES['bim-3'],
        tags: ['Optimization', 'Workflows', 'Efficiency']
      },
      {
        id: 'bim-4',
        title: 'AutoSprink RVT Implementation',
        category: 'BIM Management',
        description: 'Deployment and configuration of AutoSprink RVT to optimize fire protection design and calculation.',
        imageUrl: PROJECT_IMAGES['bim-4'],
        tags: ['Fire Protection', 'Add-ins', 'Calculation']
      },
      {
        id: 'bim-5',
        title: 'Parametric Families (Reports)',
        category: 'BIM Management',
        description: 'Implementation of smart families capable of generating automatic reports and precise documentation.',
        imageUrl: PROJECT_IMAGES['bim-5'],
        tags: ['Revit Families', 'Documentation', 'Parametric']
      },
      {
        id: 'bim-6',
        title: 'Parametric Families (Construction)',
        category: 'BIM Management',
        description: 'Development of advanced parametric content to streamline coordination and construction processes.',
        imageUrl: PROJECT_IMAGES['bim-6'],
        tags: ['LOD 400', 'Construction', 'Digital Assets']
      }
    ]
  };

  const projects = projectsData[language] || projectsData['es'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Categories need to be mapped to the filter keys but displayed in current language
  const categories = [
    { key: 'All', label: t('port.filter.all') },
    { key: 'Design', label: t('port.filter.design') },
    { key: 'Modeling', label: t('port.filter.modeling') },
    { key: 'Coordination', label: t('port.filter.coordination') },
    { key: 'BIM Management', label: t('port.filter.bim_management') },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-eng-red pl-4">{t('port.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t('port.subtitle')}</p>
          </div>
          
          <div className="flex space-x-2 mt-6 md:mt-0 bg-gray-100 dark:bg-zinc-800 p-1 rounded-lg overflow-x-auto max-w-full md:max-w-2xl no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key as any)}
                className={`whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === cat.key 
                    ? 'bg-eng-red text-white shadow-lg' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-700 hover:border-eng-red transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setSelectedProject(project)} className="bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors">
                         <Maximize2 size={16} />
                    </button>
                </div>
              </div>
              
              <div className="p-6 relative z-20 -mt-12">
                 <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-zinc-700 h-full flex flex-col justify-between">
                    <div>
                        <span className="text-xs font-bold text-eng-red uppercase tracking-wider mb-2 block">{t(`port.filter.${project.category.toLowerCase().replace(' ', '_')}`)}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-zinc-300 text-xs rounded border border-gray-200 dark:border-zinc-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Portfolio;