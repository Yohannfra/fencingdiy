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
        // French docs in `src/content/docs/fr/` (`fr` is a built-in
        // Starlight UI language, so framework strings translate automatically).
        fr: {
          label: "Français",
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
          translations: { fr: "Guides" },
          items: [
            // Each item here is one entry in the navigation menu.
            // `slug` is locale-agnostic — Starlight resolves it to the
            // current language; `translations` localizes the label.
            {
              label: "Example Guide",
              slug: "guides/example",
              translations: { fr: "Guide d'exemple" },
            },
            {
              label: "Basic weapon tester",
              slug: "guides/basic-weapon-tester",
              translations: { fr: "Testeur d'arme basique" },
            },
          ],
        },
        {
          label: "Reference",
          translations: { fr: "Référence" },
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
