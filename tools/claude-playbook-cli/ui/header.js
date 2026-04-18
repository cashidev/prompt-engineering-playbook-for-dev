import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

export function showHeader() {
  console.clear();

  // ASCII Logo
  console.log(
    chalk.cyan(
      figlet.textSync("Claude Playbook", {
        horizontalLayout: "default"
      })
    )
  );

  // Boxed subtitle
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
}