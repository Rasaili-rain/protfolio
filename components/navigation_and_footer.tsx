"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Code2, Briefcase, BookOpen, Mail, Home, Award, Heart } from "lucide-react";
import { footerInfo, socialLinks } from "@/lib/portfolio-data";

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navIconMap: Record<string, React.ReactNode> = {
  Home : <Home className="w-4 h-4"/>,
  Skills: <Code2 className="w-4 h-4" />,
  Projects: <Briefcase className="w-4 h-4" />,
  Education: <BookOpen className="w-4 h-4" />,
  Certifications: <Award className="w-4 h-4"/>,
  Contact: <Mail className="w-4 h-4" />,
};

export  function Navigation() {
  const navLinks: NavLink[] = [
    { name: "Home", href: "#home", icon: navIconMap["Home"] },
    { name: "Skills", href: "#skills", icon: navIconMap["Skills"] },
    { name: "Projects", href: "#projects", icon: navIconMap["Projects"] },
    { name: "Education", href: "#education", icon: navIconMap["Education"] },
    { name: "Certifications", href: "#certifications", icon: navIconMap["Certifications"] },
    { name: "Contact", href: "#contact", icon: navIconMap["Contact"] },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("skills");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/10 backdrop-blur-md border-b border-border/20 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-bold text-lg text-accent">
            <Code2 className="w-5 h-5" />
            Sadit
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 cursor-pointer group
                  ${activeSection === link.href.replace("#", "")
                    ? "text-accent bg-muted/50"
                    : "text-muted-foreground hover:text-accent hover:bg-muted/30"
                  }`}
              >
                <span>{link.icon}</span>
                {link.name}
              </button>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full px-4 py-2 text-left text-sm font-medium rounded-lg flex items-center gap-2
                  ${activeSection === link.href.replace("#", "")
                    ? "text-accent bg-muted/50"
                    : "text-muted-foreground hover:text-accent hover:bg-muted"
                  }`}
              >
                {link.icon}
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}



export  function Footer() {
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
            <a href="#" className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
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
