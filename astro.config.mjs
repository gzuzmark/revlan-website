import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  experimental: {
    hybridOutput: true,
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    svelte(),
    astroI18next(),
  ],
});
