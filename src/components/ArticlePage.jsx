import { useNavigate } from 'react-router-dom'
import { PORTFOLIO_DATA, SAMPLE_ARTICLE } from '../data'
import PortraitPlaceholder from './PortraitPlaceholder'

function ArticleBlock({ block }) {
  if (block.kind === 'lede') return (
    <p style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.45, color: 'var(--ink)', fontWeight: 400, margin: '0 0 32px' }}>
      {block.text}
    </p>
  )
  if (block.kind === 'h2') return (
    <h2 style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 500, letterSpacing: -0.6, color: 'var(--ink)', margin: '44px 0 14px' }}>
      {block.text}
    </h2>
  )
  if (block.kind === 'pull') return (
    <blockquote style={{ margin: '32px 0', padding: '12px 0 12px 28px', borderLeft: '3px solid var(--accent)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, color: 'var(--ink-2)' }}>
      {block.text}
    </blockquote>
  )
  if (block.kind === 'code') return (
    <pre style={{ background: 'var(--paper-2)', border: '1px solid var(--rule)', padding: '18px 20px', margin: '24px 0', overflowX: 'auto', fontFamily: 'var(--mono)', fontSize: 12.5, lineHeight: 1.6, color: 'var(--ink)', borderRadius: 2 }}>
      <code>{block.text}</code>
    </pre>
  )
  return (
    <p style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 22px' }}>
      {block.text}
    </p>
  )
}

export default function ArticlePage({ mobile }) {
  const navigate = useNavigate()
  const a = SAMPLE_ARTICLE
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', padding: mobile ? '28px 22px 40px' : '60px 80px 80px', fontFamily: 'var(--sans)', minHeight: '100vh' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: mobile ? 28 : 48, fontFamily: 'var(--mono)', fontSize: mobile ? 9.5 : 10.5, color: 'var(--ink-3)', letterSpacing: 1.5 }}>
        <button onClick={() => navigate(-1)} style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent)' }}>
          ← BACK
        </button>
        <span>JHL · WRITING</span>
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
            <PortraitPlaceholder size={mobile ? 36 : 44} />
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: mobile ? 12 : 13, fontWeight: 500, color: 'var(--ink)' }}>Joshua Hyunbin Lee</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: mobile ? 10 : 10.5, color: 'var(--ink-3)', letterSpacing: 0.4, marginTop: 2 }}>{a.date} · {a.readTime}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {a.tags.map((t) => (
              <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', padding: '3px 8px', borderRadius: 999, border: '1px solid var(--rule)' }}>{t}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero image placeholder */}
      <div style={{ maxWidth: 1080, margin: mobile ? '0 -22px 40px' : '0 auto 56px', aspectRatio: '16 / 9', overflow: 'hidden' }}>
        <svg width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
          <defs>
            <pattern id="art-stripes" patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(45)">
              <rect width="14" height="14" fill="var(--paper-2)" />
              <line x1="0" y1="0" x2="0" y2="14" stroke="var(--rule)" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="1600" height="900" fill="url(#art-stripes)" />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontFamily="var(--mono)" fontSize="14" fill="var(--ink-3)" letterSpacing="2">[ HERO IMAGE · 16:9 ]</text>
        </svg>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 720, margin: mobile ? '0' : '0 auto' }}>
        {a.body.map((b, i) => <ArticleBlock key={i} block={b} />)}

        {/* Author footer */}
        <div style={{ marginTop: 48, paddingTop: 28, borderTop: '1px solid var(--rule)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <PortraitPlaceholder size={mobile ? 48 : 64} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', letterSpacing: 1.5, marginBottom: 4 }}>WRITTEN BY</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 22 : 26, fontWeight: 500, color: 'var(--ink)', letterSpacing: -0.3 }}>Joshua Hyunbin Lee</div>
            <div style={{ fontSize: mobile ? 12.5 : 13.5, color: 'var(--ink-2)', marginTop: 6, lineHeight: 1.55 }}>
              {PORTFOLIO_DATA.tagline}. Writes about robotics, RL, and the texture of doing research as an undergrad.
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section style={{ maxWidth: 1080, margin: mobile ? '48px 0 0' : '80px auto 0', paddingTop: 24, borderTop: '1px solid var(--rule)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--accent)', letterSpacing: 2.5, marginBottom: 18 }}>KEEP READING</div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 0 : 32 }}>
          {a.related.map((r, i) => (
            <div key={i} style={{ padding: '18px 0', borderTop: '1px solid var(--rule)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 1.6, fontWeight: 600, marginBottom: 4 }}>{r.kicker.toUpperCase()}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 22 : 26, fontWeight: 500, letterSpacing: -0.4, color: 'var(--ink)', lineHeight: 1.1 }}>{r.title}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', letterSpacing: 0.4, marginTop: 6 }}>{r.date}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
