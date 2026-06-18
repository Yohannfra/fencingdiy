// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://fencingdiy.com',

  integrations: [
    starlight({
      title: "FencingDIY",
      logo: { src: "./public/logo-only.png", alt: "logo" },

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
