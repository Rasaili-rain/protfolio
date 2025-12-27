"use client";

import { GraduationCap, MapPin, Calendar } from "lucide-react";

interface EducationItem {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  achievements: string[];
}

export const education: EducationItem[] = [
  {
    school: "Kathmandu University",
    degree: "Bachelor in Computer Engineering",
    field: "Computer Engineering",
    period: "2023 - ...",
    location: "Dhulikhel, Kavre, Nepal",
    achievements: ["Active in software development and applied ML projects", "Developed multiple full-stack and mobile apps"],
  },
  {
    school: "Khwopa HSS",
    degree: "+2 Science",
    field: "Science (Physics, Chemistry, Mathematics, Computer)",
    period: "2021 - 2022",
    location: "Dekocha, Bhaktapur",
    achievements: ["Graduated with A+"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
          <div className="text-center mb-20">

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Education</span>
            </h2>

            <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">My Academic Educations so far</p>
          </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-4">
            {education.map((item, index) => (
              <div key={index} className="relative md:pl-14">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-3 w-10 h-10 bg-zinc-900 border-2 border-cyan-500/50 rounded-lg items-center justify-center z-10">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Content card */}
                <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-4 hover:border-zinc-700 transition-colors">
                  {/* Mobile icon + title */}
                  <div className="flex items-start gap-3 mb-3 md:hidden">
                    <div className="w-8 h-8 bg-zinc-900 border border-cyan-500/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-zinc-100 leading-tight">
                        {item.degree}
                      </h3>
                    </div>
                  </div>

                  {/* Desktop title */}
                  <h3 className="hidden md:block text-lg font-semibold text-zinc-100 mb-2">
                    {item.degree}
                  </h3>

                  {/* Info grid */}
                  <div className="space-y-1.5 mb-3 text-sm">
                    <p className="text-zinc-400">{item.field}</p>
                    <p className="text-zinc-500">{item.school}</p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 pt-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-cyan-400/70" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-cyan-400/70" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  {item.achievements.length > 0 && (
                    <div className="pt-3 border-t border-zinc-800/50">
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs text-zinc-400 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-cyan-400/70">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}