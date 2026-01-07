/**
 * POINT D'ENTRÉE CENTRAL DU SYSTÈME MULTI-AGENT
 *
 * Exporte tous les éléments principaux pour utilisation facile
 */

/*
 * ============================================================================
 * ORCHESTRATEUR PRINCIPAL
 * ============================================================================
 */
import { AgentOrchestrator } from './orchestrator';
export { AgentOrchestrator };

import {
  getOrchestrator,
  executeAgentsPipeline,
  enhanceStreamingWithAgents,
  getEnhancedSystemPrompt,
  resetAgentSystem,
  getAgentSystemStats,
} from './integration';
export {
  getOrchestrator,
  executeAgentsPipeline,
  enhanceStreamingWithAgents,
  getEnhancedSystemPrompt,
  resetAgentSystem,
  getAgentSystemStats,
};

/*
 * ============================================================================
 * AGENTS INDIVIDUELS
 * ============================================================================
 */
import { BaseAgent } from './base-agent';
export { BaseAgent };

import { ArchitectAgent } from './architect-agent';
export { ArchitectAgent };

import { FrontendAgent } from './frontend-agent';
export { FrontendAgent };

import { BackendAgent } from './backend-agent';
export { BackendAgent };

import { SecurityAgent } from './security-agent';
export { SecurityAgent };

import { TestingAgent } from './testing-agent';
export { TestingAgent };

import { PerformanceAgent } from './performance-agent';
export { PerformanceAgent };

import { RefactoringAgent } from './refactoring-agent';
export { RefactoringAgent };

/*
 * ============================================================================
 * TYPES
 * ============================================================================
 */
export type { Agent, AgentContext, AgentResult, Codebase, AppGenerationResult, Task } from './types';

/*
 * ============================================================================
 * CACHE
 * ============================================================================
 */
import { CacheManager, globalCache } from '~/lib/cache/cache-manager';
export { CacheManager, globalCache };

/*
 * ============================================================================
 * MONITORING
 * ============================================================================
 */
import { PerformanceTracker, globalTracker } from '~/lib/monitoring/performance-tracker';
export { PerformanceTracker, globalTracker };

/*
 * ============================================================================
 * UI COMPONENTS
 * ============================================================================
 */
import { BackgroundTasks } from '~/components/BackgroundTasks';
export { BackgroundTasks };

/*
 * ============================================================================
 * PROMPTS
 * ============================================================================
 */
import { ENHANCED_SYSTEM_PROMPT } from '~/lib/common/prompts/enhanced-system-prompt';
export { ENHANCED_SYSTEM_PROMPT };

/*
 * ============================================================================
 * QUICK START
 * ============================================================================
 */

/**
 * Démarrage rapide en une ligne
 */
export async function quickStart(userRequest: string) {
  const orchestrator = getOrchestrator();
  return orchestrator.createApp(userRequest);
}

/**
 * Réinitialisation rapide
 */
export function quickReset() {
  resetAgentSystem();
}

/*
 * ============================================================================
 * EXPORTS PAR CATÉGORIE
 * ============================================================================
 */

// Pour les imports groupés
export const AGENTS = {
  Architect: () => new ArchitectAgent(),
  Frontend: () => new FrontendAgent(),
  Backend: () => new BackendAgent(),
  Security: () => new SecurityAgent(),
  Testing: () => new TestingAgent(),
  Performance: () => new PerformanceAgent(),
  Refactoring: () => new RefactoringAgent(),
};

export const CACHE = {
  Manager: CacheManager,
  global: globalCache,
};

export const MONITORING = {
  Tracker: PerformanceTracker,
  global: globalTracker,
};

export const UTILS = {
  getOrchestrator,
  executeAgentsPipeline,
  enhanceStreamingWithAgents,
  getEnhancedSystemPrompt,
  resetAgentSystem,
  getAgentSystemStats,
};
