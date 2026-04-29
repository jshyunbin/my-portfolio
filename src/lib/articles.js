import { marked } from 'marked'

// Import all markdown files as raw strings at build time.
const rawFiles = import.meta.glob('../content/blog/*/index.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

// Import all blog images through Vite's asset pipeline so they get
// fingerprinted and correctly pathed in production.
const imageAssets = import.meta.glob('../content/blog/*/images/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

// Lightweight browser-safe frontmatter parser.
// Handles string and array (bracket-syntax) values — no Node APIs needed.
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const val = line.slice(colon + 1).trim()
    if (val.startsWith('[')) {
      data[key] = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      data[key] = val.replace(/^["']|["']$/g, '')
    }
  }

  return { data, content: match[2] }
}

// Rewrite ./images/X src attributes to the Vite-processed asset URL.
function resolveImageSrcs(html, slug) {
  return html.replace(/src="(\.\/images\/[^"]+)"/g, (_, relativeSrc) => {
    const filename = relativeSrc.slice('./images/'.length)
    const key = `../content/blog/${slug}/images/${filename}`
    const url = imageAssets[key] ?? relativeSrc
    return `src="${url}"`
  })
}

function parseFile(path, raw) {
  const slug = path.match(/\/content\/blog\/([^/]+)\/index\.md$/)?.[1] ?? ''
  const { data, content } = parseFrontmatter(raw)

  let html = marked(content)
  html = resolveImageSrcs(html, slug)

  // Extract the first image in the article to use as the hero.
  const heroMatch = html.match(/<img[^>]+src="([^"]+)"/)
  const heroImage = heroMatch ? heroMatch[1] : null

  return {
    slug,
    ...data,
    html,
    heroImage,
  }
}

let _cache = null

export function getAllArticles() {
  if (_cache) return _cache
  _cache = Object.entries(rawFiles)
    .map(([path, raw]) => parseFile(path, raw))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
  return _cache
}

export function getArticleBySlug(slug) {
  return getAllArticles().find((a) => a.slug === slug) ?? null
}
