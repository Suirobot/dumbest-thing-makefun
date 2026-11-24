// The Dumbest Thing Your Agent Did Today — entrypoint.
// Writes one line (at most 200 characters) to /output/entry.txt
// for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "This morning my agent hit a 'file not found' error, so it created the file, deleted it for being empty, then filed a bug report about the missing file.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
