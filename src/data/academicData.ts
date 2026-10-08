import { AcademicData } from '../types/portfolio';

export const academicData: AcademicData = {
  name: 'Vrushin',
  location: 'Vadodara, IN',
  weather: '28°C',
  summary: {
    degreesCount: 3,
    internationalExperience: 'France (Paris) & India',
    highestCgpa: '7.6 / 10',
    focusArea: 'E-Commerce, Digital Business & Commerce Analytics',
  },
  milestones: [
    {
      id: 'psb-bba',
      level: "Bachelor's Degree",
      degree: 'International Bachelor of Business Administration (BBA)',
      specialization: 'E-Commerce & Digital Marketing',
      institution: 'Paris School of Business (PSB)',
      location: 'Paris, France',
      flag: '🇫🇷',
      period: '2021 – 2024',
      status: 'Completed',
      metrics: {
        primary: '7.6 / 10',
        primaryLabel: 'CGPA',
      },
      boardOrAccreditation: 'AACSB / AMBA Accredited Grande École Environment',
      narrative:
        'A comprehensive 3-year international degree in the heart of Paris, blending modern international business management frameworks with high-velocity digital commerce architectures, multi-channel customer acquisition funnels, and data-driven marketing strategy.',
      coreFocus: [
        'E-Commerce Ecosystems',
        'Digital Marketing',
        'Business Management',
        'Digital Business Models',
        'Strategic Marketing',
        'Corporate Strategy',
      ],
      keyHighlights: [
        'Immersive international business education in Paris collaborating with multicultural cohorts across 30+ nationalities.',
        'Deep practical coursework in omnichannel retail pipelines, customer lifetime value (LTV) economics, and marketing ROI telemetry.',
        'Synthesized digital go-to-market strategies and digital transformation frameworks for modern commercial enterprises.',
      ],
    },
    {
      id: 'hsc-gseb',
      level: 'Higher Secondary Education (HSC)',
      degree: 'Higher Secondary Certificate (HSC) — GSEB',
      institution: 'Nutan Vidyalaya',
      location: 'Gujarat, India',
      flag: '🇮🇳',
      period: 'Completed March 2020',
      status: 'Completed',
      metrics: {
        primary: '80.92',
        primaryLabel: 'Percentile Rank',
      },
      boardOrAccreditation: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
      narrative:
        'Rigorous quantitative and commercial foundation in business economics, financial principles, statistics, and organizational governance, developing strong numerical intuition and analytical reasoning early on.',
      coreFocus: [
        'Financial Accounting & Book-keeping',
        'Principles of Economics',
        'Commercial Organization & Management',
        'Business Mathematics & Statistics',
      ],
      keyHighlights: [
        'Achieved a strong 80.92 percentile rank across the state-wide GSEB Commerce Board examinations.',
        'Developed fundamental analytical fluency in balance sheets, ledger operations, cost accounting, and macro-economics.',
      ],
    },
    {
      id: 'ssc-gseb',
      level: 'Secondary School Education (SSC)',
      degree: 'Secondary School Certificate (SSC) — GSEB',
      institution: 'Nutan Vidyalaya',
      location: 'Gujarat, India',
      flag: '🇮🇳',
      period: 'Completed March 2018',
      status: 'Completed',
      metrics: {
        primary: '72.97',
        primaryLabel: 'Percentile Rank',
      },
      boardOrAccreditation: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
      narrative:
        'Comprehensive foundational schooling developing strong competencies in core mathematics, natural sciences, social sciences, and multilingual communication.',
      coreFocus: [
        'Mathematics & Quantitative Reasoning',
        'General Science',
        'Social Sciences',
      ],
      keyHighlights: [
        'Achieved a 72.97 percentile rank in the competitive state board examination.',
        'Solid quantitative and problem-solving base that provided the springboard into specialized commercial studies.',
      ],
    },
  ],
};
