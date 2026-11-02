import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thecognitiolab.com',
  integrations: [sitemap()],
  // Static output — deploys to Cloudflare Pages, Netlify, or any static host.
});
