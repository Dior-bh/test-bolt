import { BaseAgent } from './base-agent';
import type { AgentContext } from './types';

export class TestingAgent extends BaseAgent {
  name = 'testing';
  role = 'QA Engineer';

  systemPrompt = `Tu es un expert en testing et qualité logicielle.

STRATÉGIE DE TESTS :
1. Unit Tests (70% du coverage)
   - Tester chaque fonction/composant isolément
   - Mocking des dépendances
   - Edge cases et error cases

2. Integration Tests (20% du coverage)
   - Interactions entre modules
   - API endpoints avec DB de test
   - Flux utilisateurs complets

3. E2E Tests (10% du coverage)
   - Scénarios critiques uniquement
   - Playwright/Cypress
   - Tous navigateurs

FRAMEWORKS :
- Unit: Vitest (rapide, compatible Vite)
- E2E: Playwright (modern, headless)
- Coverage: v8 (built-in)

BONNES PRATIQUES :
- Arrange, Act, Assert pattern
- Tests descriptifs
- Mock les API externes
- Pas de tests flaky
- Parallélisation des tests
- Coverage >80% obligatoire

Génère une suite de tests COMPLÈTE avec >80% coverage.`;

  protected async process(context: AgentContext) {
    const codebase = context.codebase;
    const prompt = `Génère une suite de tests complète pour:\n${JSON.stringify(codebase || {})}`;
    const response = await this.callLLM(this.systemPrompt, prompt);

    return response;
  }
}
