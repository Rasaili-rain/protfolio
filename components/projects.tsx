"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { projects as allProjects } from "@/lib/portfolio-data";
import ImageLightbox from "./image-lightbox";

const getTechColor = (tech: string): string => {
  const colors: Record<string, string> = {
    "Next.js": "bg-foreground/10 text-foreground border-foreground/20",
    React: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    TypeScript: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    PostgreSQL: "bg-blue-600/20 text-blue-400 border-blue-600/30",
    "Tailwind CSS": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    Stripe: "bg-indigo-600/20 text-indigo-400 border-indigo-600/30",
    Python: "bg-green-700/20 text-green-400 border-green-700/30",
    TensorFlow: "bg-orange-600/20 text-orange-400 border-orange-600/30",
    "Node.js": "bg-green-600/20 text-green-400 border-green-600/30",
    MongoDB: "bg-green-500/20 text-green-400 border-green-500/30",
    "Socket.io": "bg-gray-600/20 text-gray-300 border-gray-600/30",
    "REST APIs": "bg-purple-600/20 text-purple-400 border-purple-600/30",
    Docker: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    AWS: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "D3.js": "bg-orange-700/20 text-orange-400 border-orange-700/30",
    Recharts: "bg-blue-700/20 text-blue-400 border-blue-700/30",
    "API Integration": "bg-gray-600/20 text-gray-300 border-gray-600/30",
    Vercel: "bg-foreground/10 text-foreground border-foreground/20",
  };
  return colors[tech] || "bg-accent/10 text-accent border-accent/20";
};

export default function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const [expandedImageIndex, setExpandedImageIndex] = useState(0);
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices((prev) => {
        const updated = { ...prev };
        for (const project of allProjects) {
          const projectImages = Array.isArray(project.images) ? project.images : [];
          if (projectImages.length > 1) {
            updated[project.id] = ((prev[project.id] || 0) + 1) % projectImages.length;
          }
        }
        return updated;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const featured = allProjects.filter((p) => p.featured);
  const other = allProjects.filter((p) => !p.featured);

  const handlePrevImage = (projectId: number, imageCount: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) === 0 ? imageCount - 1 : (prev[projectId] || 0) - 1,
    }));
  };

  const handleNextImage = (projectId: number, imageCount: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imageCount,
    }));
  };

  const getProjectImages = (project: (typeof allProjects)[0]): string[] => {
    return Array.isArray(project.images) ? project.images : [];
  };

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">Selection of my most impactful work showcasing full-stack development and problem-solving.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featured.map((project, index) => {
              const projectImages = getProjectImages(project);
              const currentIdx = currentImageIndices[project.id] || 0;
              return (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 flex flex-col animate-float-up cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 bg-muted overflow-hidden group/image">
                    <img
                      src={projectImages[currentIdx] || "/placeholder.svg"}
                      alt={`${project.title} - Image ${currentIdx + 1}`}
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => {
                        setExpandedProjectId(project.id);
                        setExpandedImageIndex(currentIdx);
                      }}
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 flex items-center justify-center transition-colors duration-300 cursor-pointer pointer-events-none">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                    </div>

                    {projectImages.length > 1 && (
                      <button
                        onClick={() => handlePrevImage(project.id, projectImages.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 rounded-lg transition-colors opacity-0 group-hover/image:opacity-100 cursor-pointer z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                    )}

                    {projectImages.length > 1 && (
                      <button
                        onClick={() => handleNextImage(project.id, projectImages.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 rounded-lg transition-colors opacity-0 group-hover/image:opacity-100 cursor-pointer z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    )}

                    {projectImages.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/50 rounded-full text-xs text-white opacity-0 group-hover/image:opacity-100 transition-opacity">
                        {currentIdx + 1} / {projectImages.length}
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className={`px-2.5 py-1 text-xs font-medium rounded-full border transition-all ${getTechColor(tech)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border/30">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" className="gap-2 w-full bg-accent hover:bg-accent/90 text-background cursor-pointer btn-hover-safe">
                            <ExternalLink className="w-4 h-4" />
                            View
                          </Button>
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={project.link ? "flex-1" : "w-full"}>
                          <Button size="sm" className="gap-2 w-full bg-transparent border border-accent/50 text-accent hover:bg-accent/10 cursor-pointer btn-hover-safe justify-center">
                            <Github className="w-4 h-4" />
                            Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {other.map((project, index) => {
                return (
                  <Card
                    key={project.id}
                    className="group hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 cursor-default flex flex-col animate-float-up"
                    style={{ animationDelay: `${(index + 2) * 0.08}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className={`px-2 py-1 text-xs font-medium rounded-full border transition-all ${getTechColor(tech)}`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2 flex-wrap border-t border-border/30">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 cursor-pointer transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 cursor-pointer transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ImageLightbox
        images={expandedProjectId ? getProjectImages(allProjects.find((p) => p.id === expandedProjectId)!) : []}
        alt="Project image"
        isOpen={expandedProjectId !== null}
        onClose={() => setExpandedProjectId(null)}
        initialIndex={expandedImageIndex}
      />
    </>
  );
}
