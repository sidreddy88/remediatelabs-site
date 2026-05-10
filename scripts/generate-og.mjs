import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og-image.png");
mkdirSync(dirname(out), { recursive: true });

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b0d10"/>
      <stop offset="100%" stop-color="#13161a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.6">
      <stop offset="0%" stop-color="#6ee7b7" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#6ee7b7" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Brand mark -->
  <g transform="translate(80, 88)">
    <circle cx="14" cy="14" r="6" fill="#6ee7b7"/>
    <circle cx="14" cy="14" r="13" fill="none" stroke="#6ee7b7" stroke-opacity="0.4" stroke-width="1.5"/>
    <circle cx="14" cy="14" r="20" fill="none" stroke="#6ee7b7" stroke-opacity="0.15" stroke-width="1"/>
    <text x="44" y="20" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="600" fill="#e6e8eb" letter-spacing="-0.5">Remediate Labs</text>
  </g>

  <!-- Pill -->
  <g transform="translate(80, 180)">
    <rect width="320" height="36" rx="18" fill="#13161a" stroke="#23272d"/>
    <text x="20" y="23" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="500" fill="#9aa1a9" letter-spacing="2" text-transform="uppercase">PRODUCTION-GRADE AGENT PLATFORM</text>
  </g>

  <!-- Headline -->
  <g transform="translate(80, 250)">
    <text font-family="Inter, system-ui, sans-serif" font-size="68" font-weight="600" fill="#e6e8eb" letter-spacing="-2">
      <tspan x="0" dy="0">Autonomous incident</tspan>
      <tspan x="0" dy="80">remediation,</tspan>
      <tspan x="0" dy="80" fill="#6ee7b7">in single-digit minutes.</tspan>
    </text>
  </g>

  <!-- Footer URL -->
  <g transform="translate(80, 565)">
    <text font-family="JetBrains Mono, monospace" font-size="20" font-weight="500" fill="#9aa1a9">remediatelabs.io</text>
  </g>

  <!-- Right-side metric chips -->
  <g transform="translate(820, 180)" font-family="Inter, system-ui, sans-serif">
    <g>
      <rect x="0" y="0" width="300" height="84" rx="10" fill="#13161a" stroke="#23272d"/>
      <text x="20" y="32" font-size="11" font-weight="500" fill="#9aa1a9" letter-spacing="1.5">TIME-TO-FIRST-PR</text>
      <text x="20" y="68" font-size="32" font-weight="600" fill="#e6e8eb">~6 min</text>
    </g>
    <g transform="translate(0, 100)">
      <rect x="0" y="0" width="300" height="84" rx="10" fill="#13161a" stroke="#23272d"/>
      <text x="20" y="32" font-size="11" font-weight="500" fill="#9aa1a9" letter-spacing="1.5">TRIAGE ACCURACY</text>
      <text x="20" y="68" font-size="32" font-weight="600" fill="#e6e8eb">92%</text>
    </g>
    <g transform="translate(0, 200)">
      <rect x="0" y="0" width="300" height="84" rx="10" fill="#13161a" stroke="#23272d"/>
      <text x="20" y="32" font-size="11" font-weight="500" fill="#9aa1a9" letter-spacing="1.5">FALSE-POSITIVE RATE</text>
      <text x="20" y="68" font-size="32" font-weight="600" fill="#6ee7b7">&lt; 8%</text>
    </g>
  </g>
</svg>
`.trim();

await sharp(Buffer.from(svg))
  .png({ quality: 95, compressionLevel: 9 })
  .toFile(out);

console.log(`Wrote ${out}`);
