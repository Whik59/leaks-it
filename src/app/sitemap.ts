import { MetadataRoute } from 'next';
import stars from '../data/stars.json';
import siteConfig from '../data/siteConfig.json';

// Required for static export
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = siteConfig.domain;
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Homepage entry
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${domain}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Add all star pages
  stars.forEach((star, index) => {
    // Vary lastmod to make it look more natural (0-7 days ago)
    const daysAgo = Math.floor(Math.random() * 7);
    const modDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    // Higher priority for popular stars (first 100)
    const priority = index < 100 ? 0.9 : index < 500 ? 0.8 : 0.7;
    
    // More frequent updates for popular stars
    const changeFrequency: 'daily' | 'weekly' | 'monthly' = 
      index < 50 ? 'daily' : index < 200 ? 'weekly' : 'monthly';
    
    sitemapEntries.push({
      url: `${domain}/${star.slug}`,
      lastModified: modDate,
      changeFrequency,
      priority,
    });
  });

  return sitemapEntries;
}

