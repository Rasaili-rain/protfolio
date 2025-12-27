"use client";

import { Award, ExternalLink, CheckCircle2} from "lucide-react";
import { useState } from "react";

interface Certification {
  name: string;
  issuer: string;
  year: number;
  images?: string[];
  link?: string;
}

export const certifications: Certification[] = [
  {
    name: "Intro to Programming",
    issuer: "Kaggle",
    year: 2024,
    images: ["certifications/SADIT_RASAILI - Intro to Programming.png"],
  },
  {
    name: "Python",
    issuer: "Kaggle",
    year: 2024,
    images: ["certifications/SADIT_RASAILI - Python.png"],
  },
  {
    name: "Intro To Machine Learning",
    issuer: "Kaggle",
    year: 2025,
    images: ["certifications/SADIT_RASAILI - Intro to Machine Learning.png"],
  },
  {
    name: "Intro To SQL",
    issuer: "Kaggle",
    year: 2025,
    images: ["certifications/SADIT_RASAILI - Intro to SQL.png"],
  },
  {
    name: "React Basic",
    issuer: "Hacker Rank",
    year: 2025,
    images: ["certifications/react-basic.png"],
    link: "https://www.hackerrank.com/certificates/533c4a4aa6aa",
  },
];

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
      <section id="certifications" className="py-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Professional <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Credentials</span>
            </h2>

            <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">Recognized certifications validating my expertise</p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, index) => {
              const hasImages = cert.images && cert.images.length > 0;
              const hasLink = Boolean(cert.link);

              return (
                <div
                  key={index}
                  onClick={() => hasImages && handleCertClick(cert)}
                  className={`group relative ${hasImages ? "cursor-pointer" : ""}`}
                >
                  <div className="relative h-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/80 rounded-lg overflow-hidden hover:border-cyan-500/30 transition-colors">
                    {/* Top accent */}
                    <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50" />

                    <div className="p-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-cyan-400" />
                        </div>

                        <span className="px-2 py-1 bg-zinc-950/60 border border-zinc-800 rounded-md text-xs font-medium text-zinc-400">
                          {cert.year}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="font-semibold text-base text-zinc-100 mb-2 leading-tight line-clamp-2">{cert.name}</h3>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500/70 flex-shrink-0" />
                          <span className="text-zinc-400 truncate">
                            {cert.issuer}
                          </span>
                          {hasLink && (
                            <ExternalLink
                              className="w-3.5 h-3.5 text-cyan-400/60 hover:text-cyan-400 transition-colors cursor-pointer ml-auto flex-shrink-0"
                              onClick={(e) => handleLinkClick(cert.link, e)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple Lightbox */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleCloseLightbox}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={handleCloseLightbox}
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm px-4 py-2 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              Close
            </button>
            <img
              src={selectedCert.images[0]}
              alt={selectedCert.name}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}