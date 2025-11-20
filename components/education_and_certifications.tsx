// Education Component
"use client";

import { certifications, education } from "@/lib/portfolio-data";
import { Certification } from "@/lib/types";
import { GraduationCap, Calendar, MapPin, Award, Sparkles, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "./image-lightbox";

export function Education() {
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


export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<{ images: string[]; name: string } | null>(null);

  const handleCertClick = (cert: Certification) => {
    if (cert.images && cert.images.length > 0) {
      setSelectedCert({ images: cert.images, name: cert.name });
    }
  };

  const handleCloseLightbox = () => setSelectedCert(null);

  const handleLinkClick = (link: string | undefined, e: React.MouseEvent) => {
    e.stopPropagation();
    if (link) window.open(link, "_blank");
  };

  return (
    <>
      <section id="certifications" className="py-32 relative overflow-hidden bg-zinc-950/50">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 mb-6">
              <Award className="w-4 h-4" />
              Verified Credentials
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Certifications</span>
            </h2>
            
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Industry-recognized certifications that validate my expertise and commitment to continuous learning
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onClick={() => handleCertClick(cert)}
                className={`group relative ${
                  cert.images && cert.images.length > 0 ? "cursor-pointer" : "cursor-default"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-all duration-300" />
                
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-zinc-100 mb-1 group-hover:text-cyan-400 transition-colors leading-snug">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-zinc-400">{cert.issuer}</p>
                    </div>

                    <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-xs font-medium text-zinc-400 whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>

                  {cert.link && (
                    <button
                      onClick={(e) => handleLinkClick(cert.link, e)}
                      className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors mt-4 pt-4 border-t border-zinc-800"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </button>
                  )}

                  {cert.images && cert.images.length > 0 && !cert.link && (
                    <p className="text-xs text-cyan-400/70 mt-4 pt-4 border-t border-zinc-800 flex items-center gap-2">
                      <Sparkles className="w-3 h-3" />
                      Click to view certificate
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedCert && (
        <ImageLightbox
          images={selectedCert.images}
          alt={selectedCert.name}
          isOpen={true}
          onClose={handleCloseLightbox}
        />
      )}
    </>
  );
}