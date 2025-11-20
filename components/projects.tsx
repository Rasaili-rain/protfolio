"use client";

import { Sparkles, ChevronLeft, ChevronRight, ExternalLink, Github, ZoomIn } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { useState, useEffect } from "react";
import ImageLightbox from "./image-lightbox";


export function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const [expandedImageIndex, setExpandedImageIndex] = useState(0);
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices((prev) => {
        const updated = { ...prev };
        for (const project of projects) {
          const projectImages = Array.isArray(project.images) ? project.images : [];
          if (projectImages.length > 1) {
            updated[project.id] = ((prev[project.id] || 0) + 1) % projectImages.length;
          }
        }
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

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

  const getProjectImages = (project: (typeof projects)[0]): string[] => {
    return Array.isArray(project.images) ? project.images : [];
  };

  return (
    <>
      <section id="projects" className="py-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-6">
              <Sparkles className="w-4 h-4" />
              Portfolio Showcase
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              A selection of my best work showcasing full-stack development, machine learning, and innovative solutions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {featured.map((project, index) => {
              const projectImages = getProjectImages(project);
              const currentIdx = currentImageIndices[project.id] || 0;
              const hasImages = projectImages.length > 0;

              return (
                <div
                  key={project.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500" />
                  
                  <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                    {/* Project Image */}
                    {hasImages && (
                      <div className="relative h-64 bg-zinc-900 overflow-hidden group/image">
                        <img
                          src={projectImages[currentIdx]}
                          alt={`${project.title} - Image ${currentIdx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onClick={() => {
                            setExpandedProjectId(project.id);
                            setExpandedImageIndex(currentIdx);
                          }}
                        />
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        
                        {/* Zoom icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-cyan-500/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <ZoomIn className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Image navigation */}
                        {projectImages.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrevImage(project.id, projectImages.length);
                              }}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 rounded-full transition-all opacity-0 group-hover/image:opacity-100 z-10"
                            >
                              <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNextImage(project.id, projectImages.length);
                              }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 rounded-full transition-all opacity-0 group-hover/image:opacity-100 z-10"
                            >
                              <ChevronRight className="w-5 h-5 text-white" />
                            </button>

                            {/* Image counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 rounded-full text-sm text-white opacity-0 group-hover/image:opacity-100 transition-opacity">
                              {currentIdx + 1} / {projectImages.length}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* Project Content */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-400">
                          Featured
                        </span>
                      </div>

                      <p className="text-zinc-400 mb-4 leading-relaxed">{project.longDescription}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-6 border-t border-zinc-800">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-105 flex items-center justify-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </button>
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className={project.link ? "flex-1" : "w-full"}>
                            <button className="w-full px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-zinc-700 hover:bg-zinc-900 transition-all flex items-center justify-center gap-2">
                              <Github className="w-4 h-4" />
                              View Code
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Other Projects */}
          {other.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-zinc-100">More Projects</h3>
                <div className="h-px flex-1 ml-6 bg-gradient-to-r from-zinc-800 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {other.map((project, index) => (
                  <div
                    key={project.id}
                    className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                    style={{ animationDelay: `${(index + 2) * 0.08}s` }}
                  >
                    <h4 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{project.longDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-zinc-800">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ImageLightbox
        images={expandedProjectId ? getProjectImages(projects.find((p) => p.id === expandedProjectId)!) : []}
        alt="Project image"
        isOpen={expandedProjectId !== null}
        onClose={() => setExpandedProjectId(null)}
        initialIndex={expandedImageIndex}
      />
    </>
  );
}