// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import db from "@astrojs/db";

export default defineConfig({
  site: "https://www.timeaton.dev/",
  base: "/",
  integrations: [sitemap(), tailwind(), mdx(), icon(), db()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
});
