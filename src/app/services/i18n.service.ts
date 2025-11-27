import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private defaultLang = 'es';
  private lang$ = new BehaviorSubject<string>(this.loadLang());
  public langChanges = this.lang$.asObservable();

  // Translations organized as a descriptive tree (header data)
  private translations: Record<string, any> = {
    en: {
      header: {
        brand: 'Kusillo',
        nav: {
          love: 'Love',
          design: 'Design',
          art: 'Art',
          creations: 'Creations',
          contact: 'Contact',
          menu: 'Menu',
        },
      },
      my: {
        work: 'Works (Portfolio)',
      },
      portfolio: {
        more: 'More works',
      },
      site: {
        updateNote: 'This is being updated till 2025 ends',
      },
      data: {
        name: 'Pedro Carpio',
        subtitle: 'Multi‑talented designer and engineer',
        photoAlt: 'Author photo',
        photoCaption: 'Author photo',
        iconCells: ['Document Version', 'Education', 'LinkedIn', 'Portfolio', 'Blog', 'Share'],
        notable: 'Highlights',
        notableItems: {
          fullstack: { title: 'Full-stack', desc: 'JavaScript, Python, Node, Express, Flask' },
          uiux: { title: 'UI/UX', desc: 'Figma, prototyping, testing' },
          frontend: { title: 'Frontend', desc: 'Angular, TypeScript, HTML5, CSS3' },
        },
        personalInfoTitle: 'Personal Info',
        personal: {
          nametag: 'Full name',
          name: 'Pedro Carpio',
          role: 'Front-end & Full-stack developer',
          dobTag: 'Date of birth',
          dob: '27 April 2000',
          residenceTag: 'Residence',
          residence: 'Cochabamba, Bolivia',
          phone: '+591 77914381',
          phoneHref: '59177914381',
          email: 'pedrocarpiom@gmail.com',
          rolesList: [
            'UI Engineer',
            'Developer',
            'Designer',
            'Jr Data Analyst',
            'Jr QA Analyst',
            'Artist',
            'Kusillo',
            'Life lover',
          ],
        },
        hardSkillsTitle: 'Hard Skills',
        hardSkills: {
          developmentTitle: 'Development',
          development: [
            'HTML & CSS - Responsive Web Design, Semantic HTML',
            'JavaScript (advanced) - React, Angular, modern tooling',
            'Backend & APIs - Node.js, Express, Flask; API consumption & basic design',
            'Version Control & Linux - Git, GitHub, basic Linux',
            'Testing & Quality - Unit testing fundamentals, SQA awareness',
          ],
          designTitle: 'Design & UX',
          design: [
            'UI/UX design - wireframing, prototyping, usability',
            'High-fidelity prototyping in Figma; Visual Design with Adobe tools',
            'Storytelling & visual narrative; photography and digital painting',
            'Generative AI workflows in Adobe Creative Cloud',
          ],
          dataTitle: 'Data & Analysis',
          data: [
            'Python 3 - data collection, processing, automation',
            'Databases & SQL - MySQL, PostgreSQL, query & structure knowledge',
            'Data cleaning, validation, visualization and data-driven decision making',
          ],
          productivityTitle: 'Productivity & Methodologies',
          productivity: [
            'SCRUM, Agile development, Project Management',
            'Continuous Delivery, remote team practices (GitLab workflows)',
            'Business fundamentals and futures thinking',
          ],
          humanitiesTitle: 'Humanities & Social Impact',
          humanities: [
            'Gender & equality, intercultural communication, applied social research',
            'Education & TESOL, youth sexuality and suicide risk approaches',
          ],
        },
        projectsTitle: 'Projects',
        projects: [
          {
            title: 'Kusi Project',
            year: '2024',
            role: 'Lead Developer',
            desc: 'I developed the main platform, integrating CMS and role system.',
          },
          {
            title: 'Webadas Project',
            year: '2022',
            role: 'UI Engineer',
            desc: 'Design and prototyping of mobile and desktop experiences.',
          },
        ],
        softSkillsTitle: 'Soft Skills',
        softSkillsSubtitle: 'Core interpersonal strengths',
        softSkills: [
          'Systems thinking & community-centered design',
          'Empathy, active listening and intercultural communication',
          'Storytelling and translating technical complexity to accessible language',
          'Creative collaborative leadership and problem solving',
          'Organization, prioritization, autonomy and continuous learning',
        ],
        studiesTitle: 'Studies',
        redesignNote: 'This is a redesign of the old "Gridus Personal" design.',
        // Share modal texts
        shareTitle: 'Share',
        sharePrompt: 'Choose how to share this profile',
        shareCopyLink: 'Copy link',
        shareNative: 'Use native share',
        shareText: 'We should hire this guy!',
        shareUnsupported: 'Sharing is not supported in this browser',
        close: 'Close',
        // Professional summary, roles, experience and education
        summaryTitle: 'Professional summary',
        summaryText:
          'Multidisciplinary professional with over a decade converging technology, design and people management. Specialist at creating binding links between business needs and technical solutions, focused on empathy and social impact. Proven ability to lead digital transformations in critical and creative environments, combining strong software engineering with UX sensibility and crisis management. Seeking roles to apply an integrated vision to build tools that not only work but bring calm and real value to people.',
        exploreRolesTitle: 'Explore my roles',
        rolesHelper:
          "If you know a role I haven't considered but think suits me, please get in touch. If my profile isn't useful to you, share it with someone who might benefit.",
        roles: {
          persona: 'Persona',
          kusillo: 'Kusillo',
          uiUxTech: 'UI/UX Tech',
          softwareDeveloper: 'Software Developer',
          dataAnalyst: 'Data Analyst',
          solutionsArchitect: 'Solutions Architect',
          impactGeneralist: 'Impact Generalist',
          cxPractitioner: 'CX Practitioner',
        },
        experienceTitle: 'Professional Experience',
        experience: [
          {
            org: 'Cervantes Asoc. (EdTech) | Remote',
            role: 'Lead Developer & UX Designer',
            dates: 'July 2025 – September 2025',
            bullets: [
              'End-to-end product management: Oversaw product lifecycle from UX design to application testing and adoption.',
            ],
          },
          {
            org: 'QURI | Bolivia',
            role: 'Brand, Marketing & UI/UX Director',
            dates: 'June 2025 – September 2025',
            bullets: [
              'Commercial strategy: Launched the first brand and commercial campaign for national and international distribution of Bolivian art.',
              'Product design: Designed a UI/UX system to manage multiple artists, roles and global content.',
            ],
          },
          {
            org: 'Dirección General de Régimen Penitenciario | La Paz, Bolivia',
            role: 'Project Manager & Lead Fullstack Developer',
            dates: 'May 2024 – June 2025',
            bullets: [
              'Technical and product leadership in modernizing the San Pedro prison management system.',
              'Critical operations: Scaled the system to support 5,000 inmate records across 12 facility sections.',
              'Operational optimization: Implemented NFC-based attendance control, projecting a reduction in roll-call time from ~60 minutes to ~15–35 minutes.',
              'Data security: Developed an auditable traceability system with tamper-evident hashing to ensure 100% event integrity for credentials.',
              'UX design: Built highly usable interfaces to reduce human error in data entry.',
            ],
          },
          {
            org: 'Grupo GOIT | Bolivia',
            role: 'Multidisciplinary Developer & UX Specialist',
            dates: 'August 2021 – November 2022',
            bullets: [
              'Fullstack development: Collaborated on data selection and processing and delivered the corporate website using Node.js, Angular and Python.',
              'User research: Performed customer analysis to inform UX strategy and rebranding.',
              'Automation: Contributed to systems administration projects using Red Hat Linux, Ansible and security practices.',
            ],
          },
          {
            org: 'Game Shop | Cochabamba, Bolivia',
            role: 'Store Manager & Fullstack Developer',
            dates: '2018 – 2021',
            bullets: [
              'Business intelligence: Built an administration and visualization system for inventory and sales forecasting.',
              'Commercial management: Managed inventory, market analysis, negotiation and customer retention to improve cash flow efficiency.',
            ],
          },
          {
            org: 'Jala | Cochabamba, Bolivia',
            role: 'Software Residency Fellow & Tutor',
            dates: '2015 – 2019',
            bullets: [
              'Software engineering: Intensive training and application of agile methods, QA, Fullstack development (Python, Angular, Node, C#), CI/CD and testing.',
              'Education: Tutoring in robotics and software fundamentals.',
            ],
          },
          {
            org: 'Freelance / Volunteering',
            role: '',
            dates: '',
            bullets: [
              'Kusillo (2025): Implemented a personal portfolio system and brand.',
              'Vliruos (2020–2021): Data work for water mapping and public health (QGIS).',
              'Kitchen & service (2021–2023): Various operational roles that strengthened stress management, planning and operational efficiency.',
            ],
          },
        ],
        educationTitle: 'Education',
        education: [
          'Google Data Analytics Professional Certificate - Google (Coursera)',
          'Meta Full Stack Developer Professional Certificate - Meta (Coursera)',
          'Google UX Design Professional Certificate - Google (Coursera)',
          'Meta Database Engineer Professional Certificate - Meta (Coursera)',
          'Graphic Design Specialization - CALARTS (Coursera)',
          'Scrum Master Certification - Learn Quest (Coursera)',
          'Python 3 Programming Specialization - University of Michigan (Coursera)',
          'Programas de Residencia en Ingeniería de Software - Jala Foundation (2015-2019)',
          'Licenciatura en Ing. Informática - Universidad Mayor de San Simón (2023 - en curso)',
        ],
        productOwner: {
          rolesList: ['Product Analyst', 'Junior Product Owner', 'Social Impact Focus'],
          summaryTitle: 'Professional Summary',
          summaryText:
            'Hybrid professional with a demonstrated passion for translating complex social problems into scalable software solutions. Google UX Design certified and with hands-on experience managing product features in high-criticality environments. My strength lies in empathetic user research, writing clear user stories and backlog prioritization based on metrics and social value. I have the technical literacy to communicate effectively with engineering and design teams. Seeking a non-lead role focused on execution excellence across the product lifecycle.',
          experienceTitle: 'Product Management & Analysis Experience',
          experience: [
            {
              org: 'Cervantes Asoc. (EdTech) | Remote & Bolivia',
              role: 'Product & UX Analyst (EdTech & Brand Design)',
              dates: '2025 (Freelance Projects)',
              bullets: [
                'Product strategy: designed the initial roadmap and key features for an LMS, focusing the MVP on smooth management of tutors, students and class schedules.',
                'Early validation: organized and ran usability testing sessions for a demo management system, identifying flow problems before full development investment.',
              ],
            },
            {
              org: 'QURI (Art) | Remote & Bolivia',
              role: 'Product & UX Analyst (EdTech & Brand Design)',
              dates: '2025 (Freelance Projects)',
              bullets: [
                'Information architecture: created the IA and navigation flow for an art distribution platform, ensuring buyer experience aligned with brand narrative.',
              ],
            },
            {
              org: 'Dirección General de Régimen Penitenciario | La Paz, Bolivia',
              role: 'Product & Traceability Analyst (Critical Systems)',
              dates: 'May 2024 – 2024',
              bullets: [
                'Focused on data efficiency and ethics to improve HR and records management.',
                'Critical user research: conducted interviews and process analysis with police and administrative staff in a high-security environment to identify pain points and workflows (As is / To be).',
                'Feature definition: translated bureaucratic and operational requirements into clear user stories for the development team, managing backlog related to ~5,000 inmate records.',
                'Metrics & optimization: analyzed operational data to establish KPIs, projecting a reduction in roll-call time from ~60 to ~15 minutes per block through NFC introduction.',
                'Data integrity: prioritized and implemented immutable logging to ensure 100% traceability of credential events, critical for auditability and trust.',
              ],
            },
            {
              org: 'Game Shop | Cochabamba, Bolivia',
              role: 'Business Intelligence Analyst (Retail)',
              dates: 'Aug 2021 – 2022',
              bullets: [
                'Data-driven prioritization: built a visualization system for inventory to prioritize purchasing and restocking based on predictive demand and market trends.',
                'Market research: analyzed customer purchasing behavior to inform product decisions (what items to stock and promote), improving inventory turnover.',
              ],
            },
          ],
          skillsTitle: 'Key Skills & Competencies',
          hardSkillsTitle: 'Hard Skills (Product Execution)',
          skills: {
            hard: [
              'UX/Research: User Journey Mapping, Storyboarding, Interviews, Usability Testing, Persona Definition.',
              'Agile methodology: Scrum, Kanban, Backlog & Sprint management (Jira, Trello).',
              'Technical communication: ability to read and understand code (Python, JavaScript/Angular) and databases (SQL) to estimate and validate engineering decisions.',
              'Prototyping: Figma (wireframing and high-fidelity prototypes).',
              'Metrics: KPI definition and descriptive data analysis (Excel, SQL) to measure product success.',
            ],
            soft: [
              'Social empathy: deep understanding of vulnerability and end-user needs based on prior customer service and social projects.',
              'Assertive communication: facilitating discussions between divergent stakeholders (business, development, design, end users).',
              'Conflict resolution: experience managing relationships and expectations in complex projects.',
            ],
          },
          softSkillsTitle: 'Soft Skills (Leadership without Title)',
          educationTitle: 'Education & Certifications',
          education: [
            'Google UX Design Professional Certificate – Google (Coursera)',
            'Meta React Specialization – Meta (Coursera)',
            'Meta Full Stack Developer: Front-End & Back-End from Scratch – Meta (Coursera)',
            'Google Data Analytics Professional Certificate – Google (Coursera) (Focus: metrics, R, SQL, visualization).',
            'Software Engineering Residency Programs - Jala Foundation (2015-2019)',
          ],
        },
      },
      // User configuration modal (minimal)
      userConfig: {
        message: 'Now it is in english, you can change it later if you want.',
        changeLink: '¡Cambiar a español!',
        action: "Let's go pues!",
      },
    },
    es: {
      header: {
        brand: 'Kusillo',
        nav: {
          love: 'Amor',
          design: 'Diseño',
          art: 'Arte',
          creations: 'Creaciones',
          contact: 'Contacto',
          menu: 'Menú',
        },
      },
      my: {
        work: 'Trabajos (Portafolio)',
      },
      portfolio: {
        more: 'Más trabajos',
      },
      site: {
        updateNote: 'Este sitio estará acabado en 2026',
      },
      data: {
        name: 'Pedro Carpio',
        subtitle: 'Diseñador e ingeniero multidisciplinario',
        photoAlt: 'Foto del autor',
        photoCaption: 'Foto del autor',
        iconCells: [
          'Versión documento',
          'Educación',
          'LinkedIn',
          'Portafolio',
          'Blog',
          'Compartir',
        ],
        notable: 'Destacado',
        notableItems: {
          fullstack: { title: 'Full-stack', desc: 'JavaScript, Python, Node, Express, Flask' },
          uiux: { title: 'UI/UX', desc: 'Figma, prototipado, testing' },
          frontend: { title: 'Frontend', desc: 'Angular, TypeScript, HTML5, CSS3' },
        },
        personalInfoTitle: 'Información personal',
        personal: {
          nametag: 'Nombre completo',
          name: 'Pedro Carpio',
          role: 'Desarrollador Front-end y Full-stack',
          dobTag: 'Fecha de nacimiento',
          dob: '27 de abril de 2000',
          residenceTag: 'Residencia',
          residence: 'Cochabamba, Bolivia',
          phone: '+591 77914381',
          phoneHref: '59177914381',
          email: 'pedrocarpiom@gmail.com',
          rolesList: [
            'Ingeniero UI',
            'Desarrollador',
            'Diseñador',
            'Analista de Datos Jr',
            'Analista QA Jr',
            'Artista',
            'Kusillo',
            'Amante de la vida',
          ],
        },
        hardSkillsTitle: 'Hard Skills',
        hardSkills: {
          developmentTitle: 'Desarrollo',
          development: [
            'HTML & CSS - Diseño web adaptable, HTML semántico',
            'JavaScript (avanzado) - React, Angular, herramientas modernas',
            'Backend & APIs - Node.js, Express, Flask; consumo de APIs y diseño básico',
            'Control de versiones & Linux - Git, GitHub, Linux básico',
            'Testing & Calidad - Fundamentos de pruebas unitarias, awareness en SQA',
          ],
          designTitle: 'Diseño & UX',
          design: [
            'Diseño UI/UX - wireframing, prototipado, usabilidad',
            'Prototipado de alta fidelidad en Figma; Diseño visual con herramientas Adobe',
            'Narrativa visual y storytelling; fotografía y pintura digital',
            'Flujos de trabajo con IA generativa en Adobe Creative Cloud',
          ],
          dataTitle: 'Datos & Análisis',
          data: [
            'Python 3 - recolección, procesamiento y automatización de datos',
            'Bases de datos & SQL - MySQL, PostgreSQL, conocimiento de consultas y estructura',
            'Limpieza, validación y visualización de datos; toma de decisiones basada en datos',
          ],
          productivityTitle: 'Productividad & Metodologías',
          productivity: [
            'SCRUM, desarrollo ágil, Gestión de proyectos',
            'Entrega continua, prácticas de equipos remotos (GitLab workflows)',
            'Fundamentos de negocios y pensamiento de futuros',
          ],
          humanitiesTitle: 'Humanidades & Impacto social',
          humanities: [
            'Género & igualdad, comunicación intercultural, investigación social aplicada',
            'Educación & TESOL, sexualidad juvenil y enfoques sobre riesgo de suicidio',
          ],
        },
        projectsTitle: 'Proyectos',
        projects: [
          {
            title: 'Proyecto Kusi',
            year: '2024',
            role: 'Lead Developer',
            desc: 'Desarrollé la plataforma principal, integrando CMS y sistema de roles.',
          },
          {
            title: 'Proyecto Webadas',
            year: '2022',
            role: 'UI Engineer',
            desc: 'Diseño y prototipado de experiencias móviles y escritorio.',
          },
        ],
        softSkillsTitle: 'Soft Skills',
        softSkillsSubtitle: 'Fortalezas interpersonales principales',
        softSkills: [
          'Pensamiento sistémico & diseño centrado en la comunidad',
          'Empatía, escucha activa y comunicación intercultural',
          'Storytelling y traducción de complejidad técnica a lenguaje accesible',
          'Liderazgo colaborativo creativo y resolución de problemas',
          'Organización, priorización, autonomía y aprendizaje continuo',
        ],
        studiesTitle: 'Estudios',
        redesignNote: 'Este es un rediseño del antiguo diseño "Gridus Personal".',
        // Share modal texts (ES)
        shareTitle: 'Compartir',
        sharePrompt: 'Elige cómo compartir este perfil',
        shareCopyLink: 'Copiar enlace',
        shareNative: 'Abrir compartir nativo',
        shareText: 'Deberíamos contratar a este tipo!',
        shareUnsupported: 'Compartir no está soportado en este navegador',
        close: 'Cerrar',
        // Resumen profesional, roles, experiencia y educación (ES)
        summaryTitle: 'Resumen profesional',
        summaryText:
          'Profesional multidisciplinario con más de una década de experiencia convergiendo tecnología, diseño y gestión humana. Especialista en crear "vínculos aglutinantes" entre necesidades de negocio y soluciones técnicas, con un enfoque centrado en la empatía y el impacto social. Capacidad probada para liderar transformaciones digitales en entornos críticos y creativos, combinando una sólida ingeniería de software con sensibilidad en Experiencia de Usuario y gestión de crisis. Busco roles donde pueda aplicar mi visión integral para construir herramientas que no solo funcionen, sino que aporten tranquilidad y valor real a las personas.',
        exploreRolesTitle: 'Explora mis roles',
        rolesHelper:
          'porfavor, no olvides que si tienes un rol que no tengo considerado pero crees que es para mi, háblame y si mi perfil no es de utilidad para ti, compartelo a alguien que creas que sí le pueda servir',
        roles: {
          persona: 'Persona',
          kusillo: 'Kusillo',
          uiUxTech: 'UI/UX Tech',
          softwareDeveloper: 'Software Developer',
          dataAnalyst: 'Data Analyst',
          solutionsArchitect: 'Solutions Architect',
          impactGeneralist: 'Impact Generalist',
          cxPractitioner: 'CX Practitioner',
        },
        experienceTitle: 'Experiencia profesional',
        experience: [
          {
            org: 'Cervantes Asoc. (EdTech) | Remoto',
            role: 'Lead Developer & UX Designer',
            dates: 'Julio 2025 – Septiembre 2025',
            bullets: [
              'Gestión Integral: Administración del ciclo de vida del producto, desde el diseño de la experiencia de usuario (UX) hasta el testeo de aplicación y uso del sistema.',
            ],
          },
          {
            org: 'QURI | Bolivia',
            role: 'Director de Marca, Marketing & UI/UX',
            dates: 'Junio 2025 – Septiembre 2025',
            bullets: [
              'Estrategia Comercial: Creación de la primera campaña comercial y de marca para la distribución de arte boliviano a nivel nacional e internacional.',
              'Diseño de Producto: Diseño de un sistema UI/UX para la gestión de diversos artistas, roles y contenido global.',
            ],
          },
          {
            org: 'Dirección General de Régimen Penitenciario | La Paz, Bolivia',
            role: 'Project Manager & Lead Fullstack Developer',
            dates: 'Mayo 2024 - Junio 2025',
            bullets: [
              'Liderazgo técnico y de producto en la modernización del sistema de gestión del Penal de San Pedro.',
              'Gestión Crítica: Escalado del sistema para soportar 5,000 expedientes de privados de libertad y 12 secciones de instalaciones.',
              'Optimización Operativa: Implementación de control de asistencia mediante NFC, proyectando una reducción en tiempos de lista de ~60 min (manual) a ~15-35 min.',
              'Seguridad de Datos: Desarrollo de un sistema de trazabilidad con hashing evidente de manipulación (tamper-evident) para asegurar el 100% de los eventos de credenciales.',
              'Diseño UX: Creación de interfaces de alta usabilidad para reducir la superficie de error humano en la entrada de datos.',
            ],
          },
          {
            org: 'Grupo GOIT | Bolivia',
            role: 'Desarrollador Multidisciplinario & Especialista UX',
            dates: 'Agosto 2021 – Noviembre 2022',
            bullets: [
              'Desarrollo Fullstack: Colaboración en la selección y procesamiento de datos, asegurando una gestión eficiente, y desarrollo del sitio web corporativo completo usando Node.js, Angular y Python.',
              'Investigación de Usuario: Análisis e investigación de clientes ideales y sus comportamientos únicos para estrategias de UX y Rebranding.',
              'Automatización: Colaboración en proyectos de administración de sistemas usando Red Hat Linux, Ansible y ciberseguridad.',
            ],
          },
          {
            org: 'Game Shop | Cochabamba, Bolivia',
            role: 'Administrador de Tienda & Desarrollador Fullstack',
            dates: '2018 – 2021',
            bullets: [
              'Inteligencia de Negocios: Desarrollo de un sistema de administración y visualización de datos para inventario y predicción de ventas.',
              'Gestión Comercial: Administración de inventario, análisis de mercado, negociación y retención de clientes, logrando eficiencia en flujo de efectivo.',
            ],
          },
          {
            org: 'Jala | Cochabamba, Bolivia',
            role: 'Residente Becario de Software Comercial & Tutor',
            dates: '2015 – 2019',
            bullets: [
              'Ingeniería de Software: Formación intensiva y aplicación de metodologías ágiles, QA, Fullstack (Python, Angular, Node, C#), CI/CD y Testing.',
              'Educación: Tutoría en robótica y fundamentos de software.',
            ],
          },
          {
            org: 'Trabajo Independiente / Voluntariado',
            role: '',
            dates: '',
            bullets: [
              'Kusillo (2025): Implementación de sistema de portafolio personal y marca.',
              'Vliruos (2020-2021): Gestión de datos para mapeo de agua potable y salud pública (QGIS).',
              'Cocina y Servicio (2021-2023): Diversos roles operativos que fortalecieron la gestión de estrés, planificación y eficiencia operativa.',
            ],
          },
        ],
        educationTitle: 'Educación',
        education: [
          'Google Data Analytics Professional Certificate - Google (Coursera)',
          'Meta Full Stack Developer Professional Certificate - Meta (Coursera)',
          'Google UX Design Professional Certificate - Google (Coursera)',
          'Meta Database Engineer Professional Certificate - Meta (Coursera)',
          'Graphic Design Specialization - CALARTS (Coursera)',
          'Scrum Master Certification - Learn Quest (Coursera)',
          'Python 3 Programming Specialization - University of Michigan (Coursera)',
          'Programas de Residencia en Ingeniería de Software - Jala Foundation (2015-2019)',
          'Licenciatura en Ing. Informática - Universidad Mayor de San Simón (2023 - en curso)',
        ],
        productOwner: {
          rolesList: ['Analista de Producto', 'Product Owner Jr.', 'Enfoque en Impacto Social'],
          summaryTitle: 'Resumen Profesional',
          summaryText:
            'Profesional híbrido con una pasión demostrada por traducir problemas sociales complejos en soluciones de software escalables. Certificado en UX Design (Google) y con experiencia práctica en la gestión de características de productos en entornos de alta criticidad. Mi fortaleza reside en la investigación empática de usuarios, la definición de User Stories y la priorización de backlogs basada en métricas y valor social. Poseo las habilidades técnicas necesarias para comunicarme eficazmente con equipos de Ingeniería y Diseño. Busco un rol no-Lead para enfocarme en la excelencia de la ejecución del ciclo de vida del producto.',
          experienceTitle: 'Experiencia de Gestión y Análisis de Producto',
          experience: [
            {
              org: 'Cervantes Asoc. (EdTech) | Remoto & Bolivia',
              role: 'Analista de Producto y UX (EdTech y Diseño de Marca)',
              dates: '2025 (Proyectos Freelance)',
              bullets: [
                'Estrategia de Producto: Diseñé el roadmap inicial y las funcionalidades clave para una plataforma LMS (e-learning), enfocando el MVP en la gestión fluida de tutores, estudiantes y calendarios de clases.',
                'Validación Temprana: Organicé y ejecuté sesiones de Testeo de Usabilidad (Usability Testing) para un demo del sistema de gestión, identificando fallos en el flujo antes de la inversión completa en desarrollo.',
              ],
            },
            {
              org: 'QURI (Arte) | Remoto & Bolivia',
              role: 'Analista de Producto y UX (EdTech y Diseño de Marca)',
              dates: '2025 (Proyectos Freelance)',
              bullets: [
                'Arquitectura de Información: Creé la arquitectura y el flujo de navegación de la plataforma para la distribución de arte (QURI), asegurando que la experiencia del comprador se alineara con la narrativa de la marca.',
              ],
            },
            {
              org: 'Dirección General de Régimen Penitenciario | La Paz, Bolivia',
              role: 'Analista de Producto y Trazabilidad (Sistemas Críticos)',
              dates: 'Mayo 2024 – 2024',
              bullets: [
                'Enfoque en la eficiencia y la ética de los datos para mejorar la gestión de recursos humanos y expedientes.',
                'Investigación de Usuario Crítica: Realicé entrevistas y análisis de procesos con personal policial y administrativo en un entorno de alta seguridad para identificar puntos de dolor y flujos de trabajo (As is/To be).',
                'Definición de Características: Traduje requerimientos burocráticos y operativos en historias de usuario claras para el equipo de desarrollo, gestionando el backlog de características como la gestión de 5,000 expedientes de internos.',
                'Métricas y Optimización: Analicé datos operativos para establecer métricas de rendimiento (KPIs), logrando una reducción proyectada del tiempo de conteo de 60 a ~15 minutos por pabellón mediante la introducción de tecnología NFC.',
                'Integridad de Datos: Prioricé e implementé la característica de logging inmutable, asegurando la trazabilidad del 100% de los eventos de credenciales, fundamental para la auditoría y la confianza en el sistema.',
              ],
            },
            {
              org: 'Game Shop | Cochabamba, Bolivia',
              role: 'Analista de Business Intelligence (Retail)',
              dates: 'Ago 2021 – 2022',
              bullets: [
                'Priorización Basada en Datos: Desarrollé un sistema de visualización para el inventario, permitiendo priorizar la compra y reposición de stock basándose en datos predictivos de demanda y tendencias de mercado.',
                'Investigación de Mercado: Analicé el comportamiento de compra de los clientes para informar las decisiones de producto (qué artículos almacenar y promocionar), logrando una mayor rotación de inventario.',
              ],
            },
          ],
          skillsTitle: 'Habilidades y Competencias Clave',
          hardSkillsTitle: 'Hard Skills (Ejecución de Producto)',
          skills: {
            hard: [
              'UX/Investigación: User Journey Mapping, Storyboarding, Entrevistas, Usability Testing, Definición de Personas.',
              'Metodología Ágil: Scrum, Kanban, Gestión de Backlog y Sprints (Jira, Trello).',
              'Comunicación Técnica: Capacidad para leer y entender código (Python, JavaScript/Angular) y bases de datos (SQL) para estimar y validar decisiones de ingeniería.',
              'Prototipado: Figma (Wireframing y Prototipos de Alta Fidelidad).',
              'Métricas: Definición de KPIs, Análisis de datos descriptivos (Excel, SQL) para medir el éxito del producto.',
            ],
            soft: [
              'Empatía Social: Profunda comprensión de la vulnerabilidad y necesidades del usuario final, basada en experiencias previas en servicio al cliente y proyectos sociales.',
              'Comunicación Asertiva: Habilidad para facilitar discusiones entre stakeholders divergentes (negocio, desarrollo, diseño, usuario final).',
              'Resolución de Conflictos: Experiencia gestionando relaciones y expectativas en proyectos complejos.',
            ],
          },
          softSkillsTitle: 'Soft Skills (Liderazgo sin Cargo)',
          educationTitle: 'Educación y Certificaciones Clave',
          education: [
            'Google UX Design Professional Certificate – Google (Coursera)',
            'Meta React Specialization – Meta (Coursera)',
            'Meta Full Stack Developer: Front-End & Back-End from Scratch – Meta (Coursera)',
            'Google Data Analytics Professional Certificate – Google (Coursera) (Énfasis: Definición de métricas, R, SQL, Visualización).',
            'Programas de Residencia en Ingeniería de Software - Jala Foundation (2015-2019)',
          ],
        },
      },
      // User configuration modal (ES minimal)
      userConfig: {
        message: 'El idioma por defecto es español.',
        changeLink: 'Change to English please!',
        action: '¡Vamos pues!',
      },
    },
  };

  constructor() {}

  private loadLang(): string {
    try {
      const saved = localStorage.getItem('lang');
      return saved ? saved : this.defaultLang;
    } catch (e) {
      return this.defaultLang;
    }
  }

  getLang(): string {
    return this.lang$.value;
  }

  setLang(lang: string) {
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      // ignore storage errors
    }
    this.lang$.next(lang);
  }

  // Helper to resolve dotted paths on an object, e.g. 'header.nav.love'
  private getByPath(obj: any, path: string): any {
    if (!obj || !path) {
      return undefined;
    }
    const parts = path.split('.');
    let cur: any = obj;
    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
        cur = cur[p];
      } else {
        return undefined;
      }
    }
    return cur;
  }

  // t: translate a key. Supports dotted keys (new tree) like 'header.nav.love'
  // Also keeps a tolerant fallback: tries dotted path, then top-level key on current lang,
  // then dotted path on defaultLang, then top-level on defaultLang, then returns the key.
  t(key: string): string {
    const lang = this.getLang();

    // 1) try dotted path on current lang
    const v1 = this.getByPath(this.translations[lang], key);
    if (v1 !== undefined) {
      return v1;
    }

    // 2) try top-level key (legacy) on current lang
    if (this.translations[lang] && this.translations[lang][key] !== undefined) {
      return this.translations[lang][key];
    }

    // 3) try dotted path on defaultLang
    const v2 = this.getByPath(this.translations[this.defaultLang], key);
    if (v2 !== undefined) {
      return v2;
    }

    // 4) try top-level on defaultLang
    if (
      this.translations[this.defaultLang] &&
      this.translations[this.defaultLang][key] !== undefined
    ) {
      return this.translations[this.defaultLang][key];
    }

    // fallback: return the raw key
    return key;
  }
}
