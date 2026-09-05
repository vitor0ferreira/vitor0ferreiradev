import { ProjectRecord } from "@/types/portfolio";

export const projectsData: ProjectRecord[] = [
  {
    id: "tb-ai",
    ref: "ARCH-001",
    year: "2025",
    category: "ai",
    featured: true,
    title: {
      pt: "TB-AI: Detector de Tuberculose",
      en: "TB-AI: Tuberculosis Detector",
    },
    subtitle: {
      pt: "Deep Learning & Classificação de Raios-X Pulmonares",
      en: "Deep Learning & Chest X-Ray Classification",
    },
    summary: {
      pt: "Sistema inteligente de triagem médica baseado em visão computacional e Deep Learning, capaz de analisar radiografias de tórax e detectar sinais de tuberculose com alta precisão.",
      en: "Intelligent medical screening system based on computer vision and Deep Learning, analyzing chest X-rays to detect tuberculosis patterns with high precision.",
    },
    details: {
      problem: {
        pt: "A triagem inicial de tuberculose em regiões com recursos limitados enfrenta escassez de radiologistas e atrasos no diagnóstico precoce.",
        en: "Initial tuberculosis screening in resource-constrained clinics suffers from radiologist shortages and diagnostic delays.",
      },
      architecture: {
        pt: "Treinamento de rede neural convolucional utilizando transfer learning sobre o modelo MobileNetV2 com dataset de 3.000 imagens de raios-X. API REST em Python (Flask + Gunicorn) encapsulada em contêiner Docker para inferência assíncrona, conectada a uma interface moderna em Next.js com TypeScript e upload drag-and-drop.",
        en: "Trained a convolutional neural network via transfer learning on MobileNetV2 with a 3,000 chest X-ray image dataset. Python Flask REST API containerized with Docker & Gunicorn for inference, served to a Next.js + TypeScript frontend with drag-and-drop uploads.",
      },
      result: {
        pt: "Interface responsiva com predição em tempo real e visualização de confiança, além de pipeline de deploy isolado em contêiner para alta portabilidade.",
        en: "Responsive real-time prediction UI with confidence scoring, fully containerized for seamless and portable deployment.",
      },
    },
    techStack: ["Python", "TensorFlow", "MobileNetV2", "Flask", "Docker", "Next.js", "TypeScript", "Tailwind CSS"],
    metrics: [
      { pt: "3.000+ Imagens no Dataset", en: "3,000+ Dataset Images" },
      { pt: "Inferência Sub-segundo", en: "Sub-second Inference" },
      { pt: "Arquitetura Dockerizada", en: "Dockerized Architecture" },
    ],
    liveUrl: "https://tb-ai-eta.vercel.app",
    githubUrl: "https://github.com/vitor0ferreira/tb-ai",
    image: "/projects/tb-ai.png",
  },
  {
    id: "coin-visualizer",
    ref: "ARCH-002",
    year: "2024",
    category: "realtime",
    featured: true,
    title: {
      pt: "Coin Visualizer: Monitor em Tempo Real",
      en: "Coin Visualizer: Real-Time Telemetry",
    },
    subtitle: {
      pt: "Dashboard Cripto com WebSockets & Gráficos Interativos",
      en: "Crypto Dashboard via WebSockets & Interactive Charts",
    },
    summary: {
      pt: "Dashboard financeiro de alto desempenho que consome fluxos de dados de criptomoedas da Binance API via WebSockets, renderizando flutuações de preços instantâneas com gráficos analíticos.",
      en: "High-performance financial telemetry dashboard streaming Binance API cryptocurrency feeds via WebSockets, rendering instant price ticks and analytical charts.",
    },
    details: {
      problem: {
        pt: "Acompanhar variações de mercado em plataformas convencionais com requisições HTTP tradicionais gera sobrecarga e atrasos na tomada de decisão.",
        en: "Tracking volatile market shifts with conventional polling causes latency and UI stutters during critical price movements.",
      },
      architecture: {
        pt: "Conexão bidirecional persistente via WebSockets com os servidores da Binance, normalização de stream em tempo real no cliente React, renderização de séries temporais com Recharts e componentes acessíveis com Radix UI / Tailwind CSS.",
        en: "Persistent bidirectional WebSocket stream to Binance feeds, client-side data buffering and normalization, time-series visualization using Recharts and accessible Radix UI primitives.",
      },
      result: {
        pt: "Atualização contínua com zero latência perceptível, UI minimalista focada na clareza analítica e dados históricos personalizáveis.",
        en: "Instant zero-lag price updates with customizable timeframe charting and clean technical UI.",
      },
    },
    techStack: ["Next.js", "TypeScript", "WebSockets", "Binance API", "Recharts", "Tailwind CSS", "Radix UI"],
    metrics: [
      { pt: "Fluxo Contínuo WebSockets", en: "Continuous WebSocket Stream" },
      { pt: "Gráficos Recharts em 60fps", en: "60fps Recharts Visuals" },
      { pt: "Design System Radix / Shadcn", en: "Radix / Shadcn Design System" },
    ],
    liveUrl: "https://coin-visualizer.vercel.app",
    githubUrl: "https://github.com/vitor0ferreira/coin-visualizer",
    image: "/projects/coin-visualizer.png",
  },
  {
    id: "the-best-pokemon",
    ref: "ARCH-003",
    year: "2024",
    category: "fullstack",
    featured: true,
    title: {
      pt: "The Best Pokémon: Sistema de Votação",
      en: "The Best Pokémon: Full-Stack Ranking",
    },
    subtitle: {
      pt: "Aplicação Full-Stack com SSR, OAuth & Prisma ORM",
      en: "Full-Stack Application with SSR, OAuth & Prisma ORM",
    },
    summary: {
      pt: "Plataforma interativa e escalável para classificação e votação comunitária de Pokémons, construída com Next.js App Router, autenticação segura multi-provedor e banco relacional PostgreSQL.",
      en: "Interactive full-stack community ranking and voting engine built with Next.js App Router, secure multi-provider OAuth, and PostgreSQL via Prisma ORM.",
    },
    details: {
      problem: {
        pt: "Aplicações de votação com alto engajamento exigem integridade contra fraudes, renderização veloz do catálogo e sessões de usuário consistentes.",
        en: "High-engagement voting systems require abuse prevention, instant catalog indexing, and seamless cross-device user sessions.",
      },
      architecture: {
        pt: "Server-Side Rendering (SSR) no Next.js para indexação instantânea e SEO, autenticação OAuth via NextAuth.js (GitHub, Google), camadas de dados estruturadas com Prisma ORM sobre PostgreSQL, busca reativa e paginação infinita.",
        en: "Server-Side Rendering (SSR) via Next.js for high SEO and speed, NextAuth.js OAuth flows (GitHub, Google), strongly typed Prisma ORM layer over PostgreSQL, and infinite scroll virtualization.",
      },
      result: {
        pt: "Experiência de votação fluida com modais dinâmicos, ranking global atualizado e controle seguro de permissões de voto.",
        en: "Fluid voting experience with dynamic voting modals, real-time leaderboard calculations, and validated ballot states.",
      },
    },
    techStack: ["Next.js", "React", "TypeScript", "Prisma ORM", "PostgreSQL", "NextAuth.js", "Tailwind CSS"],
    metrics: [
      { pt: "Autenticação OAuth Integrada", en: "Multi-Provider OAuth" },
      { pt: "Persistência Relacional Prisma", en: "Prisma Relational Schema" },
      { pt: "SSR & Infinite Scroll", en: "SSR & Infinite Scroll" },
    ],
    liveUrl: "https://the-best-pokemon.vercel.app",
    githubUrl: "https://github.com/vitor0ferreira/the-best-pokemon",
    image: "/projects/the-best-pokemon.png",
  },
  {
    id: "cafe-alpinopolis",
    ref: "ARCH-004",
    year: "2024",
    category: "landing",
    featured: true,
    title: {
      pt: "Café Alpinópolis: Landing Page Gourmet",
      en: "Café Alpinópolis: Gourmet Coffee Experience",
    },
    subtitle: {
      pt: "Design Editorial, Identidade Visual & Conversão Comercial",
      en: "Editorial Web Design, Brand Identity & Commercial Conversion",
    },
    summary: {
      pt: "Landing page institucional e de conversão para produtor de cafés especiais de Minas Gerais. Une tipografia editorial refinada inspirada no terroir regional, catálogo de produtos artesanais, captação comercial B2B para cafeterias e guia interativo de preparo.",
      en: "High-end institutional and conversion landing page for a specialty coffee producer from Minas Gerais. Blends quiet luxury editorial typography, terroir storytelling, an artisanal coffee catalog, a B2B wholesale inquiry module, and an interactive brewing guide.",
    },
    details: {
      problem: {
        pt: "Apresentar a tradição e a alta qualidade dos grãos artesanais da região de Alpinópolis/MG em uma experiência digital envolvente, superando layouts genéricos de e-commerce e permitindo captar tanto consumidores finais quanto pedidos comerciais B2B.",
        en: "Convey the authentic heritage and gourmet distinction of artisanal coffee grown in Minas Gerais through an immersive digital storefront, balancing consumer storytelling with B2B wholesale lead capture.",
      },
      architecture: {
        pt: "Desenvolvida com React, Vite, TypeScript e Tailwind CSS. Aplicação de princípios avançados de design editorial com tipografia clássica (EB Garamond) e sans-serif contemporânea (Hanken Grotesk), layout responsivo com micro-interações, formulário de proposta comercial estruturado e integração direta via API do WhatsApp para vendas ágeis.",
        en: "Architected using React, Vite, TypeScript, and Tailwind CSS. Employs advanced editorial design with classical serif headlines (EB Garamond) paired with a clean geometric sans-serif (Hanken Grotesk), responsive product grids, structured B2B lead generation forms, and instant WhatsApp ordering flows.",
      },
      result: {
        pt: "Interface de alta fidelidade visual com notas de pontuação sensorial SCA, tempo de carregamento ultrarrápido com Vite e experiência comercial de conversão fluida.",
        en: "High-fidelity visual interface featuring SCA cupping score details, sub-second load performance powered by Vite, and an effortless commercial conversion funnel.",
      },
    },
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "UI/UX Design", "WhatsApp API"],
    metrics: [
      { pt: "Arquitetura Editorial Responsiva", en: "Responsive Editorial Architecture" },
      { pt: "Captação Comercial B2B & B2C", en: "B2B & B2C Lead Generation" },
      { pt: "Carregamento Ultrarrápido Vite", en: "Ultra-fast Vite Performance" },
    ],
    liveUrl: "https://cafealpinopolis.vercel.app",
    githubUrl: "https://github.com/vitor0ferreira/cafealpinopolis",
    image: "/projects/cafe-alpinopolis.png",
  },
];
