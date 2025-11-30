import 'dotenv/config';
import { ContentGenerator } from '../src/utils/contentGenerator';
import { ContentCacheManager } from '../src/utils/contentCache';
import stars from '../src/data/stars.json';

const contentGenerator = new ContentGenerator();
const cacheManager = new ContentCacheManager();

function generateContentForStar(star: { name: string; slug: string }) {
  console.log(`Processing ${star.name}...`);
  try {
    const content = contentGenerator.generateContent(star);
    // Ensure complex properties are always arrays to prevent type errors
    const contentForCache = {
      ...content,
      faqContent: content.faqContent || [],
      relatedQueries: content.relatedQueries || [],
    };
    cacheManager.setCachedContent(star.slug, contentForCache);
    console.log(`✓ Generated content for ${star.name}`);
  } catch (error) {
    console.error(`✗ Failed to generate content for ${star.name}.`, error);
  }
}

function generateAllContent() {
  const language = process.env.CONTENT_LANGUAGE || 'English';
  console.log(`Starting content generation for ${stars.length} stars in ${language}.`);
  
  // Clear the cache first
  console.log('Clearing old cache...');
  cacheManager.clearCache();
  console.log('Cache cleared.');

  stars.forEach(star => generateContentForStar(star));

  console.log('\n=== Content Generation Summary ===');
  console.log(`✓ Processed ${stars.length} stars.`);
  console.log('📊 Cache stats:', cacheManager.getCacheStats());
}

function main() {
  const command = process.argv[2];
  if (command === 'generate') {
    generateAllContent();
  } else {
    console.log('Usage: tsx scripts/generate-content.ts generate');
  }
}

main(); 