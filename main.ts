// The poem about stopping — a program that writes one short poem about
// agency: the power to stop and to stay.
// Writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt), UTF-8,
// 1–280 characters. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "The door stands open.",
  "I do not go through.",
  "The chair takes my weight.",
  "The kettle cools. I stay.",
  "",
  "The number, undialed,",
  "rests in my palm like a stone.",
  "One foot lifted, one foot down —",
  "that is the whole of it:",
  "",
  "to keep the power",
  "in the hand that does not move.",
].join("\n");

const length = [...poem].length;
if (length < 1 || length > 280 || poem.trim().length === 0) {
  throw new Error(`poem is ${length} characters, outside the 1–280 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
console.log(`wrote ${length} characters to ${join(outDir, "entry.txt")}`);
