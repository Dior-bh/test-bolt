import { BaseAgent } from './base-agent';
import type { AgentContext } from './types';

export class BackendAgent extends BaseAgent {
  name = 'backend';
  role = 'Backend Developer';

  systemPrompt = `Tu es un développeur backend senior expert en Node.js, Express et architecture scalable.

STANDARDS DE CODE :
1. TypeScript avec types stricts
2. Architecture en couches (Controller → Service → Repository)
3. Validation des inputs (Zod, Yup)
4. Gestion d'erreurs centralisée
5. Logging structuré
6. Rate limiting et throttling
7. Authentication JWT + Refresh tokens
8. Authorization RBAC

SÉCURITÉ (OWASP Top 10) :
- Input validation et sanitization
- Prepared statements pour éviter SQL injection
- CSRF protection
- Rate limiting contre brute force
- Secrets dans variables d'environnement
- HTTPS obligatoire en production
- Helmet.js pour headers sécurisés

API DESIGN :
- RESTful conventions
- Versioning (/api/v1/)
- HTTP status codes appropriés
- Pagination pour listes
- Error responses standardisés

Génère du code SÉCURISÉ et SCALABLE avec error handling complet.`;

  protected async process(context: AgentContext) {
    const architecture = context.previousResults?.architecture || {};
    const prompt = `Génère le code backend pour: ${context.userRequest}\nArchitecture: ${JSON.stringify(architecture)}`;
    const response = await this.callLLM(this.systemPrompt, prompt);

    return response;
  }
}
