const inquirer = require('inquirer');

const websiteTypeChoices = [
  'Portfolio/Creative Showcase',
  'Agency',
  'SaaS/Product',
  'Museum/Cultural',
  'E-commerce',
  'Web3/Crypto',
  'Luxury/Premium Service',
];

const primaryGoalChoices = [
  'Showcase work/portfolio',
  'Explain product benefits',
  'Tell a story/narrative',
  'Capture leads/sales',
  'Build community',
  'Display information',
];

const animationStyleChoices = [
  { name: 'Minimal & Professional (clean fades, subtle hovers)', value: 'Minimal & Professional' },
  { name: 'Moderate & Engaging (scroll reveals, parallax)', value: 'Moderate & Engaging' },
  { name: 'Heavy 3D & Interactive (mouse tracking, 3D transforms)', value: 'Heavy 3D & Interactive' },
  { name: 'Maximum Interactive (Cinema-Grade) ⭐ (SVG, particles)', value: 'Maximum Interactive (Cinema-Grade)' },
];

const colorAestheticChoices = [
  'Dark + Vibrant Accents',
  'Light + Professional',
  'Monochromatic Editorial',
  'Colorful & Playful',
  'Luxury Minimal',
];

const targetAudienceChoices = [
  'Creative professionals',
  'Enterprise/B2B',
  'Consumers/Public',
  'Investors/Stakeholders',
  'Specialists',
  'Community members',
];

const keyFeatureChoices = [
  'Showcase work',
  'Explain benefits',
  'Interactive experience',
  'Video/media',
  'Navigation/discovery',
  'Form/capture',
];

async function questionnaire() {
  console.log();

  const answers = await inquirer.prompt([
    // Website Type
    {
      type: 'confirm',
      name: 'websiteTypeCustom',
      message: 'Website type: Use preset or enter custom?',
      default: true,
    },
    {
      type: 'list',
      name: 'websiteType',
      message: 'Choose website type:',
      choices: websiteTypeChoices,
      when: (ans) => ans.websiteTypeCustom === true,
    },
    {
      type: 'input',
      name: 'websiteType',
      message: 'Enter your website type:',
      when: (ans) => ans.websiteTypeCustom === false,
      validate: (input) => input.trim().length > 0 || 'Please enter a website type',
    },

    // Primary Goal
    {
      type: 'confirm',
      name: 'primaryGoalCustom',
      message: 'Primary goal: Use preset or enter custom?',
      default: true,
    },
    {
      type: 'list',
      name: 'primaryGoal',
      message: 'Choose primary goal:',
      choices: primaryGoalChoices,
      when: (ans) => ans.primaryGoalCustom === true,
    },
    {
      type: 'input',
      name: 'primaryGoal',
      message: 'Enter your primary goal:',
      when: (ans) => ans.primaryGoalCustom === false,
      validate: (input) => input.trim().length > 0 || 'Please enter a primary goal',
    },

    // Animation Style
    {
      type: 'confirm',
      name: 'animationStyleCustom',
      message: 'Animation style: Use preset or enter custom?',
      default: true,
    },
    {
      type: 'list',
      name: 'animationStyle',
      message: 'Choose animation style:',
      choices: animationStyleChoices,
      when: (ans) => ans.animationStyleCustom === true,
    },
    {
      type: 'input',
      name: 'animationStyle',
      message: 'Enter your animation style:',
      when: (ans) => ans.animationStyleCustom === false,
      validate: (input) => input.trim().length > 0 || 'Please enter an animation style',
    },

    // Color Aesthetic
    {
      type: 'confirm',
      name: 'colorAestheticCustom',
      message: 'Color aesthetic: Use preset or enter custom?',
      default: true,
    },
    {
      type: 'list',
      name: 'colorAesthetic',
      message: 'Choose color aesthetic:',
      choices: colorAestheticChoices,
      when: (ans) => ans.colorAestheticCustom === true,
    },
    {
      type: 'input',
      name: 'colorAesthetic',
      message: 'Enter your color aesthetic:',
      when: (ans) => ans.colorAestheticCustom === false,
      validate: (input) => input.trim().length > 0 || 'Please enter a color aesthetic',
    },

    // Target Audience
    {
      type: 'confirm',
      name: 'targetAudienceCustom',
      message: 'Target audience: Use preset or enter custom?',
      default: true,
    },
    {
      type: 'list',
      name: 'targetAudience',
      message: 'Choose target audience:',
      choices: targetAudienceChoices,
      when: (ans) => ans.targetAudienceCustom === true,
    },
    {
      type: 'input',
      name: 'targetAudience',
      message: 'Enter your target audience:',
      when: (ans) => ans.targetAudienceCustom === false,
      validate: (input) => input.trim().length > 0 || 'Please enter a target audience',
    },

    // Key Feature
    {
      type: 'confirm',
      name: 'keyFeatureCustom',
      message: 'Key feature: Use preset or enter custom?',
      default: true,
    },
    {
      type: 'list',
      name: 'keyFeature',
      message: 'Choose key feature:',
      choices: keyFeatureChoices,
      when: (ans) => ans.keyFeatureCustom === true,
    },
    {
      type: 'input',
      name: 'keyFeature',
      message: 'Enter your key feature:',
      when: (ans) => ans.keyFeatureCustom === false,
      validate: (input) => input.trim().length > 0 || 'Please enter a key feature',
    },
  ]);

  // Remove the *Custom flags from final answers
  delete answers.websiteTypeCustom;
  delete answers.primaryGoalCustom;
  delete answers.animationStyleCustom;
  delete answers.colorAestheticCustom;
  delete answers.targetAudienceCustom;
  delete answers.keyFeatureCustom;

  return answers;
}

module.exports = { questionnaire };
