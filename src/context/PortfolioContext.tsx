import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavSection, AcademicData, WorkCategory } from '../types/portfolio';
import { academicData } from '../data/academicData';

interface PortfolioContextType {
  activeSection: NavSection;
  setActiveSection: (sec: NavSection) => void;
  activeWorkCategory: WorkCategory;
  setActiveWorkCategory: (cat: WorkCategory) => void;
  navigateToWorkTab: (cat: WorkCategory) => void;
  academic: AcademicData;
  currentTime: string;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [activeWorkCategory, setActiveWorkCategory] = useState<WorkCategory>('social-media');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const navigateTo = (sec: NavSection) => {
    setActiveSection(sec);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWorkTab = (cat: WorkCategory) => {
    setActiveWorkCategory(cat);
    setActiveSection('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PortfolioContext.Provider
      value={{
        activeSection,
        setActiveSection: navigateTo,
        activeWorkCategory,
        setActiveWorkCategory,
        navigateToWorkTab,
        academic: academicData,
        currentTime,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
