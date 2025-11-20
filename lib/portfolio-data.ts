import { Project, EducationItem, Certification, ContactInfo, SkillCategory, SocialLink, HeroInfo } from "./types";

export const heroInfo:HeroInfo = {
  name: "Sadit Rasaili",
  title: "Full Stack Developer • ML Enthusiast",
  subtitle: "Building intelligent, high-performance systems.",
  imageLink:"pp.jpg",
  bio: "I'm a Computer Engineering student passionate about crafting efficient full-stack solutions and exploring applied machine learning. I enjoy turning complex problems into elegant software.",
  resumeUrl: "cv-sadit.pdf",
};

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

export const education: EducationItem[] = [
  {
    school: "Kathmandu University",
    degree: "Bachelor in Computer Engineering",
    field: "Computer Engineering",
    period: "2023 - ...",
    location: "Dhulikhel, Kavre, Nepal",
    achievements: ["Active in software development and applied ML projects", "Developed multiple full-stack and mobile apps"],
  },
  {
    school: "Khwopa HSS",
    degree: "+2 Science",
    field: "Science (Physics, Chemistry, Mathematics, Computer)",
    period: "2021 - 2022",
    location: "Dekocha, Bhaktapur",
    achievements: ["Graduated with A+"],
  },
];


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

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Rasaili-rain",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sadit-rasaili-8492a82a0/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:saditrasaili063@gmail.com",
    icon: "mail",
  },
];

export const contactInfo: ContactInfo = {
  email: "saditrasaili063@gmail.com",
  phone: "+977 9763610010",
  location: "Suryabinak, Bhaktapur Nepal",
  location_link:"https://maps.app.goo.gl/tAnWxsiqg6h9fboR7",
  bio: "Have a project in mind or want to collaborate? I'd love to hear from you. Reach out through any of the channels below.",
};

export const navigationItems = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const footerInfo = {
  name: "Sadit Rasaili",
  tagline: "Full stack developer passionate about building amazing products",
  year: 2025,
};

export const certifications: Certification[] = [
  {
    name: "Intro to Programming",
    issuer: "Kaggle",
    year: 2024,
    images: ["certifications/SADIT_RASAILI - Intro to Programming.png"],
  },
  {
    name: "Python",
    issuer: "Kaggle",
    year: 2024,
    images: ["certifications/SADIT_RASAILI - Python.png"],
  },
  {
    name: "Intro To Machine Learning",
    issuer: "Kaggle",
    year: 2025,
    images: ["certifications/SADIT_RASAILI - Intro to Machine Learning.png"],
  },
  {
    name: "Intro To SQL",
    issuer: "Kaggle",
    year: 2025,
    images: ["certifications/SADIT_RASAILI - Intro to SQL.png"],
  },
    {
    name: "React Basic",
    issuer: "Hacker Rank",
    year: 2025,
    images: ["certifications/react-basic.png"],
    link:"https://www.hackerrank.com/certificates/533c4a4aa6aa"
  },
];