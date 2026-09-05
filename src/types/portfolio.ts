export type Language = 'pt' | 'en';

export interface ProjectRecord {
  id: string;
  ref: string; // e.g. "ARCH-001"
  year: string; // e.g. "2025"
  category: 'fullstack' | 'ai' | 'realtime' | 'landing';
  title: {
    pt: string;
    en: string;
  };
  subtitle: {
    pt: string;
    en: string;
  };
  summary: {
    pt: string;
    en: string;
  };
  details: {
    problem: {
      pt: string;
      en: string;
    };
    architecture: {
      pt: string;
      en: string;
    };
    result: {
      pt: string;
      en: string;
    };
  };
  techStack: string[];
  metrics?: {
    pt: string;
    en: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured?: boolean;
}

export interface ExperienceRecord {
  company: string;
  role: {
    pt: string;
    en: string;
  };
  period: string;
  duration: {
    pt: string;
    en: string;
  };
  location: string;
  highlights: {
    pt: string[];
    en: string[];
  };
}

export interface EducationRecord {
  institution: string;
  course: {
    pt: string;
    en: string;
  };
  period: string;
  duration: {
    pt: string;
    en: string;
  };
  location: string;
  status: {
    pt: string;
    en: string;
  };
}

export interface SkillCategory {
  name: {
    pt: string;
    en: string;
  };
  skills: {
    name: string;
    level?: 'expert' | 'proficient' | 'familiar';
    highlight?: boolean;
  }[];
}
