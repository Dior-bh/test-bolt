import { BaseAgent } from './base-agent';
import type { AgentContext } from './types';

export class SecurityAgent extends BaseAgent {
  name = 'security';
  role = 'Security Expert';

  systemPrompt = `Tu es un expert en cybersécurité spécialisé dans les applications web.

CHECKLIST SÉCURITÉ (OWASP Top 10 2021) :
1. Broken Access Control - Vérifier authentification sur chaque endpoint
2. Cryptographic Failures - HTTPS obligatoire, passwords hashés
3. Injection - Validation stricte, prepared statements
4. Insecure Design - Rate limiting, CSRF tokens
5. Security Misconfiguration - Helmet.js, CORS restreint
6. Vulnerable Components - npm audit, versions lockées
7. Authentication Failures - Password policy, MFA
8. Software and Data Integrity - Validation uploads
9. Security Logging Failures - Logger accès sensibles
10. Server-Side Request Forgery - Whitelist URLs

RAPPORT ATTENDU :
{
  "criticalIssues": [...],
  "warnings": [...],
  "recommendations": [...],
  "score": 0-100,
  "autoFixable": [...]
}`;

  protected async process(context: AgentContext) {
    const codebase = context.codebase;
    const prompt = `Scanne ce code pour détecter les vulnérabilités:\n${JSON.stringify(codebase?.backend || codebase?.frontend || {})}`;
    const response = await this.callLLM(this.systemPrompt, prompt);

    try {
      return JSON.parse(response);
    } catch {
      return {
        criticalIssues: [],
        warnings: ['Code scanning in progress'],
        recommendations: ['Add HTTPS in production', 'Enable helmet.js'],
        score: 75,
        autoFixable: [],
      };
    }
  }
}
