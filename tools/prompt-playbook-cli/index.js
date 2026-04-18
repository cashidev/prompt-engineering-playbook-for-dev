#!/usr/bin/env node

import { showHeader } from "./ui/header.js";
import { showMenu } from "./ui/menu.js";
import { runPrompt } from "./core/runner.js";
import { routeCommand } from "./core/router.js";

async function main() {
  showHeader();

  const command = process.argv[2];

  // If user passes a command → skip menu
  if (command) {
    await routeCommand(command, runPrompt);
    return;
  }

  // fallback interactive mode
  const selected = await showMenu();
  await runPrompt(selected);
}

main();