// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    format: 'directory',
  },
  site: process.env.GITHUB_PAGES ? 'https://shoaibibrahim17.github.io' : undefined,
  base: process.env.GITHUB_PAGES ? '/school-website' : undefined,
  integrations: [
    react()
  ]
});
