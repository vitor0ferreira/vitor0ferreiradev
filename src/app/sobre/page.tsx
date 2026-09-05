"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { skillCategoriesData, experienceData, educationData } from "@/data/skills";
import { ContactModal } from "@/components/ui/ContactModal";
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Languages, 
  Terminal, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  Award
} from "lucide-react";

export default function AboutPage() {
  const { language, t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-full min-h-screen px-4 sm:px-8 md:px-margin-desktop py-12 md:py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Page Header */}
        <header className="border-b border-outline-technical pb-8">
          <span className="font-mono text-xs text-tertiary block mb-2">
            {t.aboutPage.sectionTag}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-primary uppercase font-bold tracking-tight mb-4">
            {t.aboutPage.title}
          </h1>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-3xl leading-relaxed">
            {t.aboutPage.summaryText}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-tertiary text-black font-mono text-xs font-semibold hover:bg-white transition-colors uppercase"
            >
              <Terminal className="w-4 h-4" />
              <span>ESTABELECER CONTATO</span>
            </button>
            <a
              href="/curriculo_vitor_hugo_ferreira.pdf"
              download="Curriculo_Vitor_Hugo_Ferreira.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-outline-technical bg-surface-lowest text-primary font-mono text-xs hover:border-tertiary hover:text-tertiary transition-colors uppercase"
            >
              <FileText className="w-4 h-4 text-tertiary" />
              <span>{t.contactModal.downloadCV}</span>
            </a>
          </div>
        </header>

        {/* Experience Timeline */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-outline-technical pb-3">
            <Briefcase className="w-5 h-5 text-tertiary" />
            <h2 className="font-serif text-2xl text-primary uppercase">
              {t.aboutPage.experienceTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="border border-outline-technical p-6 md:p-8 bg-surface-lowest space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-outline-technical pb-4">
                  <div>
                    <span className="font-mono text-xs text-tertiary block mb-1">
                      [ EMPRESA // 0{idx + 1} ]
                    </span>
                    <h3 className="font-serif text-2xl text-primary uppercase font-semibold">
                      {exp.company}
                    </h3>
                    <p className="font-mono text-sm text-on-surface-variant mt-1">
                      {exp.role[language]}
                    </p>
                  </div>
                  <div className="font-mono text-xs text-right self-start md:self-auto space-y-1">
                    <span className="text-primary font-semibold block">{exp.period}</span>
                    <span className="text-tertiary block">{exp.duration[language]}</span>
                    <span className="text-on-surface-muted block">{exp.location}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-xs text-on-surface-muted uppercase block">
                    // PRINCIPAIS ATRIBUIÇÕES & IMPACTO
                  </span>
                  <ul className="space-y-2.5">
                    {exp.highlights[language].map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 font-sans text-xs md:text-sm text-on-surface leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-outline-technical pb-3">
            <GraduationCap className="w-5 h-5 text-tertiary" />
            <h2 className="font-serif text-2xl text-primary uppercase">
              {t.aboutPage.educationTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="border border-outline-technical p-6 bg-surface-lowest space-y-4"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-tertiary">
                    // ENSINO_SUPERIOR
                  </span>
                  <span className="border border-tertiary/40 bg-tertiary/10 px-2 py-0.5 font-mono text-[11px] text-tertiary uppercase">
                    {edu.status[language]}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-primary uppercase font-bold">
                    {edu.course[language]}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant mt-1">
                    {edu.institution}
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-technical font-mono text-xs text-on-surface-muted flex justify-between">
                  <span>{edu.period} ({edu.duration[language]})</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}

            {/* Continuous Learning Card */}
            <div className="border border-outline-technical p-6 bg-surface-lowest space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-primary">
                  // FORMAÇÃO_CONTÍNUA
                </span>
                <span className="border border-outline-technical px-2 py-0.5 font-mono text-[11px] text-on-surface-variant uppercase">
                  AUTO-DIDATA
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg text-primary uppercase font-bold">
                  Deep Learning, Docker & WebSockets
                </h3>
                <p className="font-sans text-xs text-on-surface-variant mt-1">
                  Estudo aprofundado em visão computacional (MobileNetV2/Keras), orquestração de microsserviços e feeds em tempo real.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-technical font-mono text-xs text-tertiary">
                PROJETOS PRÁTICOS EM PRODUÇÃO
              </div>
            </div>
          </div>
        </section>

        {/* Technical Competencies Matrix */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-outline-technical pb-3">
            <Code2 className="w-5 h-5 text-tertiary" />
            <h2 className="font-serif text-2xl text-primary uppercase">
              {t.aboutPage.skillsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategoriesData.map((category, idx) => (
              <div
                key={idx}
                className="border border-outline-technical p-6 bg-surface-lowest space-y-4"
              >
                <div className="flex items-center justify-between border-b border-outline-technical pb-2">
                  <h3 className="font-mono text-xs text-primary uppercase font-bold">
                    {category.name[language]}
                  </h3>
                  <span className="font-mono text-[10px] text-tertiary">
                    [{category.skills.length} COMPETÊNCIAS]
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 font-mono text-xs border border-tertiary/60 bg-surface-lowest text-primary uppercase flex items-center gap-2 hover:border-tertiary hover:bg-surface-high transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-tertiary flex-shrink-0"></span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spoken Languages & Summary */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-outline-technical pb-3">
            <Languages className="w-5 h-5 text-tertiary" />
            <h2 className="font-serif text-2xl text-primary uppercase">
              {t.aboutPage.languagesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.aboutPage.languagesList.map((lang, idx) => (
              <div
                key={idx}
                className="border border-outline-technical p-5 bg-surface-lowest space-y-2"
              >
                <div className="font-mono text-xs text-tertiary uppercase">
                  [ 0{idx + 1} // IDIOMA ]
                </div>
                <div className="font-serif text-xl text-primary font-bold">
                  {lang.name}
                </div>
                <div className="font-mono text-xs text-on-surface-variant">
                  {lang.level}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
