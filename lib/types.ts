export interface HeroInfo {
  name: string;
  title: string;
  subtitle: string;
  imageLink?: string;
  bio: string;
  resumeUrl: string;
}

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

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  location_link?: string;
  bio: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  images?: string[];
  link?: string;
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

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
