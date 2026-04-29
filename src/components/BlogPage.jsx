import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllArticles } from '../lib/articles'
import BlogCard from './BlogCard'

export default function BlogPage({ mobile }) {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('All')
  const all = getAllArticles()
  const tags = ['All', ...Array.from(new Set(all.flatMap((p) => p.tags)))]
  const visible = filter === 'All' ? all : all.filter((p) => p.tags.includes(filter))
  const featured = visible[0]
  const rest = visible.slice(1)

  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', padding: mobile ? '32px 22px 60px' : '60px 80px 80px', fontFamily: 'var(--sans)', boxSizing: 'border-box', minHeight: '100vh' }}>

      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: mobile ? 28 : 48, fontFamily: 'var(--mono)', fontSize: mobile ? 9.5 : 10.5, color: 'var(--ink-3)', letterSpacing: 1.5 }}>
        <button
          onClick={() => navigate('/')}
          style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent)' }}
        >
          ← BACK TO PORTFOLIO
        </button>
        <span>WRITING</span>
        {!mobile && <span>{all.length} ENTRIES · APR 2026</span>}
      </div>

      {/* Title block */}
      <header style={{ marginBottom: mobile ? 36 : 64, paddingBottom: mobile ? 28 : 44, borderBottom: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.4fr 1fr', gap: mobile ? 20 : 56, alignItems: 'end' }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: mobile ? 10 : 10.5, color: 'var(--accent)', letterSpacing: 2.5, marginBottom: 14, fontWeight: 600 }}>
            JOURNAL — VOL. 01
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 64 : 124, fontWeight: 500, letterSpacing: mobile ? -1.6 : -3.5, lineHeight: 0.92, margin: 0, color: 'var(--ink)' }}>
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Writing</span>, mostly
            <br />at midnight.
          </h1>
        </div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 17 : 20, fontStyle: 'italic', color: 'var(--ink-2)', lineHeight: 1.45, letterSpacing: -0.2, paddingBottom: mobile ? 0 : 8 }}>
          A record of ordinary days — the small moments, passing thoughts, and routines that make up a life.
        </div>
      </header>

      {/* Filters */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: mobile ? 28 : 40, flexWrap: 'wrap', gap: 14 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', letterSpacing: 1.5, marginRight: 6 }}>FILTER ·</span>
          {tags.map((t) => {
            const active = filter === t
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
                style={{
                  fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: 0.6,
                  padding: '6px 12px', borderRadius: 999,
                  border: `1px solid ${active ? 'var(--accent)' : 'var(--rule)'}`,
                  background: active ? 'var(--accent)' : 'transparent',
                  color: active ? 'var(--paper)' : 'var(--ink-2)',
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
              >
                {t}
              </button>
            )
          })}
        </div>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', letterSpacing: 1.4 }}>
          SORT · NEWEST FIRST ↓
        </span>
      </div>

      {/* Featured */}
      {featured && (
        <article style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.05fr 1fr', gap: mobile ? 18 : 56, paddingBottom: mobile ? 36 : 56, marginBottom: mobile ? 36 : 56, borderBottom: '1px solid var(--rule)', alignItems: 'stretch' }}>
          {/* Visual placeholder */}
          <div style={{ position: 'relative', minHeight: mobile ? 200 : 360, maxHeight: mobile ? 300 : 480, overflow: 'hidden', background: 'var(--paper-2)', border: '1px solid var(--rule)' }}>
            <svg width="100%" height="100%" viewBox="0 0 800 560" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
              <defs>
                <pattern id={`bp-feat-${mobile ? 'm' : 'd'}`} patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(45)">
                  <rect width="14" height="14" fill="var(--paper-2)" />
                  <line x1="0" y1="0" x2="0" y2="14" stroke="var(--rule)" strokeWidth="1.4" />
                </pattern>
              </defs>
              <rect width="800" height="560" fill={`url(#bp-feat-${mobile ? 'm' : 'd'})`} />
            </svg>
            <div style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 2, padding: '5px 10px', background: 'var(--paper)', border: '1px solid var(--accent)', fontWeight: 600 }}>
              ★ FEATURED
            </div>
          </div>
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--accent)', letterSpacing: 2, fontWeight: 600, textTransform: 'uppercase' }}>
                {featured.kicker}
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', letterSpacing: 0.4 }}>
                {featured.date} · {featured.readTime}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 36 : 56, fontWeight: 500, lineHeight: 1.0, letterSpacing: mobile ? -0.8 : -1.6, margin: 0, color: 'var(--ink)' }}>
              {featured.title}
            </h2>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: mobile ? 17 : 22, color: 'var(--ink-2)', marginTop: 10 }}>
              {featured.sub}
            </div>
            <p style={{ fontSize: mobile ? 13.5 : 15, color: 'var(--ink-2)', lineHeight: 1.6, marginTop: 18, marginBottom: 0, maxWidth: 540 }}>
              {featured.excerpt}
            </p>
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {featured.tags.map((t) => (
                  <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', padding: '3px 8px', borderRadius: 999, border: '1px solid var(--rule)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => navigate(`/article/${featured.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}
                style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: 1.4, color: 'var(--paper)', background: 'var(--ink)', padding: '9px 14px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}
              >
                Read essay →
              </button>
            </div>
          </div>
        </article>
      )}

      {/* Post list */}
      <section>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', letterSpacing: 2, marginBottom: 18, display: 'flex', justifyContent: 'space-between' }}>
          <span>ALL ENTRIES</span>
          <span>{visible.length} POST{visible.length === 1 ? '' : 'S'}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {rest.map((p, i) => (
            <BlogCard key={i} post={p} mobile={mobile} />
          ))}
          {rest.length === 0 && (
            <div style={{ padding: '48px 0', textAlign: 'center', fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--ink-3)', borderTop: '1px solid var(--rule)' }}>
              Nothing else under "{filter}" yet — check back soon.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      {/* <section style={{ marginTop: mobile ? 56 : 88, padding: mobile ? '28px 22px' : '44px 56px', background: 'var(--paper-2)', border: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.2fr 1fr', gap: mobile ? 18 : 44, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--accent)', letterSpacing: 2, fontWeight: 600, marginBottom: 8 }}>
            ✶ NEW POSTS, SOMETIMES
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 26 : 34, fontWeight: 500, letterSpacing: -0.5, lineHeight: 1.1, color: 'var(--ink)' }}>
            Get a quiet email when something new lands here.
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 8 }}>
          <input
            type="email"
            placeholder="you@somewhere.kr"
            style={{ flex: 1, padding: '12px 14px', border: '1px solid var(--rule)', background: 'var(--paper)', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink)', outline: 'none' }}
          />
          <button type="submit" style={{ padding: '12px 18px', border: '1px solid var(--ink)', background: 'var(--ink)', color: 'var(--paper)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', cursor: 'pointer' }}>
            Subscribe
          </button>
        </form>
      </section> */}

      {/* Footer */}
      <footer style={{ marginTop: mobile ? 40 : 56, paddingTop: 20, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', letterSpacing: 1, flexWrap: 'wrap', gap: 10 }}>
        <span>© 2026 JOSHUA HYUNBIN LEE · WRITING</span>
        <span>PERSONAL BLOG</span>
      </footer>
    </div>
  )
}
