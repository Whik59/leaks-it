interface Star {
  name: string;
  slug: string;
}

/**
 * Smart SEO interlinking utility to distribute link power across all stars
 */
export class SEOLinkingManager {
  
  /**
   * Get a rotation of popular stars for the homepage
   * Uses date-based rotation to ensure different stars appear on different days
   */
  static getPopularStarsRotation(allStars: Star[], count: number = 5): Star[] {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    
    // Create a seed based on current week to rotate weekly
    const weekNumber = Math.floor(dayOfYear / 7);
    const seed = weekNumber;
    
    return this.getSeededRandomStars(allStars, count, seed);
  }

  /**
   * Get related stars for a specific star page
   * Uses the star's slug to ensure consistent but different results per star
   */
  static getRelatedStars(allStars: Star[], currentStarSlug: string, count: number = 6): Star[] {
    // Filter out current star
    const availableStars = allStars.filter(star => star.slug !== currentStarSlug);
    
    // Create seed from star slug for consistency
    const seed = this.stringToSeed(currentStarSlug);
    
    return this.getSeededRandomStars(availableStars, count, seed);
  }

  /**
   * Get trending stars rotation (changes every few hours)
   * For sections that need more frequent updates
   */
  static getTrendingStarsRotation(allStars: Star[], count: number = 8): Star[] {
    const now = new Date();
    const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60 * 6)); // Changes every 6 hours
    
    return this.getSeededRandomStars(allStars, count, hoursSinceEpoch);
  }

  /**
   * Get stars for alphabet-based interlinking
   * Ensures each letter gets good representation over time
   */
  static getStarsForLetter(allStars: Star[], letter: string, count: number = 4): Star[] {
    const starsWithLetter = allStars.filter(star => 
      star.name.charAt(0).toUpperCase() === letter.toUpperCase()
    );
    
    if (starsWithLetter.length <= count) {
      return starsWithLetter;
    }

    // Rotate based on day for this letter
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const seed = dayOfYear + letter.charCodeAt(0);
    
    return this.getSeededRandomStars(starsWithLetter, count, seed);
  }

  /**
   * Get stars for cross-category interlinking
   * Distributes links to stars from different alphabetical ranges
   */
  static getCrossAlphabetStars(allStars: Star[], currentStarSlug: string, count: number = 5): Star[] {
    const currentStar = allStars.find(star => star.slug === currentStarSlug);
    if (!currentStar) return [];

    const currentLetter = currentStar.name.charAt(0).toUpperCase();
    
    // Get stars from different letter ranges to maximize distribution
    const letterRanges = [
      ['A', 'F'], ['G', 'L'], ['M', 'R'], ['S', 'Z']
    ];
    
    const currentRange = letterRanges.findIndex(range => 
      currentLetter >= range[0] && currentLetter <= range[1]
    );
    
    // Select from other ranges
    const otherRanges = letterRanges.filter((_, index) => index !== currentRange);
    const starsFromOtherRanges = allStars.filter(star => {
      const firstLetter = star.name.charAt(0).toUpperCase();
      return otherRanges.some(range => firstLetter >= range[0] && firstLetter <= range[1]) &&
             star.slug !== currentStarSlug;
    });

    const seed = this.stringToSeed(currentStarSlug) + 100; // Different seed than related stars
    return this.getSeededRandomStars(starsFromOtherRanges, count, seed);
  }

  /**
   * Get stars for "recently updated" simulation
   * Creates an illusion of fresh content updates
   */
  static getRecentlyUpdatedStars(allStars: Star[], count: number = 6): Star[] {
    const now = new Date();
    const seed = Math.floor(now.getTime() / (1000 * 60 * 60 * 12)); // Changes twice daily
    
    return this.getSeededRandomStars(allStars, count, seed);
  }

  /**
   * Get a smart mix for footer links
   * Balances popular, trending, and alphabetical distribution
   */
  static getFooterMixedStars(allStars: Star[], currentPage?: string): {
    popular: Star[];
    trending: Star[];
    alphabetical: Star[];
  } {
    const seed = currentPage ? this.stringToSeed(currentPage) : 0;
    
    return {
      popular: this.getSeededRandomStars(allStars, 4, seed),
      trending: this.getSeededRandomStars(allStars, 4, seed + 100),
      alphabetical: this.getSeededRandomStars(allStars, 4, seed + 200)
    };
  }

  // Private helper methods
  private static getSeededRandomStars(stars: Star[], count: number, seed: number): Star[] {
    if (stars.length <= count) return [...stars];
    
    const shuffled = [...stars];
    
    // Seeded shuffle for consistency
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = this.seededRandom(seed + i) % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled.slice(0, count);
  }

  private static stringToSeed(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  private static seededRandom(seed: number): number {
    const x = Math.sin(seed) * 10000;
    return Math.floor((x - Math.floor(x)) * 1000);
  }
} 