import React, { useState, useEffect } from 'react';
import { WorkCategory, WorkProject } from '../types/portfolio';
import { workCategories, workProjectsList } from '../data/workData';
import { SoftwareStackShowcase } from './SoftwareStackShowcase';
import { ToolLogoBadge, renderToolIcon } from './ToolLogoBadge';
import { InstagramSitesBar } from './InstagramSitesBar';
import { VibrantNortaReelsGrid } from './VibrantNortaReelsGrid';
import { GraphicDesignGrid } from './GraphicDesignGrid';
import { SelfEditingReelsGrid } from './SelfEditingReelsGrid';
import {
  Layers,
  Share2,
  Briefcase,
  ArrowRight,
  X,
  CheckCircle2,
  FolderOpen,
  Building2,
  Calendar,
  Sparkles,
  TrendingUp,
  Award,
  Palette,
  ExternalLink,
  Film,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WorkView: React.FC = () => {
  // Default to social-media tab as requested
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory>('social-media');
  const [activeProjectModal, setActiveProjectModal] = useState<WorkProject | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProjectModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter projects based on selected tab
  const filteredProjects =
    selectedCategory === 'all'
      ? workProjectsList
      : workProjectsList.filter((p) => p.category === selectedCategory);

  const currentCategoryMeta =
    workCategories.find((c) => c.id === selectedCategory) || workCategories[0];

  const getCategoryIcon = (catId: WorkCategory) => {
    switch (catId) {
      case 'social-media':
        return <Share2 className="w-4 h-4" />;
      case 'freelancing':
        return <Briefcase className="w-4 h-4" />;
      case 'graphic-design':
        return <Palette className="w-4 h-4" />;
      case 'self-editing':
        return <Film className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-mono">
          <FolderOpen className="w-3.5 h-3.5 text-stone-600" />
          <span>Professional Experience & Digital Practice</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
          professional work, production & digital deliverables
        </h1>

        <p className="text-stone-600 text-[15px] sm:text-base leading-relaxed">
          Detailed breakdown of executive digital marketing leadership at{' '}
          <strong className="text-stone-900 font-semibold">Shiv Shakti Developers Builders Pvt Ltd.</strong> (4 sites, 230+ creatives, 220+ reels),{' '}
          <strong className="text-stone-900 font-semibold">Freelance Social Media & Video Editing</strong> at Vibrant Norta (423K+ views, 27+ reels),{' '}
          <strong className="text-stone-900 font-semibold">Graphic Designing</strong> across 3 real estate brands with 15+ festival campaigns, and{' '}
          <strong className="text-stone-900 font-semibold">Self-Edited Reels Archive</strong> (60+ videos in Premiere Pro & CapCut).
        </p>

        {/* Global Key Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {currentCategoryMeta.stats.slice(0, 4).map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 + idx * 0.04 }}
              className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80"
            >
              <div className="text-[10px] font-mono text-stone-400 uppercase font-medium">{stat.label}</div>
              <div className="text-sm sm:text-base font-bold font-mono text-stone-900 pt-0.5">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3 Focused Tabs (Segmented Controls) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-4 pt-2"
      >
        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
          <h2 className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
            EXPLORE RESUME TABS
          </h2>
          <span className="text-xs text-stone-500 font-mono">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Case Study' : 'Case Studies'}
          </span>
        </div>

        {/* Horizontal tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-100/90 rounded-2xl border border-stone-200/80 w-fit max-w-full">
          {workCategories.map((cat) => {
            const count =
              cat.id === 'all'
                ? workProjectsList.length
                : workProjectsList.filter((p) => p.category === cat.id).length;

            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <span className={isActive ? 'text-stone-200' : 'text-stone-500'}>
                  {getCategoryIcon(cat.id)}
                </span>
                <span className="font-semibold">{cat.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-stone-800 text-stone-300' : 'bg-stone-200 text-stone-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Role Hero Card for Selected Tab */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="p-5 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
              <Building2 className="w-4 h-4 text-stone-600" />
              <span className="font-semibold text-stone-800">{currentCategoryMeta.companyOrContext}</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-stone-500">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                {currentCategoryMeta.period}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
              {currentCategoryMeta.roleTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">
              {currentCategoryMeta.tagline}
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-mono font-medium self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active & In Production</span>
          </div>
        </div>

        {/* Core Resume Accomplishments & Scope */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
            OFFICIAL RESUME SCOPE & DELIVERABLES
          </div>

          {/* TAB 1: SOCIAL MEDIA EXECUTIVE (SHIV SHAKTI) */}
          {selectedCategory === 'social-media' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <motion.div
                whileHover={{ scale: 1.015, y: -2 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="p-3.5 rounded-xl bg-white border border-stone-200/80 space-y-1 hover:border-stone-300 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs">
                  <span className="text-stone-400 font-mono">01.</span>
                  <span>4 Site Accounts & 3 Social Platforms</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Managed digital marketing operations across 4 distinct site accounts and 3 social platforms (Instagram, Facebook, LinkedIn), driving synchronized branding and buyer lead acquisition via Buffer and Meta Business Suite.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.015, y: -2 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="p-3.5 rounded-xl bg-white border border-stone-200/80 space-y-1 hover:border-stone-300 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs">
                  <span className="text-stone-400 font-mono">02.</span>
                  <span>230+ Creatives & 220+ Posts/Reels</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Created 230+ promotional creatives (hoardings, brochures, launch banners in Photoshop & Canva) and 220+ dynamic posts/reels for property & project promotion with video post-production in Premiere Pro & CapCut.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.015, y: -2 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="p-3.5 rounded-xl bg-white border border-stone-200/80 space-y-1 hover:border-stone-300 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs">
                  <span className="text-stone-400 font-mono">03.</span>
                  <span>12+ Facebook & Instagram Ad Campaigns</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Executed 12+ targeted Facebook & Instagram ad campaigns from strategy to launch. Managed geo-radius targeting, creative variant A/B testing, and lead routing into HubSpot CRM to optimize Cost-Per-Lead (CPL).
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.015, y: -2 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="p-3.5 rounded-xl bg-white border border-stone-200/80 space-y-1 hover:border-stone-300 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs">
                  <span className="text-stone-400 font-mono">04.</span>
                  <span>End-to-End Content, Paid Ads & Operations</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Owned the complete workflow: content strategy, graphic design, video post-production (Premiere Pro & CapCut), paid advertising campaigns, and social media community management with Buffer & HubSpot.
                </p>
              </motion.div>
            </div>
          )}

          {/* TAB 2: FREELANCE PROJECTS (VIBRANT NORTA PRIORITY) */}
          {selectedCategory === 'freelancing' && (
            <div className="space-y-3 pt-1">
              {/* Vibrant Norta Spotlight Card - High Power & Priority */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-pink-50 via-purple-50 to-stone-50 border border-purple-200/80 space-y-3 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-purple-200/60 pb-2.5">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-purple-700 font-bold">
                      FREELANCE SOCIAL MEDIA & DIGITAL MARKETING
                    </div>
                    <div className="text-sm sm:text-base font-bold text-stone-900">
                      Vibrant Norta — Freelance Social Media Manager & Video Editor
                    </div>
                    <div className="text-xs font-medium text-stone-600">
                      Social Media Management | Content Strategy | Video Editing
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-purple-900 text-purple-100 font-mono text-xs font-bold">
                      423K+ Cumulative Views
                    </span>
                    <span className="px-2 py-1 rounded-lg bg-pink-100 text-pink-800 font-mono text-xs font-semibold">
                      Top 59.8K Views
                    </span>
                  </div>
                </div>

                {/* The 5 Exact Resume Bullets */}
                <ul className="space-y-2 text-xs sm:text-[13px] text-stone-700 pl-1">
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple-600 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Managed the brand’s social media presence, developing content concepts aligned with its brand identity, events, and target audience.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple-600 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Conceptualized and edited 27+ short-form videos/reels, generating 423K+ cumulative views, with top-performing content reaching 59.8K views.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple-600 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Executed video content from idea to final edit, including creative direction, concept development, visual storytelling, editing, and presentation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple-600 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Developed original video ideas for event promotions, artist features, behind-the-scenes content, and audience engagement.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple-600 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Independently handled the complete creative workflow, from identifying content opportunities to delivering publish-ready content.</span>
                  </li>
                </ul>
              </div>

              {/* Minimized Secondary Practice Summary Card */}
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="space-y-0.5">
                  <div className="font-semibold text-stone-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                    <span>Secondary Digital Practice: Business & Academic Projects</span>
                  </div>
                  <p className="text-stone-500 text-[11px] leading-relaxed">
                    Contributed to 15+ business & academic projects (research and digital deliverables), completed 17+ research studies, and developed 12+ interactive websites and digital products from ideation to delivery.
                  </p>
                </div>
                <span className="px-2 py-1 rounded bg-stone-100 text-stone-600 font-mono text-[10px] shrink-0 self-start sm:self-auto">
                  15+ Projects · 12+ Websites
                </span>
              </div>
            </div>
          )}

          {/* TAB 3: GRAPHIC DESIGNING */}
          {selectedCategory === 'graphic-design' && (
            <div className="space-y-3 pt-1">
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-50/70 via-stone-50 to-orange-50/60 border border-amber-200/80 space-y-3 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200/60 pb-2.5">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold">
                      GRAPHIC DESIGN & SOCIAL MEDIA CREATIVE
                    </div>
                    <div className="text-sm sm:text-base font-bold text-stone-900">
                      Graphic Designer — Real Estate & Brand Social Media
                    </div>
                    <div className="text-xs font-medium text-stone-600">
                      Graphic Design | Social Media Creatives | Brand Design | Visual Communication
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-900 text-amber-100 font-mono text-xs font-bold">
                      220+ Social Creatives
                    </span>
                    <span className="px-2 py-1 rounded-lg bg-orange-100 text-orange-800 font-mono text-xs font-semibold">
                      15+ Festivals
                    </span>
                  </div>
                </div>

                {/* The 6 Exact Resume Bullets */}
                <ul className="space-y-2 text-xs sm:text-[13px] text-stone-700 pl-1">
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Designed 220+ social media creatives across 3 real-estate brands — Sunrise Infinity, Sunrise Homes, and Sharnam Happy Homes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Created promotional designs for residential projects, property features, amenities, lifestyle campaigns, project launches, and lead-generation content.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Developed creative campaigns for 15+ festivals and special occasions, including Independence Day, Janmashtami, Raksha Bandhan, Ganesh Chaturthi, Rath Yatra, Friendship Day, Father's Day, and Yoga Day.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Created AI-assisted visual compositions, combining generated imagery, typography, layouts, branding elements, and marketing messaging into polished, publish-ready designs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Maintained consistent brand identity, typography, visual hierarchy, composition, and messaging across multiple client accounts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Translated real-estate offerings into visually engaging, audience-focused marketing creatives designed for social media communication and property promotion.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: SELF-EDITED REELS (GOOGLE DRIVE ARCHIVE) */}
          {selectedCategory === 'self-editing' && (
            <div className="space-y-3 pt-1">
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-red-50/80 via-stone-50 to-rose-50/70 border border-red-200/80 space-y-3 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-red-200/60 pb-2.5">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-red-800 font-bold">
                      INDEPENDENT VIDEO POST-PRODUCTION & STORYTELLING
                    </div>
                    <div className="text-sm sm:text-base font-bold text-stone-900">
                      Self-Edited Reels & Creative Video Archive
                    </div>
                    <div className="text-xs font-medium text-stone-600">
                      Spiritual & Sacred Documentaries | Travel Vlogs | Festival Series | Creative Concepts
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-red-900 text-red-100 font-mono text-xs font-bold">
                      60+ Self-Edited Reels
                    </span>
                    <span className="px-2 py-1 rounded-lg bg-rose-100 text-rose-800 font-mono text-xs font-semibold">
                      9:16 Vertical
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-[13px] text-stone-700 pl-1">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Independently conceptualized, shot, and edited 60+ vertical reels and short-form videos organized in the Google Drive <code className="text-red-800 bg-red-100/80 px-1 py-0.5 rounded text-[11px]">self_video_edits</code> archive.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Produced sacred heritage documentaries capturing Kashi 84 Ghats, Mahakumbh, Bhasma Aarti, Vrindavan Holi, Kailash Temple, and Tirupati Balaji.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Created a 12-part Ganesh Chaturthi series including Bappa Eyes, 56 Bhog, Visarjan, and emotional farewell visual narratives.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Edited travel and trekking narratives including Christmas in Paris, Hamta Pass Himalayan Trek at 14,000 Feet, and Mumbai street vlogs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Engineered frame-accurate audio sync, kinetic transitions, atmospheric color grading, and dynamic sound design using Premiere Pro & CapCut Desktop.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-700 font-bold font-mono select-none mt-0.5">•</span>
                    <span>Maintained consistent 9:16 vertical mobile optimization engineered for high viewer retention and algorithmic reach across social channels.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 5: ALL EXPERIENCE */}
          {selectedCategory === 'all' && (
            <div className="p-4 rounded-xl bg-white border border-stone-200/80 space-y-2">
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Combining executive digital marketing leadership at Shiv Shakti Developers Builders Pvt Ltd. (230+ creatives, 220+ reels, 12+ Meta ad campaigns), viral video editing at Vibrant Norta (423K+ views, 27+ reels), and comprehensive graphic design across 3 real estate brands.
              </p>
            </div>
          )}
        </div>

        {/* Quick Capabilities Pills */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-stone-200/60">
          {currentCategoryMeta.capabilities.map((cap) => (
            <span
              key={cap}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 text-xs font-mono"
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>{cap}</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* CONTEXTUAL INSTAGRAM SITES BAR (RIGHT BEFORE TOOLS & CREATIVE SECTION) */}
      {/* User instruction: "also give instagram links somewhere on top please not in case study only maybe add right before creative software & toold applied tab it shouldl be there just 3 links in one line one beside one" */}
      {(selectedCategory === 'social-media' || selectedCategory === 'all') && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <InstagramSitesBar
            title="Live Managed Instagram Accounts (3 Builder Sites)"
            subtitle="Published 230+ creatives, 220+ reels, and active paid ad campaigns live on these official channels:"
          />
        </motion.div>
      )}

      {/* CONTEXTUAL SHOWCASE FOR FREELANCE TAB: 6 REELS IN 9:16 RATIO */}
      {/* User instruction: "and same for that navrang norta part but on that 6 9:16 ratio as its reels thumbhnail" */}
      {(selectedCategory === 'freelancing' || selectedCategory === 'all') && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <VibrantNortaReelsGrid />
        </motion.div>
      )}

      {/* CONTEXTUAL SHOWCASE FOR GRAPHIC DESIGNING TAB: 3 INSTAGRAM LINKS & 15 1:1 RATIO SPACES */}
      {/* User instruction: "and in this tab again add those 3 instagram handles as i have posted all of this there only. also i will give you some pics or create some space to put visuals designs and post of those on the website so create like 14-15 space on this page witha 1;1 ratio" */}
      {(selectedCategory === 'graphic-design' || selectedCategory === 'all') && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="space-y-6"
        >
          <InstagramSitesBar
            title="Published Across 3 Real Estate Instagram Accounts"
            subtitle="Designed 220+ creatives and 15+ festival campaigns published live on these 3 builder accounts:"
          />
          <GraphicDesignGrid />
        </motion.div>
      )}

      {/* CONTEXTUAL SHOWCASE FOR SELF-EDITED REELS TAB: 60+ 9:16 REELS GRID WITH LIVE STREAMING */}
      {(selectedCategory === 'self-editing' || selectedCategory === 'all') && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <SelfEditingReelsGrid />
        </motion.div>
      )}

      {/* CREATIVE SOFTWARE & TOOLS APPLIED SECTION (WITH LOGOS) */}
      <SoftwareStackShowcase activeTab={selectedCategory} />

      {/* Projects Grid for this tab */}
      {/* User instruction: "why 4 DETAILED WORK CASES & VERIFIED DELIVERABLES and all have almost same visual and also too much confusing so make it clear and 2 at max" */}
      <div className="space-y-6 pt-2">
        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
          <h2 className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
            DETAILED WORK CASES & VERIFIED DELIVERABLES
          </h2>
          <span className="text-xs text-stone-500 font-mono">Click card for full case study</span>
        </div>

        <div
          className={
            filteredProjects.length === 1
              ? 'grid grid-cols-1 gap-6 max-w-4xl mx-auto'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6'
          }
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenCaseStudy={() => setActiveProjectModal(project)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <CaseStudyModal
            project={activeProjectModal}
            onClose={() => setActiveProjectModal(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// PROJECT CARD COMPONENT
// ==========================================
interface ProjectCardProps {
  project: WorkProject;
  index: number;
  onOpenCaseStudy: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenCaseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.015, y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onOpenCaseStudy}
      className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 hover:border-stone-400/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer"
    >
      <div className="space-y-3.5">
        {/* Top Badges & Period */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 font-semibold uppercase tracking-wider">
            {project.visualTheme.badgeLabel}
          </span>
          <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-stone-400" />
            {project.period}
          </span>
        </div>

        {/* Title & Client */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-stone-500 font-medium">
            {project.client} · <span className="text-stone-700">{project.role}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-stone-950 transition-colors leading-snug">
            {project.title}
          </h3>
        </div>

        {/* Headline Description */}
        <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
          {project.headline}
        </p>

        {/* Bespoke Visual Frame */}
        <VisualRepresentationFrame project={project} />

        {/* Impact Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {project.impactMetrics.map((m) => (
            <div
              key={m.label}
              className="p-2 sm:p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-center"
            >
              <div className="text-[9px] sm:text-[10px] font-mono text-stone-400 uppercase truncate">
                {m.label}
              </div>
              <div className="text-xs sm:text-sm font-bold font-mono text-stone-900 pt-0.5 truncate">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-1.5 pt-1">
          <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
            KEY DELIVERABLES & IMPACT
          </div>
          <ul className="space-y-1 text-xs text-stone-600">
            {project.deliverables.slice(0, 3).map((item, dIdx) => (
              <li key={dIdx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Live Instagram Links (if present) */}
        {project.socialLinks && project.socialLinks.length > 0 && (
          <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-mono text-stone-400 uppercase mr-1">Channels:</span>
            {project.socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 text-[10px] font-mono transition-colors"
              >
                <span>{link.label}</span>
                <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Footer: Software Logos & Case Study CTA */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
        {/* Software badges with logos */}
        <div className="flex flex-wrap items-center gap-1.5 max-w-[70%]">
          {project.tools.slice(0, 3).map((t) => (
            <ToolLogoBadge key={t} name={t} size="sm" />
          ))}
          {project.tools.length > 3 && (
            <span className="px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-500 text-[10px] font-mono">
              +{project.tools.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={onOpenCaseStudy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-mono font-medium hover:bg-stone-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};

// ==========================================
// BESPOKE VISUAL REPRESENTATION FRAME
// ==========================================
const VisualRepresentationFrame: React.FC<{ project: WorkProject }> = ({ project }) => {
  // Case 1: Shiv Shakti 4-Site Digital Architecture & Multi-Platform Management (Overall Deliverables)
  if (
    project.id === 'ss-executive-overall-deliverables' ||
    project.id === 'ss-multi-site-operations' ||
    project.id === 'ss-campaigns-and-paid-ads'
  ) {
    return (
      <div className="h-32 sm:h-36 rounded-xl bg-gradient-to-br from-stone-950 via-blue-950/50 to-stone-900 text-white p-3.5 flex flex-col justify-between overflow-hidden relative border border-blue-900/50 shadow-inner">
        <div className="flex items-center justify-between text-[10px] font-mono text-stone-300">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>4-SITE REAL ESTATE DIGITAL OPERATIONS</span>
          </div>
          <span className="text-amber-400 font-semibold">BUFFER · HUBSPOT · META ADS</span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center py-1">
          <div className="bg-stone-900/90 p-2 rounded-lg border border-stone-800/80">
            <div className="text-[9px] font-mono text-stone-400">SITE ACCOUNTS</div>
            <div className="text-xs font-bold text-amber-400 font-mono pt-0.5">4 Sites</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-stone-800/80">
            <div className="text-[9px] font-mono text-stone-400">CREATIVES</div>
            <div className="text-xs font-bold text-cyan-400 font-mono pt-0.5">230+ Assets</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-stone-800/80">
            <div className="text-[9px] font-mono text-stone-400">POSTS & REELS</div>
            <div className="text-xs font-bold text-emerald-400 font-mono pt-0.5">220+ Videos</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-stone-800/80">
            <div className="text-[9px] font-mono text-stone-400">META ADS</div>
            <div className="text-xs font-bold text-violet-400 font-mono pt-0.5">12+ Launched</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono">
          <span>SUNRISE INFINITY · SUNRISE HOMES 88 · SHARNAM HAPPY HOMES</span>
          <span className="text-emerald-400 font-semibold">100% CADENCE</span>
        </div>
      </div>
    );
  }

  // Case 3: Vibrant Norta Viral Project Frame
  if (project.id === 'vibrant-norta-social-media') {
    return (
      <div className="h-32 sm:h-36 rounded-xl bg-gradient-to-br from-stone-950 via-purple-950/70 to-stone-900 text-white p-3.5 flex flex-col justify-between overflow-hidden relative border border-purple-800/60 shadow-inner">
        <div className="flex items-center justify-between text-[10px] font-mono text-purple-300">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-400 inline-block animate-pulse" />
            <span>VIBRANT NORTA · FREELANCE SOCIAL & VIDEO</span>
          </div>
          <span className="text-pink-300 font-semibold">423K+ VIEWS</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center py-1">
          <div className="bg-stone-900/90 p-2 rounded-lg border border-purple-800/50">
            <div className="text-[9px] font-mono text-purple-300">TOTAL VIEWS</div>
            <div className="text-xs font-bold text-pink-400 font-mono pt-0.5">423K+ Views</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-purple-800/50">
            <div className="text-[9px] font-mono text-purple-300">SHORT-FORM REELS</div>
            <div className="text-xs font-bold text-amber-300 font-mono pt-0.5">27+ Produced</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-purple-800/50">
            <div className="text-[9px] font-mono text-purple-300">PEAK REEL</div>
            <div className="text-xs font-bold text-emerald-400 font-mono pt-0.5">59.8K Views</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono">
          <span>POST-PRODUCTION: PREMIERE PRO · CAPCUT · SOUND DESIGN</span>
          <span className="text-pink-400 font-semibold">VIRAL TRACTION</span>
        </div>
      </div>
    );
  }

  // Case 4: Graphic Design Overall (220+ Creatives, 15+ Festivals, AI Compositions & 15 1:1 Spaces)
  if (
    project.id === 'gd-real-estate-brand-creatives-overall' ||
    project.id === 'gd-real-estate-brand-creatives' ||
    project.id === 'gd-festivals-and-ai-compositions'
  ) {
    return (
      <div className="h-32 sm:h-36 rounded-xl bg-gradient-to-br from-stone-950 via-amber-950/60 to-stone-900 text-white p-3.5 flex flex-col justify-between overflow-hidden relative border border-amber-800/60 shadow-inner">
        <div className="flex items-center justify-between text-[10px] font-mono text-amber-300">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse" />
            <span>220+ REAL ESTATE CREATIVES & 15+ FESTIVALS</span>
          </div>
          <span className="text-emerald-400 font-semibold">PHOTOSHOP · CANVA · AI FUSION</span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center py-1">
          <div className="bg-stone-900/90 p-2 rounded-lg border border-amber-800/40">
            <div className="text-[9px] font-mono text-amber-300">CREATIVES</div>
            <div className="text-xs font-bold text-amber-400 font-mono pt-0.5">220+ Designed</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-amber-800/40">
            <div className="text-[9px] font-mono text-amber-300">BRANDS</div>
            <div className="text-xs font-bold text-cyan-400 font-mono pt-0.5">3 Accounts</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-amber-800/40">
            <div className="text-[9px] font-mono text-amber-300">FESTIVALS</div>
            <div className="text-xs font-bold text-orange-400 font-mono pt-0.5">15+ Occasions</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-amber-800/40">
            <div className="text-[9px] font-mono text-amber-300">1:1 SPACES</div>
            <div className="text-xs font-bold text-emerald-400 font-mono pt-0.5">15 Post Slots</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono">
          <span>SUNRISE INFINITY · SUNRISE HOMES 88 · SHARNAM HAPPY HOMES</span>
          <span className="text-amber-400 font-semibold">100% BRAND COHESION</span>
        </div>
      </div>
    );
  }

  // Case 4: Self-Edited Reels & Video Editing Archive (Google Drive)
  if (
    project.id === 'self-edited-reels-archive' ||
    project.category === 'self-editing'
  ) {
    return (
      <div className="h-32 sm:h-36 rounded-xl bg-gradient-to-br from-stone-950 via-red-950/40 to-stone-900 text-white p-3.5 flex flex-col justify-between overflow-hidden relative border border-red-900/50 shadow-inner">
        <div className="flex items-center justify-between text-[10px] font-mono text-red-300">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
            <span>SELF-EDITED REELS & CINEMATIC POST-PRODUCTION</span>
          </div>
          <span className="text-amber-400 font-semibold">PREMIERE PRO · CAPCUT · 9:16</span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center py-1">
          <div className="bg-stone-900/90 p-2 rounded-lg border border-red-800/40">
            <div className="text-[9px] font-mono text-red-300">REELS</div>
            <div className="text-xs font-bold text-red-400 font-mono pt-0.5">60+ Produced</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-red-800/40">
            <div className="text-[9px] font-mono text-red-300">RATIO</div>
            <div className="text-xs font-bold text-cyan-400 font-mono pt-0.5">9:16 Vertical</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-red-800/40">
            <div className="text-[9px] font-mono text-red-300">SACRED/TRAVEL</div>
            <div className="text-xs font-bold text-amber-400 font-mono pt-0.5">34 Films</div>
          </div>
          <div className="bg-stone-900/90 p-2 rounded-lg border border-red-800/40">
            <div className="text-[9px] font-mono text-red-300">GANPATI/CONCEPTS</div>
            <div className="text-xs font-bold text-emerald-400 font-mono pt-0.5">29 Edits</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono">
          <span>KASHI · MAHAKUMBH · PARIS · HAMTA PASS · GANPATI EDITS</span>
          <span className="text-red-400 font-semibold">100% INDEPENDENT PRODUCTION</span>
        </div>
      </div>
    );
  }

  // Secondary Practice Frame
  return (
    <div className="h-32 sm:h-36 rounded-xl bg-stone-900 text-white p-3.5 flex flex-col justify-between overflow-hidden relative border border-stone-800">
      <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse" />
          <span>SECONDARY DIGITAL PRACTICE</span>
        </div>
        <span>JUNE 2024 — PRESENT</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center py-1">
        <div className="bg-stone-800/90 p-2 rounded-lg border border-stone-700/60">
          <div className="text-[9px] font-mono text-stone-400">BUSINESS PROJECTS</div>
          <div className="text-xs font-bold text-amber-400 font-mono pt-0.5">15+ Engagements</div>
        </div>
        <div className="bg-stone-800/90 p-2 rounded-lg border border-stone-700/60">
          <div className="text-[9px] font-mono text-stone-400">RESEARCH STUDIES</div>
          <div className="text-xs font-bold text-cyan-400 font-mono pt-0.5">17+ Completed</div>
        </div>
        <div className="bg-stone-800/90 p-2 rounded-lg border border-stone-700/60">
          <div className="text-[9px] font-mono text-stone-400">INTERACTIVE SITES</div>
          <div className="text-xs font-bold text-emerald-400 font-mono pt-0.5">12+ Developed</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono">
        <span>DELIVERABLES: PYTHON · REACT · FIGMA · TABLEAU</span>
        <span className="text-emerald-400">DELIVERED</span>
      </div>
    </div>
  );
};

// ==========================================
// CASE STUDY MODAL COMPONENT
// ==========================================
interface CaseStudyModalProps {
  project: WorkProject;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col z-10"
      >
        {/* Header Bar */}
        <div className="px-6 py-4.5 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
          <div className="space-y-0.5 min-w-0 pr-4">
            <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
              <span className="font-semibold text-stone-800">{project.client}</span>
              <span>·</span>
              <span>{project.period}</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-stone-900 truncate">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-stone-700">
          {/* Executive Role & Scope Banner */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
              ROLE & RESPONSIBILITY
            </div>
            <div className="text-sm font-bold text-stone-900">{project.role}</div>
            <p className="text-xs text-stone-600">{project.headline}</p>
          </div>

          {/* Impact Metrics Strip */}
          <div className="grid grid-cols-3 gap-3">
            {project.impactMetrics.map((m) => (
              <div
                key={m.label}
                className="p-3 rounded-xl bg-stone-900 text-white text-center"
              >
                <div className="text-[10px] font-mono text-stone-400 uppercase">{m.label}</div>
                <div className="text-base sm:text-lg font-bold font-mono text-emerald-400 pt-0.5">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Context & Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              PROJECT CONTEXT & ORGANIZATIONAL SCOPE
            </h4>
            <p className="text-sm sm:text-[15px] leading-relaxed text-stone-700">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* The Core Challenge */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              THE COMMERCIAL CHALLENGE
            </h4>
            <p className="text-sm sm:text-[15px] leading-relaxed text-stone-700">
              {project.caseStudy.challenge}
            </p>
          </div>

          {/* The Strategic Solution */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              STRATEGY & EXECUTION PLAYBOOK
            </h4>
            <p className="text-sm sm:text-[15px] leading-relaxed text-stone-700">
              {project.caseStudy.solution}
            </p>
          </div>

          {/* Concrete Deliverables */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              VERIFIED DELIVERABLES CHECKLIST
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600">
              {project.deliverables.map((item, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Project Instagram Links (if available) */}
          {project.socialLinks && project.socialLinks.length > 0 && (
            <div className="space-y-2 p-3.5 rounded-xl bg-pink-50/70 border border-pink-200/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-pink-700 font-semibold flex items-center gap-1.5">
                <span>LIVE INSTAGRAM SITE ACCOUNTS MANAGED</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.socialLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-pink-100 text-stone-900 text-xs font-mono border border-pink-200 transition-colors shadow-2xs"
                  >
                    <span className="text-pink-600">📸</span>
                    <span className="font-semibold">{link.label}</span>
                    <span className="text-stone-400 font-normal">({link.handle})</span>
                    <span className="text-pink-500 text-[10px]">↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Verified Outcomes */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              MEASURABLE BUSINESS OUTCOMES
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
              {project.caseStudy.results.map((res, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2.5">
                  <span className="font-mono text-emerald-600 font-bold shrink-0">✓</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Strategic Takeaway */}
          <div className="p-4 rounded-xl bg-stone-100 border border-stone-200/90 space-y-1">
            <div className="text-[10px] font-mono uppercase text-stone-500 font-semibold">
              KEY PRINCIPLE / STRATEGIC TAKEAWAY
            </div>
            <p className="text-xs sm:text-sm italic font-medium text-stone-800">
              "{project.caseStudy.keyTakeaway}"
            </p>
          </div>

          {/* Tools & Environment with SVG Logos */}
          <div className="space-y-2.5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
              SOFTWARE & PRODUCTION SUITE APPLIED
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <ToolLogoBadge key={t} name={t} size="md" />
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <span className="text-xs font-mono text-stone-400">Esc to close</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-mono font-medium hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </motion.div>
    </div>
  );
};
