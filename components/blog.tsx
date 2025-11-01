"use client";

import { PenTool, Calendar, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { blogPosts as allBlogPosts } from "@/lib/portfolio-data";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  link?: string;
}

export default function Blog() {
  const [posts] = useState<BlogPost[]>(allBlogPosts);

  return (
    <section id="blog" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="text-accent">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Thoughts on software development, machine learning, and building
            scalable systems.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.link || `#blog-${post.slug}`}
              target={post.link ? "_blank" : "_self"}
              rel={post.link ? "noopener noreferrer" : ""}
              className="group bg-card/50 border border-border/50 rounded-lg p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all cursor-pointer hover:translate-y-[-2px] animate-float-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-accent/60 group-hover:text-accent opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all" />
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent/80 border border-accent/20 group-hover:border-accent/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/30 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Posts Link */}
        {/* <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent/50 transition-all cursor-pointer hover:shadow-lg hover:shadow-accent/20 font-medium"
          >
            <PenTool className="w-4 h-4" />
            View All Articles
          </a>
        </div> */}
      </div>
    </section>
  );
}
