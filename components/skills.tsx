"use client";

import type React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skillCategories } from "@/lib/portfolio-data";
import { Code, Server, Brain, Zap, Database, Wrench } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Technologies and tools I've mastered throughout my development
            journey.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.category}
              className="group hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:border-accent/50 bg-card/50 border-border/50 backdrop-blur-sm animate-float-up cursor-default"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {category.category}
                    </CardTitle>
                    <CardDescription className="text-xs mt-1">
                      {category.description}
                    </CardDescription>
                  </div>
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors shrink-0">
                    {iconMap[category.icon] || <Code className="w-5 h-5" />}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all cursor-default font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
