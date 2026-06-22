// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://fencingdiy.com",

  // Forward the bare domain to the default locale so `/` doesn't 404.
  redirects: { "/": "/en/" },

  integrations: [
    starlight({
      title: "FencingDIY",
      logo: { src: "./public/logo-only.png", alt: "logo" },

      // Set English as the default language for this site.
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
        },
      },

      customCss: ["./src/styles/global.css"],

      components: {
        // Force light theme: drop the theme toggle, hard-code light.
        ThemeSelect: "./src/components/ThemeSelect.astro",
        ThemeProvider: "./src/components/ThemeProvider.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/yohannfra/fencingdiy",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
            {
              label: "Basic weapon tester",
              slug: "guides/basic-weapon-tester",
            },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
