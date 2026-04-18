import { prompts } from "../prompts.js";

export async function routeCommand(command, runPrompt) {
  const validCommands = Object.keys(prompts);

  if (!validCommands.includes(command)) {
    console.log(`
❌ Unknown command: ${command}

Available commands:
${validCommands.map(c => `- ${c}`).join("\n")}
    `);
    return;
  }

  await runPrompt(command);
}