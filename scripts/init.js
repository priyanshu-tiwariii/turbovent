#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import readline from "readline";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import { execSync } from "child_process";
import ora from "ora";

// Clear the console and display a welcome message
console.clear();
console.log(
  gradient.pastel.multiline(
    figlet.textSync("Turbovent", { horizontalLayout: "full" })
  )
);
console.log(
  chalk.cyan.bold("\n Turbovent - Grow Your Code, Not Your Headaches \n")
);

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for the project name
rl.question(
  gradient.instagram("📝 Enter your project name: "),
  async (projectName) => {
    if (!projectName.trim()) {
      console.log(chalk.red.bold("\n Error: Project name cannot be empty!!! 😔😔"));
      process.exit(1);
    }

    // Define paths
    const projectPath = path.join(process.cwd(), projectName);

    try {
      // Check if the project directory already exists
      if (fs.existsSync(projectPath)) {
        console.log(chalk.red.bold(`\n Error: A folder named "${projectName}" already exists!!! 🚨🚨`));
        process.exit(1);
      }

      // GitHub repository URL for the template
      const templateRepoUrl = "https://github.com/priyanshu-tiwariii/template.git"; 

      // Clone the template from GitHub
      const spinner = ora({
        text: "📂 Setting up your project...",
        spinner: "dots",
        color: "cyan",
      }).start();

      // Hide Git clone output
      execSync(`git clone ${templateRepoUrl} ${projectName}`, { stdio: "pipe" });
      spinner.succeed(chalk.green(" Project setup complete! 🥳🥳"));

      // Remove the .git directory to detach from the template's Git history
      fs.removeSync(path.join(projectPath, ".git"));

      // Update package.json with the project name
      const packageJsonPath = path.join(projectPath, "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
      packageJson.name = projectName;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

      // Install dependencies
      console.log(chalk.yellow("\n⌛ Installing dependencies, please wait...\n"));
      const installSpinner = ora({ text: "📦 Installing packages...", spinner: "moon" }).start();
      execSync("npm install", { stdio: "pipe", cwd: projectPath });
      installSpinner.succeed(chalk.green(" Dependencies installed successfully! 🗃️🗃️"));

      // Final success message
      console.log(
        gradient.pastel(`\n🎉 Hurray! Your project is ready to go!\n`)
      );
      console.log(
        chalk.yellow.bold("🚀 Next Steps:\n") +
        chalk.cyan(`1. cd ${projectName}\n`) +
        chalk.cyan("2. pnpm install \n") +
        chalk.cyan("3. pnpm run dev \n")
      );
    } catch (error) {
      console.error(chalk.red("\n Error: Unable to create project....⚠️⚠️"));
      console.error(chalk.red(error.message));
      process.exit(1);
    }

    rl.close();
  }
);

// Handle Ctrl+C gracefully
rl.on("SIGINT", () => {
  console.log(chalk.red("\n👋 Process terminated by user."));
  process.exit(1);
});