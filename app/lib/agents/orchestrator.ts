import { ArchitectAgent } from './architect-agent';
import { FrontendAgent } from './frontend-agent';
import { BackendAgent } from './backend-agent';
import { SecurityAgent } from './security-agent';
import { TestingAgent } from './testing-agent';
import { PerformanceAgent } from './performance-agent';
import { RefactoringAgent } from './refactoring-agent';
import type { AppGenerationResult, AgentContext, Task } from './types';
import { globalCache } from '~/lib/cache/cache-manager';

export class AgentOrchestrator {
  private _agents = {
    architect: new ArchitectAgent(),
    frontend: new FrontendAgent(),
    backend: new BackendAgent(),
    security: new SecurityAgent(),
    testing: new TestingAgent(),
    performance: new PerformanceAgent(),
    refactoring: new RefactoringAgent(),
  };

  private _workerPool: WorkerPool;

  constructor(workerCount: number = 4) {
    this._workerPool = new WorkerPool(workerCount);
  }

  async createApp(userRequest: string): Promise<AppGenerationResult> {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🚀 AGENT ORCHESTRATION STARTED');
    console.log('═══════════════════════════════════════════════════════\n');

    const totalStart = performance.now();

    // PHASE 1: Architecture (CRITIQUE - bloquante)
    console.log('📐 PHASE 1: Architecture Analysis');
    console.time('Phase 1');

    const architectureResult = await this._agents.architect.execute({
      userRequest,
    });

    console.timeEnd('Phase 1');
    console.log(`   ✅ Architecture defined\n`);

    // PHASE 2: Génération code (parallèle, optimisé)
    console.log('💻 PHASE 2: Code Generation (Parallel)');
    console.time('Phase 2');

    const [frontend, backend] = await Promise.all([
      this._agents.frontend.execute({
        userRequest,
        previousResults: { architecture: architectureResult.output },
      }),
      this._agents.backend.execute({
        userRequest,
        previousResults: { architecture: architectureResult.output },
      }),
    ]);

    console.timeEnd('Phase 2');
    console.log(`   ✅ Frontend & Backend code generated\n`);

    const codebase = {
      frontend: frontend.output,
      backend: backend.output,
      architecture: architectureResult.output,
    };

    // PHASE 3: Quality checks (en arrière-plan avec workers)
    console.log('🔍 PHASE 3: Background Quality Checks');
    console.time('Phase 3 (Non-blocking)');

    const qualityChecksPromise = this._runBackgroundTasks(codebase);

    console.timeEnd('Phase 3 (Non-blocking)');
    console.log(`   ✅ Background tasks initiated\n`);

    const totalDuration = performance.now() - totalStart;

    console.log('═══════════════════════════════════════════════════════');
    console.log(`⏱️  TOTAL GENERATION TIME: ${totalDuration.toFixed(2)}ms`);
    console.log('═══════════════════════════════════════════════════════\n');

    return {
      code: codebase,
      architecture: architectureResult.output,
      metadata: {
        generationTime: totalDuration,
        cached: {
          architecture: architectureResult.metadata.cached,
          frontend: frontend.metadata.cached,
          backend: backend.metadata.cached,
        },
      },
      backgroundTasks: {
        status: 'running',
        tasks: qualityChecksPromise,
      },
    };
  }

  private async _runBackgroundTasks(codebase: any): Promise<any[]> {
    // Exécuter en parallèle avec workers (non-bloquant)
    const context: AgentContext = { userRequest: '', codebase };

    const tasks = [
      this._agents.security.execute(context).then((r) => ({ agent: 'security', result: r })),
      this._agents.testing.execute(context).then((r) => ({ agent: 'testing', result: r })),
      this._agents.performance.execute(context).then((r) => ({ agent: 'performance', result: r })),
      this._agents.refactoring.execute(context).then((r) => ({ agent: 'refactoring', result: r })),
    ];

    // Retourner immédiatement
    Promise.allSettled(tasks)
      .then((results) => {
        console.log('\n✅ All background tasks completed');
        results.forEach((result, _index) => {
          if (result.status === 'fulfilled') {
            console.log(`   ✓ ${result.value.agent}: OK`);
          } else {
            console.log(`   ✗ ${result.reason}: FAILED`);
          }
        });
      })
      .catch(console.error);

    return tasks;
  }

  clearCache(): void {
    Object.values(this._agents).forEach((agent) => {
      if ('clearCache' in agent) {
        agent.clearCache();
      }
    });
    globalCache.clear();
  }

  getStatus() {
    return {
      cacheStats: (globalCache as any).getStats?.() || {},
      agents: Object.keys(this._agents),
      workerPoolSize: this._workerPool.size,
    };
  }
}

class WorkerPool {
  private _activeWorkers = 0;

  constructor(private _size: number) {}

  async execute(task: Task): Promise<any> {
    // Simulated worker pool
    this._activeWorkers++;

    try {
      // Simulate async work
      await new Promise((resolve) => setTimeout(resolve, 10));
      return { success: true, task };
    } finally {
      this._activeWorkers--;
    }
  }

  getActiveWorkerCount(): number {
    return this._activeWorkers;
  }

  get size(): number {
    return this._size;
  }
}
