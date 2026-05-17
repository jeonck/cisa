import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const GITHUB_USERNAME = 'jeonck';
const REPO_NAME = 'cisa';
const SITE_TITLE = 'CISA 지식베이스';
const SITE_TAGLINE = '정보시스템 감사 전문가를 위한 실무 지식베이스';

const config: Config = {
  title: SITE_TITLE,
  tagline: SITE_TAGLINE,
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: `https://${GITHUB_USERNAME}.github.io`,
  baseUrl: `/${REPO_NAME}/`,
  organizationName: GITHUB_USERNAME,
  projectName: REPO_NAME,
  trailingSlash: false,

  onBrokenLinks: 'throw',

  themes: ['@docusaurus/theme-mermaid'],
  markdown: { mermaid: true },

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            const items = await defaultSidebarItemsGenerator(args);
            function reorder(list: any[]): any[] {
              const docs = list.filter(i => i.type === 'doc');
              const cats = list.filter(i => i.type === 'category').map(c => ({
                ...c, items: reorder(c.items ?? []),
              }));
              const rest = list.filter(i => i.type !== 'doc' && i.type !== 'category');
              return [...docs, ...cats, ...rest];
            }
            return reorder(items);
          },
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
    navbar: {
      title: `🔐 ${SITE_TITLE}`,
      items: [
        {
          type: 'dropdown',
          label: '도메인 1: 감사 방법론',
          position: 'left',
          items: [
            { label: '1. 감사 프로세스 및 방법론', to: '/docs/audit-process/intro' },
          ],
        },
        {
          type: 'dropdown',
          label: '도메인 2-3: 거버넌스 & 개발',
          position: 'left',
          items: [
            { label: '2. IT 거버넌스 및 위험 관리', to: '/docs/it-governance/intro' },
            { label: '3. 시스템 취득, 개발 및 구현', to: '/docs/system-development/intro' },
          ],
        },
        {
          type: 'dropdown',
          label: '도메인 4-5: 운영 & 보안',
          position: 'left',
          items: [
            { label: '4. IT 운영 및 비즈니스 탄력성', to: '/docs/it-operations/intro' },
            { label: '5. 정보 자산 보호 및 보안', to: '/docs/information-security/intro' },
          ],
        },
        {
          type: 'dropdown',
          label: '실무 툴킷',
          position: 'left',
          items: [
            { label: '6. 위험 통제 매트릭스 & 템플릿', to: '/docs/audit-toolkits/intro' },
          ],
        },
        {
          href: `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'CISA 도메인',
          items: [
            { label: '1. 감사 프로세스', to: '/docs/audit-process/intro' },
            { label: '2. IT 거버넌스', to: '/docs/it-governance/intro' },
            { label: '3. 시스템 개발', to: '/docs/system-development/intro' },
          ],
        },
        {
          title: '실무 영역',
          items: [
            { label: '4. IT 운영', to: '/docs/it-operations/intro' },
            { label: '5. 정보 보안', to: '/docs/information-security/intro' },
            { label: '6. 감사 툴킷', to: '/docs/audit-toolkits/intro' },
          ],
        },
        {
          title: '참고 표준',
          items: [
            { label: 'ISACA CISA', href: 'https://www.isaca.org/credentialing/cisa' },
            { label: 'COBIT 2019', href: 'https://www.isaca.org/resources/cobit' },
            { label: 'NIST CSF', href: 'https://www.nist.gov/cyberframework' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${SITE_TITLE}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
