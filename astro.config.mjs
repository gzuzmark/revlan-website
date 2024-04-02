import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import nodejs from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import compress from 'astro-compress'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), astroI18next(), svelte(), tailwind(), compress()]
});