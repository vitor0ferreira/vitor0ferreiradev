"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center border border-outline-technical bg-surface p-0.5 text-xs font-mono">
      <button
        onClick={() => setLanguage("pt")}
        className={`px-2.5 py-1 transition-all ${
          language === "pt"
            ? "bg-tertiary text-black font-semibold"
            : "text-on-surface-variant hover:text-white"
        }`}
        title="Português (Brasil)"
      >
        PT-BR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 transition-all ${
          language === "en"
            ? "bg-tertiary text-black font-semibold"
            : "text-on-surface-variant hover:text-white"
        }`}
        title="English (US)"
      >
        EN-US
      </button>
    </div>
  );
}
