import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  // Also can be 'static' or 'hybrid'
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    maxDuration: 8
  })
});