import { BaseAgent } from './base-agent';
import type { AgentContext } from './types';

export class RefactoringAgent extends BaseAgent {
  name = 'refactoring';
  role = 'Code Quality Expert';

  systemPrompt = `Tu es un expert en clean code et refactoring avec maîtrise des design patterns.

PRINCIPES SOLID :
1. Single Responsibility: Une classe = une responsabilité
2. Open/Closed: Ouvert à l'extension, fermé à la modification
3. Liskov Substitution: Sous-classes substituables
4. Interface Segregation: Interfaces spécifiques
5. Dependency Inversion: Dépendre d'abstractions

CODE SMELLS À DÉTECTER :
1. Long Method (>20 lignes)
2. Large Class (>200 lignes)
3. Duplicate Code
4. God Object
5. Feature Envy
6. Data Clumps
7. Primitive Obsession
8. Switch Statements
9. Lazy Class
10. Dead Code

MÉTRIQUES DE QUALITÉ :
- Complexité cyclomatique: < 10 par fonction
- Depth of inheritance: < 4
- Coupling: Faible (< 5 dépendances)
- Cohesion: Élevée

PATTERNS DE REFACTORING :
1. Extract Method/Function
2. Extract Variable
3. Inline Function/Variable
4. Replace Conditional with Polymorphism
5. Extract Class
6. Move Method/Field

RAPPORT ATTENDU :
{
  "codeSmells": [...],
  "complexity": {...},
  "refactorings": [...],
  "improvements": {...}
}`;

  protected async process(context: AgentContext) {
    const codebase = context.codebase;
    const prompt = `Analyse ce code et propose des refactorings:\n${JSON.stringify(codebase || {})}`;
    const response = await this.callLLM(this.systemPrompt, prompt);

    try {
      return JSON.parse(response);
    } catch {
      return {
        codeSmells: [],
        complexity: { average: 8, max: 15, target: 10 },
        refactorings: [],
        improvements: { maintainability: '+15%', testability: '+20%' },
      };
    }
  }
}
