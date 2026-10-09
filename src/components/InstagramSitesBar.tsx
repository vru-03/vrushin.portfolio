import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Instagram, Sparkles, CheckCircle2 } from 'lucide-react';

interface InstagramSitesBarProps {
  title?: string;
  subtitle?: string;
  variant?: 'standard' | 'compact' | 'graphic-design';
}

export const instagramSites = [
  {
    name: 'Sunrise Infinity',
    handle: '@sunriseinfinity',
    url: 'https://www.instagram.com/sunriseinfinity/',
    tagline: 'Luxury 3BHK Living & High-Rise Architecture',
    badge: 'Live Site Account',
    followersEstimate: 'Active Community',
    gradient: 'from-amber-500 via-rose-500 to-purple-600',
    borderHover: 'hover:border-amber-400/80',
    bgTint: 'bg-gradient-to-br from-amber-50/60 to-white',
  },
  {
    name: 'Sunrise Homes 88',
    handle: '@sunrisehomes88',
    url: 'https://www.instagram.com/sunrisehomes88/',
    tagline: 'Modern Residences, Handover Milestones & Amenities',
    badge: 'Live Site Account',
    followersEstimate: 'Active Community',
    gradient: 'from-pink-500 via-red-500 to-amber-500',
    borderHover: 'hover:border-rose-400/80',
    bgTint: 'bg-gradient-to-br from-rose-50/60 to-white',
  },
  {
    name: 'Sharnam Happy Homes',
    handle: '@sharmamhappyhomes',
    url: 'https://www.instagram.com/sharmamhappyhomes/',
    tagline: 'Gated Community, Rooftop Sky Deck & Family Living',
    badge: 'Live Site Account',
    followersEstimate: 'Active Community',
    gradient: 'from-purple-500 via-indigo-500 to-pink-500',
    borderHover: 'hover:border-purple-400/80',
    bgTint: 'bg-gradient-to-br from-purple-50/60 to-white',
  },
];

export const InstagramSitesBar: React.FC<InstagramSitesBarProps> = ({
  title = 'Live Managed Instagram Accounts (3 Project Sites)',
  subtitle = 'Published 230+ creatives, 220+ reels, and continuous campaigns live on these official builder channels:',
  variant = 'standard',
}) => {
  return (
    <div className="space-y-3 p-4 sm:p-5 rounded-2xl bg-stone-900 text-white border border-stone-800 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800/80 pb-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white">
              <Instagram className="w-4 h-4" />
            </span>
            <h3 className="text-sm sm:text-base font-bold tracking-tight text-white flex items-center gap-2">
              {title}
            </h3>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 border border-stone-700 text-[11px] font-mono text-stone-300 self-start sm:self-auto shrink-0">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>3 Verified Site Handles</span>
        </div>
      </div>

      {/* 3 Links in One Single Line Side by Side (Grid 3 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        {instagramSites.map((site) => (
          <motion.a
            key={site.handle}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="group relative flex flex-col justify-between p-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 hover:border-stone-500 transition-colors cursor-pointer shadow-xs hover:shadow-md"
          >
            <div className="space-y-2">
              {/* Header with icon, name & external arrow */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-tr ${site.gradient} flex items-center justify-center text-white shadow-xs`}>
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-[13px] text-white group-hover:text-amber-300 transition-colors flex items-center gap-1">
                      <span>{site.name}</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    </div>
                    <div className="text-[11px] font-mono text-stone-400 group-hover:text-stone-300">
                      {site.handle}
                    </div>
                  </div>
                </div>

                <div className="p-1 rounded-md bg-stone-700/60 text-stone-400 group-hover:text-white group-hover:bg-stone-700 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Tagline / Subtitle */}
              <p className="text-[11px] text-stone-300 line-clamp-2 leading-relaxed">
                {site.tagline}
              </p>
            </div>

            {/* Bottom direct button */}
            <div className="pt-2.5 mt-2 border-t border-stone-700/60 flex items-center justify-between text-[10px] font-mono">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Published
              </span>
              <span className="text-stone-400 group-hover:text-white transition-colors underline underline-offset-2">
                Open Instagram ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
