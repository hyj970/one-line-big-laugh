// One Line, Big Laugh — make.fun entry.
// Writes a single funny line to <output>/entry.txt.
// Output dir: $MAKEFUN_OUTPUT_DIR, or /output by default.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My therapist told me to name my feelings, so I called my anxiety Greg — now Greg texts me at 3 a.m. asking if we're okay.";

function formatEntry(line: string): string {
  return line.trim() + "\n";
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), formatEntry(ENTRY), "utf8");
