import sharp from "sharp";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const assetsDir = path.join(__dirname, "src/assets");
const optimizedDir = path.join(__dirname, "src/assets/optimized");

const rootImages = [
  { src: "coder.png", dest: "coder.webp" },
  { src: "about.png", dest: "about.webp" },
  { src: "hi.png", dest: "hi.webp" },
];

const optimizedImages = [
  { src: "livy.jpg", dest: "livy.webp" },
  { src: "br-funnel.jpg", dest: "br-funnel.webp" },
  { src: "bank.jpg", dest: "bank.webp" },
  { src: "restaurant.jpg", dest: "restaurant.webp" },
];

async function convert(inputPath, outputPath, opts = {}) {
  const q = opts.quality ?? 82;
  const input = path.join(inputPath);
  const output = path.join(outputPath);
  if (!existsSync(input)) {
    console.warn(`  ⚠ Not found, skipping: ${input}`);
    return;
  }
  await sharp(input).webp({ quality: q, effort: 6 }).toFile(output);
  const { size: inSize } = (await import("fs")).statSync(input);
  const { size: outSize } = (await import("fs")).statSync(output);
  const saved = (((inSize - outSize) / inSize) * 100).toFixed(1);
  console.log(
    `  ✓ ${path.basename(input)} → ${path.basename(output)}  (${(inSize / 1024).toFixed(0)}KB → ${(outSize / 1024).toFixed(0)}KB, ${saved}% saved)`,
  );
}

async function main() {
  console.log("\n🔄 Converting images to WebP...\n");

  for (const img of rootImages) {
    const srcPath = path.join(assetsDir, img.src);
    const destPath = path.join(assetsDir, img.dest);
    await convert(srcPath, destPath);
  }

  for (const img of optimizedImages) {
    const srcPath = path.join(optimizedDir, img.src);
    const destPath = path.join(optimizedDir, img.dest);
    await convert(srcPath, destPath);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
