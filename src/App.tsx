import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { AcademicBackgroundView } from './components/AcademicBackgroundView';
import { ProfessionalDevelopmentView } from './components/ProfessionalDevelopmentView';
import { CertificationsView } from './components/CertificationsView';
import { WorkView } from './components/WorkView';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout: React.FC = () => {
  const { activeSection } = usePortfolio();

  return (
    <div className="min-h-screen bg-white text-[#181816] antialiased selection:bg-stone-200">
      <div className="max-w-5xl xl:max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-12 pb-24">
        {/* Top Navbar */}
        <Header />

        {/* Dynamic Section Content with View Transition */}
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeSection === 'work' ? (
                <WorkView />
              ) : activeSection === 'academic' ? (
                <AcademicBackgroundView />
              ) : activeSection === 'professional' ? (
                <ProfessionalDevelopmentView />
              ) : activeSection === 'certifications' ? (
                <CertificationsView />
              ) : (
                <HomeView />
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <MainLayout />
    </PortfolioProvider>
  );
}
