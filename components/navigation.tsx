"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Code2, Briefcase, BookOpen, Mail, Home, Award, Github, Linkedin } from "lucide-react";
import { socialLinks } from "@/lib/portfolio-data";

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

export default function Navigation() {
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
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-bold text-lg text-accent">
            <Code2 className="w-5 h-5" />
            Sadit
          </a>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
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

          {/* Right Side - Social Links */}
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-accent hover:bg-muted/30 rounded-lg transition-all"
                aria-label={link.name}
              >
                {link.icon === "github" && <Github className="w-5 h-5" />}
                {link.icon === "linkedin" && <Linkedin className="w-5 h-5" />}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
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
            
            {/* Social Links in Mobile Menu */}
            <div className="flex items-center gap-2 px-4 pt-2 border-t border-border/20 mt-2">
              {socialLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-muted rounded-lg transition-all flex-1"
                >
                  {link.icon === "github" && <Github className="w-4 h-4" />}
                  {link.icon === "linkedin" && <Linkedin className="w-4 h-4" />}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}