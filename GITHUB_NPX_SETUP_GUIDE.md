# Publishing to GitHub & NPM

Complete guide to publish the `interactive-design-planning` skill for use across **ANY** agent or platform.

**What this skill does:**
- Uses an **interactive questionnaire** to understand what you want
- Generates **personalized implementation plans** (not generic templates)
- Outputs: Implementation plan + Code examples + Master prompt
- Works with ANY LLM, platform, or API

**How it works:**
1. User runs the command
2. Questionnaire asks 6 key questions (website type, goal, animation preference, color, audience, key feature)
3. System generates a fully **personalized** implementation plan based on answers
4. User gets ready-to-execute master prompt for Claude Design

**Supported Platforms:**
- ✅ Claude Code (IDE)
- ✅ Cursor (VSCode-based IDE)
- ✅ Continue.dev (VSCode extension)
- ✅ JetBrains AI (IntelliJ, PyCharm, WebStorm)
- ✅ OpenRouter (Multi-model API)
- ✅ Cody (Sourcegraph)
- ✅ Copilot CLI
- ✅ Direct Node execution
- ✅ Any platform with terminal/NPM access

---

## Overview

After setup, users will run:

```bash
# Start interactive questionnaire (answer 6 questions)
npx interactive-design-planning

# Or with agent-specific syntax (where available)
/create-interactive-website  # Claude Code
/skill install interactive-design-planning && /create-interactive-website
```

**Questionnaire asks:**
1. Website type (portfolio, agency, SaaS, museum, e-commerce, Web3, luxury)
2. Primary goal (showcase work, explain benefits, tell story, capture leads, etc.)
3. Animation style (minimal, moderate, heavy 3D, cinema-grade) ⭐
4. Color aesthetic (dark+vibrant, light+professional, monochromatic, playful, luxury)
5. Target audience (creatives, enterprises, consumers, investors, specialists, community)
6. Key feature (showcase, explain, interactive, video, navigation, forms)

**Output:** 3 personalized files (based on answers)
- ✅ Implementation plan document (.md) - customized to answers
- ✅ Code examples (.md) - patterns for their animation tier
- ✅ Master prompt (.md) - ready to build with

---

## Step 1: Create GitHub Repository

### 1a. Create new repo on GitHub

```
Go to: https://github.com/new

Repository name: interactive-design-planning
Description: "Interactive questionnaire → personalized implementation plans for interactive websites"
Visibility: Public
Initialize with README: Yes
.gitignore: Node
License: MIT
```

### 1b. Clone to your machine

```bash
git clone https://github.com/[YOUR-USERNAME]/interactive-design-planning.git
cd interactive-design-planning
```

### 1c. Repository Structure

Your final repository will contain:

```
interactive-design-planning/
├── bin/
│   └── cli.js                      # CLI entry point (questionnaire + file generation)
├── src/
│   ├── questionnaire.js            # Interactive 6-question system
│   └── planner.js                  # Plan + code examples + master prompt generation
├── docs/
│   ├── CLAUDE_CODE.md              # Claude Code integration guide
│   ├── COPILOT_CLI.md              # Copilot CLI installation & usage
│   ├── CODY.md                     # Sourcegraph Cody (VS Code) integration
│   ├── COMMAND_REFERENCE.md        # Complete command reference with all options
│   ├── AGENT_WORKFLOW.md           # Universal workflow for all platforms
│   ├── EXAMPLE.md                  # 6 test scenarios with expected outputs
│   └── SETUP_CHECKLIST.md          # Complete setup & publication checklist
├── package.json                    # NPM package configuration
├── README.md                       # Main project documentation
├── QUESTIONNAIRE.md                # Detailed 6-question system documentation
├── GITHUB_NPX_SETUP_GUIDE.md       # This guide (11 steps to publication)
├── LICENSE                         # MIT license
└── .gitignore                      # Git ignore rules
```

---

## Step 2: Initialize NPM Package

### 2a. Create package.json

```bash
npm init -y
```

### 2b. Edit package.json

```json
{
  "name": "interactive-design-planning",
  "version": "1.0.0",
  "description": "Interactive questionnaire → personalized implementation plans for interactive websites. Answers 6 questions, generates customized plan + code examples + master prompt.",
  "main": "src/planner.js",
  "bin": {
    "create-interactive-website": "./bin/cli.js"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node bin/cli.js"
  },
  "keywords": [
    "cli",
    "web",
    "interactive",
    "website",
    "questionnaire",
    "generator",
    "design-system",
    "implementation-plan",
    "react",
    "tailwind",
    "framer-motion",
    "animation"
  ],
  "author": "[Your Name] <billing@fycorps.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/luckyman147/interactive-design-planning.git"
  },
  "bugs": {
    "url": "https://github.com/luckyman147/interactive-design-planning/issues"
  },
  "homepage": "https://github.com/luckyman147/interactive-design-planning#readme",
  "engines": {
    "node": ">=16.0.0"
  },
  "dependencies": {
    "inquirer": "^8.2.5",
    "chalk": "^5.3.0",
    "ora": "^7.0.1",
    "fs-extra": "^11.1.1"
  },
  "devDependencies": {
    "prettier": "^3.0.0"
  }
}
```

### 2c. Install dependencies

```bash
npm install
```

---

## Step 3: Create CLI Structure

### 3a. Create bin/cli.js (Entry point)

```bash
mkdir -p bin
```

**File: `bin/cli.js`** - The CLI entry point that opens the questionnaire

```javascript
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
    console.log(`  3. Paste into https://claude.ai/design`);
    console.log(`  4. Claude Design generates your website\n`);

    console.log(chalk.yellow('Option B: Customize First'));
    console.log(`  1. Edit the generated files to customize`);
    console.log(`  2. Update colors, fonts, or animation patterns`);
    console.log(`  3. Then paste updated prompt into Claude Design\n`);

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
```

### 3b. Make CLI executable

```bash
chmod +x bin/cli.js
```

---

## Step 4: Create Questionnaire Module

### 4a. Create src/questionnaire.js

```bash
mkdir -p src
```

**File: `src/questionnaire.js`** - The 6-question interactive system

```javascript
const inquirer = require('inquirer');

async function questionnaire() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'websiteType',
      message: 'What type of website are you building?',
      choices: [
        'Portfolio/Creative Showcase',
        'Agency',
        'SaaS/Product',
        'Museum/Cultural',
        'E-commerce',
        'Web3/Crypto',
        'Luxury/Premium Service'
      ]
    },
    {
      type: 'list',
      name: 'primaryGoal',
      message: 'What is your primary goal?',
      choices: [
        'Showcase work/portfolio',
        'Explain product benefits',
        'Tell a story/narrative',
        'Capture leads/sales',
        'Build community',
        'Display information'
      ]
    },
    {
      type: 'list',
      name: 'animationStyle',
      message: 'What animation style do you want?',
      choices: [
        'Minimal & Professional (5 days)',
        'Moderate & Engaging (7 days)',
        'Heavy 3D & Interactive (9 days)',
        'Maximum Interactive (Cinema-Grade, 10-12 days)'
      ]
    },
    {
      type: 'list',
      name: 'colorAesthetic',
      message: 'What color aesthetic?',
      choices: [
        'Dark + Vibrant Accents',
        'Light + Professional',
        'Monochromatic Editorial',
        'Colorful & Playful',
        'Luxury Minimal'
      ]
    },
    {
      type: 'list',
      name: 'targetAudience',
      message: 'Who is your target audience?',
      choices: [
        'Creative professionals',
        'Enterprise/B2B',
        'Consumers/Public',
        'Investors/Stakeholders',
        'Specialists',
        'Community members'
      ]
    },
    {
      type: 'list',
      name: 'keyFeature',
      message: 'What is your key feature/differentiator?',
      choices: [
        'Showcase work',
        'Explain benefits',
        'Interactive experience',
        'Video/media',
        'Navigation/discovery',
        'Form/capture'
      ]
    }
  ]);

  return answers;
}

module.exports = { questionnaire };
```

---

## Step 5: Create Plan Generation Module

### 5a. Create src/planner.js

**File: `src/planner.js`** - Generates personalized plans based on questionnaire answers

This file contains all the logic to:
- Generate project names based on website type
- Create customized implementation plans
- Generate code examples for the animation tier
- Create master prompts ready for Claude Design

See the actual implementation in your repository for the complete code. The module exports `createPlan(options)` which:
- Takes user answers from the questionnaire
- Returns 3 files: `{planFile, examplesFile, promptFile, projectName}`
- Customizes everything based on the 6 questions

---

## Step 6: Push to GitHub

```bash
git add .
git commit -m "Initial commit: Interactive design planning skill"
git push -u origin main
```

---

## Step 7: Publish to NPM

### 7a. Create NPM account

Go to https://www.npmjs.com/signup and create an account if you don't have one.

### 7b. Login to NPM

```bash
npm login
# Enter your NPM username, password, and email
```

### 7c. Verify package.json

Make sure:
- Name is unique (not already taken on NPM)
- Version is "1.0.0"
- All fields are filled in correctly

```bash
npm publish --dry-run
```

### 7d. Publish

```bash
npm publish
```

### 7e. Verify

```bash
npm info interactive-design-planning
```

---

## Step 8: Test the NPX Command

```bash
# Test locally
npx interactive-design-planning

# Answer the 6 questions
# Files should generate in your current directory
```

---

## Step 9: Test with Multiple Platforms

Test with different platforms:

```bash
# Claude Code (if you have it installed)
/skill install interactive-design-planning
/create-interactive-website

# Copilot CLI
npm install -g interactive-design-planning
create-interactive-website

# Direct node
node bin/cli.js

# NPM link (simulate global install)
npm link
create-interactive-website
npm unlink -g interactive-design-planning
```

---

## Step 10: Create Agent-Specific Documentation

Create documentation for each platform in the `docs/` folder:
- `CLAUDE_CODE.md` - Claude Code users
- `COPILOT_CLI.md` - Copilot CLI users
- `CODY.md` - Cody users
- `COMMAND_REFERENCE.md` - All commands explained
- `AGENT_WORKFLOW.md` - Universal workflow
- `EXAMPLE.md` - 6 test scenarios

---

## Step 11: Final Checklist

Before declaring the project complete:

**Code**
- [ ] `bin/cli.js` runs without errors
- [ ] `src/questionnaire.js` asks all 6 questions
- [ ] `src/planner.js` generates 3 files
- [ ] Files are generated correctly (not truncated)
- [ ] Colors, fonts, animations match answers

**Documentation**
- [ ] README.md explains questionnaire approach
- [ ] QUESTIONNAIRE.md documents all 6 questions
- [ ] Platform-specific guides are complete
- [ ] Command reference covers all options
- [ ] EXAMPLE.md has 6 working test scenarios

**Publishing**
- [ ] package.json has correct metadata
- [ ] Repository is public on GitHub
- [ ] NPM package is published
- [ ] `npx interactive-design-planning` works
- [ ] Installation instructions are clear

**User Testing**
- [ ] Tested locally with all 6 answer variations
- [ ] Tested with Claude Code
- [ ] Tested with Copilot CLI
- [ ] Tested with npx command
- [ ] 3 output files are customized to answers
- [ ] Master prompt works with Claude Design

---

## Summary

You now have:

✅ GitHub repository with complete code
✅ NPM package published globally
✅ Works across all platforms
✅ Complete documentation for users
✅ Ready for users to install and use

**Users can now:**
```bash
npx interactive-design-planning
```

And get a fully personalized implementation plan in 2 minutes!

---

**Status:** ✅ Publish-Ready!

For support, open an issue at: https://github.com/luckyman147/interactive-design-planning/issues
