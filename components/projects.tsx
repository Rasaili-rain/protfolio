"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Github, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";
import ImageLightbox from "./image-lightbox";
import { Project } from "@/lib/types";


export const projects: Project[] = [
  {
    id: 1,
    title: "ImGrep",
    description: "AI-powered image search engine",
    longDescription: "Full-stack image search engine with a Python backend, Flutter frontend, and a custom ML model for visual similarity recognition. Enables searching by image instead of text.",
    technologies: ["Python", "Flutter", "Machine Learning", "FastAPI"],
    images: ["imgrep/1.png", "imgrep/2.png", "imgrep/3.png", "imgrep/4.png", "imgrep/5.png"],
    github: "https://github.com/Rasaili-rain/imgrep",
    featured: true,
  },
  {
    id: 2,
    title: "Lobic",
    description: "Real-time music streaming and chat platform",
    longDescription: "Music streaming and chat app that uses WebSockets for real-time interaction, allowing synchronized listening in lobbies. Built for performance and safety using Rust.",
    technologies: ["Rust", "WebSockets", "TypeScript", "React"],
    images: ["lobic/1.png", "lobic/2.jpeg", "lobic/3.jpeg"],
    github: "https://github.com/Rasaili-rain/lobic",
    featured: true,
  },
  {
    id: 3,
    title: "KUvent",
    description: "Event management platform for university clubs",
    longDescription: "Social platform designed to help university clubs list upcoming events, manage registrations, and notify students in real time.",
    technologies: ["C++", "Qt", "httplib"],
    images: [],
    github: "https://github.com/Rasaili-rain/kuvent",
    featured: false,
  },
  {
    id: 4,
    title: "Hajir_F",
    description: "Student attendance tracking app",
    longDescription: "A Flutter-based mobile app that simplifies classroom attendance tracking for students and teachers.",
    technologies: ["Dart", "Flutter", "Firebase"],
    images: [],
    github: "https://github.com/Rasaili-rain/hajir_f",
    featured: false,
  },
  {
    id: 5,
    title: "Dodgers (Hackathon Project)",
    description: "Video calling platform using WebRTC",
    longDescription: "Hackathon-built real-time video calling app supporting peer-to-peer communication with an Express + MongoDB backend and React frontend.",
    technologies: ["WebRTC", "Express.js", "MongoDB", "React"],
    images: [],
    github: "https://github.com/Rasaili-rain/dodgers",
    featured: false,
  },
];

export default function Projects() {
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

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
            </h2>

            <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">A selection of my best work showcasing full-stack development, machine learning, and innovative solutions</p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {featured.map((project, index) => {
              const projectImages = getProjectImages(project);
              const currentIdx = currentImageIndices[project.id] || 0;
              const hasImages = projectImages.length > 0;

              return (
                <div key={project.id} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "both" }}>
                  {/* Hover glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700" />

                  <div className="relative h-full bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 flex flex-col">
                    {/* Project Image - Fixed aspect ratio */}
                    {hasImages && (
                      <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden group/image cursor-pointer flex-shrink-0">
                        <img
                          src={projectImages[currentIdx]}
                          alt={`${project.title} - Image ${currentIdx + 1}`}
                          className="w-full h-full object-contain scale-140 group-hover:scale-130s transition-transform duration-700 ease-out"
                          onClick={() => {
                            setExpandedProjectId(project.id);
                            setExpandedImageIndex(currentIdx);
                          }}
                        />

                        {/* Image navigation */}
                        {projectImages.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrevImage(project.id, projectImages.length);
                              }}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-zinc-950/90 hover:bg-cyan-500/90 border border-zinc-800 hover:border-cyan-500 rounded-full transition-all duration-300 opacity-0 group-hover/image:opacity-100 hover:scale-110 z-10 backdrop-blur-sm"
                            >
                              <ChevronLeft className="w-5 h-5 text-white" />
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNextImage(project.id, projectImages.length);
                              }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-zinc-950/90 hover:bg-cyan-500/90 border border-zinc-800 hover:border-cyan-500 rounded-full transition-all duration-300 opacity-0 group-hover/image:opacity-100 hover:scale-110 z-10 backdrop-blur-sm"
                            >
                              <ChevronRight className="w-5 h-5 text-white" />
                            </button>

                            {/* Image dots indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                              {projectImages.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndices((prev) => ({ ...prev, [project.id]: idx }));
                                  }}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIdx ? "bg-cyan-400 w-8" : "bg-zinc-600 hover:bg-zinc-400"}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* Project Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-start justify-between mb-4 gap-3">
                        <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-400 whitespace-nowrap flex-shrink-0 animate-pulse-subtle">
                          Featured
                        </span>
                      </div>

                      <p className="text-zinc-400 mb-6 leading-relaxed line-clamp-3">{project.longDescription}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-105 transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: "both" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-6 border-t border-zinc-800 mt-auto">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center gap-2 group/btn">
                              <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                              Live Demo
                            </button>
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className={project.link ? "flex-1" : "w-full"}>
                            <button className="w-full px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-cyan-500/50 hover:bg-zinc-900 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center gap-2 group/btn">
                              <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
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
                {other.map((project, index) => {
                  const projectImages = getProjectImages(project);
                  const currentIdx = currentImageIndices[project.id] || 0;
                  const hasImages = projectImages.length > 0;

                  return (
                    <div
                      key={project.id}
                      className="group h-full bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col animate-fade-in-up hover:-translate-y-1"
                      style={{ animationDelay: `${(index + 2) * 0.1}s`, animationFillMode: "both" }}
                    >
                      {/* Project Image for other projects */}
                      {hasImages && (
                        <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden group/image cursor-pointer flex-shrink-0">
                          <img
                            src={projectImages[currentIdx]}
                            alt={`${project.title} - Image ${currentIdx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            onClick={() => {
                              setExpandedProjectId(project.id);
                              setExpandedImageIndex(currentIdx);
                            }}
                          />

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

                          {/* Zoom icon */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-cyan-500/95 rounded-full flex items-center justify-center backdrop-blur-sm transform scale-90 group-hover/image:scale-100 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                          </div>

                          {/* Image navigation for other projects */}
                          {projectImages.length > 1 && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePrevImage(project.id, projectImages.length);
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-zinc-950/90 hover:bg-cyan-500/90 border border-zinc-800 hover:border-cyan-500 rounded-full transition-all duration-300 opacity-0 group-hover/image:opacity-100 hover:scale-110 z-10 backdrop-blur-sm"
                              >
                                <ChevronLeft className="w-4 h-4 text-white" />
                              </button>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNextImage(project.id, projectImages.length);
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-zinc-950/90 hover:bg-cyan-500/90 border border-zinc-800 hover:border-cyan-500 rounded-full transition-all duration-300 opacity-0 group-hover/image:opacity-100 hover:scale-110 z-10 backdrop-blur-sm"
                              >
                                <ChevronRight className="w-4 h-4 text-white" />
                              </button>

                              {/* Image dots indicator */}
                              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                {projectImages.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCurrentImageIndices((prev) => ({ ...prev, [project.id]: idx }));
                                    }}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIdx ? "bg-cyan-400 w-6" : "bg-zinc-600 hover:bg-zinc-400"}`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-lg font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h4>

                        <p className="text-sm text-zinc-400 mb-4 leading-relaxed line-clamp-3 flex-grow">{project.longDescription}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-400 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-105 transition-all duration-300 animate-fade-in"
                              style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: "both" }}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-500">+{project.technologies.length - 4}</span>
                          )}
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-zinc-800">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-all duration-300 hover:gap-2 group/link"
                            >
                              <ExternalLink className="w-4 h-4 group-hover/link:rotate-45 transition-transform duration-300" />
                              Demo
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-all duration-300 hover:gap-2 group/link"
                            >
                              <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
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
