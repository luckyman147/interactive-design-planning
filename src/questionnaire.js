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
        'Luxury/Premium Service',
        new inquirer.Separator(),
        { name: '✏️  Enter custom website type', value: 'CUSTOM' },
      ],
    },
    {
      type: 'input',
      name: 'websiteType',
      message: 'Enter your website type:',
      when: (ans) => ans.websiteType === 'CUSTOM',
      validate: (input) => input.length > 0 || 'Please enter a website type',
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
        'Display information',
        new inquirer.Separator(),
        { name: '✏️  Enter custom primary goal', value: 'CUSTOM' },
      ],
    },
    {
      type: 'input',
      name: 'primaryGoal',
      message: 'Enter your primary goal:',
      when: (ans) => ans.primaryGoal === 'CUSTOM',
      validate: (input) => input.length > 0 || 'Please enter a primary goal',
    },
    {
      type: 'list',
      name: 'animationStyle',
      message: 'What animation style appeals to you?',
      choices: [
        {
          name: 'Minimal & Professional (clean fades, subtle hovers)',
          value: 'Minimal & Professional',
        },
        {
          name: 'Moderate & Engaging (scroll reveals, parallax)',
          value: 'Moderate & Engaging',
        },
        {
          name: 'Heavy 3D & Interactive (mouse tracking, 3D transforms, sticky cards)',
          value: 'Heavy 3D & Interactive',
        },
        {
          name: 'Maximum Interactive (Cinema-Grade) ⭐ (SVG animations, particles, blur effects)',
          value: 'Maximum Interactive (Cinema-Grade)',
        },
        new inquirer.Separator(),
        { name: '✏️  Enter custom animation style', value: 'CUSTOM' },
      ],
    },
    {
      type: 'input',
      name: 'animationStyle',
      message: 'Enter your animation style preference:',
      when: (ans) => ans.animationStyle === 'CUSTOM',
      validate: (input) => input.length > 0 || 'Please enter an animation style',
    },
    {
      type: 'list',
      name: 'colorAesthetic',
      message: 'What color aesthetic resonates with you?',
      choices: [
        'Dark + Vibrant Accents',
        'Light + Professional',
        'Monochromatic Editorial',
        'Colorful & Playful',
        'Luxury Minimal',
        new inquirer.Separator(),
        { name: '✏️  Enter custom color aesthetic', value: 'CUSTOM' },
      ],
    },
    {
      type: 'input',
      name: 'colorAesthetic',
      message: 'Enter your color aesthetic:',
      when: (ans) => ans.colorAesthetic === 'CUSTOM',
      validate: (input) => input.length > 0 || 'Please enter a color aesthetic',
    },
    {
      type: 'list',
      name: 'targetAudience',
      message: 'Who is your primary audience?',
      choices: [
        'Creative professionals',
        'Enterprise/B2B',
        'Consumers/Public',
        'Investors/Stakeholders',
        'Specialists',
        'Community members',
        new inquirer.Separator(),
        { name: '✏️  Enter custom target audience', value: 'CUSTOM' },
      ],
    },
    {
      type: 'input',
      name: 'targetAudience',
      message: 'Enter your target audience:',
      when: (ans) => ans.targetAudience === 'CUSTOM',
      validate: (input) => input.length > 0 || 'Please enter a target audience',
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
        'Form/capture',
        new inquirer.Separator(),
        { name: '✏️  Enter custom key feature', value: 'CUSTOM' },
      ],
    },
    {
      type: 'input',
      name: 'keyFeature',
      message: 'Enter your key feature/differentiator:',
      when: (ans) => ans.keyFeature === 'CUSTOM',
      validate: (input) => input.length > 0 || 'Please enter a key feature',
    },
  ]);

  return answers;
}

module.exports = { questionnaire };
