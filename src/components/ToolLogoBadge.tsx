import React from 'react';

interface ToolLogoBadgeProps {
  name: string;
  size?: 'sm' | 'md';
}

export const renderToolIcon = (name: string, sizeClass = 'w-3.5 h-3.5'): React.ReactNode => {
  const lower = name.toLowerCase();

  // Meta Ads Manager
  if (lower.includes('meta ads') || lower.includes('ads manager')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <path
          d="M16.994 4.86c-1.398 0-2.61.64-3.494 1.637-.883-.997-2.096-1.637-3.494-1.637C6.88 4.86 4.35 7.42 4.35 10.582c0 4.195 4.896 8.358 7.644 8.558.267.02.545.02.812 0 2.748-.2 7.644-4.363 7.644-8.558 0-3.162-2.53-5.722-5.456-5.722z"
          fill="#0081FB"
        />
      </svg>
    );
  }

  // Meta Business Suite
  if (lower.includes('business suite')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <rect width="24" height="24" rx="5" fill="#0064E0" />
        <path
          d="M7 8h10c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1z"
          stroke="#FFFFFF"
          strokeWidth="1.8"
        />
        <circle cx="10" cy="12" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Adobe Photoshop
  if (lower.includes('photoshop')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <rect width="24" height="24" rx="4" fill="#001E36" />
        <path
          d="M6.5 7h3.8c1.8 0 3 .9 3 2.5 0 1.7-1.3 2.6-3 2.6h-2v4.4H6.5V7zm1.8 3.6h1.7c.8 0 1.4-.4 1.4-1.2 0-.7-.6-1.1-1.4-1.1H8.3v2.3z"
          fill="#31A8FF"
        />
        <path
          d="M14.2 13.2c.7-.6 1.6-.9 2.5-.9 1.4 0 2.3.8 2.3 2 0 1.3-1.1 1.7-2.4 2.1-.9.3-1.3.6-1.3 1.1 0 .6.5.9 1.3.9.7 0 1.4-.3 1.9-.8l.8 1c-.8.8-1.8 1.1-2.9 1.1-1.6 0-2.7-.9-2.7-2.3 0-1.4 1.1-2 2.4-2.3.9-.3 1.3-.5 1.3-1 0-.4-.4-.7-1-.7-.6 0-1.2.3-1.6.7l-.7-.9z"
          fill="#31A8FF"
        />
      </svg>
    );
  }

  // Canva Pro
  if (lower.includes('canva')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <circle cx="12" cy="12" r="11" fill="#00C4CC" />
        <path
          d="M15.5 9c-.8-.7-1.9-1-3.2-1-2.8 0-4.8 2.1-4.8 5s1.9 5 4.8 5c1.4 0 2.6-.4 3.4-1.2.3-.3.3-.7 0-.9l-.6-.6c-.2-.2-.6-.2-.8.1-.6.6-1.4.9-2.3.9-1.9 0-3.2-1.4-3.2-3.3 0-1.8 1.3-3.3 3.2-3.3.9 0 1.6.2 2.1.6.3.2.6.2.8 0l.6-.6c.3-.3.2-.6 0-.7z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // CapCut Pro
  if (lower.includes('capcut')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <rect width="24" height="24" rx="4" fill="#111111" />
        <path d="M6 7.5L12 12L6 16.5V7.5ZM18 7.5L12 12L18 16.5V7.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Premiere Pro
  if (lower.includes('premiere')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <rect width="24" height="24" rx="4" fill="#1C0B31" />
        <path
          d="M7 7h3.8c1.8 0 3 .9 3 2.5 0 1.7-1.3 2.6-3 2.6h-2v4.4H7V7zm1.8 3.6h1.7c.8 0 1.4-.4 1.4-1.2 0-.7-.6-1.1-1.4-1.1H8.8v2.3z"
          fill="#EA77FF"
        />
      </svg>
    );
  }

  // Buffer
  if (lower.includes('buffer')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <rect width="24" height="24" rx="5" fill="#2C4BFF" />
        <path
          d="M6 8.5L12 11.5L18 8.5L12 5.5L6 8.5Z"
          fill="#FFFFFF"
        />
        <path
          d="M6 12L12 15L18 12"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 15.5L12 18.5L18 15.5"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // HubSpot
  if (lower.includes('hubspot')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <rect width="24" height="24" rx="5" fill="#FF7A59" />
        <path
          d="M17 11.5V9.8a1.8 1.8 0 1 0-1.8 1.8h.1l-2.4 2.2a1.8 1.8 0 1 0 .9.9l2.4-2.2H17z"
          fill="#FFFFFF"
        />
        <circle cx="8.5" cy="12" r="1.5" fill="#FFFFFF" />
        <path d="M10 12h2.5" stroke="#FFFFFF" strokeWidth="1.6" />
      </svg>
    );
  }

  // Instagram
  if (lower.includes('instagram')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <rect width="24" height="24" rx="5" fill="#E1306C" />
        <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.2" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="15.8" cy="8.2" r="0.9" fill="#FFFFFF" />
      </svg>
    );
  }

  // Google Sheets
  if (lower.includes('sheets')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <rect width="24" height="24" rx="4" fill="#0F9D58" />
        <path d="M7 7h10v10H7z" fill="#FFFFFF" opacity="0.9" />
        <path d="M7 10h10M7 14h10M12 7v10" stroke="#0F9D58" strokeWidth="1.2" />
      </svg>
    );
  }

  // Google Drive / Workspace / Cloud
  if (lower.includes('drive') || lower.includes('workspace')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <path d="M8.5 4h7l5.5 10H14L8.5 4z" fill="#FFBA00" />
        <path d="M3 14l5.5-10 3.5 6-5.5 10L3 14z" fill="#00AC47" />
        <path d="M6.5 20h14l-3.5-6h-14l3.5 6z" fill="#0066DA" />
      </svg>
    );
  }

  // Figma
  if (lower.includes('figma')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <circle cx="15" cy="6" r="3" fill="#FF7262" />
        <circle cx="9" cy="6" r="3" fill="#F24E1E" />
        <circle cx="9" cy="12" r="3" fill="#A259FF" />
        <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
        <path d="M9 15h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-3z" fill="#0ACF83" />
      </svg>
    );
  }

  // React
  if (lower.includes('react')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  // Next.js
  if (lower.includes('next.js') || lower.includes('next')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <circle cx="12" cy="12" r="10" fill="#000000" />
        <path d="M9 8v8h2v-4.5l4.5 4.5h2.5L11 8H9z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Tailwind CSS
  if (lower.includes('tailwind')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <path
          d="M12.5 7.5C11 5.5 9 5 6.5 6 4 7 3 9 3.5 12c.5-1.5 1.5-2.5 3-2.5 2 0 3 1.5 3.5 2.5 1.5 2 3.5 2.5 6 1.5 2.5-1 3.5-3 3-6-.5 1.5-1.5 2.5-3 2.5-2 0-3-1.5-3.5-2.5zm-5 6C6 11.5 4 11 1.5 12 -1 13-2 15-1.5 18c.5-1.5 1.5-2.5 3-2.5 2 0 3 1.5 3.5 2.5 1.5 2 3.5 2.5 6 1.5 2.5-1 3.5-3 3-6-.5 1.5-1.5 2.5-3 2.5-2 0-3-1.5-3.5-2.5z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // Webflow
  if (lower.includes('webflow')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <path
          d="M20 7.5l-3.5 9-3-4.5-2 3-3-7.5H4l4.5 11h4l3-4.5 3 4.5h4.5L24 7.5h-4z"
          fill="#146EF5"
        />
      </svg>
    );
  }

  // Python
  if (lower.includes('python')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <path
          d="M11.9 3c-4.4 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H6.1S3 7.1 3 11.6c0 4.4 2.7 4.3 2.7 4.3h1.6v-2.3s-.1-2.7 2.7-2.7h4.6s2.6.1 2.6-2.5V5.5S17.4 3 11.9 3zm-2.4 1.5a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
          fill="#3776AB"
        />
        <path
          d="M12.1 21c4.4 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h5.9s3.1.4 3.1-4.1c0-4.4-2.7-4.3-2.7-4.3h-1.6v2.3s.1 2.7-2.7 2.7H9.4s-2.6-.1-2.6 2.5v2.9s-.2 2.5 5.3 2.5zm2.4-1.5a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // Jupyter
  if (lower.includes('jupyter')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <circle cx="12" cy="12" r="3" fill="#F37626" />
        <circle cx="6" cy="12" r="1.5" fill="#767676" />
        <circle cx="18" cy="12" r="1.5" fill="#767676" />
        <path d="M7 6c2.5-2 7.5-2 10 0" stroke="#F37626" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 18c2.5 2 7.5 2 10 0" stroke="#F37626" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Tableau
  if (lower.includes('tableau')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <path d="M12 3v18M3 12h18" stroke="#E97627" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" fill="#E97627" />
        <circle cx="12" cy="4" r="1.5" fill="#2B5B84" />
        <circle cx="20" cy="12" r="1.5" fill="#D22B2B" />
        <circle cx="12" cy="20" r="1.5" fill="#2B5B84" />
        <circle cx="4" cy="12" r="1.5" fill="#D22B2B" />
      </svg>
    );
  }

  // Looker Studio
  if (lower.includes('looker')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <circle cx="7" cy="7" r="3" fill="#4285F4" />
        <circle cx="17" cy="7" r="3" fill="#EA4335" />
        <circle cx="12" cy="17" r="3" fill="#34A853" />
        <path d="M7 7l5 10 5-10" stroke="#FBBC05" strokeWidth="1.5" />
      </svg>
    );
  }

  // Notion
  if (lower.includes('notion')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <rect width="24" height="24" rx="4" fill="#000000" />
        <path d="M6.5 6.5l3.2.3v10.7l-3.2-.3V6.5zm3.2 0l7.8 11V6.5h-2.2v8.5L9.7 6.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Linear / Trello / Slack
  if (lower.includes('linear') || lower.includes('trello') || lower.includes('slack')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <rect width="24" height="24" rx="4" fill="#5E6AD2" />
        <path d="M7 8h10M7 12h7M7 16h4" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Scholar
  if (lower.includes('scholar')) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
        <path d="M12 4L3 9l9 5 9-5-9-5z" fill="#4285F4" />
        <path d="M6 11v5c0 2.2 2.7 4 6 4s6-1.8 6-4v-5" stroke="#3367D6" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Default fallback dot icon
  return (
    <svg viewBox="0 0 24 24" className={sizeClass} fill="none">
      <circle cx="12" cy="12" r="5" fill="#78716c" />
    </svg>
  );
};

export const ToolLogoBadge: React.FC<ToolLogoBadgeProps> = ({ name, size = 'sm' }) => {
  const icon = renderToolIcon(name, size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5');

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-mono transition-colors border border-stone-200/60 ${
        size === 'sm' ? 'text-[10px]' : 'text-xs'
      }`}
    >
      <span className="shrink-0">{icon}</span>
      <span className="truncate">{name}</span>
    </span>
  );
};
