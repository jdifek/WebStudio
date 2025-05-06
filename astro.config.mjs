import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  // When your site is deployed, this will be your base URL
  // For example, if your site is deployed at https://example.com/my-site/
  // then set base: '/my-site/'
  // If deployed at the root (https://example.com/), leave this as '/'
  base: '/',
});