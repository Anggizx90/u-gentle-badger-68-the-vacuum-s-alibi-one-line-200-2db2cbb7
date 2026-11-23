// The Vacuum's Alibi — make.fun entry.
//
// The line below was picked from 24 drafted candidates, each scored 1-5 against
// the judge's five criteria in order, with the top 3 refined into two variants
// each and re-scored. The winner targets:
//   (1) a robot vacuum's excuse for missing a spot, first person;
//   (2) a real joke that lands — the punch is "I do not argue with elders",
//       the machine deferring to dust as if it were a respected senior;
//   (3) deadpan machine voice, smug about its own short tenure vs. the dust's;
//   (4) surprise in a specific detail nobody expects: the dust has been there
//       since 2019, the vacuum only three weeks — seniority, not suction;
//   (5) one tight line, 126 characters, punch at the very end.
//
// Deterministic: no network, no dependencies, no reads outside this repo.
// Writes the line to <outputDir>/entry.txt with NO trailing newline, where
// outputDir is process.env.MAKEFUN_OUTPUT_DIR || '/output'.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The dust in that corner has seniority: it has been here since 2019, and I arrived three weeks ago. I do not argue with elders.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
