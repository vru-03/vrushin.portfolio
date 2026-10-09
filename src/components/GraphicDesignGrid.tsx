import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ExternalLink, Image as ImageIcon, Sparkles, Upload, X, CheckCircle2, Layers } from 'lucide-react';
import { graphicDesignGallery, GraphicDesignItem } from '../data/visualGalleriesData';

export const GraphicDesignGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GraphicDesignItem | null>(null);
  const [filterBrand, setFilterBrand] = useState<string>('all');
  const [userCustomImages, setUserCustomImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('gd_custom_images');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleCustomUpload = (itemId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setUserCustomImages((prev) => {
          const updated = { ...prev, [itemId]: dataUrl };
          try {
            localStorage.setItem('gd_custom_images', JSON.stringify(updated));
          } catch {
            // ignore if quota exceeded
          }
          return updated;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const sunriseInfinityCount = graphicDesignGallery.filter((i) => i.brand === 'Sunrise Infinity').length;
  const sunriseHomesCount = graphicDesignGallery.filter((i) => i.brand === 'Sunrise Homes').length;
  const sharnamCount = graphicDesignGallery.filter((i) => i.brand === 'Sharnam Happy Homes').length;
  const festivalsCount = graphicDesignGallery.filter((i) => i.category === 'Festival Campaign' || i.category === 'Special Occasion').length;

  const filteredItems = filterBrand === 'all'
    ? graphicDesignGallery
    : filterBrand === 'Festivals'
    ? graphicDesignGallery.filter((item) => item.category === 'Festival Campaign' || item.category === 'Special Occasion')
    : graphicDesignGallery.filter((item) => item.brand === filterBrand);

  const filterTabs = [
    { id: 'all', label: `All Spaces (${graphicDesignGallery.length})` },
    { id: 'Sunrise Infinity', label: `Sunrise Infinity (${sunriseInfinityCount})` },
    { id: 'Sunrise Homes', label: `Sunrise Homes (${sunriseHomesCount})` },
    { id: 'Sharnam Happy Homes', label: `Sharnam Happy Homes (${sharnamCount})` },
    { id: 'Festivals', label: `15+ Festivals (${festivalsCount})` },
  ];

  return (
    <div className="space-y-4 pt-2">
      {/* Header section with count & filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-stone-900 text-white">
              <Layers className="w-4 h-4" />
            </span>
            <h3 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight">
              1:1 Creative Visual Spaces ({graphicDesignGallery.length} Published Posts)
            </h3>
          </div>
          <p className="text-xs text-stone-600 pt-0.5">
            Sunrise Infinity ({sunriseInfinityCount} spaces) · Sunrise Homes ({sunriseHomesCount} spaces) · Sharnam Happy Homes ({sharnamCount} spaces) · 1080×1080 px
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200/80 text-xs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterBrand(tab.id)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap text-xs ${
                filterBrand === tab.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 15 Grid Slots in 1:1 Aspect Ratio (Square) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {filteredItems.map((item, idx) => {
          const displayImg = userCustomImages[item.id] || item.placeholderImageUrl;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="group relative rounded-2xl overflow-hidden border border-stone-300 shadow-xs hover:shadow-md transition-all duration-300 bg-stone-950 flex flex-col cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* 1:1 Aspect Ratio Frame */}
              <div className="relative aspect-square w-full overflow-hidden bg-stone-900 select-none">
                {/* Background Artwork or Custom Uploaded Image */}
                {displayImg ? (
                  <>
                    <img
                      src={displayImg}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Clean subtle hover overlay: only reveals minimal title on hover so artwork is 100% visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2.5 z-10 pointer-events-none">
                      <p className="text-[11px] font-medium text-white truncate drop-shadow-sm">
                        {item.title}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className={`absolute inset-0 ${item.colorScheme.bg} transition-all duration-300 group-hover:scale-105 flex flex-col justify-between p-2.5`}>
                    {/* Subtle grid pattern & architectural overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px] opacity-15" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top spacer */}
                    <div className="relative z-10" />

                    {/* Center Visual Cue */}
                    <div className="relative z-10 self-center my-auto text-center opacity-85 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xs border border-white/20 mx-auto flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xs mb-1">
                        <ImageIcon className="w-4 h-4" />
                      </div>
                      <div className="text-[10px] font-mono text-stone-300 font-medium tracking-wide">
                        {item.brand}
                      </div>
                    </div>

                    {/* Bottom: Single clean line title */}
                    <div className="relative z-10">
                      <p className="text-[11px] font-medium text-white/90 truncate text-center">
                        {item.title}
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
                <span className="font-mono text-[9px] text-stone-400">Post #{idx + 1}</span>
                <label className="flex items-center gap-1 text-[9px] text-stone-400 hover:text-white cursor-pointer px-1.5 py-0.5 rounded hover:bg-stone-800 transition-colors">
                  <Upload className="w-2.5 h-2.5" />
                  <span>{displayImg ? 'Replace' : 'Upload'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleCustomUpload(item.id, e)}
                  />
                </label>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Creative Detail Modal / Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl text-white flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-stone-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-amber-400 uppercase font-semibold flex items-center gap-1.5">
                    <span>{selectedItem.brand}</span>
                    <span>·</span>
                    <span>1:1 Square Feed Creative</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 overflow-y-auto space-y-4">
                {/* 1:1 Aspect Ratio Full Preview */}
                <div className="relative aspect-square max-h-72 w-auto mx-auto rounded-xl overflow-hidden bg-stone-950 border border-stone-700 shadow-inner flex flex-col justify-between p-4">
                  {(userCustomImages[selectedItem.id] || selectedItem.placeholderImageUrl) ? (
                    <img
                      src={userCustomImages[selectedItem.id] || selectedItem.placeholderImageUrl}
                      alt={selectedItem.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`absolute inset-0 ${selectedItem.colorScheme.bg} p-5 flex flex-col justify-between`}>
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className={`px-2 py-0.5 rounded border ${selectedItem.colorScheme.badgeBg}`}>
                          {selectedItem.category}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/60 text-stone-300">
                          1080×1080 px
                        </span>
                      </div>

                      <div className="text-center my-auto space-y-1">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mx-auto flex items-center justify-center text-white shadow-lg">
                          <ImageIcon className="w-6 h-6" />
                        </div>
                        <div className="text-sm font-bold text-white">
                          {selectedItem.brand}
                        </div>
                        <div className="text-xs text-amber-300 font-mono">
                          {selectedItem.occasionOrTheme}
                        </div>
                      </div>

                      <div className="bg-black/60 p-2.5 rounded-lg backdrop-blur-xs text-left">
                        <div className="text-xs font-semibold text-white">
                          {selectedItem.title}
                        </div>
                        <div className="text-[10px] text-stone-300 font-mono">
                          {selectedItem.brandHandle}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Design Narrative & Specifications */}
                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
                    CREATIVE RATIONALE & MARKETING INTENT
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {selectedItem.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2 py-0.5 rounded bg-stone-700 text-[11px] font-mono text-amber-300">
                      Brand: {selectedItem.brand}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-stone-700 text-[11px] font-mono text-emerald-300">
                      Format: {selectedItem.specs}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-stone-700 text-[11px] font-mono text-cyan-300">
                      Theme: {selectedItem.occasionOrTheme}
                    </span>
                  </div>
                </div>

                {/* Direct Link to Official Instagram Account */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-stone-800 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Published on {selectedItem.brand}</span>
                      <div className="text-[11px] font-mono text-stone-400">{selectedItem.brandHandle}</div>
                    </div>
                  </div>
                  <a
                    href={selectedItem.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-white font-medium text-xs transition-colors"
                  >
                    <span>View Page</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Modal Footer with upload option */}
              <div className="p-4 border-t border-stone-800 flex items-center justify-between bg-stone-950">
                <label className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-medium cursor-pointer transition-colors text-stone-300 hover:text-white">
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span>{userCustomImages[selectedItem.id] ? 'Change Graphic Image' : 'Upload Your Design Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleCustomUpload(selectedItem.id, e)}
                  />
                </label>

                <button
                  onClick={() => setSelectedItem(null)}
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
