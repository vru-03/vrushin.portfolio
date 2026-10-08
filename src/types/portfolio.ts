export type NavSection = 'home' | 'work' | 'professional' | 'certifications' | 'academic';

export type WorkCategory = 'social-media' | 'freelancing' | 'graphic-design' | 'all';

export interface WorkProject {
  id: string;
  title: string;
  client: string;
  category: 'social-media' | 'freelancing' | 'graphic-design' | 'video-editing' | 'image-editing';
  role: string;
  period: string;
  headline: string;
  deliverables: string[];
  impactMetrics: Array<{ label: string; value: string }>;
  tools: string[];
  spotlight?: boolean;
  socialLinks?: Array<{ label: string; url: string; handle?: string }>;
  visualTheme: {
    bgGradient: string;
    badgeLabel: string;
    accentColor: string;
  };
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    keyTakeaway: string;
  };
}

export interface VrushinProfile {
  name: string;
  location: string;
  weather: string;
  intro: string;
  summaryBullets: Array<{
    text: string;
    highlight?: string;
    linkSection?: NavSection;
    icon?: string;
  }>;
  socials: {
    email: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    resumeUrl?: string;
    workDriveUrl?: string;
  };
  nowPlaying: {
    song: string;
    artist: string;
    link?: string;
  };
}

export interface AcademicMilestone {
  id: string;
  level: string;
  degree: string;
  specialization?: string;
  institution: string;
  location: string;
  flag: string;
  period: string;
  status: 'Completed' | 'Upcoming';
  metrics: {
    primary: string;
    primaryLabel: string;
    secondary?: string;
    secondaryLabel?: string;
  };
  narrative: string;
  coreFocus: string[];
  keyHighlights: string[];
  boardOrAccreditation?: string;
}

export interface AcademicData {
  name: string;
  location: string;
  weather: string;
  summary: {
    degreesCount: number;
    internationalExperience: string;
    highestCgpa: string;
    focusArea: string;
  };
  milestones: AcademicMilestone[];
}

export interface ProjectPreviewItem {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  iconText: string;
}

export interface WritingPreviewItem {
  id: string;
  title: string;
  date: string;
  tag: string;
}
