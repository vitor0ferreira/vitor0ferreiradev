"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, Github, Linkedin, Copy, Check, FileText, X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-surface border border-outline-technical p-6 md:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start border-b border-outline-technical pb-4 mb-6">
          <div>
            <span className="font-mono text-xs text-tertiary block mb-1">
              // TERMINAL_CONNECT
            </span>
            <h2 className="font-serif text-2xl text-primary uppercase">
              {t.contactModal.title}
            </h2>
            <p className="font-sans text-xs text-on-surface-variant mt-1">
              {t.contactModal.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-on-surface-variant hover:text-tertiary hover:bg-surface-high border border-outline-technical transition-colors"
            title={t.contactModal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contact list */}
        <div className="space-y-4">
          {/* Email */}
          <div className="border border-outline-technical p-4 bg-surface-lowest flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-tertiary transition-colors">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-tertiary flex-shrink-0" />
              <div>
                <span className="font-mono text-[10px] text-on-surface-variant uppercase block">
                  {t.contactModal.emailLabel}
                </span>
                <span className="font-mono text-sm text-primary">
                  {t.contactModal.emailValue}
                </span>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(t.contactModal.emailValue, "email")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-outline-technical font-mono text-xs text-on-surface-variant hover:text-black hover:bg-tertiary transition-colors self-start sm:self-auto"
            >
              {copiedItem === "email" ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>COPIADO</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPIAR</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp / Phone */}
          <div className="border border-outline-technical p-4 bg-surface-lowest flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-tertiary transition-colors">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-tertiary flex-shrink-0" />
              <div>
                <span className="font-mono text-[10px] text-on-surface-variant uppercase block">
                  {t.contactModal.phoneLabel}
                </span>
                <span className="font-mono text-sm text-primary">
                  {t.contactModal.phoneValue}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(t.contactModal.phoneValue, "phone")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-outline-technical font-mono text-xs text-on-surface-variant hover:text-black hover:bg-tertiary transition-colors"
              >
                {copiedItem === "phone" ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>COPIADO</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPIAR</span>
                  </>
                )}
              </button>
              <a
                href="https://wa.me/5534993144741"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 border border-tertiary bg-tertiary/10 font-mono text-xs text-tertiary hover:bg-tertiary hover:text-black transition-colors"
              >
                WHATSAPP ↗
              </a>
            </div>
          </div>

          {/* Links: GitHub & LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://github.com/vitor0ferreira"
              target="_blank"
              rel="noreferrer"
              className="border border-outline-technical p-3.5 bg-surface-lowest flex items-center justify-between hover:border-tertiary transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-tertiary" />
                <span className="font-mono text-xs text-primary group-hover:text-tertiary">
                  github.com/vitor0ferreira
                </span>
              </div>
              <span className="font-mono text-xs text-on-surface-variant">↗</span>
            </a>

            <a
              href="https://linkedin.com/in/vitor0ferreira"
              target="_blank"
              rel="noreferrer"
              className="border border-outline-technical p-3.5 bg-surface-lowest flex items-center justify-between hover:border-tertiary transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-tertiary" />
                <span className="font-mono text-xs text-primary group-hover:text-tertiary">
                  linkedin/vitor0ferreira
                </span>
              </div>
              <span className="font-mono text-xs text-on-surface-variant">↗</span>
            </a>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-outline-technical flex flex-col sm:flex-row justify-between items-center gap-4">
          <a
            href="/curriculo_vitor_hugo_ferreira.pdf"
            download="Curriculo_Vitor_Hugo_Ferreira.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-black font-mono text-xs font-semibold hover:bg-tertiary transition-colors uppercase"
          >
            <FileText className="w-4 h-4" />
            {t.contactModal.downloadCV}
          </a>
          <span className="font-mono text-[11px] text-on-surface-variant">
            {t.contactModal.close}
          </span>
        </div>
      </div>
    </div>
  );
}
