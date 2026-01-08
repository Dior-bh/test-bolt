/**
 * MODERN DESIGN SYSTEM - EXAMPLES & USAGE GUIDE
 *
 * This file provides practical examples of how the design system works
 * and how it integrates into the website generation process.
 */

/**
 * EXAMPLE 1: Generating a Website with Tech Modern Palette
 *
 * When a user asks: "Create a SaaS dashboard for project management"
 * The system should:
 * 1. Select Tech Moderne palette automatically
 * 2. Apply the design guidelines
 * 3. Use component templates as reference
 * 4. Generate modern, unique design
 */
export const techSaasExample = `
<!-- Tech SaaS Dashboard - Using Tech Moderne Palette -->
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ProjectHub - Modern SaaS Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
  <!-- Navigation (Glassmorphic) -->
  <nav className="sticky top-0 bg-white/10 backdrop-blur-md border-b border-white/20">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        ProjectHub
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Dashboard</a>
        <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Projects</a>
        <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Team</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section (Gradient Mesh variant) -->
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Animated gradient blobs -->
    <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>

    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <!-- Animated badge -->
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-sm text-emerald-300">Now Available</span>
      </div>

      <!-- Gradient text heading -->
      <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
        Manage Projects Beautifully
      </h1>

      <!-- Description -->
      <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
        A modern, intuitive project management dashboard built for teams that care about design. Real-time collaboration, powerful insights, beautiful UI.
      </p>

      <!-- CTA Buttons -->
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl font-semibold text-white hover:scale-105 transition-transform shadow-lg shadow-emerald-500/30 duration-300">
          Start Free Trial
        </button>
        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors duration-300">
          View Demo
        </button>
      </div>
    </div>
  </section>

  <!-- Features Section (Bento Grid) -->
  <section className="max-w-7xl mx-auto px-6 py-24">
    <h2 className="text-5xl font-bold text-white mb-16 text-center">
      Powerful Features
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Large featured card -->
      <div className="md:col-span-2 md:row-span-2 p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 hover:-translate-y-2 transition-transform duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20">
        <h3 className="text-3xl font-bold text-white mb-4">Real-time Collaboration</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          See team changes instantly. Comments, updates, and progress tracked in real-time with beautiful animations.
        </p>
        <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-20"></div>
      </div>

      <!-- Regular cards -->
      <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/30 hover:-translate-y-2 transition-transform duration-300">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center mb-4">
          <span className="text-2xl">⚡</span>
        </div>
        <h3 className="font-bold text-white mb-2">Lightning Fast</h3>
        <p className="text-slate-400 text-sm">Optimized performance, instant load times</p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/30 hover:-translate-y-2 transition-transform duration-300">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center mb-4">
          <span className="text-2xl">🔒</span>
        </div>
        <h3 className="font-bold text-white mb-2">Enterprise Security</h3>
        <p className="text-slate-400 text-sm">Bank-level encryption, compliant</p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/30 hover:-translate-y-2 transition-transform duration-300">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center mb-4">
          <span className="text-2xl">📊</span>
        </div>
        <h3 className="font-bold text-white mb-2">Rich Analytics</h3>
        <p className="text-slate-400 text-sm">Insights that matter for your team</p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/30 hover:-translate-y-2 transition-transform duration-300">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center mb-4">
          <span className="text-2xl">🔌</span>
        </div>
        <h3 className="font-bold text-white mb-2">Integrations</h3>
        <p className="text-slate-400 text-sm">Connect with 100+ tools</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer className="bg-slate-900/50 border-t border-slate-800 mt-24">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold text-white mb-4">ProjectHub</h3>
        <p className="text-slate-400">The modern way to manage projects.</p>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-4">Product</h4>
        <ul className="space-y-2 text-slate-400">
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Security</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-4">Company</h4>
        <ul className="space-y-2 text-slate-400">
          <li><a href="#" className="hover:text-emerald-400 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-4">Social</h4>
        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Twitter</a>
          <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 py-6 border-t border-slate-800 text-center text-slate-400">
      <p>© 2024 ProjectHub. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
`;

/**
 * EXAMPLE 2: Design Checklist Verification
 *
 * Before finalizing any design, verify all items:
 */
export const designChecklistExample = {
  design: {
    uniquePaletteChosen: true, // Not default blue/purple ✅
    colorsConsistent: true, // Applied throughout ✅
    darkMode: true, // Dark theme by default ✅
    colorVariants: true, // Primary + secondary + accent ✅
    purposeAligned: true, // Emerald/Cyan for tech = perfect match ✅
  },
  typography: {
    modernFont: true, // Inter or Poppins ✅
    sizeHierarchy: true, // H1 > H2 > H3 > Body ✅
    lineHeights: true, // Appropriate for content type ✅
    weightsVaried: true, // Bold, semibold, regular ✅
    readability: true, // Good contrast ✅
  },
  layout: {
    notGeneric: true, // Bento grid + hero + features ✅
    generousSpacing: true, // p-6+, gap-6+ ✅
    responsive: true, // md: breakpoints present ✅
    hierarchy: true, // Clear visual hierarchy ✅
  },
  animations: {
    hoverEffects: true, // On all buttons/cards ✅
    transitions: true, // duration-300+ ✅
    fadeIn: true, // On page load ✅
    noJank: true, // Smooth, no distracting ✅
  },
  modernTouches: {
    gradients: true, // Text + backgrounds ✅
    glass: true, // Backdrop-blur effects ✅
    glow: true, // Colored shadows ✅
    microInteractions: true, // Feedback on interaction ✅
    depth: true, // Layering and z-index ✅
  },
};

/**
 * EXAMPLE 3: Palette Selection Logic
 *
 * How the system chooses palettes contextually:
 */
export const paletteSelectionLogic = {
  // SaaS/Tech Projects
  softwareProducta: {
    bestPalettes: ['Tech Moderne', 'Fintech', 'Cyberpunk'],
    reasoning: 'Professional, trustworthy, modern tech aesthetic',
  },

  // E-Commerce/Retail
  ecommerceStore: {
    bestPalettes: ['E-Commerce', 'Sunset', 'Peach'],
    reasoning: 'Inviting, product-focused, conversion-optimized',
  },

  // Creative/Portfolio
  creativeAgency: {
    bestPalettes: ['Creative', 'Minimalist', 'Nature'],
    reasoning: 'Showcases work, memorable, stands out',
  },

  // Content/Blog
  contentBlog: {
    bestPalettes: ['Minimalist', 'Forest', 'Peach'],
    reasoning: 'Focus on content readability, professional appearance',
  },

  // Financial/Premium
  financialService: {
    bestPalettes: ['Fintech', 'Midnight', 'Minimalist'],
    reasoning: 'Trust, security, premium positioning',
  },
};

/**
 * EXAMPLE 4: Component Reusability
 *
 * How component templates are used:
 */
export const componentUsageExample = {
  heroSection: {
    variant: 'asymmetrical',
    palette: 'Creative',
    description: 'Bold orange/red hero with tilted content + floating elements',
  },

  featureCards: {
    variant: 'bentoGrid',
    layout: '3-1-2 asymmetric',
    description: 'Large featured card + 4 regular cards',
  },

  navigation: {
    variant: 'glassmorphic',
    colors: 'from palette primary/secondary',
    description: 'Fixed nav with backdrop-blur and smooth transitions',
  },

  buttons: {
    primary: 'gradient from primary to accent',
    secondary: 'glass effect with border',
    hover: 'scale-105 + shadow glow',
  },

  footer: {
    layout: 'multi-column with social icons',
    colors: 'primary for links on hover',
  },
};

/**
 * EXAMPLE 5: Animation Patterns
 *
 * Standard animations applied to all designs:
 */
export const animationPatterns = {
  buttonHover: 'scale-105 + shadow-lg shadow-primary/30 + duration-300',
  cardHover: '-translate-y-2 + shadow-xl + duration-300',
  imageHover: 'scale-110 (in overflow-hidden container)',
  navLink: 'smooth underline or bg-color change + duration-200',
  pageLoad: 'fade-in + stagger-delay on major elements',
  inputFocus: 'ring-2 ring-primary + duration-200',
};

/**
 * EXAMPLE 6: Anti-Pattern Prevention
 *
 * Things that should NEVER appear:
 */
export const antiPatternsPrevention = {
  colorPalettes: {
    WRONG: 'Default blue (#3B82F6) + purple (#8B5CF6)',
    RIGHT: 'One of 12 unique palettes chosen contextually',
  },

  layout: {
    WRONG: 'Generic centered box (header + content + footer)',
    RIGHT: 'Varied layouts (Bento grid, asymmetric, split screen, etc.)',
  },

  colors: {
    WRONG: 'Pure black background (#000000)',
    RIGHT: 'Dark slate/gray (bg-slate-900, bg-slate-950)',
  },

  contrast: {
    WRONG: 'Pure white text on pure black',
    RIGHT: 'Light slate text on dark slate background',
  },

  interactions: {
    WRONG: 'No hover effects',
    RIGHT: 'All clickables have smooth hover effects',
  },

  effects: {
    WRONG: 'Flat, 2D design',
    RIGHT: '3D depth with shadows, layers, and gradients',
  },
};

export default {
  techSaasExample,
  designChecklistExample,
  paletteSelectionLogic,
  componentUsageExample,
  animationPatterns,
  antiPatternsPrevention,
};
