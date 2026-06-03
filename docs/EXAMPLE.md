# Test Examples

Ready-to-run test commands for interactive-design-planning.

---

## Quick Test (Minimal & Professional)

### Test 1: SaaS Landing

```bash
npx interactive-design-planning
```

**Answer with:**
```
Website type?     → SaaS/Product
Primary goal?     → Explain product benefits
Animation style?  → Minimal & Professional
Color aesthetic?  → Light + Professional
Target audience?  → Enterprise/B2B
Key feature?      → Explain benefits
```

**Expected output:**
```
saas_XXXX_IMPLEMENTATION_PLAN.md
saas_XXXX_CODE_EXAMPLES.md
saas_XXXX_MASTER_PROMPT.md
```

**Timeline:** 5 days | **Animation:** Minimal | **Tech:** React + Tailwind

---

## Test 2: Creative Portfolio (Heavy 3D)

```bash
npx interactive-design-planning
```

**Answer with:**
```
Website type?     → Portfolio/Creative Showcase
Primary goal?     → Showcase work
Animation style?  → Heavy 3D & Interactive
Color aesthetic?  → Dark + Vibrant Accents
Target audience?  → Creative professionals
Key feature?      → Showcase work
```

**Expected output:**
```
portfolio_XXXX_IMPLEMENTATION_PLAN.md (dark theme, magenta accents)
portfolio_XXXX_CODE_EXAMPLES.md (3D patterns, sticky cards)
portfolio_XXXX_MASTER_PROMPT.md (React + Three.js)
```

**Timeline:** 9 days | **Animation:** Heavy 3D | **Tech:** React + Framer Motion + Three.js

---

## Test 3: Museum Site (Minimal)

```bash
npx interactive-design-planning
```

**Answer with:**
```
Website type?     → Museum/Cultural
Primary goal?     → Tell a story/narrative
Animation style?  → Minimal & Professional
Color aesthetic?  → Monochromatic Editorial
Target audience?  → Community members
Key feature?      → Navigation/discovery
```

**Expected output:**
```
museum_XXXX_IMPLEMENTATION_PLAN.md (monochromatic, minimal animations)
museum_XXXX_CODE_EXAMPLES.md (gallery patterns, navigation)
museum_XXXX_MASTER_PROMPT.md (Next.js + Tailwind)
```

**Timeline:** 5 days | **Animation:** Minimal | **Tech:** Next.js

---

## Test 4: Web3/Crypto (Heavy + Cinema)

```bash
npx interactive-design-planning
```

**Answer with:**
```
Website type?     → Web3/Crypto
Primary goal?     → Capture leads/sales
Animation style?  → Maximum Interactive (Cinema-Grade)
Color aesthetic?  → Dark + Vibrant Accents
Target audience?  → Investors/Stakeholders
Key feature?      → Interactive experience
```

**Expected output:**
```
web3_XXXX_IMPLEMENTATION_PLAN.md (dark navy, neon accents)
web3_XXXX_CODE_EXAMPLES.md (SVG animations, particles)
web3_XXXX_MASTER_PROMPT.md (Advanced animations)
```

**Timeline:** 10-12 days | **Animation:** Cinema-Grade ⭐ | **Tech:** React + Framer Motion + Three.js + SVG

---

## Test 5: Agency (Moderate)

```bash
npx interactive-design-planning
```

**Answer with:**
```
Website type?     → Agency
Primary goal?     → Showcase work
Animation style?  → Moderate & Engaging
Color aesthetic?  → Light + Professional
Target audience?  → Enterprise/B2B
Key feature?      → Showcase work
```

**Expected output:**
```
agency_XXXX_IMPLEMENTATION_PLAN.md (professional, moderate animations)
agency_XXXX_CODE_EXAMPLES.md (scroll reveals, smooth transitions)
agency_XXXX_MASTER_PROMPT.md (React + Framer Motion)
```

**Timeline:** 7 days | **Animation:** Moderate | **Tech:** React + Framer Motion

---

## Test 6: E-Commerce (Cinema-Grade)

```bash
npx interactive-design-planning
```

**Answer with:**
```
Website type?     → E-commerce
Primary goal?     → Capture leads/sales
Animation style?  → Maximum Interactive (Cinema-Grade)
Color aesthetic?  → Colorful & Playful
Target audience?  → Consumers/Public
Key feature?      → Interactive experience
```

**Expected output:**
```
ecommerce_XXXX_IMPLEMENTATION_PLAN.md (vibrant, immersive)
ecommerce_XXXX_CODE_EXAMPLES.md (product interactions, animations)
ecommerce_XXXX_MASTER_PROMPT.md (Cinema-grade effects)
```

**Timeline:** 10-12 days | **Animation:** Cinema-Grade | **Tech:** React + Advanced animations

---

## Local Testing

### Test Locally Before Publishing

```bash
# Clone the repository
git clone https://github.com/luckyman147/interactive-design-planning.git
cd interactive-design-planning

# Install dependencies
npm install

# Test the CLI
npm run dev
# or
node bin/cli.js

# Answer the questionnaire
# Files should generate in current directory
```

### Verify Files Generated

```bash
# Check if files were created
ls -la *.md

# View the first generated file
cat portfolio_XXXX_IMPLEMENTATION_PLAN.md | head -50

# Count lines in each file
wc -l *XXXX*.md
```

### Test with NPM Link (Simulate Global Install)

```bash
# Link locally for testing
npm link

# Test the command
create-interactive-website

# Unlink when done
npm unlink -g interactive-design-planning
```

---

## Test Verification Checklist

After running each test, verify:

- [ ] Files generated successfully (3 files created)
- [ ] Implementation plan is customized to answers
  - Website type shown correctly
  - Animation tier reflected in design system
  - Color aesthetic applied to palette
  - Components filtered for type
- [ ] Code examples match animation tier
  - Minimal: only fades/hovers
  - Moderate: scroll reveals, parallax
  - Heavy: 3D transforms, sticky cards
  - Cinema-Grade: SVG, particles, advanced
- [ ] Master prompt is complete and ready
  - All 6 answers reflected in spec
  - Ready to paste into Claude Design
- [ ] No errors in generation
- [ ] Files are readable markdown

---

## End-to-End Test Flow

### 1. Generate Plan

```bash
npx interactive-design-planning
# Answer all 6 questions
```

### 2. Review Plan

```bash
# Read the implementation plan
cat [project]_IMPLEMENTATION_PLAN.md

# Verify customization matches your answers
```

### 3. Check Code Examples

```bash
# Read code examples for your animation tier
cat [project]_CODE_EXAMPLES.md

# Verify patterns match your animation style
```

### 4. Copy Master Prompt

```bash
# Copy to clipboard (macOS/Linux)
cat [project]_MASTER_PROMPT.md | pbcopy

# Or on Windows
cat [project]_MASTER_PROMPT.md | clip.exe
```

### 5. Test in Claude Design

1. Go to https://claude.ai/design
2. Paste the master prompt (Cmd+V / Ctrl+V)
3. Watch Claude Design generate your website
4. Verify website matches the implementation plan

---

## Expected Generation Times

| Tier | Timeline | Complexity |
|------|----------|-----------|
| Minimal & Professional | 5 days | Low |
| Moderate & Engaging | 7 days | Medium |
| Heavy 3D & Interactive | 9 days | High |
| Maximum Cinema-Grade | 10-12 days | Very High |

---

## Common Test Scenarios

### Scenario 1: First-Time User

```bash
# Run the tool
npx interactive-design-planning

# Answer questions based on YOUR project
# (Don't use test answers, use real project info)

# Review all 3 generated files
# Copy the master prompt
# Paste into Claude Design
# Website builds in ~5-12 minutes
```

### Scenario 2: Comparing Animation Tiers

```bash
# Test 1: Minimal
npx interactive-design-planning
# Answer with: Minimal & Professional
# Review output_minimal_XXXX_*.md

# Test 2: Moderate
npx interactive-design-planning
# Answer with: Moderate & Engaging
# Review output_moderate_XXXX_*.md

# Test 3: Heavy
npx interactive-design-planning
# Answer with: Heavy 3D & Interactive
# Review output_heavy_XXXX_*.md

# Test 4: Cinema-Grade
npx interactive-design-planning
# Answer with: Maximum Interactive (Cinema-Grade)
# Review output_cinema_XXXX_*.md

# Compare which fits your project best
```

### Scenario 3: Testing Different Website Types

```bash
# Run questionnaire 7 times, each with different website type:
# 1. Portfolio/Creative Showcase
# 2. Agency
# 3. SaaS/Product
# 4. Museum/Cultural
# 5. E-commerce
# 6. Web3/Crypto
# 7. Luxury/Premium Service

# Compare outputs to understand customization
```

---

## Troubleshooting Tests

**Test command not working?**
```bash
# Verify installation
npm list -g interactive-design-planning

# Reinstall if needed
npm install -g interactive-design-planning
```

**Files not generating?**
```bash
# Check permissions
ls -la bin/
chmod +x bin/cli.js

# Run again
npm run dev
```

**Files look truncated?**
```bash
# View with pagination
less [project]_IMPLEMENTATION_PLAN.md

# Or check file size
ls -lh [project]_*.md
```

---

## Success Criteria

All tests pass when:
1. ✅ All 3 files generate without errors
2. ✅ Files contain expected content (customized to answers)
3. ✅ Master prompt is complete and valid
4. ✅ Files are readable markdown
5. ✅ Timeline estimate matches animation tier
6. ✅ No console errors or warnings

---

Ready to test? Run:
```bash
npx interactive-design-planning
```

Then choose one of the 6 test scenarios above!
