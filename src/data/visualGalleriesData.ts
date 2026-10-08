export interface ReelItem {
  id: string;
  title: string;
  views: string;
  viewCountNum: number;
  duration: string;
  category: string;
  audioTrack: string;
  description: string;
  badge?: string;
  accentGradient: string;
  placeholderCoverUrl?: string;
}

export interface GraphicDesignItem {
  id: string;
  title: string;
  brand: 'Sunrise Infinity' | 'Sunrise Homes' | 'Sharnam Happy Homes';
  brandHandle: string;
  instagramUrl: string;
  category: 'Festival Campaign' | 'Property Launch' | 'Amenity Showcase' | 'Lifestyle & Luxury' | 'Lead Generation' | 'Special Occasion';
  occasionOrTheme: string;
  specs: string;
  description: string;
  colorScheme: {
    bg: string;
    border: string;
    accent: string;
    text: string;
    badgeBg: string;
  };
  placeholderImageUrl?: string;
}

export const vibrantNortaReels: ReelItem[] = [
  {
    id: 'norta-reel-1',
    title: 'Garba Night Mega Anthem & Grand Reveal',
    views: '59.8K Views',
    viewCountNum: 59800,
    duration: '0:32',
    category: 'Viral Top Performer',
    audioTrack: 'Original Sound · Vibrant Norta Anthem',
    description:
      'Top-performing viral hook with 59.8K views. High-tempo cut synced to garba beats, featuring explosive light cues and kinetic text hooks.',
    badge: '🏆 Top Performer · 59.8K Views',
    accentGradient: 'from-amber-500 via-rose-600 to-purple-900',
  },
  {
    id: 'norta-reel-2',
    title: 'Artist Lineup & Celebrity Singer Announcement',
    views: '48.2K Views',
    viewCountNum: 48200,
    duration: '0:28',
    category: 'Artist Feature',
    audioTrack: 'Live Acoustic Folk Fusion',
    description:
      'Dynamic artist spotlight reel introducing headline performers with rhythmic pacing, bold typography, and visual transitions.',
    badge: '🔥 48.2K Views',
    accentGradient: 'from-pink-500 via-purple-600 to-indigo-950',
  },
  {
    id: 'norta-reel-3',
    title: 'VIP Pass Teaser & Arena Stage First Look',
    views: '39.5K Views',
    viewCountNum: 39500,
    duration: '0:35',
    category: 'Event Promotion',
    audioTrack: 'Trending Bass Drop Hook',
    description:
      'Fast-paced pass release teaser driving instant DMs and ticket conversions. Includes motion graphics and urgency countdown.',
    badge: '⚡ 39.5K Views',
    accentGradient: 'from-violet-600 via-fuchsia-600 to-stone-900',
  },
  {
    id: 'norta-reel-4',
    title: 'Behind-The-Scenes: Stage & Light Rehearsals',
    views: '31.8K Views',
    viewCountNum: 31800,
    duration: '0:42',
    category: 'Behind The Scenes',
    audioTrack: 'Backstage Ambient + Beats',
    description:
      'Intimate backstage rehearsals, soundchecks, and lighting setup capturing the authentic energy and preparation before showtime.',
    badge: '🎬 31.8K Views',
    accentGradient: 'from-emerald-600 via-teal-700 to-stone-900',
  },
  {
    id: 'norta-reel-5',
    title: 'Crowd Energy & Synchronized Swirls',
    views: '24.6K Views',
    viewCountNum: 24600,
    duration: '0:26',
    category: 'Audience Engagement',
    audioTrack: 'Dhol Tasha Live Ensemble',
    description:
      'High-energy crowd immersion reel showing thousands of attendees dancing in synchronized rhythm under arena floodlights.',
    badge: '✨ 24.6K Views',
    accentGradient: 'from-orange-500 via-amber-600 to-stone-900',
  },
  {
    id: 'norta-reel-6',
    title: 'Grand Finale Aftermovie Highlights',
    views: '19.4K Views',
    viewCountNum: 19400,
    duration: '0:45',
    category: 'Event Recap',
    audioTrack: 'Emotional Festive Crescendo',
    description:
      'Cinematic recap combining drone perspectives, smiling faces, and final applause to cement lasting brand love.',
    badge: '🌟 19.4K Views',
    accentGradient: 'from-blue-600 via-indigo-700 to-stone-900',
  },
];

export const graphicDesignGallery: GraphicDesignItem[] = [
  // ==========================================
  // SUNRISE INFINITY (15 SPACES)
  // ==========================================
  {
    id: 'gd-infinity-1',
    title: 'Sunrise Infinity · Luxury 3BHK Sunset Elevation',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Property Launch',
    occasionOrTheme: 'Architectural Elevation & Golden Hour Facade',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop & Canva',
    description:
      'Hero promotional creative highlighting architectural glass balconies and sunset illumination, tuned for premium buyer inquiries.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950',
      border: 'border-amber-500/30',
      accent: 'text-amber-400',
      text: 'text-amber-100',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    },
  },
  {
    id: 'gd-infinity-2',
    title: 'Sunrise Infinity · Clubhouse & Infinity Pool Deck',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Amenity Showcase',
    occasionOrTheme: 'Resort-Style Leisure & Fitness Infrastructure',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop & AI Render',
    description:
      'Ultra-luxury amenity showcase highlighting temperature-controlled swimming pool, modern gymnasium, and banquet hall.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-cyan-950 via-blue-950 to-stone-950',
      border: 'border-cyan-500/30',
      accent: 'text-cyan-400',
      text: 'text-cyan-100',
      badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    },
  },
  {
    id: 'gd-infinity-3',
    title: 'Raksha Bandhan · "The Gift of a Lifetime Home"',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Festival Campaign',
    occasionOrTheme: 'Raksha Bandhan Sibling Bond & Security',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop',
    description:
      'Heartfelt celebration linking the sacred thread of protection with gifting your family the safety of a permanent, secure gated community.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-rose-950 via-pink-950 to-stone-950',
      border: 'border-pink-500/30',
      accent: 'text-pink-400',
      text: 'text-pink-100',
      badgeBg: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    },
  },
  {
    id: 'gd-infinity-4',
    title: 'Father’s Day · "Building A Legacy for Generations"',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Special Occasion',
    occasionOrTheme: 'Father’s Day Emotional Tribute',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop & Typography',
    description:
      'Touching architectural tribute showing father-child silhouette looking across the city skyline from their balcony, framing homeownership as generational legacy.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-slate-950 via-stone-900 to-zinc-950',
      border: 'border-stone-500/30',
      accent: 'text-stone-300',
      text: 'text-stone-100',
      badgeBg: 'bg-stone-500/10 text-stone-300 border-stone-500/20',
    },
  },
  {
    id: 'gd-infinity-5',
    title: 'Independence Day · Tricolor Architectural Tribute',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Festival Campaign',
    occasionOrTheme: 'August 15 Independence Day Celebration',
    specs: '1:1 Square Feed · 1080×1080 · AI Assisted + Photoshop',
    description:
      'Patriotic composition fusing India’s tricolor saffron, white, and green gradients with modern high-rise architecture and celebratory typography.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-orange-950 via-stone-900 to-emerald-950',
      border: 'border-orange-500/30',
      accent: 'text-orange-400',
      text: 'text-stone-100',
      badgeBg: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    },
  },
  {
    id: 'gd-infinity-6',
    title: 'Sunrise Infinity · Sky Lounge & Star Gazing Deck',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Amenity Showcase',
    occasionOrTheme: 'Rooftop Horizon & Evening Relaxation',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop & Illustrator',
    description:
      'Panoramic rooftop sky lounge showcase highlighting 360-degree cityscape views, ambient evening lighting, and private gazebos for residents.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-indigo-950 via-violet-950 to-stone-950',
      border: 'border-indigo-500/30',
      accent: 'text-indigo-400',
      text: 'text-indigo-100',
      badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    },
  },
  {
    id: 'gd-infinity-7',
    title: 'Grand Launch Announcement · RERA Approved 3 & 4 BHK',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Property Launch',
    occasionOrTheme: 'Exclusive Phase 1 Booking Release',
    specs: '1:1 Square Feed · 1080×1080 · Adobe Photoshop',
    description:
      'High-impact project launch graphic communicating official RERA registration, floor plan highlights, and priority spot reservations.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-amber-950 via-yellow-950 to-stone-950',
      border: 'border-yellow-500/30',
      accent: 'text-yellow-400',
      text: 'text-yellow-100',
      badgeBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    },
  },
  {
    id: 'gd-infinity-8',
    title: 'Diwali Grand Muhurat · Illuminate Your Dream Home',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Festival Campaign',
    occasionOrTheme: 'Deepawali Festive Offer & Gold Coin Token',
    specs: '1:1 Square Feed · 1080×1080 · AI Art & Photoshop',
    description:
      'Festive gold-lit visual celebrating Deepawali with traditional diya elements blended into architectural luxury and celebratory booking perks.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-amber-950 via-orange-950 to-stone-950',
      border: 'border-amber-500/30',
      accent: 'text-amber-400',
      text: 'text-amber-100',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    },
  },
  {
    id: 'gd-infinity-9',
    title: 'Master Penthouse Suite · Double-Height Living Experience',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Lifestyle & Luxury',
    occasionOrTheme: 'Ultra-Luxury Duplex & Panoramic Balcony',
    specs: '1:1 Square Feed · 1080×1080 · 3D Render & Photoshop',
    description:
      'Exclusive penthouse interior visual spotlighting acoustic floor-to-ceiling glass, Italian marble finishes, and customized modular layout.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-purple-950 via-slate-900 to-stone-950',
      border: 'border-purple-500/30',
      accent: 'text-purple-400',
      text: 'text-purple-100',
      badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    },
  },
  {
    id: 'gd-infinity-10',
    title: 'Makar Sankranti · "Soar High Above The Ordinary"',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Festival Campaign',
    occasionOrTheme: 'Uttarayan Festival of Kites & Blue Skies',
    specs: '1:1 Square Feed · 1080×1080 · Illustrator & Photoshop',
    description:
      'Vibrant kite festival creative symbolizing rising aspirations and home ownership milestones, set against clear azure skies and tower elevations.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-sky-950 via-blue-900 to-stone-950',
      border: 'border-sky-500/30',
      accent: 'text-sky-400',
      text: 'text-sky-100',
      badgeBg: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    },
  },
  {
    id: 'gd-infinity-11',
    title: 'Navratri Mahotsav · 9 Nights of Auspicious Bookings',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Festival Campaign',
    occasionOrTheme: 'Navratri Dandiya & Special Festive Pricing',
    specs: '1:1 Square Feed · 1080×1080 · Festive Typography',
    description:
      'Traditional Garba motifs combined with real-estate investment incentives, driving high-converting festive footfalls to the site sales gallery.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-fuchsia-950 via-pink-900 to-stone-950',
      border: 'border-fuchsia-500/30',
      accent: 'text-fuchsia-400',
      text: 'text-fuchsia-100',
      badgeBg: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20',
    },
  },
  {
    id: 'gd-infinity-12',
    title: 'Smart Home Automation & 3-Tier Biometric Security',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Amenity Showcase',
    occasionOrTheme: 'IoT Enabled Living & Gated Peace of Mind',
    specs: '1:1 Square Feed · 1080×1080 · Vector & Photoshop',
    description:
      'Tech-forward visual explaining digital keyless entry, smart video door phones, and round-the-clock CCTV surveillance for resident safety.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-emerald-950 via-teal-950 to-stone-950',
      border: 'border-teal-500/30',
      accent: 'text-teal-400',
      text: 'text-teal-100',
      badgeBg: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    },
  },
  {
    id: 'gd-infinity-13',
    title: 'High-ROI Investment Spotlight · Capital Appreciation Hub',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Lead Generation',
    occasionOrTheme: 'Rental Yield & Commercial Growth Corridor',
    specs: '1:1 Square Feed · 1080×1080 · Meta Ads & Photoshop',
    description:
      'Lead generation creative geared toward non-resident investors and commercial buyers showing projected rental yields and infrastructure growth.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-violet-950 via-stone-900 to-stone-950',
      border: 'border-violet-500/30',
      accent: 'text-violet-400',
      text: 'text-violet-100',
      badgeBg: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    },
  },
  {
    id: 'gd-infinity-14',
    title: 'New Year 2025 · "Step Into Elevated Luxury"',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Special Occasion',
    occasionOrTheme: 'New Year Milestone & Fresh Chapter',
    specs: '1:1 Square Feed · 1080×1080 · Typography & Photoshop',
    description:
      'Sparkling champagne-and-gold typography marking the beginning of the year with fresh possession timelines and milestone celebrations.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950',
      border: 'border-amber-400/30',
      accent: 'text-amber-300',
      text: 'text-amber-100',
      badgeBg: 'bg-amber-400/10 text-amber-200 border-amber-400/20',
    },
  },
  {
    id: 'gd-infinity-15',
    title: 'Vastu Compliant 3BHKs · Cross Ventilation & Natural Light',
    brand: 'Sunrise Infinity',
    brandHandle: '@sunriseinfinity',
    instagramUrl: 'https://www.instagram.com/sunriseinfinity/',
    category: 'Lifestyle & Luxury',
    occasionOrTheme: 'Harmonious Architecture & East-Facing Layouts',
    specs: '1:1 Square Feed · 1080×1080 · Architectural Diagram',
    description:
      'Layout diagram ad emphasizing 100% Vastu compliance, abundant cross-ventilation, and lush garden-facing sunlit living balconies.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-teal-950 via-slate-900 to-stone-950',
      border: 'border-teal-500/30',
      accent: 'text-teal-400',
      text: 'text-teal-100',
      badgeBg: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    },
  },

  // ==========================================
  // SUNRISE HOMES (8 SPACES)
  // ==========================================
  {
    id: 'gd-homes-1',
    title: 'Sunrise Homes 88 · "Keys to Happiness" Handover',
    brand: 'Sunrise Homes',
    brandHandle: '@sunrisehomes88',
    instagramUrl: 'https://www.instagram.com/sunrisehomes88/',
    category: 'Lifestyle & Luxury',
    occasionOrTheme: 'Milestone Handover & Family Trust',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop',
    description:
      'Emotion-driven homeowner celebration graphic highlighting possession handover, verified RERA approval, and neighborhood perks.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-blue-950 via-slate-900 to-stone-950',
      border: 'border-blue-500/30',
      accent: 'text-blue-400',
      text: 'text-blue-100',
      badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    },
  },
  {
    id: 'gd-homes-2',
    title: 'Janmashtami · Festive Blessings & New Home Booking',
    brand: 'Sunrise Homes',
    brandHandle: '@sunrisehomes88',
    instagramUrl: 'https://www.instagram.com/sunrisehomes88/',
    category: 'Festival Campaign',
    occasionOrTheme: 'Shree Krishna Janmashtami & Festive Discount',
    specs: '1:1 Square Feed · 1080×1080 · AI Fusion & Typography',
    description:
      'Spiritual gold and peacock-blue artwork combining flute motif, modern calligraphy, and festive zero-stamp-duty home purchase offers.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-indigo-950 via-blue-950 to-stone-950',
      border: 'border-cyan-500/30',
      accent: 'text-cyan-400',
      text: 'text-cyan-100',
      badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    },
  },
  {
    id: 'gd-homes-3',
    title: 'Rath Yatra · The Grand Journey to Your Dream Home',
    brand: 'Sunrise Homes',
    brandHandle: '@sunrisehomes88',
    instagramUrl: 'https://www.instagram.com/sunrisehomes88/',
    category: 'Festival Campaign',
    occasionOrTheme: 'Lord Jagannath Rath Yatra Procession',
    specs: '1:1 Square Feed · 1080×1080 · AI Art & Layout',
    description:
      'Majestic golden chariot theme paired with architectural elevation, inviting devotees and homebuyers to embark on auspicious beginnings.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-yellow-950 via-stone-900 to-amber-950',
      border: 'border-yellow-500/30',
      accent: 'text-yellow-400',
      text: 'text-yellow-100',
      badgeBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    },
  },
  {
    id: 'gd-homes-4',
    title: 'Friendship Day · "Neighbors Who Become Family"',
    brand: 'Sunrise Homes',
    brandHandle: '@sunrisehomes88',
    instagramUrl: 'https://www.instagram.com/sunrisehomes88/',
    category: 'Special Occasion',
    occasionOrTheme: 'Community Living & Gated Camaraderie',
    specs: '1:1 Square Feed · 1080×1080 · Canva & Photoshop',
    description:
      'Vibrant community creative celebrating friendships formed at the clubhouse, jogging track, and neighborhood garden gatherings.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-purple-950 via-violet-950 to-stone-950',
      border: 'border-purple-500/30',
      accent: 'text-purple-400',
      text: 'text-purple-100',
      badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    },
  },
  {
    id: 'gd-homes-5',
    title: 'Sunrise Homes 88 · Master Suite & Italian Marble Finishes',
    brand: 'Sunrise Homes',
    brandHandle: '@sunrisehomes88',
    instagramUrl: 'https://www.instagram.com/sunrisehomes88/',
    category: 'Lifestyle & Luxury',
    occasionOrTheme: 'Interior Specification & Premium Finishes',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop',
    description:
      'Interior craftsmanship showcase highlighting premium fittings, concealed electricals, acoustic double-glazed windows, and Italian marble flooring.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950',
      border: 'border-amber-500/30',
      accent: 'text-amber-400',
      text: 'text-amber-100',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    },
  },
  {
    id: 'gd-homes-6',
    title: 'Affordable Luxury 2 & 3 BHK · Prime Gated Living',
    brand: 'Sunrise Homes',
    brandHandle: '@sunrisehomes88',
    instagramUrl: 'https://www.instagram.com/sunrisehomes88/',
    category: 'Property Launch',
    occasionOrTheme: 'Value-First Gated Community for Families',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop & Meta Ads',
    description:
      'High-reach promotional creative emphasizing spacious floor plans, pocket-friendly EMI options, and rapid loan approvals through nationalized banks.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-blue-950 via-cyan-950 to-stone-950',
      border: 'border-cyan-500/30',
      accent: 'text-cyan-400',
      text: 'text-cyan-100',
      badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    },
  },
  {
    id: 'gd-homes-7',
    title: 'Children’s Play Park & Senior Citizens’ Reflexology Track',
    brand: 'Sunrise Homes',
    brandHandle: '@sunrisehomes88',
    instagramUrl: 'https://www.instagram.com/sunrisehomes88/',
    category: 'Amenity Showcase',
    occasionOrTheme: 'Multi-Generational Community Living',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop',
    description:
      'Heartwarming visual breakdown of dedicated green recreation zones designed for both toddlers and elderly parents in a peaceful vehicle-free enclave.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-emerald-950 via-teal-950 to-stone-950',
      border: 'border-emerald-500/30',
      accent: 'text-emerald-400',
      text: 'text-emerald-100',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    },
  },
  {
    id: 'gd-homes-8',
    title: 'Festive Diwali Dhamaka · Modular Kitchen & Gold Coin',
    brand: 'Sunrise Homes',
    brandHandle: '@sunrisehomes88',
    instagramUrl: 'https://www.instagram.com/sunrisehomes88/',
    category: 'Festival Campaign',
    occasionOrTheme: 'Diwali Festive Booking Bonuses',
    specs: '1:1 Square Feed · 1080×1080 · Canva & Photoshop',
    description:
      'Festive promotional ad advertising complimentary branded modular kitchen fittings and guaranteed gold coins on all on-spot spot bookings.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-orange-950 via-amber-950 to-stone-950',
      border: 'border-orange-500/30',
      accent: 'text-orange-400',
      text: 'text-orange-100',
      badgeBg: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    },
  },

  // ==========================================
  // SHARNAM HAPPY HOMES (5 SPACES - LOWEST NUMBER)
  // ==========================================
  {
    id: 'gd-sharnam-1',
    title: 'Sharnam Happy Homes · Sky Deck Amenities Spotlight',
    brand: 'Sharnam Happy Homes',
    brandHandle: '@sharmamhappyhomes',
    instagramUrl: 'https://www.instagram.com/sharmamhappyhomes/',
    category: 'Amenity Showcase',
    occasionOrTheme: 'Rooftop Lounge, Yoga Gazebo & Kids Play Zone',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop & Illustrator',
    description:
      'Multi-panel visual breakdown displaying 20+ lifestyle amenities with clean geometric icon badges and aerial renders.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-emerald-950 via-teal-950 to-stone-950',
      border: 'border-emerald-500/30',
      accent: 'text-emerald-400',
      text: 'text-emerald-100',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    },
  },
  {
    id: 'gd-sharnam-2',
    title: 'Ganesh Chaturthi · Auspicious Beginnings & Muhurat Offer',
    brand: 'Sharnam Happy Homes',
    brandHandle: '@sharmamhappyhomes',
    instagramUrl: 'https://www.instagram.com/sharmamhappyhomes/',
    category: 'Festival Campaign',
    occasionOrTheme: 'Ganeshotsav & Griha Pravesh Muhurat',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop & Canva',
    description:
      'Warm saffron and gold design welcoming Lord Ganesha into new homes, featuring customized typography and early-bird token booking.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-amber-950 via-rose-950 to-stone-950',
      border: 'border-amber-500/30',
      accent: 'text-amber-400',
      text: 'text-amber-100',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    },
  },
  {
    id: 'gd-sharnam-3',
    title: 'International Yoga Day · Mindful Living & Zen Garden',
    brand: 'Sharnam Happy Homes',
    brandHandle: '@sharmamhappyhomes',
    instagramUrl: 'https://www.instagram.com/sharmamhappyhomes/',
    category: 'Special Occasion',
    occasionOrTheme: 'June 21 Yoga Day · Wellness Amenities',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop',
    description:
      'Serene visual composition of outdoor meditation deck, lush landscaping, and holistic lifestyle amenities promoting balanced daily living.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-teal-950 via-emerald-950 to-stone-950',
      border: 'border-teal-500/30',
      accent: 'text-teal-400',
      text: 'text-teal-100',
      badgeBg: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    },
  },
  {
    id: 'gd-sharnam-4',
    title: 'Sharnam Happy Homes · Strategic Highway & Metro Connectivity',
    brand: 'Sharnam Happy Homes',
    brandHandle: '@sharmamhappyhomes',
    instagramUrl: 'https://www.instagram.com/sharmamhappyhomes/',
    category: 'Lead Generation',
    occasionOrTheme: 'Location Advantage & Commuter Proximity',
    specs: '1:1 Square Feed · 1080×1080 · Vector Map & Photoshop',
    description:
      'Infographic ad creative showing radial driving distances to major schools, hospitals, IT parks, and transit corridors.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-emerald-950 via-slate-900 to-stone-950',
      border: 'border-emerald-500/30',
      accent: 'text-emerald-400',
      text: 'text-emerald-100',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    },
  },
  {
    id: 'gd-sharnam-5',
    title: 'Budget-Friendly 2 BHK Smart Homes · Easy 10:90 Payment Plan',
    brand: 'Sharnam Happy Homes',
    brandHandle: '@sharmamhappyhomes',
    instagramUrl: 'https://www.instagram.com/sharmamhappyhomes/',
    category: 'Lead Generation',
    occasionOrTheme: 'Accessible First-Home Ownership Scheme',
    specs: '1:1 Square Feed · 1080×1080 · Photoshop & Canva',
    description:
      'Direct-response digital ad designed for first-time buyers with low monthly down payments and customized interest subvention plans.',
    colorScheme: {
      bg: 'bg-gradient-to-br from-emerald-950 via-teal-900 to-stone-950',
      border: 'border-emerald-400/30',
      accent: 'text-emerald-300',
      text: 'text-emerald-100',
      badgeBg: 'bg-emerald-400/10 text-emerald-200 border-emerald-400/20',
    },
  },
];
