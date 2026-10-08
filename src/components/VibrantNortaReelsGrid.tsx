import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, Sparkles, X, Volume2, Film, Upload, CheckCircle2 } from 'lucide-react';
import { vibrantNortaReels, ReelItem } from '../data/visualGalleriesData';

export const VibrantNortaReelsGrid: React.FC = () => {
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [userCustomImages, setUserCustomImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('vn_custom_images');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleCustomUpload = (reelId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setUserCustomImages((prev) => {
          const updated = { ...prev, [reelId]: dataUrl };
          try {
            localStorage.setItem('vn_custom_images', JSON.stringify(updated));
          } catch {
            // ignore
          }
          return updated;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4 pt-2">
      {/* Header section with stats & explanation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-stone-900 text-white">
              <Film className="w-4 h-4" />
            </span>
            <h3 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight">
              Vibrant Norta — 6 Reel Thumbnails & Video Productions (9:16 Ratio)
            </h3>
          </div>
          <p className="text-xs text-stone-600 pt-0.5">
            27+ videos produced · 423K+ cumulative views · Top performing reel peaked at 59.8K views
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-2.5 py-1 rounded-lg bg-pink-50 border border-pink-200/80 text-pink-700 font-mono text-xs font-semibold">
            6 Vertical Reels (9:16)
          </span>
        </div>
      </div>

      {/* 6 Grid Slots in 9:16 Ratio */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {vibrantNortaReels.map((reel, idx) => {
          const customImg = userCustomImages[reel.id];

          return (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-stone-300 shadow-xs hover:shadow-md transition-all duration-300 bg-stone-950 flex flex-col cursor-pointer"
              onClick={() => setSelectedReel(reel)}
            >
              {/* 9:16 Aspect Ratio Frame */}
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-stone-900 select-none">
                {/* Background Image or Aesthetic Motion Graphic */}
                {customImg ? (
                  <>
                    <img
                      src={customImg}
                      alt={reel.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Center Play Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-lg">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                    {/* Clean hover overlay with single title line */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2.5 z-10 pointer-events-none">
                      <p className="text-[11px] font-medium text-white truncate drop-shadow-sm">
                        {reel.title}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-between p-3">
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${reel.accentGradient} opacity-85 group-hover:opacity-95 transition-opacity duration-300`}
                    >
                      {/* Subtle decorative grid/soundwave elements */}
                      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>

                    {/* Top Overlay Badges */}
                    <div className="relative z-10 flex items-center justify-between gap-1">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-amber-300 border border-white/10 text-[10px] font-mono font-bold">
                        <Eye className="w-2.5 h-2.5 text-amber-400" />
                        {reel.views.split(' ')[0]}
                      </span>
                      <span className="px-1.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-stone-200 border border-white/10 text-[9px] font-mono">
                        {reel.duration}
                      </span>
                    </div>

                    {/* Center Play Button */}
                    <div className="relative z-10 self-center my-auto">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-stone-900 transition-all duration-300 shadow-lg">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Title */}
                    <div className="relative z-10">
                      <p className="text-[11px] font-medium text-white truncate text-center">
                        {reel.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer with Quick Custom Image Upload */}
              <div
                className="p-1.5 bg-stone-900 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="font-mono text-[9px] text-stone-400">Reel #{idx + 1}</span>
                <label className="flex items-center gap-1 text-[9px] text-stone-400 hover:text-white cursor-pointer px-1 py-0.5 rounded hover:bg-stone-800 transition-colors">
                  <Upload className="w-2.5 h-2.5" />
                  <span>{customImg ? 'Replace' : 'Upload'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleCustomUpload(reel.id, e)}
                  />
                </label>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Reel Modal Lightbox */}
      <AnimatePresence>
        {selectedReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl text-white flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-stone-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-pink-400 uppercase font-semibold">
                    Vibrant Norta · 9:16 Reel Production
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {selectedReel.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedReel(null)}
                  className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 overflow-y-auto space-y-4">
                {/* 9:16 Visual Mockup Preview */}
                <div className="relative aspect-[9/16] max-h-72 w-auto mx-auto rounded-xl overflow-hidden bg-stone-950 border border-stone-700 shadow-inner flex flex-col justify-between p-4">
                  {userCustomImages[selectedReel.id] ? (
                    <img
                      src={userCustomImages[selectedReel.id]}
                      alt={selectedReel.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${selectedReel.accentGradient} opacity-90 flex flex-col justify-between p-4`}
                    >
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-black/60 text-amber-300 font-bold">
                          {selectedReel.views}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/60 text-stone-300">
                          {selectedReel.duration}
                        </span>
                      </div>

                      <div className="self-center my-auto">
                        <div className="w-14 h-14 rounded-full bg-white text-stone-950 flex items-center justify-center shadow-xl">
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        </div>
                      </div>

                      <div className="space-y-1 text-left bg-black/60 p-2.5 rounded-lg backdrop-blur-xs">
                        <div className="text-[10px] font-mono text-amber-300 font-bold uppercase">
                          {selectedReel.category}
                        </div>
                        <div className="text-xs font-bold text-white">
                          {selectedReel.title}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description & Production Workflow */}
                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
                    CREATIVE DIRECTION & EDITING SPECS
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {selectedReel.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2 py-0.5 rounded bg-stone-700 text-[11px] font-mono text-emerald-300">
                      Views: {selectedReel.views}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-stone-700 text-[11px] font-mono text-stone-300">
                      Duration: {selectedReel.duration}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-stone-700 text-[11px] font-mono text-amber-300">
                      Software: Premiere Pro & CapCut
                    </span>
                  </div>
                </div>

                {/* Audio track info */}
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-800 text-stone-300 text-xs font-mono">
                  <Volume2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="text-stone-400">Audio:</span>
                  <span className="text-white truncate">{selectedReel.audioTrack}</span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-stone-800 flex items-center justify-between bg-stone-950">
                <label className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-medium cursor-pointer transition-colors text-stone-300 hover:text-white">
                  <Upload className="w-3.5 h-3.5 text-pink-400" />
                  <span>{userCustomImages[selectedReel.id] ? 'Change Thumbnail' : 'Upload Your Reel Cover'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleCustomUpload(selectedReel.id, e)}
                  />
                </label>

                <button
                  onClick={() => setSelectedReel(null)}
                  className="px-4 py-1.5 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 text-xs font-medium transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
