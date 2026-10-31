import { sitePath } from '../shared/site-path';
export const GET = () => {
  const site = import.meta.env.SITE_URL;
  const urls = site ? ['en/', 'es/'].map(route => `<url><loc>${new URL(sitePath(route), site).href}</loc></url>`).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
