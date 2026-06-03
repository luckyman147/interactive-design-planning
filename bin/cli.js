#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const path = require('path');
const { createPlan } = require('../src/planner');
const { questionnaire } = require('../src/questionnaire');

async function main() {
  console.log(chalk.cyan.bold('\n🎨 Interactive Design Planning\n'));
  console.log(chalk.gray('Answer 6 questions to generate your personalized implementation plan\n'));

  try {
    // Show questionnaire
    const answers = await questionnaire();

    console.log(chalk.cyan.bold('\n📋 Creating Personalized Implementation Plan...\n'));
    const spinner = ora('Analyzing your answers...').start();

    // Create the personalized plan
    const result = await createPlan({
      answers,
      outputDir: './',
    });

    spinner.succeed(chalk.green('✅ Personalized plan created!'));

    console.log(chalk.cyan.bold('\n📄 Output Files:\n'));
    console.log(`  1. ${chalk.blue(result.planFile)} (Customized implementation plan)`);
    console.log(`  2. ${chalk.blue(result.examplesFile)} (Code examples for ${answers.animationStyle} animations)`);
    console.log(`  3. ${chalk.blue(result.promptFile)} (Ready-to-execute master prompt)\n`);

    console.log(chalk.cyan.bold('📖 Next Steps:\n'));
    console.log(chalk.yellow('Option A: Review & Build'));
    console.log(`  1. Open and review ${chalk.blue(result.planFile)}`);
    console.log(`  2. Copy the master prompt from ${chalk.blue(result.promptFile)}`);
    console.log(`  3. Paste into your favorite LLM or design tool`);
    console.log(`     (Claude, GPT-4, Gemini, Claude Design, etc.)\n`);

    console.log(chalk.yellow('Option B: Customize First'));
    console.log(`  1. Edit the generated files to customize`);
    console.log(`  2. Update colors, fonts, or animation patterns`);
    console.log(`  3. Then paste updated prompt into any LLM or design tool\n`);

    console.log(chalk.gray('💡 Your answers were:'));
    console.log(chalk.gray(`   Website: ${answers.websiteType}`));
    console.log(chalk.gray(`   Goal: ${answers.primaryGoal}`));
    console.log(chalk.gray(`   Animation: ${answers.animationStyle}`));
    console.log(chalk.gray(`   Colors: ${answers.colorAesthetic}`));
    console.log(chalk.gray(`   Audience: ${answers.targetAudience}`));
    console.log(chalk.gray(`   Feature: ${answers.keyFeature}\n`));

  } catch (error) {
    console.error(chalk.red(`\n❌ Error: ${error.message}\n`));
    process.exit(1);
  }
}

main();
