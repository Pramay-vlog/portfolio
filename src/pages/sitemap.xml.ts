import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site, url }) => {
  const baseUrl = site ? site.href : url.origin;

  const projects = await getCollection('projects');
  const failures = await getCollection('failures');
  const lab = await getCollection('experiments');

  const staticPages = [
    '',
    '/work',
    '/projects',
    '/lab',
    '/experience',
    '/contact',
    '/failures',
  ];

  const workUrls = projects.map((p) => `/work/${p.id}`);
  const projectUrls = projects.map((p) => `/projects/${p.id}`);
  const failureUrls = failures.map((f) => `/failures/${f.id}`);
  const labUrls = lab.map((e) => `/lab/${e.id}`);
  const researchUrls = lab.map((e) => `/research/${e.id}`);

  const allPaths = Array.from(
    new Set([
      ...staticPages,
      ...workUrls,
      ...projectUrls,
      ...failureUrls,
      ...labUrls,
      ...researchUrls,
    ])
  );

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${allPaths
  .map(
    (path) => `  <url>
    <loc>${baseUrl.replace(/\/$/, '')}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : path.startsWith('/work') || path.startsWith('/projects') ? '0.9' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
