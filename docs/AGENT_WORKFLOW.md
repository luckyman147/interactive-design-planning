# Agent Workflow Guide

How different agents and platforms use the interactive-design-planning skill.

---

## Universal Workflow (All Agents)

```
┌─────────────────────────────────────────────────────┐
│ 1. User runs: npx interactive-design-planning       │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ 2. Questionnaire opens (6 interactive questions)    │
│    - Website type                                    │
│    - Primary goal                                    │
│    - Animation style                                 │
│    - Color aesthetic                                 │
│    - Target audience                                 │
│    - Key feature                                     │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ 3. User answers all 6 questions                     │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ 4. System generates 3 files:                        │
│    - IMPLEMENTATION_PLAN.md (customized)            │
│    - CODE_EXAMPLES.md (for your tier)               │
│    - MASTER_PROMPT.md (ready for Claude Design)     │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ 5. User copies MASTER_PROMPT.md                     │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ 6. User pastes into Claude Design                   │
│    https://claude.ai/design                         │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ 7. Claude Design generates complete website         │
│    based on your personalized specification         │
└─────────────────────────────────────────────────────┘
```

---

## Claude Code Workflow

### Step 1: Install Skill

```bash
/skill install interactive-design-planning
```

### Step 2: Run Command

```bash
/create-interactive-website
```

### Step 3: Answer Questionnaire

Interactive prompts appear in Claude Code:
```
? What type of website?
  ◯ Portfolio/Creative Showcase
  ◯ Agency
  ...
```

### Step 4: Review Files

Files are generated in your working directory:
```bash
# View the plan
cat [project]_IMPLEMENTATION_PLAN.md

# View code examples
cat [project]_CODE_EXAMPLES.md

# Copy the prompt
cat [project]_MASTER_PROMPT.md
```

### Step 5: Build in Claude Design

1. Go to https://claude.ai/design
2. Paste the master prompt
3. Claude Design builds your website

---

## Copilot CLI Workflow

### Step 1: Global Install

```bash
npm install -g interactive-design-planning
```

### Step 2: Run Command

```bash
# Short form (if installed globally)
create-interactive-website

# Or use npx
npx interactive-design-planning
```

### Step 3: Answer Questionnaire

Terminal prompts appear:
```
🎨 Interactive Design Planning

? What type of website?
```

### Step 4: Files Generated

Output appears in current directory:
```
portfolio_1234_IMPLEMENTATION_PLAN.md
portfolio_1234_CODE_EXAMPLES.md
portfolio_1234_MASTER_PROMPT.md
```

### Step 5: Copy & Build

```bash
# Copy to clipboard (macOS)
cat portfolio_1234_MASTER_PROMPT.md | pbcopy

# Then paste into Claude Design
```

---

## Cody (Sourcegraph) Workflow

### Step 1: Configure in VS Code

Add to `.vscode/settings.json`:
```json
{
  "cody.skills": [
    "interactive-design-planning"
  ]
}
```

### Step 2: Run Skill

Option A: Command Palette
```
Cmd+Shift+P → Cody: Run Skill → interactive-design-planning
```

Option B: Chat
```
@interactive-design-planning questionnaire
```

### Step 3: Answer in Dialog

VS Code shows 6 interactive questions:
```
What type of website?
□ Portfolio/Creative Showcase
□ Agency
...
```

### Step 4: Files in Workspace

Files appear in your VS Code workspace:
```
[project]_IMPLEMENTATION_PLAN.md
[project]_CODE_EXAMPLES.md
[project]_MASTER_PROMPT.md
```

### Step 5: Open in Claude Design

1. Open master prompt file in VS Code
2. Select all (Cmd+A)
3. Copy (Cmd+C)
4. Go to https://claude.ai/design
5. Paste and build

---

## OpenRouter Workflow

### Step 1: Install Locally

```bash
git clone https://github.com/luckyman147/interactive-design-planning.git
cd interactive-design-planning
npm install
```

### Step 2: Generate Plan

```bash
npm run dev
# or
node bin/cli.js
```

### Step 3: Get Master Prompt

The master prompt is output to:
```
[project]_MASTER_PROMPT.md
```

### Step 4: Use with OpenRouter API

```javascript
const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'anthropic/claude-3-opus',
    messages: [{
      role: 'user',
      content: masterPrompt // From [project]_MASTER_PROMPT.md
    }]
  })
});

const website = await response.json();
```

---

## Using as NPM Library

### Step 1: Install

```bash
npm install interactive-design-planning
```

### Step 2: Import

```javascript
const { createPlan } = require('interactive-design-planning');
const { questionnaire } = require('interactive-design-planning');
```

### Step 3: Get User Answers

```javascript
// Option A: Use questionnaire
const answers = await questionnaire();

// Option B: Provide answers programmatically
const answers = {
  websiteType: 'Portfolio/Creative Showcase',
  primaryGoal: 'Showcase work',
  animationStyle: 'Maximum Interactive (Cinema-Grade)',
  colorAesthetic: 'Dark + Vibrant Accents',
  targetAudience: 'Creative professionals',
  keyFeature: 'Showcase work'
};
```

### Step 4: Generate Plan

```javascript
const result = await createPlan({
  answers,
  outputDir: './my-plans'
});

console.log(result);
// Output:
// {
//   planFile: "portfolio_1234_IMPLEMENTATION_PLAN.md",
//   examplesFile: "portfolio_1234_CODE_EXAMPLES.md",
//   promptFile: "portfolio_1234_MASTER_PROMPT.md",
//   projectName: "portfolio_1234"
// }
```

### Step 5: Use Generated Files

```javascript
const fs = require('fs');

// Read the master prompt
const masterPrompt = fs.readFileSync(
  `${result.outputDir}/${result.promptFile}`,
  'utf-8'
);

// Send to your LLM API
const response = await callYourLLM(masterPrompt);
```

---

## Agent Integration Example

### For Claude (API)

```javascript
const Anthropic = require('@anthropic-ai/sdk');
const { createPlan } = require('interactive-design-planning');

const client = new Anthropic();

// 1. Get personalized plan
const answers = {
  websiteType: 'SaaS/Product',
  primaryGoal: 'Explain product benefits',
  animationStyle: 'Minimal & Professional',
  colorAesthetic: 'Light + Professional',
  targetAudience: 'Enterprise/B2B',
  keyFeature: 'Explain benefits'
};

const plan = await createPlan({ answers });

// 2. Read master prompt
const masterPrompt = fs.readFileSync(plan.promptFile, 'utf-8');

// 3. Send to Claude
const response = await client.messages.create({
  model: 'claude-3-opus-20240229',
  max_tokens: 4096,
  messages: [{
    role: 'user',
    content: masterPrompt
  }]
});

const generatedWebsite = response.content[0].text;
```

---

## Best Practices

### 1. Review Before Building
- Always review the implementation plan first
- Check if colors, fonts, animations match your vision
- Edit files if needed before building

### 2. Understand Your Answers
- Each questionnaire answer shapes the entire plan
- Animation choice most impacts tech stack
- Website type determines section layout

### 3. Multiple Iterations
- Run questionnaire multiple times with different answers
- Compare outputs to find the best fit
- Use the best one for building

### 4. Customize Master Prompt
- Master prompt is fully editable
- Add specific requirements before passing to Claude Design
- Include brand guidelines, target metrics, etc.

### 5. Performance Targets
- Different animation tiers have different performance targets
- Review targets in implementation plan
- Use code examples for your tier to stay on budget

---

## Troubleshooting by Agent

| Agent | Problem | Solution |
|-------|---------|----------|
| Claude Code | Skill not found | `/skill install interactive-design-planning` |
| Copilot CLI | Command not found | `npm install -g interactive-design-planning` |
| Cody | Files not generating | Reload VS Code, check .vscode/settings.json |
| OpenRouter | No master prompt | Check file was written to disk |
| Custom Agent | Missing module | `npm install interactive-design-planning` |

---

## Flow Summary

Every agent follows this flow:

```
1. User triggers tool
   ↓
2. Questionnaire runs
   ↓
3. User answers 6 questions
   ↓
4. Files generate (customized to answers)
   ↓
5. User copies master prompt
   ↓
6. User pastes into Claude Design
   ↓
7. Website builds automatically
```

The **tool** varies by agent, but the **flow** is identical across all platforms.

---

For more details, see:
- [COMMAND_REFERENCE.md](./COMMAND_REFERENCE.md) - All commands explained
- [CLAUDE_CODE.md](./CLAUDE_CODE.md) - Claude Code specific
- [COPILOT_CLI.md](./COPILOT_CLI.md) - Copilot CLI specific
- [CODY.md](./CODY.md) - Cody (Sourcegraph) specific
