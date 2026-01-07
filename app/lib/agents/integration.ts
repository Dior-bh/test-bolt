/**
 * Integration de l'architecture multi-agent et du system prompt amélioré
 * Ce module intègre les agents dans le pipeline de génération de code
 */

import { AgentOrchestrator } from '~/lib/agents/orchestrator';
import { globalCache } from '~/lib/cache/cache-manager';
import { globalTracker } from '~/lib/monitoring/performance-tracker';
import { ENHANCED_SYSTEM_PROMPT } from '~/lib/common/prompts/enhanced-system-prompt';

// Singleton instances
let orchestrator: AgentOrchestrator | null = null;

export function getOrchestrator(): AgentOrchestrator {
  if (!orchestrator) {
    orchestrator = new AgentOrchestrator(4);
  }

  return orchestrator;
}

/**
 * Exécute les agents intelligents pour améliorer la génération
 * Retourne rapidement tout en lançant les tâches en arrière-plan
 */
export async function executeAgentsPipeline(userMessage: string, _context?: any) {
  const orchestrator = getOrchestrator();
  const endTimer = globalTracker.startTimer('Agent Pipeline Execution');

  try {
    // Vérifier le cache
    const cacheKey = `agent-pipeline-${userMessage.substring(0, 100)}`;
    const cached = await globalCache.get(cacheKey);

    if (cached) {
      endTimer();
      return cached;
    }

    // Exécuter les agents
    console.log('🤖 Starting agent pipeline...');

    const result = await orchestrator.createApp(userMessage);

    // Mettre en cache les résultats (30 minutes pour la pipeline)
    await globalCache.set(cacheKey, result, 1800);

    endTimer();

    return result;
  } catch (error) {
    console.error('❌ Agent pipeline failed:', error);
    endTimer();
    throw error;
  }
}

/**
 * Enrichit le system prompt avec le prompt amélioré
 */
export function getEnhancedSystemPrompt(): string {
  return ENHANCED_SYSTEM_PROMPT;
}

/**
 * Réinitialise les caches et orchestrateur
 */
export function resetAgentSystem(): void {
  getOrchestrator().clearCache();
  globalCache.clear();
  globalTracker.reset();
  console.log('🧹 Agent system reset');
}

/**
 * Obtient les statistiques du système
 */
export function getAgentSystemStats() {
  return {
    orchestrator: getOrchestrator().getStatus(),
    cache: (globalCache as any).getStats?.() || {},
    performance: globalTracker.getMetrics(),
  };
}

/**
 * Interface pour résultats d'agents enrichis
 */
export interface EnrichedStreamOptions {
  useAgents: boolean;
  useEnhancedPrompt: boolean;
  agentTimeout?: number; // ms
}

/**
 * Wrapper pour ajouter les agents au streaming
 */
export async function enhanceStreamingWithAgents(
  userMessage: string,
  options: EnrichedStreamOptions = { useAgents: false, useEnhancedPrompt: true },
) {
  if (options.useEnhancedPrompt) {
    console.log('✨ Using enhanced senior-level system prompt');
  }

  if (options.useAgents) {
    try {
      const agentTimeout = options.agentTimeout || 5000;
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Agents timeout')), agentTimeout),
      );

      const pipelinePromise = executeAgentsPipeline(userMessage);
      const agentResults = await Promise.race([pipelinePromise, timeoutPromise]);

      console.log('✅ Agents analysis enriched the generation');

      return agentResults;
    } catch {
      console.warn('⚠️  Agents skipped (timeout or error), continuing with base prompt');
      return null;
    }
  }

  return null;
}
