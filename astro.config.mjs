import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import nodejs from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), astroI18next(), svelte(), tailwind(), playformCompress()]
});