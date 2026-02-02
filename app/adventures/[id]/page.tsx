"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Menu, X, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from 'next-mdx-remote';
import { useMDXComponents } from "@/mdx-components";

interface Adventure {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface AdventureData {
  adventure: Adventure;
  allAdventures: Adventure[];
  previous: Adventure | null;
  next: Adventure | null;
  mdxSource: any;
}

interface AdventurePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function AdventurePage({ params }: AdventurePageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [adventureData, setAdventureData] = useState<AdventureData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string>("");
  
  const components = useMDXComponents({});

  useEffect(() => {
    params.then(p => setId(p.id));
  }, [params]);

  useEffect(() => {
    if (!id) return;

    async function loadAdventure() {
      try {
        setLoading(true);
        const response = await fetch(`/api/adventures/${id}`);
        
        if (!response.ok) {
          throw new Error('Adventure not found');
        }
        
        const data = await response.json();
        setAdventureData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load adventure');
      } finally {
        setLoading(false);
      }
    }

    loadAdventure();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-muted-foreground">Loading adventure...</p>
        </div>
      </div>
    );
  }

  if (error || !adventureData) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Adventure Not Found</h1>
          <p className="text-muted-foreground mb-6">{error || 'The adventure you\'re looking for doesn\'t exist.'}</p>
          <Link
            href="/#adventures"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const { adventure, allAdventures, previous, next, mdxSource } = adventureData;

  return (
    <div className="pt-16 min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-16 bg-card/50 backdrop-blur-sm border-r border-border/50 transition-all duration-300 z-40 ${
            sidebarOpen ? "w-80" : "w-0"
          } overflow-hidden flex flex-col`}
          style={{ height: 'calc(100vh - 4rem)' }}
        >
          <div className="flex items-center justify-between p-6 border-b border-border/50 flex-shrink-0">
            <h2 className="text-lg font-bold">All Adventures</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-muted rounded-lg lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6 space-y-2">
            {allAdventures.map((adv) => (
              <Link
                key={adv.id}
                href={`/adventures/${adv.id}`}
                className={`block p-3 rounded-lg transition-all ${
                  adv.id === adventure.id
                    ? "bg-accent/10 border border-accent/50 text-accent"
                    : "hover:bg-muted border border-transparent"
                }`}
              >
                <h3 className="font-medium text-sm mb-1 line-clamp-2">
                  {adv.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{adv.date}</span>
                  <span>•</span>
                  <span>{adv.readTime}</span>
                </div>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`fixed top-20 z-50 p-2 bg-card border border-border/50 rounded-r-lg hover:bg-muted transition-all ${
            sidebarOpen ? "left-80" : "left-0"
          }`}
        >
          {sidebarOpen ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "ml-80" : "ml-0"
          }`}
        >
          <article className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
            {/* Back Link */}
            <Link
              href="/#adventures"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to home
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {adventure.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {adventure.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{adventure.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{adventure.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              {adventure.tags && adventure.tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {adventure.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Article Content - MDX */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote {...mdxSource} components={components} />
            </div>

            {/* Navigation Footer */}
            <footer className="mt-16 pt-8 border-t border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {previous && (
                  <Link
                    href={`/adventures/${previous.id}`}
                    className="group p-6 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-card/50 transition-all"
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">
                      {previous.title}
                    </h3>
                  </Link>
                )}
                
                {next && (
                  <Link
                    href={`/adventures/${next.id}`}
                    className="group p-6 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-card/50 transition-all md:text-right md:ml-auto"
                  >
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">
                      {next.title}
                    </h3>
                  </Link>
                )}
              </div>
            </footer>
          </article>
        </main>
      </div>
    </div>
  );
}