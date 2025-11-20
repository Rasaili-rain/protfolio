"use client";

import { education } from "@/lib/portfolio-data";
import { GraduationCap, MapPin, CheckCircle } from "lucide-react";



export default function Education() {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-6">
            <GraduationCap className="w-4 h-4" />
            Academic Journey
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Learning</span>
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            My academic foundation and continuous pursuit of knowledge
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-24"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <GraduationCap className="w-7 h-7 text-cyan-400" />
                  </div>

                  {/* Content card */}
                  <div className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-all duration-300" />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-cyan-400 transition-colors">
                            {item.degree}
                          </h3>
                          <p className="text-lg text-zinc-400 mb-1">{item.field}</p>
                          <p className="text-zinc-500 font-medium">{item.school}</p>
                        </div>
                        
                        <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-medium text-cyan-400 whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6 pb-6 border-b border-zinc-800">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        {item.location}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                          Key Achievements
                        </h4>
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-300 leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

