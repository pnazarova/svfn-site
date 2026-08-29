import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://siliconvalleyfaculty.com',
  // The Venture Mindset was rebuilt as Inside the Deal in August 2026.
  // The old URL was live and indexed, so it must not 404.
  redirects: {
    '/programs/venture-mindset': '/programs/inside-the-deal',
  },
  integrations: [sitemap()],
});
