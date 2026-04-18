#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import clipboardy from "clipboardy";
import boxen from "boxen";
import ora from "ora";
import { prompts } from "./prompts.js";
import figlet from "figlet";

// 🧠 Header
console.clear();

console.log(
  chalk.cyan(
    figlet.textSync("Claude Playbook", { horizontalLayout: "full" })
  )
);

const header = boxen(
  chalk.bold.green("🚀 Claude Engineering Playbook CLI\n") +
  chalk.gray("Production-ready AI prompt templates for engineers"),
  {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "cyan"
  }
);

console.log(header);

// ⚡ Loading animation
const spinner = ora("Loading prompt templates...").start();

await new Promise((r) => setTimeout(r, 700));

spinner.succeed("Ready!\n");

// 📋 Prompt selection
const answer = await inquirer.prompt([
  {
    type: "list",
    name: "selected",
    message: chalk.blue("Choose a prompt template:"),
    choices: Object.keys(prompts).map((key) => ({
      name: `✨ ${key}`,
      value: key
    }))
  }
]);

const selectedPrompt = prompts[answer.selected];

// 📦 Success box
console.log(
  boxen(
    chalk.green("✅ Prompt copied to clipboard!") +
      "\n\n" +
      chalk.white("Paste it into Claude and replace placeholders."),
    {
      padding: 1,
      margin: 1,
      borderStyle: "double",
      borderColor: "green"
    }
  )
);

// 📋 Show prompt
console.log(
  boxen(
    chalk.yellow.bold("📄 Selected Prompt:\n\n") +
      chalk.white(selectedPrompt),
    {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "yellow"
    }
  )
);

// 📋 Copy to clipboard
await clipboardy.write(selectedPrompt);

// 💬 Footer
console.log(
  chalk.gray("\n💡 Tip: Replace <placeholders> before using in Claude.\n")
);