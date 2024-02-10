import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://wkaisertexas.github.io",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    partytown({
      // from: https://www.kevinzunigacuellar.com/blog/google-analytics-in-astro/
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  compressHTML: true,
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
});
