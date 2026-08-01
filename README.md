# interactive-design-planning

**Universal AI skill for creating better implementation plans for interactive 3D/2D websites.**

Works with ANY agent platform or IDE. Instead of generic templates, this skill uses an **interactive questionnaire** to understand what you actually want, then generates a **fully personalized implementation plan** tailored to your specific project.

---

## What Makes This Different

❌ **Old way:** Generic template + fill-in-the-blanks = you still have to make decisions  
✅ **New way:** Answer 6 questions → Get personalized implementation plan ready to execute

The questionnaire asks about:
1. **Website type** (portfolio, SaaS, agency, museum, e-commerce, Web3, luxury)
2. **Primary goal** (showcase work, explain benefits, tell story, capture leads, etc.)
3. **Animation preference** (minimal, moderate, heavy 3D, or cinema-grade)
4. **Color aesthetic** (dark+vibrant, light+professional, monochromatic, playful, luxury)
5. **Target audience** (creatives, enterprises, consumers, investors, specialists, community)
6. **Key feature** (showcase, explain, interactive, video, navigation, forms)

**Output:** 
- Customized design system (colors, fonts, motion, spacing)
- Personalized 5-tier roadmap (foundation → polish)
- Production-ready master prompt to build with

---

## Features

✨ **What This Skill Does**

- ✅ **Interactive Questionnaire** (6 targeted questions)
- ✅ **Automatic Personalization** (customizes every section based on answers)
- ✅ **Creates Structured 5-Phase Implementation Plans** (unique to your project)
- ✅ **Generates Production-Ready Code Examples** (animation patterns, components)
- ✅ **Produces Ready-to-Execute Master Prompts** (works with any LLM platform)
- ✅ **Includes Performance Budgets & Accessibility Checklists**
- ✅ **Supports 4 Animation Tiers** (minimal → cinema-grade)
- ✅ **Handles 10+ Website Types** (portfolio, SaaS, e-commerce, museum, agency, Web3, luxury)

🎯 **Perfect For**

- Creative directors planning portfolio websites
- SaaS teams designing data dashboards
- E-commerce sites needing interactive showcases
- Agencies building client websites
- Developers who want structured design specs before coding

---

## Installation

### Method 1: NPX Skill (Recommended - Works Everywhere)

```bash
npx skill install create-interactive-website
```

Then use with ANY agent:
```bash
npx skill create-interactive-website "Your website description"
```

Or via agent-specific syntax (see below).

---

### Method 2: GitHub Clone

```bash
# Clone the repository
git clone https://github.com/iyed/interactive-design-planning.git

# Install globally
npm install -g ./interactive-design-planning

# Or use locally
cd interactive-design-planning
npm install
npm run dev
```

---

### Method 3: Manual Setup

1. Download the skill files from GitHub
2. Extract to your skills directory:
   ```bash
   ~/.local/share/skill/create-interactive-website/
   # or
   %APPDATA%\Skill\create-interactive-website\  # Windows
   ```
3. Install dependencies:
   ```bash
   cd create-interactive-website
   npm install
   ```
4. Verify installation:
   ```bash
   npx skill list
   # or
   skill list
   ```

---

## Quick Start

### Step 1: Start the Questionnaire

**Universal command (works everywhere):**
```bash
npx skill create-interactive-website
```

**Or with agent-specific syntax:**
```bash
# Claude Code
/create-interactive-website

# Cursor / Continue.dev
npx skill create-interactive-website

# JetBrains IDE
npx skill create-interactive-website
```

The skill will ask you 6 questions interactively:

```
? What type of website?
  ◯ Portfolio/Creative Showcase
  ◯ Agency
  ◯ SaaS/Product
  ◯ Museum/Cultural
  ◯ E-commerce
  ◯ Web3/Crypto
  ◯ Luxury/Premium Service

? What's your primary goal?
  ◯ Showcase work/portfolio
  ◯ Explain product benefits
  ◯ Tell a story/narrative
  ◯ Capture leads/sales
  [etc.]

? What animation style appeals to you?
  ◯ Minimal & Professional (clean fades, subtle hover effects)
  ◯ Moderate & Engaging (scroll reveals, parallax)
  ◯ Heavy 3D & Interactive (mouse tracking, 3D transforms, sticky cards)
  ◯ Maximum Interactive (cinema-grade: SVG animations, particle effects)

[3 more questions about color, audience, and key feature]
```

### Step 2: Get Personalized Plan

**Output:**
```
✅ [your-project]_IMPLEMENTATION_PLAN.md (customized to your answers)
✅ [your-project]_CODE_EXAMPLES.md (patterns for your animation tier)
✅ [your-project]_MASTER_PROMPT.md (ready to build with)

Plan created! Review the documents.
When ready to build, paste the master prompt into:
  - Claude Design
  - Stitch
  - OpenRouter
  - OpenAI Codex
  - Cursor's chat
  - Any LLM API
```

Example personalization:
- **If you answered:** "Portfolio" + "Show work" + "Maximum cinema-grade" → sticky-stacking cards, 3D parallax, particle effects
- **If you answered:** "SaaS" + "Explain benefits" + "Minimal professional" → feature grid, light animations, trust signals
- **If you answered:** "Agency" + "Showcase work" + "Heavy interactive" → case study videos, scroll animations, elegant spacing

---

### Step 3: Execute Immediately (Optional)

If you want to build the website right away:

```bash
npx skill create-interactive-website --exec
```

**Output:**
```
✅ Plan documents (customized to your answers)
🚀 Website built!

Project: [your-project]/
├── package.json
├── src/
├── tailwind.config.js
└── [all files generated based on your answers]

Next: npm install && npm run dev
```

**Note:** The `--exec` flag works with any platform that can execute the master prompt (Claude Design, Stitch, OpenRouter, etc.)

---

## How It Works

### The Questionnaire-Driven Process

```
User Starts Skill
       ↓
Questionnaire Flow:
  Q1: Website type?
  Q2: Primary goal?
  Q3: Animation preference? ← cinema-grade, heavy, moderate, or minimal
  Q4: Color aesthetic?
  Q5: Target audience?
  Q6: Key feature?
       ↓
System Analyzes Answers
       ↓
Generates Personalized Plan:
  - Custom design system (colors, fonts, motion)
  - Type-specific sections
  - Tailored animations & components
  - Personalized tech stack recommendation
       ↓
Outputs 3 Files:
  1. Implementation plan (customized to your answers)
  2. Code examples (patterns for your animation tier)
  3. Master prompt (ready to build with)
```

### The 5-Phase Planning Process (Inside Each Plan)

Each personalized plan includes:

```
PHASE 1: Aesthetic Direction
         (customized to website type + goal)
         ↓
PHASE 2: Design System
         (colors, typography, motion, spacing matched to your aesthetic choice)
         ↓
PHASE 3: Tech Stack Selection
         (React, Framer Motion, Three.js - chosen based on animation tier)
         ↓
PHASE 4: 5-Tier Roadmap
         (foundation → hero → content → interactions → polish)
         (components filtered for your type + goal)
         ↓
PHASE 5: Master Prompt
         (all details customized to your answers, ready to paste into Claude Design)
```

Each phase produces:
- **Design decisions** tailored to your project
- **Code examples** showing implementation patterns for your animation tier
- **Performance targets** (FCP, LCP, CLS, Lighthouse)
- **Accessibility checklist** (WCAG 2.1 AA)
- **Type-specific components** (critical/important/optional for your type)

---

## Supported Agent Types

This skill works with ANY agent or IDE. Choose your platform:

### ✅ Universal (All Platforms)

```bash
npx skill create-interactive-website "Your website description"
```

This works everywhere because it's platform-agnostic.

---

### ✅ IDE-Integrated Agents

**Claude Code** (Anthropic CLI)
```bash
npx skill create-interactive-website "description"
# or
/create-interactive-website "description"
```

**Cursor** (VSCode-based IDE)
```bash
npx skill create-interactive-website "description"
# Outputs files visible in project
```

**Continue.dev** (VSCode extension)
```bash
npx skill create-interactive-website "description"
# Runs as extensible skill
```

**JetBrains AI** (IntelliJ, PyCharm, WebStorm)
```bash
npx skill create-interactive-website "description"
# Integrates with IDE tools
```

---

### ✅ API-Based Agents (OpenRouter, Codex, etc.)

**OpenRouter** (Multi-model API)
```javascript
// Use master prompt from skill output
const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  headers: { Authorization: `Bearer ${OPENROUTER_KEY}` },
  body: JSON.stringify({
    model: "any-model",
    messages: [{
      role: "user",
      content: skillOutput.masterPrompt  // From skill
    }]
  })
});
```

**OpenAI Codex**
```javascript
const response = await openai.createChatCompletion({
  model: "gpt-4",
  messages: [{
    role: "user",
    content: skillOutput.masterPrompt
  }]
});
```

**Anthropic Claude API**
```javascript
const response = await anthropic.messages.create({
  model: "claude-3-5-sonnet-20241022",
  messages: [{
    role: "user",
    content: skillOutput.masterPrompt
  }]
});
```

---

### ✅ Prompt Management Platforms

**Stitch** (Prompt orchestration)
```yaml
# stitch.yml
skills:
  - name: create-interactive-website
    command: npx skill create-interactive-website
    output: prompts/website-plan.md
```

**Antigravity** (Prompt versioning)
```bash
ag skill install create-interactive-website
ag run create-interactive-website "Your website"
```

---

### 🔧 How the Skill Works Across All Platforms

**Universal Flow:**
```
Any Platform/Agent
       ↓
npx skill create-interactive-website "description"
       ↓
Agent executes skill → Extracts requirements
       ↓
Outputs 3 files:
  1. Implementation plan (.md)
  2. Code examples (.md)
  3. Master prompt (.md)
       ↓
User decides: Review or Execute
       ↓
If Execute: Paste prompt into ANY LLM
  - Claude Design
  - Stitch platform
  - OpenRouter API
  - OpenAI Codex
  - Cursor's chat
  - Any LLM API
       ↓
Complete website generated
```

**Key:** Master prompt works with ANY LLM because it's pure text instructions.

---

## Command Reference

### Universal Format (Questionnaire-Driven)

```bash
# Start interactive questionnaire (answer 6 questions)
npx skill create-interactive-website

# OR: Skip questions and auto-execute
npx skill create-interactive-website --exec
```

### Agent-Specific Syntax

**Claude Code:**
```bash
/create-interactive-website
# Then answer 6 interactive questions
```

**Cursor / Continue.dev / JetBrains:**
```bash
npx skill create-interactive-website
# Then answer 6 interactive questions
```

**OpenRouter / Codex / Stitch:**
```javascript
// Use the master prompt output with your API
const masterPrompt = skillOutput.masterPrompt;
// Send to any LLM API
```

### Questionnaire Flow

When you run the command, you'll be asked 6 questions:

```bash
npx skill create-interactive-website

? What type of website?
  ◯ Portfolio/Creative Showcase
  ◯ Agency
  ◯ SaaS/Product
  ◯ Museum/Cultural
  ◯ E-commerce
  ◯ Web3/Crypto
  ◯ Luxury/Premium Service

? What's your primary goal?
  ◯ Showcase work/portfolio
  ◯ Explain product benefits
  ◯ Tell a story/narrative
  ◯ Capture leads/sales
  ◯ Build community
  ◯ Display information

? What animation style appeals to you?
  ◯ Minimal & Professional
  ◯ Moderate & Engaging
  ◯ Heavy 3D & Interactive
  ◯ Maximum Interactive (Cinema-Grade)

[3 more questions: color aesthetic, audience, key feature]
```

### Example Answer Combinations

See the "Real-World Examples" section above for 4 complete questionnaire answer examples:
- Creative Director Portfolio (Cinema-Grade animations)
- Minimal Museum Site (Professional animations)
- SaaS Analytics Dashboard (Moderate animations)
- Web3/Crypto (Heavy Interactive animations)

---

## Output Files Explained

### 1. Implementation Plan (`[project]_IMPLEMENTATION_PLAN.md`)

Complete roadmap containing:
- Project identity (name, aesthetic, colors, fonts)
- Phase 1-5 decisions with rationale
- Design system documentation
- Tech stack selection with justification
- 5-tier roadmap (10-day timeline)
- Performance budgets (FCP, LCP, CLS targets)
- Accessibility checklist (WCAG 2.1 AA)
- Verification checklist before deployment

**Use case:** Review with stakeholders, share with design team, reference during development

---

### 2. Code Examples (`[project]_CODE_EXAMPLES.md`)

Reference implementations:
- Tailwind config with design tokens
- React component patterns (Hero, ProjectCard, Forms)
- Framer Motion animation hooks
- Scroll-trigger animations
- Responsive breakpoint strategy
- TypeScript type definitions
- CSS variables system

**Use case:** Copy-paste snippets, learn patterns, speed up implementation

---

### 3. Master Prompt (`[project]_MASTER_PROMPT.md`)

Complete, executable prompt:
- All design system details
- 5-tier build requirements
- Component structure
- Performance targets
- Testing checklist
- Sample data

**Use case:** Paste into Claude Design to generate complete website code

---

## The Questionnaire: 6 Questions for Personalization

The questionnaire gathers your project requirements to personalize every section of the implementation plan.

### Question 1: Website Type
Choose the primary type of website you're building:
- **Portfolio/Creative** - Showcase your creative work (design, photography, 3D)
- **Agency** - Professional services with case studies
- **SaaS/Product** - Software or app landing page
- **Museum/Cultural** - Educational or narrative-driven content
- **E-commerce** - Sell products online
- **Web3/Crypto** - Blockchain, NFT, or crypto projects
- **Luxury/Premium** - High-end services or exclusive offerings

**Impact:** Determines default section layout, component priorities, and aesthetic direction

### Question 2: Primary Goal
What's the main purpose of your website?
- **Showcase work/portfolio** - Let your work speak for itself
- **Explain product benefits** - Convert visitors with clear value proposition
- **Tell a story/narrative** - Engage through storytelling
- **Capture leads/sales** - Drive conversions and sales
- **Build community** - Foster engagement and connection
- **Display information** - Educational or reference content

**Impact:** Determines CTA placement, section order, and interaction priorities

### Question 3: Animation Style ⭐
What animation/interaction experience appeals to you?

1. **Minimal & Professional** 
   - Clean fades, subtle hover effects, smooth scrolling
   - Video background plays silently
   - Best for: SaaS, corporate, agencies
   
2. **Moderate & Engaging**
   - Smooth scroll-reveal animations
   - Fade-in-up transitions
   - Animated buttons with ripple effects
   - Some parallax on hero
   - Best for: Product launches, modern brands, portfolios
   
3. **Heavy 3D & Interactive**
   - Mouse-tracking parallax effects
   - Scroll-driven 3D transforms
   - Sticky-stacking cards
   - Video interactions
   - Magnetic hover effects
   - Best for: Creative portfolios, luxury brands, tech startups
   
4. **Maximum Interactive (Cinema-Grade)** ⭐ [Most Advanced]
   - All of above PLUS:
   - Video crossfades
   - Custom SVG animations
   - Scroll-linked blur effects
   - 3D perspective transforms
   - Particle effects
   - Animated SVG filters (sand, noise)
   - Advanced easing curves
   - Best for: High-end creative studios, immersive experiences, premium brands

**Impact:** Determines tech stack (Framer Motion? Three.js?), performance budgets, and component library choices

### Question 4: Color Aesthetic
Which color approach resonates with you?
- **Dark + Vibrant Accents** - Dark base (#0C0C0C), 2-3 bright colors (magenta, cyan, orange)
- **Light + Professional** - White/light gray base, 1 professional accent
- **Monochromatic Editorial** - Single color family, grayscale feel
- **Colorful & Playful** - Bright base, multiple vibrant colors
- **Luxury Minimal** - Neutral palette, generous spacing

**Impact:** Determines design system colors, contrast ratios, and mood

### Question 5: Target Audience
Who are your primary visitors?
- **Creative professionals** - Designers, directors, artists
- **Enterprise/B2B** - Businesses, decision-makers
- **Consumers/Public** - Everyday users, shoppers
- **Investors/Stakeholders** - Funding, partnerships
- **Specialists** - Doctors, lawyers, consultants
- **Community members** - Fans, subscribers, builders

**Impact:** Determines tone, copy style, trust signals, and interaction patterns

### Question 6: Key Feature/Differentiator
What's the most important element on your site?
- **Showcase work** - Portfolio pieces, case studies
- **Explain benefits** - Features, pricing, testimonials
- **Interactive experience** - 3D, explorations, tools
- **Video/media** - Hero video, showcase, background
- **Navigation/discovery** - Chapter flow, categories, search
- **Form/capture** - Email, contact, booking

**Impact:** Determines Hero section priority, component hierarchy, and CTA placement

---

## Real-World Examples

### Example 1: Creative Director Portfolio (Cinema-Grade)

**Questionnaire Answers:**
```
Q1: Website type?           → Portfolio/Creative Showcase
Q2: Primary goal?           → Showcase work
Q3: Animation style?        → Maximum Interactive (Cinema-Grade) ⭐
Q4: Color aesthetic?        → Dark + Vibrant Accents
Q5: Target audience?        → Creative professionals
Q6: Key feature?            → Showcase work
```

**Personalized Plan Outputs:**
- **Design System:** Dark theme (#0C0C0C), magenta/purple accents (#B600A8, #7621B0)
- **Animation Tier:** Heavy 3D + cinema-grade (sticky cards, 3D parallax, SVG animations, particle effects)
- **Tech Stack:** React + Framer Motion + Three.js + Vite
- **Typography:** Kanit (display, geometric) + Inter (body, clean)
- **Hero Section:** 3D background, scroll parallax, magnetic CTA button
- **Featured Work:** Sticky-stacking project cards, 3D perspective transforms
- **Components:** ProjectCard (critical), MagnetHover (critical), FadeIn (important), ParticleBackground (optional)
- **Timeline:** 10-day implementation roadmap with cinema-grade animation patterns

---

### Example 2: Minimal Museum Site (Professional)

**Questionnaire Answers:**
```
Q1: Website type?           → Museum/Cultural
Q2: Primary goal?           → Tell a story/narrative
Q3: Animation style?        → Minimal & Professional
Q4: Color aesthetic?        → Monochromatic Editorial
Q5: Target audience?        → Community members / Specialists
Q6: Key feature?            → Navigation/discovery
```

**Personalized Plan Outputs:**
- **Design System:** White background, monochromatic palette, elegant grays
- **Animation Tier:** Light (subtle fades, smooth transitions, refined hover effects)
- **Tech Stack:** Next.js + Tailwind CSS + Framer Motion (minimal)
- **Typography:** Bodoni Moda (display, serif, editorial) + Inter (body, clean)
- **Hero Section:** Centered minimal design, static hero or subtle fade-in
- **Collections:** Chapter-based navigation, gallery grid with smooth reveals
- **Components:** NavigationTabs (critical), GalleryGrid (critical), FadeIn (important)
- **Timeline:** 7-day implementation focused on elegance and storytelling

---

### Example 3: SaaS Analytics Dashboard (Moderate)

**Questionnaire Answers:**
```
Q1: Website type?           → SaaS/Product
Q2: Primary goal?           → Explain product benefits
Q3: Animation style?        → Moderate & Engaging
Q4: Color aesthetic?        → Light + Professional
Q5: Target audience?        → Enterprise/B2B
Q6: Key feature?            → Explain benefits
```

**Personalized Plan Outputs:**
- **Design System:** Light background (white/light gray), blue action color, professional palette
- **Animation Tier:** Medium (scroll-reveal animations, fade-in-up, light parallax)
- **Tech Stack:** React + Framer Motion + Recharts
- **Typography:** Space Mono or IBM Plex (professional) + Inter (body)
- **Hero Section:** Clear value proposition, features grid, trust signals
- **Sections:** Features → Pricing → Testimonials → FAQ → CTA
- **Components:** FeatureCard (critical), PricingCard (critical), Testimonial (important), FAQ Accordion (important)
- **Timeline:** 8-day implementation focused on clarity and conversion

---

### Example 4: Web3/Crypto (Heavy Interactive)

**Questionnaire Answers:**
```
Q1: Website type?           → Web3/Crypto
Q2: Primary goal?           → Capture leads/sales
Q3: Animation style?        → Heavy 3D & Interactive
Q4: Color aesthetic?        → Dark + Vibrant Accents
Q5: Target audience?        → Investors/Community
Q6: Key feature?            → Interactive experience
```

**Personalized Plan Outputs:**
- **Design System:** Dark navy background, neon accent colors (cyan, magenta, lime)
- **Animation Tier:** Heavy (mouse-tracking parallax, 3D transforms, scroll-driven effects, liquid glass)
- **Tech Stack:** React + Framer Motion + Three.js + Vite
- **Typography:** Space Mono (display, futuristic) + Inter (body)
- **Hero Section:** 3D animated background, liquid glass elements, scroll animations
- **Token Info:** Interactive 3D charts, animated stats, hover effects
- **Components:** Liquid glass nav (critical), AnimatedChart (critical), MagnetHover buttons (important)
- **Timeline:** 9-day implementation with advanced animation choreography

---

## Prerequisites

The skill requires these skills to be installed (auto-checked):

### Required Skills
- **ui-ux-pro-max** - Design system reference (colors, typography, patterns)
- **frontend-design** - Aesthetic direction & production-grade UI

### Auto-Install

If missing, the skill will prompt you to install:
```bash
npx skill install ui-ux-pro-max
npx skill install frontend-design
```

Or install manually:
```bash
git clone https://github.com/[org]/ui-ux-pro-max ~/.claude/skills/ui-ux-pro-max
git clone https://github.com/[org]/frontend-design ~/.claude/skills/frontend-design
```

---

## Architecture

```
interactive-design-planning/
├── bin/
│   └── cli.js                 # Command-line interface
├── src/
│   ├── planner.js             # 5-phase planning logic
│   ├── extractors/
│   │   ├── designExtractor.js # Design system extraction
│   │   ├── stackExtractor.js  # Tech stack selection
│   │   └── roadmapExtractor.js # Tier roadmap generation
│   ├── generators/
│   │   ├── planGenerator.js   # Plan document creation
│   │   ├── examplesGenerator.js # Code examples
│   │   └── promptGenerator.js # Master prompt creation
│   └── templates/
│       ├── implementation-plan.md
│       ├── code-examples.md
│       └── master-prompt.md
├── skills/
│   └── interactive-design-planning.md  # Skill definition
├── package.json
└── README.md
```

---

## Usage with Different Agents

### Claude Code

```bash
# Install via Claude Code
/help skill install

# Then use anywhere
/create-interactive-website "description"
```

### Copilot CLI

```bash
# Install
skill install create-interactive-website

# Use with Copilot
create-interactive-website "description"
```

### Cody (Sourcegraph)

```bash
# Configure in cody.json
{
  "skills": ["interactive-design-planning"]
}

# Use in editor
cmd+shift+c: create-interactive-website "description"
```

### GitHub Copilot (with custom prompt)

Add to your `.github/copilot-config.yml`:
```yaml
skills:
  - name: interactive-design-planning
    url: https://github.com/iyed/interactive-design-planning
```

---

## Testing

See `EXAMPLE.md` for 5 ready-to-run test commands:

```bash
# Test 1: Plan only
/create-interactive-website "A 3D portfolio with dark theme"

# Test 2: Execute immediately
/create-interactive-website "A minimal museum site" --exec

# Test 3-5: More examples in EXAMPLE.md
```

---

## Performance Targets

The skill designs websites that hit these metrics:

| Metric | Target |
|--------|--------|
| FCP (First Contentful Paint) | < 1.5s |
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Score | ≥ 90 |
| Bundle Size (JS) | < 400KB |
| Accessibility (WCAG) | 2.1 AA |

---

## Troubleshooting

### ❌ "Skill not found"
**Solution:** Install first
```bash
npx skill install create-interactive-website
```

### ❌ "Prerequisites missing"
**Solution:** Install required skills
```bash
npx skill install ui-ux-pro-max frontend-design
```

### ❌ "Permission denied"
**Solution:** Check write permissions in output directory
```bash
chmod u+w .
```

### ❌ "Command not recognized"
**Solution:** Verify skill is loaded in your agent
- Claude Code: `/help skill list`
- Copilot CLI: `skill list`
- Cody: Check `.vscode/extensions/` for plugin

### ❌ "Master prompt too long"
**Solution:** It's normal (5000-8000 tokens). Paste in chunks if needed.

---

## File Structure After Generation

When you run the skill, you get 3 files:

```
[project-name]_IMPLEMENTATION_PLAN.md     (5-10 KB)
[project-name]_CODE_EXAMPLES.md          (8-15 KB)
[project-name]_MASTER_PROMPT.md          (10-20 KB)
```

Plus optional generated website (if `--exec` flag):
```
[project-name]/
├── package.json
├── src/
│   ├── components/
│   ├── hooks/
│   ├── config/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.ts
└── [all project files]
```

---

## Best Practices

### ✅ DO:

- **Answer the questionnaire carefully** (detailed answers = better personalization)
- **Choose your animation tier intentionally** (cinema-grade isn't always better - it depends on your goal)
- **Review the personalized plan** before building (understand the design system)
- **Follow the 5-tier roadmap** (foundation → polish keeps things organized)
- **Test locally** before deploying
- **Run Lighthouse** to verify performance
- **Check accessibility** with screen readers

### ❌ DON'T:

- **Rush through questionnaire answers** (vague answers = generic plans)
- **Assume cinema-grade is always better** (minimal designs can be more effective)
- **Skip the design system documentation** (it's tailored to your project)
- **Ignore performance budgets** (they're specific to your animation tier)
- **Deploy without testing** (always verify before going live)
- **Forget to install prerequisites** (ui-ux-pro-max and frontend-design are required)

---

## Advanced Usage

### Customize Design System

Edit output files to adjust:
- Colors (hex codes)
- Typography (font families, sizes)
- Animation durations
- Spacing scale
- Component structure

Then re-run the master prompt with modifications.

### Generate Multiple Variants

Create 3 different versions:
```bash
/create-interactive-website "version 1: dark theme"
/create-interactive-website "version 2: light theme"
/create-interactive-website "version 3: high contrast"
```

Compare implementations before choosing final design.

---

## Support

### Documentation
- **COMMAND_STRUCTURE.md** - Command reference
- **AGENT_WORKFLOW.md** - Agent instructions
- **EXAMPLE.md** - Test commands
- **IMPLEMENTATION_PLAN_TEMPLATE.md** - Plan template

### Issues & Feedback
- GitHub Issues: https://github.com/iyed/interactive-design-planning/issues
- Discussions: https://github.com/iyed/interactive-design-planning/discussions
- Twitter: [@iyed](https://twitter.com/iyed)

---

## License

MIT - Free to use, modify, and distribute

---

## Credits

Created with the philosophy that **agents should plan better, not build everything automatically**.

The skill teaches agents (and users) the discipline of structured design planning before implementation.

---

## Quick Links

- **GitHub:** https://github.com/iyed/interactive-design-planning
- **NPM:** https://npmjs.com/package/create-interactive-website
- **Documentation:** See included .md files
- **Examples:** EXAMPLE.md (5 ready-to-run commands)

---

## What's Next?

### Getting Started

1. **Install the skill**
   ```bash
   npx skill install create-interactive-website
   ```

2. **Start the questionnaire**
   ```bash
   npx skill create-interactive-website
   ```

3. **Answer 6 questions carefully**
   - Website type
   - Primary goal
   - Animation style (minimal → cinema-grade)
   - Color aesthetic
   - Target audience
   - Key feature

4. **Review your personalized plan**
   - [project]_IMPLEMENTATION_PLAN.md (customized to your answers)
   - [project]_CODE_EXAMPLES.md (patterns for your animation tier)
   - [project]_MASTER_PROMPT.md (ready to execute)

5. **Choose your next step**
   - **Option A (Recommended):** Review plan with team → Paste master prompt into Claude Design → Build
   - **Option B (Fast-track):** Use `--exec` flag to build immediately

6. **Deploy your website**

---

## Advanced: Customize Your Plan

Don't like a design decision? The personalized plan is a starting point, not a constraint:

1. **Edit the IMPLEMENTATION_PLAN.md** directly
2. **Adjust colors, fonts, animation timings** in Phase 2
3. **Modify component priorities** in Phase 4
4. **Update the MASTER_PROMPT.md** with your changes
5. **Paste updated prompt** into Claude Design

---

## Need Help?

- **Understanding questionnaire:** See "The Questionnaire: 6 Questions" section above
- **Animation tiers:** See "Question 3: Animation Style"
- **Real examples:** See "Real-World Examples" section with 4 complete scenarios
- **Documentation:** See IMPLEMENTATION_PLAN_TEMPLATE.md for the full template
- **Issues:** GitHub Issues at https://github.com/iyed/interactive-design-planning

---

Happy planning! 🚀


## Why This Project Stands Out

- **Design System** - Complete production-ready design tokens
- **AI Integration** - Design system works with AI coding agents
- **Interactive** - Real-time preview and editing
- **Professional Output** - Production-quality websites