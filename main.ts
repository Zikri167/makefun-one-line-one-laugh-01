import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// One Line, One Laugh — v2 (revised: present tense, "My therapist says"
// — the absurdity is now a routine, and the "alone" vs "we're" twist
// still lands on the very last word.)
const joke =
  "I go to couples therapy alone. My therapist says we're making great progress.";

if ([...joke].length < 1 || [...joke].length > 140) {
  throw new Error(`joke must be 1-140 characters, got ${[...joke].length}`);
}
if (joke.trim().length === 0) {
  throw new Error('joke must not be only whitespace');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf8');
