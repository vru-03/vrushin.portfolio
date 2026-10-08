export type ThemeMode = 'light' | 'warm' | 'dark';

export interface ProjectItem {
  id: string;
  title: string;
  url: string;
  description: string;
  iconType: 'thumbnail' | 'bulkgen' | 'pondy' | 'checkplug' | 'darzi' | 'slacklash' | 'dosalist' | 'whichside' | 'scnz' | 'unrot' | 'uxmarket' | 'shitposting' | 'custom';
  iconBg?: string;
  iconText?: string;
  iconEmoji?: string;
  featuredOnHome?: boolean;
  tag?: string;
  stats?: string;
  previewImage?: string;
}

export interface WritingItem {
  id: string;
  date: string;
  title: string;
  readTime: string;
  category: 'Mindset' | 'Growth' | 'AI' | 'Money' | 'Future' | 'Mental Models' | 'Design';
  claps?: number;
  content: string;
}

export interface ValueItem {
  number: number;
  title: string;
  description: string;
}

export interface TrackItem {
  title: string;
  artist: string;
  album: string;
  url: string;
  duration: string;
}

export interface PhotoMemory {
  id: string;
  caption: string;
  tag: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  handle: string;
  heroGreeting: string;
  location: string;
  weather: string;
  weatherDetails: {
    condition: string;
    temp: string;
    localTip: string;
  };
  photos: PhotoMemory[];
  summary: {
    ideasLinkText: string;
    ideasEmoji: string;
    solanaText: string;
    solanaUrl: string;
    balajiText: string;
    balajiUrl: string;
    companiesCount: string;
    ageAndLocation: string;
    memeNetworkText: string;
    newsletterText: string;
    newsletterUrl: string;
  };
  playlist: TrackItem[];
  socials: {
    email: string;
    twitter: string;
    instagram: string;
    github: string;
    calLink: string;
  };
  projects: ProjectItem[];
  writings: WritingItem[];
  values: ValueItem[];
}
