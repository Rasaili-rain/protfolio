"use client";
import { useRef } from "react";
import type React from "react";

import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink, Download, Github, Linkedin, Mail } from "lucide-react";
import { heroInfo, socialLinks } from "@/lib/portfolio-data";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleViewWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetInTouch = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = heroInfo.resumeUrl;
    link.download = heroInfo.name + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-accent font-medium text-sm tracking-widest uppercase">Welcome to my portfolio</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {heroInfo.name}
                <span className="block text-accent">{heroInfo.title}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{heroInfo.bio}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-background font-medium cursor-pointer btn-hover-safe" onClick={handleViewWork}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10 text-foreground cursor-pointer btn-hover-safe bg-transparent" onClick={handleGetInTouch}>
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10 text-foreground cursor-pointer btn-hover-safe bg-transparent" onClick={handleDownloadCV}>
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground">Follow me</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-card/50 border border-border/50 hover:bg-accent/10 hover:border-accent/50 hover:text-accent transition-all cursor-pointer text-foreground"
                    aria-label={link.name}
                  >
                    {iconMap[link.icon] || <Mail className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Avatar Card */}
          <div ref={containerRef} className="relative h-96 lg:h-[500px] animate-float-up flex items-center justify-center">
            <div
              className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-border/50 
    flex flex-col items-center justify-center overflow-hidden 
    hover:border-accent/50 transition-all duration-300 shadow-lg shadow-accent/10"
            >
              {/* Centered content */}
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="w-24 h-24 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent">SR</span>
                </div>
                <div>
                  <p className="text-xl font-semibold">{heroInfo.name}</p>
                  <p className="text-sm text-muted-foreground">{heroInfo.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={handleViewWork}>
          <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
        </div>
      </div>
    </section>
  );
}
