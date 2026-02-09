import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Nav
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.education': 'Formación',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.available': 'Disponible para Proyectos',
    'hero.title.civil': 'Ingeniero',
    'hero.title.eng': 'Civil',
    'hero.title.bim': '& Especialista BIM',
    'hero.description': 'Experto en redes hidrosanitarias, modelado 3D y coordinación multidisciplinaria usando Revit, Navisworks y BIM 360. Transformando diseños complejos en realidad funcional.',
    'hero.viewWork': 'Ver Portafolio',
    'hero.contact': 'Contáctame',
    'hero.spec': 'Especialización',
    'hero.spec.network': 'Redes Hidrosanitarias',

    // Skills
    'skills.title': 'Competencia Técnica',
    'skills.desc': 'Mi perfil combina la ingeniería civil tradicional con el desarrollo computacional, permitiéndome no solo modelar, sino crear herramientas que automatizan y optimizan la gestión BIM.',
    'skills.cat.core': 'BIM Core & Coordinación',
    'skills.cat.automation': 'Automatización & Desarrollo',
    'skills.cat.engineering': 'Ingeniería Hidráulica',
    
    // Skill Items
    'skills.revit': 'Revit MEP (Avanzado)',
    'skills.navis': 'Navisworks Manage',
    'skills.acc': 'Autodesk Construction Cloud',
    'skills.python': 'Python (Revit API)',
    'skills.pyrevit': 'pyRevit (Creación de Tools)',
    'skills.dynamo': 'Dynamo Scripting',
    'skills.github': 'Git / Control de Versiones',
    'skills.hydro': 'Diseño Hidrosanitario',
    'skills.fire': 'Redes Contra Incendio (NFPA)',
    'skills.calc': 'Cálculos Hidráulicos',
    
    // Experience
    'exp.title': 'Trayectoria Profesional',
    'exp.subtitle': 'Un historial de precisión y coordinación.',
    
    // Experience Item 1 - Hidrinco
    'exp.1.role': 'Coordinador BIM y Diseñador de Redes',
    'exp.1.company': 'HIDRINCO SAS',
    'exp.1.date': 'Bogotá, Colombia | Dic 2023 – Presente',
    'exp.1.desc': 'Liderazgo en coordinación BIM y diseño de redes especializadas.',
    'exp.1.p1': 'Lidero la coordinación de modelos BIM (Revit, Navisworks) para proyectos multidisciplinarios, garantizando la precisión del diseño y dirigiendo la resolución de interferencias clave.',
    'exp.1.p2': 'Desarrollo y optimizo flujos de trabajo BIM creando scripts en Python para Dynamo y pyRevit, aumentando la productividad del equipo.',
    'exp.1.p3': 'Diseño sistemas de protección contra incendios (NFPA) y redes hidrosanitarias, realizando simulaciones hidráulicas.',

    // Experience Item 2 - Hidroobras
    'exp.2.role': 'Diseñador / Ingeniero de Diseño',
    'exp.2.company': 'HIDROOBRAS S.A.',
    'exp.2.date': 'Bogotá, Colombia | Jul 2022 – Jul 2023',
    'exp.2.desc': 'Optimización de procesos de diseño y automatización.',
    'exp.2.p1': 'Optimicé el proceso de diseño hidrosanitario a través de revisiones técnicas exhaustivas, reduciendo el tiempo de revisión en un 15%.',
    'exp.2.p2': 'Automaticé cálculos complejos mediante macros de Excel (VBA), minimizando errores manuales y acelerando la generación de memorias.',
    'exp.2.p3': 'Dirigí la estandarización de la base de datos BIM de la empresa, promoviendo buenas prácticas de consistencia de datos.',

    // Experience Item 3 - Freelance
    'exp.3.role': 'Desarrollador Fullstack y Consultor Técnico',
    'exp.3.company': 'Freelancer Independiente',
    'exp.3.date': 'Remoto | Abr 2020 – Abr 2021',
    'exp.3.desc': 'Desarrollo web y consultoría técnica para el sector AEC.',
    'exp.3.p1': 'Desarrollé una aplicación web full-stack (MERN Stack) para la gestión de proyectos de construcción con sistema CRUD completo.',
    'exp.3.p2': 'Construí sitios web y ofrecí consultoría en la configuración de software de diseño (AutoCAD, Revit) para clientes del sector.',

    // Portfolio
    'port.title': 'Proyectos Destacados',
    'port.subtitle': 'Mostrando precisión en cada detalle.',
    'port.filter.all': 'Todos',
    'port.filter.design': 'Diseño',
    'port.filter.modeling': 'Modelado',
    'port.filter.coordination': 'Coordinación',
    'port.filter.bim_management': 'Gestión BIM',
    'port.view': 'Ver Proyecto',

    // Contact
    'contact.title': 'Construyamos Juntos',
    'contact.desc': 'Abierto a nuevas oportunidades en coordinación BIM e ingeniería hidráulica.',
    'contact.email.label': 'Enviar Correo',
    'contact.linkedin.label': 'Perfil de LinkedIn',
    'contact.download.title': 'Descargar Hoja de Vida',
    'contact.download.desc': 'Obtén los detalles completos de mi experiencia profesional e historial de proyectos en formato PDF.',
    'contact.download.btn': 'Descargar CV',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.tag': 'Portafolio de Ingeniería Civil',

    // Education
    'edu.title': 'Formación y Certificaciones',
    'edu.subtitle': 'Mi trayectoria académica y aprendizaje continuo.',
    'edu.formal.title': 'Educación Formal',
    'edu.unal.title': 'Ingeniero Civil',
    'edu.unal.subtitle': 'Universidad Nacional de Colombia - Egresado 2022',
    'edu.cont.title': 'Formación Complementaria',
    'edu.web.title': 'Desarrollo Web Full-Stack',
    'edu.web.subtitle': 'Udemy & Universidad de Antioquia',
    'edu.python.title': 'Programación en Python',
    'edu.python.subtitle': 'Udemy',
  },
  en: {
    // Nav
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',

    // Hero
    'hero.available': 'Available for Projects',
    'hero.title.civil': 'Civil',
    'hero.title.eng': 'Engineer',
    'hero.title.bim': '& BIM Specialist',
    'hero.description': 'Expert in hydro-sanitary networks, 3D modeling, and multidisciplinary coordination using Revit, Navisworks, and BIM 360. Turning complex designs into functional reality.',
    'hero.viewWork': 'View My Work',
    'hero.contact': 'Contact Me',
    'hero.spec': 'Specialization',
    'hero.spec.network': 'Hydro Sanitary Networks',

    // Skills
    'skills.title': 'Technical Proficiency',
    'skills.desc': 'My profile combines traditional civil engineering with computational development, allowing me not only to model but to build tools that automate and optimize BIM management.',
    'skills.cat.core': 'BIM Core & Coordination',
    'skills.cat.automation': 'Automation & Development',
    'skills.cat.engineering': 'Hydraulic Engineering',
    
    // Skill Items
    'skills.revit': 'Revit MEP (Advanced)',
    'skills.navis': 'Navisworks Manage',
    'skills.acc': 'Autodesk Construction Cloud',
    'skills.python': 'Python (Revit API)',
    'skills.pyrevit': 'pyRevit (Tool Creation)',
    'skills.dynamo': 'Dynamo Scripting',
    'skills.github': 'Git / Version Control',
    'skills.hydro': 'Hydro-Sanitary Design',
    'skills.fire': 'Fire Protection (NFPA)',
    'skills.calc': 'Hydraulic Calculations',

    // Experience
    'exp.title': 'Professional History',
    'exp.subtitle': 'A track record of precision and coordination.',
    
    // Experience Item 1 - Hidrinco
    'exp.1.role': 'BIM Coordinator & Network Designer',
    'exp.1.company': 'HIDRINCO SAS',
    'exp.1.date': 'Bogotá, Colombia | Dec 2023 – Present',
    'exp.1.desc': 'Leading BIM model coordination and specialized network design.',
    'exp.1.p1': 'Lead BIM model coordination (Revit, Navisworks) for multidisciplinary projects, ensuring design accuracy and directing key interference resolution.',
    'exp.1.p2': 'Develop and optimize BIM workflows creating Python scripts for Dynamo and pyRevit, resulting in measurable team productivity increases.',
    'exp.1.p3': 'Design fire protection systems (NFPA) and hydro-sanitary networks, performing hydraulic simulations.',

    // Experience Item 2 - Hidroobras
    'exp.2.role': 'Designer / Design Engineer',
    'exp.2.company': 'HIDROOBRAS S.A.',
    'exp.2.date': 'Bogotá, Colombia | Jul 2022 – Jul 2023',
    'exp.2.desc': 'Design process optimization and automation.',
    'exp.2.p1': 'Optimized the hydro-sanitary design process through exhaustive technical reviews, reducing review time by 15%.',
    'exp.2.p2': 'Automated complex calculations using Excel macros (VBA), minimizing manual errors and accelerating report generation.',
    'exp.2.p3': 'Directed the standardization of the company BIM database, promoting best practices for data consistency.',

    // Experience Item 3 - Freelance
    'exp.3.role': 'Fullstack Developer & Technical Consultant',
    'exp.3.company': 'Independent Freelancer',
    'exp.3.date': 'Remote | Apr 2020 – Apr 2021',
    'exp.3.desc': 'Web development and technical consultancy for the AEC sector.',
    'exp.3.p1': 'Developed a full-stack web application (MERN Stack) for construction project management with a complete CRUD system.',
    'exp.3.p2': 'Built websites and offered consultancy in design software configuration (AutoCAD, Revit) for AEC clients.',

    // Portfolio
    'port.title': 'Selected Projects',
    'port.subtitle': 'Showcasing precision in every detail.',
    'port.filter.all': 'All',
    'port.filter.design': 'Design',
    'port.filter.modeling': 'Modeling',
    'port.filter.coordination': 'Coordination',
    'port.filter.bim_management': 'BIM Management',
    'port.view': 'View Project',

    // Contact
    'contact.title': 'Let\'s Build Together',
    'contact.desc': 'Open to new opportunities in BIM coordination and hydraulic engineering.',
    'contact.email.label': 'Send Email',
    'contact.linkedin.label': 'LinkedIn Profile',
    'contact.download.title': 'Download Resume',
    'contact.download.desc': 'Get the full details of my professional experience and project history in PDF format.',
    'contact.download.btn': 'Download CV',
    'footer.rights': 'All rights reserved.',
    'footer.tag': 'Civil Engineering Portfolio',
    
    // Education
    'edu.title': 'Education & Certifications',
    'edu.subtitle': 'My academic background and continuous learning journey.',
    'edu.formal.title': 'Formal Education',
    'edu.unal.title': 'Civil Engineer',
    'edu.unal.subtitle': 'National University of Colombia - Graduated 2022',
    'edu.cont.title': 'Continuing Education',
    'edu.web.title': 'Full-Stack Web Development',
    'edu.web.subtitle': 'Udemy & University of Antioquia',
    'edu.python.title': 'Python Programming',
    'edu.python.subtitle': 'Udemy',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es'); // Default Spanish

  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};