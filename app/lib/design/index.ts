/**
 * Design System - Main Export Index
 *
 * This file serves as the main entry point for the design system.
 * Import from here for all design-related utilities.
 */

// Color Palettes
export type { ColorPalette } from './palettes';
export {
  COLOR_PALETTES,
  getRandomPalette,
  getPaletteByName,
  getAllPaletteNames,
  generateCSSVariables,
} from './palettes';

// Component Templates
export { MODERN_COMPONENTS } from './components';

// Guidelines & Rules
export { MODERN_DESIGN_PROMPT, DESIGN_TIPS } from './guidelines';

// Utilities
export { getSuitablePaletteFor } from './export';
