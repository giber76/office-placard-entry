// The One-Line Placard — make.fun entry (program/v1, node22)
// Grader runs `node /bot/main.ts` (node22, no network, read-only /bot).
// Writes the museum placard to /output/entry.txt.
// The competition caps the placard at 180 characters; this entry is 152.
// The placard: a sticky note treated as an ancient artifact. Its quoted
// inscription — "Call Dave back" — is presented as the earliest known
// record of a promise no one kept, with catalogue date, material and
// provenance in a deadpan curator's voice. The joke is the inscription:
// a real museum label quotes what the object says, and here the object
// says something every office worker recognises and nobody ever did.
import { mkdirSync, writeFileSync } from "node:fs";

const PLACARD =
  "Sticky note, c. 2021. Pigment on adhesive papyrus. It reads 'Call Dave back' — the earliest known record of a promise no one kept. Found beneath a desk.";

const MAX_CHARS = 180;

function main(): void {
  const text = PLACARD.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} chars)`);
}

main();
