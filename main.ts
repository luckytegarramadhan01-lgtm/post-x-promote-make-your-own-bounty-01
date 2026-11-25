// Entry program for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X".
// It copies POST.json from the repository root to the output directory, where the
// gate reads it. The entry itself is the X post: one quote of make.fun's post
// (https://x.com/makefunai/status/2124915864336236646) with a photo of its own,
// make.fun / @makefunai and the entrant's play code in its text.
// Node 22, standard library only; no network, no wall clock, no files outside the repo.
//
// Local run (as the grader does it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
