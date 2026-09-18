import { Venture, Insight } from '../types';

export const VENTURES: Venture[] = [
  {
    id: 'restaurant-catering',
    title: 'Restaurant & Catering',
    category: 'Hospitality & Culinary',
    subtitle: 'Great food brings people together.',
    tagline: 'Great food brings people together.',
    // High-resolution gourmet culinary spread with artisanal pasta & dining
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    iconName: 'utensils',
    accentColor: '#964B2B',
    iconBgColor: '#8E472A',
    description: 'A curated dining experience blending regional culinary heritage with contemporary bistro hospitality. From artisanal pasta and wood-fired gastronomy to bespoke private catering events, every menu is crafted to spark meaningful conversations.',
    highlights: [
      'Farm-to-table seasonal produce sourcing',
      'Full-service luxury event catering & banquet dining',
      'Sustainable kitchen practices and zero-food-waste initiatives',
      'Award-winning sommelier wine pairings and craft beverages'
    ],
    metrics: [
      { label: 'Guests Served', value: '180,000+' },
      { label: 'Private Events', value: '450+' },
      { label: 'Customer Rating', value: '4.9 ★' }
    ],
    location: 'Urban District & Waterfront',
    founded: '2019'
  },
  {
    id: 'ice-cream',
    title: 'Ice Cream',
    category: 'Artisanal Gelato & Treats',
    subtitle: 'Small scoops. Bigger smiles.',
    tagline: 'Small scoops. Bigger smiles.',
    // Artisanal gourmet gelato scoops in pastel strawberry, pistachio, cream
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=85',
    iconName: 'ice-cream',
    accentColor: '#587A64',
    iconBgColor: '#6B8773',
    description: 'Artisanal small-batch gelato and frozen treats made with 100% grass-fed organic dairy and pure fruit infusions. Designed as neighborhood gathering spots where families and friends celebrate simple, joyful moments.',
    highlights: [
      'Over 24 rotating small-batch handcrafted flavors',
      'Locally sourced organic dairy and real fruit purées',
      'Dedicated dairy-free, vegan, and gluten-free collections',
      'Community pop-up scoop trucks for local charity events'
    ],
    metrics: [
      { label: 'Scoops Handcrafted', value: '500,000+' },
      { label: 'Signature Flavors', value: '36+' },
      { label: 'Scoop Shops', value: '4 Locations' }
    ],
    location: 'Metropolitan Squares & Parks',
    founded: '2021'
  },
  {
    id: 'properties',
    title: 'Properties',
    category: 'Boutique Real Estate & Development',
    subtitle: 'Spaces for a brighter tomorrow.',
    tagline: 'Spaces for a brighter tomorrow.',
    // Modern architectural glass villa at dusk with warm interior glow
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    iconName: 'home',
    accentColor: '#A7804B',
    iconBgColor: '#B08852',
    description: 'Forward-thinking architectural properties and boutique residential developments engineered for sustainability, natural lighting, and long-term community value. Balancing timeless aesthetics with intelligent energy efficiency.',
    highlights: [
      'LEED Gold and Net-Zero energy building design',
      'Seamless indoor-outdoor living integration',
      'Integrated smart-home IoT automation and security',
      'Bespoke architectural finishes with reclaimed timbers and limestone'
    ],
    metrics: [
      { label: 'Square Footage Built', value: '145,000 sq ft' },
      { label: 'Portfolio Valuation', value: '$24M+' },
      { label: 'Completed Projects', value: '18 Developments' }
    ],
    location: 'Coastal & Hillside Enclaves',
    founded: '2020'
  },
  {
    id: 'student-housing',
    title: 'Student Housing',
    category: 'Community Residences & Living',
    subtitle: 'A better place to belong.',
    tagline: 'A better place to belong.',
    // Cozy modern student interior with natural light and study area
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85',
    iconName: 'graduation-cap',
    accentColor: '#3F584C',
    iconBgColor: '#455E51',
    description: 'Reimagining university living through purpose-built student communities with high-speed fiber connectivity, acoustic study sanctuaries, collaborative co-working lounges, and inclusive peer mentorship spaces.',
    highlights: [
      'All-inclusive fully furnished studio and suite layouts',
      '24/7 keyless biometric access with dedicated on-site staff',
      'Quiet research pods and collaborative multimedia labs',
      'Weekly wellness workshops, resume clinics, and social mixers'
    ],
    metrics: [
      { label: 'Student Residents', value: '1,200+' },
      { label: 'Campus Partners', value: '5 Universities' },
      { label: 'Retention Rate', value: '96%' }
    ],
    location: 'University Corridors',
    founded: '2022'
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: 'future-community-hospitality',
    title: 'The Future of Community-Centric Hospitality',
    category: 'Hospitality & Culture',
    readTime: '4 min read',
    date: 'Sep 2026',
    excerpt: 'Why modern diners seek authentic local stories, human connection, and sustainable sourcing over sterile luxury dining.'
  },
  {
    id: 'sustainable-spaces',
    title: 'Architectural Philosophy: Spaces Built for Tomorrow',
    category: 'Real Estate & Design',
    readTime: '6 min read',
    date: 'Aug 2026',
    excerpt: 'How mindful spatial design, passive solar orientation, and biophilic elements elevate human well-being and productivity.'
  },
  {
    id: 'scaling-multi-ventures',
    title: 'Cross-Industry Synergies: Lessons from Building 4 Ventures',
    category: 'Entrepreneurship',
    readTime: '5 min read',
    date: 'Jul 2026',
    excerpt: 'Key leadership principles for scaling tech products, culinary concepts, and housing communities under one cohesive vision.'
  }
];

export const PROFILE = {
  name: 'TUHIN AHMED',
  title: 'Web Designer & Developer',
  subtitle: 'Building businesses for a better tomorrow',
  eyebrow: 'ENTREPRENEUR • DEVELOPER • BUSINESS BUILDER',
  quote: {
    line1: '“Good businesses create opportunities.',
    line2: 'Great businesses create better tomorrows.”'
  },
  wallArt: {
    top: ['A', 'BRIGHTER', 'TOMORROW', 'TOGETHER'],
    bottom: ['BUILD', 'DESIGN', 'INVEST', 'GROW']
  },
  mugText: ['Ideas', 'Build', 'Better', 'Tomorrows'],
  ambientTags: ['PEOPLE', 'PLACES', 'GOOD FOOD', 'BRIGHTER', 'TOMORROWS'],
  bottomTags: ['BUSINESS', 'TECHNOLOGY', 'COMMUNITY', 'OPPORTUNITY'],
  footerTagline: 'DIVERSE BUSINESSES. A BRIGHTER TOMORROW.'
};
