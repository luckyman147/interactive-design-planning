# Command Reference

Complete guide to all commands and options for interactive-design-planning.

---

## Basic Command

### Universal (Works Everywhere)

```bash
npx interactive-design-planning
```

Opens the **6-question interactive questionnaire** and generates a personalized implementation plan.

---

## Interactive Questionnaire

The tool asks 6 questions and generates a personalized plan based on your answers:

### Question 1: Website Type

**Options:**
- Portfolio/Creative Showcase
- Agency
- SaaS/Product
- Museum/Cultural
- E-commerce
- Web3/Crypto
- Luxury/Premium Service

**Determines:** Section layout, component priorities, hero variant

---

### Question 2: Primary Goal

**Options:**
- Showcase work/portfolio
- Explain product benefits
- Tell a story/narrative
- Capture leads/sales
- Build community
- Display information

**Determines:** CTA placement, section order, interaction patterns

---

### Question 3: Animation Style ⭐

**Options:**
1. **Minimal & Professional**
   - Clean fades, subtle hover effects
   - Best for: SaaS, corporate, agencies
   - Timeline: 5 days

2. **Moderate & Engaging**
   - Scroll reveals, parallax, ripple effects
   - Best for: Product launches, modern brands
   - Timeline: 7 days

3. **Heavy 3D & Interactive**
   - Mouse tracking, 3D transforms, sticky cards
   - Best for: Creative portfolios, luxury brands
   - Timeline: 9 days

4. **Maximum Interactive (Cinema-Grade)** ⭐
   - SVG animations, particles, blur effects
   - Best for: Premium studios, immersive experiences
   - Timeline: 10-12 days

**Determines:** Tech stack, performance targets, component complexity

---

### Question 4: Color Aesthetic

**Options:**
- Dark + Vibrant Accents
- Light + Professional
- Monochromatic Editorial
- Colorful & Playful
- Luxury Minimal

**Determines:** Design system colors, contrast ratios, mood

---

### Question 5: Target Audience

**Options:**
- Creative professionals
- Enterprise/B2B
- Consumers/Public
- Investors/Stakeholders
- Specialists
- Community members

**Determines:** Tone, interaction complexity, trust signals

---

### Question 6: Key Feature/Differentiator

**Options:**
- Showcase work
- Explain benefits
- Interactive experience
- Video/media
- Navigation/discovery
- Form/capture

**Determines:** Hero focus, component hierarchy, CTA placement

---

## Platform-Specific Commands

### Claude Code

```bash
# Via skill command
/create-interactive-website

# Opens interactive questionnaire
```

### Copilot CLI

```bash
# If installed globally
create-interactive-website

# Or via npx
npx interactive-design-planning
```

### Cody (Sourcegraph)

```bash
# Via command palette
Cmd+Shift+P → "Cody: Run Skill" → interactive-design-planning

# Or in chat
@interactive-design-planning questionnaire
```

### Direct Node Execution

```bash
# Run the CLI directly
node bin/cli.js

# Or via npm script
npm run dev
```

---

## Output Files

The tool generates 3 files based on your questionnaire answers:

### 1. Implementation Plan
**Filename:** `[project-name]_IMPLEMENTATION_PLAN.md`

**Contains:**
- Project identity and metadata
- Customized aesthetic direction
- Design system (colors, typography, motion, spacing)
- Tech stack recommendation
- 5-tier roadmap with customized components
- Performance targets
- Accessibility checklist

**Use:** Review with team, reference during development

---

### 2. Code Examples
**Filename:** `[project-name]_CODE_EXAMPLES.md`

**Contains:**
- Design tokens (colors, typography, spacing)
- Component examples for your animation tier
- Responsive breakpoint patterns
- Animation choreography specific to your tier
- CSS patterns and classes
- Performance optimization examples

**Use:** Copy-paste snippets, learn patterns, speed up coding

---

### 3. Master Prompt
**Filename:** `[project-name]_MASTER_PROMPT.md`

**Contains:**
- Complete design specification
- All customizations from your answers
- Tech stack details
- Component structure
- Animation specifications
- Performance requirements
- Ready-to-execute prompt for Claude Design

**Use:** Paste into https://claude.ai/design to generate website

---

## Example Output

For a **Creative Director Portfolio** answering:
- Type: Portfolio/Creative Showcase
- Goal: Showcase work
- Animation: Maximum Interactive (Cinema-Grade)
- Colors: Dark + Vibrant Accents
- Audience: Creative professionals
- Feature: Showcase work

**Generated files:**
```
portfolio_1234_IMPLEMENTATION_PLAN.md
├─ Dark theme (#0C0C0C)
├─ Magenta/purple accents
├─ Sticky-stacking cards
├─ 3D parallax animations
├─ React + Framer Motion + Three.js
└─ 10-12 day timeline

portfolio_1234_CODE_EXAMPLES.md
├─ Color palette with hex codes
├─ Sticky-stack component example
├─ 3D transform patterns
├─ Magnetic hover effects
├─ Particle system setup
└─ Animation easing curves

portfolio_1234_MASTER_PROMPT.md
└─ Complete specification ready for Claude Design
```

---

## Advanced Options

### Custom Output Directory

```bash
# (Future) Save files to specific directory
npx interactive-design-planning --output ./my-plans

# or
npx interactive-design-planning -o ./my-plans
```

### Version Check

```bash
npx interactive-design-planning --version
# or
npx interactive-design-planning -v
```

### Help

```bash
npx interactive-design-planning --help
# or
npx interactive-design-planning -h
```

---

## Workflow Examples

### Example 1: Quick Start (No Customization)

```bash
# 1. Run the questionnaire
npx interactive-design-planning

# 2. Answer 6 questions

# 3. Three files generated
# 4. Copy master prompt to Claude Design
# 5. Website builds automatically
```

### Example 2: Review Before Building

```bash
# 1. Run questionnaire
npx interactive-design-planning

# 2. Review the implementation plan
cat portfolio_1234_IMPLEMENTATION_PLAN.md

# 3. Review code examples
cat portfolio_1234_CODE_EXAMPLES.md

# 4. If happy, copy master prompt
cat portfolio_1234_MASTER_PROMPT.md | pbcopy

# 5. Paste into Claude Design
```

### Example 3: Customize Then Build

```bash
# 1. Run questionnaire
npx interactive-design-planning

# 2. Edit the generated files
# - Change colors in implementation plan
# - Adjust animation timings in code examples
# - Update prompt details

# 3. Copy customized master prompt
cat portfolio_1234_MASTER_PROMPT.md | pbcopy

# 4. Paste customized prompt into Claude Design
# 5. Website builds with your customizations
```

---

## Common Questions

**Q: Can I run this offline?**
Yes! Once installed locally, it works completely offline.

**Q: Can I re-run the questionnaire?**
Yes! Run the command again anytime.

**Q: Can I use the output files with other tools?**
Yes! They're standard markdown. Use with any text editor or LLM.

**Q: How long does it take?**
- Questionnaire: ~2 minutes
- File generation: Instant
- Website build (via Claude Design): ~5-10 minutes

**Q: Can I edit the generated files?**
Yes! They're yours to customize. Edit colors, fonts, animations, anything.

---

## Troubleshooting

**Command not found?**
```bash
npm install -g interactive-design-planning
```

**Questionnaire won't open?**
```bash
# Try running directly
node bin/cli.js
```

**Files not generating?**
```bash
# Check permissions
ls -la
chmod +x bin/cli.js

# Run again
npx interactive-design-planning
```

---

For more help:
- GitHub: https://github.com/luckyman147/interactive-design-planning
- Issues: https://github.com/luckyman147/interactive-design-planning/issues
