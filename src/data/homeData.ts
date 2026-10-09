import { VrushinProfile, ProjectPreviewItem, WritingPreviewItem } from '../types/portfolio';

export const vrushinProfile: VrushinProfile = {
  name: 'Vrushin Prajapati',
  location: 'Vadodara, IN',
  weather: '28°C',
  intro:
    "Hello! I'm Vrushin and you're currently exploring my tiny corner of the internet. I use this space to project my ideas, build business telemetry models, and explore applied AI systems.",
  summaryBullets: [
    {
      text: 'Social Media Executive at Shiv Shakti Developers Builders Pvt Ltd.',
      linkSection: 'work',
    },
    {
      text: 'Freelance Social Media Manager & Video Editor — Cultural & Live Events',
      linkSection: 'work',
    },
    {
      text: 'Graphic Designer — Creative & Digital Content Visuals',
      linkSection: 'work',
    },
    {
      text: "International BBA in E-Commerce & Digital Marketing (8.0 CGPA) — Paris School of Business ('24)",
      linkSection: 'academic',
    },
    {
      text: 'Certified in Google Digital Marketing, Meta Marketing Analytics, Anthropic AI & Oxford AI',
      linkSection: 'certifications',
    },
    {
      text: 'Completed externships with TikTok, Beats by Dre, BeReal, Breaking Games.',
      linkSection: 'professional',
    },
    {
      text: 'Based in Vadodara, Gujarat, India',
    },
  ],
  socials: {
    email: 'vrushin1009@gmail.com',
    twitter: 'https://x.com/vru_03n',
    linkedin: 'https://www.linkedin.com/in/vru03',
    github: 'https://github.com/vru-03',
    instagram: 'https://www.instagram.com/vru_.03/',
    resumeUrl: 'https://drive.google.com/drive/folders/1LqAWkwLWUOtmcrz4EwE4CsM_wR2aYvke?usp=sharing',
    workDriveUrl: 'https://drive.google.com/drive/folders/1uDEA4ZnLi665-oIJlmRK8JSURpUZPyzR?usp=sharing',
  },
  nowPlaying: {
    song: 'livin slow',
    artist: 'longleggss',
    link: 'https://youtu.be/OCg3TNHa5Sw?si=QbbFt6hB4UrZxEsA',
  },
};

export const homeProjectsPreview: ProjectPreviewItem[] = [
  {
    id: 'shiv-shakti-developers',
    title: 'Shiv Shakti Developers · Social Media Executive',
    description: 'Multi-site operations, 230+ creatives, 220+ reels & Meta ad funnels',
    iconBg: '#0f766e',
    iconText: 'SS',
  },
  {
    id: 'vibrant-norta-freelance',
    title: 'Vibrant Norta · Freelance Video Editor',
    description: 'Short-form content strategy & post-production (423K+ views)',
    iconBg: '#7c3aed',
    iconText: 'VN',
  },
  {
    id: 'graphic-design-real-estate',
    title: 'Real Estate Graphic Design',
    description: 'Brand creatives, festival campaigns & AI compositions',
    iconBg: '#d97706',
    iconText: 'GD',
  },
  {
    id: 'self-edited-reels',
    title: 'Self-Edited Reels & Creative Archive',
    description: '60+ sacred, travel & festival vertical reels in 9:16 (Google Drive archive)',
    iconBg: '#dc2626',
    iconText: 'RE',
  },
  {
    id: 'freelance-digital-projects',
    title: 'Digital Deliverables & Consulting',
    description: 'Interactive web deliverables, research & business decks',
    iconBg: '#4338ca',
    iconText: 'FP',
  },
];

export const homeWritingPreview: (WritingPreviewItem & {
  readTime?: string;
  summary?: string;
  content?: string[];
})[] = [
  {
    id: 'ecommerce-unit-economics',
    title: 'E-Commerce Unit Economics',
    date: '12.08.26',
    tag: 'E-Commerce',
    readTime: '2 min read',
    summary: 'Why blended contribution margin matters more than ad dashboard ROAS.',
    content: [
      'In modern e-commerce, it is easy to get excited by a high return on ad spend (ROAS) on an advertising dashboard. However, a strong ROAS does not always mean the business is profitable at month-end.',
      'When you account for product costs, packaging, shipping, returns, and payment gateway fees, an apparently profitable campaign can quickly turn negative. Sustainable growth comes from tracking your net contribution margin after all variable costs are paid.',
      'Long-term brand health depends on repeat purchase velocity and customer lifetime value rather than buying one-time discount shoppers.',
    ],
  },
  {
    id: 'applied-ai-marketing',
    title: 'Applied AI in Marketing',
    date: '24.05.26',
    tag: 'Applied AI',
    readTime: '2 min read',
    summary: 'Using generative tools with structured constraints for faster creative workflows.',
    content: [
      'Generative AI is transforming marketing workflows, but it works best when given strict guidelines rather than vague prompts.',
      'Providing explicit context—such as audience tone, brand anti-patterns, and gold-standard reference examples—helps language models generate usable drafts instead of generic corporate jargon.',
      'In creative production, combining AI-generated visual drafts with human typography and art direction delivers high output speed while protecting brand consistency.',
    ],
  },
  {
    id: 'marketing-analytics-dashboards',
    title: 'Actionable Marketing Dashboards',
    date: '28.03.26',
    tag: 'Marketing Analysis',
    readTime: '2 min read',
    summary: 'Building reporting tools that pinpoint bottlenecks instead of displaying vanity charts.',
    content: [
      'Many marketing dashboards suffer from information clutter, showing dozens of graphs that look impressive but fail to answer what action to take next.',
      'A practical analytics dashboard tracks a few critical indicators: ad cost pacing, creative fatigue rates, and drop-off points along the customer funnel.',
      'When each tracked metric connects directly to an operational fix, marketing data becomes a decision-making tool rather than just a backward-looking report.',
    ],
  },
  {
    id: 'digital-marketing-multi-channel',
    title: 'Multi-Channel Digital Marketing',
    date: '19.11.25',
    tag: 'Digital Marketing',
    readTime: '2 min read',
    summary: 'Aligning social discovery with fast CRM follow-ups to increase conversion rates.',
    content: [
      'Prospective customers rarely buy after seeing a single advertisement. They explore social media profiles, check websites, and look for social proof.',
      'Aligning organic social content with targeted paid campaigns builds trust early in the discovery phase.',
      'Connecting advertising forms directly to CRM systems ensures inquiries receive immediate attention, turning interest into measurable business outcomes.',
    ],
  },
  {
    id: 'social-media-retention',
    title: 'Mechanics of Short-Form Video',
    date: '14.08.25',
    tag: 'Social Media',
    readTime: '2 min read',
    summary: 'How hook pacing, visual transitions, and authentic themes drive video reach.',
    content: [
      'On platforms like Instagram Reels and YouTube Shorts, viewer retention in the opening two seconds determines whether the algorithm recommends the video.',
      'Fast pacing, dynamic cuts, and timely audio cues help capture attention in fast-moving social feeds.',
      'While technical hooks boost initial views, lasting audience engagement relies on authentic storytelling and relatable themes.',
    ],
  },
  {
    id: 'customer-retention-ltv',
    title: 'Customer Retention & Lifetime Value',
    date: '20.02.25',
    tag: 'E-Commerce',
    readTime: '2 min read',
    summary: 'Why repeat customer loyalty is the best shield against rising advertising costs.',
    content: [
      'As digital advertising costs continue to rise across major channels, relying purely on first-time customer acquisition becomes increasingly expensive.',
      'Investing in post-purchase communication, automated email flows, and helpful onboarding builds repeat purchase habits.',
      'Even a modest increase in customer retention significantly expands lifetime value and creates a much more resilient business.',
    ],
  },
];
