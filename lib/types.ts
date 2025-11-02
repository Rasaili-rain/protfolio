export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  link?: string;
  github?: string;
  featured: boolean;
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

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  bio: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  images?: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
  icon: string;
}
