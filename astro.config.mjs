import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import nodejs from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";


console.log(process.env.NODE_ENV === 'production');

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), astroI18next(), svelte(), tailwind(), process.env.NODE_ENV === 'production' && (await import("@playform/compress")).default()].filter(Boolean)
});