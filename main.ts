// Two Lines to Your Past Self: a warning sent back to one exact moment, and why it mattered.
import { mkdirSync, writeFileSync } from "node:fs"; // Node standard library only.

const LINE_1 =
  "Don't delete the voicemail your grandmother leaves on the Tuesday she calls to say she is proud of you.";
const LINE_2 =
  "It is the last time you will ever hear her voice, and you will spend years wishing you had kept it.";

const ENTRY = `${LINE_1}\n${LINE_2}\n`;

const OUT_DIR = "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY, "utf8");
