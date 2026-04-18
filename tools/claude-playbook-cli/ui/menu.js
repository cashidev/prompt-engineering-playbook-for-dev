import inquirer from "inquirer";

export async function showMenu() {
  const { prompts } = await import("../prompts.js");

  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "selected",
      message: "Choose a prompt template:",
      choices: Object.keys(prompts).map((key) => ({
        name: `✨ ${key}`,
        value: key
      }))
    }
  ]);

  return answer.selected;
}