// lib/adventure-data.ts

export interface Adventure {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
  readTime: string;
}

export const adventures: Adventure[] = [
  {
    id: "websockets-chat",
    title: "Building a Real-time Chat App with WebSockets",
    description: "Exploring the power of WebSockets for bi-directional communication",
    date: "Jan 2026",
    tags: ["WebSockets", "React", "Node.js"],
    readTime: "8 min read",
    content: `# Building a Real-time Chat App with WebSockets

Real-time communication has become a cornerstone of modern web applications. In this adventure, we'll explore how to build a fully functional chat application using WebSockets.

## Why WebSockets?

Traditional HTTP requests follow a request-response model. The client sends a request, and the server responds. This works great for most scenarios, but what if you need real-time, bi-directional communication?

That's where WebSockets shine.

## Setting Up the Server

First, let's set up a WebSocket server using Node.js and the \`ws\` library...`
  },
  {
    id: "css-grid",
    title: "Mastering CSS Grid Layouts",
    description: "Deep dive into creating responsive layouts with CSS Grid",
    date: "Dec 2025",
    tags: ["CSS", "Design", "Frontend"],
    readTime: "10 min read",
    content: `# Mastering CSS Grid Layouts

CSS Grid is one of the most powerful layout systems available in CSS. Let's explore how to create beautiful, responsive layouts with ease.`
  },
  {
    id: "typescript-generics",
    title: "Understanding TypeScript Generics",
    description: "Making your code more reusable with advanced TypeScript features",
    date: "Nov 2025",
    tags: ["TypeScript", "Tutorial"],
    readTime: "12 min read",
    content: `# Understanding TypeScript Generics

Generics are one of TypeScript's most powerful features. They allow you to write flexible, reusable code while maintaining type safety.`
  },
  {
    id: "react-performance",
    title: "Optimizing React Performance",
    description: "Tips and tricks for building faster React applications",
    date: "Oct 2025",
    tags: ["React", "Performance", "Optimization"],
    readTime: "15 min read",
    content: `# Optimizing React Performance

Performance optimization is crucial for delivering great user experiences. Let's dive into practical techniques for making your React apps blazing fast.`
  },
  {
    id: "nextjs-14",
    title: "Getting Started with Next.js 14",
    description: "Exploring the latest features in Next.js 14 and App Router",
    date: "Sep 2025",
    tags: ["Next.js", "React", "SSR"],
    readTime: "11 min read",
    content: `# Getting Started with Next.js 14

Next.js 14 brings exciting new features and improvements. Let's explore what makes this version special and how to leverage its capabilities.`
  }
];