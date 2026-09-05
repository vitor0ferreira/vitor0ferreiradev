"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Radio, Database, UserCheck, Terminal, Disc } from "lucide-react";

interface SidebarNavProps {
  onOpenContact: () => void;
}

export function SidebarNav({ onOpenContact }: SidebarNavProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    {
      label: t.nav.index,
      href: "/",
      icon: Disc,
      tag: "00",
    },
    {
      label: t.nav.archive,
      href: "/arquivo",
      icon: Database,
      tag: "01",
    },
    {
      label: t.nav.profile,
      href: "/sobre",
      icon: UserCheck,
      tag: "02",
    },
  ];

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-20 z-40 flex-col justify-between py-6 bg-surface border-r border-outline-technical select-none">
      {/* Top Logo */}
      <div className="flex flex-col items-center gap-8">
        <Link 
          href="/"
          className="group flex flex-col items-center"
          title="Digital Archive Home"
        >
          <div className="w-10 h-10 border border-outline-technical flex items-center justify-center bg-surface-lowest group-hover:border-tertiary transition-colors">
            <span className="font-serif text-sm font-bold text-primary group-hover:text-tertiary">
              A.V1
            </span>
          </div>
        </Link>

        {/* Navigation items */}
        <nav className="flex flex-col w-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center py-6 w-full group transition-all relative ${
                  isActive
                    ? "text-tertiary bg-surface-high border-l-2 border-tertiary"
                    : "text-on-surface-variant hover:bg-surface-high hover:text-white border-l-2 border-transparent"
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 transition-transform duration-200 group-hover:scale-110 ${isActive ? "text-tertiary" : ""}`} />
                <span className="font-mono text-[10px] uppercase tracking-wider writing-vertical">
                  {link.label}
                </span>
                <span className="absolute top-2 right-2 font-mono text-[8px] text-on-surface-muted opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.tag}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom status & contact trigger */}
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={onOpenContact}
          className="flex flex-col items-center justify-center p-3 text-on-surface-variant hover:text-tertiary hover:bg-surface-high border border-transparent hover:border-outline-technical transition-all"
          title="Terminal de Contato"
        >
          <Terminal className="w-5 h-5" />
          <span className="sr-only">Contato</span>
        </button>

        {/* GPS Coordinates tag */}
        <div className="font-mono text-[9px] text-on-surface-muted writing-vertical tracking-widest">
          19.7472° S // MG
        </div>
      </div>
    </aside>
  );
}
