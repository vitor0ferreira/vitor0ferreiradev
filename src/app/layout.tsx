import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AppShell } from "@/components/layout/AppShell";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitor Hugo Ferreira da Silva // The Digital Archive",
  description:
    "Desenvolvedor Full-Stack especializado em TypeScript, Next.js, React, WebSockets e Deep Learning. Portfólio de engenharia e arquivo técnico.",
  keywords: [
    "Vitor Hugo Ferreira da Silva",
    "Desenvolvedor Full-Stack",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Deep Learning",
    "IFTM Uberaba",
  ],
  authors: [{ name: "Vitor Hugo Ferreira da Silva" }],
  creator: "Vitor Hugo Ferreira da Silva",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Vitor Hugo Ferreira // The Digital Archive",
    description:
      "Desenvolvedor Full-Stack e arquiteto de software. Conheça projetos em Deep Learning, WebSockets e Next.js.",
    siteName: "The Digital Archive",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${ibmPlexSerif.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-background text-on-surface antialiased min-h-screen selection:bg-tertiary selection:text-black">
        <LanguageProvider>
          <AppShell>{children}</AppShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
