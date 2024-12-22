// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import vue from "@astrojs/vue";

export default defineConfig({
  site: "https://www.timeaton.dev/",
  base: "/",
  integrations: [sitemap(), mdx(), vue()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
});