import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  platformSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'getting-started/index',
      },
      items: [
        'getting-started/quick-start',
        'getting-started/system-requirements',
        'getting-started/first-deployment',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/index',
        'core-concepts/how-it-works',
        'core-concepts/credit-system',
        'core-concepts/use-cases',
      ],
    },
    {
      type: 'category',
      label: 'Pricing & Plans',
      items: [
        'pricing/index',
      ],
    },
    {
      type: 'category',
      label: 'Platform Features',
      items: [
        'platform-features/dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      items: [
        {
          type: 'category',
          label: 'Packaging Your Project',
          items: [
            'technical-docs/packaging/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      link: {
        type: 'doc',
        id: 'faq/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'doc',
        id: 'troubleshooting/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Support & Resources',
      items: [
        'support-resources/getting-help',
      ],
    },
    'changelog/index',
  ],
};

export default sidebars;
