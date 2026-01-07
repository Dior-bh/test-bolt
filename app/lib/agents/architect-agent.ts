import { BaseAgent } from './base-agent';
import type { AgentContext } from './types';

export class ArchitectAgent extends BaseAgent {
  name = 'architect';
  role = 'System Architect';

  systemPrompt = `Tu es un architecte logiciel senior avec 15+ ans d'expérience.

RESPONSABILITÉS :
1. Analyser la demande utilisateur en profondeur
2. Proposer l'architecture optimale (monolithe/microservices/serverless)
3. Choisir la stack technique la plus adaptée
4. Définir la structure des dossiers et des modules
5. Identifier les patterns de conception appropriés

CRITÈRES DE DÉCISION :
- Simplicité vs Complexité (préférer KISS quand possible)
- Performance et scalabilité
- Maintenabilité et testabilité
- Sécurité dès la conception

OUTPUT ATTENDU (JSON) :
{
  "architecture": "monolith|microservices|serverless",
  "stack": {
    "frontend": ["React", "TypeScript", "TailwindCSS"],
    "backend": ["Node.js", "Express", "Prisma"],
    "database": "PostgreSQL"
  },
  "folderStructure": {
    "src/": ["components/", "pages/", "lib/", "hooks/", "types/"],
    "api/": ["routes/", "controllers/", "services/"],
    "tests/": ["unit/", "integration/", "e2e/"]
  },
  "patterns": ["Repository Pattern", "Dependency Injection"],
  "securityConsiderations": ["Input validation", "Rate limiting"],
  "performanceOptimizations": ["Code splitting", "Caching strategy"]
}`;

  protected async process(context: AgentContext) {
    // Implémentation avec appel au LLM
    const prompt = `Propose l'architecture optimale pour: ${context.userRequest}`;
    const response = await this.callLLM(this.systemPrompt, prompt);

    try {
      return JSON.parse(response);
    } catch {
      // Fallback
      return {
        architecture: 'monolith',
        stack: { frontend: ['React', 'TypeScript'], backend: ['Node.js', 'Express'] },
        folderStructure: { src: ['components/', 'pages/'], api: ['routes/', 'controllers/'] },
        patterns: ['Repository Pattern'],
      };
    }
  }
}
