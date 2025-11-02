"use client";

import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "./image-lightbox";
import { certifications } from "@/lib/portfolio-data";
import { Certification } from "@/lib/types";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<{ images: string[]; name: string } | null>(null);

  const handleCertClick = (cert: Certification) => {
    if (cert.images && cert.images.length > 0) {
      setSelectedCert({ images: cert.images, name: cert.name });
    }
  };

  const handleCloseLightbox = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">Professional certifications and credentials that validate my skills and expertise.</p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-card/50 border border-border/50 rounded-lg p-4 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all group animate-float-up ${
                cert.images && cert.images.length > 0 ? "cursor-pointer" : "cursor-default"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => handleCertClick(cert)}
            >
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors">{cert.name}</p>
                    {cert.images && cert.images.length > 0 && <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  {cert.images && cert.images.length > 0 && <p className="text-xs text-accent/70 mt-2">Click to view certificate</p>}
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent whitespace-nowrap">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Lightbox */}
        {selectedCert && <ImageLightbox images={selectedCert.images} alt={selectedCert.name} isOpen={true} onClose={handleCloseLightbox} />}
      </div>
    </section>
  );
}
