# Using with Copilot CLI

**Platform:** Copilot CLI (GitHub Copilot command-line interface)

## Installation

```bash
# Install globally
npm install -g interactive-design-planning

# Or use NPX
npx interactive-design-planning
```

## Usage

### Interactive Questionnaire

```bash
# Opens interactive 6-question questionnaire
create-interactive-website

# Or via NPX
npx interactive-design-planning
```

## What Happens

1. **Questionnaire opens** with 6 interactive questions
2. **You answer** each question
3. **Plan generates** customized to your answers
4. **3 files created:**
   - `[project]_IMPLEMENTATION_PLAN.md`
   - `[project]_CODE_EXAMPLES.md`
   - `[project]_MASTER_PROMPT.md`

## Example Output

```
$ create-interactive-website

🎨 Interactive Design Planning

Answer 6 questions to generate your personalized implementation plan

? What type of website?
  Portfolio/Creative Showcase
  Agency
  SaaS/Product
  Museum/Cultural
  E-commerce
  Web3/Crypto
  Luxury/Premium Service

[Answer each question...]

✅ Personalized plan created!

📄 Output Files:
  1. portfolio_IMPLEMENTATION_PLAN.md (Customized implementation plan)
  2. portfolio_CODE_EXAMPLES.md (Code examples for cinema-grade animations)
  3. portfolio_MASTER_PROMPT.md (Ready-to-execute master prompt)
```

## Global Installation

```bash
# Install globally for use anywhere
npm install -g interactive-design-planning

# Verify installation
which create-interactive-website
# or
interactive-design-planning --version
```

## Local Installation

```bash
# Clone the repository
git clone https://github.com/luckyman147/interactive-design-planning.git
cd interactive-design-planning

# Install dependencies
npm install

# Test locally
npm run dev
# or
node bin/cli.js
```

## Next Steps

1. **Review the generated plan**
   ```bash
   cat [project]_IMPLEMENTATION_PLAN.md
   ```

2. **Check code examples**
   ```bash
   cat [project]_CODE_EXAMPLES.md
   ```

3. **Copy the master prompt**
   ```bash
   cat [project]_MASTER_PROMPT.md | pbcopy  # macOS
   cat [project]_MASTER_PROMPT.md | xclip   # Linux
   cat [project]_MASTER_PROMPT.md | clip    # Windows
   ```

4. **Paste into Claude Design**
   - Go to https://claude.ai/design
   - Paste the master prompt
   - Claude Design generates your website

## Troubleshooting

**Q: Command not found?**
```bash
# Install globally
npm install -g interactive-design-planning

# Verify
npm list -g interactive-design-planning
```

**Q: Permission denied?**
```bash
# On macOS/Linux, you may need sudo
sudo npm install -g interactive-design-planning
```

**Q: Update the package?**
```bash
npm update -g interactive-design-planning
```

**Q: Uninstall?**
```bash
npm uninstall -g interactive-design-planning
```

## Support

- GitHub: https://github.com/luckyman147/interactive-design-planning
- NPM: https://npmjs.com/package/interactive-design-planning
- Issues: https://github.com/luckyman147/interactive-design-planning/issues
