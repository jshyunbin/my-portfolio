import { useNavigate, useParams } from 'react-router-dom'
import { getArticleBySlug, getAllArticles } from '../lib/articles'
import profilePhoto from '../assets/profile.jpeg'
import { PORTFOLIO_DATA } from '../data'

export default function ArticlePage({ mobile }) {
  const navigate = useNavigate()
  const { slug } = useParams()
  const a = getArticleBySlug(slug)

  if (!a) {
    return (
      <div style={{ background: 'var(--paper)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', color: 'var(--ink-3)', gap: 16 }}>
        <div style={{ fontSize: 11, letterSpacing: 2 }}>404 · NOT FOUND</div>
        <button onClick={() => navigate('/blog')} style={{ all: 'unset', cursor: 'pointer', color: 'var(--accent)', fontSize: 11, letterSpacing: 1.5 }}>← BACK TO WRITING</button>
      </div>
    )
  }

  const related = getAllArticles().filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', padding: mobile ? '28px 22px 40px' : '60px 80px 80px', fontFamily: 'var(--sans)', minHeight: '100vh' }}>

      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: mobile ? 28 : 48, fontFamily: 'var(--mono)', fontSize: mobile ? 9.5 : 10.5, color: 'var(--ink-3)', letterSpacing: 1.5 }}>
        <button onClick={() => navigate('/blog')} style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent)' }}>
          ← WRITING
        </button>
        <span>WRITING</span>
        {!mobile && <span>{a.readTime.toUpperCase()}</span>}
      </div>

      {/* Header */}
      <header style={{ maxWidth: 760, margin: mobile ? '0' : '0 auto', paddingBottom: mobile ? 28 : 44, marginBottom: mobile ? 28 : 44, borderBottom: '1px solid var(--rule)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: mobile ? 10 : 10.5, color: 'var(--accent)', letterSpacing: 2.5, marginBottom: 18 }}>
          {a.kicker.toUpperCase()}
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 44 : 72, fontWeight: 500, lineHeight: 0.98, letterSpacing: -1.6, margin: 0, color: 'var(--ink)' }}>
          {a.title}
        </h1>
        <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: mobile ? 18 : 24, color: 'var(--ink-2)', marginTop: 14 }}>
          {a.sub}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: mobile ? 22 : 32, flexWrap: 'wrap', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              src={profilePhoto}
              alt="Joshua Hyunbin Lee"
              style={{ width: mobile ? 36 : 44, height: mobile ? 36 : 44, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--rule)' }}
            />
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: mobile ? 12 : 13, fontWeight: 500, color: 'var(--ink)' }}>Joshua Hyunbin Lee</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: mobile ? 10 : 10.5, color: 'var(--ink-3)', letterSpacing: 0.4, marginTop: 2 }}>
                {new Date(a.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} · {a.readTime}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {a.tags.map((t) => (
              <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', padding: '3px 8px', borderRadius: 999, border: '1px solid var(--rule)' }}>{t}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero image */}
      {a.heroImage && (
        <div style={{ maxWidth: 1080, margin: mobile ? '0 -22px 40px' : '0 auto 56px', overflow: 'hidden' }}>
          <img
            src={a.heroImage}
            alt=""
            style={{ display: 'block', width: '100%', maxHeight: 560, objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Body */}
      <div
        className="article-body"
        style={{ maxWidth: 720, margin: mobile ? '0' : '0 auto' }}
        dangerouslySetInnerHTML={{ __html: a.html }}
      />

      {/* Author footer */}
      <div style={{ maxWidth: 720, margin: mobile ? '48px 0 0' : '48px auto 0', paddingTop: 28, borderTop: '1px solid var(--rule)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <img
          src={profilePhoto}
          alt="Joshua Hyunbin Lee"
          style={{ width: mobile ? 48 : 64, height: mobile ? 48 : 64, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--rule)', flexShrink: 0 }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', letterSpacing: 1.5, marginBottom: 4 }}>WRITTEN BY</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 22 : 26, fontWeight: 500, color: 'var(--ink)', letterSpacing: -0.3 }}>Joshua Hyunbin Lee</div>
          <div style={{ fontSize: mobile ? 12.5 : 13.5, color: 'var(--ink-2)', marginTop: 6, lineHeight: 1.55 }}>
            {PORTFOLIO_DATA.tagline}. 
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ maxWidth: 1080, margin: mobile ? '48px 0 0' : '80px auto 0', paddingTop: 24, borderTop: '1px solid var(--rule)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--accent)', letterSpacing: 2.5, marginBottom: 18 }}>KEEP READING</div>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 0 : 32 }}>
            {related.map((r) => (
              <div
                key={r.slug}
                onClick={() => navigate(`/article/${r.slug}`)}
                style={{ padding: '18px 0', borderTop: '1px solid var(--rule)', cursor: 'pointer' }}
              >
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 1.6, fontWeight: 600, marginBottom: 4 }}>{r.kicker.toUpperCase()}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 22 : 26, fontWeight: 500, letterSpacing: -0.4, color: 'var(--ink)', lineHeight: 1.1 }}>{r.title}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', letterSpacing: 0.4, marginTop: 6 }}>
                  {new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
