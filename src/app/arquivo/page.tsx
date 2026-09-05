"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";
import { ProjectRecord } from "@/types/portfolio";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { 
  Filter, 
  ExternalLink, 
  Github, 
  Plus, 
  Layers, 
  AlertCircle, 
  CheckCircle2,
  Database
} from "lucide-react";

type FilterType = "all" | "fullstack" | "ai" | "realtime" | "landing";

export default function ArchivePage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectRecord | null>(null);

  const filterOptions: { id: FilterType; label: string }[] = [
    { id: "all", label: t.archivePage.filters.all },
    { id: "fullstack", label: t.archivePage.filters.fullstack },
    { id: "ai", label: t.archivePage.filters.ai },
    { id: "realtime", label: t.archivePage.filters.realtime },
    { id: "landing", label: t.archivePage.filters.landing },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectsData;
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="w-full min-h-screen px-4 sm:px-8 md:px-margin-desktop py-12 md:py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="border-b border-outline-technical pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-tertiary block">
                {t.archivePage.sectionTag}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl text-primary uppercase font-bold tracking-tight">
                {t.archivePage.title}
              </h1>
              <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl pt-2">
                {t.archivePage.description}
              </p>
            </div>

            {/* Total Records Counter */}
            <div className="border border-outline-technical px-4 py-2 bg-surface-lowest flex items-center gap-3 font-mono text-xs self-start md:self-auto">
              <Database className="w-4 h-4 text-tertiary" />
              <span className="text-on-surface-variant">REGISTROS:</span>
              <span className="text-primary font-bold">{filteredProjects.length} / {projectsData.length}</span>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mt-8 pt-6 border-t border-outline-technical flex items-center justify-between">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3.5 py-1.5 font-mono text-xs uppercase border transition-all ${
                      isActive
                        ? "border-tertiary bg-tertiary text-black font-semibold"
                        : "border-outline-technical bg-surface-lowest text-on-surface-variant hover:border-tertiary hover:text-white"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Records Catalog */}
        {filteredProjects.length === 0 ? (
          <div className="border border-dashed border-outline-technical p-16 text-center space-y-4">
            <Filter className="w-8 h-8 text-on-surface-muted mx-auto" />
            <p className="font-mono text-sm text-on-surface-variant">
              NENHUM REGISTRO ENCONTRADO COM OS FILTROS APLICADOS.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="px-4 py-2 border border-tertiary text-tertiary font-mono text-xs hover:bg-tertiary hover:text-black transition-colors uppercase"
            >
              LIMPAR FILTROS
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="border border-outline-technical bg-surface-lowest p-6 md:p-10 hover:border-tertiary/60 transition-all duration-300 group"
              >
                <div className="grid grid-cols-12 gap-gutter items-start">
                  {/* Left Column: Reference & Year (Narrow) */}
                  <div className="col-span-12 md:col-span-2 flex flex-col md:border-r border-outline-technical md:pr-6 space-y-3 mb-4 md:mb-0">
                    <span className="font-mono text-sm text-tertiary font-bold">
                      [{project.ref}]
                    </span>
                    <span className="font-mono text-xs text-on-surface-variant">
                      ANO: {project.year}
                    </span>
                    <span className="font-mono text-[10px] text-on-surface-muted uppercase">
                      CAT: {project.category}
                    </span>
                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-tertiary hover:underline uppercase"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>DETALHES</span>
                      </button>
                    </div>
                  </div>

                  {/* Center Column: Problem, Architecture, Result (Wide) */}
                  <div className="col-span-12 md:col-span-6 flex flex-col space-y-6 md:pr-6">
                    <div>
                      <h2 className="font-serif text-2xl md:text-3xl text-primary uppercase group-hover:text-tertiary transition-colors">
                        {project.title[language]}
                      </h2>
                      <p className="font-mono text-xs text-on-surface-variant mt-1">
                        {project.subtitle[language]}
                      </p>
                    </div>

                    <div className="space-y-4 text-xs font-sans">
                      {/* Problem */}
                      <div className="border-l border-outline-variant pl-3">
                        <span className="font-mono text-[10px] text-secondary uppercase block mb-1 font-semibold flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {t.archivePage.problem}
                        </span>
                        <p className="text-on-surface-variant leading-relaxed">
                          {project.details.problem[language]}
                        </p>
                      </div>

                      {/* Architecture */}
                      <div className="border-l border-tertiary pl-3">
                        <span className="font-mono text-[10px] text-tertiary uppercase block mb-1 font-semibold flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          {t.archivePage.architecture}
                        </span>
                        <p className="text-on-surface-variant leading-relaxed">
                          {project.details.architecture[language]}
                        </p>
                      </div>

                      {/* Result */}
                      <div className="border-l border-primary pl-3">
                        <span className="font-mono text-[10px] text-primary uppercase block mb-1 font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {t.archivePage.result}
                        </span>
                        <p className="text-on-surface-variant leading-relaxed">
                          {project.details.result[language]}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Box */}
                    <div className="border border-outline-technical p-3 bg-surface">
                      <span className="font-mono text-[10px] text-on-surface-muted uppercase block mb-1.5">
                        {t.archivePage.techStack}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-surface-lowest border border-outline-technical px-2 py-0.5 font-mono text-[11px] text-on-surface uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Direct Links */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary text-black font-mono text-xs font-semibold hover:bg-white transition-colors uppercase"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {t.archivePage.liveDemo}
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-outline-technical bg-surface-lowest text-primary font-mono text-xs hover:border-tertiary hover:text-tertiary transition-colors uppercase"
                        >
                          <Github className="w-3.5 h-3.5" />
                          {t.archivePage.sourceCode}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Screenshot & Preview (Framed Browser Viewport) */}
                  <div className="col-span-12 md:col-span-4 mt-6 md:mt-0">
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="border border-outline-technical bg-surface flex flex-col group/img overflow-hidden cursor-pointer shadow-lg hover:border-tertiary transition-all duration-300"
                    >
                      {/* Browser Frame Top Bar */}
                      <div className="bg-surface-lowest px-3 py-2 border-b border-outline-technical flex items-center justify-between font-mono text-[10px] text-on-surface-muted select-none">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/70"></span>
                          <span className="w-2 h-2 rounded-full bg-yellow-500/70"></span>
                          <span className="w-2 h-2 rounded-full bg-green-500/70"></span>
                        </div>
                        <span className="text-[10px] text-on-surface-variant truncate max-w-[160px]">
                          {project.liveUrl ? project.liveUrl.replace("https://", "") : project.ref}
                        </span>
                        <span className="text-[9px] text-tertiary font-bold tracking-wider">LIVE</span>
                      </div>

                      {/* Screen Viewport with Top Alignment */}
                      <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface-lowest">
                        <Image
                          src={project.image}
                          alt={project.title[language]}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-top grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                        <div className="absolute top-2 left-2 bg-black/85 border border-outline-technical px-2 py-0.5 font-mono text-[9px] text-tertiary">
                          PREVIEW: {project.ref}
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/90 border border-outline-technical px-2.5 py-1 font-mono text-[10px] text-white flex items-center gap-1.5 group-hover:border-tertiary transition-colors">
                          <Plus className="w-3 h-3 text-tertiary" />
                          <span>INSPECIONAR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Project Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
