"use client";

import type React from "react";
import { Code, Server, Brain, Wrench, Monitor, BookOpenCheck } from "lucide-react";

interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used in full-stack and systems development",
    skills: ["C++", "Rust", "Python", "Dart", "TypeScript", "C"],
    icon: "Code",
  },
  {
    category: "Frontend & Mobile Development",
    description: "Building interactive web and mobile apps",
    skills: ["React", "Flutter", "HTML/CSS", "Next.js", "Tailwind CSS"],
    icon: "Monitor",
  },
  {
    category: "Backend Development",
    description: "APIs and scalable backend systems",
    skills: ["Express.js", "Axum", "Flask", "FastAPI", "MongoDB", "PostgreSQL"],
    icon: "Server",
  },
  {
    category: "Machine Learning",
    description: "ML model design and integration",
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    icon: "Brain",
  },
  {
    category: "DevOps & Tools",
    description: "Efficient project workflow and deployment",
    skills: ["Git", "Docker", "Linux", "Vercel", "CI/CD"],
    icon: "Wrench",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5" />,
  Monitor: <Monitor className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Technologies</span>
          </h2>

          <p className="text-sm text-zinc-400 max-w-xl mx-auto">Modern technologies for building exceptional digital experiences</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className={`group relative ${index === skillCategories.length - 1 && skillCategories.length % 2 !== 0 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}
            >
              <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/80 rounded-lg p-5 h-full hover:border-cyan-500/30 transition-colors">
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-cyan-400">{iconMap[category.icon] || <Code className="w-5 h-5" />}</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-zinc-100 mb-1">{category.category}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{category.description}</p>
                  </div>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-zinc-950/60 border border-zinc-800/80 rounded text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-5 bg-gradient-to-r from-zinc-900/50 via-zinc-900/80 to-zinc-900/50 border border-zinc-800/50 rounded-lg backdrop-blur-sm">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpenCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100 mb-0.5">Always Learning</h3>
              <p className="text-xs text-zinc-400">Continuously expanding my skillset with the latest technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}