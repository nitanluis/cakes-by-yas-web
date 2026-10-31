import { defineConfig } from 'astro/config';

// Keep preview URLs out of canonical metadata until an actual domain is supplied.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  devToolbar: { enabled: false },
});
