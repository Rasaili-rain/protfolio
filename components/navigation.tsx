"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Home, Code2, Briefcase, BookOpen, Mail, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Code2 className="w-4 h-4" /> },
  {
    name: "Projects",
    href: "#projects",
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    name: "Education",
    href: "#education",
    icon: <BookOpen className="w-4 h-4" />,
  },
  { name: "Blog", href: "#blog", icon: <PenTool className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-bold text-lg text-accent hover:opacity-80 transition-opacity">
            <Code2 className="w-5 h-5" />
            Sadit
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-muted/50 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer group"
              >
                <span className="group-hover:text-accent transition-colors">{link.icon}</span>
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button onClick={() => handleNavClick("#contact")} className="bg-accent hover:bg-accent/90 text-background font-medium cursor-pointer btn-hover-safe">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-muted rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                {link.icon}
                {link.name}
              </button>
            ))}
            <div className="pt-2">
              <Button onClick={() => handleNavClick("#contact")} className="w-full bg-accent hover:bg-accent/90 text-background cursor-pointer">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
