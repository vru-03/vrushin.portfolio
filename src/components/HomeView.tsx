import React, { useState, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { vrushinProfile, homeProjectsPreview, homeWritingPreview } from '../data/homeData';
import {
  Mail,
  Check,
  ArrowUpRight,
  X,
  Clock,
  BookOpen,
  Camera,
  RotateCcw,
  Sparkles,
  Instagram,
  FileText,
  FolderGit2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HomeView: React.FC = () => {
  const { setActiveSection } = usePortfolio();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedEssay, setSelectedEssay] = useState<typeof homeWritingPreview[0] | null>(null);
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('vrushin_custom_portrait');
    }
    return null;
  });
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoUpload = (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setCustomPhoto(result);
        try {
          localStorage.setItem('vrushin_custom_portrait', result);
        } catch (err) {
          console.warn('Storage limit reached', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhoto(null);
    try {
      localStorage.removeItem('vrushin_custom_portrait');
    } catch (err) {
      console.warn(err);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(vrushinProfile.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Hero Section: Left Text + Right Photo (On mobile, photo appears first before intro) */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-start"
      >
        {/* Right Column: Portrait Card with Cinematic Blue & Purple Styling (appears first on mobile, right column on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="order-first md:order-last md:col-span-4 flex justify-start md:justify-end w-full md:w-auto"
        >
          <div className="relative group w-full max-w-[270px]">
            {/* Ambient Cinematic Blue & Purple Back-Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-purple-600/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Hidden File Input for Custom Upload */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handlePhotoUpload(f);
              }}
            />

            {/* Card Frame with Drag & Drop */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                const f = e.dataTransfer.files?.[0];
                if (f) handlePhotoUpload(f);
              }}
              className={`relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-900 border transition-all duration-300 shadow-md ${
                isDragging
                  ? 'border-indigo-400 ring-2 ring-indigo-400/50 scale-[1.02]'
                  : 'border-purple-300/30 hover:border-indigo-400/50'
              }`}
            >
              {/* Portrait Image */}
              <img
                src={customPhoto || '/Cinematic Blue and Purple Portrait.png'}
                alt="Vrushin — Cinematic Portrait"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('photo-1506794778202')) {
                    target.src =
                      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80';
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Cinematic Dual-Tone Color Cast Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/25 mix-blend-color" />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl" />

              {/* Cinematic Lighting Badge */}
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-950/70 backdrop-blur-md text-[10px] font-medium text-purple-200 border border-purple-500/20 shadow-xs pointer-events-none">
                <Sparkles className="w-2.5 h-2.5 text-indigo-300" />
                <span>Cinematic</span>
              </div>

              {/* Hover Actions: Change photo & Reset */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-stone-100 text-[11px] font-medium border border-stone-700/60 shadow-xs transition-colors cursor-pointer"
                  title="Upload or change portrait image"
                >
                  <Camera className="w-3 h-3 text-indigo-400" />
                  <span>Change photo</span>
                </button>

                {customPhoto && (
                  <button
                    type="button"
                    onClick={handleResetPhoto}
                    className="p-1.5 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-stone-400 hover:text-stone-200 border border-stone-700/60 transition-colors cursor-pointer"
                    title="Reset to default portrait"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Dragging Feedback Indicator */}
              {isDragging && (
                <div className="absolute inset-0 bg-indigo-950/80 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4 text-white pointer-events-none">
                  <Camera className="w-8 h-8 text-indigo-300 mb-2 animate-bounce" />
                  <p className="text-xs font-semibold">Drop image here</p>
                  <p className="text-[10px] text-stone-300">Set as home portrait</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Left Column: Intro & Summary (appears after photo on mobile, left column on desktop) */}
        <div className="order-last md:order-first md:col-span-8 space-y-6 w-full">
          <p className="text-[15.5px] leading-relaxed text-stone-800">
            {vrushinProfile.intro}
          </p>

          {/* SUMMARY List */}
          <div className="space-y-3 pt-2">
            <h2 className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
              SUMMARY
            </h2>

            <ul className="space-y-2.5 text-[14px] text-stone-700 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-stone-400 select-none text-xs mt-1">•</span>
                <span>
                  <button
                    onClick={() => setActiveSection('work')}
                    className="font-medium text-stone-900 hover:text-stone-600 transition-colors cursor-pointer inline-flex items-center gap-1 text-left group"
                  >
                    <span>
                      Social Media Executive at{' '}
                      <span className="underline underline-offset-2">Shiv Shakti Developers Builders Pvt Ltd.</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 transition-colors shrink-0" />
                  </button>
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-stone-400 select-none text-xs mt-1">•</span>
                <span>
                  <button
                    onClick={() => setActiveSection('work')}
                    className="font-medium text-stone-900 hover:text-stone-600 transition-colors cursor-pointer inline-flex items-center gap-1 text-left group"
                  >
                    <span>
                      Freelance{' '}
                      <span className="underline underline-offset-2">Social Media Manager & Video Editor</span> — Cultural & Live Events
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 transition-colors shrink-0" />
                  </button>
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-stone-400 select-none text-xs mt-1">•</span>
                <span>
                  <button
                    onClick={() => setActiveSection('work')}
                    className="font-medium text-stone-900 hover:text-stone-600 transition-colors cursor-pointer inline-flex items-center gap-1 text-left group"
                  >
                    <span>
                      Graphic Designer —{' '}
                      <span className="underline underline-offset-2">Creative & Digital Content Visuals</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 transition-colors shrink-0" />
                  </button>
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-stone-400 select-none text-xs mt-1">•</span>
                <span>
                  <button
                    onClick={() => setActiveSection('academic')}
                    className="font-medium text-stone-900 hover:text-stone-600 transition-colors cursor-pointer inline-flex items-center gap-1 text-left group"
                  >
                    <span>
                      <span className="underline underline-offset-2">International BBA in E-Commerce & Digital Marketing</span> — Paris School of Business ('24)
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 transition-colors shrink-0" />
                  </button>
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-stone-400 select-none text-xs mt-1">•</span>
                <span>
                  <button
                    onClick={() => setActiveSection('certifications')}
                    className="font-medium text-stone-900 hover:text-stone-600 transition-colors cursor-pointer inline-flex items-center gap-1 text-left group"
                  >
                    <span>
                      Certified in{' '}
                      <span className="underline underline-offset-2">Google Digital Marketing, Meta Marketing Analytics, Anthropic AI & Oxford AI</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 transition-colors shrink-0" />
                  </button>
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-stone-400 select-none text-xs mt-1">•</span>
                <span>
                  <button
                    onClick={() => setActiveSection('professional')}
                    className="font-medium text-stone-900 hover:text-stone-600 transition-colors cursor-pointer inline-flex items-center gap-1 text-left group"
                  >
                    <span>
                      Completed{' '}
                      <span className="underline underline-offset-2">externships with TikTok, Beats by Dre, BeReal, Breaking Games.</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 transition-colors shrink-0" />
                  </button>
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-stone-400 select-none text-xs mt-1">•</span>
                <span>Based in Vadodara, Gujarat, India</span>
              </li>
            </ul>
          </div>

          {/* Social Row & Now Playing */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-4 text-stone-600 text-xs">
              <div className="flex items-center gap-3.5 text-stone-500">
                {/* Mail - Direct click copies vrushin1009@gmail.com */}
                <div className="relative inline-flex items-center">
                  <button
                    onClick={handleCopyEmail}
                    title="Click to copy email: vrushin1009@gmail.com"
                    className="hover:text-stone-950 transition-colors cursor-pointer flex items-center gap-1 group"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Mail className="w-4 h-4" />
                    )}
                  </button>
                  {copiedEmail && (
                    <span className="absolute -top-7 left-0 px-2 py-0.5 rounded bg-stone-900 text-white text-[10px] font-mono whitespace-nowrap shadow-md z-20">
                      Copied vrushin1009@gmail.com
                    </span>
                  )}
                </div>

                {/* X / Twitter (@vru_03n) */}
                <a
                  href={vrushinProfile.socials.twitter || 'https://x.com/vru_03n'}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stone-950 transition-colors font-mono font-bold text-xs"
                  title="X / Twitter (@vru_03n)"
                >
                  𝕏
                </a>

                {/* LinkedIn (www.linkedin.com/in/vru03) */}
                <a
                  href={vrushinProfile.socials.linkedin || 'https://www.linkedin.com/in/vru03'}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stone-950 transition-colors text-xs font-semibold"
                  title="LinkedIn (in/vru03)"
                >
                  in
                </a>

                {/* GitHub (https://github.com/vru-03) */}
                <a
                  href={vrushinProfile.socials.github || 'https://github.com/vru-03'}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stone-950 transition-colors text-xs font-mono"
                  title="GitHub (vru-03)"
                >
                  gh
                </a>

                {/* Instagram (https://www.instagram.com/vru_.03/) */}
                <a
                  href={vrushinProfile.socials.instagram || 'https://www.instagram.com/vru_.03/'}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stone-950 transition-colors text-xs"
                  title="Instagram (@vru_.03)"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              <div className="h-3 w-px bg-stone-300 mx-1 hidden sm:block" />

              {/* Now Playing: livin slow by longleggss */}
              <div className="flex items-center gap-1.5 text-stone-600 text-xs">
                <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-indigo-400 animate-spin flex items-center justify-center text-[9px] text-white">
                  💿
                </span>
                <span>
                  Listening to{' '}
                  <a
                    href={vrushinProfile.nowPlaying.link}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-stone-950 font-medium inline-flex items-center gap-0.5"
                  >
                    {vrushinProfile.nowPlaying.song} by {vrushinProfile.nowPlaying.artist}{' '}
                    <ArrowUpRight className="w-3 h-3 inline text-stone-400" />
                  </a>
                </span>
              </div>
            </div>

            {/* Action Buttons: Resume & Work Drive (spaced with pt-2.5 and lower margin before next section) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={
                  vrushinProfile.socials.resumeUrl ||
                  'https://drive.google.com/drive/folders/1LqAWkwLWUOtmcrz4EwE4CsM_wR2aYvke?usp=sharing'
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-900 text-stone-100 hover:bg-stone-800 text-xs font-mono font-medium transition-all shadow-xs hover:shadow group cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-stone-300 group-hover:text-white" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-200 transition-colors" />
              </a>

              <a
                href={
                  vrushinProfile.socials.workDriveUrl ||
                  'https://drive.google.com/drive/folders/1uDEA4ZnLi665-oIJlmRK8JSURpUZPyzR?usp=sharing'
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-stone-300 hover:border-stone-400 hover:bg-stone-50 text-stone-800 text-xs font-mono font-medium transition-all shadow-xs hover:shadow group cursor-pointer"
              >
                <FolderGit2 className="w-3.5 h-3.5 text-stone-500 group-hover:text-stone-900" />
                <span>Work Drive</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Two Column Grid: PROJECTS (Left) & WRITING (Right) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12"
      >
        {/* Left Column: PROJECTS */}
        <div className="md:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
              PROJECTS & WORK
            </h2>
            <button
              onClick={() => setActiveSection('work')}
              className="text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-4">
            {homeProjectsPreview.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => setActiveSection('work')}
                className="flex items-start gap-3.5 group cursor-pointer"
              >
                {/* Project Icon Pill */}
                <div
                  style={{ backgroundColor: proj.iconBg }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold tracking-tight shrink-0 mt-0.5 shadow-xs transition-transform group-hover:scale-105"
                >
                  {proj.iconText}
                </div>

                {/* Project Details */}
                <div className="space-y-0.5">
                  <h3 className="text-[14px] font-medium text-stone-900 group-hover:underline underline-offset-2 flex items-center gap-1">
                    {proj.title}
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 transition-colors" />
                  </h3>
                  <p className="text-xs text-stone-500 leading-snug">
                    {proj.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: WRITING */}
        <div className="md:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
              WRITING
            </h2>
          </div>

          <div className="space-y-3">
            {homeWritingPreview.map((essay, idx) => (
              <motion.button
                key={essay.id}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => setSelectedEssay(essay)}
                className="w-full flex items-baseline gap-5 group text-left cursor-pointer transition-all hover:translate-x-1"
              >
                <span className="font-mono text-stone-400 text-[11px] shrink-0 select-none">
                  {essay.date}
                </span>
                <span className="text-[13.5px] text-stone-800 group-hover:text-stone-950 group-hover:underline underline-offset-2 font-normal flex-1">
                  {essay.title}
                </span>
                {essay.tag && (
                  <span className="hidden sm:inline-block text-[10px] font-mono text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded shrink-0 group-hover:bg-stone-200 transition-colors">
                    {essay.tag}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Essay Reading Modal */}
      <AnimatePresence>
        {selectedEssay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedEssay(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl border border-stone-200 shadow-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono font-medium text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md">
                      {selectedEssay.tag}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">
                      {selectedEssay.date}
                    </span>
                    {selectedEssay.readTime && (
                      <span className="text-[11px] font-mono text-stone-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {selectedEssay.readTime}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
                    {selectedEssay.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedEssay(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Essay Lead Summary */}
              {selectedEssay.summary && (
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 text-xs sm:text-sm text-stone-700 font-mono leading-relaxed">
                  <span className="font-semibold text-stone-900 uppercase text-[10px] tracking-wider block mb-1">
                    Core Thesis
                  </span>
                  {selectedEssay.summary}
                </div>
              )}

              {/* Essay Paragraphs */}
              <div className="space-y-4 text-[14.5px] leading-relaxed text-stone-700">
                {selectedEssay.content?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-stone-400" />
                  <span>Vrushin Prajapati — Working Notes</span>
                </div>
                <button
                  onClick={() => setSelectedEssay(null)}
                  className="px-3 py-1 rounded-lg bg-stone-100 text-stone-800 font-medium hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
