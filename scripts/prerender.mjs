/**
 * Pre-builds every page into its own HTML file (dist/about/index.html, ...), plus 404.html,
 * sitemap.xml and robots.txt. GitHub Pages then serves real pages with HTTP 200,
 * with the right title / description / canonical for Google.
 * Runs automatically as part of `npm run build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { site, posts, faqs } from '../src/data/siteData.js';
import { DESCRIPTIONS, DEFAULT_DESC } from '../src/hooks/useDocumentTitle.js';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const { render } = await import(pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const pages = [
  { url: '/', title: '', desc: DEFAULT_DESC, faq: true },
  { url: '/about/', title: 'About' },
  { url: '/service/', title: 'Service', faq: true },
  { url: '/tools/', title: 'RO Care Tools' },
  { url: '/blog/', title: 'Blog' },
  { url: '/enquiry/', title: 'Enquiry' },
  { url: '/contact/', title: 'Contact' },
  { url: '/privacy-policy/', title: 'Privacy Policy' },
  ...posts.map((p) => ({ url: `/blog/${p.slug}/`, title: p.title, desc: p.excerpt })),
];

function build(page, html, { noindex = false } = {}) {
  const fullTitle = page.title ? `${page.title} – Aqua Seva Service` : 'Aqua Seva Service – Water Purifier Service';
  const desc = page.desc || DESCRIPTIONS[page.title] || DEFAULT_DESC;
  const canonical = `${site.url}${page.url}`;
  let out = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${esc(fullTitle)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(desc)}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(fullTitle)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(desc)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, noindex ? '' : `<link rel="canonical" href="${canonical}" />\n    <meta property="og:url" content="${canonical}" />`);
  let extra = '';
  if (noindex) extra += '<meta name="robots" content="noindex" />\n    ';
  if (page.faq) {
    const ld = {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    extra += `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n    `;
  }
  return out.replace('</head>', `    ${extra}</head>`);
}

for (const page of pages) {
  const html = await render(page.url);
  const dir = path.join(dist, page.url);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), build(page, html));
  console.log('prerendered', page.url, `(${Math.round(html.length / 1024)} KB)`);
}

// 404.html – GitHub Pages serves this (with a real 404 status) for unknown addresses
const notFound = await render('/page-not-found/');
fs.writeFileSync(path.join(dist, '404.html'), build({ url: '/404.html', title: 'Page not found' }, notFound, { noindex: true }));
console.log('prerendered 404.html');

// sitemap + robots (always match site.url)
const urls = pages.map((p) => `  <url><loc>${site.url}${p.url}</loc></url>`).join('\n');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
console.log('sitemap.xml + robots.txt written for', site.url);

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
