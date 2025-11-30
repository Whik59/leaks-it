import fs from 'fs';
import path from 'path';

interface CachedContent {
  title: string;
  description: string;
  aboutText: string;
  contentFeatures: string[];
  seoText: string;
  pageKeywords: string[];
  keywords: string[];
  faqContent: { question: string; answer: string; }[];
  relatedQueries: string[];
  timestamp: number;
  version: number;
}

interface ContentCache {
  [starSlug: string]: CachedContent;
}

export class ContentCacheManager {
  private cachePath = path.join(process.cwd(), 'src', 'data', 'contentCache.json');
  private cache: ContentCache = {};
  private readonly currentVersion = 2;

  constructor() {
    this.loadCache();
  }

  private loadCache(): void {
    try {
      if (!fs.existsSync(this.cachePath)) {
        this.cache = {};
        return;
      }
      const fileContent = fs.readFileSync(this.cachePath, 'utf-8');
      if (fileContent.trim() === '') {
        this.cache = {};
        return;
      }
      this.cache = JSON.parse(fileContent);
    } catch (error) {
      console.error('Failed to load content cache:', error);
      this.cache = {};
    }
  }

  private saveCache(): void {
    try {
      const dir = path.dirname(this.cachePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(this.cachePath, JSON.stringify(this.cache, null, 2));
    } catch (error) {
      console.error('Failed to save content cache:', error);
    }
  }

  getCachedContent(starSlug: string): CachedContent | null {
    const cached = this.cache[starSlug];
    if (!cached || cached.version !== this.currentVersion) {
      return null;
    }
    return cached;
  }

  public setCachedContent(slug: string, content: Omit<CachedContent, 'timestamp' | 'version'>): void {
    this.cache[slug] = {
      ...content,
      timestamp: Date.now(),
      version: this.currentVersion,
    };
    this.saveCache();
  }

  public isCacheExpired(slug: string, days: number): boolean {
    const item = this.cache[slug];
    if (!item || item.version !== this.currentVersion) {
      return true;
    }
    const ageInMs = Date.now() - item.timestamp;
    return ageInMs > days * 24 * 60 * 60 * 1000;
  }

  clearCache(): void {
    this.cache = {};
    this.saveCache();
  }

  getCacheStats(): { totalEntries: number; oldestEntry?: string; newestEntry?: string } {
    const entries = Object.values(this.cache);
    if (entries.length === 0) {
      return { totalEntries: 0 };
    }

    const dates = entries.map(e => new Date(e.timestamp));
    return {
      totalEntries: entries.length,
      oldestEntry: new Date(Math.min(...dates.map(d => d.getTime()))).toISOString(),
      newestEntry: new Date(Math.max(...dates.map(d => d.getTime()))).toISOString()
    };
  }
} 