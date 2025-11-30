#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

interface BuildStats {
  totalFiles: number;
  totalSize: number;
  jsFiles: number;
  cssFiles: number;
  htmlFiles: number;
  imageFiles: number;
  largestFiles: Array<{ name: string; size: number; sizeFormatted: string }>;
}

class PostBuildOptimizer {
  private readonly buildDir = '.next';
  private readonly outputDir = 'out';
  
  constructor() {
    console.log('🚀 Starting post-build optimization...\n');
  }

  async optimize(): Promise<void> {
    try {
      await this.analyzeBuild();
      await this.optimizeStaticAssets();
      await this.generateBuildReport();
      await this.cleanupTempFiles();
      
      console.log('✅ Post-build optimization completed successfully!\n');
    } catch (error) {
      console.error('❌ Post-build optimization failed:', error);
      process.exit(1);
    }
  }

  private async analyzeBuild(): Promise<void> {
    console.log('📊 Analyzing build output...');
    
    const stats = this.getBuildStats();
    
    console.log(`  📁 Total files: ${stats.totalFiles}`);
    console.log(`  📏 Total size: ${this.formatBytes(stats.totalSize)}`);
    console.log(`  🟨 JavaScript files: ${stats.jsFiles}`);
    console.log(`  🟦 CSS files: ${stats.cssFiles}`);
    console.log(`  🟪 HTML files: ${stats.htmlFiles}`);
    console.log(`  🖼️  Image files: ${stats.imageFiles}\n`);

    if (stats.largestFiles.length > 0) {
      console.log('📋 Largest files:');
      stats.largestFiles.forEach(file => {
        console.log(`  • ${file.name}: ${file.sizeFormatted}`);
      });
      console.log('');
    }
  }

  private getBuildStats(): BuildStats {
    const stats: BuildStats = {
      totalFiles: 0,
      totalSize: 0,
      jsFiles: 0,
      cssFiles: 0,
      htmlFiles: 0,
      imageFiles: 0,
      largestFiles: []
    };

    const files: Array<{ name: string; size: number; path: string }> = [];

    const walkDir = (dir: string, basePath = '') => {
      if (!fs.existsSync(dir)) return;
      
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      entries.forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.join(basePath, entry.name);
        
        if (entry.isDirectory()) {
          walkDir(fullPath, relativePath);
        } else {
          const fileStats = fs.statSync(fullPath);
          const size = fileStats.size;
          
          stats.totalFiles++;
          stats.totalSize += size;
          
          const ext = path.extname(entry.name).toLowerCase();
          switch (ext) {
            case '.js':
            case '.jsx':
            case '.ts':
            case '.tsx':
              stats.jsFiles++;
              break;
            case '.css':
              stats.cssFiles++;
              break;
            case '.html':
              stats.htmlFiles++;
              break;
            case '.jpg':
            case '.jpeg':
            case '.png':
            case '.gif':
            case '.webp':
            case '.svg':
              stats.imageFiles++;
              break;
          }
          
          files.push({ name: relativePath, size, path: fullPath });
        }
      });
    };

    walkDir(this.buildDir);
    
    // Get top 10 largest files
    stats.largestFiles = files
      .sort((a, b) => b.size - a.size)
      .slice(0, 10)
      .map(file => ({
        name: file.name,
        size: file.size,
        sizeFormatted: this.formatBytes(file.size)
      }));

    return stats;
  }

  private async optimizeStaticAssets(): Promise<void> {
    console.log('⚡ Optimizing static assets...');
    
    // Optimize CSS files
    await this.optimizeCSS();
    
    // Optimize JavaScript files
    await this.optimizeJS();
    
    // Generate gzip versions of static files
    await this.generateCompressedVersions();
    
    console.log('✅ Static assets optimized\n');
  }

  private async optimizeCSS(): Promise<void> {
    const cssDir = path.join(this.buildDir, 'static', 'css');
    if (!fs.existsSync(cssDir)) return;

    console.log('  🎨 Optimizing CSS files...');
    
    const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
    
    cssFiles.forEach(file => {
      const filePath = path.join(cssDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Basic CSS minification (remove extra whitespace and comments)
      const minified = content
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
        .replace(/;\s*}/g, '}') // Remove semicolon before closing brace
        .replace(/\s*{\s*/g, '{') // Remove whitespace around opening brace
        .replace(/\s*}\s*/g, '}') // Remove whitespace around closing brace
        .replace(/\s*;\s*/g, ';') // Remove whitespace around semicolon
        .replace(/\s*,\s*/g, ',') // Remove whitespace around comma
        .trim();
      
      if (minified.length < content.length) {
        fs.writeFileSync(filePath, minified);
        console.log(`    Optimized ${file} (${this.formatBytes(content.length)} → ${this.formatBytes(minified.length)})`);
      }
    });
  }

  private async optimizeJS(): Promise<void> {
    const jsDir = path.join(this.buildDir, 'static', 'chunks');
    if (!fs.existsSync(jsDir)) return;

    console.log('  📦 Analyzing JavaScript chunks...');
    
    const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));
    
    if (jsFiles.length > 0) {
      console.log(`    Found ${jsFiles.length} JavaScript chunks`);
      
      // Calculate total JS size
      let totalSize = 0;
      jsFiles.forEach(file => {
        const filePath = path.join(jsDir, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
      });
      
      console.log(`    Total JavaScript size: ${this.formatBytes(totalSize)}`);
    }
  }

  private async generateCompressedVersions(): Promise<void> {
    console.log('  🗜️  Generating compressed versions...');
    
    const staticDir = path.join(this.buildDir, 'static');
    if (!fs.existsSync(staticDir)) return;

    const compressibleExtensions = ['.js', '.css', '.html', '.json', '.xml', '.txt'];
    let compressedCount = 0;

    const walkAndCompress = (dir: string) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      entries.forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          walkAndCompress(fullPath);
        } else {
          const ext = path.extname(entry.name).toLowerCase();
          if (compressibleExtensions.includes(ext)) {
            const stats = fs.statSync(fullPath);
            
            // Only compress files larger than 1KB
            if (stats.size > 1024) {
              try {
                // Use gzip command if available
                execSync(`gzip -9 -c "${fullPath}" > "${fullPath}.gz"`, { stdio: 'pipe' });
                compressedCount++;
              } catch (error) {
                // Silently fail if gzip is not available
              }
            }
          }
        }
      });
    };

    walkAndCompress(staticDir);
    
    if (compressedCount > 0) {
      console.log(`    Generated ${compressedCount} compressed files`);
    }
  }

  private async generateBuildReport(): Promise<void> {
    console.log('📄 Generating build report...');
    
    const stats = this.getBuildStats();
    const report = {
      timestamp: new Date().toISOString(),
      buildStats: stats,
      optimizations: {
        gzipCompression: true,
        cssMinification: true,
        jsAnalysis: true
      },
      recommendations: this.getOptimizationRecommendations(stats)
    };

    const reportPath = path.join(this.buildDir, 'build-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`  📊 Build report saved to ${reportPath}\n`);
  }

  private getOptimizationRecommendations(stats: BuildStats): string[] {
    const recommendations: string[] = [];
    
    if (stats.largestFiles.length > 0) {
      const largestFile = stats.largestFiles[0];
      if (largestFile.size > 500 * 1024) { // > 500KB
        recommendations.push(`Consider code splitting for large file: ${largestFile.name}`);
      }
    }
    
    if (stats.jsFiles > 50) {
      recommendations.push('Consider consolidating JavaScript files to reduce HTTP requests');
    }
    
    if (stats.totalSize > 10 * 1024 * 1024) { // > 10MB
      recommendations.push('Total build size is large, consider implementing lazy loading');
    }
    
    return recommendations;
  }

  private async cleanupTempFiles(): Promise<void> {
    console.log('🧹 Cleaning up temporary files...');
    
    const tempPaths = [
      path.join(this.buildDir, 'cache'),
      path.join(this.buildDir, 'trace')
    ];
    
    tempPaths.forEach(tempPath => {
      if (fs.existsSync(tempPath)) {
        fs.rmSync(tempPath, { recursive: true, force: true });
        console.log(`  🗑️  Removed ${tempPath}`);
      }
    });
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Run the optimizer
const optimizer = new PostBuildOptimizer();
optimizer.optimize().catch(console.error); 