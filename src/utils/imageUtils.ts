import imageList from '../data/imageList.json';

// Function to get consistent random images for a specific star (based on slug)
export function getRandomImagesForStar(starSlug: string, count: number = 10): string[] {
  const baseUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;
  
  if (!baseUrl) {
    console.error('NEXT_PUBLIC_R2_PUBLIC_URL environment variable is not set');
    // Return placeholder images if env var is missing
    return Array.from({ length: count }, (_, i) => `https://via.placeholder.com/400x300/ff69b4/ffffff?text=Image+${i + 1}`);
  }

  if (!imageList || imageList.length === 0) {
    console.error("Image list is empty or not found. Returning placeholders.");
    return Array.from({ length: count }, (_, i) => `https://via.placeholder.com/400x300/cccccc/ffffff?text=No+Images+${i + 1}`);
  }

  const images: string[] = [];
  
  // Create a simple hash from the star slug for consistency
  let hash = 0;
  for (let i = 0; i < starSlug.length; i++) {
    const char = starSlug.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Use the hash as seed for consistent random selection from the list
  const seed = Math.abs(hash);
  
  for (let i = 0; i < count; i++) {
    // Generate a pseudo-random index based on the seed and the image's position
    // This ensures each star gets a different, but consistent, set of images
    const listIndex = (seed + i * 31) % imageList.length;
    const selectedImage = imageList[listIndex];
    
    // Ensure proper URL format
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');
    const imageUrl = `${cleanBaseUrl}/${selectedImage}`;
    images.push(imageUrl);
  }
  
  console.log(`Generated ${images.length} images for ${starSlug} from imageList.json`);
  return images;
}

// Utility to generate random image URLs from R2 bucket
export function getRandomImages(count: number = 10): string[] {
  const baseUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;
  
  if (!baseUrl) {
    console.error('NEXT_PUBLIC_R2_PUBLIC_URL environment variable is not set');
    // Return placeholder images if env var is missing
    return Array.from({ length: count }, (_, i) => `https://via.placeholder.com/400x300/ff69b4/ffffff?text=Image+${i + 1}`);
  }
  
  const images: string[] = [];
  
  // Generate random image numbers (assuming images are numbered 1-60000)
  const usedNumbers = new Set<number>();
  
  while (images.length < count) {
    const randomNum = Math.floor(Math.random() * 60000) + 1;
    
    // Avoid duplicates
    if (!usedNumbers.has(randomNum)) {
      usedNumbers.add(randomNum);
      
      // Assume images are in format: img_1.jpg, img_2.jpg, etc.
      // You can adjust this format based on your actual file naming
      const imageUrl = `${baseUrl}/img_${randomNum}.jpg`;
      images.push(imageUrl);
    }
  }
  
  return images;
}

// Alternative function if your images have different naming patterns
export function getRandomImagesWithFormats(count: number = 10): string[] {
  const baseUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;
  
  if (!baseUrl) {
    console.error('NEXT_PUBLIC_R2_PUBLIC_URL environment variable is not set');
    return Array.from({ length: count }, (_, i) => `https://via.placeholder.com/400x300/ff69b4/ffffff?text=Image+${i + 1}`);
  }
  
  const images: string[] = [];
  const formats = ['jpg', 'jpeg', 'png', 'webp'];
  const usedNumbers = new Set<number>();
  
  while (images.length < count) {
    const randomNum = Math.floor(Math.random() * 60000) + 1;
    
    if (!usedNumbers.has(randomNum)) {
      usedNumbers.add(randomNum);
      
      // Random format
      const format = formats[Math.floor(Math.random() * formats.length)];
      const imageUrl = `${baseUrl}/img_${randomNum}.${format}`;
      images.push(imageUrl);
    }
  }
  
  return images;
} 