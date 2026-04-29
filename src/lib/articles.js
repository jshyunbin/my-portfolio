import matter from 'gray-matter'
import { marked } from 'marked'

// Import all markdown files as raw strings at build time.
// The directory name becomes the slug.
const rawFiles = import.meta.glob('../content/blog/*/index.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseFile(path, raw) {
  const slug = path.match(/\/content\/blog\/([^/]+)\/index\.md$/)?.[1] ?? ''
  const { data: frontmatter, content } = matter(raw)
  return {
    slug,
    ...frontmatter,
    html: marked(content),
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
