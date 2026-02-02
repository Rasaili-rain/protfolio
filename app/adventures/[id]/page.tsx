"use client";

import { useState, use } from "react";
import { ChevronLeft, ChevronRight, Menu, X, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { adventures } from "@/lib/adventure-data";

interface AdventurePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function AdventurePage({ params }: AdventurePageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { id } = use(params);
  
  const currentAdventure = adventures.find((a) => a.id === id);
  const currentIndex = adventures.findIndex((a) => a.id === id);
  const prevAdventure = currentIndex > 0 ? adventures[currentIndex - 1] : null;
  const nextAdventure = currentIndex < adventures.length - 1 ? adventures[currentIndex + 1] : null;

  if (!currentAdventure) {
    return <div className="min-h-screen pt-24 text-center">Adventure not found</div>;
  }

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
            {adventures.map((adventure) => (
              <Link
                key={adventure.id}
                href={`/adventures/${adventure.id}`}
                className={`block p-3 rounded-lg transition-all ${
                  adventure.id === currentAdventure.id
                    ? "bg-accent/10 border border-accent/50 text-accent"
                    : "hover:bg-muted border border-transparent"
                }`}
              >
                <h3 className="font-medium text-sm mb-1 line-clamp-2">
                  {adventure.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{adventure.date}</span>
                  <span>•</span>
                  <span>{adventure.readTime}</span>
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
              href="/adventures"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to all adventures
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {currentAdventure.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {currentAdventure.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{currentAdventure.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentAdventure.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {currentAdventure.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown>{currentAdventure.content}</ReactMarkdown>
            </div>

            {/* Navigation Footer */}
            <footer className="mt-16 pt-8 border-t border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prevAdventure && (
                  <Link
                    href={`/adventures/${prevAdventure.id}`}
                    className="group p-6 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-card/50 transition-all"
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">
                      {prevAdventure.title}
                    </h3>
                  </Link>
                )}
                
                {nextAdventure && (
                  <Link
                    href={`/adventures/${nextAdventure.id}`}
                    className="group p-6 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-card/50 transition-all md:text-right md:ml-auto"
                  >
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">
                      {nextAdventure.title}
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