/**
 * Interactive Questionnaire Module
 * Asks 6 key questions to understand project requirements
 */

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
      ],
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
      ],
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
      ],
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
      ],
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
      ],
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
      ],
    },
  ]);

  return answers;
}

module.exports = { questionnaire };
