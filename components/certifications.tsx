"use client";

import { certifications } from "@/lib/portfolio-data";
import { Certification } from "@/lib/types";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "./image-lightbox";

// Add keyframe animations
const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out;
  }

  .animate-fade-in {
    animation: fade-in 0.4s ease-out;
  }

  .animate-scale-in {
    animation: scale-in 0.5s ease-out;
  }

  .animate-shimmer {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(6, 182, 212, 0.1),
      transparent
    );
    background-size: 1000px 100%;
    animation: shimmer 3s infinite;
  }
`;

export default function Certifications() {
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
      <style>{styles}</style>
      <section id="certifications" className="py-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 mb-6 animate-scale-in">
              <Award className="w-4 h-4" />
              Verified Credentials
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Certifications</span>
            </h2>

            <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">Industry-recognized certifications that validate my expertise and commitment to continuous learning</p>
          </div>

          {/* Certifications Grid */}
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6">
            {certifications.map((cert, index) => {
              const hasImages = cert.images && cert.images.length > 0;
              const hasLink = Boolean(cert.link);
              const isInteractive = hasImages || hasLink;

              return (
                <div
                  key={index}
                  onClick={() => hasImages && handleCertClick(cert)}
                  className={`group relative w-64 h-56 animate-fade-in-up ${hasImages ? "cursor-pointer" : "cursor-default"}`}
                  style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "both" }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

                  <div className="relative h-full bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col">
                    {/* Top accent line */}
                    <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="p-6 flex flex-col flex-grow">
                      {/* Header with icon and year */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-cyan-500/10">
                          <Award className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                        </div>

                        <span className="px-3 py-1.5 bg-zinc-950/80 border border-zinc-800 rounded-full text-xs font-semibold text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 whitespace-nowrap transition-all duration-300">
                          {cert.year}
                        </span>
                      </div>

                      {/* Certificate name and issuer */}
                      <div className="flex-grow mb-4">
                        <h3 className="font-bold text-lg text-zinc-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">{cert.name}</h3>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500/70 flex-shrink-0" />
                          <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors flex items-center gap-1">
                            {cert.issuer}
                            {hasLink && <ExternalLink className="w-4 h-4 text-cyan-400/60 hover:text-cyan-400 transition-colors cursor-pointer" onClick={(e) => handleLinkClick(cert.link, e)} />}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Shimmer effect on hover */}
                    {isInteractive && <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-shimmer" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedCert && <ImageLightbox images={selectedCert.images} alt={selectedCert.name} isOpen={true} onClose={handleCloseLightbox} />}
    </>
  );
} 