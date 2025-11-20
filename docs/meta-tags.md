# Meta tags for modern web pages — practical guide

This short doc explains what a good set of meta tags looks like, why they matter, and how to use them. It's written in a friendly, conversational tone — think of it as notes you could share with a teammate when tuning SEO and social previews.

## Why meta tags matter

Meta tags are the little instructions you give to search engines and social platforms about how your page should be presented. When someone pastes a link into Slack, Twitter, or WhatsApp, the content shown (title, description, image) mostly comes from Open Graph and Twitter tags. For search engines, `title` and `description` help influence how your page looks in search results.

Good meta tags help:

- Improve click-through rates (a clear title + compelling description).
- Ensure social previews look great (right image, right text).
- Provide consistent language/locale information for international sites.
- Give search engines structured hints about page type and indexing rules.

Keep them simple, honest, and descriptive.

## The essential tags (what I always add)

1. Title (`<title>`) — keep it concise and human-friendly.
   - Use a format like: `Name — Short description` or `Page title | SiteName`.
   - Keep it under ~60 characters if possible so it doesn't truncate in SERPs.

2. Description (`<meta name="description">`) — 120–160 characters is a good target.
   - Explain what the page is and why someone should click.
   - Avoid stuffing keywords; write for people.

3. Canonical link (`<link rel="canonical">`) — points to the canonical URL of the page.
   - Prevents duplicate-content issues when the same content is reachable through multiple URLs.

4. Open Graph (og:\*)
   - `og:title`, `og:description`, `og:image`, `og:url`, `og:type`.
   - `og:image` should be at least 1200×630 for a nice large preview on Facebook and LinkedIn.
   - `og:type` helps (article, profile, website, etc.) — use `article` for blog posts, `profile` for personal pages.

5. Twitter cards (`twitter:*`)
   - `twitter:card` — use `summary_large_image` when you have a good hero image.
   - `twitter:title`, `twitter:description`, `twitter:image`.

6. Locale / language
   - `og:locale` helps social networks present language-appropriate content. Use `en_US`, `es_ES`, etc.
   - If your site supports multiple languages, set this dynamically per-page.

7. Robots
   - `meta name="robots" content="index,follow"` for public pages.
   - Use `noindex` for thank-you pages, admin pages, or internal previews.

## Helpful extras

- Structured data (JSON-LD) when relevant: articles, recipes, events, job postings, products.
  - Schemas help search engines understand your content and may enable rich snippets.
- Article-specific tags: `article:published_time`, `article:author` for blog posts.
- Twitter-specific publisher/creator tags if you have verified accounts.

## Multi-page / multi-type approach

I like to centralize meta tag generation in a small helper/service. The service accepts a "page type" and a small set of data and then sets the canonical, OG and Twitter tags accordingly. Example page types:

- profile (personal/about page)
- article (blog post)
- job (job posting)
- resume (CV page)
- home / landing

Each type can have its own rules for defaults (image size, `og:type`, structured data schema, etc.).

## Internationalization / language tips

- Always set language-specific text for `title` and `description` when you serve multiple locales.
- Use `og:locale` and `og:locale:alternate` if you serve multiple languages of the same content.
- Avoid auto-redirects from language-detection before you set canonical links — it can be confusing for crawlers.

## Practical rules of thumb

- Always provide an image and test how it looks when shared on Slack, Twitter, and LinkedIn.
- Keep titles short and descriptions helpful; write to humans, not bots.
- Use canonical links to signal the single source of truth.
- Update tags when content changes (e.g., new title, new author), especially for articles.
- Centralize tag generation in a service so every page follows consistent rules.

## Example minimal tag set for a profile page

- `<title>Pedro Carpio — Designer & Developer</title>`
- `<meta name="description" content="Multi-talented designer and engineer. Portfolio, projects and contact." />`
- `<link rel="canonical" href="https://example.com/me" />`
- `<meta property="og:title" content="Pedro Carpio — Designer & Developer" />`
- `<meta property="og:description" content="Multi-talented designer and engineer. Portfolio, projects and contact." />`
- `<meta property="og:image" content="https://example.com/kusillo.webp" />`
- `<meta property="og:type" content="profile" />`
- `<meta property="og:locale" content="es_ES" />`
- `<meta name="twitter:card" content="summary_large_image" />`

## Final note (friendly)

Meta tags aren't magic, but they make a big practical difference. Keep them consistent, readable, and localized where it matters. If you want, I can extend the service to emit JSON-LD for articles and jobs next — just say the word and I’ll add it.
