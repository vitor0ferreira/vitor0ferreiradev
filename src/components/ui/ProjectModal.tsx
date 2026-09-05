"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ProjectRecord } from "@/types/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { X, ExternalLink, Github, CheckCircle2, Layers, AlertCircle } from "lucide-react";

interface ProjectModalProps {
  project: ProjectRecord | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-surface border border-outline-technical p-6 md:p-10 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex justify-between items-start border-b border-outline-technical pb-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2 font-mono text-xs text-tertiary">
              <span>{project.ref}</span>
              <span>//</span>
              <span>{project.year}</span>
              <span>//</span>
              <span className="uppercase">{project.category}</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-primary uppercase tracking-tight">
              {project.title[language]}
            </h2>
            <p className="font-sans text-sm text-on-surface-variant mt-1">
              {project.subtitle[language]}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-on-surface-variant hover:text-tertiary hover:bg-surface-high border border-outline-technical transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Image & Tech Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Browser Window Frame */}
            <div className="border border-outline-technical bg-surface flex flex-col overflow-hidden shadow-2xl">
              <div className="bg-surface-lowest px-3 py-2 border-b border-outline-technical flex items-center justify-between font-mono text-[10px] text-on-surface-muted select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                </div>
                <span className="text-[10px] text-on-surface-variant truncate max-w-[200px]">
                  {project.liveUrl ? project.liveUrl.replace("https://", "") : project.ref}
                </span>
                <span className="text-[9px] text-tertiary font-bold tracking-wider">LIVE RECORD</span>
              </div>

              <div className="relative aspect-[16/11] w-full bg-surface-lowest overflow-hidden group/modalimg">
                <Image
                  src={project.image}
                  alt={project.title[language]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-2 right-2 bg-black/90 border border-outline-technical px-3 py-1 font-mono text-[10px] text-tertiary hover:border-tertiary hover:bg-tertiary hover:text-black transition-colors flex items-center gap-1.5"
                  >
                    <span>ACESSAR PRODUÇÃO</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="border border-outline-technical p-4 bg-surface-lowest">
                <span className="font-mono text-[10px] text-tertiary uppercase block mb-3">
                  // TELEMETRIA & IMPACTO
                </span>
                <ul className="space-y-2">
                  {project.metrics.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-mono text-xs text-on-surface">
                      <span className="w-1.5 h-1.5 bg-tertiary"></span>
                      {m[language]}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div>
              <span className="font-mono text-[10px] text-on-surface-variant uppercase block mb-2">
                {t.archivePage.techStack}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-outline-technical bg-surface-lowest px-2.5 py-1 font-mono text-xs text-on-surface uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Problem / Architecture / Result */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Problem */}
            <div className="border-l-2 border-outline-variant pl-4">
              <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant uppercase mb-1.5">
                <AlertCircle className="w-4 h-4 text-secondary" />
                {t.archivePage.problem}
              </div>
              <p className="font-sans text-sm text-on-surface leading-relaxed">
                {project.details.problem[language]}
              </p>
            </div>

            {/* Architecture */}
            <div className="border-l-2 border-tertiary pl-4">
              <div className="flex items-center gap-2 font-mono text-xs text-tertiary uppercase mb-1.5">
                <Layers className="w-4 h-4 text-tertiary" />
                {t.archivePage.architecture}
              </div>
              <p className="font-sans text-sm text-on-surface leading-relaxed">
                {project.details.architecture[language]}
              </p>
            </div>

            {/* Result */}
            <div className="border-l-2 border-primary pl-4">
              <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {t.archivePage.result}
              </div>
              <p className="font-sans text-sm text-on-surface leading-relaxed">
                {project.details.result[language]}
              </p>
            </div>

            {/* Actions: Live Demo & GitHub */}
            <div className="mt-4 pt-6 border-t border-outline-technical flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-tertiary text-black font-mono text-xs font-semibold hover:bg-white transition-colors uppercase"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.archivePage.liveDemo}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-outline-technical bg-surface-lowest text-primary font-mono text-xs hover:border-tertiary hover:text-tertiary transition-colors uppercase"
                >
                  <Github className="w-4 h-4" />
                  {t.archivePage.sourceCode}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
