import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Vending Machine Pickup Line: One Line, One Minute
// One line, in the machine's own voice: lights flicker, button B4,
// sweet and cold, ready to fall — literally, that's how a vending
// machine drops its snack. The line is 151 characters: inside the
// gate (1-200) and in the 120-190 band. One concrete machine detail
// (press B4), the machine's own world throughout (lights, coins,
// sold out), and the payoff lands in the last words — "leave me on
// sold out" — the machine's version of being left on read. Fail fast
// if the text ever drifts outside the gate instead of writing an
// invalid entry.
const ENTRY = "Hey, you make my lights flicker. Press B4 \u2014 I'm sweet, cold, and ready to fall for you. No coins needed, just don't walk away and leave me on sold out.";
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 non-blank characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
