import { SkillCategory, ExperienceRecord, EducationRecord } from "@/types/portfolio";

export const skillCategoriesData: SkillCategory[] = [
  {
    name: {
      pt: "Linguagens de Programação",
      en: "Programming Languages",
    },
    skills: [
      { name: "TypeScript", level: "expert", highlight: true },
      { name: "JavaScript (ES6+)", level: "expert", highlight: true },
      { name: "Python", level: "proficient", highlight: true },
      { name: "SQL", level: "proficient", highlight: true },
      { name: "Java", level: "familiar" },
      { name: "C / C++", level: "familiar" },
      { name: "HTML5 / CSS3", level: "expert" },
    ],
  },
  {
    name: {
      pt: "Frameworks & Bibliotecas",
      en: "Frameworks & Libraries",
    },
    skills: [
      { name: "React", level: "expert", highlight: true },
      { name: "Next.js (App Router)", level: "expert", highlight: true },
      { name: "Node.js", level: "proficient", highlight: true },
      { name: "Tailwind CSS", level: "expert", highlight: true },
      { name: "Flask", level: "proficient", highlight: true },
      { name: "Fastify", level: "proficient" },
      { name: "Angular", level: "familiar" },
      { name: "Shadcn / Radix UI", level: "expert", highlight: true },
      { name: "Prisma ORM", level: "proficient", highlight: true },
      { name: "Drizzle ORM", level: "proficient" },
      { name: "Material UI", level: "proficient" },
      { name: "Styled Components", level: "proficient" },
    ],
  },
  {
    name: {
      pt: "Real-Time, IA & Arquitetura",
      en: "Real-Time, AI & Architecture",
    },
    skills: [
      { name: "WebSockets", level: "expert", highlight: true },
      { name: "Deep Learning (TensorFlow/Keras)", level: "proficient", highlight: true },
      { name: "Server-Side Rendering (SSR)", level: "expert", highlight: true },
      { name: "REST APIs & Endpoints", level: "expert", highlight: true },
      { name: "PostgreSQL & MySQL", level: "proficient", highlight: true },
      { name: "OAuth & NextAuth.js", level: "proficient" },
      { name: "CI/CD & Docker Containers", level: "proficient", highlight: true },
    ],
  },
  {
    name: {
      pt: "Ferramentas & Metodologias",
      en: "Tools & Methodologies",
    },
    skills: [
      { name: "Docker", level: "proficient", highlight: true },
      { name: "Git & GitHub", level: "expert", highlight: true },
      { name: "Vite & Webpack", level: "proficient" },
      { name: "Scrum & Kanban", level: "expert" },
      { name: "Test-Driven Development (TDD)", level: "proficient" },
      { name: "ESLint & Prettier", level: "expert" },
      { name: "UI/UX & Design Gráfico (9 anos)", level: "expert", highlight: true },
    ],
  },
];

export const experienceData: ExperienceRecord[] = [
  {
    company: "OTMA Publicidade",
    role: {
      pt: "Arte-Finalista & Produção Técnica",
      en: "Technical Graphic Production Specialist",
    },
    period: "01/2016 – 12/2025",
    duration: {
      pt: "~9 Anos",
      en: "~9 Years",
    },
    location: "Uberaba, MG - Brasil",
    highlights: {
      pt: [
        "Tradução de briefings complexos e requisitos de clientes em especificações técnicas rigorosas para produção digital e gráfica.",
        "Controle de qualidade e finalização de arquivos digitais, assegurando conformidade com padrões técnicos de alta precisão.",
        "Colaboração direta com equipes multidisciplinares de marketing e atendimento para gerenciar múltiplos projetos simultâneos sob prazos rígidos.",
        "Desenvolvimento de uma visão estética e estrutural avançada de UI/UX, fundamental na criação de interfaces digitais de alto nível.",
      ],
      en: [
        "Translated complex client briefs and business requirements into rigorous technical specifications for digital and print production.",
        "Quality assurance and file pre-flighting, ensuring strict compliance with precision technical standards across digital platforms.",
        "Collaborated directly with multidisciplinary marketing and account teams to orchestrate multiple concurrent pipelines under tight deadlines.",
        "Cultivated an advanced UI/UX eye for structural layout, visual balance, and typography that directly powers high-grade web interfaces.",
      ],
    },
  },
];

export const educationData: EducationRecord[] = [
  {
    institution: "IFTM - Instituto Federal do Triângulo Mineiro",
    course: {
      pt: "Análise e Desenvolvimento de Sistemas (ADS)",
      en: "Systems Analysis and Development (Higher Education)",
    },
    period: "07/2024 – Presente",
    duration: {
      pt: "~2 Anos",
      en: "~2 Years",
    },
    location: "Campus Uberaba Parque Tecnológico",
    status: {
      pt: "Em Formação",
      en: "Undergraduate",
    },
  },
];
