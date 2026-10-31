import { sitePath } from '../shared/site-path';
export const GET = () => {
  const site = import.meta.env.SITE_URL;
  const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true' && !!site;
  return new Response(indexable ? `User-agent: *\nAllow: /\nSitemap: ${new URL(sitePath('sitemap.xml'), site).href}\n` : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain' } });
};
