/**
 * download-images.mjs
 * ------------------------------------------------------------------
 * Downloads every image referenced by the site from the live source
 * (https://equinoxsportsinfra.com) into /public/images, preserving the
 * original folder structure (e.g. public/images/assets/img/about/gym.jpg).
 *
 * Run locally (needs internet access):
 *     npm run download-images
 *
 * Then flip to self-hosted images by editing src/config/media.js:
 *     export const MEDIA_BASE = "/images";
 *
 * Requires Node 18+ (built-in fetch).
 * ------------------------------------------------------------------
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { company, heroSlides, intro, servicesBlurb, projects, clients } from "../src/data/site.js";
import { pages } from "../src/data/pages.js";

const SOURCE = "https://equinoxsportsinfra.com";
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");

// Collect every referenced relative path, de-duplicated.
const paths = new Set([
  company.logo,
  company.logoWhite,
  intro.image,
  servicesBlurb.image,
  ...heroSlides.map((s) => s.image),
  ...projects.map((p) => p.image),
  ...clients,
  ...Object.values(pages).map((p) => p.image),
  // decorative shapes used by the original template (optional)
  "/assets/img/shape/shape-5.png",
  "/assets/img/shape/shape-6.png",
  "/assets/img/shape/shape-7.png",
  "/assets/img/shape/shape-8.png",
]);

async function download(rel) {
  const url = `${SOURCE}${rel}`;
  const dest = join(OUT, rel);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  ✗ ${rel}  (HTTP ${res.status})`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`  ✓ ${rel}  (${(buf.length / 1024).toFixed(0)} KB)`);
    return true;
  } catch (err) {
    console.warn(`  ✗ ${rel}  (${err.message})`);
    return false;
  }
}

console.log(`Downloading ${paths.size} images into public/images …\n`);
let ok = 0;
for (const rel of paths) {
  if (await download(rel)) ok++;
}
console.log(`\nDone. ${ok}/${paths.size} downloaded.`);
console.log(`Next: set MEDIA_BASE = "/images" in src/config/media.js to use them.`);
