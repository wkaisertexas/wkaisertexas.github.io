import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://wkaisertexas.github.io',
  integrations: [mdx(), sitemap(), tailwind(), partytown({
    // from: https://www.kevinzunigacuellar.com/blog/google-analytics-in-astro/
    config: {
      forward: ["dataLayer.push"]
    }
  }),
  image({
    // from: https://docs.astro.build/en/guides/integrations-guide/image/
    serviceEntryPoint: '@astrojs/image/sharp',
  }),
  ],
  compressHTML: true,
  output: "static"
});