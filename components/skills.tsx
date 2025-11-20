"use client";

import type React from "react";
import { Code, Server, Brain, Zap, Database, Wrench, Monitor, Lightbulb, BookOpenCheck} from "lucide-react";
import { skillCategories } from "@/lib/portfolio-data";

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-400 mb-6">
            <Lightbulb className="w-4 h-4" />
            My Expertise
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Technologies</span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">A comprehensive toolkit of modern technologies I use to build exceptional digital experiences</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={category.category} className="flex-shrink-0 w-full sm:w-[calc(65%)] md:w-[calc(45%)] lg:w-[calc(30%)]">
              <div className="group relative h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

                <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full min-h-[400px] flex flex-col group-hover:transform group-hover:-translate-y-1">
                  {/* Icon and Title */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-500/40 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{iconMap[category.icon] || <Code className="w-6 h-6" />}</div>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">{category.category}</h3>

                    <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors h-[4.5rem] flex items-center">{category.description}</p>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mt-auto pt-4 border-t border-zinc-800/50">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-zinc-950/50 border border-zinc-800 rounded-lg text-xs text-zinc-400 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-zinc-900/50 hover:scale-105 transition-all cursor-default font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center">
              <BookOpenCheck className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Always Learning</h3>
              <p className="text-zinc-400 max-w-md">Continuously expanding my skillset and staying updated with the latest technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
