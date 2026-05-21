// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://shoaibibrahim17.github.io',
  base: '/Mothers-care-Website',
  integrations: [
    react()
  ]
});
