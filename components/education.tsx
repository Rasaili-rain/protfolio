"use client";

import { education } from "@/lib/portfolio-data";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { useState } from "react";

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground leading-relaxed">Academic background that shaped my expertise.</p>
        </div>

        {/* Vertical Timeline */}
        <div className="space-y-6">
          <div className="space-y-4">
            {education.map((item, index) => (
              <div key={index} className="flex gap-4 animate-float-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-accent/30 transition-colors">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  {index !== education.length - 1 && <div className="w-0.5 h-16 bg-gradient-to-b from-accent/50 to-transparent mt-2" />}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                  <div className="bg-card/50 border border-border/50 rounded-lg p-4 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 group">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {item.degree} in {item.field}
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.school}</p>
                      </div>
                    </div>

                    {/* Timeline Details */}
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground border-t border-border/30 pt-3 mt-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-accent/60" />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-accent/60" />
                        {item.location}
                      </div>
                    </div>

                    {/* Achievements - Expanded View */}
                    {expandedIndex === index && (
                      <div className="space-y-2 mt-4 pt-4 border-t border-border/30 animate-slide-in-from-bottom">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <Award className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
