# Using with Cody (Sourcegraph)

**Platform:** Cody (Sourcegraph AI coding assistant in VS Code)

## Installation

### Option 1: Via VSCode Settings

1. **Install Cody Extension** (if not already installed)
   - Open VS Code
   - Extensions → Search "Cody"
   - Install Sourcegraph Cody

2. **Configure in .vscode/settings.json**
   ```json
   {
     "cody.skills": [
       "interactive-design-planning"
     ]
   }
   ```

3. **Or add to .vscode/cody.json**
   ```json
   {
     "skills": [
       "https://github.com/luckyman147/interactive-design-planning"
     ]
   }
   ```

### Option 2: Via Command Palette

1. Open VS Code Command Palette (Cmd+Shift+P / Ctrl+Shift+P)
2. Type "Cody: Add Skill"
3. Enter: `interactive-design-planning` or the full GitHub URL
4. Select "Install"

### Option 3: Global Installation

```bash
# Install npm package
npm install -g interactive-design-planning

# Cody will auto-detect it
```

## Usage

### In VS Code Editor

1. **Open Command Palette** (Cmd+Shift+P / Ctrl+Shift+P)
2. **Type:** `Cody: Run Skill`
3. **Select:** `interactive-design-planning`
4. **Answer 6 interactive questions**
5. **Get 3 output files in current workspace**

### Using Chat Interface

Type in Cody chat:
```
@interactive-design-planning questionnaire
```

Or use the slash command if configured:
```
/create-interactive-website
```

## Example Workflow

```
1. Open Cody Chat
2. Type: @interactive-design-planning questionnaire
3. Press Enter
4. Answer 6 questions in the dialog that opens:
   - Website type?
   - Primary goal?
   - Animation style?
   - Color aesthetic?
   - Target audience?
   - Key feature?
5. Files generated in workspace:
   - [project]_IMPLEMENTATION_PLAN.md
   - [project]_CODE_EXAMPLES.md
   - [project]_MASTER_PROMPT.md
```

## Configuration

### .vscode/settings.json

```json
{
  "cody.skills": [
    "interactive-design-planning"
  ],
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### .vscode/launch.json (for debugging)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Interactive Planning",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/interactive-design-planning/bin/cli.js"
    }
  ]
}
```

## Keyboard Shortcuts

```
Cmd+K (macOS) / Ctrl+K (Windows/Linux)  →  Open Cody Chat
Cmd+Shift+P / Ctrl+Shift+P              →  Command Palette
@                                        →  Mention a skill in chat
/                                        →  Slash commands
```

## Troubleshooting

**Q: Skill not appearing in VS Code?**
```json
// Restart VS Code and check:
// 1. Cody extension is installed
// 2. .vscode/settings.json has correct config
// 3. npm package is installed locally or globally
```

**Q: Command palette shows no skills?**
1. Run: `npm install -g interactive-design-planning`
2. Reload VS Code window (Cmd+R / Ctrl+Shift+F5)
3. Try again

**Q: Questionnaire not opening?**
1. Check the output panel (View → Output)
2. Look for error messages
3. Try running directly: `npx interactive-design-planning`

## File Locations

Generated files appear in your current workspace folder:
```
your-workspace/
├── [project]_IMPLEMENTATION_PLAN.md
├── [project]_CODE_EXAMPLES.md
└── [project]_MASTER_PROMPT.md
```

## Next Steps

1. **Review the generated implementation plan**
   - Open [project]_IMPLEMENTATION_PLAN.md in VS Code
   - Review design system, sections, components

2. **Copy the master prompt**
   - Open [project]_MASTER_PROMPT.md
   - Select all (Cmd+A / Ctrl+A)
   - Copy (Cmd+C / Ctrl+C)

3. **Paste into Claude Design**
   - Go to https://claude.ai/design
   - Paste the master prompt
   - Claude Design generates your website

## Support

- GitHub: https://github.com/luckyman147/interactive-design-planning
- Cody Docs: https://docs.sourcegraph.com/cody
- Issues: https://github.com/luckyman147/interactive-design-planning/issues
