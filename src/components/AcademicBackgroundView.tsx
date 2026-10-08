import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CheckCircle2, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const AcademicBackgroundView: React.FC = () => {
  const { academic } = usePortfolio();

  // Reversed chronological order: BBA first, then HSC, then SSC
  const timelineSteps = [
    {
      id: 'psb-bba',
      year: '2021 – 2024',
      tag: 'International BBA',
      title: 'International BBA',
      subtitle: 'E-Commerce & Digital Marketing',
      place: 'Paris School of Business',
      score: '7.6 CGPA',
      country: 'France 🇫🇷',
      highlight: true,
    },
    {
      id: 'hsc-gseb',
      year: '2020',
      tag: 'HSC · GSEB',
      title: 'Higher Secondary Education',
      subtitle: 'General Stream',
      place: 'Nutan Vidyalaya',
      score: '80.92 %ile',
      country: 'India 🇮🇳',
      highlight: false,
    },
    {
      id: 'ssc-gseb',
      year: '2018',
      tag: 'SSC · GSEB',
      title: 'Secondary Education',
      subtitle: undefined,
      place: 'Nutan Vidyalaya',
      score: '72.97 %ile',
      country: 'India 🇮🇳',
      highlight: false,
    },
  ];

  return (
    <div className="space-y-14">
      {/* Intro Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-mono">
          <Globe2 className="w-3.5 h-3.5 text-stone-600" />
          <span>Global Academic Trajectory: France · India</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Academic Background
        </h1>

        <p className="text-[15px] leading-relaxed text-stone-700">
          An academic journey merging foundational commerce rigor in India with
          immersive international digital business education in Paris, France—specializing in high-growth
          e-commerce ecosystems, customer acquisition funnels, and enterprise digital strategy.
        </p>
      </motion.div>

      {/* Chronological Academic Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
          <h2 className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
            CHRONOLOGICAL ACADEMIC TIMELINE
          </h2>
          <span className="text-xs font-mono text-stone-500">2024 — 2018</span>
        </div>

        {/* Timeline Grid Strip (Reversed: BBA -> HSC -> SSC) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
          {timelineSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`p-4 rounded-xl border transition-all flex flex-col justify-between space-y-3 ${
                step.highlight
                  ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                  : 'bg-stone-50/50 border-stone-200 text-stone-800'
              }`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span
                    className={
                      step.highlight
                        ? 'text-stone-300 font-semibold'
                        : 'text-stone-500 font-medium'
                    }
                  >
                    {step.year}
                  </span>
                  <span
                    className={`text-[10.5px] px-2 py-0.5 rounded-md font-mono ${
                      step.highlight
                        ? 'bg-stone-800 text-stone-200'
                        : 'bg-stone-200/70 text-stone-700'
                    }`}
                  >
                    {step.country}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <div
                    className={`text-[13.5px] font-semibold leading-snug ${
                      step.highlight ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {step.title}
                  </div>
                  {step.subtitle && (
                    <div
                      className={`text-xs ${
                        step.highlight ? 'text-stone-300' : 'text-stone-600'
                      }`}
                    >
                      {step.subtitle}
                    </div>
                  )}
                </div>

                <div
                  className={`text-xs ${
                    step.highlight ? 'text-stone-400' : 'text-stone-500'
                  }`}
                >
                  {step.place}
                </div>
              </div>

              <div
                className={`pt-2 border-t text-xs font-mono font-medium flex items-center justify-between ${
                  step.highlight
                    ? 'border-stone-800 text-stone-200'
                    : 'border-stone-200/80 text-stone-700'
                }`}
              >
                <span className="text-[11px] opacity-75">{step.tag}</span>
                <span
                  className={
                    step.highlight
                      ? 'text-emerald-400 font-bold'
                      : 'text-stone-900 font-semibold'
                  }
                >
                  {step.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Academic Credentials Detailed Breakdown */}
      <div className="space-y-8">
        <h2 className="text-[11px] font-semibold tracking-wider uppercase text-stone-400 border-b border-stone-200 pb-2">
          DETAILED ACADEMIC CREDENTIALS
        </h2>

        {/* Milestone 1: Paris School of Business */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-7 rounded-2xl border border-stone-200 bg-white shadow-xs space-y-6"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-200/80 pb-4">
            <div className="flex items-start gap-3.5 min-w-0 flex-1">
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                🎓
              </div>
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 whitespace-nowrap">
                    Paris School of Business — France 🇫🇷
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-medium whitespace-nowrap">
                    Graduated 2024
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 break-words">
                  International Bachelor of Business Administration (BBA)
                </h3>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-stone-900 font-mono">
                    Specialization: E-Commerce & Digital Marketing
                  </p>
                  <p className="text-xs text-stone-500 font-mono">
                    · Paris, France
                  </p>
                </div>
              </div>
            </div>

            {/* Score Badge */}
            <div className="w-28 sm:w-32 py-2 px-2.5 sm:px-3 rounded-xl bg-stone-50 border border-stone-200 text-center shrink-0 self-start sm:self-auto">
              <div className="text-[10px] font-mono uppercase text-stone-400 font-medium tracking-wide">CGPA</div>
              <div className="text-base font-bold font-mono text-stone-900">7.6 / 10</div>
            </div>
          </div>

          {/* Academic Narrative */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
              Program Summary & Context
            </h4>
            <p className="text-[14px] leading-relaxed text-stone-700">
              Completed an intensive 3-year international business degree in Paris. The curriculum
              blended international business administration fundamentals with modern digital retail
              architectures, e-commerce conversion optimization, performance marketing telemetry,
              and cross-border platform strategy.
            </p>
          </div>

          {/* Academic Focus Pillars (Exactly 6) */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
              Core Academic Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'E-Commerce Ecosystems',
                'Digital Marketing',
                'Business Management',
                'Digital Business Models',
                'Strategic Marketing',
                'Corporate Strategy',
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 text-xs font-medium font-mono"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Key Academic Takeaways */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
              Key Academic Pillars & Takeaways
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-stone-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Digital Business & Platform Strategy:</strong> Modeled scalable unit
                  economics, customer acquisition cost (CAC) frameworks, and cohort retention loops for
                  direct-to-consumer (D2C) commerce.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Global Perspective:</strong> Studied alongside an international student
                  body from over 30 countries in Paris, developing multicultural management fluency
                  and global commercial acumen.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Strategic Marketing & Telemetry:</strong> Evaluated multi-touch attribution
                  models, Search Engine Optimization (SEO/SEM), paid media economics, and conversion rate
                  optimization (CRO) case studies.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Milestone 2: Higher Secondary Education (HSC) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-7 rounded-2xl border border-stone-200 bg-white shadow-xs space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-200/80 pb-4">
            <div className="flex items-start gap-3.5 min-w-0 flex-1">
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 text-stone-800 border border-stone-200">
                📚
              </div>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 whitespace-nowrap">
                    Nutan Vidyalaya — Gujarat, India 🇮🇳
                  </span>
                  <span className="text-[10.5px] font-mono px-2 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-stone-700 whitespace-nowrap">
                    Completed March 2020
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 break-words">
                  Higher Secondary Certificate (HSC) — GSEB
                </h3>
                <p className="text-xs text-stone-600 font-mono">
                  General Stream · Gujarat Secondary and Higher Secondary Education Board
                </p>
              </div>
            </div>

            {/* Score Badge */}
            <div className="w-28 sm:w-32 py-2 px-2.5 sm:px-3 rounded-xl bg-stone-50 border border-stone-200 text-center shrink-0 self-start sm:self-auto">
              <div className="text-[10px] font-mono uppercase text-stone-400 font-medium tracking-wide">Percentile Rank</div>
              <div className="text-base font-bold font-mono text-stone-900">80.92 %ile</div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
              Core Academic Disciplines
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Financial Accounting & Book-keeping',
                'Principles of Economics',
                'Commercial Organization & Management',
                'Business Mathematics & Statistics',
              ].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Milestone 3: Secondary School Education (SSC) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-7 rounded-2xl border border-stone-200 bg-white shadow-xs space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-200/80 pb-4">
            <div className="flex items-start gap-3.5 min-w-0 flex-1">
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 text-stone-800 border border-stone-200">
                🏫
              </div>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 whitespace-nowrap">
                    Nutan Vidyalaya — Gujarat, India 🇮🇳
                  </span>
                  <span className="text-[10.5px] font-mono px-2 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-stone-700 whitespace-nowrap">
                    Completed March 2018
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 break-words">
                  Secondary School Certificate (SSC) — GSEB
                </h3>
                <p className="text-xs text-stone-600 font-mono">
                  Gujarat Secondary and Higher Secondary Education Board
                </p>
              </div>
            </div>

            {/* Score Badge */}
            <div className="w-28 sm:w-32 py-2 px-2.5 sm:px-3 rounded-xl bg-stone-50 border border-stone-200 text-center shrink-0 self-start sm:self-auto">
              <div className="text-[10px] font-mono uppercase text-stone-400 font-medium tracking-wide">Percentile Rank</div>
              <div className="text-base font-bold font-mono text-stone-900">72.97 %ile</div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
              Core Academic Disciplines
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Mathematics & Quantitative Reasoning',
                'General Science',
                'Social Sciences',
              ].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
