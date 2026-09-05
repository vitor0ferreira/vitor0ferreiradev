"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Disc, Database, UserCheck, Terminal } from "lucide-react";

interface MobileHeaderProps {
  onOpenContact: () => void;
}

export function MobileHeader({ onOpenContact }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.index, href: "/", icon: Disc, tag: "00" },
    { label: t.nav.archive, href: "/arquivo", icon: Database, tag: "01" },
    { label: t.nav.profile, href: "/sobre", icon: UserCheck, tag: "02" },
  ];

  return (
    <header className="md:hidden sticky top-0 z-40 bg-surface border-b border-outline-technical px-4 py-3 flex items-center justify-between">
      <Link href="/" className="font-serif text-lg font-bold tracking-tight text-primary uppercase">
        O ARQUIVO DIGITAL
      </Link>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenContact}
          className="p-1.5 border border-tertiary text-tertiary font-mono text-xs hover:bg-tertiary hover:text-black transition-colors"
        >
          <Terminal className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 border border-outline-technical text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Abrir Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-lowest border-b border-outline-technical p-4 shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 border ${
                  isActive
                    ? "border-tertiary bg-surface-high text-tertiary font-medium"
                    : "border-outline-technical text-on-surface-variant hover:text-white hover:bg-surface"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase">{link.label}</span>
                </div>
                <span className="font-mono text-xs text-on-surface-muted">[{link.tag}]</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
