"use client";

import { Heart } from "lucide-react";
import { footerInfo, socialLinks } from "@/lib/portfolio-data";

export default function Footer() {
  const socialIcons: Record<string, string> = {
    github: "GitHub",
    linkedin: "LinkedIn",
    mail: "Email",
  };

  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {footerInfo.name}
            </a>
            <p className="text-sm text-muted-foreground mt-2">{footerInfo.tagline}</p>
          </div>

          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {socialIcons[link.icon] || link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="my-8 border-t border-border/50" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {footerInfo.year} Sadit Rasaili. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-accent fill-accent" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
