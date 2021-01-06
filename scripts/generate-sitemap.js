const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');
const urljoin = require('url-join');

const homepageUrl = 'https://deanbowler.dev';

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');
  const pages = await globby([
    'pages/**/*.tsx',
    '_posts/*.md',
    '!pages/_*.tsx',
    '!pages/**/[[]**[]].tsx',
    '!pages/api',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map(page => {
                const path = page
                  .replace('pages', '')
                  .replace('_posts', 'blog')
                  .replace('/index.tsx', '')
                  .replace('.tsx', '')
                  .replace('.md', '')
                  .replace('.mdx', '');
                return `
                        <url>
                            <loc>${urljoin(homepageUrl, path)}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
