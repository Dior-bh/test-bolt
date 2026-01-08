/**
 * Modern UI Component Templates & Snippets
 * Pre-built, production-ready components for modern web design
 * These serve as inspiration and reference for AI-generated code
 */

export const MODERN_COMPONENTS = {
  /**
   * HERO SECTIONS - High-impact opening sections
   */
  heroSections: {
    modernMinimalist: `
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm text-purple-300">Now Available</span>
          </div>
          
          {/* Gradient text heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Build Something Amazing
          </h1>
          
          {/* Description */}
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Create stunning applications with modern tools, beautiful design, and exceptional user experience.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:scale-105 transition-transform shadow-lg shadow-purple-500/30">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    `,

    splitScreen: `
      <section className="min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Experience Modern Design
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transform your vision into reality with cutting-edge technology and stunning aesthetics.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white w-fit hover:shadow-xl hover:shadow-cyan-500/50 transition-all">
              Start Now
            </button>
          </div>
          
          {/* Image/Visual */}
          <div className="h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl shadow-2xl"></div>
        </div>
      </section>
    `,
  },

  /**
   * GRID LAYOUTS - Feature sections with Bento grid
   */
  gridLayouts: {
    bentoGrid: `
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Large featured card */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <h3 className="text-3xl font-bold mb-4 relative z-10">Featured Feature</h3>
          <p className="text-purple-100 mb-6 relative z-10">Main highlight with maximum visual impact.</p>
          <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg font-semibold text-white hover:bg-white/30 transition-colors relative z-10">Learn More</button>
        </div>
        
        {/* Small feature cards */}
        <div className="bg-slate-800 rounded-3xl p-6 hover:bg-slate-700 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
            <span className="text-white font-bold">1</span>
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Feature One</h4>
          <p className="text-slate-400">Brief description of this feature.</p>
        </div>
        
        <div className="bg-slate-800 rounded-3xl p-6 hover:bg-slate-700 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
            <span className="text-white font-bold">2</span>
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Feature Two</h4>
          <p className="text-slate-400">Brief description of this feature.</p>
        </div>
        
        {/* Wide bottom card */}
        <div className="md:col-span-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Full Width Feature</h3>
          <p className="text-slate-300">This card spans the entire width and showcases important information.</p>
        </div>
      </div>
    `,

    featureGrid: `
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Feature {i + 1}</h3>
            <p className="text-slate-300 leading-relaxed">Comprehensive description of what this feature provides to users.</p>
          </div>
        ))}
      </div>
    `,
  },

  /**
   * NAVIGATION - Header and nav components
   */
  navigation: {
    glassmorphic: `
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Brand
          </div>
          
          {/* Navigation links */}
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-slate-300 hover:text-white transition-colors font-medium">Features</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors font-medium">Pricing</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors font-medium">About</a>
          </div>
          
          {/* CTA Button */}
          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform">
            Sign Up
          </button>
        </div>
      </nav>
    `,
  },

  /**
   * CARDS - Reusable card components
   */
  cards: {
    elevatedCard: `
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span>🎯</span>
          </div>
          <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">Featured</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Card Title</h3>
        <p className="text-slate-400 mb-4 leading-relaxed">Description of the card content with proper spacing and hierarchy.</p>
        <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">Learn more →</a>
      </div>
    `,

    glassCard: `
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 cursor-pointer">
        <h3 className="text-lg font-semibold text-white mb-2">Glass Card</h3>
        <p className="text-slate-300 text-sm">Modern glassmorphic design with blur effect and subtle borders.</p>
      </div>
    `,

    statsCard: `
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
        <p className="text-slate-400 text-sm font-medium mb-2">Total Users</p>
        <div className="flex items-baseline gap-4">
          <h3 className="text-4xl font-bold text-white">24.5K</h3>
          <span className="text-emerald-400 text-sm font-semibold">+12% from last month</span>
        </div>
        <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-3/4"></div>
        </div>
      </div>
    `,
  },

  /**
   * BUTTONS - Modern button styles
   */
  buttons: {
    gradientGlow: `
      <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:scale-105 transition-transform shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 active:scale-95">
        Click Me
      </button>
    `,

    glassButton: `
      <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-semibold text-white hover:bg-white/20 transition-all hover:border-white/50">
        Glass Button
      </button>
    `,

    outlineButton: `
      <button className="px-6 py-3 border-2 border-purple-500 rounded-lg font-semibold text-purple-300 hover:bg-purple-500/10 transition-colors">
        Outline Button
      </button>
    `,
  },

  /**
   * FOOTER - Modern footer sections
   */
  footer: {
    minimal: `
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Branding */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Brand
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Building the future with modern technology and beautiful design.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors">T</a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors">L</a>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            © 2024 Brand. All rights reserved.
          </div>
        </div>
      </footer>
    `,
  },

  /**
   * ANIMATIONS - Tailwind animation utilities
   */
  animations: {
    customKeyframes: `
      {/* Add to tailwind.config.js extend section */}
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(147, 51, 234, 0.6)' },
        },
      },
    `,
  },

  /**
   * EFFECTS - Modern visual effects
   */
  effects: {
    gradientMesh: `
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    `,

    noiseTexture: `
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>
    `,
  },
};

/**
 * Get a random component snippet for inspiration
 */
export function getRandomComponentSnippet(): string {
  const allComponents = Object.values(MODERN_COMPONENTS).flatMap((category) =>
    Object.values(category).filter((value) => typeof value === 'string'),
  );
  return allComponents[Math.floor(Math.random() * allComponents.length)] as string;
}
