import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navigation } from "@/components/navigation_and_footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sadit Rasaili - Full Stack Developer",
  description: "Full-stack developer passionate about software development, ML, and building end-to-end projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-text-primary`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
