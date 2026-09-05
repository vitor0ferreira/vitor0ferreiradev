"use client";

import React from "react";
import Image from "next/image";
import { ProjectRecord } from "@/types/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Plus } from "lucide-react";

interface ProjectCardProps {
  project: ProjectRecord;
  index: number;
  reversed?: boolean;
  onSelect: (project: ProjectRecord) => void;
}

export function ProjectCard({ project, index, reversed = false, onSelect }: ProjectCardProps) {
  const { language, t } = useLanguage();

  return (
    <article className="border border-outline-technical p-6 md:p-8 bg-surface-lowest hover:border-tertiary/60 transition-all duration-300 group">
      <div className="grid grid-cols-12 gap-gutter items-center">
        {/* Metadata column (Narrow) */}
        <div className="col-span-12 md:col-span-2 flex flex-col md:border-r border-outline-technical md:pr-4 space-y-2">
          <span className="font-mono text-xs text-tertiary font-medium">
            {project.ref}
          </span>
          <span className="font-mono text-xs text-on-surface-variant">
            ANO: {project.year}
          </span>
          <span className="font-mono text-[10px] text-on-surface-muted uppercase">
            CAT: {project.category}
          </span>
        </div>

        {/* Content column */}
        <div className={`col-span-12 md:col-span-6 flex flex-col justify-center space-y-4 ${reversed ? "md:order-2 md:pl-4" : "md:pr-4"}`}>
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-primary uppercase group-hover:text-tertiary transition-colors">
              {project.title[language]}
            </h3>
            <p className="font-mono text-xs text-on-surface-variant mt-1">
              {project.subtitle[language]}
            </p>
          </div>

          <p className="font-sans text-sm text-on-surface leading-relaxed line-clamp-3">
            {project.summary[language]}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="border border-outline-technical px-2 py-0.5 font-mono text-[11px] text-on-surface-variant uppercase"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="border border-outline-technical px-2 py-0.5 font-mono text-[11px] text-tertiary">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-outline-technical/50">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-tertiary hover:text-white transition-colors uppercase"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.featured.viewDetails}</span>
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-on-surface-variant hover:text-tertiary transition-colors uppercase"
              >
                <span>{t.featured.viewProject}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Image Preview with Browser Frame */}
        <div 
          onClick={() => onSelect(project)}
          className={`col-span-12 md:col-span-4 border border-outline-technical bg-surface flex flex-col group/img overflow-hidden cursor-pointer shadow-lg hover:border-tertiary transition-all duration-300 ${reversed ? "md:order-1" : ""}`}
        >
          {/* Browser Top Bar */}
          <div className="bg-surface-lowest px-3 py-2 border-b border-outline-technical flex items-center justify-between font-mono text-[10px] text-on-surface-muted select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/70"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-500/70"></span>
              <span className="w-2 h-2 rounded-full bg-green-500/70"></span>
            </div>
            <span className="text-[10px] text-on-surface-variant truncate max-w-[150px]">
              {project.liveUrl ? project.liveUrl.replace("https://", "") : project.ref}
            </span>
            <span className="text-[9px] text-tertiary font-bold tracking-wider">LIVE</span>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-lowest">
            <Image
              src={project.image}
              alt={project.title[language]}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute bottom-2 right-2 bg-black/90 border border-outline-technical px-2 py-0.5 font-mono text-[10px] text-tertiary flex items-center gap-1 group-hover:border-tertiary transition-colors">
              <Plus className="w-3 h-3 text-tertiary" />
              <span>INSPECT [ + ]</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
