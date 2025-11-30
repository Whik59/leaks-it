interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export const imageLoader = ({ src, width, quality = 75 }: ImageLoaderProps): string => {
  // Handle external URLs (R2, Cloudflare, etc.)
  if (src.startsWith('http')) {
    // For Cloudflare R2 or similar services with image transformation
    if (src.includes('r2.dev') || src.includes('cloudflare')) {
      const url = new URL(src);
      url.searchParams.set('width', width.toString());
      url.searchParams.set('quality', quality.toString());
      url.searchParams.set('format', 'webp');
      return url.toString();
    }
    
    // For other external sources, return as-is or add basic params
    return src;
  }
  
  // Handle local images with Next.js optimization
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
};

export const getOptimizedImageSrc = (
  src: string, 
  width: number = 800, 
  quality: number = 75
): string => {
  return imageLoader({ src, width, quality });
};

// Predefined image sizes for different use cases
export const imageSizes = {
  thumbnail: { width: 200, quality: 60 },
  small: { width: 400, quality: 70 },
  medium: { width: 800, quality: 75 },
  large: { width: 1200, quality: 80 },
  xl: { width: 1600, quality: 85 },
} as const;

export const getResponsiveImageSrc = (src: string, size: keyof typeof imageSizes) => {
  const { width, quality } = imageSizes[size];
  return getOptimizedImageSrc(src, width, quality);
};

// Generate srcSet for responsive images
export const generateSrcSet = (src: string): string => {
  const sizes = [400, 800, 1200, 1600];
  return sizes
    .map(width => `${getOptimizedImageSrc(src, width)} ${width}w`)
    .join(', ');
};

// Default responsive image sizes attribute
export const defaultSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"; 