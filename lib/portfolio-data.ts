// Portfolio Information - Updated for Sadit Rasaili

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// PROJECTS
export const projects: Project[] = [
  {
    id: 1,
    title: "ImGrep",
    description: "AI-powered image search engine",
    longDescription: "Full-stack image search engine with a Python backend, Flutter frontend, and a custom ML model for visual similarity recognition. Enables searching by image instead of text.",
    technologies: ["Python", "Flutter", "Machine Learning", "FastAPI"],
    image: "/imgrep.png",
    github: "https://github.com/Rasaili-rain/imgrep",
    featured: true,
  },
  {
    id: 2,
    title: "Lobic",
    description: "Real-time music streaming and chat platform",
    longDescription: "Music streaming and chat app that uses WebSockets for real-time interaction, allowing synchronized listening in lobbies. Built for performance and safety using Rust.",
    technologies: ["Rust", "WebSockets", "TypeScript", "React"],
    image: "/lobic.png",
    github: "https://github.com/Rasaili-rain/lobic",
    featured: true,
  },
  {
    id: 3,
    title: "KUvent",
    description: "Event management platform for university clubs",
    longDescription: "Social platform designed to help university clubs list upcoming events, manage registrations, and notify students in real time.",
    technologies: ["C++", "Qt", "httplib"],
    image: "/kuvent.png",
    github: "https://github.com/Rasaili-rain/kuvent",
    featured: false,
  },
  {
    id: 4,
    title: "Hajir_F",
    description: "Student attendance tracking app",
    longDescription: "A Flutter-based mobile app that simplifies classroom attendance tracking for students and teachers.",
    technologies: ["Dart", "Flutter", "Firebase"],
    image: "/hajirf.png",
    github: "https://github.com/Rasaili-rain/hajir_f",
    featured: false,
  },
  {
    id: 5,
    title: "Dodgers (Hackathon Project)",
    description: "Video calling platform using WebRTC",
    longDescription: "Hackathon-built real-time video calling app supporting peer-to-peer communication with an Express + MongoDB backend and React frontend.",
    technologies: ["WebRTC", "Express.js", "MongoDB", "React"],
    image: "/dodgers.png",
    github: "https://github.com/Rasaili-rain/dodgers",
    featured: false,
  },
];

// EDUCATION
export const education: EducationItem[] = [
  {
    school: "Kathmandu University",
    degree: "Bachelor in Computer Engineering",
    field: "Computer Engineering",
    period: "2023 - 2027",
    location: "Dhulikhel, Kavre, Nepal",
    achievements: ["Active in software development and applied ML projects", "Developed multiple full-stack and mobile apps"],
  },
  {
    school: "Khwopa HSS",
    degree: "+2 Science",
    field: "Science (Physics, Chemistry, Mathematics, Computer)",
    period: "2021 - 2022",
    location: "Dekocha, Bhaktapur",
    achievements: ["Graduated with distinction"],
  },
];

// CERTIFICATIONS
export const certifications: Certification[] = [
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    year: 2023,
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    year: 2023,
  },
];

// BLOG POSTS
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Real-Time Systems in Rust",
    excerpt: "A breakdown of concurrency and performance strategies for real-time apps using Rust and WebSockets.",
    date: "Apr 10, 2025",
    readTime: "7 min read",
    tags: ["Rust", "WebSockets", "Backend"],
    slug: "real-time-systems-rust",
    link: "https://medium.com/@saditrasaili/real-time-rust",
  },
  {
    id: 2,
    title: "Designing Smart Image Search Models",
    excerpt: "How I built ImGrep — an AI-driven image search platform using feature extraction and similarity metrics.",
    date: "Mar 28, 2025",
    readTime: "8 min read",
    tags: ["AI", "Computer Vision", "ML"],
    slug: "smart-image-search",
    link: "https://medium.com/@saditrasaili/imgrep-ml",
  },
];

// SKILLS
export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used in full-stack and systems development",
    skills: ["C++", "Rust", "Python", "Dart", "TypeScript", "C"],
    icon: "Code",
  },
  {
    category: "Frontend & Mobile Development",
    description: "Building interactive web and mobile apps",
    skills: ["React", "Flutter", "HTML/CSS", "Next.js", "Tailwind CSS"],
    icon: "Monitor",
  },
  {
    category: "Backend Development",
    description: "APIs and scalable backend systems",
    skills: ["Express.js", "Axum", "Flask", "FastAPI", "MongoDB", "PostgreSQL"],
    icon: "Server",
  },
  {
    category: "Machine Learning",
    description: "ML model design and integration",
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    icon: "Brain",
  },
  {
    category: "DevOps & Tools",
    description: "Efficient project workflow and deployment",
    skills: ["Git", "Docker", "Linux", "Vercel", "CI/CD"],
    icon: "Wrench",
  },
];

// SOCIAL LINKS
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Rasaili-rain",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saditrasaili",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:saditrasaili063@gmail.com",
    icon: "mail",
  },
];

// HERO INFO
export const heroInfo = {
  name: "Sadit Rasaili",
  title: "Full Stack Developer • ML Enthusiast",
  subtitle: "Building intelligent, high-performance systems.",
  bio: "I'm a Computer Engineering student passionate about crafting efficient full-stack solutions and exploring applied machine learning. I enjoy turning complex problems into elegant software.",
  resumeUrl: "/cv-sadit.pdf",
};
