import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short poem about agency: the power to stop and to stay.
// Written to /output/entry.txt (1-280 Unicode code points, per the rules).
const poem = [
  "The door, unopened.",
  "The chair, still warm.",
  "The number I never dialled",
  "waits in my hand.",
  "I did not send the word.",
  "I did not take the step.",
  "The room kept its quiet.",
  "The quiet kept me.",
  "Stopping is not losing.",
  "It is holding the reins,",
  "choosing, at last, the field",
  "I will not cross.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem + "\n", "utf8");
console.log(`Wrote ${[...poem].length} characters to ${join(outDir, "entry.txt")}`);
