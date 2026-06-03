# Using with Claude Code

**Platform:** Claude Code (Anthropic's official CLI)

## Installation

```bash
# Install the skill
/skill install interactive-design-planning

# Or use NPX directly
npx interactive-design-planning
```

## Usage

### Interactive Questionnaire

```bash
# Opens interactive 6-question questionnaire
/create-interactive-website
```

### With Optional Execution

```bash
# Creates plan AND executes immediately (if executable)
/create-interactive-website --exec
```

## What Happens

1. **Questionnaire opens** with 6 interactive questions
2. **You answer** each question
3. **Plan generates** customized to your answers
4. **3 files created:**
   - `[project]_IMPLEMENTATION_PLAN.md` - Full customized plan
   - `[project]_CODE_EXAMPLES.md` - Code patterns for your animation tier
   - `[project]_MASTER_PROMPT.md` - Ready for Claude Design

## Example Workflow

```bash
$ /create-interactive-website

🎨 Interactive Design Planning

? What type of website?
  ◯ Portfolio/Creative Showcase
  ◯ Agency
  ◯ SaaS/Product
  ...

? What's your primary goal?
  ◯ Showcase work/portfolio
  ...

[4 more questions...]

✅ Personalized plan created!

📄 Output Files:
  1. portfolio_IMPLEMENTATION_PLAN.md
  2. portfolio_CODE_EXAMPLES.md
  3. portfolio_MASTER_PROMPT.md
```

## Next Steps

1. **Review the implementation plan**
   ```bash
   cat portfolio_IMPLEMENTATION_PLAN.md
   ```

2. **Copy the master prompt**
   ```bash
   cat portfolio_MASTER_PROMPT.md
   ```

3. **Paste into Claude Design**
   - Go to https://claude.ai/design
   - Paste the master prompt
   - Claude Design generates your website

4. **Optional: Customize first**
   - Edit any of the 3 generated files
   - Update colors, fonts, animations
   - Then paste the modified prompt

## Troubleshooting

**Q: Skill not found?**
```bash
/skill install interactive-design-planning
```

**Q: Command not recognized?**
```bash
# Check installed skills
/skill list

# Reinstall if needed
/skill install interactive-design-planning
```

**Q: Questionnaire doesn't appear?**
```bash
# Try NPX directly
npx interactive-design-planning
```

## Support

- GitHub: https://github.com/luckyman147/interactive-design-planning
- Issues: https://github.com/luckyman147/interactive-design-planning/issues
