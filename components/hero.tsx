"use client";
import { useRef, useEffect, useState } from "react";
import type React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { heroInfo, socialLinks } from "@/lib/portfolio-data";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

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
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-sm backdrop-blur-sm">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </div>
              <span className="text-zinc-400">Open to opportunities</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-zinc-100 mb-2">Hey, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  {heroInfo.name}
                </span>
              </h1>

              <div className="space-y-3">
                <p className="text-2xl font-semibold text-zinc-300">{heroInfo.title}</p>
                <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">{heroInfo.bio}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleViewWork}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-full font-medium transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8">
              <span className="text-sm text-zinc-500 font-medium">Connect with me</span>
              <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent max-w-[100px]" />
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all hover:scale-110"
                    aria-label={link.name}
                  >
                    {iconMap[link.icon] || <Mail className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main card with mouse tracking effect */}
              <div
                className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl overflow-hidden group"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.05), transparent 40%)`,
                }}
              >
                {/* Accent border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                
                <div className="relative z-10 space-y-8">
                  {/* Profile section */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                        {heroInfo.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-zinc-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100">{heroInfo.name}</h3>
                      <p className="text-sm text-zinc-400">{heroInfo.subtitle}</p>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-all group/stat">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                        {socialLinks.filter(l => l.icon === 'github')[0] ? '20+' : '15+'}
                      </div>
                      <div className="text-sm text-zinc-400">Projects Built</div>
                    </div>
                    
                    <div className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5 hover:border-blue-500/50 transition-all group/stat">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-1">
                        3+
                      </div>
                      <div className="text-sm text-zinc-400">Years Coding</div>
                    </div>

                    <div className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5 hover:border-purple-500/50 transition-all col-span-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-zinc-100 mb-1">Full-Stack Developer</div>
                          <div className="text-sm text-zinc-400">ML Enthusiast • Problem Solver</div>
                        </div>
                        <Sparkles className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  {/* Tech stack preview */}
                  <div className="space-y-3">
                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Python', 'Rust', 'TypeScript', 'Flutter'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-zinc-950/50 border border-zinc-800 rounded-full text-xs text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}