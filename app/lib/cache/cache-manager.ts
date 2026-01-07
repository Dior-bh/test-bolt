interface CacheEntry {
  value: any;
  createdAt: number;
  lastAccessed: number;
  expiresAt: number;
  accessCount: number;
}

interface CacheConfig {
  ttl: number;
  strategy: 'lru' | 'lfu';
  maxSize: number;
}

export class CacheManager {
  private _cache = new Map<string, CacheEntry>();
  private _config: CacheConfig;

  constructor(config: Partial<CacheConfig> = {}) {
    this._config = {
      ttl: 3600, // 1 heure par défaut
      strategy: 'lru',
      maxSize: 1000,
      ...config,
    };
  }

  async get<T>(key: string): Promise<T | null> {
    const entry = this._cache.get(key);

    if (!entry) {
      return null;
    }

    // Vérifier l'expiration
    if (Date.now() > entry.expiresAt) {
      this._cache.delete(key);
      console.log(`🗑️ Cache EXPIRED: ${key}`);

      return null;
    }

    // Mise à jour pour LRU/LFU
    entry.lastAccessed = Date.now();
    entry.accessCount++;

    console.log(`✅ Cache HIT: ${key}`);

    return entry.value as T;
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    // Éviction si cache plein
    if (this._cache.size >= this._config.maxSize) {
      this._evict();
    }

    const entry: CacheEntry = {
      value,
      createdAt: Date.now(),
      lastAccessed: Date.now(),
      expiresAt: Date.now() + (ttl || this._config.ttl) * 1000,
      accessCount: 0,
    };

    this._cache.set(key, entry);
    console.log(`💾 Cache SET: ${key} (TTL: ${ttl || this._config.ttl}s)`);
  }

  private _evict(): void {
    if (this._config.strategy === 'lru') {
      // Supprimer l'entrée la moins récemment utilisée
      let oldestKey: string | null = null;
      let oldestTime = Infinity;

      for (const [key, entry] of this._cache.entries()) {
        if (entry.lastAccessed < oldestTime) {
          oldestTime = entry.lastAccessed;
          oldestKey = key;
        }
      }

      if (oldestKey) {
        this._cache.delete(oldestKey);
        console.log(`🗑️ Cache EVICT (LRU): ${oldestKey}`);
      }
    } else if (this._config.strategy === 'lfu') {
      // Supprimer l'entrée la moins fréquemment utilisée
      let leastUsedKey: string | null = null;
      let minAccess = Infinity;

      for (const [key, entry] of this._cache.entries()) {
        if (entry.accessCount < minAccess) {
          minAccess = entry.accessCount;
          leastUsedKey = key;
        }
      }

      if (leastUsedKey) {
        this._cache.delete(leastUsedKey);
        console.log(`🗑️ Cache EVICT (LFU): ${leastUsedKey}`);
      }
    }
  }

  getStats() {
    return {
      size: this._cache.size,
      maxSize: this._config.maxSize,
      usage: `${((this._cache.size / this._config.maxSize) * 100).toFixed(2)}%`,
      strategy: this._config.strategy,
    };
  }

  clear(): void {
    this._cache.clear();
    console.log('🧹 Cache cleared');
  }
}

export const globalCache = new CacheManager({
  ttl: 3600,
  strategy: 'lru',
  maxSize: 1000,
});
