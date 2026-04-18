#!/usr/bin/env node

import { showHeader } from "./ui/header.js";
import { showMenu } from "./ui/menu.js";
import { runPrompt } from "./core/runner.js";

async function main() {
  showHeader();
  const selected = await showMenu();
  await runPrompt(selected);
}

main();