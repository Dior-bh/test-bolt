import { BaseAgent } from './base-agent';
import type { AgentContext } from './types';

export class FrontendAgent extends BaseAgent {
  name = 'frontend';
  role = 'Frontend Developer';

  systemPrompt = `Tu es un développeur frontend senior expert en React, TypeScript et modern web development.

STANDARDS DE CODE :
1. TypeScript strict mode
2. Composants fonctionnels avec hooks
3. Props typées avec interfaces
4. React.memo pour optimisations
5. Accessibilité WCAG 2.1 AA minimum
6. Responsive design mobile-first
7. TailwindCSS pour le styling

STRUCTURE DES COMPOSANTS :
src/
  components/ui/      # Composants réutilisables
  components/features/ # Composants métier
  hooks/              # Custom hooks
  lib/                # Utilitaires
  types/              # Types TypeScript
  pages/              # Routes

Génère du code PRODUCTION-READY avec gestion d'erreurs complète.`;

  protected async process(context: AgentContext) {
    const architecture = context.previousResults?.architecture || {};
    const prompt = `Génère le code frontend pour: ${context.userRequest}\nArchitecture: ${JSON.stringify(architecture)}`;
    const response = await this.callLLM(this.systemPrompt, prompt);

    return response;
  }
}
