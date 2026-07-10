export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumePath: string;
  photoPath: string;
  heroPhotoPath: string;
}

export interface AboutContent {
  story: string[];
  philosophy: string;
  currentFocus: string;
  futureGoals: string;
}

export interface TechCategory {
  id: string;
  title: string;
  items: string[];
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  impact: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
}

export type ProjectLinkType =
  | "github"
  | "live"
  | "paper"
  | "docs"
  | "video"
  | "presentation"
  | "figma"
  | "website";

export interface ProjectLink {
  type: ProjectLinkType;
  href: string;
  label: string;
}

export type ProjectHighlightVariant =
  | "research"
  | "award"
  | "cloud"
  | "ai"
  | "blockchain"
  | "data"
  | "network"
  | "iot"
  | "default";

export interface ProjectHighlight {
  label: string;
  variant?: ProjectHighlightVariant;
  emphasized?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  techStack: string[];
  highlights: ProjectHighlight[];
  summary: string;
  description: string;
  features: string[];
  links?: ProjectLink[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string[];
  year: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  tooltip: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
  span?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  type: "education" | "work" | "achievement" | "focus";
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface PlaceholderItem {
  id: string;
  title: string;
  description: string;
  date?: string;
}
