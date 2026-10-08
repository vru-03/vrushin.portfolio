import React, { useState, useMemo } from 'react';
import {
  certificationsData,
  certCategories,
  filterPills,
  FilterPill,
  CertificationItem,
} from '../data/certificationsData';
import {
  Award,
  Search,
  CheckCircle2,
  Sparkles,
  Building2,
  Layers,
  GraduationCap,
  ShieldCheck,
  Cpu,
  TrendingUp,
  X,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CertificationsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillId, setSelectedPillId] = useState<string>('all');
  const [selectedIssuer, setSelectedIssuer] = useState<string>('All');

  // Unique Issuers for quick filter
  const allIssuers = useMemo(() => {
    const issuers = Array.from(new Set(certificationsData.map((c) => c.issuer)));
    return ['All', ...issuers];
  }, []);

  // Active pill object
  const activePill = useMemo(() => {
    return filterPills.find((p) => p.id === selectedPillId);
  }, [selectedPillId]);

  // Compute dynamic counts for each pill based on currently selected issuer and search query
  const pillCounts = useMemo(() => {
    // Base items matching current issuer and search query
    const baseItems = certificationsData.filter((item) => {
      if (selectedIssuer !== 'All' && item.issuer !== selectedIssuer) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesIssuer = item.issuer.toLowerCase().includes(query);
        const matchesSkills = item.skills.some((s) => s.toLowerCase().includes(query));
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        return matchesTitle || matchesIssuer || matchesSkills || matchesCategory || matchesDesc;
      }
      return true;
    });

    const totalCount = baseItems.length;
    const countsMap: Record<string, number> = { all: totalCount };

    filterPills.forEach((pill) => {
      const matchCount = baseItems.filter((item) => pill.categories.includes(item.category)).length;
      countsMap[pill.id] = matchCount;
    });

    return countsMap;
  }, [selectedIssuer, searchQuery]);

  // Filtered certifications list
  const filteredCertifications = useMemo(() => {
    return certificationsData.filter((item) => {
      // Streamlined Category / Pill filter
      if (selectedPillId !== 'all' && activePill) {
        if (!activePill.categories.includes(item.category)) {
          return false;
        }
      }

      // Issuer filter
      if (selectedIssuer !== 'All' && item.issuer !== selectedIssuer) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesIssuer = item.issuer.toLowerCase().includes(query);
        const matchesSkills = item.skills.some((s) => s.toLowerCase().includes(query));
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);

        return matchesTitle || matchesIssuer || matchesSkills || matchesCategory || matchesDesc;
      }

      return true;
    });
  }, [searchQuery, selectedPillId, activePill, selectedIssuer]);

  // Group by category when 'All' is selected and no search
  const isGroupedView = selectedPillId === 'all' && selectedIssuer === 'All' && searchQuery.trim() === '';

  const getCredentialTypeStyle = (type: CertificationItem['credentialType']) => {
    switch (type) {
      case 'Professional Certificate':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300/80';
      case 'Specialization Course':
        return 'bg-amber-50 text-amber-800 border-amber-300/80';
      case 'Foundational Credential':
        return 'bg-stone-100 text-stone-800 border-stone-300';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Business & Strategy':
        return <TrendingUp className="w-4 h-4 text-stone-700" />;
      case 'E-Commerce & Marketing':
        return <Sparkles className="w-4 h-4 text-stone-700" />;
      case 'Business Analytics':
        return <Layers className="w-4 h-4 text-stone-700" />;
      case 'AI & GenAI':
        return <Cpu className="w-4 h-4 text-stone-700" />;
      case 'Management & Execution':
        return <CheckCircle2 className="w-4 h-4 text-stone-700" />;
      case 'Digital Transformation':
        return <Building2 className="w-4 h-4 text-stone-700" />;
      case 'Digital Productivity':
        return <ShieldCheck className="w-4 h-4 text-stone-700" />;
      default:
        return <Award className="w-4 h-4 text-stone-700" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4 w-full"
      >
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-mono">
          <Award className="w-3.5 h-3.5 text-stone-600" />
          <span>Curated Credentials & Professional Specializations</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Professional Certifications
        </h1>

        <p className="text-[14px] sm:text-[15px] text-stone-700 whitespace-normal lg:whitespace-nowrap">
          Comprehensive portfolio of verified credentials across Business, E-Commerce, Marketing, Analytics, AI, Strategy, and Digital Technology.
        </p>

        {/* Quick Stat Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_1fr_1.45fr_1.15fr] gap-3 pt-2 w-full">
          {[
            { label: 'Total Portfolio', val: '21 Credentials' },
            { label: 'Disciplines', val: '5 Core Domains' },
            { label: 'Tech Organizations', val: 'Google, Meta, Microsoft, IBM' },
            { label: 'Academic Institutions', val: 'Oxford, MQ, IIM, IIT' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.06 + idx * 0.05 }}
              className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between gap-1.5"
            >
              <div className="text-[10px] font-mono text-stone-400 uppercase font-medium">{stat.label}</div>
              <div className="text-sm sm:text-base font-bold font-mono text-stone-900 whitespace-nowrap">{stat.val}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Search & Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="space-y-4 pt-2"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by certificate title, issuer (Google, Meta, Oxford...), skill, or domain..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-stone-200 bg-stone-50/70 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Issuer quick select */}
          <div className="sm:w-64">
            <select
              value={selectedIssuer}
              onChange={(e) => setSelectedIssuer(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl border border-stone-200 bg-stone-50/70 text-xs font-mono text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all cursor-pointer"
            >
              <option value="All">All ({certificationsData.length})</option>
              {allIssuers
                .filter((iss) => iss !== 'All')
                .map((issuer) => {
                  const count = certificationsData.filter((c) => c.issuer === issuer).length;
                  return (
                    <option key={issuer} value={issuer}>
                      {issuer} ({count})
                    </option>
                  );
                })}
            </select>
          </div>
        </div>

        {/* Streamlined Pill Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-wrap">
          <button
            onClick={() => setSelectedPillId('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
              selectedPillId === 'all'
                ? 'bg-stone-900 text-white font-medium shadow-2xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
            }`}
          >
            All ({pillCounts['all']})
          </button>

          {filterPills.map((pill) => {
            const isSelected = selectedPillId === pill.id;
            const count = pillCounts[pill.id] ?? 0;
            return (
              <button
                key={pill.id}
                onClick={() => setSelectedPillId(pill.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white font-medium shadow-2xs'
                    : count === 0
                    ? 'bg-stone-100/60 text-stone-400 hover:bg-stone-100 hover:text-stone-600'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {pill.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Active Filters Bar if any applied */}
        {(selectedPillId !== 'all' || selectedIssuer !== 'All' || searchQuery !== '') && (
          <div className="flex items-center justify-between text-xs font-mono text-stone-500 pt-1 border-b border-stone-200 pb-2">
            <span>
              Showing {filteredCertifications.length} of {certificationsData.length} credentials
            </span>
            <button
              onClick={() => {
                setSelectedPillId('all');
                setSelectedIssuer('All');
                setSearchQuery('');
              }}
              className="text-stone-700 hover:text-stone-950 underline font-medium cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </motion.div>

      {/* Main Certification List */}
      {filteredCertifications.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-12 text-center rounded-2xl bg-stone-50 border border-stone-200 space-y-3"
        >
          <GraduationCap className="w-8 h-8 text-stone-400 mx-auto" />
          <div className="text-sm font-medium text-stone-900">No matching certifications found</div>
          <div className="text-xs text-stone-500">
            Try adjusting your search terms or selecting a different category filter.
          </div>
          <button
            onClick={() => {
              setSelectedPillId('all');
              setSelectedIssuer('All');
              setSearchQuery('');
            }}
            className="px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-mono font-medium hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Clear all filters
          </button>
        </motion.div>
      ) : isGroupedView ? (
        /* Categorized Group View (When no filter active) */
        <div className="space-y-10">
          {certCategories.map((group) => {
            const items = certificationsData.filter((c) => c.category === group.name);
            if (items.length === 0) return null;

            return (
              <motion.section
                key={group.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                {/* Category Section Header */}
                <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(group.name)}
                    <h2 className="text-sm sm:text-base font-bold font-mono uppercase tracking-wider text-stone-900">
                      {group.name}
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-stone-500">
                    {items.length} {items.length === 1 ? 'Credential' : 'Credentials'}
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((cert, cIdx) => (
                    <CertificationCard
                      key={cert.id}
                      cert={cert}
                      index={cIdx}
                      credentialBadgeColor={getCredentialTypeStyle(cert.credentialType)}
                    />
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>
      ) : (
        /* Flat Grid View (Filtered) */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCertifications.map((cert, cIdx) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={cIdx}
              credentialBadgeColor={getCredentialTypeStyle(cert.credentialType)}
            />
          ))}
        </div>
      )}

      {/* Bottom Summary Callout */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="p-6 sm:p-7 rounded-2xl bg-stone-900 text-white shadow-xs space-y-3"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Credential Rigor & Verification Standard</span>
        </div>
        <h3 className="text-lg font-bold">
          Systematic Synthesis of Commercial & Technical Disciplines
        </h3>
        <p className="text-sm text-stone-300 leading-relaxed">
          Every credential represents comprehensive, verified professional coursework across leading technology companies
          (Google, Meta, Microsoft, IBM, Anthropic) and top-tier academic faculties (University of Oxford, IIM Ahmedabad,
          IIT Bombay, University of Virginia, Macquarie University).
        </p>
      </motion.div>
    </div>
  );
};

interface CertificationCardProps {
  cert: CertificationItem;
  credentialBadgeColor: string;
  index?: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ cert, credentialBadgeColor, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:border-stone-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4 group"
    >
      <div className="space-y-3">
        {/* Top Meta Line: Issuer Tag & Type */}
        <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold font-mono text-stone-900 text-sm tracking-tight">
              {cert.issuer}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span
              className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-medium ${credentialBadgeColor}`}
            >
              {cert.credentialType}
            </span>
          </div>
        </div>

        {/* Certificate Title */}
        <h3 className="text-base sm:text-[17px] font-bold text-stone-900 leading-snug group-hover:text-stone-950">
          {cert.title}
        </h3>

        {/* Narrative Description */}
        <p className="text-[13.5px] leading-relaxed text-stone-600">
          {cert.description}
        </p>
      </div>

      {/* Skills Chips & Footer Code */}
      <div className="space-y-3 pt-2 border-t border-stone-100">
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded-md bg-stone-50 border border-stone-200/70 text-[11px] font-mono text-stone-700"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 pt-0.5">
          <span>{cert.category}</span>
          <span className="text-stone-500 font-medium">{cert.badgeCode}</span>
        </div>
      </div>
    </motion.div>
  );
};
