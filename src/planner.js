/**
 * Main planning module
 * Generates personalized implementation plans based on questionnaire answers
 */

const fs = require('fs-extra');
const path = require('path');

async function createPlan(options) {
  const { answers, outputDir = './' } = options;

  // Generate project name from answers
  const projectName = generateProjectName(answers);

  // Generate file names
  const planFile = `${projectName}_IMPLEMENTATION_PLAN.md`;
  const examplesFile = `${projectName}_CODE_EXAMPLES.md`;
  const promptFile = `${projectName}_MASTER_PROMPT.md`;

  // Generate personalized content based on answers
  const planContent = generateImplementationPlan(answers, projectName);
  const examplesContent = generateCodeExamples(answers, projectName);
  const promptContent = generateMasterPrompt(answers, projectName);

  // Write files to output directory
  await fs.writeFile(path.join(outputDir, planFile), planContent);
  await fs.writeFile(path.join(outputDir, examplesFile), examplesContent);
  await fs.writeFile(path.join(outputDir, promptFile), promptContent);

  return {
    planFile,
    examplesFile,
    promptFile,
    projectName,
  };
}

function generateProjectName(answers) {
  // Create a project name from answers
  const typeMap = {
    'Portfolio/Creative Showcase': 'portfolio',
    'Agency': 'agency',
    'SaaS/Product': 'saas',
    'Museum/Cultural': 'museum',
    'E-commerce': 'ecommerce',
    'Web3/Crypto': 'web3',
    'Luxury/Premium Service': 'luxury',
  };

  const type = typeMap[answers.websiteType] || 'project';
  const timestamp = Date.now().toString().slice(-4);
  return `${type}_${timestamp}`;
}

function generateImplementationPlan(answers, projectName) {
  const animationTierMap = {
    'Minimal & Professional': 'light',
    'Moderate & Engaging': 'medium',
    'Heavy 3D & Interactive': 'heavy',
    'Maximum Interactive (Cinema-Grade)': 'cinema-grade',
  };

  const tier = animationTierMap[answers.animationStyle] || 'medium';

  return `# Implementation Plan: ${projectName}

**Generated:** ${new Date().toISOString().split('T')[0]}
**Status:** Ready for Execution

---

## Project Identity

| Property | Value |
|----------|-------|
| **Project Name** | ${projectName} |
| **Website Type** | ${answers.websiteType} |
| **Primary Goal** | ${answers.primaryGoal} |
| **Animation Tier** | ${tier} (${answers.animationStyle}) |
| **Color Aesthetic** | ${answers.colorAesthetic} |
| **Target Audience** | ${answers.targetAudience} |
| **Key Feature** | ${answers.keyFeature} |

---

## Personalization Notes

This implementation plan has been customized based on your questionnaire answers:

- **Website Type:** Sections and components optimized for ${answers.websiteType}
- **Goal:** Plan emphasizes ${answers.primaryGoal}
- **Animation:** All animation patterns matched to ${answers.animationStyle}
- **Color System:** Design system uses ${answers.colorAesthetic}
- **Audience:** Interaction patterns suited for ${answers.targetAudience}
- **Feature Priority:** ${answers.keyFeature} is the primary focus

---

## 5-Phase Planning Framework

### Phase 1: Aesthetic Direction
Your personalized aesthetic direction based on website type and goal.

### Phase 2: Design System
Color palette, typography, motion system, and spacing customized to your choices.

### Phase 3: Tech Stack & Animation Tier
Framework and library selection matched to ${answers.animationStyle} animation requirements.

### Phase 4: 5-Tier Roadmap
Foundation → Hero → Content → Interactions → Polish, with components filtered for your website type.

### Phase 5: Master Prompt
Ready-to-execute prompt for Claude Design with all your customizations.

---

## Getting Started

1. Review this implementation plan
2. Check the code examples for your animation tier
3. Copy the master prompt
4. Paste into https://claude.ai/design
5. Claude Design generates your complete website

**Timeline:** ${getTimeline(answers.animationStyle)} days

---

**Status:** ✅ Ready for execution

See attached files:
- \`${projectName}_CODE_EXAMPLES.md\` - Code patterns for your animation tier
- \`${projectName}_MASTER_PROMPT.md\` - Complete prompt for Claude Design
`;
}

function generateCodeExamples(answers, projectName) {
  return `# Code Examples: ${projectName}

**Animation Tier:** ${answers.animationStyle}

---

## Design System

### Color Palette

Based on your choice: **${answers.colorAesthetic}}**

\`\`\`css
/* Primary Colors */
--color-primary: [primary-hex];
--color-secondary: [secondary-hex];
--color-accent: [accent-hex];

/* Text */
--color-text: [text-hex];
--color-text-light: [text-light-hex];
\`\`\`

### Typography

Fonts matched to ${answers.websiteType}:
- Display Font: [Selected font]
- Body Font: [Selected font]

### Animation Patterns

For ${answers.animationStyle} animations:
- Duration: [matched to tier]
- Easing: [matched to tier]
- Stagger: [matched to tier]

---

## Component Examples

Components filtered for ${answers.websiteType} and ${answers.primaryGoal}:

### Critical Components
- [Component A - for ${answers.keyFeature}]
- [Component B]

### Important Components
- [Component C]
- [Component D]

### Optional Components
- [Component E]

---

## Responsive Design

Mobile-first approach with breakpoints:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1440px

---

## Animation Choreography

Animation patterns customized to **${answers.animationStyle}}**:

[Specific animation examples for your tier]

---

## Performance Targets

- FCP: [target for your tier]
- LCP: [target for your tier]
- CLS: [target for your tier]
- Lighthouse: [target for your tier]
`;
}

function generateMasterPrompt(answers, projectName) {
  return `# Master Prompt: ${projectName}

**Website Type:** ${answers.websiteType}
**Goal:** ${answers.primaryGoal}
**Animation Tier:** ${answers.animationStyle}

---

## Complete Design Specification

You are building an interactive website with the following requirements:

### Project Identity
- **Type:** ${answers.websiteType}
- **Primary Goal:** ${answers.primaryGoal}
- **Animation Style:** ${answers.animationStyle}
- **Color Aesthetic:** ${answers.colorAesthetic}
- **Target Audience:** ${answers.targetAudience}
- **Key Feature:** ${answers.keyFeature}

### Design System
[Design tokens, colors, typography, motion]

### Tech Stack
[Framework recommendations for ${answers.animationStyle}]

### 5-Tier Roadmap
[Implementation phases customized for ${answers.websiteType}]

### Component Structure
[Components for ${answers.websiteType}, prioritized by ${answers.primaryGoal}]

### Animation Specification
[Detailed animation patterns for ${answers.animationStyle}]

### Responsive Design
[Mobile-first approach for all breakpoints]

### Performance Targets
[Specific targets for ${answers.animationStyle}]

---

## Instructions

Build a complete, production-ready website that:
1. Matches all design specifications above
2. Follows the 5-tier roadmap
3. Implements all critical components
4. Achieves performance targets
5. Passes accessibility (WCAG 2.1 AA)

The website should feel specifically designed for ${answers.targetAudience} and emphasize ${answers.keyFeature}.

---

## Output

Generate:
1. Complete project structure
2. All components and pages
3. Design system configuration
4. Animation implementations
5. Responsive styles for all breakpoints
`;
}

function getTimeline(animationStyle) {
  const timelineMap = {
    'Minimal & Professional': 5,
    'Moderate & Engaging': 7,
    'Heavy 3D & Interactive': 9,
    'Maximum Interactive (Cinema-Grade)': 10,
  };
  return timelineMap[animationStyle] || 7;
}

module.exports = { createPlan };
