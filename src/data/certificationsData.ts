export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerCategory: 'Tech Giant' | 'Elite University' | 'Leading Institute' | 'Industry Standard';
  category:
    | 'Business & Strategy'
    | 'E-Commerce & Marketing'
    | 'Business Analytics'
    | 'AI & GenAI'
    | 'Management & Execution'
    | 'Digital Transformation'
    | 'Digital Productivity';
  credentialType: 'Professional Certificate' | 'Specialization Course' | 'Foundational Credential';
  skills: string[];
  description: string;
  badgeCode: string;
  featured?: boolean;
}

export interface CertificationsCategoryGroup {
  category: CertificationItem['category'];
  description: string;
  iconName: string;
  items: CertificationItem[];
}

export const certificationsData: CertificationItem[] = [
  // 1. BUSINESS & STRATEGY
  {
    id: 'uva-business-strategy',
    title: 'Foundations of Business Strategy',
    issuer: 'University of Virginia',
    issuerCategory: 'Elite University',
    category: 'Business & Strategy',
    credentialType: 'Specialization Course',
    skills: ['Competitive Advantage', 'Industry Structure & 5 Forces', 'Strategic Positioning', 'Value Creation'],
    description: 'Advanced strategic frameworks for competitive dynamics, value-chain positioning, and enterprise corporate strategy.',
    badgeCode: 'UVA-STRAT',
    featured: true,
  },
  {
    id: 'iima-strategy-gametheory',
    title: 'Strategy & Game Theory for Management',
    issuer: 'IIM Ahmedabad',
    issuerCategory: 'Elite University',
    category: 'Business & Strategy',
    credentialType: 'Specialization Course',
    skills: ['Nash Equilibrium', 'Strategic Interaction', 'Payoff Matrices', 'Competitive Decision-Making'],
    description: 'Game theoretic modeling for high-stakes business decisions, competitive pricing, and multi-player strategic conflicts.',
    badgeCode: 'IIMA-GAME',
    featured: true,
  },
  {
    id: 'iitb-design-thinking',
    title: 'Design Thinking & Innovation',
    issuer: 'IIT Bombay',
    issuerCategory: 'Elite University',
    category: 'Business & Strategy',
    credentialType: 'Specialization Course',
    skills: ['Human-Centered Design', 'Customer Empathy', 'Rapid Prototyping', 'Design Sprint Frameworks'],
    description: 'Systematic innovation methodologies for problem framing, user-centric discovery, and iterative concept testing.',
    badgeCode: 'IITB-DT',
  },

  // 2. E-COMMERCE & MARKETING
  {
    id: 'google-digital-marketing-ecommerce',
    title: 'Digital Marketing & E-Commerce Professional Certificate',
    issuer: 'Google',
    issuerCategory: 'Tech Giant',
    category: 'E-Commerce & Marketing',
    credentialType: 'Professional Certificate',
    skills: ['Omnichannel E-Commerce', 'Google Ads & Search Marketing', 'SEO / SEM', 'Customer Loyalty & Retention', 'Shopify Ecosystems'],
    description: 'Comprehensive professional certification covering digital marketing, e-commerce, customer acquisition, analytics, and online business growth.',
    badgeCode: 'GOOG-DMEC',
    featured: true,
  },
  {
    id: 'meta-marketing-analytics',
    title: 'Marketing Analytics Professional Certificate',
    issuer: 'Meta',
    issuerCategory: 'Tech Giant',
    category: 'E-Commerce & Marketing',
    credentialType: 'Professional Certificate',
    skills: ['Marketing Mix Modeling', 'Attribution Modeling', 'A/B Testing & Experimentation', 'Meta Pixel & Conversion API', 'Tableau for Marketing'],
    description: 'Professional training focused on marketing measurement, campaign performance, experimentation, and data-informed marketing decisions.',
    badgeCode: 'META-MKT-ANL',
    featured: true,
  },
  {
    id: 'ibm-digital-marketing-growth-genai',
    title: 'Digital Marketing & Growth Hacking with GenAI',
    issuer: 'IBM',
    issuerCategory: 'Tech Giant',
    category: 'E-Commerce & Marketing',
    credentialType: 'Professional Certificate',
    skills: ['Generative AI for Marketing', 'Growth Hacking Loops', 'Automated Content Pipelines', 'Customer Journey Personalization'],
    description: 'Applying LLMs and generative systems to accelerate growth loops, automated copy generation, and data-informed campaign testing.',
    badgeCode: 'IBM-GENAI-MKT',
  },
  {
    id: 'salford-marketing-digital-era',
    title: 'Marketing in the New Digital Era',
    issuer: 'University of Salford',
    issuerCategory: 'Elite University',
    category: 'E-Commerce & Marketing',
    credentialType: 'Specialization Course',
    skills: ['Digital Transformation in Marketing', 'Consumer Behavior Shifts', 'Social Media Strategy', 'Content Architecture'],
    description: 'Analyzing contemporary shifts in digital consumer habits and modern multi-touchpoint brand communication.',
    badgeCode: 'SALF-MKT',
  },
  {
    id: 'hubspot-digital-marketing',
    title: 'Digital Marketing',
    issuer: 'HubSpot Academy',
    issuerCategory: 'Industry Standard',
    category: 'E-Commerce & Marketing',
    credentialType: 'Foundational Credential',
    skills: ['Inbound Marketing Strategy', 'Content Strategy', 'Search Optimization', 'Email Marketing & Lead Nurturing'],
    description: 'Industry-standard inbound marketing framework for attract-engage-delight customer lifecycles and pipeline generation.',
    badgeCode: 'HUBS-DM',
  },
  {
    id: 'hubspot-content-marketing',
    title: 'Content Marketing',
    issuer: 'HubSpot Academy',
    issuerCategory: 'Industry Standard',
    category: 'E-Commerce & Marketing',
    credentialType: 'Foundational Credential',
    skills: ['Content Creation Frameworks', 'Repurposing Workflows', 'Topic Clusters & Pillar Pages', 'Organic Funnel Optimization'],
    description: 'Strategic content architecture for scalable brand authority, organic discoverability, and audience retention.',
    badgeCode: 'HUBS-CM',
  },
  {
    id: 'canva-marketing',
    title: 'Marketing with Canva',
    issuer: 'Canva',
    issuerCategory: 'Industry Standard',
    category: 'E-Commerce & Marketing',
    credentialType: 'Specialization Course',
    skills: ['Visual Storytelling', 'Brand Kit Consistency', 'Social Campaign Asset Production', 'Rapid Creative Prototyping'],
    description: 'Visual asset design and consistent brand collateral creation for multi-channel digital campaigns.',
    badgeCode: 'CNV-MKT',
  },

  // 3. BUSINESS ANALYTICS
  {
    id: 'google-business-intelligence',
    title: 'Business Intelligence Professional Certificate',
    issuer: 'Google',
    issuerCategory: 'Tech Giant',
    category: 'Business Analytics',
    credentialType: 'Professional Certificate',
    skills: ['BigQuery & SQL', 'Tableau Visualizations', 'Data Warehousing & ETL', 'Data Modeling', 'Executive Dashboards'],
    description: 'Professional BI training covering data preparation, analysis, visualization, and dashboard development for business decision-making.',
    badgeCode: 'GOOG-BI',
    featured: true,
  },
  {
    id: 'ibm-business-analyst',
    title: 'Business Analyst Professional Certificate',
    issuer: 'IBM',
    issuerCategory: 'Tech Giant',
    category: 'Business Analytics',
    credentialType: 'Professional Certificate',
    skills: ['Requirements Engineering', 'Process Flow Diagrams', 'Agile Business Analysis', 'Stakeholder Communication', 'Financial Modeling'],
    description: 'Professional qualification in bridging technical systems with business objectives, user stories, and requirements elicitation.',
    badgeCode: 'IBM-BA',
    featured: true,
  },
  {
    id: 'microsoft-power-bi-analyst',
    title: 'Power BI Data Analyst Professional Certificate',
    issuer: 'Microsoft',
    issuerCategory: 'Tech Giant',
    category: 'Business Analytics',
    credentialType: 'Professional Certificate',
    skills: ['Power BI Desktop & Service', 'DAX Formulas', 'Power Query (M)', 'Star Schema Data Modeling', 'Enterprise Analytics'],
    description: 'Professional training in Power BI, covering data preparation, modeling, visualization, DAX, and interactive business reporting.',
    badgeCode: 'MS-PL300',
    featured: true,
  },
  {
    id: 'macquarie-excel-business',
    title: 'Excel Skills for Business',
    issuer: 'Macquarie University',
    issuerCategory: 'Elite University',
    category: 'Business Analytics',
    credentialType: 'Specialization Course',
    skills: ['Advanced Financial Formulas', 'Pivot Tables & Dynamic Charts', 'INDEX/MATCH & XLOOKUP', 'Scenario Modeling & What-If'],
    description: 'Quantitative modeling, complex data reconciliation, and executive dashboard design in Microsoft Excel.',
    badgeCode: 'MQ-EXCEL',
  },

  // 4. AI & GENAI
  {
    id: 'oxford-ai-foundations-business',
    title: 'AI Foundations for Business Professionals',
    issuer: 'University of Oxford — Saïd Business School',
    issuerCategory: 'Elite University',
    category: 'AI & GenAI',
    credentialType: 'Specialization Course',
    skills: ['AI Governance & Ethics', 'Business Value Creation with AI', 'Machine Learning Economics', 'Enterprise AI Deployment'],
    description: 'Business-focused introduction to AI opportunities, adoption strategies, implementation considerations, and responsible use.',
    badgeCode: 'OXF-AI-BIZ',
    featured: true,
  },
  {
    id: 'helsinki-elements-of-ai',
    title: 'Elements of AI',
    issuer: 'University of Helsinki',
    issuerCategory: 'Elite University',
    category: 'AI & GenAI',
    credentialType: 'Foundational Credential',
    skills: ['Search Algorithms', 'Bayesian Probability', 'Neural Network Architectures', 'Societal AI Implications'],
    description: "Foundational introduction to artificial intelligence, covering machine learning, neural networks, optimization, and AI's broader impact.",
    badgeCode: 'UH-EOAI',
  },
  {
    id: 'anthropic-ai-fluency',
    title: 'AI Fluency — Framework & Foundations',
    issuer: 'Anthropic',
    issuerCategory: 'Tech Giant',
    category: 'AI & GenAI',
    credentialType: 'Foundational Credential',
    skills: ['LLM Cognitive Architecture', 'Prompt Engineering Patterns', 'Claude Workflows', 'Context Window Management'],
    description: 'Practical AI training covering effective AI interaction, model capabilities, prompting, and professional AI workflows.',
    badgeCode: 'ANTH-AIF',
    featured: true,
  },

  // 5. MANAGEMENT & EXECUTION
  {
    id: 'google-project-management',
    title: 'Project Management Professional Certificate',
    issuer: 'Google',
    issuerCategory: 'Tech Giant',
    category: 'Management & Execution',
    credentialType: 'Professional Certificate',
    skills: ['Agile & Scrum Frameworks', 'Sprint Planning & Backlog Grooming', 'Risk Mitigation & RACI', 'Project Charters & Work Breakdown'],
    description: 'In-depth professional program covering traditional waterfall, Agile, and hybrid project management execution methodologies.',
    badgeCode: 'GOOG-PM',
    featured: true,
  },
  {
    id: 'open-university-project-management',
    title: 'Project Management: Beyond the Basics',
    issuer: 'The Open University',
    issuerCategory: 'Elite University',
    category: 'Management & Execution',
    credentialType: 'Specialization Course',
    skills: ['Complex Stakeholder Governance', 'Budget Tracking', 'Critical Path Method', 'Project Lifecycle Control'],
    description: 'Advanced project governance principles, resource allocation under constraints, and operational milestone tracking.',
    badgeCode: 'OU-PM',
  },

  // 6. DIGITAL TRANSFORMATION
  {
    id: 'iima-digital-transformation',
    title: 'Advanced Digital Transformation',
    issuer: 'IIM Ahmedabad',
    issuerCategory: 'Elite University',
    category: 'Digital Transformation',
    credentialType: 'Specialization Course',
    skills: ['Platform Ecosystems', 'Digital Operating Models', 'Legacy System Modernization', 'Change Management Architecture'],
    description: 'Strategic frameworks for organizational agility, platform business models, and enterprise-wide technology adoption.',
    badgeCode: 'IIMA-ADTX',
    featured: true,
  },

  // 7. DIGITAL PRODUCTIVITY
  {
    id: 'microsoft-digital-productivity',
    title: 'Microsoft Digital Productivity',
    issuer: 'Microsoft',
    issuerCategory: 'Tech Giant',
    category: 'Digital Productivity',
    credentialType: 'Foundational Credential',
    skills: ['Cloud Collaboration', 'Workflow Automation', 'Microsoft 365 Enterprise Stack', 'Digital Workspace Optimization'],
    description: 'Practical training in digital productivity, workplace collaboration, cloud tools, and technology-enabled workflows.',
    badgeCode: 'MS-PROD',
  },
];

export interface FilterPill {
  id: string;
  label: string;
  count: number;
  categories: Array<CertificationItem['category']>;
}

export const filterPills: FilterPill[] = [
  {
    id: 'strategy',
    label: 'Business & Strategy',
    count: 4,
    categories: ['Business & Strategy', 'Digital Transformation'],
  },
  {
    id: 'marketing',
    label: 'E-Commerce & Marketing',
    count: 7,
    categories: ['E-Commerce & Marketing'],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    count: 4,
    categories: ['Business Analytics'],
  },
  {
    id: 'ai',
    label: 'AI & GenAI',
    count: 3,
    categories: ['AI & GenAI'],
  },
  {
    id: 'management',
    label: 'Management',
    count: 3,
    categories: ['Management & Execution', 'Digital Productivity'],
  },
];

export const certCategories: Array<{
  name: CertificationItem['category'];
  count: number;
}> = [
  { name: 'Business & Strategy', count: 3 },
  { name: 'E-Commerce & Marketing', count: 7 },
  { name: 'Business Analytics', count: 4 },
  { name: 'AI & GenAI', count: 3 },
  { name: 'Management & Execution', count: 2 },
  { name: 'Digital Transformation', count: 1 },
  { name: 'Digital Productivity', count: 1 },
];
