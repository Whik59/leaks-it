import https from 'https';
import fs from 'fs/promises';

interface PerformanceMetrics {
  date: string;
  pageSpeedScore: number;
  imageOptimizations: number;
  functionInvocations: number;
  cacheHitRatio: number;
  organicTraffic?: number;
}

async function checkPageSpeed(url: string): Promise<number> {
  return new Promise((resolve) => {
    const apiKey = process.env.PAGESPEED_API_KEY;
    const apiUrl = `https://www.googleapis.com/pagespeed/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;
    
    if (!apiKey) {
      console.log('⚠️ No PageSpeed API key found, skipping speed check');
      resolve(0);
      return;
    }
    
    https.get(apiUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          const score = result.lighthouseResult?.categories?.performance?.score * 100 || 0;
          resolve(Math.round(score));
        } catch (error) {
          console.log('⚠️ PageSpeed check failed:', error);
          resolve(0);
        }
      });
    }).on('error', () => resolve(0));
  });
}

async function monitorPerformance() {
  console.log('📊 Starting performance monitoring...');
  
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://onlyfanleakss.nl';
  const today = new Date().toISOString().split('T')[0];
  
  try {
    // Check PageSpeed score
    console.log('🚀 Checking PageSpeed performance...');
    const pageSpeedScore = await checkPageSpeed(domain);
    
    // Read previous metrics
    const metricsFile = 'performance-metrics.json';
    let metrics: PerformanceMetrics[] = [];
    
    try {
      const data = await fs.readFile(metricsFile, 'utf-8');
      metrics = JSON.parse(data);
    } catch (error) {
      console.log('📝 Creating new metrics file...');
    }
    
    // Add today's metrics
    const todayMetrics: PerformanceMetrics = {
      date: today,
      pageSpeedScore,
      imageOptimizations: 0, // You can integrate with your analytics API
      functionInvocations: 0, // You can integrate with Vercel/Cloudflare API
      cacheHitRatio: 0, // You can integrate with CDN API
    };
    
    // Remove today's entry if it exists, then add new one
    metrics = metrics.filter(m => m.date !== today);
    metrics.push(todayMetrics);
    
    // Keep last 30 days only
    metrics = metrics.slice(-30);
    
    // Save updated metrics
    await fs.writeFile(metricsFile, JSON.stringify(metrics, null, 2));
    
    // Generate report
    console.log('\n📊 Performance Report:');
    console.log(`📅 Date: ${today}`);
    console.log(`🚀 PageSpeed Score: ${pageSpeedScore}/100`);
    
    if (metrics.length > 1) {
      const previousScore = metrics[metrics.length - 2]?.pageSpeedScore || 0;
      const improvement = pageSpeedScore - previousScore;
      console.log(`📈 Score Change: ${improvement > 0 ? '+' : ''}${improvement}`);
    }
    
    // Calculate weekly average
    const weekData = metrics.slice(-7);
    if (weekData.length > 0) {
      const avgScore = weekData.reduce((sum, m) => sum + m.pageSpeedScore, 0) / weekData.length;
      console.log(`📊 7-day Average: ${Math.round(avgScore)}/100`);
    }
    
    console.log('\n💡 Optimization Tips:');
    if (pageSpeedScore < 90) {
      console.log('  • Consider enabling more aggressive caching');
      console.log('  • Check if images are properly optimized');
      console.log('  • Review JavaScript bundle size');
    } else {
      console.log('  • Performance is excellent! 🎉');
      console.log('  • Continue monitoring weekly');
    }
    
    console.log(`\n📈 View trends in: ${metricsFile}`);
    
  } catch (error) {
    console.error('❌ Performance monitoring failed:', error);
  }
}

// Run monitoring
monitorPerformance(); 