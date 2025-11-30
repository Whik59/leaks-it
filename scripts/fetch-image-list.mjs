import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import fs from "fs/promises";
import path from "path";

// --- Configuration ---
// Ensure you have these environment variables set in a .env file
// or in your environment.
const R2_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;

const STARS_FILE = path.resolve(process.cwd(), 'src/data/stars.json');
const OUTPUT_FILE = path.resolve(process.cwd(), 'src/data/imageList.json');
const IMAGES_PER_STAR = 10;
// --- End Configuration ---

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.error("❌ Missing required environment variables for R2 bucket access.");
  process.exit(1);
}

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

async function fetchAllObjectKeys() {
  let isTruncated = true;
  let continuationToken;
  const allKeys = [];

  console.log(`📡 Starting to fetch object keys from bucket: ${R2_BUCKET_NAME}`);

  while (isTruncated) {
    const params = {
      Bucket: R2_BUCKET_NAME,
      ContinuationToken: continuationToken,
    };

    try {
      const command = new ListObjectsV2Command(params);
      const data = await s3.send(command);

      if (data.Contents) {
        for (const item of data.Contents) {
          if (item.Key && (item.Key.endsWith('.webp') || item.Key.endsWith('.jpg') || item.Key.endsWith('.jpeg') || item.Key.endsWith('.png'))) {
            allKeys.push(item.Key);
          }
        }
        console.log(`  > Fetched ${data.Contents.length} keys. Total valid images: ${allKeys.length}`);
      }
      
      isTruncated = data.IsTruncated;
      if (isTruncated) {
        continuationToken = data.NextContinuationToken;
        console.log("  > Response is truncated, fetching next page...");
      }

    } catch (err) {
      console.error("❌ Error fetching object keys:", err);
      isTruncated = false; // Stop the loop on error
    }
  }
  
  console.log(`✅ Finished fetching. Total valid image keys found: ${allKeys.length}`);
  return allKeys;
}

async function main() {
  // 1. Read stars.json to determine how many images we need
  let stars;
  try {
    const starsData = await fs.readFile(STARS_FILE, 'utf-8');
    stars = JSON.parse(starsData);
  } catch (err) {
    console.error(`❌ Could not read or parse stars file at ${STARS_FILE}.`, err);
    process.exit(1);
  }
  
  const numStars = stars.length;
  if (numStars === 0) {
    console.log("🤷 No stars found in stars.json. Exiting.");
    return;
  }
  console.log(`⭐ Found ${numStars} stars in stars.json.`);

  const totalImagesNeeded = numStars * IMAGES_PER_STAR;
  console.log(`📸 Needing ${IMAGES_PER_STAR} images per star. Total images to select: ${totalImagesNeeded}`);

  // 2. Fetch all image keys from R2
  const allObjectKeys = await fetchAllObjectKeys();

  if (allObjectKeys.length === 0) {
    console.log("🤷 No images found in the bucket. Exiting.");
    return;
  }

  if (allObjectKeys.length < totalImagesNeeded) {
    console.warn(`⚠️ Warning: Not enough images in R2 bucket. Found ${allObjectKeys.length}, but need ${totalImagesNeeded}. Using all available images.`);
  }

  // 3. Shuffle the keys for randomness
  console.log("🔀 Shuffling all fetched image keys...");
  for (let i = allObjectKeys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allObjectKeys[i], allObjectKeys[j]] = [allObjectKeys[j], allObjectKeys[i]];
  }
  
  // 4. Select the required number of images
  const selectedImages = allObjectKeys.slice(0, totalImagesNeeded);
  console.log(`👍 Selected ${selectedImages.length} random images.`);

  // 5. Save the list to a JSON file
  try {
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(selectedImages, null, 2));
    console.log(`✅ Successfully wrote ${selectedImages.length} image filenames to ${OUTPUT_FILE}`);
  } catch (err) {
    console.error(`❌ Error writing to file ${OUTPUT_FILE}:`, err);
  }
}

main(); 