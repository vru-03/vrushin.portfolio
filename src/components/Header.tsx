import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CloudRain } from 'lucide-react';
import { vrushinProfile } from '../data/homeData';

export const Header: React.FC = () => {
  const { activeSection, setActiveSection, currentTime } = usePortfolio();

  return (
    <header className="w-full pt-8 pb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-stone-800">
      {/* Left: Full Name */}
      <button
        onClick={() => setActiveSection('home')}
        className="font-medium text-stone-900 hover:text-black transition-colors cursor-pointer text-base tracking-tight whitespace-nowrap text-left"
      >
        vrushin prajapati
      </button>

      {/* Right: Tabs + Live Time + Weather */}
      <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 sm:gap-6 text-[13.5px]">
        <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-stone-600">
          <button
            onClick={() => setActiveSection('home')}
            className={`transition-colors cursor-pointer ${
              activeSection === 'home'
                ? 'text-stone-950 font-medium underline underline-offset-4 decoration-stone-400'
                : 'hover:text-stone-900'
            }`}
          >
            home
          </button>

          <button
            onClick={() => setActiveSection('work')}
            className={`transition-colors cursor-pointer ${
              activeSection === 'work'
                ? 'text-stone-950 font-medium underline underline-offset-4 decoration-stone-400'
                : 'hover:text-stone-900'
            }`}
          >
            work
          </button>

          <button
            onClick={() => setActiveSection('professional')}
            className={`transition-colors cursor-pointer ${
              activeSection === 'professional'
                ? 'text-stone-950 font-medium underline underline-offset-4 decoration-stone-400'
                : 'hover:text-stone-900'
            }`}
          >
            beyond degree
          </button>

          <button
            onClick={() => setActiveSection('certifications')}
            className={`transition-colors cursor-pointer ${
              activeSection === 'certifications'
                ? 'text-stone-950 font-medium underline underline-offset-4 decoration-stone-400'
                : 'hover:text-stone-900'
            }`}
          >
            certifications
          </button>

          <button
            onClick={() => setActiveSection('academic')}
            className={`transition-colors cursor-pointer ${
              activeSection === 'academic'
                ? 'text-stone-950 font-medium underline underline-offset-4 decoration-stone-400'
                : 'hover:text-stone-900'
            }`}
          >
            academic bg
          </button>
        </nav>

        {/* Divider and Live Telemetry */}
        <div className="hidden sm:flex items-center gap-3 text-stone-400 pl-2 border-l border-stone-200 text-xs font-normal">
          <span className="text-stone-600">{currentTime || '2:40 AM'}</span>
          <span>{vrushinProfile.location}</span>
          <span className="inline-flex items-center gap-1 text-stone-500">
            <CloudRain className="w-3.5 h-3.5 text-stone-400 stroke-[1.5]" />
            {vrushinProfile.weather}
          </span>
        </div>
      </div>
    </header>
  );
};
