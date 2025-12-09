import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  category: 'Web' | 'Java' | 'AI/ML';
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Interest {
  name: string;
  icon: ReactNode;
  description: string;
}

export interface Certification {
  title: string;
  link: string;
}