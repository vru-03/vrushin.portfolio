import { WorkProject, WorkCategory } from '../types/portfolio';

export interface CategoryInfo {
  id: WorkCategory;
  name: string;
  roleTitle: string;
  companyOrContext: string;
  period: string;
  tagline: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  capabilities: string[];
}

export const workCategories: CategoryInfo[] = [
  {
    id: 'social-media',
    name: 'Social Media Executive',
    roleTitle: 'Social Media Executive',
    companyOrContext: 'Shiv Shakti Developers Builders Pvt Ltd.',
    period: 'Feb 2024 – Present',
    tagline: 'End-to-End Content, Graphic Design, Paid Ads & Multi-Site Operations',
    description:
      'Managed digital marketing across 4 site accounts and 3 social platforms. Created 230+ creatives and 220+ posts/reels for property & project promotion. Executed 12+ Facebook & Instagram ad campaigns from strategy to launch. Owned end-to-end content, graphic design, paid ads & social media management.',
    stats: [
      { label: 'Site Accounts', value: '4 Sites' },
      { label: 'Social Platforms', value: '3 Channels' },
      { label: 'Marketing Creatives', value: '230+ Assets' },
      { label: 'Posts & Reels', value: '220+ Produced' },
      { label: 'Meta Ad Campaigns', value: '12+ Executed' },
      { label: 'Operations Scope', value: 'Buffer & HubSpot' },
    ],
    capabilities: [
      '230+ Property Creatives, Hoardings & Banners (Photoshop & Canva)',
      '220+ Dynamic Video Reels & Walkthroughs (Premiere Pro & CapCut)',
      '12+ Full-Funnel Facebook & Instagram Ad Campaigns (Strategy to Launch)',
      'Multi-Account Automation & Scheduling (Buffer & Meta Business Suite)',
      'Inbound Lead Capture & CRM Pipeline Routing (HubSpot & Sheets)',
    ],
  },
  {
    id: 'freelancing',
    name: 'Freelance Projects',
    roleTitle: 'Freelance Social Media Manager & Video Editor',
    companyOrContext: 'Vibrant Norta',
    period: 'June 2024 – Present',
    tagline: 'Social Media Management | Content Strategy | Video Editing',
    description:
      'Managed the brand’s social media presence, developing content concepts aligned with its brand identity, events, and target audience. Conceptualized and edited 27+ short-form videos/reels, generating 423K+ cumulative views, with top-performing content reaching 59.8K views. Executed video content from idea to final edit, including creative direction, concept development, visual storytelling, editing, and presentation.',
    stats: [
      { label: 'Cumulative Views', value: '423K+ Views' },
      { label: 'Short-Form Reels', value: '27+ Videos' },
      { label: 'Top Reel Peak', value: '59.8K Views' },
      { label: 'Creative Direction', value: 'Idea to Final Edit' },
      { label: 'Post-Production', value: 'Premiere & CapCut' },
      { label: 'Original Concepts', value: 'Events & Artists' },
    ],
    capabilities: [
      'Managed Brand Social Media Presence & Brand Concept Strategy',
      '27+ Short-Form Videos/Reels Produced (423K+ Cumulative Views)',
      'Top-Performing Content Peaking at 59.8K Views',
      'End-to-End Video Post-Production (Premiere Pro & CapCut)',
      'Event Promotions, Artist Features, BTS & Audience Engagement',
      'Independent Creative Workflow from Ideation to Publish-Ready Content',
    ],
  },
  {
    id: 'graphic-design',
    name: 'Graphic Designing',
    roleTitle: 'Graphic Designer — Real Estate & Brand Social Media',
    companyOrContext: 'Graphic Designer — Real Estate & Social Media',
    period: '2024 – Present',
    tagline: 'Graphic Design | Social Media Creatives | Brand Design | Visual Communication',
    description:
      'Designed 220+ social media creatives across 3 real-estate brands — Sunrise Infinity, Sunrise Homes, and Sharnam Happy Homes. Created promotional designs for residential projects, property features, amenities, lifestyle campaigns, project launches, and lead-generation content. Developed creative campaigns for 15+ festivals and special occasions, and created AI-assisted visual compositions into polished, publish-ready designs.',
    stats: [
      { label: 'Social Creatives', value: '220+ Designed' },
      { label: 'Real Estate Brands', value: '3 Accounts' },
      { label: 'Festival Campaigns', value: '15+ Occasions' },
      { label: 'AI Visual Compositions', value: 'Layout & Type' },
      { label: 'Brand Consistency', value: '100% Cohesive' },
      { label: '1:1 Visual Spaces', value: '28 Post Slots' },
    ],
    capabilities: [
      'Designed 220+ Social Media Creatives across 3 Real Estate Brands',
      'Promotional Designs for Residential Projects, Amenities & Lifestyle Campaigns',
      'Creative Campaigns for 15+ Festivals & Special Occasions',
      'AI-Assisted Visual Compositions with Polished Typography & Branding',
      'Consistent Brand Identity, Typography & Visual Hierarchy Across Client Accounts',
      'Audience-Focused Real Estate Marketing Creatives for Social Media Promotion',
    ],
  },
  {
    id: 'all',
    name: 'All Experience',
    roleTitle: 'Social Media Executive, Video Editor & Graphic Designer',
    companyOrContext: 'Executive Post + Freelance Practice + Brand Design',
    period: '2024 – Present',
    tagline: 'Comprehensive Overview of Executive Post, Viral Video Editing & Graphic Design',
    description:
      'A unified portfolio combining enterprise-grade real estate digital marketing leadership at Shiv Shakti Developers Builders Pvt Ltd. (230+ creatives, 220+ reels, 12+ Meta ad campaigns), viral short-form video editing at Vibrant Norta (423K+ views, top 59.8K), and high-craft graphic design across 3 major real estate brands.',
    stats: [
      { label: 'Site Accounts & Brands', value: '4 Sites / 3 Brands' },
      { label: 'Total Creatives & Content', value: '450+ Assets' },
      { label: 'Short-Form Video Views', value: '423K+ Views' },
      { label: 'Festival Campaigns', value: '15+ Occasions' },
      { label: 'Meta Ad Campaigns', value: '12+ Executed' },
      { label: 'Creative Tech Stack', value: 'Buffer, HubSpot, Adobe' },
    ],
    capabilities: [
      'Multi-Site Real Estate Digital Marketing (Buffer, HubSpot, Meta Suite)',
      'High-Craft Visual Design & Hoardings (Photoshop, Canva, Illustrator)',
      'Viral Short-Form Content Creation & Video Editing (Premiere Pro & CapCut)',
      'Full-Funnel Paid Advertising & Inbound Lead Acquisition (12+ Meta Campaigns)',
      'Multi-Brand Visual Identity Governance Across 3 Premier Accounts',
    ],
  },
];

export const workProjectsList: WorkProject[] = [
  // ==========================================
  // TAB 1: SOCIAL MEDIA EXECUTIVE — 1 UNIFIED COMPREHENSIVE CASE
  // ==========================================
  {
    id: 'ss-executive-overall-deliverables',
    title: '4-Site Real Estate Digital Operations, 230+ Creatives, 220+ Reels & Paid Ads',
    client: 'Shiv Shakti Developers Builders Pvt Ltd.',
    category: 'social-media',
    role: 'Social Media Executive',
    period: 'Feb 2024 – Present',
    headline:
      'Managed end-to-end digital marketing across 4 site accounts and 3 social platforms: designed 230+ creatives, edited 220+ reels, executed 12+ Meta ad campaigns from strategy to launch, and automated multi-account scheduling & lead routing via Buffer and HubSpot.',
    deliverables: [
      'Managed digital marketing across 4 distinct residential & commercial site accounts and 3 social channels (Instagram, Facebook, LinkedIn)',
      'Designed 230+ property creatives, hoardings, launch banners, and amenity showcases using Adobe Photoshop & Canva',
      'Produced and edited 220+ dynamic video reels, construction milestone updates, and drone walkthroughs using Premiere Pro & CapCut',
      'Executed 12+ full-funnel Facebook & Instagram ad campaigns from strategy to launch, generating high-intent property buyer leads',
      'Implemented multi-account scheduling with Buffer and synchronized inbound lead routing to on-site sales teams via HubSpot CRM',
      'Paced campaign ad spend, optimized Cost-per-Lead (CPL), and maintained 100% on-schedule publishing cadence',
    ],
    impactMetrics: [
      { label: 'Site Accounts', value: '4 Sites' },
      { label: 'Marketing Creatives', value: '230+ Assets' },
      { label: 'Posts & Reels', value: '220+ Videos' },
      { label: 'Meta Ad Campaigns', value: '12+ Executed' },
    ],
    tools: ['Buffer', 'HubSpot', 'Premiere Pro', 'CapCut', 'Adobe Photoshop', 'Meta Ads Manager', 'Canva Pro', 'Meta Business Suite'],
    spotlight: true,
    socialLinks: [
      { label: 'Sunrise Infinity', url: 'https://www.instagram.com/sunriseinfinity/', handle: '@sunriseinfinity' },
      { label: 'Sunrise Homes 88', url: 'https://www.instagram.com/sunrisehomes88/', handle: '@sunrisehomes88' },
      { label: 'Sharnam Happy Homes', url: 'https://www.instagram.com/sharmamhappyhomes/', handle: '@sharmamhappyhomes' },
    ],
    visualTheme: {
      bgGradient: 'from-blue-950/15 via-emerald-950/10 to-stone-900/5',
      badgeLabel: 'Executive Digital Marketing Operations',
      accentColor: 'text-blue-700',
    },
    caseStudy: {
      overview:
        'Shiv Shakti Developers Builders Pvt Ltd. is an established real estate developer with multiple active residential and commercial sites including Sunrise Infinity, Sunrise Homes 88, and Sharnam Happy Homes. As Social Media Executive, I took complete ownership of digital operations: establishing distinct branding for each project, producing high-craft visual assets, and running paid acquisition funnels.',
      challenge:
        'Managing 4 separate site accounts across 3 different social platforms created operational hurdles: inconsistent publishing cadences, disjointed visual branding, static imagery failing to convey architectural craftsmanship, and slow buyer lead follow-up.',
      solution:
        'Built an integrated digital marketing infrastructure: deployed Buffer for multi-account queue scheduling, configured HubSpot CRM to instantly route inbound inquiries to sales reps, designed 230+ high-resolution creatives in Photoshop and Canva, cut 220+ dynamic video reels in Premiere Pro and CapCut, and structured 12+ full-funnel Meta ad campaigns with geo-targeted lead forms.',
      results: [
        'Streamlined 4 site accounts under a synchronized publishing engine across Instagram, Facebook, and LinkedIn.',
        'Created 230+ production-grade creatives and 220+ engaging reels that drove record organic saves and buyer inquiries.',
        'Executed 12+ Meta ad campaigns from strategy to launch with optimized Cost-Per-Lead (CPL).',
        'Cut buyer inquiry initial response times to under 15 minutes across all site message inboxes with HubSpot routing.',
        'Maintained a 100% on-schedule post deployment record using automated Buffer queues.',
      ],
      keyTakeaway:
        'Combining high-craft visual content with automated Buffer scheduling and HubSpot CRM routing turns social media channels into predictable real estate sales pipelines.',
    },
  },

  // ==========================================
  // TAB 2: FREELANCE SOCIAL MEDIA & DIGITAL MARKETING (VIBRANT NORTA PRIORITY)
  // ==========================================
  {
    id: 'vibrant-norta-social-media',
    title: 'Vibrant Norta — Freelance Social Media Manager & Video Editor',
    client: 'Vibrant Norta (Brand & Event Productions)',
    category: 'freelancing',
    role: 'Freelance Social Media Manager & Video Editor',
    period: 'June 2024 – Present',
    headline:
      'Managed the brand’s social media presence, conceptualized and edited 27+ short-form videos/reels generating 423K+ views (top reel reaching 59.8K views), and independently owned the complete creative workflow.',
    deliverables: [
      'Managed the brand’s social media presence, developing content concepts aligned with its brand identity, events, and target audience',
      'Conceptualized and edited 27+ short-form videos/reels, generating 423K+ cumulative views, with top-performing content reaching 59.8K views',
      'Executed video content from idea to final edit, including creative direction, concept development, visual storytelling, editing, and presentation',
      'Developed original video ideas for event promotions, artist features, behind-the-scenes content, and audience engagement',
      'Independently handled the complete creative workflow, from identifying content opportunities to delivering publish-ready content',
    ],
    impactMetrics: [
      { label: 'Cumulative Views', value: '423K+ Views' },
      { label: 'Short-Form Reels', value: '27+ Produced' },
      { label: 'Top Performing Video', value: '59.8K Peak' },
    ],
    tools: ['Premiere Pro', 'CapCut', 'Instagram Reels', 'Adobe Photoshop', 'Canva Pro'],
    spotlight: true,
    visualTheme: {
      bgGradient: 'from-pink-900/10 via-purple-900/5 to-transparent',
      badgeLabel: 'Viral Video & Social Management',
      accentColor: 'text-pink-600',
    },
    caseStudy: {
      overview:
        'Vibrant Norta is a high-energy brand and cultural event production celebrating music, artistic performances, and community celebrations. The project required an agile social media manager and video editor capable of transforming live festival moments and promotional announcements into viral short-form content.',
      challenge:
        'Cutting through the noise of crowded social feeds requires more than standard recap clips. It demands fast retention hooks in the first 2 seconds, rhythmic editing synced to trending audio, sharp color grading, and creative storytelling that compels viewers to share.',
      solution:
        'Took full independent ownership of the creative pipeline: generated original video ideas for event teasers, artist spotlights, and backstage energy. Used Premiere Pro and CapCut for video post-production — cutting tight pacing, integrating kinetic typography and sound design, and engineering high-impact reels formatted specifically for Instagram algorithms.',
      results: [
        'Generated over 423,000+ cumulative views across 27+ published short-form reels.',
        'Propelled top-performing video content to 59.8K organic views with exceptional save and share ratios.',
        'Established a recognizable, vibrant visual signature that elevated brand prestige and event ticket interest.',
        'Handled the complete workflow independently from raw footage ingestion to publish-ready deployment.',
      ],
      keyTakeaway:
        'High-velocity visual storytelling combined with disciplined video post-production transforms live events into viral digital community assets.',
    },
  },

  // ==========================================
  // TAB 3: GRAPHIC DESIGNING — 1 UNIFIED COMPREHENSIVE CASE
  // ==========================================
  {
    id: 'gd-real-estate-brand-creatives-overall',
    title: '220+ Real Estate Creatives, 15+ Festival Campaigns & AI-Assisted Brand Design',
    client: 'Sunrise Infinity · Sunrise Homes · Sharnam Happy Homes',
    category: 'graphic-design',
    role: 'Graphic Designer — Real Estate & Brand Social Media',
    period: '2024 – Present',
    headline:
      'Designed 220+ social media creatives across 3 real-estate brands, created promotional designs for residential launches, crafted 15+ festival campaigns, and built AI-assisted visual compositions into polished, publish-ready collateral.',
    deliverables: [
      'Designed 220+ social media creatives across 3 real-estate brands — Sunrise Infinity, Sunrise Homes, and Sharnam Happy Homes',
      'Created promotional designs for residential projects, property features, amenities, lifestyle campaigns, project launches, and lead-generation content',
      'Developed creative campaigns for 15+ festivals and special occasions, including Independence Day, Janmashtami, Raksha Bandhan, Ganesh Chaturthi, Rath Yatra, Friendship Day, Father\'s Day, and Yoga Day',
      'Created AI-assisted visual compositions, combining generated imagery, typography, layouts, branding elements, and marketing messaging into polished, publish-ready designs',
      'Maintained consistent brand identity, typography, visual hierarchy, composition, and messaging across multiple client accounts',
      'Translated real-estate offerings into visually engaging, audience-focused marketing creatives designed for social media communication and property promotion',
    ],
    impactMetrics: [
      { label: 'Creatives Designed', value: '220+ Assets' },
      { label: 'Real Estate Brands', value: '3 Accounts' },
      { label: 'Festival Campaigns', value: '15+ Occasions' },
      { label: 'Visual Grid Slots', value: '15 Slots (1:1)' },
    ],
    tools: ['Adobe Photoshop', 'Canva Pro', 'Adobe Illustrator', 'Figma', 'Midjourney / AI Composition', 'Meta Business Suite'],
    spotlight: true,
    socialLinks: [
      { label: 'Sunrise Infinity', url: 'https://www.instagram.com/sunriseinfinity/', handle: '@sunriseinfinity' },
      { label: 'Sunrise Homes 88', url: 'https://www.instagram.com/sunrisehomes88/', handle: '@sunrisehomes88' },
      { label: 'Sharnam Happy Homes', url: 'https://www.instagram.com/sharmamhappyhomes/', handle: '@sharmamhappyhomes' },
    ],
    visualTheme: {
      bgGradient: 'from-amber-900/10 via-orange-900/5 to-transparent',
      badgeLabel: 'Real Estate & Brand Design',
      accentColor: 'text-amber-700',
    },
    caseStudy: {
      overview:
        'Sunrise Infinity, Sunrise Homes, and Sharnam Happy Homes are three distinguished builder brands serving distinct real estate buyers. Each requires bespoke visual identities, architectural typography, and persuasive property feature presentations on Instagram. Additionally, Indian festive cycles present peak buying seasons requiring rapid, culturally authentic visual campaigns.',
      challenge:
        'Managing three active client accounts simultaneously without visual monotony while ensuring every residential elevation, amenity showcase, and festive occasion retains its unique luxury positioning and sharp typographic hierarchy.',
      solution:
        'Designed 220+ customized social media creatives in Adobe Photoshop and Canva Pro. Formulated clear visual guidelines for each account: golden hour sunset elevations for Sunrise Infinity, family-first handover milestones for Sunrise Homes, and amenity-rich sky deck living for Sharnam Happy Homes. Pioneered an AI-assisted composition workflow fusing prompt-guided baseline visuals with hand-crafted typography, brand crests, and marketing layouts across 15+ festive occasions.',
      results: [
        'Designed over 220+ publish-ready creatives deployed directly onto the three official Instagram accounts.',
        'Engineered 15+ festive campaigns (Independence Day, Janmashtami, Raksha Bandhan, Ganesh Chaturthi, Rath Yatra, Friendship Day, Father\'s Day, Yoga Day) driving peak engagement.',
        'Established strong visual hierarchy and architectural typography that elevated brand perception in the regional market.',
        'Created 15 high-fidelity 1:1 square feed compositions with dedicated visual space.',
      ],
      keyTakeaway:
        'High-craft graphic design bridges architectural reality with buyer aspiration, turning property blueprints into desirable homes.',
    },
  },
];
