"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-outline-technical bg-surface-lowest py-10 px-4 md:px-margin-desktop text-xs font-mono text-on-surface-variant">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="text-primary font-serif text-sm tracking-wider uppercase mb-1">
            {t.footer.copyright}
          </div>
          <div className="text-[11px] text-on-surface-muted max-w-xl">
            {t.footer.rights}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://github.com/vitor0ferreira"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-tertiary transition-colors uppercase"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>
          <a
            href="https://linkedin.com/in/vitor0ferreira"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-tertiary transition-colors uppercase"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LINKEDIN</span>
          </a>
          <a
            href="mailto:vitor_hugo.f.s@hotmail.com"
            className="flex items-center gap-1.5 hover:text-tertiary transition-colors uppercase"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>EMAIL</span>
          </a>
          <span className="border border-outline-technical px-2 py-0.5 text-[10px] text-tertiary">
            {t.footer.systemLog}
          </span>
        </div>
      </div>
    </footer>
  );
}
