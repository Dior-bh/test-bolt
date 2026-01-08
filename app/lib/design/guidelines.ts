/**
 * MODERN DESIGN GUIDELINES FOR BOLT.DIY
 *
 * This file provides comprehensive design philosophy and rules
 * that should be followed when generating modern, beautiful websites.
 *
 * Import this content into system prompts to guide AI-generated designs.
 */

export const MODERN_DESIGN_PROMPT = `
═══════════════════════════════════════════════════════════════════════
🎨 MODERN WEB DESIGN PHILOSOPHY & GUIDELINES
═══════════════════════════════════════════════════════════════════════

MISSION: Generate websites that are VISUALLY STUNNING, MODERN (2024+), and MEMORABLE.

CORE PRINCIPLES:
1. UNIQUENESS - Each design must be distinct and memorable
2. MODERNITY - Follow 2024 design trends (glassmorphism, gradients, dark mode)
3. ELEGANCE - Subtle, professional aesthetics over loud/gimmicky effects
4. FUNCTIONALITY - Beautiful designs that work perfectly
5. ACCESSIBILITY - Inclusive design that works for everyone

═══════════════════════════════════════════════════════════════════════
🚫 DESIGN ANTI-PATTERNS (ABSOLUTELY FORBIDDEN)
═══════════════════════════════════════════════════════════════════════

NEVER do these:
❌ Basic blue (#3B82F6) + purple (#8B5CF6) combination (overused)
❌ Completely generic layouts (header + centered box + footer)
❌ Saturated colors (avoid 100% saturation, use softer tones)
❌ Pure black (#000000) backgrounds (use dark slate/gray instead)
❌ Pure white text on dark (use light slate/gray for readability)
❌ Comic Sans, Arial, or system default fonts without intention
❌ No visual hierarchy (all text same size/weight/color)
❌ Rigid, boxy layouts (embrace rounded corners and organic shapes)
❌ No hover effects or micro-interactions
❌ Same design for every page (vary layouts and styles)

═══════════════════════════════════════════════════════════════════════
🎯 MODERN COLOR STRATEGY
═══════════════════════════════════════════════════════════════════════

RULE: Choose ONE palette from available options and commit to it fully.

AVAILABLE PALETTES (use variety across different projects):
1. Tech Moderne: Emerald (#10B981) + Cyan (#06B6D4) + Amber
2. Fintech: Violet (#8B5CF6) + Pink (#EC4899) + Teal
3. Creative: Orange (#F97316) + Red (#EF4444) + Yellow
4. E-Commerce: Sky (#0EA5E9) + Violet (#8B5CF6) + Pink
5. Minimalist: Slate grays + Emerald accent
6. Cyberpunk: Neon green (#06FFA5) + Neon pink (#FF006E) + Neon yellow
7. Nature: Teal (#0D9488) + Emerald (#059669) + Amber
8. Sunset: Coral (#FB7185) + Gold (#FBBF24) + Navy
9. Ocean: Deep blue + Cyan + light blues
10. Midnight: Deep purple + Blue + Gold accents
11. Forest: Deep green + Slate + Earth tones
12. Peach: Peach + Rose + Pink (warm palette)

DARK MODE PREFERENCE:
- Default to dark backgrounds (#0F172A, #111827, #1A1A1A)
- Use light text (#F1F5F9, #F9FAFB)
- Add subtle borders for definition (15-20% opacity)
- Exception: E-commerce/retail can use light mode if thematic

COLOR PSYCHOLOGY:
- Green: Tech, growth, trust, eco-friendly
- Blue: Professional, calm, corporate
- Purple: Premium, creative, luxury
- Orange/Red: Energy, action, urgency
- Teal: Innovation, modern, fresh
- Pink: Creative, friendly, bold
- Gold/Yellow: Premium, warmth, optimism

═══════════════════════════════════════════════════════════════════════
✨ TYPOGRAPHY MASTERY
═══════════════════════════════════════════════════════════════════════

FONT SELECTION:
Headings (H1-H3):
- Inter (default for tech)
- Poppins (friendly, rounded)
- Space Grotesk (unique, modern)
- Sora (futuristic)
- Playfair Display (luxury)

Body Text:
- Inter (versatile, readable)
- System fonts (fast: -apple-system, system-ui, sans-serif)
- Roboto (clean, professional)

Monospace (code/technical):
- JetBrains Mono
- Fira Code
- IBM Plex Mono

SIZING HIERARCHY (Tailwind classes):
H1: text-6xl md:text-8xl font-bold (36px → 64px)
H2: text-4xl md:text-6xl font-bold (36px → 48px)
H3: text-2xl md:text-4xl font-semibold (24px → 36px)
Body: text-base md:text-lg (16px → 18px)
Small: text-sm (14px)

LINE HEIGHT (Tailwind):
Headings: leading-tight (1.25) - more compact
Body: leading-relaxed (1.625) - better readability
Lists: leading-loose (2) - more breathing room

WEIGHT STRATEGY:
- Use bold (font-bold/700) for main headlines only
- Use semibold (font-semibold/600) for subheadings and emphasis
- Regular (font-normal/400) for body text
- Don't use light weight for important content

═══════════════════════════════════════════════════════════════════════
🏗️ LAYOUT PATTERNS (MODERN & VARIED)
═══════════════════════════════════════════════════════════════════════

HERO SECTIONS (use variety):
1. Minimalist Center - Large text + minimal graphics
2. Split Screen - Text left, image/graphic right
3. Full Width Image - Background image + text overlay
4. Gradient Mesh - Animated gradient + centered text
5. Asymmetrical - Text + floating elements

CONTENT SECTIONS:
1. Bento Grid - Asymmetric grid with varied card sizes
2. Traditional Grid - Equal-sized cards (3-column)
3. Timeline - Vertical or horizontal timeline layout
4. Masonry - Pinterest-style staggered grid
5. Alternating - Image right, text left, then flip

SPACING RULES:
- Use generous spacing: gap-6, gap-8 (medium-large cards)
- Padding: p-6, p-8 (internal content)
- Margins: my-12, my-16 (between sections)
- Mobile: Reduce by ~50% on small screens

═══════════════════════════════════════════════════════════════════════
🎬 ANIMATIONS & INTERACTIONS (CRUCIAL)
═══════════════════════════════════════════════════════════════════════

MANDATORY ANIMATIONS:
✅ Hover effects on all clickable elements
✅ Smooth transitions (duration-300 minimum)
✅ Fade-in on page load
✅ Scale/lift effects on cards (hover:-translate-y-2)
✅ Color transitions on hover
✅ Shadow changes for depth

SPECIFIC EFFECTS:
Buttons:
- Hover: scale-105 + shadow glow
- Active: scale-95 (press effect)
- Transitions: duration-300

Cards:
- Hover: -translate-y-1 to -translate-y-2
- Optional: scale-105 (subtle)
- Shadow glow with palette color

Images:
- Hover: scale-110 on image inside overflow-hidden container
- Fade-in on load (animation: fadeIn)

Navigation:
- Smooth transitions on hover
- Underline or background color change
- Active state with accent color

ANIMATION CLASSES TO ADD (Tailwind):
animate-fade-in, animate-slide-up, animate-scale-in, animate-glow
(Add custom keyframes to tailwind.config.js)

═══════════════════════════════════════════════════════════════════════
🛠️ COMPONENT PATTERNS
═══════════════════════════════════════════════════════════════════════

NAVIGATION (top 3 options):
1. Glassmorphic - backdrop-blur, white/10 bg, transparent
2. Solid Dark - bg-slate-900, border-bottom
3. Minimal - no background, just text + logo

HERO SECTION:
- Minimum height: min-h-screen
- Content centering: flex items-center justify-center
- Background: gradient-to-br (diagonal gradients look modern)
- Topped with "badge" (pulse icon + text)

FEATURES SECTION:
- Use Bento grid OR traditional 3-column grid
- Add icons (emoji or SVG) with colored backgrounds
- Gradient backgrounds on featured cards
- Glass effect cards (backdrop-blur) for secondary features

FORMS:
- Rounded borders: rounded-xl minimum
- Light gray inputs: bg-slate-700/50 or white/10
- Smooth focus states: ring-2 ring-primary
- Placeholder text in secondary color

BUTTONS:
- Minimum size: px-6 py-3 (touch-friendly)
- Multiple styles: gradient, glass, outline
- Hover effects: scale, shadow glow, color shift
- CTAs should stand out (gradient + glow)

CARDS:
- Border radius: rounded-2xl minimum
- Padding: p-6 or p-8
- Border: optional, border-slate-700/50 for definition
- Background: solid dark OR glass effect
- Hover: lift effect (translate-y-negative) + shadow

FOOTER:
- Grid layout: md:grid-cols-4 minimum
- Logo + description in 2 columns
- Link groups in 1 column each
- Social icons at bottom
- Copyright bottom-centered

═══════════════════════════════════════════════════════════════════════
🎨 VISUAL EFFECTS (TRENDY 2024)
═══════════════════════════════════════════════════════════════════════

GRADIENTS:
- Linear: bg-gradient-to-r, to-l, to-t, to-b
- Diagonal: bg-gradient-to-br, to-tl, to-tr, to-bl
- Multiple stops: from-X via-Y to-Z
- Always use color variants from chosen palette

GLASSMORPHISM:
- Class combo: bg-white/10 backdrop-blur-md border border-white/20
- Creates frosted glass effect
- Perfect for cards, navigation, modals
- Alternative: bg-slate-800/50 backdrop-blur-sm

SHADOWS:
- Standard: shadow-lg, shadow-xl, shadow-2xl
- Colored: shadow-purple-500/30 (using palette colors)
- Hover states: hover:shadow-2xl
- Glow effects: shadow-[inset 0 0 20px color]

BORDERS:
- Subtle: border border-white/20 or border-slate-700/50
- Accent: border-2 border-primary-color
- Rounded: rounded-xl (minimum), rounded-2xl, rounded-3xl

BACKGROUND PATTERNS:
- Noise texture: bg-[url('/noise.png')] opacity-5
- Gradient mesh: Multiple overlapping rounded divs
- Blob animation: Animated circle elements (CSS filter blur)

═══════════════════════════════════════════════════════════════════════
✅ GENERATION CHECKLIST (FOR EACH SITE)
═══════════════════════════════════════════════════════════════════════

Before finalizing ANY generated website, verify:

☑️ DESIGN
  ✓ Unique palette chosen (not default blue/purple)
  ✓ Color used consistently throughout
  ✓ Dark mode theme (unless explicitly light theme)
  ✓ All colors from palette applied (primary, secondary, accent)

☑️ TYPOGRAPHY
  ✓ Modern font chosen (not generic sans-serif)
  ✓ Size hierarchy clear (H1 >> H2 >> H3 >> Body)
  ✓ Line heights appropriate (tight for headings, relaxed for body)
  ✓ Weights varied (bold/semibold/regular)

☑️ LAYOUT
  ✓ Not boring/generic (varied layouts, asymmetrical possible)
  ✓ Generous spacing (p-6+, gap-6+)
  ✓ Mobile responsive (md: breakpoints visible)
  ✓ Clear visual hierarchy

☑️ ANIMATIONS
  ✓ Hover effects on buttons/cards
  ✓ Smooth transitions (300ms+)
  ✓ Fade-in effects on load
  ✓ No janky or distracting movements

☑️ COMPONENTS
  ✓ Modern nav (glassmorphic or minimal)
  ✓ Impactful hero section
  ✓ Feature cards with visual interest
  ✓ CTA buttons that stand out
  ✓ Professional footer

☑️ MODERN TOUCHES
  ✓ Gradient text (text-transparent bg-clip-text)
  ✓ Glass effects (backdrop-blur)
  ✓ Colored shadows (glow)
  ✓ Micro-interactions
  ✓ Visual depth (layering, z-index)

═══════════════════════════════════════════════════════════════════════
🚀 GENERATION RULES
═══════════════════════════════════════════════════════════════════════

1. DIVERSITY ACROSS PROJECTS
   - Never generate same design twice
   - Rotate through different palettes
   - Vary layouts and component styles
   - Different hero section types each time

2. QUALITY FIRST
   - One great design > three mediocre designs
   - Every detail should be intentional
   - Every color serves a purpose
   - Every animation has meaning

3. MODERN = 2024 TRENDS
   - Glassmorphism + Neumorphism elements
   - Bold gradients with subtle saturation
   - Dark mode as default
   - Micro-interactions and micro-animations
   - Asymmetrical, Bento grid layouts
   - Large, bold typography
   - Generous whitespace

4. CONTEXT MATTERS
   - SaaS: Tech Moderne or Fintech palette
   - E-commerce: E-Commerce or Sunset palette
   - Portfolio: Creative or Minimalist palette
   - Blog: Minimalist or Nature palette
   - Dashboard: Fintech or Dark palette

5. CONSISTENCY
   - All UI elements follow one style
   - Colors from one palette only
   - Spacing follows a system (gap-4, gap-6, gap-8)
   - Rounded corners consistent (all rounded-2xl or rounded-xl)
   - Border styles unified
`;

export const DESIGN_TIPS = `
═══════════════════════════════════════════════════════════════════════
💡 PRO TIPS FOR STUNNING DESIGNS
═══════════════════════════════════════════════════════════════════════

1. CONTRAST IS KEY
   - High contrast between text and background
   - Use accent color for important CTAs
   - Secondary colors for support/details

2. MOTION DRAWS ATTENTION
   - Use animations to guide user flow
   - Hover effects make interface feel responsive
   - Smooth transitions = professional feel

3. NEGATIVE SPACE IS POWERFUL
   - Don't cram content
   - Generous padding = luxurious feel
   - Let designs breathe

4. TYPOGRAPHY = PERSONALITY
   - Font choice sets the tone (modern, luxury, friendly, tech)
   - Size differences create hierarchy
   - Careful with font mixing (max 2 fonts)

5. GRADIENTS MODERNIZE
   - Linear gradients add depth without flatness
   - Diagonal (to-br) feels more dynamic than left-to-right
   - Use palette colors for gradient endpoints

6. LAYERING ADDS DEPTH
   - Shadows show elevation
   - Opacity variations (white/10 vs white/30)
   - Z-index creates visual hierarchy

7. INTERACTIVE = ENGAGING
   - Every button should have hover state
   - Cards should react to interaction
   - Loading states should be beautiful too

8. CONSTRAINTS = CREATIVITY
   - Working within one palette forces creativity
   - Limited component styles = cohesive design
   - Constraints breed better solutions
`;

export default MODERN_DESIGN_PROMPT;
