import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BlogCard({ post, mobile, featured }) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()
  const slug = post.slug ?? post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/article/${slug}`)}
      style={{
        position: 'relative',
        padding: mobile ? '18px 0' : featured ? '0' : '22px 0',
        borderTop: featured ? 'none' : '1px solid var(--rule)',
        cursor: 'pointer',
        transition: 'all .3s cubic-bezier(.2,.7,.3,1)',
      }}
    >
      {!featured && (
        <span aria-hidden style={{ position: 'absolute', left: 0, top: -1, height: 1, width: hovered ? '100%' : '0%', background: 'var(--accent)', transition: 'width .5s cubic-bezier(.2,.7,.3,1)' }} />
      )}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 1.6, textTransform: 'uppercase', fontWeight: 600 }}>{post.kicker}</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', letterSpacing: 0.4 }}>{post.date} · {post.readTime}</span>
      </div>
      <h3 style={{
        fontFamily: 'var(--serif)', fontSize: mobile ? 24 : (featured ? 38 : 30),
        fontWeight: 500, letterSpacing: -0.6, lineHeight: 1.05, margin: 0, color: 'var(--ink)',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        transition: 'transform .35s cubic-bezier(.2,.7,.3,1)',
      }}>
        {post.title}
      </h3>
      <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: mobile ? 14 : (featured ? 18 : 16), color: 'var(--ink-2)', marginTop: 4 }}>
        {post.sub}
      </div>
      <p style={{ fontSize: mobile ? 12.5 : 13.5, color: 'var(--ink-2)', lineHeight: 1.6, marginTop: 12, marginBottom: 0, maxWidth: 620 }}>
        {post.excerpt}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {post.tags.map((t) => (
            <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', padding: '2px 7px', borderRadius: 999, border: '1px solid var(--rule)' }}>{t}</span>
          ))}
        </div>
        <span aria-hidden style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: 1.2, color: hovered ? 'var(--accent)' : 'var(--ink-3)', transition: 'all .3s', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          READ
          <span style={{ display: 'inline-block', transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform .3s' }}>→</span>
        </span>
      </div>
    </article>
  )
}
