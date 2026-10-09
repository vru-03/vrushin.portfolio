import React from 'react';

export interface SoftwareTool {
  id: string;
  name: string;
  category: string;
  badge: string;
  creativeRole: string;
  deliverablesSummary: string;
  brandColor: string;
  accentBg: string;
  tabAssociation: 'social-media' | 'freelancing' | 'graphic-design' | 'both';
  icon: React.ReactNode;
}

export const socialMediaSoftwareStack: SoftwareTool[] = [
  {
    id: 'meta-ads-manager',
    name: 'Meta Ads Manager',
    category: 'Paid Advertising',
    badge: 'Paid Acquisition & Lead Generation',
    creativeRole:
      'Engineered and scaled 12+ targeted Facebook & Instagram ad campaigns. Configured location radius targeting around project sites, custom demographic buyer segments, instant lead forms, and cost-per-lead (CPL) budget optimization.',
    deliverablesSummary: '12+ Full-Funnel Paid Ad Campaigns & Lead Forms',
    brandColor: '#0081FB',
    accentBg: 'bg-blue-50/80 border-blue-200/80',
    tabAssociation: 'social-media',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path
          d="M16.994 4.86c-1.398 0-2.61.64-3.494 1.637-.883-.997-2.096-1.637-3.494-1.637C6.88 4.86 4.35 7.42 4.35 10.582c0 4.195 4.896 8.358 7.644 8.558.267.02.545.02.812 0 2.748-.2 7.644-4.363 7.644-8.558 0-3.162-2.53-5.722-5.456-5.722z"
          fill="none"
        />
        <path
          d="M12 18.2c-2.48-.18-6.65-3.95-6.65-7.62 0-2.61 2.08-4.72 4.65-4.72 1.25 0 2.37.5 3.19 1.41.22.25.43.52.61.81.18-.29.39-.56.61-.81.82-.91 1.94-1.41 3.19-1.41 2.57 0 4.65 2.11 4.65 4.72 0 3.67-4.17 7.44-6.65 7.62z"
          fill="#0081FB"
        />
        <path
          d="M17.8 7.2c-.8.8-1.5 2.1-2.1 3.8-.4-1.2-1-2.2-1.7-3-.6-.7-1.3-1.1-2-1.1s-1.4.4-2 1.1c-.7.8-1.3 1.8-1.7 3-.6-1.7-1.3-3-2.1-3.8-1.1-1.1-2.5-.9-3.2.2-.6 1-.2 2.6.9 3.9 1 1.2 2.6 2.4 4.5 3.3 1.1.5 2.4.9 3.6.9s2.5-.4 3.6-.9c1.9-.9 3.5-2.1 4.5-3.3 1.1-1.3 1.5-2.9.9-3.9-.7-1.1-2.1-1.3-3.2-.2z"
          fill="#0064E0"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    id: 'meta-business-suite',
    name: 'Meta Business Suite',
    category: 'Operations',
    badge: 'Multi-Account Hub (4 Sites)',
    creativeRole:
      'Orchestrated day-to-day operations across 4 distinct project site accounts and 3 social platforms. Unified centralized publishing queues, automated direct messaging routing, and cross-platform performance telemetry.',
    deliverablesSummary: 'Centralized 4 Site Accounts & 3 Platforms',
    brandColor: '#0064E0',
    accentBg: 'bg-indigo-50/80 border-indigo-200/80',
    tabAssociation: 'social-media',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="6" fill="#0064E0" />
        <path
          d="M7 8h10c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1z"
          stroke="#FFFFFF"
          strokeWidth="1.8"
        />
        <circle cx="10" cy="12" r="1.5" fill="#FFFFFF" />
        <path d="M13 10.5h3M13 13.5h2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'adobe-photoshop',
    name: 'Adobe Photoshop',
    category: 'Graphic Design',
    badge: '230+ Property Creatives & Hoardings',
    creativeRole:
      'Crafted over 230+ promotional creatives, architectural hoardings, brochures, launch banners, and amenity showcases. Handled color correction of site photography, high-resolution typography layout, and floor-plan visualizations.',
    deliverablesSummary: '230+ Promotional Creatives & Hoarding Designs',
    brandColor: '#31A8FF',
    accentBg: 'bg-sky-50/80 border-sky-200/80',
    tabAssociation: 'social-media',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#001E36" />
        <path
          d="M6.5 7h3.8c1.8 0 3 .9 3 2.5 0 1.7-1.3 2.6-3 2.6h-2v4.4H6.5V7zm1.8 3.6h1.7c.8 0 1.4-.4 1.4-1.2 0-.7-.6-1.1-1.4-1.1H8.3v2.3z"
          fill="#31A8FF"
        />
        <path
          d="M14.2 13.2c.7-.6 1.6-.9 2.5-.9 1.4 0 2.3.8 2.3 2 0 1.3-1.1 1.7-2.4 2.1-.9.3-1.3.6-1.3 1.1 0 .6.5.9 1.3.9.7 0 1.4-.3 1.9-.8l.8 1c-.8.8-1.8 1.1-2.9 1.1-1.6 0-2.7-.9-2.7-2.3 0-1.4 1.1-2 2.4-2.3.9-.3 1.3-.5 1.3-1 0-.4-.4-.7-1-.7-.6 0-1.2.3-1.6.7l-.7-.9z"
          fill="#31A8FF"
        />
      </svg>
    ),
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    category: 'Graphic Design',
    badge: 'Rapid Social Templates & Brand Kit',
    creativeRole:
      'Maintained modular brand kits and rapid-turnaround property flyers, construction milestone teasers, festive greetings, and Instagram carousel layouts across all 4 builder sites.',
    deliverablesSummary: 'Multi-Site Brand Templates & Story Cards',
    brandColor: '#00C4CC',
    accentBg: 'bg-teal-50/80 border-teal-200/80',
    tabAssociation: 'social-media',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <defs>
          <linearGradient id="canvaGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00C4CC" />
            <stop offset="1" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="11" fill="url(#canvaGrad)" />
        <path
          d="M15.5 9c-.8-.7-1.9-1-3.2-1-2.8 0-4.8 2.1-4.8 5s1.9 5 4.8 5c1.4 0 2.6-.4 3.4-1.2.3-.3.3-.7 0-.9l-.6-.6c-.2-.2-.6-.2-.8.1-.6.6-1.4.9-2.3.9-1.9 0-3.2-1.4-3.2-3.3 0-1.8 1.3-3.3 3.2-3.3.9 0 1.6.2 2.1.6.3.2.6.2.8 0l.6-.6c.3-.3.2-.6 0-.7z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: 'premiere-pro',
    name: 'Adobe Premiere Pro',
    category: 'Video Production',
    badge: 'Video Post-Production & Color Grading',
    creativeRole:
      'Video post-production across real estate walkthroughs and short-form video reels. Executed timeline pacing, multi-layer audio design, color grading, title cards, and high-fidelity video exports.',
    deliverablesSummary: 'Video Post-Production & High-Retention Reel Cuts',
    brandColor: '#EA77FF',
    accentBg: 'bg-purple-50/80 border-purple-200/80',
    tabAssociation: 'both',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#1C0B31" />
        <path
          d="M7 7h3.8c1.8 0 3 .9 3 2.5 0 1.7-1.3 2.6-3 2.6h-2v4.4H7V7zm1.8 3.6h1.7c.8 0 1.4-.4 1.4-1.2 0-.7-.6-1.1-1.4-1.1H8.8v2.3z"
          fill="#EA77FF"
        />
      </svg>
    ),
  },
  {
    id: 'capcut-pro',
    name: 'CapCut',
    category: 'Video Production',
    badge: 'Short-Form Video Post-Production & Kinetic Reels',
    creativeRole:
      'Video post-production for fast-paced viral reels and short-form storytelling. Cut 80+ dynamic walkthrough reels & milestone cuts, and 27+ vibrant freelance short-form videos with kinetic captions, sound design, and retention hooks.',
    deliverablesSummary: 'Video Post-Production, Kinetic Captions & Audio Pacing',
    brandColor: '#111111',
    accentBg: 'bg-stone-100 border-stone-200',
    tabAssociation: 'both',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#111111" />
        <path
          d="M6 7.5L12 12L6 16.5V7.5ZM18 7.5L12 12L18 16.5V7.5Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: 'buffer',
    name: 'Buffer',
    category: 'Operations',
    badge: 'Multi-Account Scheduling & Cross-Posting Queue',
    creativeRole:
      'Configured automated publishing schedules, visual content queue staging, and cross-platform timing optimization across site brand channels to maintain a strict daily publishing rhythm.',
    deliverablesSummary: 'Automated Post Scheduling & Publishing Queues',
    brandColor: '#2C4BFF',
    accentBg: 'bg-blue-50/80 border-blue-200/80',
    tabAssociation: 'social-media',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#2C4BFF" />
        <path d="M6 8.5L12 11.5L18 8.5L12 5.5L6 8.5Z" fill="#FFFFFF" />
        <path d="M6 12L12 15L18 12" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 15.5L12 18.5L18 15.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'Operations',
    badge: 'CRM Inbound Lead Pipelines & Contact Governance',
    creativeRole:
      'Organized inbound social inquiry telemetry, lead lifecycle tracking, contact properties, and property inquiry routing to synchronize digital campaigns with commercial sales pipelines.',
    deliverablesSummary: 'Inbound Social Lead Tracking & CRM Pipeline Routing',
    brandColor: '#FF7A59',
    accentBg: 'bg-orange-50/80 border-orange-200/80',
    tabAssociation: 'social-media',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#FF7A59" />
        <path
          d="M17 11.5V9.8a1.8 1.8 0 1 0-1.8 1.8h.1l-2.4 2.2a1.8 1.8 0 1 0 .9.9l2.4-2.2H17z"
          fill="#FFFFFF"
        />
        <circle cx="8.5" cy="12" r="1.5" fill="#FFFFFF" />
        <path d="M10 12h2.5" stroke="#FFFFFF" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: 'instagram-creator',
    name: 'Instagram & Facebook Platforms',
    category: 'Operations',
    badge: 'Content Cadence & Community Growth',
    creativeRole:
      'Native management of 3 key social platforms (Instagram, Facebook, LinkedIn/YouTube). Maintained a predictable publishing cadence, story highlight architectures, and real estate inquiry routing.',
    deliverablesSummary: '3 Platforms Active & Ongoing Organic Growth',
    brandColor: '#E1306C',
    accentBg: 'bg-pink-50/80 border-pink-200/80',
    tabAssociation: 'social-media',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <defs>
          <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
            <stop stopColor="#fdf497" offset="0%" />
            <stop stopColor="#fdf497" offset="5%" />
            <stop stopColor="#fd5949" offset="45%" />
            <stop stopColor="#d6249f" offset="60%" />
            <stop stopColor="#285AEB" offset="90%" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
        <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.2" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="15.8" cy="8.2" r="0.9" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'google-sheets-drive',
    name: 'Google Sheets & Drive',
    category: 'Operations',
    badge: 'Ad Telemetry & 4-Site Asset Repository',
    creativeRole:
      'Maintained ad spending logs, cost-per-lead tracking spreadsheets, creative approval calendars, and shared cloud drive repositories for on-site photography and video assets across all 4 site projects.',
    deliverablesSummary: 'Campaign Performance Logs & Cloud Asset Hub',
    brandColor: '#0F9D58',
    accentBg: 'bg-emerald-50/80 border-emerald-200/80',
    tabAssociation: 'social-media',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="4" fill="#0F9D58" />
        <path d="M7 7h10v10H7z" fill="#FFFFFF" opacity="0.9" />
        <path d="M7 10h10M7 14h10M12 7v10" stroke="#0F9D58" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export const freelanceSoftwareStack: SoftwareTool[] = [
  {
    id: 'premiere-pro-freelance',
    name: 'Adobe Premiere Pro',
    category: 'Video Production',
    badge: 'Video Post-Production & Short-Form Edits',
    creativeRole:
      'Executed full video post-production workflows: timeline cutting, multi-track audio design, color grading, title graphics, and export optimization for 27+ Vibrant Norta videos and client reels.',
    deliverablesSummary: '27+ Short-Form Videos, Creative Direction & Video Editing',
    brandColor: '#EA77FF',
    accentBg: 'bg-purple-50/80 border-purple-200/80',
    tabAssociation: 'freelancing',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#1C0B31" />
        <path
          d="M7 7h3.8c1.8 0 3 .9 3 2.5 0 1.7-1.3 2.6-3 2.6h-2v4.4H7V7zm1.8 3.6h1.7c.8 0 1.4-.4 1.4-1.2 0-.7-.6-1.1-1.4-1.1H8.8v2.3z"
          fill="#EA77FF"
        />
      </svg>
    ),
  },
  {
    id: 'capcut-freelance',
    name: 'CapCut',
    category: 'Video Production',
    badge: 'High-Retention Reels & Viral Sound Design',
    creativeRole:
      'Cut fast-paced short-form content with kinetic captions, sound effects, beat synchronization, and retention hooks that drove 423K+ views (top video reaching 59.8K views).',
    deliverablesSummary: '423K+ Total Reel Views & High-Pace Visual Storytelling',
    brandColor: '#111111',
    accentBg: 'bg-stone-100 border-stone-200',
    tabAssociation: 'freelancing',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#111111" />
        <path d="M6 7.5L12 12L6 16.5V7.5ZM18 7.5L12 12L18 16.5V7.5Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'UI/UX & Web',
    badge: 'UI/UX Wireframes & Design Systems',
    creativeRole:
      'Architected end-to-end user interfaces, component systems, interactive prototypes, and design specs for 12+ client websites and interactive digital products.',
    deliverablesSummary: 'UI/UX Architecture for 12+ Interactive Sites',
    brandColor: '#F24E1E',
    accentBg: 'bg-orange-50/80 border-orange-200/80',
    tabAssociation: 'freelancing',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="15" cy="6" r="3" fill="#FF7262" />
        <circle cx="9" cy="6" r="3" fill="#F24E1E" />
        <circle cx="9" cy="12" r="3" fill="#A259FF" />
        <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
        <path d="M9 15h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-3z" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    id: 'react-nextjs',
    name: 'React & Next.js',
    category: 'UI/UX & Web',
    badge: '12+ Interactive Websites & Web Products',
    creativeRole:
      'Developed 12+ responsive, modern web applications and interactive client portals. Leveraged component-driven architecture, fluid micro-interactions, and fast load times.',
    deliverablesSummary: '12+ Responsive Web Portals & Digital Tools',
    brandColor: '#61DAFB',
    accentBg: 'bg-cyan-50/80 border-cyan-200/80',
    tabAssociation: 'freelancing',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    category: 'UI/UX & Web',
    badge: 'Design System & Responsive Architecture',
    creativeRole:
      'Crafted utility-first design systems, responsive typography, and consistent spacing across custom freelance storefronts and web platforms.',
    deliverablesSummary: 'Pixel-Perfect Responsive Styling & Layouts',
    brandColor: '#38BDF8',
    accentBg: 'bg-sky-50/80 border-sky-200/80',
    tabAssociation: 'freelancing',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path
          d="M12.5 7.5C11 5.5 9 5 6.5 6 4 7 3 9 3.5 12c.5-1.5 1.5-2.5 3-2.5 2 0 3 1.5 3.5 2.5 1.5 2 3.5 2.5 6 1.5 2.5-1 3.5-3 3-6-.5 1.5-1.5 2.5-3 2.5-2 0-3-1.5-3.5-2.5zm-5 6C6 11.5 4 11 1.5 12 -1 13-2 15-1.5 18c.5-1.5 1.5-2.5 3-2.5 2 0 3 1.5 3.5 2.5 1.5 2 3.5 2.5 6 1.5 2.5-1 3.5-3 3-6-.5 1.5-1.5 2.5-3 2.5-2 0-3-1.5-3.5-2.5z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    id: 'python-jupyter',
    name: 'Python & Jupyter',
    category: 'Data & Research',
    badge: '17+ Quantitative Research Projects',
    creativeRole:
      'Formulated statistical models, performed exploratory data analysis (EDA), automated data extraction, and processed experimental datasets for 17+ academic and commercial research initiatives.',
    deliverablesSummary: 'Quantitative Analysis & Statistical Modeling',
    brandColor: '#3776AB',
    accentBg: 'bg-blue-50/80 border-blue-200/80',
    tabAssociation: 'freelancing',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path
          d="M11.9 3c-4.4 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H6.1S3 7.1 3 11.6c0 4.4 2.7 4.3 2.7 4.3h1.6v-2.3s-.1-2.7 2.7-2.7h4.6s2.6.1 2.6-2.5V5.5S17.4 3 11.9 3zm-2.4 1.5a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
          fill="#3776AB"
        />
        <path
          d="M12.1 21c4.4 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h5.9s3.1.4 3.1-4.1c0-4.4-2.7-4.3-2.7-4.3h-1.6v2.3s.1 2.7-2.7 2.7H9.4s-2.6-.1-2.6 2.5v2.9s-.2 2.5 5.3 2.5zm2.4-1.5a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    id: 'tableau-looker',
    name: 'Tableau & Looker Studio',
    category: 'Data & Research',
    badge: 'Interactive Business Intelligence Dashboards',
    creativeRole:
      'Designed interactive analytical dashboards, telemetry KPI summaries, and executive reports that translated raw business metrics into clear strategic direction.',
    deliverablesSummary: 'Executive Dashboards & Decision Telemetry',
    brandColor: '#E97627',
    accentBg: 'bg-amber-50/80 border-amber-200/80',
    tabAssociation: 'freelancing',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M12 3v18M3 12h18M7.5 7.5l9 9M16.5 7.5l-9 9" stroke="#E97627" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" fill="#E97627" />
        <circle cx="12" cy="4" r="1.5" fill="#2B5B84" />
        <circle cx="20" cy="12" r="1.5" fill="#D22B2B" />
        <circle cx="12" cy="20" r="1.5" fill="#2B5B84" />
        <circle cx="4" cy="12" r="1.5" fill="#D22B2B" />
      </svg>
    ),
  },
  {
    id: 'notion-linear',
    name: 'Notion & Linear',
    category: 'Operations',
    badge: 'Full-Lifecycle Project Management (15+ Projects)',
    creativeRole:
      'Governed 15+ business and academic projects from initial ideation, client scoping sprints, feedback milestones to final asset handoff with structured documentation.',
    deliverablesSummary: '15+ Projects Managed from Ideation to Delivery',
    brandColor: '#000000',
    accentBg: 'bg-stone-100 border-stone-200',
    tabAssociation: 'freelancing',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#000000" />
        <path
          d="M6.5 6.5l3.2.3v10.7l-3.2-.3V6.5zm3.2 0l7.8 11V6.5h-2.2v8.5L9.7 6.5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: 'google-scholar-research',
    name: 'Google Scholar & Research Tools',
    category: 'Data & Research',
    badge: '17+ Academic & Industry Research Deliverables',
    creativeRole:
      'Conducted peer-reviewed literature reviews, citation analysis, market feasibility studies, and academic synthesis across international business and digital domains.',
    deliverablesSummary: 'Rigorous Academic & Market Research Synthesis',
    brandColor: '#4285F4',
    accentBg: 'bg-blue-50/80 border-blue-200/80',
    tabAssociation: 'freelancing',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M12 4L3 9l9 5 9-5-9-5z" fill="#4285F4" />
        <path d="M6 11v5c0 2.2 2.7 4 6 4s6-1.8 6-4v-5" stroke="#3367D6" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M21 9v7" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const graphicDesignSoftwareStack: SoftwareTool[] = [
  {
    id: 'gd-photoshop',
    name: 'Adobe Photoshop',
    category: 'Raster & Creative Suite',
    badge: '220+ Creatives & 15+ Festival Campaigns',
    creativeRole:
      'Core creative engine for 220+ social media creatives across 3 real estate brands. Mastered multi-layer compositing, color correction of architectural elevation renders, tricolor festival palettes, and high-impact square post layouts.',
    deliverablesSummary: '220+ Social Media Creatives & 15+ Festival Campaigns',
    brandColor: '#31A8FF',
    accentBg: 'bg-sky-50/80 border-sky-200/80',
    tabAssociation: 'graphic-design',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#001E36" />
        <path
          d="M6.5 7h3.8c1.8 0 3 .9 3 2.5 0 1.7-1.3 2.6-3 2.6h-2v4.4H6.5V7zm1.8 3.6h1.7c.8 0 1.4-.4 1.4-1.2 0-.7-.6-1.1-1.4-1.1H8.3v2.3z"
          fill="#31A8FF"
        />
        <path
          d="M14.2 13.2c.7-.6 1.6-.9 2.5-.9 1.4 0 2.3.8 2.3 2 0 1.3-1.1 1.7-2.4 2.1-.9.3-1.3.6-1.3 1.1 0 .6.5.9 1.3.9.7 0 1.4-.3 1.9-.8l.8 1c-.8.8-1.8 1.1-2.9 1.1-1.6 0-2.7-.9-2.7-2.3 0-1.4 1.1-2 2.4-2.3.9-.3 1.3-.5 1.3-1 0-.4-.4-.7-1-.7-.6 0-1.2.3-1.6.7l-.7-.9z"
          fill="#31A8FF"
        />
      </svg>
    ),
  },
  {
    id: 'gd-canva',
    name: 'Canva Pro',
    category: 'Rapid Brand Layouts',
    badge: 'Fast Turnaround Social Creatives',
    creativeRole:
      'Accelerated production for daily property updates, festive stories, quick lead generation banners, and stylized typography templates maintaining strict client brand standards.',
    deliverablesSummary: 'Multi-Brand Layouts & Rapid Feed Adaptations',
    brandColor: '#00C4CC',
    accentBg: 'bg-teal-50/80 border-teal-200/80',
    tabAssociation: 'graphic-design',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="11" fill="#00C4CC" />
        <path
          d="M15.5 9c-.8-.7-1.9-1-3.2-1-2.8 0-4.8 2.1-4.8 5s1.9 5 4.8 5c1.4 0 2.6-.4 3.4-1.2.3-.3.3-.7 0-.9l-.6-.6c-.2-.2-.6-.2-.8.1-.6.6-1.4.9-2.3.9-1.9 0-3.2-1.4-3.2-3.3 0-1.8 1.3-3.3 3.2-3.3.9 0 1.6.2 2.1.6.3.2.6.2.8 0l.6-.6c.3-.3.2-.6 0-.7z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: 'gd-ai-synthesis',
    name: 'AI-Assisted Visual Synthesis',
    category: 'Generative Composition',
    badge: 'AI Imagery & Typography Integration',
    creativeRole:
      'Created AI-assisted visual compositions, combining generated imagery, bespoke typography, layouts, branding elements, and marketing messaging into polished, publish-ready designs.',
    deliverablesSummary: 'Prompt-Guided Conceptual Artwork & Creative Fusion',
    brandColor: '#8B5CF6',
    accentBg: 'bg-purple-50/80 border-purple-200/80',
    tabAssociation: 'graphic-design',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#8B5CF6" />
        <path d="M12 4l2.5 5.5L20 12l-5.5 2.5L12 20l-2.5-5.5L4 12l5.5-2.5L12 4z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'gd-illustrator',
    name: 'Adobe Illustrator',
    category: 'Vector & Identity',
    badge: 'Vector Logos & Architectural Floor Plans',
    creativeRole:
      'Designed vector property icons, amenity badges, stylized project crests, and 2D floor plans with crisp geometric clarity and precision.',
    deliverablesSummary: 'Vector Icons, Crests & Amenity Infographics',
    brandColor: '#FF9A00',
    accentBg: 'bg-amber-50/80 border-amber-200/80',
    tabAssociation: 'graphic-design',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#330000" />
        <path d="M7 17l3.5-10h1.5l3.5 10h-2l-.7-2.3H9.2L8.5 17H7zm2.7-4h2.6L11 8.5 9.7 13z" fill="#FF9A00" />
        <circle cx="17" cy="8" r="1.2" fill="#FF9A00" />
        <path d="M16 11h2v6h-2v-6z" fill="#FF9A00" />
      </svg>
    ),
  },
  {
    id: 'gd-meta-business',
    name: 'Meta Business Suite',
    category: 'Publishing & Deployment',
    badge: 'Multi-Brand Publishing to 3 Site Accounts',
    creativeRole:
      'Published and managed all 220+ creatives directly to the official Instagram accounts of Sunrise Infinity, Sunrise Homes, and Sharnam Happy Homes with optimized alt tags and audience targeting.',
    deliverablesSummary: 'Multi-Account Social Media Publishing Engine',
    brandColor: '#0064E0',
    accentBg: 'bg-blue-50/80 border-blue-200/80',
    tabAssociation: 'graphic-design',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#0064E0" />
        <circle cx="12" cy="12" r="6" stroke="#FFFFFF" strokeWidth="1.8" />
        <path d="M12 8v8M8 12h8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const selfEditingSoftwareStack: SoftwareTool[] = [
  {
    id: 'self-premiere-pro',
    name: 'Adobe Premiere Pro',
    category: 'Video Post-Production',
    badge: 'Primary NLE Timeline Editing',
    creativeRole:
      'Long-form rough cuts, multi-camera sequencing, frame-accurate beat sync, speed ramping, and documentary editing for Kashi 84 Ghats, Mahakumbh, and Himalayan trek videos.',
    deliverablesSummary: 'Complex Narrative Sequences & Multi-Track Audio Mixing',
    brandColor: '#9999FF',
    accentBg: 'bg-indigo-50/80 border-indigo-200/80',
    tabAssociation: 'both',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#00005B" />
        <path d="M6 18V6h5.5a3.5 3.5 0 010 7H8v5H6zm2-7h3.5a1.5 1.5 0 000-3H8v3zM15 11v7h-2V11h2zm-.2-2.8a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" fill="#9999FF" />
      </svg>
    ),
  },
  {
    id: 'self-capcut',
    name: 'CapCut Desktop',
    category: 'Vertical Short-Form',
    badge: 'Dynamic Mobile Video & Kinetic FX',
    creativeRole:
      'High-velocity vertical 9:16 post-production, kinetic typography, automated audio waveform synchronization, optical flow speed ramps, and trending transitions.',
    deliverablesSummary: '60+ Vertical 9:16 Reels for Instagram & Shorts',
    brandColor: '#00F2FE',
    accentBg: 'bg-cyan-50/80 border-cyan-200/80',
    tabAssociation: 'both',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#111827" />
        <path d="M7 6l5 6-5 6h3l5-6-5-6H7zm7 0l5 6-5 6h3l5-6-5-6h-3z" fill="#00F2FE" />
      </svg>
    ),
  },
  {
    id: 'self-sound-design',
    name: 'Kinetic Sound Design',
    category: 'Audio Engineering',
    badge: 'Foley, Ambient Textures & Beat Matching',
    creativeRole:
      'Multi-layered audio mixing pairing sacred chants, traditional folk instruments, ambient outdoor soundscapes (Ganges waves, temple bells, mountain winds), and bass drops.',
    deliverablesSummary: 'Immersive Spatial & Cinematic Soundtracks',
    brandColor: '#10B981',
    accentBg: 'bg-emerald-50/80 border-emerald-200/80',
    tabAssociation: 'both',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="5" fill="#064E3B" />
        <path d="M4 10v4h3l4 4V6L7 10H4zm11-2a4.5 4.5 0 010 8m2.5-10.5a8 8 0 010 13" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'self-color-grading',
    name: 'Lumetri & Color Science',
    category: 'Color Grading',
    badge: 'Atmospheric Film Looks & Tone Curves',
    creativeRole:
      'Custom LUT development, golden hour enhancement, shadow tinting, and saturation isolation for vibrant festival colors (Holi, Ganpati) and high-altitude snow peaks.',
    deliverablesSummary: 'Distinct Visual Signatures Across 60+ Videos',
    brandColor: '#F59E0B',
    accentBg: 'bg-amber-50/80 border-amber-200/80',
    tabAssociation: 'both',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="2" />
        <path d="M12 3a9 9 0 010 18V3z" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    id: 'self-google-drive',
    name: 'Google Drive Archive',
    category: 'Cloud Storage & Delivery',
    badge: 'self_video_edits Cloud Hub',
    creativeRole:
      'Organized cloud storage and streaming architecture for 60+ full-resolution MP4/MOV reel exports with organized subfolders for Ganpati edits and creative concepts.',
    deliverablesSummary: 'Centralized Master Video Vault & Collaboration',
    brandColor: '#EA4335',
    accentBg: 'bg-red-50/80 border-red-200/80',
    tabAssociation: 'both',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M8.2 18.5l-4.7-8.2 4.7-8.3h9.6l4.7 8.3-4.7 8.2H8.2z" stroke="#EA4335" strokeWidth="1.5" />
        <path d="M8.2 2h7.6l4.7 8.3-4.7 8.2" stroke="#4285F4" strokeWidth="1.5" />
        <path d="M3.5 10.3l4.7 8.2h7.6" stroke="#34A853" strokeWidth="1.5" />
      </svg>
    ),
  },
];


