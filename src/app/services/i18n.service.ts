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
