import React, { useState } from 'react';
import { WorkCategory } from '../types/portfolio';
import {
  socialMediaSoftwareStack,
  freelanceSoftwareStack,
  graphicDesignSoftwareStack,
  SoftwareTool,
} from '../data/softwareStackData';
import { Sparkles, Layers, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SoftwareStackShowcaseProps {
  activeTab: WorkCategory;
}

export const SoftwareStackShowcase: React.FC<SoftwareStackShowcaseProps> = ({ activeTab }) => {
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Determine tools to show based on active tab
  const getToolsForTab = (): SoftwareTool[] => {
    if (activeTab === 'social-media') {
      return socialMediaSoftwareStack;
    }
    if (activeTab === 'freelancing') {
      return freelanceSoftwareStack;
    }
    if (activeTab === 'graphic-design') {
      return graphicDesignSoftwareStack;
    }
    // For 'all'
    return [...socialMediaSoftwareStack, ...graphicDesignSoftwareStack, ...freelanceSoftwareStack];
  };

  const currentTools = getToolsForTab();

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(currentTools.map((t) => t.category)))];

  const filteredTools =
    categoryFilter === 'all'
      ? currentTools
      : currentTools.filter((t) => t.category === categoryFilter);

  const activeTool = currentTools.find((t) => t.id === selectedToolId) || null;

  return (
    <div className="space-y-4 pt-1 pb-4">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-stone-900 text-stone-100">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-900 font-mono">
              CREATIVE SOFTWARE & TOOLS APPLIED
            </h3>
          </div>
          <p className="text-xs text-stone-500">
            {activeTab === 'social-media'
              ? 'Official software stack powering 4 builder sites, 230+ creatives, 220+ reels & 12+ ad campaigns'
              : activeTab === 'freelancing'
              ? 'Video post-production, technical & research software utilized across Vibrant Norta and digital deliverables'
              : activeTab === 'graphic-design'
              ? 'Creative software and AI composition tools applied across 220+ social creatives and 15+ festival campaigns'
              : 'Complete creative & technical software suite across executive tenure and freelance practice'}
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`text-[11px] px-2.5 py-1 rounded-lg font-mono transition-all cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-stone-900 text-stone-50 font-medium shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
              }`}
            >
              {cat === 'all' ? 'All Software' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Software Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredTools.map((tool, idx) => {
          const isSelected = selectedToolId === tool.id;

          return (
            <motion.div
              key={`${tool.id}-${idx}`}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              onClick={() => setSelectedToolId(isSelected ? null : tool.id)}
              className={`group p-3.5 rounded-xl border transition-all cursor-pointer relative overflow-hidden bg-white ${
                isSelected
                  ? 'border-stone-900 ring-1 ring-stone-900 shadow-sm'
                  : 'border-stone-200/90 hover:border-stone-300 hover:shadow-xs'
              }`}
            >
              {/* Top Row: Icon + Name + Category */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-stone-200/60 shadow-xs transition-transform group-hover:scale-105 ${tool.accentBg}`}
                  >
                    {tool.icon}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-stone-900 leading-snug group-hover:text-stone-950 flex items-center gap-1.5">
                      {tool.name}
                    </h4>
                    <span className="text-[10px] font-mono text-stone-400 font-medium">
                      {tool.category}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-stone-400 group-hover:text-stone-600 transition-colors">
                  {isSelected ? 'Close' : 'Details'}
                </span>
              </div>

              {/* Deliverable Badge */}
              <div className="mt-3 pt-2.5 border-t border-stone-100">
                <div className="flex items-center gap-1.5 text-stone-800 text-[11px] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="line-clamp-1">{tool.deliverablesSummary}</span>
                </div>
              </div>

              {/* Creative Application Context snippet */}
              <p className="mt-1.5 text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                {tool.creativeRole}
              </p>

              {/* Expand indicator button */}
              <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-stone-400 pt-1 border-t border-dashed border-stone-100">
                <span className="text-stone-400 group-hover:text-stone-700 transition-colors">
                  {tool.badge}
                </span>
                <ChevronRight
                  className={`w-3 h-3 text-stone-400 transition-transform ${
                    isSelected ? 'rotate-90 text-stone-900' : 'group-hover:translate-x-0.5'
                  }`}
                />
              </div>

              {/* Expanded details drawer inside card */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 pt-3 border-t border-stone-200 text-xs text-stone-700 space-y-2 bg-stone-50/70 -mx-3.5 -mb-3.5 p-3.5"
                  >
                    <div className="flex items-center gap-1.5 text-stone-900 font-medium text-[11px]">
                      <Info className="w-3.5 h-3.5 text-stone-600" />
                      <span>Production Workflow & Application</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-stone-600">
                      {tool.creativeRole}
                    </p>
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-stone-500 border-t border-stone-200/60">
                      <span>Role Scope: {tool.badge}</span>
                      <span className="text-emerald-700 font-semibold">Verified In Practice</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
