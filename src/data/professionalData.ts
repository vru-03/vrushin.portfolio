export interface StructuredCourse {
  title: string;
  issuer: string;
  badge?: string;
}

export interface PracticalWorkItem {
  title: string;
  organization: string;
  platform: 'Forage' | 'Extern' | 'Internship' | 'Independent Product' | 'Simulation';
  details?: string;
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  narrative: string;
  courses?: StructuredCourse[];
  practical?: PracticalWorkItem[];
  focusTags?: string[];
  synthesisNote?: string;
  pipelineSteps?: string[];
}

export const professionalTimelineData: TimelineEntry[] = [
  {
    id: 'may-2024',
    period: 'May 2024',
    title: 'Professional Development Begins',
    narrative:
      'After completing my BBA in E-Commerce & Digital Marketing, I began focusing on building practical skills beyond my academic background, initially concentrating on business strategy, digital marketing and e-commerce.',
    focusTags: ['Academic Transition', 'Self-Directed Growth', 'Strategy & Marketing Groundwork'],
  },
  {
    id: 'jun-sep-2024',
    period: 'Jun – Sep 2024',
    title: 'Business, Strategy & Digital Marketing',
    narrative:
      'Established core capabilities across competitive business strategy, design-led innovation, e-commerce, and modern digital marketing.',
    courses: [
      {
        issuer: 'University of Virginia',
        title: 'Foundations of Business Strategy',
      },
      {
        issuer: 'IIT Bombay',
        title: 'Design Thinking & Innovation',
      },
      {
        issuer: 'Google',
        title: 'Digital Marketing & E-Commerce Professional Certificate',
      },
      {
        issuer: 'University of Salford',
        title: 'Marketing in the New Digital Era',
      },
    ],
    focusTags: [
      'Business Strategy',
      'E-Commerce',
      'Digital Marketing',
      'Innovation',
      'Consumer Thinking',
    ],
  },
  {
    id: 'oct-dec-2024',
    period: 'Oct – Dec 2024',
    title: 'Expanding Business & Digital Skills',
    narrative:
      'Continued developing a broader understanding of digital business and professional workflows while strengthening my marketing and business foundations. This period established the base for moving beyond marketing into business analysis and technology.',
    synthesisNote:
      'Bridge Phase: Consolidating commercial marketing principles and preparing for analytical & data-driven problem solving.',
  },
  {
    id: 'jan-mar-2025',
    period: 'Jan – Mar 2025',
    title: 'Business Intelligence & Business Analysis',
    narrative:
      'I began adding a quantitative and analytical layer to my existing business and marketing background, focusing on business data, analysis, reporting and decision-making.',
    courses: [
      {
        issuer: 'Google',
        title: 'Business Intelligence Professional Certificate',
      },
      {
        issuer: 'IBM',
        title: 'Business Analyst Professional Certificate',
      },
      {
        issuer: 'Macquarie University',
        title: 'Excel Skills for Business',
      },
    ],
    focusTags: [
      'Business Intelligence',
      'Business Analysis',
      'Quantitative Modeling',
      'Data-Driven Decision Making',
    ],
  },
  {
    id: 'apr-jun-2025',
    period: 'Apr – Jun 2025',
    title: 'Project Management & Practical Business Work',
    narrative:
      'Alongside structured learning, I began applying business concepts through practical, industry-oriented experiences. This marked a shift from simply learning concepts toward working through realistic business problems and deliverables.',
    courses: [
      {
        issuer: 'Google',
        title: 'Project Management Professional Certificate',
      },
    ],
    practical: [
      {
        organization: 'Siemens',
        platform: 'Forage',
        title: 'Commercial Project Manager Job Simulation',
      },
      {
        organization: 'Quantium',
        platform: 'Forage',
        title: 'Data Analytics Job Simulation',
      },
    ],
    synthesisNote:
      'Key inflection point: Moving from passive theory into realistic commercial deliverables and simulation analytics.',
  },
  {
    id: 'jul-sep-2025',
    period: 'Jul – Sep 2025',
    title: 'Marketing Analytics & E-Commerce',
    narrative:
      'I expanded my digital-marketing background into marketing measurement, customer journeys, omnichannel strategy and data-informed growth.',
    courses: [
      {
        issuer: 'Meta',
        title: 'Marketing Analytics Professional Certificate',
      },
      {
        issuer: 'IBM',
        title: 'Digital Marketing & Growth Hacking with GenAI',
      },
    ],
    practical: [
      {
        organization: 'Omnichannel Marketing',
        platform: 'Forage',
        title: 'Job Simulation',
      },
    ],
    focusTags: [
      'Marketing Measurement',
      'Customer Journeys',
      'Omnichannel Strategy',
      'GenAI Growth Hacking',
    ],
  },
  {
    id: 'sep-dec-2025',
    period: 'Sep – Dec 2025',
    title: 'E-Commerce, Consumer & Business Strategy',
    narrative:
      'This period brought together several areas I had been developing separately: E-commerce + consumer behaviour + marketing + strategy + business analysis.',
    practical: [
      {
        organization: 'Breaking Games',
        platform: 'Extern',
        title: 'E-Commerce Data Analysis & Strategy',
      },
      {
        organization: 'TikTok',
        platform: 'Extern',
        title: 'Social Media Content & Brand Strategy',
      },
      {
        organization: 'BCG',
        platform: 'Forage',
        title: 'Venture & Business Builds',
      },
      {
        organization: 'Beats by Dre',
        platform: 'Extern',
        title: 'Creative Advertising Strategy',
      },
    ],
    focusTags: [
      'E-Commerce Strategy',
      'Social Media & Brand Strategy',
      'Market Analysis',
      'Venture Building',
      'Creative Advertising',
    ],
  },
  {
    id: 'late-2025-early-2026',
    period: 'Late 2025 – Early 2026',
    title: 'AI & Emerging Technology',
    narrative:
      'I began developing an understanding of AI from both foundational and business perspectives, rather than treating it purely as a technical subject.',
    courses: [
      {
        issuer: 'University of Helsinki',
        title: 'Elements of AI',
      },
      {
        issuer: 'University of Oxford — Saïd Business School',
        title: 'AI Foundations for Business Professionals',
      },
      {
        issuer: 'Anthropic',
        title: 'AI Fluency — Framework & Foundations',
      },
    ],
    focusTags: ['Foundational AI', 'Enterprise AI Strategy', 'Applied LLM Fluency'],
  },
  {
    id: 'early-2026',
    period: 'Early 2026',
    title: 'Product Thinking',
    narrative:
      'Applied my business and digital background to product-oriented thinking, including users, product decisions and digital experiences.',
    practical: [
      {
        organization: 'BeReal',
        platform: 'Extern',
        title: 'Product Management',
      },
    ],
    focusTags: ['User-Centric Design', 'Product Decision-Making', 'Digital Experiences'],
  },
  {
    id: 'feb-apr-2026',
    period: 'Feb – Apr 2026',
    title: 'Business Technology & Digital Transformation',
    narrative:
      'This stage brought together my earlier business, analytics and technology learning, with a focus on business intelligence and technology-driven transformation.',
    courses: [
      {
        issuer: 'Microsoft',
        title: 'Power BI Data Analyst Professional Certificate',
      },
      {
        issuer: 'IIM Ahmedabad',
        title: 'Advanced Digital Transformation',
      },
    ],
    focusTags: ['Power BI Analytics', 'Digital Transformation Strategy', 'Enterprise Intelligence'],
  },
  {
    id: 'internship-2026',
    period: 'May 2026',
    title: 'Web Development Internship',
    narrative:
      'Gained practical project-based experience in web development, adding hands-on technical capability to my existing business and digital background.',
    practical: [
      {
        organization: 'Thiranex',
        platform: 'Internship',
        title: 'Web Development Internship',
        details: 'Project-based web development, frontend architecture, and technical execution.',
      },
    ],
    focusTags: ['Web Engineering', 'Technical Architecture', 'Production Execution'],
  },
  {
    id: 'product-2026',
    period: 'Jul – Aug 2026',
    title: 'Sabr Indie — Independent Digital Product',
    narrative:
      'Designed and developed an independent digital music experience from concept to live deployment. This was my first major opportunity to bring together creative direction, product thinking and web development in one independent project.',
    practical: [
      {
        organization: 'Sabr Indie',
        platform: 'Independent Product',
        title: 'Independent Digital Music Experience (Live Deployed)',
      },
    ],
  },
  {
    id: 'current-2026',
    period: 'August 2026 — Current',
    title: 'From Learning to Building',
    narrative:
      'My professional development has gradually moved from structured learning toward practical application. Current focus: building practical projects that combine business, e-commerce, marketing, technology, AI and analytics.',
    pipelineSteps: [
      'E-Commerce & Marketing',
      'Business & Strategy',
      'Business Intelligence',
      'Marketing Analytics',
      'AI & GenAI',
      'Digital Transformation',
      'Product Thinking',
      'Web Development',
      'Independent Digital Products',
    ],
  },
];
