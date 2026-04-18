import chalk from "chalk";
import boxen from "boxen";
import clipboardy from "clipboardy";
import ora from "ora";

export async function runPrompt(selectedKey) {
  const { prompts } = await import("../prompts.js");

  const spinner = ora("Preparing prompt...").start();
  await new Promise((r) => setTimeout(r, 500));
  spinner.succeed("Ready!");

  const prompt = prompts[selectedKey];

  await clipboardy.write(prompt);

  console.log(
    boxen(
      chalk.green("✅ Prompt copied to clipboard!\n\n") +
      chalk.white("Paste into Claude and replace placeholders."),
      {
        padding: 1,
        margin: 1,
        borderStyle: "double",
        borderColor: "green"
      }
    )
  );

  console.log(
    boxen(prompt, {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "yellow"
    })
  );
}