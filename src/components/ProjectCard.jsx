import { useState } from 'react'

export default function ProjectCard({ project, mobile }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid var(--rule)',
        background: hovered ? 'var(--paper-2)' : 'var(--paper)',
        padding: mobile ? '18px 16px' : '24px 22px',
        transition: 'all .3s cubic-bezier(.2,.7,.3,1)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        cursor: 'default', position: 'relative',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, marginBottom: 4 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', letterSpacing: 1 }}>{project.year}</span>
        <span aria-hidden style={{ fontFamily: 'var(--mono)', fontSize: 14, color: hovered ? 'var(--accent)' : 'var(--ink-4)', transform: hovered ? 'translateX(3px) translateY(-3px)' : 'translateX(0)', transition: 'all .3s cubic-bezier(.2,.7,.3,1)' }}>↗</span>
      </div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 24 : 28, color: 'var(--ink)', letterSpacing: -0.5, fontWeight: 500, lineHeight: 1.05 }}>
        {project.title}
      </div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 14 : 15, fontStyle: 'italic', color: 'var(--ink-2)', marginTop: 3, marginBottom: 14 }}>
        {project.sub}
      </div>
      <div style={{ fontSize: mobile ? 12.5 : 13, color: 'var(--ink-2)', lineHeight: 1.6 }}>
        {project.desc}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14, alignItems: 'center' }}>
        {project.stack.map((s, i) => (
          <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {i > 0 && <span aria-hidden style={{ color: 'var(--ink-4)', fontFamily: 'var(--mono)', fontSize: 10 }}>·</span>}
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', letterSpacing: 0.4 }}>{s}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
