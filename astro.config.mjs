import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// CAMBIA esta URL por tu dominio real cuando lo tengas (ej. https://tuempleo.com)
export default defineConfig({
  site: 'https://empleova.com',
  integrations: [sitemap()],
});
