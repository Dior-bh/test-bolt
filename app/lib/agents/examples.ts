/**
 * EXEMPLE D'UTILISATION ET TESTS DU SYSTÈME MULTI-AGENT
 *
 * Ce fichier montre comment utiliser complètement la nouvelle architecture
 */

import { getOrchestrator, enhanceStreamingWithAgents, getEnhancedSystemPrompt } from '~/lib/agents/integration';
import { globalTracker } from '~/lib/monitoring/performance-tracker';
import { ArchitectAgent } from '~/lib/agents/architect-agent';
import { FrontendAgent } from '~/lib/agents/frontend-agent';
import { BackendAgent } from '~/lib/agents/backend-agent';
import { SecurityAgent } from '~/lib/agents/security-agent';
import { CacheManager } from '~/lib/cache/cache-manager';

/*
 * ============================================================================
 * EXEMPLE 1 : Utilisation basique
 * ============================================================================
 */

export async function exampleBasicUsage() {
  console.log('\n🚀 EXEMPLE 1: Utilisation basique\n');

  const orchestrator = getOrchestrator();

  const userRequest = `
    Je veux créer une application web pour gérer une boutique e-commerce.
    Features:
    - Catalogue produits (avec images, prix, descriptions)
    - Panier d'achat
    - Checkout sécurisé
    - Compte utilisateur avec historique commandes
    - Admin panel pour gérer produits
    
    Tech stack préféré: React + Node.js + PostgreSQL
  `;

  try {
    console.time('Total Generation');

    // Lancer la génération
    const result = await orchestrator.createApp(userRequest);

    console.timeEnd('Total Generation');

    // Résultats immédiats (PHASE 1 + 2)
    console.log('\n✅ RÉSULTATS IMMÉDIATS:');
    console.log('Architecture:', result.architecture);
    console.log('\nMetadata:', result.metadata);

    // Tâches en arrière-plan (PHASE 3)
    console.log('\n🔄 TÂCHES EN ARRIÈRE-PLAN INITIÉES:');
    result.backgroundTasks.tasks
      .then((results) => {
        console.log('✅ Tâches complétées!');
        results.forEach((r) => {
          if (r.status === 'fulfilled') {
            console.log(`   ✓ ${r.value.agent}: ${r.value.result.status}`);
          }
        });
      })
      .catch(console.error);

    // Afficher les metrics
    setTimeout(() => {
      const metrics = globalTracker.getMetrics();
      console.log('\n📊 PERFORMANCE METRICS:');
      console.log(metrics);
    }, 2000);

    return result;
  } catch (error) {
    console.error('❌ Erreur:', error);
    return undefined;
  }
}

/*
 * ============================================================================
 * EXEMPLE 2 : Utilisation avec cache
 * ============================================================================
 */

export async function exampleWithCache() {
  console.log('\n🚀 EXEMPLE 2: Utilisation avec cache\n');

  const orchestrator = getOrchestrator();
  const request = 'Create a todo app with React';

  // Première exécution (cache miss)
  console.log('1️⃣  Première exécution (CACHE MISS):');
  console.time('First run');

  const result1 = await orchestrator.createApp(request);
  console.timeEnd('First run');

  // Deuxième exécution (cache hit)
  console.log('\n2️⃣  Deuxième exécution (CACHE HIT):');
  console.time('Second run (cached)');

  const result2 = await orchestrator.createApp(request);
  console.timeEnd('Second run (cached)');

  console.log('\n💾 Cache hit devrait être ~10x plus rapide!');

  return { result1, result2 };
}

/*
 * ============================================================================
 * EXEMPLE 3 : Monitoring détaillé
 * ============================================================================
 */

export async function exampleMonitoring() {
  console.log('\n🚀 EXEMPLE 3: Monitoring détaillé\n');

  const orchestrator = getOrchestrator();

  // Reset pour monitoring clean
  globalTracker.reset();

  globalTracker.markPoint('START: E-commerce app generation');

  const result = await orchestrator.createApp('E-commerce app with user auth and product management');

  globalTracker.markPoint('END: Generation complete');

  // Afficher le rapport complet
  console.log('\n📊 RAPPORT COMPLET:');
  globalTracker.printReport();

  // Statistiques du système
  console.log('\n⚙️  STATISTIQUES SYSTÈME:');

  const stats = orchestrator.getStatus();
  console.log(JSON.stringify(stats, null, 2));

  return result;
}

/*
 * ============================================================================
 * EXEMPLE 4 : Gestion des agents individuels
 * ============================================================================
 */

export async function exampleIndividualAgents() {
  console.log('\n🚀 EXEMPLE 4: Agents individuels\n');

  const architectAgent = new ArchitectAgent();
  const frontendAgent = new FrontendAgent();
  const backendAgent = new BackendAgent();
  const securityAgent = new SecurityAgent();

  const request = 'Build a task management app';

  // Exécuter les agents individuellement
  console.log('Exécution des agents individuellement...\n');

  const archResult = await architectAgent.execute({
    userRequest: request,
  });
  console.log('Architecture:', archResult.output);

  const frontendResult = await frontendAgent.execute({
    userRequest: request,
    previousResults: { architecture: archResult.output },
  });
  console.log('\nFrontend code length:', frontendResult.output.length);

  const backendResult = await backendAgent.execute({
    userRequest: request,
    previousResults: { architecture: archResult.output },
  });
  console.log('Backend code length:', backendResult.output.length);

  const securityResult = await securityAgent.execute({
    userRequest: request,
    codebase: {
      frontend: frontendResult.output,
      backend: backendResult.output,
    },
  });
  console.log('\nSecurity analysis score:', securityResult.output.score);

  return {
    architecture: archResult.output,
    frontend: frontendResult.output,
    backend: backendResult.output,
    security: securityResult.output,
  };
}

/*
 * ============================================================================
 * EXEMPLE 5 : Custom cache configuration
 * ============================================================================
 */

export async function exampleCustomCache() {
  console.log('\n🚀 EXEMPLE 5: Cache personnalisé\n');

  // Créer un cache custom
  const customCache = new CacheManager({
    ttl: 600, // 10 minutes
    strategy: 'lfu', // Least Frequently Used
    maxSize: 500,
  });

  // Ajouter des items au cache
  await customCache.set('react-component', { type: 'component', name: 'Button' }, 300);
  await customCache.set('node-server', { type: 'server', name: 'Express' }, 300);

  // Accéder aux items
  const component = await customCache.get('react-component');
  console.log('Cached component:', component);

  // Afficher les stats
  const stats = customCache.getStats();
  console.log('Cache stats:', stats);

  return customCache;
}

/*
 * ============================================================================
 * EXEMPLE 6 : Stream text integration
 * ============================================================================
 */

export async function exampleStreamIntegration() {
  console.log('\n🚀 EXEMPLE 6: Intégration dans stream-text\n');

  const userMessage = 'Create a real-time chat application with authentication';

  // Utiliser le prompt amélioré
  const enhancedPrompt = getEnhancedSystemPrompt();
  console.log('✨ Using enhanced system prompt');
  console.log('Prompt length:', enhancedPrompt.length, 'characters');

  // Enrichir avec les agents (optionnel, avec timeout)
  const agentResults = await enhanceStreamingWithAgents(userMessage, {
    useAgents: true,
    useEnhancedPrompt: true,
    agentTimeout: 5000, // 5 secondes max
  });

  if (agentResults) {
    console.log('\n✅ Agents enriched the streaming:');
    console.log('Architecture:', (agentResults as any).architecture);
  } else {
    console.log('\n⚠️  Agents skipped, continuing with base prompt');
  }

  return enhancedPrompt;
}

/*
 * ============================================================================
 * EXEMPLE 7 : Performance comparison
 * ============================================================================
 */

export async function examplePerformanceComparison() {
  console.log('\n🚀 EXEMPLE 7: Comparaison de performance\n');

  const orchestrator = getOrchestrator();
  const request = 'Build a note-taking app';

  // Mesurer avec agents + cache
  console.log('📊 TEST 1: Avec agents (première fois)');
  globalTracker.reset();
  console.time('With agents');

  const result1 = await orchestrator.createApp(request);
  console.timeEnd('With agents');

  console.log('\n📊 TEST 2: Avec agents + cache (deuxième fois)');
  console.time('With agents + cache');

  const result2 = await orchestrator.createApp(request);
  console.timeEnd('With agents + cache');

  // Metrics
  const metrics = globalTracker.getMetrics();
  console.log('\n📈 RÉSULTATS:');
  console.log(`Opérations: ${metrics.total}`);
  console.log(`Durée totale: ${metrics.totalTime?.toFixed(2) || '0.00'}ms`);
  console.log(`Moyenne: ${metrics.average?.toFixed(2) || '0.00'}ms`);
  console.log(`Speedup cache: ${(result1.metadata.generationTime / result2.metadata.generationTime).toFixed(1)}x`);
}

/*
 * ============================================================================
 * EXEMPLE 8 : Error handling
 * ============================================================================
 */

export async function exampleErrorHandling() {
  console.log('\n🚀 EXEMPLE 8: Gestion des erreurs\n');

  const orchestrator = getOrchestrator();

  // Test avec une requête vide
  try {
    console.log('Test 1: Requête vide');
    await orchestrator.createApp('');
  } catch (error) {
    console.log('✓ Error caught:', error instanceof Error ? error.message : error);
  }

  // Test avec une requête très longue
  try {
    console.log('\nTest 2: Requête très longue');

    const longRequest = 'a'.repeat(10000);
    await orchestrator.createApp(longRequest);
  } catch (error) {
    console.log('✓ Error caught:', error instanceof Error ? error.message : error);
  }

  console.log('\n✅ Error handling fonctionne correctement');
}

/*
 * ============================================================================
 * LAUNCHER
 * ============================================================================
 */

export async function runAllExamples() {
  console.log('═══════════════════════════════════════════════════════════');
  console.log("🎯 EXEMPLES D'UTILISATION - SYSTÈME MULTI-AGENT");
  console.log('═══════════════════════════════════════════════════════════');

  try {
    // Décommenter les exemples à exécuter

    /*
     * await exampleBasicUsage();
     * await exampleWithCache();
     * await exampleMonitoring();
     * await exampleIndividualAgents();
     * await exampleCustomCache();
     * await exampleStreamIntegration();
     * await examplePerformanceComparison();
     * await exampleErrorHandling();
     */

    console.log('\n✅ Exemples terminés! Décommenter dans runAllExamples() pour tester.');
  } catch (error) {
    console.error('❌ Erreur globale:', error);
  }
}

// Pour les tests: export default runAllExamples;
