import React from 'react';
import { professionalTimelineData } from '../data/professionalData';
import {
  TrendingUp,
  Award,
  Briefcase,
  Layers,
  Sparkles,
  ArrowRight,
  Cpu,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const ProfessionalDevelopmentView: React.FC = () => {
  return (
    <div className="space-y-14">
      {/* Top Header & Context */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-mono">
          <TrendingUp className="w-3.5 h-3.5 text-stone-600" />
          <span>Timeline: May 2024 — August 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Beyond Degree
        </h1>

        <p className="text-[15px] leading-relaxed text-stone-700">
          A structured evolution from undergraduate graduation into professional certifications,
          applied industry simulations (Siemens, Quantium, BCG), externships (TikTok, Beats by Dre, BeReal, Breaking Games),
          hands-on web engineering, and independent digital product building.
        </p>

        {/* Quick Stat Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {[
            { label: 'Trajectory', val: '2024 — 2026' },
            { label: 'Certifications', val: 'Google, IBM, Meta+' },
            { label: 'Externships & Sim', val: 'TikTok, Beats, BCG' },
            { label: 'Flagship Build', val: 'Sabr Indie' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 + idx * 0.05 }}
              className="p-3 rounded-xl bg-stone-50 border border-stone-200/80"
            >
              <div className="text-[10px] font-mono text-stone-400 uppercase font-medium">{stat.label}</div>
              <div className="text-sm font-bold font-mono text-stone-900">{stat.val}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Structured Chronological Timeline */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between border-b border-stone-200 pb-2"
        >
          <h2 className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
            CHRONOLOGICAL TIMELINE (MAY 2024 — AUGUST 2026)
          </h2>
          <span className="text-xs font-mono text-stone-500">12 Milestones</span>
        </motion.div>

        <div className="space-y-6">
          {professionalTimelineData
            .filter((item) => item.id !== 'current-2026')
            .map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all space-y-4 ${
                  item.id === 'product-2026'
                    ? 'bg-white border-stone-300 shadow-xs ring-1 ring-stone-900/5'
                    : 'bg-white border-stone-200 shadow-xs'
                }`}
              >
                {/* Milestone Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b pb-3.5 border-stone-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900">
                        {item.period}
                      </span>

                      {item.id === 'product-2026' && (
                        <span className="text-[10.5px] font-mono px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-medium">
                          Live Deployed Product 🚀
                        </span>
                      )}
                      {item.id === 'internship-2026' && (
                        <span className="text-[10.5px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                          Practical Internship 💻
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-stone-900">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Narrative */}
                <p className="text-[14.5px] leading-relaxed text-stone-700">
                  {item.narrative}
                </p>

                {/* Synthesis note if any */}
                {item.synthesisNote && (
                  <div className="p-3 rounded-xl text-xs font-mono flex items-start gap-2 bg-stone-50 border border-stone-200/80 text-stone-600">
                    <Sparkles className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <span>{item.synthesisNote}</span>
                  </div>
                )}

                {/* Structured Courses / Certifications List */}
                {item.courses && item.courses.length > 0 && (
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
                      <Award className="w-3.5 h-3.5 text-stone-500" />
                      <span>Credentials & Structured Learning</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.courses.map((course) => (
                        <div
                          key={`${course.issuer}-${course.title}`}
                          className="p-3 rounded-xl bg-stone-50/80 border border-stone-200 flex flex-col justify-between space-y-1 hover:border-stone-300 transition-colors"
                        >
                          <div className="text-[11px] font-mono font-semibold uppercase text-stone-500">
                            {course.issuer}
                          </div>
                          <div className="text-xs sm:text-[13px] font-medium text-stone-900 leading-snug">
                            {course.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Practical Work / Simulations / Externships */}
                {item.practical && item.practical.length > 0 && (
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
                      <Briefcase className="w-3.5 h-3.5 text-stone-500" />
                      <span>Applied Experience & Industry Work</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.practical.map((prac) => (
                        <div
                          key={`${prac.organization}-${prac.title}`}
                          className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1"
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold font-mono text-stone-900">
                              {prac.organization}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-200/80 text-stone-700 font-medium">
                              {prac.platform}
                            </span>
                          </div>
                          <div className="text-xs sm:text-[13px] font-medium text-stone-800">
                            {prac.title}
                          </div>
                          {prac.details && (
                            <div className="text-xs text-stone-500 pt-0.5">
                              {prac.details}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Focus tags (chips) */}
                {item.focusTags && item.focusTags.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
                      <Layers className="w-3.5 h-3.5 text-stone-500" />
                      <span>Focus Pillars</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.focusTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Interactive Flow Diagram for Sabr Indie */}
                {item.id === 'product-2026' && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-400">
                      End-to-End Product Lifecycle & Engineering Pipeline
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-1">
                      {[
                        { step: '01', name: 'Concept', icon: '💡' },
                        { step: '02', name: 'Product Design', icon: '📐' },
                        { step: '03', name: 'UI / UX', icon: '🎨' },
                        { step: '04', name: 'Web Dev', icon: '⚡' },
                        { step: '05', name: 'Interactive Exp', icon: '🎵' },
                        { step: '06', name: 'Deployment', icon: '🌐' },
                      ].map((node, nIdx) => (
                        <div
                          key={node.step}
                          className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-col items-center text-center space-y-1 relative group hover:border-stone-400 transition-colors"
                        >
                          <span className="text-base">{node.icon}</span>
                          <span className="text-xs font-bold font-mono text-stone-900">
                            {node.name}
                          </span>
                          <span className="text-[10px] font-mono text-stone-400">
                            Step {node.step}
                          </span>
                          {nIdx < 5 && (
                            <ArrowRight className="hidden sm:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 z-10" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
        </div>
      </div>

      {/* Multidisciplinary Synthesis Callout Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="p-6 sm:p-7 rounded-2xl bg-stone-900 text-white shadow-xs space-y-3"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-semibold">
          <Cpu className="w-4 h-4" />
          <span>Present Multidisciplinary Profile · August 2026</span>
        </div>
        <h3 className="text-lg font-bold">
          Converging Business, Engineering & Applied AI
        </h3>
        <p className="text-sm text-stone-300 leading-relaxed">
          The trajectory combines rigorous international e-commerce strategy, data-informed business intelligence, 
          and production web engineering—building practical products that combine business, e-commerce, marketing, 
          technology, AI and analytics.
        </p>
      </motion.div>
    </div>
  );
};
