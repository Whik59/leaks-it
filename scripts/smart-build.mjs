import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';

const CONTENT_CACHE_FILE = path.resolve(process.cwd(), 'src/data/contentCache.json');
const STARS_FILE = path.resolve(process.cwd(), 'src/data/stars.json');

async function smartBuild() {
  console.log('🧠 Smart Build: Checking content freshness...');
  
  try {
    // Check if content cache exists
    const cacheExists = await fs.access(CONTENT_CACHE_FILE)
      .then(() => true)
      .catch(() => false);
    
    if (!cacheExists) {
      console.log('📝 No content cache found, generating fresh content...');
      execSync('npm run generate-content', { stdio: 'inherit' });
    } else {
      // Check cache freshness
      const cacheStats = await fs.stat(CONTENT_CACHE_FILE);
      const starsStats = await fs.stat(STARS_FILE);
      
      const cacheAge = Date.now() - cacheStats.mtime.getTime();
      const starsModified = starsStats.mtime.getTime() > cacheStats.mtime.getTime();
      
      // Cache is old (7+ days) or stars file is newer
      if (cacheAge > 7 * 24 * 60 * 60 * 1000 || starsModified) {
        console.log('⏰ Content cache is outdated, refreshing...');
        execSync('npm run generate-content', { stdio: 'inherit' });
      } else {
        // Check cache completeness
        const cacheData = JSON.parse(await fs.readFile(CONTENT_CACHE_FILE, 'utf-8'));
        const starsData = JSON.parse(await fs.readFile(STARS_FILE, 'utf-8'));
        
        const cachedCount = Object.keys(cacheData).length;
        const starsCount = starsData.length;
        
        if (cachedCount < starsCount * 0.9) {
          console.log(`📊 Cache incomplete (${cachedCount}/${starsCount}), regenerating...`);
          execSync('npm run generate-content', { stdio: 'inherit' });
        } else {
          console.log(`✅ Content cache is fresh (${cachedCount} entries), skipping generation`);
        }
      }
    }
    
    // Always generate sitemap (it's fast)
    console.log('🗺️ Generating sitemap...');
    execSync('npm run generate-sitemap', { stdio: 'inherit' });
    
    // Build Next.js
    console.log('🚀 Building Next.js application...');
    execSync('next build', { stdio: 'inherit' });
    
    console.log('✅ Smart build completed successfully!');
    
  } catch (error) {
    console.error('❌ Smart build failed:', error.message);
    process.exit(1);
  }
}

smartBuild(); 