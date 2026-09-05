"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Radio, Terminal } from "lucide-react";

interface TelemetryBarProps {
  onOpenContact: () => void;
}

export function TelemetryBar({ onOpenContact }: TelemetryBarProps) {
  const { t } = useLanguage();
  const [time, setTime] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    // Clock
    const updateTime = () => {
      const now = new Date();
      setTime(now.toTimeString().split(" ")[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Scroll tracker
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, Math.round(currentProgress))));
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-surface-lowest/95 backdrop-blur border-b border-outline-technical px-4 md:px-8 py-2.5 flex items-center justify-between font-mono text-xs text-on-surface-variant select-none">
      {/* Left info: Status & Coordinates */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
          </span>
          <span className="text-primary font-semibold hidden sm:inline">
            {t.telemetry.protocolVersion}
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-[11px] text-on-surface-variant/80 border-l border-outline-technical pl-4">
          <Radio className="w-3.5 h-3.5 text-tertiary" />
          <span>{t.telemetry.coordinates}</span>
          <span className="text-on-surface-muted">[ {t.telemetry.location} ]</span>
        </div>
      </div>

      {/* Right info: Live Time, Scroll %, Language, Contact */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Live System Time */}
        <div className="hidden sm:flex items-center gap-1.5 text-on-surface text-[11px]">
          <span className="text-tertiary">{t.telemetry.systemTime}():</span>
          <span className="text-primary">{time || "--:--:--"}</span>
        </div>

        {/* Scroll Progress */}
        <div className="hidden md:flex items-center gap-1 text-[11px]">
          <span className="text-on-surface-muted">{t.telemetry.scrolled}:</span>
          <span className="text-tertiary font-mono">{scrollProgress}%</span>
        </div>

        {/* Language Switcher */}
        <LanguageToggle />

        {/* Quick Contact Trigger */}
        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-tertiary/60 bg-tertiary/10 text-tertiary hover:bg-tertiary hover:text-black transition-colors font-mono text-xs uppercase"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">CONTATO</span>
        </button>
      </div>
    </header>
  );
}
