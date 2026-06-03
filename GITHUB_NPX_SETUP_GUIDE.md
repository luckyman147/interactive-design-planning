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
- ✅ OpenAI Codex / GPT-4 (API)
- ✅ Anthropic Claude API
- ✅ Stitch (Prompt orchestration)
- ✅ Antigravity (Prompt versioning)
- ✅ Any platform with terminal/API access

---

## Overview

After setup, users will run from ANY platform:

```bash
# Start interactive questionnaire (answer 6 questions)
npx skill create-interactive-website

# Or with agent-specific syntax (where available)
/create-interactive-website  # Claude Code

# With optional immediate execution (auto-exec with defaults)
npx skill create-interactive-website --exec
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

Repository name: create-interactive-website
Description: "CLI tool to generate production-ready interactive websites with design system integration"
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

### 1c. Repository Contents

Organize your repo with these files:

```
interactive-design-planning/
├── bin/
│   └── cli.js                      # CLI entry point
├── src/
│   ├── planner.js                  # Main planning logic
│   ├── extractors/
│   │   ├── designExtractor.js
│   │   ├── stackExtractor.js
│   │   └── roadmapExtractor.js
│   ├── generators/
│   │   ├── planGenerator.js
│   │   ├── examplesGenerator.js
│   │   └── promptGenerator.js
│   └── templates/
│       ├── implementation-plan.md
│       ├── code-examples.md
│       └── master-prompt.md
├── skills/
│   └── interactive-design-planning.md  # Skill definition
├── tests/
│   └── planner.test.js
├── docs/
│   ├── COMMAND_STRUCTURE.md
│   ├── AGENT_WORKFLOW.md
│   ├── AGENT_COMMAND_EXAMPLES.md
│   ├── EXAMPLE.md
│   └── IMPLEMENTATION_PLAN_TEMPLATE.md
├── package.json
├── README.md
├── LICENSE
└── .gitignore
```

---

## Step 1B: Agent Compatibility Setup

Before publishing, configure for multi-agent support:

### Multi-Agent Compatibility

This skill must work across different agent systems:

**Claude Code (Official)**
- Uses: `/skill` command syntax
- Format: `/create-interactive-website "description"`

**Copilot CLI**
- Uses: `skill` tool mapping
- Format: Same as above, maps to CLI

**Cody (Sourcegraph)**
- Uses: LLM tool integration
- Format: Tool callable with JSON input

**Other Agents** (GitHub Copilot, JetBrains, etc.)
- Use: Master prompt in agent system
- Format: Custom prompt templates

### Setup for Agent Interoperability

**1. Create agent-specific configs:**

```javascript
// src/adapters/claude-code.js
export function adaptForClaudeCode(description) {
  return {
    skillName: 'interactive-design-planning',
    input: { description },
    output: ['plan', 'examples', 'prompt']
  };
}

// src/adapters/copilot-cli.js
export function adaptForCopilotCLI(description) {
  return {
    tool: 'create-interactive-website',
    args: { description },
    returns: 'files'
  };
}

// src/adapters/cody.js
export function adaptForCody(description) {
  return {
    context: 'design-planning',
    task: 'create-plan',
    input: { description }
  };
}
```

**2. Create universal CLI wrapper:**

```javascript
// bin/cli.js - works with ANY agent
#!/usr/bin/env node

const { createPlan } = require('../src/planner');

async function main() {
  const description = process.argv[2];
  const shouldExecute = process.argv.includes('--exec');
  
  const result = await createPlan({
    description,
    execute: shouldExecute
  });
  
  console.log('✅ Plan created!');
  console.log(result);
}

main().catch(console.error);
```

**3. Document agent usage:**

Create `AGENT_COMPATIBILITY.md`:
```markdown
# Agent Compatibility

This skill supports multiple agents:

## Claude Code
\`\`\`
/create-interactive-website "description"
\`\`\`

## Copilot CLI
\`\`\`
create-interactive-website "description"
\`\`\`

## As Library (any agent)
\`\`\`javascript
const { createPlan } = require('interactive-design-planning');
const plan = await createPlan({ description: "..." });
\`\`\`
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
  "author": "[Your Name] <[your-email]@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/[YOUR-USERNAME]/interactive-design-planning.git"
  },
  "bugs": {
    "url": "https://github.com/[YOUR-USERNAME]/interactive-design-planning/issues"
  },
  "homepage": "https://github.com/[YOUR-USERNAME]/interactive-design-planning#readme",
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

### 3a. Create bin/cli.js (Entry point with Questionnaire)

```bash
mkdir -p bin
touch bin/cli.js
```

**File: `bin/cli.js`**
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

## Step 4: Create Generator Function

### 4a. Create src/generator.js

```bash
mkdir -p src
touch src/generator.js
```

**File: `src/generator.js`**
```javascript
const fs = require('fs-extra');
const path = require('path');
const { generatePackageJson } = require('./templates/package.json.template');
const { generateTailwindConfig } = require('./templates/tailwind.template');
const { generateReactApp } = require('./templates/app.template');
const { generateGlobalStyles } = require('./templates/styles.template');

async function generateWebsite(options) {
  const {
    name,
    aesthetic,
    colors,
    fonts,
    tier,
    stack,
    outputPath,
  } = options;

  // Create project directory structure
  await fs.ensureDir(outputPath);
  await fs.ensureDir(path.join(outputPath, 'src'));
  await fs.ensureDir(path.join(outputPath, 'src/components'));
  await fs.ensureDir(path.join(outputPath, 'src/hooks'));
  await fs.ensureDir(path.join(outputPath, 'src/styles'));
  await fs.ensureDir(path.join(outputPath, 'public'));

  // Generate core files
  const packageJson = generatePackageJson(name, stack);
  await fs.writeJSON(path.join(outputPath, 'package.json'), packageJson, { spaces: 2 });

  const tailwindConfig = generateTailwindConfig(colors, fonts);
  await fs.writeFile(path.join(outputPath, 'tailwind.config.js'), tailwindConfig);

  const appComponent = generateReactApp(aesthetic, tier);
  await fs.writeFile(path.join(outputPath, 'src/App.tsx'), appComponent);

  const globalStyles = generateGlobalStyles(colors, fonts);
  await fs.writeFile(path.join(outputPath, 'src/styles/globals.css'), globalStyles);

  // Generate additional files (vite config, tsconfig, etc.)
  await generateViteConfig(outputPath);
  await generateTypeScriptConfig(outputPath);
  await generateReadme(outputPath, name, aesthetic, colors, fonts, tier, stack);
  await generateGitignore(outputPath);

  return outputPath;
}

async function generateViteConfig(outputPath) {
  const config = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
})
`;
  await fs.writeFile(path.join(outputPath, 'vite.config.ts'), config);
}

async function generateTypeScriptConfig(outputPath) {
  const config = {
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      strict: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'react-jsx',
    },
    include: ['src'],
    references: [{ path: './tsconfig.node.json' }],
  };
  await fs.writeJSON(path.join(outputPath, 'tsconfig.json'), config, { spaces: 2 });
}

async function generateReadme(outputPath, name, aesthetic, colors, fonts, tier, stack) {
  const readme = `# ${name}

${aesthetic.toUpperCase()} | Tier: ${tier.toUpperCase()} | Stack: ${stack}

## Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit: http://localhost:5173

## Design System

**Aesthetic:** ${aesthetic}
**Animation Tier:** ${tier}
**Colors:** ${colors.join(', ')}
**Fonts:** ${fonts.join(', ')}

## Project Structure

\`\`\`
src/
  components/     # Reusable UI components
  pages/          # Route pages
  hooks/          # Custom hooks (animations, scroll, etc.)
  styles/         # Global styles & design tokens
  App.tsx         # Main app component
\`\`\`

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build

## Performance Targets

- FCP: < 1.5s
- LCP: < 2.5s
- CLS: < 0.1
- Lighthouse: >= 90

## Built with

- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## License

MIT
`;
  await fs.writeFile(path.join(outputPath, 'README.md'), readme);
}

async function generateGitignore(outputPath) {
  const gitignore = `node_modules/
dist/
.env
.env.local
*.log
.DS_Store
`;
  await fs.writeFile(path.join(outputPath, '.gitignore'), gitignore);
}

module.exports = { generateWebsite };
```

### 4b. Create template files (src/templates/)

```bash
mkdir -p src/templates
```

**File: `src/templates/package.json.template.js`**
```javascript
function generatePackageJson(name, stack) {
  const basePackage = {
    name: name.toLowerCase().replace(/\s+/g, '-'),
    version: '1.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'tsc && vite build',
      preview: 'vite preview',
    },
    dependencies: {
      react: '^18.3.1',
      'react-dom': '^18.3.1',
      'framer-motion': '^12.38.0',
      'lucide-react': '^0.346.0',
    },
    devDependencies: {
      '@types/react': '^18.3.1',
      '@types/react-dom': '^18.3.0',
      '@vitejs/plugin-react': '^4.2.0',
      typescript: '^5.3.3',
      vite: '^5.0.7',
      tailwindcss: '^3.4.1',
      autoprefixer: '^10.4.16',
      'postcss': '^8.4.31',
    },
  };

  if (stack.includes('three')) {
    basePackage.dependencies['three'] = '^r156';
  }

  if (stack.includes('nextjs')) {
    basePackage.dependencies['next'] = '^14.0.0';
    delete basePackage.dependencies.vite;
    basePackage.devDependencies.vite = undefined;
  }

  return basePackage;
}

module.exports = { generatePackageJson };
```

---

## Step 5: Create README for Project

### 5a. Update main README.md

```bash
cat > README.md << 'EOF'
# Interactive Design Planning

**Interactive questionnaire → Personalized implementation plans for interactive websites**

## What It Does

Instead of generic templates, this tool asks you 6 key questions and generates a fully customized implementation plan based on your specific project.

### The Questionnaire (6 Questions)

1. **Website type** - Portfolio, agency, SaaS, museum, e-commerce, Web3, luxury
2. **Primary goal** - Showcase work, explain benefits, tell story, capture leads, etc.
3. **Animation style** - Minimal, moderate, heavy 3D, or cinema-grade ⭐
4. **Color aesthetic** - Dark+vibrant, light+professional, monochromatic, playful, luxury
5. **Target audience** - Creatives, enterprises, consumers, investors, specialists, community
6. **Key feature** - Showcase work, explain benefits, interactive, video, navigation, forms

### Output: 3 Personalized Files

- **Implementation Plan** (customized design system, sections, components)
- **Code Examples** (patterns for your animation tier)
- **Master Prompt** (ready to execute in Claude Design)

## Installation & Usage

### Using npx (Recommended)

```bash
npx interactive-design-planning
```

Then answer 6 interactive questions, get personalized plan!

### Global Installation

```bash
npm install -g interactive-design-planning

# Then run from anywhere
interactive-design-planning
```

## How It Works

```
$ npx interactive-design-planning

🎨 Interactive Design Planning

? What type of website?
  ◯ Portfolio/Creative Showcase
  ◯ Agency
  ◯ SaaS/Product
  [etc.]

? What's your primary goal?
  ◯ Showcase work/portfolio
  ◯ Explain product benefits
  [etc.]

? What animation style appeals to you?
  ◯ Minimal & Professional
  ◯ Moderate & Engaging
  ◯ Heavy 3D & Interactive
  ◯ Maximum Interactive (Cinema-Grade)

[3 more questions...]

✅ Personalized plan created!

📄 Output Files:
  1. your-project_IMPLEMENTATION_PLAN.md (customized to your answers)
  2. your-project_CODE_EXAMPLES.md (patterns for your animation tier)
  3. your-project_MASTER_PROMPT.md (ready for Claude Design)
```

## Examples of Personalization

### Example 1: Creative Director (Cinema-Grade)

**Answers:**
- Type: Portfolio
- Goal: Showcase work
- Animation: **Maximum Cinema-Grade** ⭐
- Colors: Dark + Vibrant
- Audience: Creative professionals
- Feature: Showcase work

**Output:**
- Dark theme (#0C0C0C), magenta accents
- Sticky-stacking cards, 3D parallax, particles
- React + Framer Motion + Three.js
- 10-day timeline

### Example 2: SaaS Landing (Minimal)

**Answers:**
- Type: SaaS/Product
- Goal: Explain benefits
- Animation: **Minimal & Professional**
- Colors: Light + Professional
- Audience: Enterprise/B2B
- Feature: Explain benefits

**Output:**
- White background, blue accents
- Feature grid, light animations
- React + Tailwind CSS
- 5-day timeline

## What You Get

✅ Personalized implementation plan (not generic)  
✅ Design system matched to your project  
✅ Animation patterns for your tier (minimal → cinema-grade)  
✅ Component checklist (critical/important/optional)  
✅ 5-tier roadmap (foundation → polish)  
✅ Master prompt ready for Claude Design  
✅ Performance targets and accessibility checklist  
✅ Mobile-first responsive strategy  

## Animation Tiers Explained

- **Minimal & Professional:** Clean fades, subtle hovers (SaaS, corporate)
- **Moderate & Engaging:** Scroll reveals, parallax, ripple effects (products, brands)
- **Heavy 3D & Interactive:** Mouse tracking, 3D transforms, sticky cards (portfolios, luxury)
- **Maximum Cinema-Grade:** Video crossfades, SVG animations, particles, advanced effects (premium studios)

## Architecture

Generated projects include:

```
src/
  components/       # Button, Card, Input, Navbar, Hero, etc.
  pages/           # Home, About, Projects, Contact, etc.
  hooks/           # useScroll, useInView, animations
  styles/
    globals.css    # Design tokens, animations, resets
  App.tsx
  main.tsx

public/            # Static assets
tailwind.config.js # Design system config
vite.config.ts     # Build config
tsconfig.json      # TypeScript config
```

## Performance

Every generated website targets:

- **FCP:** < 1.5s
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **TTI:** < 3.5s
- **Lighthouse:** >= 90

## Contributing

Contributions welcome! Please open an issue or submit a PR.

## License

MIT

## Support

[GitHub Issues](https://github.com/[YOUR-USERNAME]/create-interactive-website/issues)

---

**Made with ❤️ for creative builders**
EOF
```

---

## Step 6: Push to GitHub

```bash
git add .
git commit -m "Initial commit: create-interactive-website CLI tool"
git push -u origin main
```

---

## Step 7: Publish to NPM

### 7a. Create NPM account (if you don't have one)

```
Go to: https://www.npmjs.com/signup
Create account and verify email
```

### 7b. Login to NPM

```bash
npm login
# Enter your NPM username, password, and email
```

### 7c. Publish

```bash
npm publish
```

**Expected output:**
```
npm notice 📦  create-interactive-website@1.0.0
npm notice === Tarball Details ===
npm notice name:          create-interactive-website
npm notice version:       1.0.0
npm notice ...
npm notice published
```

### 7d. Verify publication

```bash
npm info create-interactive-website
```

---

## Step 8: Test the NPX Command

Open a new terminal (outside your project):

```bash
npx interactive-design-planning
```

**Follow the questionnaire:**
1. Select "Portfolio/Creative Showcase"
2. Select "Showcase work"
3. Select "Maximum Interactive (Cinema-Grade)" (or try another tier!)
4. Select "Dark + Vibrant Accents"
5. Select "Creative professionals"
6. Select "Showcase work"

**You should see:**
```
✅ Personalized plan created!

📄 Output Files:
  1. project_IMPLEMENTATION_PLAN.md
  2. project_CODE_EXAMPLES.md
  3. project_MASTER_PROMPT.md
```

**It should work!** 🎉

---

## Updating Your Package

When you make changes:

1. Update version in `package.json` (semantic versioning: major.minor.patch)
2. Push to GitHub
3. Publish to NPM:

```bash
npm publish
```

---

## Complete File Structure

```
create-interactive-website/
  bin/
    cli.js
  src/
    generator.js
    templates/
      package.json.template.js
      tailwind.template.js
      app.template.js
      styles.template.js
  package.json
  README.md
  LICENSE
  .gitignore
  .github/
    workflows/          # Optional: CI/CD
```

---

## Useful Commands

```bash
# Test locally before publishing
npm link

# Unlink local testing
npm unlink

# Bump version
npm version patch      # 1.0.0 → 1.0.1
npm version minor      # 1.0.0 → 1.1.0
npm version major      # 1.0.0 → 2.0.0

# View package
npm info create-interactive-website
npm view create-interactive-website versions

# Update your local package
npm update -g create-interactive-website
```

---

## Success! 🚀

Users can now install and use your skill:

```bash
npx interactive-design-planning
```

Answer 6 interactive questions:
- Website type
- Primary goal
- Animation style (minimal → cinema-grade)
- Color aesthetic
- Target audience
- Key feature

**Get:** Complete personalized implementation plan + code examples + master prompt!

No more generic templates. Just tailored plans for their specific project.

---

## Step 9: Test with Multiple Agents

Before final release, test with all supported agents:

### Test 1: NPX Questionnaire

```bash
# Test global installation
npm install -g interactive-design-planning

# Test command opens questionnaire
interactive-design-planning

# Follow prompts (answer 6 questions)
# Verify output files created
ls -la [project-name]_*.md

# Check files contain:
# - Implementation plan with design system
# - Code examples
# - Master prompt for Claude Design
```

### Test 2: Claude Code

```bash
# In Claude Code CLI
/skill install interactive-design-planning

# Test command opens questionnaire
/create-interactive-website

# Answer 6 questions interactively
# Verify: Three files generated
```

### Test 3: As Library (Programmatic Use)

```javascript
// test.js
const { createPlan } = require('interactive-design-planning');

async function test() {
  const result = await createPlan({
    answers: {
      websiteType: 'Portfolio/Creative Showcase',
      primaryGoal: 'Showcase work',
      animationStyle: 'Maximum Interactive (Cinema-Grade)',
      colorAesthetic: 'Dark + Vibrant Accents',
      targetAudience: 'Creative professionals',
      keyFeature: 'Showcase work'
    },
    outputDir: './test-output'
  });
  
  console.log('Personalized plan created:', result);
}

test();
```

### Test 4: Copilot CLI Compatibility

```bash
# Ensure bin/cli.js works standalone
node bin/cli.js

# Should prompt for questionnaire answers
# Then output three files
```

### Test Verification Checklist

- [ ] NPX installation works globally
- [ ] Questionnaire displays all 6 questions
- [ ] Interactive prompts work in Claude Code
- [ ] Command produces 3 output files
- [ ] Implementation plan is customized (reflects questionnaire answers)
- [ ] Code examples match animation tier
- [ ] Master prompt is executable
- [ ] Output files are readable
- [ ] Animation tier affects tech stack
- [ ] Color aesthetic reflected in design system
- [ ] All error messages are clear
- [ ] Help text works (`--help`)
- [ ] Version flag works (`--version`)

---

## Step 10: Create Agent-Specific Documentation

For each agent, create a guide:

**File: `docs/CLAUDE_CODE.md`**
```markdown
# Using with Claude Code

## Installation
\`\`\`bash
/skill install interactive-design-planning
\`\`\`

## Usage
\`\`\`
/create-interactive-website "Your website description"
/create-interactive-website "Your website" --exec
\`\`\`

## Output
- project_IMPLEMENTATION_PLAN.md
- project_CODE_EXAMPLES.md
- project_MASTER_PROMPT.md
```

**File: `docs/COPILOT_CLI.md`**
```markdown
# Using with Copilot CLI

## Installation
\`\`\`bash
skill install interactive-design-planning
\`\`\`

## Usage
\`\`\`bash
create-interactive-website "Your website description"
create-interactive-website "Your website" --exec
\`\`\`

[Same output as Claude Code]
```

**File: `docs/CODY.md`**
```markdown
# Using with Cody (Sourcegraph)

Add to .vscode/settings.json:
\`\`\`json
{
  "cody.skills": ["interactive-design-planning"]
}
\`\`\`

Then use /create-interactive-website in editor...
```

---

## Step 11: Create Comprehensive README

Update main README.md with:
- What the skill does (planning, not building)
- Installation methods (NPX, GitHub clone, manual)
- Command format (simple, natural language)
- 5 real examples
- Prerequisites (ui-ux-pro-max, frontend-design)
- Output files explanation
- Multi-agent support
- Troubleshooting section
- Performance targets
- License & credits

---

## Final Checklist Before Publishing

- [ ] README.md explains questionnaire approach
- [ ] All documentation files created
- [ ] Questionnaire questions finalized (6 questions)
- [ ] Animation tiers documented (minimal → cinema-grade)
- [ ] Agent compatibility tested
- [ ] NPM package.json has correct metadata (includes inquirer)
- [ ] bin/cli.js shows questionnaire prompts
- [ ] All dependencies are listed
- [ ] .gitignore is set up
- [ ] LICENSE file added (MIT recommended)
- [ ] GitHub repo is public
- [ ] All code is committed
- [ ] NPM publish works
- [ ] npx command works globally
- [ ] Questionnaire opens interactively
- [ ] All 3 output files generate correctly (customized per answers)
- [ ] Error messages are user-friendly
- [ ] QUESTIONNAIRE.md documents all 6 questions

---

## Success! 🚀

Your skill is now published and usable across all agents:

**Claude Code:**
```bash
/create-interactive-website
# Questionnaire opens → answer 6 questions → get personalized plan
```

**Copilot CLI:**
```bash
create-interactive-website
# Questionnaire opens → answer 6 questions → get personalized plan
```

**NPX (anyone):**
```bash
npx interactive-design-planning
# Questionnaire opens → answer 6 questions → get personalized plan
```

**As Library:**
```javascript
const { createPlan } = require('interactive-design-planning');
const plan = await createPlan({
  answers: { websiteType, primaryGoal, animationStyle, ... }
});
```

**All output:** Three beautiful, personalized documents tailored to their specific project!
