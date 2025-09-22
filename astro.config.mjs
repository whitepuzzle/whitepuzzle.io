import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/postcss';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://whitepuzzle.io',
  integrations: [
    sitemap(),
    mdx()
  ],
  output: 'static',
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  },
});