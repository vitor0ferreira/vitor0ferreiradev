"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";
import { ProjectRecord } from "@/types/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ContactModal } from "@/components/ui/ContactModal";
import { ArrowRight, ArrowDownRight, Terminal, FileText, Database, ShieldCheck, Cpu, Code2, Zap } from "lucide-react";

export default function IndexPage() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectRecord | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-outline-technical px-4 sm:px-8 md:px-margin-desktop py-16 md:py-28 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-gutter items-start">
          {/* Main Headline & Bio (Left Columns) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-tertiary mb-6 border border-outline-technical bg-surface-lowest px-3 py-1 self-start">
              <span className="w-2 h-2 bg-tertiary animate-pulse"></span>
              <span>{t.hero.identityBadge}</span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary uppercase font-bold tracking-tight leading-[1.05] mb-6">
              {t.hero.name}
            </h1>

            {/* Role & Subtitle */}
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-tertiary font-mono text-xs uppercase tracking-wider">
                <ArrowDownRight className="w-4 h-4" />
                <span>{t.hero.role}</span>
              </div>
              <p className="font-sans text-base sm:text-lg text-on-surface leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Link
                href="/arquivo"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-black font-mono text-xs font-semibold hover:bg-tertiary transition-all duration-200 uppercase"
              >
                <span>{t.hero.ctaArchive}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-outline-technical bg-surface-lowest text-primary font-mono text-xs hover:border-tertiary hover:text-tertiary transition-colors uppercase"
              >
                <Terminal className="w-4 h-4 text-tertiary" />
                <span>{t.hero.ctaContact}</span>
              </button>

              <a
                href="/curriculo_vitor_hugo_ferreira.pdf"
                download="Curriculo_Vitor_Hugo_Ferreira.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-on-surface-variant hover:text-tertiary font-mono text-xs transition-colors uppercase"
              >
                <FileText className="w-4 h-4 text-tertiary" />
                <span>{t.hero.ctaResume}</span>
              </a>
            </div>
          </div>

          {/* Technical Marginalia (Right Columns) */}
          <div className="col-span-12 lg:col-span-4 border-t lg:border-t-0 lg:border-l border-outline-technical pt-8 lg:pt-0 lg:pl-8 mt-10 lg:mt-0 space-y-6">
            <div className="font-mono text-xs text-on-surface-variant uppercase tracking-widest border-b border-outline-technical pb-2">
              // TELEMETRIA DO OPERADOR
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="border border-outline-technical p-3 bg-surface-lowest">
                <span className="text-on-surface-muted block text-[10px] uppercase mb-1">
                  {t.hero.marginalia.locationTitle}
                </span>
                <span className="text-primary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-ping"></span>
                  {t.hero.marginalia.locationValue}
                </span>
              </div>

              <div className="border border-outline-technical p-3 bg-surface-lowest">
                <span className="text-on-surface-muted block text-[10px] uppercase mb-1">
                  {t.hero.marginalia.educationTitle}
                </span>
                <span className="text-primary">
                  {t.hero.marginalia.educationValue}
                </span>
              </div>

              <div className="border border-outline-technical p-3 bg-surface-lowest">
                <span className="text-on-surface-muted block text-[10px] uppercase mb-1">
                  {t.hero.marginalia.statusTitle}
                </span>
                <span className="text-tertiary">
                  {t.hero.marginalia.statusValue}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="border border-outline-technical p-3 bg-surface-lowest">
                  <span className="text-on-surface-muted block text-[10px] uppercase mb-1">
                    {t.hero.marginalia.ageTitle}
                  </span>
                  <span className="text-primary">
                    {t.hero.marginalia.ageValue}
                  </span>
                </div>
                <div className="border border-outline-technical p-3 bg-surface-lowest">
                  <span className="text-on-surface-muted block text-[10px] uppercase mb-1">
                    EXPERIÊNCIA
                  </span>
                  <span className="text-primary">
                    9 ANOS TÉCNICOS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Pillars Highlights */}
      <section className="border-b border-outline-technical bg-surface-lowest px-4 sm:px-8 md:px-margin-desktop py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-outline-technical p-5 bg-surface flex flex-col gap-2 group hover:border-tertiary transition-colors">
            <Cpu className="w-5 h-5 text-tertiary" />
            <h3 className="font-mono text-xs text-primary uppercase font-bold">
              Full-Stack & SSR
            </h3>
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
              Aplicações robustas com Next.js App Router, React, TypeScript, APIs REST e arquitetura modular.
            </p>
          </div>

          <div className="border border-outline-technical p-5 bg-surface flex flex-col gap-2 group hover:border-tertiary transition-colors">
            <Zap className="w-5 h-5 text-tertiary" />
            <h3 className="font-mono text-xs text-primary uppercase font-bold">
              WebSockets em Tempo Real
            </h3>
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
              Pipelines de transmissão contínua de dados com baixa latência e dashboards reativos.
            </p>
          </div>

          <div className="border border-outline-technical p-5 bg-surface flex flex-col gap-2 group hover:border-tertiary transition-colors">
            <Code2 className="w-5 h-5 text-tertiary" />
            <h3 className="font-mono text-xs text-primary uppercase font-bold">
              Deep Learning & IA
            </h3>
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
              Integração de modelos neurais em Python (TensorFlow/Keras) servidos via APIs Dockerizadas.
            </p>
          </div>

          <div className="border border-outline-technical p-5 bg-surface flex flex-col gap-2 group hover:border-tertiary transition-colors">
            <ShieldCheck className="w-5 h-5 text-tertiary" />
            <h3 className="font-mono text-xs text-primary uppercase font-bold">
              UI/UX & Rigor Técnico
            </h3>
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
              9 anos de background técnico convertendo requisitos complexos em interfaces milimetricamente precisas.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Records Section */}
      <section className="px-4 sm:px-8 md:px-margin-desktop py-20 md:py-28">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-outline-technical pb-6">
            <div>
              <span className="font-mono text-xs text-tertiary block mb-2">
                {t.featured.sectionTag}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary uppercase">
                {t.featured.title}
              </h2>
            </div>
            <Link
              href="/arquivo"
              className="inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant hover:text-tertiary transition-colors uppercase self-start sm:self-auto"
            >
              <span>{t.featured.viewAllArchive}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Project List */}
          <div className="space-y-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                reversed={idx % 2 !== 0}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>

          {/* Bottom CTA to Archive */}
          <div className="pt-10 flex justify-center">
            <Link
              href="/arquivo"
              className="inline-flex items-center gap-3 px-8 py-4 border border-outline-technical bg-surface-lowest text-primary font-mono text-xs hover:border-tertiary hover:text-tertiary transition-all duration-300 uppercase group"
            >
              <Database className="w-4 h-4 text-tertiary group-hover:scale-110 transition-transform" />
              <span>{t.featured.viewAllArchive}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
