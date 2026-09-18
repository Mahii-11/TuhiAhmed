export interface Venture {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  tagline: string;
  image: string;
  iconName: 'utensils' | 'ice-cream' | 'home' | 'graduation-cap';
  accentColor: string;
  iconBgColor: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  location?: string;
  founded?: string;
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
}

export type ActiveModal = 'none' | 'venture' | 'about' | 'contact' | 'insights';
