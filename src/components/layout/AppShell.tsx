"use client";

import React, { useState } from "react";
import { SidebarNav } from "./SidebarNav";
import { MobileHeader } from "./MobileHeader";
import { TelemetryBar } from "./TelemetryBar";
import { Footer } from "./Footer";
import { ContactModal } from "@/components/ui/ContactModal";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-blueprint-grid">
      {/* Mobile Top Header */}
      <MobileHeader onOpenContact={() => setIsContactOpen(true)} />

      {/* Desktop Vertical Sidebar */}
      <SidebarNav onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Canvas (offset by sidebar width on desktop) */}
      <div className="flex flex-1 flex-col md:ml-20">
        {/* Top Telemetry Header Bar */}
        <TelemetryBar onOpenContact={() => setIsContactOpen(true)} />

        {/* Dynamic Page Content */}
        <main className="flex-1 w-full">{children}</main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
