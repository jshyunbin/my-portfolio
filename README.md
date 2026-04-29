# Joshua Hyunbin Lee — Portfolio

[![Deploy](https://github.com/jshyunbin/my-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/jshyunbin/my-portfolio/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-2f4858)](https://jshyunbin.github.io/my-portfolio/)

Personal portfolio page built with React + Vite. Features an interactive experience/education timeline, skill stack, language proficiency bars, selected projects, and a dedicated writing section powered by a Markdown pipeline.

## Writing a new blog post

Blog posts live as Markdown files under `src/content/blog/`. Each post gets its own directory — the directory name becomes the URL slug.

### 1. Create the file

```
src/content/blog/your-post-slug/index.md
```

### 2. Add frontmatter

Every file must open with a YAML frontmatter block between `---` fences:

```markdown
---
title: "Your Post Title"
sub: "A short subtitle or framing sentence"
kicker: "Essay"
date: "2026-05-01"
readTime: "5 min"
tags: ["Tag1", "Tag2"]
excerpt: "One or two sentences shown on the blog listing and featured card."
---
```

| Field | Purpose |
|---|---|
| `title` | Full article title |
| `sub` | Italic subtitle shown under the title |
| `kicker` | Short category label (e.g. `Essay`, `Field Notes`, `Reflection`) |
| `date` | ISO date (`YYYY-MM-DD`) — used for sorting newest-first |
| `readTime` | Estimated read time shown in bylines (e.g. `8 min`) |
| `tags` | Array of strings — used for the filter pills on the blog page |
| `excerpt` | Plain-text summary — shown on the blog listing, not inside the article |

### 3. Write the body

Standard Markdown. The elements below map to styled components:

```markdown
The first paragraph is automatically rendered as a large lede — no special syntax needed.

## A section heading

Regular paragraph text. You can use **bold**, *italic*, and [links](https://example.com).

> A blockquote becomes a pull quote with an accent-colored left border.

    ```python
    # fenced code blocks are rendered in JetBrains Mono
    def example():
        pass
    ```
```

### 4. Attach images

Put images in a subfolder next to the markdown file, then reference them with a relative path:

```
src/content/blog/your-post-slug/
  index.md
  images/
    hero.jpg
    diagram.png
```

```markdown
![Alt text](./images/hero.jpg)
```

Vite fingerprints and optimises the images automatically at build time.

### 5. Publish

No registration or imports needed. Just commit the file — the next GitHub Actions deploy picks it up automatically.

```bash
git add src/content/blog/your-post-slug/
git commit -m "feat: add post — your-post-slug"
git push
```

The post will appear on `/blog` sorted by date, and be reachable at `/#/article/your-post-slug`.
