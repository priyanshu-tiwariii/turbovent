#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import readline from "readline";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import ora from "ora";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.clear();
console.log(
  gradient.pastel.multiline(
    figlet.textSync("Turbovent", { horizontalLayout: "full" })
  )
);

console.log(
  chalk.cyan.bold("\n✨ Turbovent-Grow Your Code, Not Your Headaches ✨\n")
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for Project Name with a Styled Prompt
rl.question(
  gradient.instagram("📝 Enter your project name: "),
  async (projectName) => {
    if (!projectName.trim()) {
      console.log(chalk.red.bold("\n❌ Error: Project name cannot be empty!"));
      process.exit(1);
    }

    // Creating the Project Folder
    const projectPath = path.join(process.cwd(), projectName);
    const templatesPath = path.join(__dirname, "..", "templates");

    try {
      // Create Project Directory
      fs.mkdirSync(projectPath, { recursive: true });
      process.chdir(projectPath);

      if (!fs.existsSync(templatesPath)) {
        console.log(
          chalk.red.bold("\n🚨 Error: Templates folder not found!")
        );
        console.log(chalk.red(`Expected path: ${templatesPath}\n`));
        process.exit(1);
      }

      // Animated Spinner for Copying Files
      const spinner = ora({
        text: "📂 Copying project files...",
        spinner: "dots",
        color: "cyan",
      }).start();

      await fs.copy(templatesPath, projectPath, {
        filter: (src) => !src.includes("node_modules"), 
      });

      spinner.succeed(chalk.green(" Files copied successfully!!! 🥳🥳"));

      // Rename .env.template to .env if it exists
      const envTemplatePath = path.join(projectPath, ".env.template");
      if (fs.existsSync(envTemplatePath)) {
        fs.renameSync(envTemplatePath, path.join(projectPath, ".env"));
        console.log(chalk.green("\n🔧 .env file setup completed!"));
      }

      // Install Dependencies with Loading Animation
      console.log(chalk.yellow("\n⌛ Installing dependencies, please wait...\n"));
      const installSpinner = ora({ text: "📦 Downloading packages...", spinner: "moon" }).start();
      execSync("npm install", { stdio: "inherit" });
      installSpinner.succeed(chalk.green(" Dependencies installed successfully!!! 🗃️🗃️🗃️\n"));

      // Final Success Message
      console.log(
        gradient.pastel(
          `🎉 Hurray! Project is ready to go!\n`
        )
      );

      console.log(
        chalk.yellow.bold("\n🚀 Next Steps:\n") +
          chalk.cyan(`1. cd ${projectName}\n`) +
          chalk.cyan("2. pnpm install\n") +
          chalk.cyan("3. pnpm run dev\n")
      );
    } catch (error) {
      console.error(chalk.red("\n Error: Unable to create project. ❌❌❌"));
      console.error(chalk.red(error.message));
      process.exit(1);
    }

    rl.close();
  }
);

// Handle Ctrl+C Gracefully
rl.on("SIGINT", () => {
  console.log(chalk.red("\n Process terminated by user.👋👋👋"));
  process.exit(1);
});