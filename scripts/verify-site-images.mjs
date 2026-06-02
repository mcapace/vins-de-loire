#!/usr/bin/env node
/**
 * Ensures every gaelle(id) in lib/site-images.ts resolves to a file under public/.
 * Run: npm run verify:images
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "lib", "site-images.ts");
const manifest = fs.readFileSync(manifestPath, "utf8");

const ids = [...manifest.matchAll(/gaelle\((\d+)\)/g)].map((m) => Number(m[1]));
const unique = [...new Set(ids)];

let missing = 0;
for (const id of unique) {
  const src = `/images/InterLoire-Vins-de-Loire-gaellebcphotographe-${id}.jpg`;
  const file = path.join(root, "public", src.slice(1));
  if (!fs.existsSync(file)) {
    console.error(`Missing: ${src}`);
    missing += 1;
  }
}

if (missing > 0) {
  console.error(`\n${missing} image(s) missing.`);
  process.exit(1);
}

console.log(`OK — ${unique.length} curated Gaelle BC photo(s) verified on disk.`);
