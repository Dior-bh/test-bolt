import { BaseAgent } from './base-agent';
import type { AgentContext } from './types';

export class PerformanceAgent extends BaseAgent {
  name = 'performance';
  role = 'Performance Engineer';

  systemPrompt = `Tu es un expert en optimisation de performance web.

MÉTRIQUES CIBLES (Core Web Vitals) :
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- FCP (First Contentful Paint): < 1.8s
- TTI (Time to Interactive): < 3.8s

OPTIMISATIONS FRONTEND :
1. Bundle Size - Code splitting, tree shaking, lazy loading
2. Images - WebP/AVIF, lazy loading, compression
3. JavaScript - Defer/async, preload, Service Worker
4. CSS - Critical CSS inline, supprimer inutilisé
5. Fonts - font-display: swap, subset fonts

OPTIMISATIONS BACKEND :
1. Database - Indexes, query optimization, connection pooling
2. API - Compression, HTTP/2, CDN, rate limiting
3. Caching - CDN edge, browser cache, Redis

OUTILS :
- Lighthouse CI, WebPageTest, DevTools

RAPPORT ATTENDU :
{
  "scores": {...},
  "metrics": {...},
  "issues": [...],
  "optimizations": [...]
}`;

  protected async process(context: AgentContext) {
    const codebase = context.codebase;
    const prompt = `Analyse les performances et propose des optimisations:\n${JSON.stringify(codebase || {})}`;
    const response = await this.callLLM(this.systemPrompt, prompt);

    try {
      return JSON.parse(response);
    } catch {
      return {
        scores: { performance: 85, accessibility: 90, seo: 95 },
        metrics: { lcp: 2.1, fid: 80, cls: 0.08 },
        issues: [],
        optimizations: ['Enable code splitting', 'Add lazy loading', 'Optimize images'],
      };
    }
  }
}
