/**
 * Modern Color Palettes for Web Design
 * These palettes are designed to create unique, professional designs
 * Use these to diversify the visual appearance of generated websites
 */

export interface ColorPalette {
  name: string;
  description: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
}

export const COLOR_PALETTES: Record<string, ColorPalette> = {
  techModern: {
    name: 'Tech Moderne',
    description: 'Modern tech companies - emerald + cyan with dark background',
    primary: '#10B981',
    secondary: '#06B6D4',
    accent: '#F59E0B',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F1F5F9',
    textSecondary: '#CBD5E1',
    border: '#334155',
  },

  fintech: {
    name: 'Fintech Premium',
    description: 'Financial apps - violet + pink with professional dark theme',
    primary: '#8B5CF6',
    secondary: '#EC4899',
    accent: '#14B8A6',
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    border: '#374151',
  },

  creative: {
    name: 'Creative Bold',
    description: 'Design agencies - orange + red with energetic feel',
    primary: '#F97316',
    secondary: '#EF4444',
    accent: '#FBBF24',
    background: '#18181B',
    surface: '#27272A',
    text: '#FAFAFA',
    textSecondary: '#E4E4E7',
    border: '#3F3F46',
  },

  ecommerce: {
    name: 'E-Commerce Vibrant',
    description: 'Retail - sky blue + violet with clean light background',
    primary: '#0EA5E9',
    secondary: '#8B5CF6',
    accent: '#F472B6',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#0F172A',
    textSecondary: '#475569',
    border: '#E2E8F0',
  },

  minimalist: {
    name: 'Minimalist Elegant',
    description: 'Luxury brands - neutral slate with emerald accent',
    primary: '#475569',
    secondary: '#64748B',
    accent: '#10B981',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#1E293B',
    textSecondary: '#64748B',
    border: '#CBD5E1',
  },

  cyberpunk: {
    name: 'Cyberpunk Neon',
    description: 'Futuristic look - neon colors on dark background',
    primary: '#06FFA5',
    secondary: '#FF006E',
    accent: '#FFBE0B',
    background: '#0A0A0A',
    surface: '#1A1A1A',
    text: '#FFFFFF',
    textSecondary: '#E0E0E0',
    border: '#333333',
  },

  nature: {
    name: 'Nature Green',
    description: 'Eco-friendly - teal + emerald with natural feel',
    primary: '#0D9488',
    secondary: '#059669',
    accent: '#F59E0B',
    background: '#0F766E',
    surface: '#134E4A',
    text: '#F0FDFA',
    textSecondary: '#CCFBF1',
    border: '#2D6A64',
  },

  sunset: {
    name: 'Sunset Warm',
    description: 'Warm palette - coral + gold with deep navy',
    primary: '#FB7185',
    secondary: '#FBBF24',
    accent: '#F59E0B',
    background: '#1E1B4B',
    surface: '#312E81',
    text: '#FEF2F2',
    textSecondary: '#FCD34D',
    border: '#4C1D95',
  },

  ocean: {
    name: 'Ocean Deep',
    description: 'Water-inspired - deep blue + cyan with fresh feel',
    primary: '#0369A1',
    secondary: '#0891B2',
    accent: '#06B6D4',
    background: '#082F49',
    surface: '#0C4A6E',
    text: '#F0F9FF',
    textSecondary: '#BAE6FD',
    border: '#164E63',
  },

  midnight: {
    name: 'Midnight Purple',
    description: 'Dark luxury - deep purple + blue with gold accents',
    primary: '#6D28D9',
    secondary: '#3B82F6',
    accent: '#FBBF24',
    background: '#1F1933',
    surface: '#2D1B69',
    text: '#F5F3FF',
    textSecondary: '#DDD6FE',
    border: '#5B21B6',
  },

  forest: {
    name: 'Forest Dark',
    description: 'Professional - deep green + slate with earth tones',
    primary: '#065F46',
    secondary: '#047857',
    accent: '#F59E0B',
    background: '#1F2937',
    surface: '#374151',
    text: '#F3F4F6',
    textSecondary: '#D1D5DB',
    border: '#4B5563',
  },

  peach: {
    name: 'Peach Soft',
    description: 'Warm and friendly - peach + rose with light background',
    primary: '#FB923C',
    secondary: '#F43F5E',
    accent: '#EC4899',
    background: '#FFF7ED',
    surface: '#FEE2E2',
    text: '#7C2D12',
    textSecondary: '#92400E',
    border: '#FECACA',
  },

  slate: {
    name: 'Slate Professional',
    description: 'Corporate - neutral grays with blue accent',
    primary: '#475569',
    secondary: '#64748B',
    accent: '#3B82F6',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F1F5F9',
    textSecondary: '#CBD5E1',
    border: '#334155',
  },
};

/**
 * Get a random palette for diverse design generation
 */
export function getRandomPalette(): ColorPalette {
  const palettes = Object.values(COLOR_PALETTES);
  return palettes[Math.floor(Math.random() * palettes.length)];
}

/**
 * Get a palette by name
 */
export function getPaletteByName(name: string): ColorPalette | undefined {
  return Object.values(COLOR_PALETTES).find((p) => p.name === name);
}

/**
 * Get all available palette names
 */
export function getAllPaletteNames(): string[] {
  return Object.values(COLOR_PALETTES).map((p) => p.name);
}

/**
 * Generate CSS variables from a palette
 */
export function generateCSSVariables(palette: ColorPalette): string {
  return `
    --color-primary: ${palette.primary};
    --color-secondary: ${palette.secondary};
    --color-accent: ${palette.accent};
    --color-background: ${palette.background};
    --color-surface: ${palette.surface};
    --color-text: ${palette.text};
    --color-text-secondary: ${palette.textSecondary};
    --color-border: ${palette.border};
  `;
}
