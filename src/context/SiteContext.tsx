import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, WritingItem, ProjectItem, TrackItem, ThemeMode } from '../types/site';
import { initialSiteConfig } from '../data/siteConfig';

export type ActivePage = 'home' | 'writing' | 'projects' | 'values' | 'sandbox';

interface SiteContextType {
  config: SiteConfig;
  updateConfig: (updater: Partial<SiteConfig> | ((prev: SiteConfig) => SiteConfig)) => void;
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  readingArticle: WritingItem | null;
  setReadingArticle: (article: WritingItem | null) => void;
  selectedProject: ProjectItem | null;
  setSelectedProject: (project: ProjectItem | null) => void;
  currentTime: string;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
  currentTrackIndex: number;
  nextTrack: () => void;
  currentTrack: TrackItem;
  currentPhotoIndex: number;
  nextPhoto: () => void;
  prevPhoto: () => void;
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  isWeatherOpen: boolean;
  setIsWeatherOpen: (open: boolean) => void;
  isCommandOpen: boolean;
  setIsCommandOpen: (open: boolean) => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  clapArticle: (id: string) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

const STORAGE_KEY = 'yash_bhardwaj_site_v3';

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...initialSiteConfig, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return initialSiteConfig;
  });

  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [readingArticle, setReadingArticle] = useState<WritingItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem('yb_theme') as ThemeMode) || 'light';
  });
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Live Mumbai Time formatting
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch {
        const d = new Date();
        setCurrentTime(`${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut for Cmd+K command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsCommandOpen(false);
        setIsWeatherOpen(false);
        setIsCustomizerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem('yb_theme', mode);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const updateConfig = (updater: Partial<SiteConfig> | ((prev: SiteConfig) => SiteConfig)) => {
    setConfig((prev) => {
      const updated = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const toggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % config.playlist.length);
    setIsMusicPlaying(true);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % config.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + config.photos.length) % config.photos.length);
  };

  const clapArticle = (id: string) => {
    updateConfig((prev) => ({
      ...prev,
      writings: prev.writings.map((w) =>
        w.id === id ? { ...w, claps: (w.claps || 0) + 1 } : w
      ),
    }));
    showToast('Appreciated! 👏');
  };

  const currentTrack = config.playlist[currentTrackIndex] || config.playlist[0];

  return (
    <SiteContext.Provider
      value={{
        config,
        updateConfig,
        activePage,
        setActivePage: (page) => {
          setReadingArticle(null);
          setSelectedProject(null);
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        readingArticle,
        setReadingArticle,
        selectedProject,
        setSelectedProject,
        currentTime,
        isMusicPlaying,
        toggleMusic,
        currentTrackIndex,
        nextTrack,
        currentTrack,
        currentPhotoIndex,
        nextPhoto,
        prevPhoto,
        theme,
        setTheme,
        isWeatherOpen,
        setIsWeatherOpen,
        isCommandOpen,
        setIsCommandOpen,
        isCustomizerOpen,
        setIsCustomizerOpen,
        toastMessage,
        showToast,
        clapArticle,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
