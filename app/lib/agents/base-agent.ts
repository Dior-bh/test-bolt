import type { Agent, AgentContext, AgentResult } from './types';

export abstract class BaseAgent implements Agent {
  abstract name: string;
  abstract role: string;
  abstract systemPrompt: string;

  protected cache = new Map<string, any>();
  protected startTime = 0;

  async execute(context: AgentContext): Promise<AgentResult> {
    this.startTime = performance.now();

    // Check cache first
    const cacheKey = this.getCacheKey(context);
    const cached = this.cache.get(cacheKey);

    if (cached) {
      const duration = performance.now() - this.startTime;
      console.log(`✅ ${this.name} (CACHED): ${duration.toFixed(2)}ms`);

      return {
        output: cached,
        metadata: {
          duration,
          tokensUsed: 0,
          cached: true,
        },
      };
    }

    // Execute agent logic
    try {
      const output = await this.process(context);
      const duration = performance.now() - this.startTime;

      // Cache result
      this.cache.set(cacheKey, output);

      console.log(`⚡ ${this.name}: ${duration.toFixed(2)}ms`);

      return {
        output,
        metadata: {
          duration,
          tokensUsed: this.estimateTokens(output),
          cached: false,
        },
      };
    } catch (error) {
      console.error(`❌ ${this.name} failed:`, error);
      throw error;
    }
  }

  protected abstract process(context: AgentContext): Promise<any>;

  protected getCacheKey(context: AgentContext): string {
    return `${this.name}-${JSON.stringify({
      request: context.userRequest?.substring(0, 100),
      deps: context.dependencies?.sort().join(','),
    })}`;
  }

  protected estimateTokens(output: any): number {
    // Rough estimation: 1 token ≈ 4 characters
    return JSON.stringify(output).length / 4;
  }

  // Stub pour appels LLM (à implémenter)
  protected async callLLM(_systemPrompt: string, _userPrompt: string): Promise<string> {
    // Cette méthode sera implémentée réellement lors de l'intégration
    console.log(`🤖 [${this.name}] LLM Call (simulated)`);
    return JSON.stringify({ status: 'success', agent: this.name });
  }

  clearCache(): void {
    this.cache.clear();
  }
}
