"use client";

import { useState, useEffect } from "react";
import { BookOpen, Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Adventure {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

export default function CodingAdventures() {
  const [adventures, setAdventures] = useState<Adventure[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAdventures() {
      try {
        const response = await fetch('/api/adventures');
        if (response.ok) {
          const data = await response.json();
          setAdventures(data);
        }
      } catch (error) {
        console.error('Error loading adventures:', error);
      } finally {
        setLoading(false);
      }
    }

    loadAdventures();
  }, []);

  const recentAdventures = adventures.slice(0, 6);

  return (
    <section id="adventures" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Recent Posts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Coding Adventures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing my learning journey, experiments, and discoveries in the world of web development
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-muted-foreground">Loading adventures...</p>
          </div>
        ) : recentAdventures.length > 0 ? (
          <>
            {/* Adventures Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {recentAdventures.map((adventure) => (
                <Link
                  key={adventure.id}
                  href={`/adventures/${adventure.id}`}
                  className="group block p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
                >
                  {/* Date & Read Time */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{adventure.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{adventure.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 flex items-start justify-between gap-2">
                    <span className="group-hover:text-accent transition-colors">
                      {adventure.title}
                    </span>
                    <ChevronRight className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {adventure.description}
                  </p>

                  {/* Tags */}
                  {adventure.tags && adventure.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {adventure.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>

            {/* Read More Button - Links to first adventure which has sidebar with all posts */}
            {adventures.length > 0 && (
              <div className="text-center mt-10">
                <Link
                  href={`/adventures/${adventures[0].id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  Read Adventures
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No adventures yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}