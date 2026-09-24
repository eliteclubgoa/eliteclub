/**
 * Image Optimization Script for The Elite Club Casino
 * Uses sharp (already a devDependency) to compress images in-place.
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, unlink, rename, readFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const GALLERY_DIR = "src/assets/gallery";
const CASINO_DIR = "src/assets/casino";
const ASSETS_ROOT = "src/assets";

// Target max widths for different contexts
const GALLERY_MAX_WIDTH = 1200; // Gallery images (displayed at most ~800px wide)
const CASINO_CARD_MAX_WIDTH = 800; // Casino card images (displayed at most ~400px wide)
const WEBP_QUALITY = 78;

async function getFileSize(path) {
  const s = await stat(path);
  return s.size;
}

function formatKB(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

async function compressWebP(filePath, maxWidth) {
  const before = await getFileSize(filePath);
  const tempPath = filePath + ".tmp.webp";

  const inputBuffer = await readFile(filePath);
  const buffer = await sharp(inputBuffer)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toBuffer();

  // Only write if smaller
  if (buffer.length < before) {
    await sharp(buffer).toFile(tempPath);
    await unlink(filePath).catch(() => {});
    await rename(tempPath, filePath);
    const after = buffer.length;
    console.log(
      `  ✅ ${basename(filePath)}: ${formatKB(before)} → ${formatKB(after)} (${Math.round((1 - after / before) * 100)}% smaller)`,
    );
    return { before, after };
  } else {
    console.log(`  ⏭️  ${basename(filePath)}: ${formatKB(before)} — already optimal`);
    return { before, after: before };
  }
}

async function convertToWebP(filePath, maxWidth) {
  const before = await getFileSize(filePath);
  const ext = extname(filePath);
  const webpPath = filePath.replace(ext, ".webp");

  const buffer = await sharp(filePath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toBuffer();

  await sharp(buffer).toFile(webpPath);
  const after = buffer.length;
  console.log(
    `  ✅ ${basename(filePath)} → ${basename(webpPath)}: ${formatKB(before)} → ${formatKB(after)} (${Math.round((1 - after / before) * 100)}% smaller)`,
  );
  return { before, after, webpPath, originalPath: filePath };
}

async function processDirectory(dir, maxWidth, label) {
  console.log(`\n📁 ${label} (${dir})`);
  const files = await readdir(dir);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files.sort()) {
    const filePath = join(dir, file);
    const ext = extname(file).toLowerCase();

    if (ext === ".webp" && !file.endsWith(".tmp.webp")) {
      const result = await compressWebP(filePath, maxWidth);
      totalBefore += result.before;
      totalAfter += result.after;
    }
  }

  console.log(
    `  📊 Total: ${formatKB(totalBefore)} → ${formatKB(totalAfter)} (${Math.round((1 - totalAfter / totalBefore) * 100)}% reduction)`,
  );
}

async function convertNonWebP(dir, maxWidth) {
  console.log(`\n🔄 Converting non-WebP files in ${dir}`);
  const files = await readdir(dir);
  const conversions = [];

  for (const file of files.sort()) {
    const filePath = join(dir, file);
    const ext = extname(file).toLowerCase();

    if (ext === ".png" || ext === ".jpeg" || ext === ".jpg") {
      // Check if webp version already exists
      const webpPath = filePath.replace(ext, ".webp");
      try {
        await stat(webpPath);
        console.log(`  ⏭️  ${file}: WebP version already exists`);
      } catch {
        const result = await convertToWebP(filePath, maxWidth);
        conversions.push(result);
      }
    }
  }
  return conversions;
}

async function main() {
  console.log("🖼️  Image Optimization for The Elite Club Casino\n");
  console.log("=".repeat(60));

  // 1. Compress gallery WebP images
  await processDirectory(GALLERY_DIR, GALLERY_MAX_WIDTH, "Gallery Images");

  // 2. Compress casino card WebP images
  await processDirectory(CASINO_DIR, CASINO_CARD_MAX_WIDTH, "Casino Card Images");

  // 3. Convert remaining PNG/JPEG to WebP
  const casinoConversions = await convertNonWebP(CASINO_DIR, CASINO_CARD_MAX_WIDTH);

  console.log("\n" + "=".repeat(60));
  console.log("✅ Image optimization complete!");

  if (casinoConversions.length > 0) {
    console.log("\n⚠️  New WebP files created. Update imports in src/lib/data.ts:");
    for (const c of casinoConversions) {
      console.log(`   ${basename(c.originalPath)} → ${basename(c.webpPath)}`);
    }
  }
}

main().catch(console.error);
