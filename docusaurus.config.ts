import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Async RPC",
  tagline: "Specification for a holistic cloud programming model.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://async-rpc.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "resonatehq", // Usually your GitHub org/user name.
  projectName: "async-rpc.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root (ref: https://docusaurus.io/docs/next/docs-introduction#home-page-docs)
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/resonatehq/async-rpc.io/tree/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
          exclude: ["**/code/**"],
        },
        blog: false,
        theme: {
          customCss: [
            //            "./static/css/custom.css",
            "./static/css/boxicons.min.css",
          ],
        },
        gtag: {
          trackingID: "G-0660YY8LZF",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  scripts: [
    {
      src: "/scripts/fullstory.js",
      async: true,
    },
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      "data-website-id": "0f3cf17e-47fa-427a-b0fd-464d33f0bb16",
      "data-project-name": "ask echo",
      "data-project-color": "#080a0e",
      "data-project-logo": "/img/echo-logo-white.svg",
      "data-user-analytics-fingerprint-enabled": "true",
      "data-button-text": "ask echo",
      "data-modal-override-open-class-ask-ai": "ask-echo",
      "data-modal-override-open-class-search": "search-echo",
      "data-modal-title-ask-ai": "ai developer asisstant",
      "data-modal-title-search": "Search Resonate HQ",
      "data-modal-image": "/img/echo-logo.svg",
      "data-modal-disclaimer":
        "I am Echo, Resonate HQ's AI developer assistant. I have access to all of Resonate HQ's information corpus. Responses are generated by combining sources to provide the best possible answer. However, sometimes I may make a mistake, so please use your best judgement. Help me improve by providing a thumbs up or thumbs down after each response.",
      "data-modal-ask-ai-input-placeholder":
        "Ask me a question about Distributed Async Await",
      "data-modal-open-on-command-k": "true",

      "data-modal-example-questions-title": "For example...",
      "data-search-mode-enabled": "true",
      "data-switch-show-icons": "true",
      "data-switch-color": "#080a0e",
      "data-button-height": "6.5rem",
      "data-button-width": "6.5rem",
      "data-button-text-color": "#efefef",
      "data-button-text-font-weight": "300",
      "data-button-image-height": "4rem",
      "data-button-image-width": "4rem",
      "data-button-border-radius": "0px",
      "data-button-text-font-family": "monospace",
      //"data-modal-full-screen": "true",
      async: true,
    },
    {
      src: "/scripts/cookiebanner.js",
      async: true,
    },
  ],
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      rel: "stylesheet",
    },
  ],

  themeConfig: {
    image: "img/echo.png", // used for link previews
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Distributed Async Await",
      logo: {
        alt: "Distributed Async Await logo",
        src: "img/echo-logo.svg",
        href: "https://distributed-async-await.io",
        target: "_self",
        width: 40,
      },
      items: [
        {
          to: "https://resonatehqio.substack.com",
          html: '<i class="bx bx-md bx-pen"></i> journal',
          position: "right",
        },
        {
          to: "https://resonatehq.io/rsvp",
          html: '<i class="bx bx-md bx-calendar-event"></i> rsvp',
          position: "right",
        },
        {
          href: "https://resonatehq.io/discord",
          html: '<i class="bx bx-md bxl-discord"></i> discord',
          position: "right",
        },
        {
          href: "https://github.com/resonatehq",
          html: '<i class="bx bx-md bxl-github"></i> github',
          position: "right",
        },
      ],
    },

    footer: {
      style: "light",
      links: [
        {
          html: `
            <a href="https://journal.resonatehq.io" target="_blank" rel="noopener noreferrer" aria-label="Resonate Twitter">
              <i class="bx bx-sm bx-pen"></i> journal
            </a>
          `,
        },
        {
          html: `
            <a href="https://resonatehq.io/rsvp" target="_blank" rel="noopener noreferrer" aria-label="Resonate Twitter">
              <i class="bx bx-sm bx-calendar-event"></i> rsvp
            </a>
          `,
        },
        {
          html: `
            <a href="https://twitter.com/resonatehqio" target="_blank" rel="noopener noreferrer" aria-label="Resonate Twitter">
              <i class="bx bx-sm bxl-twitter"></i> twitter
            </a>
          `,
        },
        {
          html: `
            <a href="https://resonatehq.io/discord" target="_blank" rel="noopener noreferrer" aria-label="Resonate HQ Discord">
              <i class="bx bx-sm bxl-discord"></i> discord
            </a>
          `,
        },
        {
          html: `
            <a href="https://github.com/resonatehq" target="_blank" rel="noopener noreferrer" aria-label="Resonate GitHub">
              <i class="bx bx-sm bxl-github"></i> github
            </a>
          `,
        },
        {
          html: `
            <a href="https://www.linkedin.com/company/resonatehqio" target="_blank" rel="noopener noreferrer" aria-label="Resonate HQ LinkedIn">
              <i class="bx bx-sm bxl-linkedin"></i> linkedin
            </a>
          `,
        },
        {
          html: `
            <a href="https://www.resonatehq.io/privacy-policy" target="_blank" rel="noopener noreferrer" aria-label="Resonate HQ LinkedIn">
              <i class="bx bx-sm bx-info-circle"></i> privacy policy
            </a>
          `,
        },
        {
          html: `
            <a href="https://www.resonatehq.io/terms-and-conditions" target="_blank" rel="noopener noreferrer" aria-label="Resonate HQ LinkedIn">
              <i class="bx bx-sm bx-info-circle"></i> terms and conditions
            </a>
          `,
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ResonateHQ, Inc.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
