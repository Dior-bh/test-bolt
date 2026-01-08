/**
 * Design System Export
 *
 * This file exports all design system components and palettes
 * for use throughout the application and AI generation.
 */

export type { ColorPalette } from './palettes';
export {
  COLOR_PALETTES,
  getRandomPalette,
  getPaletteByName,
  getAllPaletteNames,
  generateCSSVariables,
} from './palettes';
export { MODERN_COMPONENTS } from './components';
export { MODERN_DESIGN_PROMPT, DESIGN_TIPS } from './guidelines';

/**
 * Get use cases for each palette
 */
export function getSuitablePaletteFor(paletteName: string): string[] {
  const uses: Record<string, string[]> = {
    creative: ['Design Agencies', 'Creative Studios', 'Portfolios', 'Art Galleries'],
    cyberpunk: ['Gaming', 'Tech Blogs', 'Cybersecurity', 'Modern Startups'],
    ecommerce: ['Online Stores', 'E-commerce', 'Retail', 'Fashion'],
    fintech: ['Financial Apps', 'Investment Platforms', 'Banking', 'Crypto'],
    forest: ['Nature', 'Eco Products', 'Outdoor Gear', 'Sustainability'],
    minimalist: ['Personal Blogs', 'Writers', 'Minimal Brands', 'Consulting'],
    midnight: ['Premium Services', 'Luxury', 'Dark Themes', 'Professional'],
    nature: ['Eco-friendly Brands', 'Outdoors', 'Wellness', 'Sustainability'],
    ocean: ['Water-related', 'Tourism', 'Environmental', 'Tech (calming)'],
    peach: ['Friendly Brands', 'Social', 'Creative Work', 'Feminine Brands'],
    slate: ['Corporate', 'Professional Services', 'B2B', 'Technology'],
    sunset: ['Travel', 'Lifestyle', 'Fashion', 'Food & Beverage'],
    techModern: ['Tech Startups', 'SaaS', 'AI/ML Products', 'Developer Tools'],
  };

  return uses[paletteName] || ['General Purpose'];
}
