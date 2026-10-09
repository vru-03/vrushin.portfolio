import React, { useState, useMemo } from 'react';
import { selfEditedReels, selfEditedReelsDriveFolderUrl, SelfReelItem } from '../data/selfReelsData';
import {
  Film,
  Play,
  ExternalLink,
  Search,
  FolderOpen,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type CategoryFilter = 'All' | 'Spiritual & Sacred' | 'Ganpati Festival' | 'Travel & Lifestyle' | 'Cinematic & Concepts';

export const SelfEditingReelsGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeReel, setActiveReel] = useState<SelfReelItem | null>(null);

  // Filtered reels based on category and search query
  const filteredReels = useMemo(() => {
    return selfEditedReels.filter((reel) => {
      const matchesCategory =
        selectedFilter === 'All' ? true : reel.category === selectedFilter;
      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : reel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            reel.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
            reel.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  // Navigation inside the modal
  const handlePrev = () => {
    if (!activeReel) return;
    const currentIndex = filteredReels.findIndex((r) => r.id === activeReel.id);
    if (currentIndex > 0) {
      setActiveReel(filteredReels[currentIndex - 1]);
    } else {
      setActiveReel(filteredReels[filteredReels.length - 1]);
    }
  };

  const handleNext = () => {
    if (!activeReel) return;
    const currentIndex = filteredReels.findIndex((r) => r.id === activeReel.id);
    if (currentIndex < filteredReels.length - 1) {
      setActiveReel(filteredReels[currentIndex + 1]);
    } else {
      setActiveReel(filteredReels[0]);
    }
  };

  const categories: CategoryFilter[] = [
    'All',
    'Spiritual & Sacred',
    'Ganpati Festival',
    'Travel & Lifestyle',
    'Cinematic & Concepts',
  ];

  return (
    <div className="space-y-6">
      {/* Header Bar with Drive Link */}
      <div className="p-4 sm:p-5 rounded-2xl bg-stone-900 text-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Original Video Production Archive
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <Film className="w-4 h-4 text-red-400" />
            <span>Self-Edited Reels & Creative Archive</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-stone-800 text-stone-300 font-normal">
              {selfEditedReels.length} Videos
            </span>
          </h3>
          <p className="text-xs text-stone-400 max-w-2xl leading-relaxed">
            Reels independently shot, conceptualized, and edited in Premiere Pro & CapCut from the Google Drive{' '}
            <code className="text-red-300 bg-stone-800/80 px-1 py-0.5 rounded text-[11px]">self_video_edits</code> folder.
            Click any reel to stream and watch directly.
          </p>
        </div>

        <a
          href={selfEditedReelsDriveFolderUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-medium transition-colors shadow-xs shrink-0 self-start md:self-auto group"
        >
          <FolderOpen className="w-4 h-4" />
          <span>Open Google Drive Folder</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200/80 w-fit max-w-full">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? selfEditedReels.length
                : selfEditedReels.filter((r) => r.category === cat).length;
            const isActive = selectedFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-stone-800 text-stone-300' : 'bg-stone-200 text-stone-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reels (e.g. Kashi, Paris, Bappa)..."
            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Active Count & Feedback */}
      <div className="flex items-center justify-between text-xs text-stone-500 font-mono px-1">
        <span>
          Showing {filteredReels.length} of {selfEditedReels.length} reels in 9:16 vertical ratio
        </span>
        <span className="text-[11px] text-stone-400">Click to stream / play</span>
      </div>

      {/* 9:16 Vertical Reels Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {filteredReels.map((reel, idx) => (
          <ReelCard
            key={reel.id}
            reel={reel}
            index={idx}
            onClick={() => setActiveReel(reel)}
          />
        ))}
      </div>

      {filteredReels.length === 0 && (
        <div className="text-center py-12 bg-stone-50 rounded-2xl border border-stone-200 text-stone-500 space-y-2">
          <Film className="w-8 h-8 mx-auto text-stone-400" />
          <p className="text-sm font-medium">No reels matching &quot;{searchQuery}&quot;</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('All');
            }}
            className="text-xs text-stone-700 underline underline-offset-2 cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Video Streaming Modal */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
            onClick={() => setActiveReel(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="bg-stone-900 border border-stone-700 text-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-stone-800/90 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Video Player Column (9:16 aspect ratio container) */}
              <div className="md:w-1/2 bg-black flex items-center justify-center p-2 sm:p-4 relative min-h-[380px] md:min-h-[580px]">
                <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl">
                  <iframe
                    src={activeReel.previewUrl}
                    title={activeReel.title}
                    allow="autoplay"
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Left/Right Prev/Next Navigation Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-colors cursor-pointer"
                  title="Previous Reel"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-colors cursor-pointer"
                  title="Next Reel"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Info Column */}
              <div className="md:w-1/2 p-5 sm:p-7 flex flex-col justify-between space-y-5 overflow-y-auto max-h-[90vh]">
                <div className="space-y-4">
                  {/* Category & Tag */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-red-950/80 border border-red-800/60 text-red-300 text-[11px] font-mono font-medium">
                      {activeReel.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-stone-800 text-stone-300 text-[11px] font-mono">
                      {activeReel.tag}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-stone-800 text-stone-400 text-[11px] font-mono">
                      9:16 Vertical Reel
                    </span>
                  </div>

                  {/* Reel Title */}
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                      {activeReel.title}
                    </h2>
                    <p className="text-xs font-mono text-stone-400">
                      File: {activeReel.filename}
                    </p>
                  </div>

                  {/* Production Scope & Breakdown */}
                  <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/80 space-y-2.5 text-xs text-stone-300">
                    <div className="flex items-center gap-2 text-stone-200 font-semibold text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Post-Production Breakdown</span>
                    </div>
                    <ul className="space-y-1.5 text-stone-400 leading-relaxed list-disc list-inside">
                      <li>Self-directed concept, camera capture, and storyline sequencing</li>
                      <li>Frame-accurate beat matching & rhythmic audio editing</li>
                      <li>Cinematic color grading & atmospheric tone curve styling</li>
                      <li>Optimized for vertical high-retention feeds (Instagram & YouTube Shorts)</li>
                    </ul>
                  </div>

                  {/* Software Stack Used */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                      EDITING TOOLS APPLIED
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 border border-stone-700">
                        Premiere Pro
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 border border-stone-700">
                        CapCut Desktop
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 border border-stone-700">
                        Sound Design
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 border border-stone-700">
                        Color Grading
                      </span>
                    </div>
                  </div>
                </div>

                {/* External Actions */}
                <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={activeReel.driveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-medium transition-colors shadow-sm group"
                  >
                    <span>Open in Google Drive</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <div className="text-stone-400 text-xs font-mono">
                    Use arrows <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700">←</kbd> <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700">→</kbd> to cycle
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// INDIVIDUAL 9:16 VERTICAL REEL CARD
// ==========================================
interface ReelCardProps {
  reel: SelfReelItem;
  index: number;
  onClick: () => void;
}

const ReelCard: React.FC<ReelCardProps> = ({ reel, index, onClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ duration: 0.22, ease: 'easeOut', delay: Math.min(index * 0.02, 0.25) }}
      onClick={onClick}
      className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/90 hover:border-red-400/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* Background Poster / Thumbnail */}
      <div className="absolute inset-0 bg-stone-950">
        {!imgError ? (
          <img
            src={reel.thumbnailUrl}
            alt={reel.title}
            onError={() => {
              // Try alternate thumbnail URL before erroring
              const altUrl = `https://drive.google.com/thumbnail?id=${reel.driveId}&sz=w600`;
              if (reel.thumbnailUrl !== altUrl) {
                // Try fallback thumbnail
                const img = new Image();
                img.onload = () => {
                  // Loaded fine
                };
                img.onerror = () => setImgError(true);
              } else {
                setImgError(true);
              }
            }}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 flex flex-col items-center justify-center p-3 text-center space-y-2">
            <Film className="w-8 h-8 text-stone-600" />
            <span className="text-[11px] font-mono text-stone-400 leading-tight">
              {reel.title}
            </span>
          </div>
        )}

        {/* Ambient Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 group-hover:from-black/90 transition-all duration-300" />
      </div>

      {/* Top Badges */}
      <div className="relative z-10 p-2.5 flex items-center justify-between gap-1.5">
        <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono border border-white/10 font-medium truncate max-w-[85%]">
          {reel.tag}
        </span>
        <div className="w-6 h-6 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
          <Play className="w-3 h-3 fill-white ml-0.5" />
        </div>
      </div>

      {/* Center Play Button on Hover */}
      <div className="relative z-10 self-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl">
          <Play className="w-5 h-5 fill-white ml-0.5" />
        </div>
      </div>

      {/* Bottom Title & Details */}
      <div className="relative z-10 p-2.5 sm:p-3 space-y-1">
        <div className="text-[10px] font-mono text-red-300 font-medium">
          {reel.category}
        </div>
        <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug line-clamp-2 drop-shadow-sm group-hover:text-red-200 transition-colors">
          {reel.title}
        </h4>
        <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 pt-0.5">
          <span>9:16 Video</span>
          <span className="text-red-300 opacity-0 group-hover:opacity-100 transition-opacity">
            Watch →
          </span>
        </div>
      </div>
    </motion.div>
  );
};
