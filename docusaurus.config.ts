import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'VTpass API',
  tagline: 'Integrate bills payment services available on the VTpass platform on your application',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'matt-kay', // Usually your GitHub org/user name.
  projectName: 'vtpass-docs-redesign', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // "Edit this page" links: Docusaurus appends each file's path (for example docs/how-to/x.md).
          editUrl: 'https://github.com/matt-kay/vtpass-docs-redesign/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'API docs',
      logo: {
        alt: 'VTpass',
        src: 'img/vtpass-logo.png',
        srcDark: 'img/vtpass-logo-white.png',
        height: 24,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'overviewSidebar',
          position: 'left',
          label: 'Overview',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'docSidebar',
          sidebarId: 'howtoSidebar',
          position: 'left',
          label: 'How-to guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          position: 'left',
          label: 'API reference',
        },
        {
          type: 'docSidebar',
          sidebarId: 'explanationSidebar',
          position: 'left',
          label: 'Concepts',
        },
        {
          type: 'custom-envToggle',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Get started',
          items: [
            {label: 'Create a sandbox account', to: '/docs/tutorials/getting-started/create-sandbox-account'},
            {label: 'Generate your API keys', to: '/docs/tutorials/getting-started/generate-api-keys'},
            {label: 'Make your first purchase', to: '/docs/tutorials/getting-started/make-first-purchase'},
          ],
        },
        {
          title: 'Guides',
          items: [
            {label: 'Handle pending transactions', to: '/docs/how-to/handle-pending-transactions'},
            {label: 'Webhooks', to: '/docs/category/webhooks'},
            {label: 'Go live', to: '/docs/how-to/go-live'},
          ],
        },
        {
          title: 'API reference',
          items: [
            {label: 'Authentication', to: '/docs/reference/authentication'},
            {label: 'Services', to: '/docs/category/services'},
            {label: 'Requery', to: '/docs/reference/requery'},
            {label: 'Response codes', to: '/docs/reference/response-codes'},
          ],
        },
        {
          title: 'Concepts',
          items: [
            {label: 'Transaction lifecycle', to: '/docs/explanation/transaction-lifecycle'},
            {label: 'Request ID', to: '/docs/explanation/request-id'},
            {label: 'Commission', to: '/docs/explanation/commission'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'About this API document', to: '/docs/overview/about-this-doc'},
            {label: "What's new", to: '/docs/overview/whats-new'},
            {label: 'VTpass support', href: 'mailto:support@vtpass.com'},
            {label: 'GitHub', href: 'https://github.com/matt-kay/vtpass-docs-redesign'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kayode Matthew. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
