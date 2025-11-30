import fs from 'fs/promises';
import path from 'path';

// Read site configuration
const SITE_CONFIG_FILE = path.resolve(process.cwd(), 'src/data/siteConfig.json');
const STARS_FILE = path.resolve(process.cwd(), 'src/data/stars.json');
const OUTPUT_FILE = path.resolve(process.cwd(), 'public/sitemap.xml');
const SITEMAP_INDEX_FILE = path.resolve(process.cwd(), 'public/sitemap-index.xml');

// Image list for image sitemap
const IMAGES_FILE = path.resolve(process.cwd(), 'src/data/imageList.json');

// Load site config
let DOMAIN = 'https://onlyfanleaks.fr'; // fallback
try {
  const configData = await fs.readFile(SITE_CONFIG_FILE, 'utf-8');
  const siteConfig = JSON.parse(configData);
  DOMAIN = siteConfig.domain || DOMAIN;
} catch (error) {
  console.warn('⚠️ Could not read siteConfig.json, using fallback domain');
  // Fallback to environment variable if config file doesn't exist
  DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || DOMAIN;
}

async function generateMainSitemap() {
  try {
    console.log('📝 Generating main sitemap.xml...');
    
    // Read stars data
    const starsData = await fs.readFile(STARS_FILE, 'utf-8');
    const stars = JSON.parse(starsData);
    
    console.log(`⭐ Found ${stars.length} stars`);
    
    // Get current date for lastmod
    const currentDate = new Date().toISOString().split('T')[0];
    const yesterdayDate = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    // Start building sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Homepage -->
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Star Pages -->`;

    // Add each star page with enhanced metadata
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      
      // Vary lastmod to make it look more natural
      const daysAgo = Math.floor(Math.random() * 7); // Random 0-7 days ago
      const modDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      // Higher priority for popular stars (first 100)
      const priority = i < 100 ? '0.9' : i < 500 ? '0.8' : '0.7';
      
      // More frequent updates for popular stars
      const changefreq = i < 50 ? 'daily' : i < 200 ? 'weekly' : 'monthly';
      
      sitemap += `
  <url>
    <loc>${DOMAIN}/${star.slug}</loc>
    <lastmod>${modDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }
    
    // Close the sitemap
    sitemap += `
</urlset>`;

    // Write sitemap to public directory
    await fs.writeFile(OUTPUT_FILE, sitemap);
    
    return { totalUrls: stars.length + 1, starsCount: stars.length };
    
  } catch (error) {
    console.error('❌ Error generating main sitemap:', error);
    throw error;
  }
}

async function generateImageSitemap() {
  try {
    console.log('🖼️ Generating image sitemap...');
    
    // Read images data
    let images = [];
    try {
      const imagesData = await fs.readFile(IMAGES_FILE, 'utf-8');
      images = JSON.parse(imagesData);
    } catch (error) {
      console.log('⚠️ No image list found, skipping image sitemap');
      return null;
    }
    
    // Read stars for context
    const starsData = await fs.readFile(STARS_FILE, 'utf-8');
    const stars = JSON.parse(starsData);
    
    const currentDate = new Date().toISOString().split('T')[0];
    
    let imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

    // Group images by star and add to sitemap
    for (const star of stars.slice(0, 100)) { // Limit to first 100 stars for image sitemap
      const starImages = images.filter(img => img.includes(star.slug)).slice(0, 5); // Max 5 images per star
      
      if (starImages.length > 0) {
        imageSitemap += `
  <url>
    <loc>${DOMAIN}/${star.slug}</loc>
    <lastmod>${currentDate}</lastmod>`;
        
        for (const imageUrl of starImages) {
          imageSitemap += `
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:caption>Fotos exclusivas de ${star.name} y contenido</image:caption>
      <image:title>${star.name} OnlyFans Leaks</image:title>
    </image:image>`;
        }
        
        imageSitemap += `
  </url>`;
      }
    }
    
    imageSitemap += `
</urlset>`;

    const imageOutputFile = path.resolve(process.cwd(), 'public/sitemap-images.xml');
    await fs.writeFile(imageOutputFile, imageSitemap);
    
    return { imageUrls: images.length };
    
  } catch (error) {
    console.error('❌ Error generating image sitemap:', error);
    return null;
  }
}

async function generateSitemapIndex() {
  try {
    console.log('📋 Generating sitemap index...');
    
    const currentDate = new Date().toISOString().split('T')[0];
    
    let sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>`;

    // Add image sitemap if it exists
    const imageFile = path.resolve(process.cwd(), 'public/sitemap-images.xml');
    try {
      await fs.access(imageFile);
      sitemapIndex += `
  <sitemap>
    <loc>${DOMAIN}/sitemap-images.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>`;
    } catch (error) {
      // Image sitemap doesn't exist, skip
    }

    sitemapIndex += `
</sitemapindex>`;

    await fs.writeFile(SITEMAP_INDEX_FILE, sitemapIndex);
    
  } catch (error) {
    console.error('❌ Error generating sitemap index:', error);
    throw error;
  }
}

async function generateRobotsTxt() {
  try {
    console.log('🤖 Generating robots.txt...');
    
    const robotsContent = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${DOMAIN}/sitemap-index.xml
Sitemap: ${DOMAIN}/sitemap.xml

# Block unnecessary crawling
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /*.json$

# Crawl delay to be respectful
Crawl-delay: 1`;

    const robotsFile = path.resolve(process.cwd(), 'public/robots.txt');
    await fs.writeFile(robotsFile, robotsContent);
    
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error);
  }
}

async function generateSitemap() {
  console.log('🚀 Starting advanced sitemap generation...');
  
  try {
    // Generate main sitemap
    const { totalUrls, starsCount } = await generateMainSitemap();
    
    // Generate image sitemap
    const imageResult = await generateImageSitemap();
    
    // Generate sitemap index
    await generateSitemapIndex();
    
    // Generate robots.txt
    await generateRobotsTxt();
    
    console.log('\n✅ All sitemaps generated successfully!');
    console.log(`📄 Main sitemap URLs: ${totalUrls}`);
    console.log(`⭐ Star pages: ${starsCount}`);
    if (imageResult) {
      console.log(`🖼️ Image URLs: ${imageResult.imageUrls}`);
    }
    console.log(`🌐 Domain: ${DOMAIN}`);
    console.log(`📅 Generated: ${new Date().toISOString().split('T')[0]}`);
    
    console.log('\n📋 Files created:');
    console.log('  • public/sitemap.xml (main sitemap)');
    console.log('  • public/sitemap-index.xml (sitemap index)');
    console.log('  • public/robots.txt (robots file)');
    if (imageResult) {
      console.log('  • public/sitemap-images.xml (image sitemap)');
    }
    
  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
    process.exit(1);
  }
}

// Run the script
generateSitemap(); 