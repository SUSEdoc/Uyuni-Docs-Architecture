import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Uyuni Documentation Architecture',
  tagline: 'Documenting the system that documents.',
  favicon: 'img/favicon.ico',

  // Add meta tags for Algolia site verification and SEO
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '153334437E571506',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'googlebot',
        content: 'index, follow',
      },
    },
    // Google Fonts preconnect for performance
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    // SUSE fonts from Google Fonts
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap',
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://susedoc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Uyuni-Docs-Architecture/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SUSEdoc', // Usually your GitHub org/user name.
  projectName: 'Uyuni-Docs-Architecture', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Temporarily disable i18n to focus on English-only search
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Force trailing slashes for all URLs
  trailingSlash: true,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items
              .filter((item) => !item.url.includes('/page/'))
              .map((item) => ({
                ...item,
                url: item.url.endsWith('/') ? item.url : item.url + '/',
              }));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {

    algolia: {
      appId: 'TUSPP0C84U',
      apiKey: '9fe57ddc22a4b0ef865a88f6af4c957c',
      indexName: 'uyuni-architecture-docs',
      contextualSearch: false,
      searchParameters: {},
      // Customize search to better show page-level results
      searchPagePath: 'search',
    },
    // Replace with your project's social card
    image: 'img/uyuni-architecture-og.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Uyuni Documentation Architecture',
      logo: {
        alt: 'Uyuni Logo',
        src: 'img/uyuni-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Toolchain Guides',
        },
        {
          href: 'https://github.com/uyuni-project/uyuni-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/uyuni-project/uyuni-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Uyuni Documentation Architecture, openSUSE.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'makefile', 'ruby', 'python', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
