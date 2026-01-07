interface Metric {
  label: string;
  duration: number;
  timestamp: number;
}

export class PerformanceTracker {
  private _metrics: Metric[] = [];
  private _timers = new Map<string, number>();

  startTimer(label: string): () => void {
    const startTime = performance.now();
    this._timers.set(label, startTime);

    return () => {
      const duration = performance.now() - startTime;
      this._metrics.push({
        label,
        duration,
        timestamp: Date.now(),
      });

      console.log(`⏱️  ${label}: ${duration.toFixed(2)}ms`);

      // Alerter si trop lent
      if (duration > 5000) {
        console.warn(`⚠️  SLOW OPERATION: ${label} took ${duration.toFixed(2)}ms`);
      }

      this._timers.delete(label);
    };
  }

  markPoint(label: string): void {
    console.log(`📍 ${label}`);
    this._metrics.push({
      label,
      duration: 0,
      timestamp: Date.now(),
    });
  }

  getMetrics() {
    if (this._metrics.length === 0) {
      return {
        total: 0,
        average: 0,
        slowest: 0,
        fastest: 0,
        totalTime: 0,
        metrics: [],
      };
    }

    const durations = this._metrics.map((m) => m.duration);
    const total = durations.reduce((a, b) => a + b, 0);

    return {
      total: this._metrics.length,
      average: total / this._metrics.length,
      slowest: Math.max(...durations),
      fastest: Math.min(...durations),
      totalTime: total,
      metrics: this._metrics,
    };
  }

  reset(): void {
    this._metrics = [];
    this._timers.clear();
  }

  printReport(): void {
    const stats = this.getMetrics();
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📊 PERFORMANCE REPORT');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`Total operations: ${stats.total}`);
    console.log(`Total time: ${stats.totalTime.toFixed(2)}ms`);
    console.log(`Average: ${stats.average.toFixed(2)}ms`);
    console.log(`Slowest: ${stats.slowest.toFixed(2)}ms`);
    console.log(`Fastest: ${stats.fastest.toFixed(2)}ms`);
    console.log('═══════════════════════════════════════════════════════\n');
  }
}

export const globalTracker = new PerformanceTracker();
