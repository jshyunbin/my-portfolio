import { useState } from 'react'
import { PORTFOLIO_DATA } from '../data'

// ── Portrait placeholder ──────────────────────────────────────

function PortraitPlaceholder({ size = 220 }) {
  const stripeId = `stripe-${size}`
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative',
        background: 'var(--paper-2)',
        border: '1px solid var(--rule)',
        flexShrink: 0,
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
        <defs>
          <pattern id={stripeId} patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
            <rect width="6" height="6" fill="var(--paper-2)" />
            <line x1="0" y1="0" x2="0" y2="6" stroke="var(--rule)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={size} height={size} fill={`url(#${stripeId})`} />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="ui-monospace, 'JetBrains Mono', monospace"
          fontSize="10"
          fill="var(--ink-3)"
          letterSpacing="1.5"
        >
          [ PORTRAIT ]
        </text>
      </svg>
    </div>
  )
}

// ── Contact icons ─────────────────────────────────────────────

function ContactIcon({ kind }) {
  const s = { width: 14, height: 14, stroke: 'currentColor', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (kind === 'email') return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>)
  if (kind === 'github') return (<svg viewBox="0 0 24 24" {...s}><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>)
  if (kind === 'linkedin') return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4"/></svg>)
  if (kind === 'location') return (<svg viewBox="0 0 24 24" {...s}><path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>)
  return null
}

// ── Timeline ──────────────────────────────────────────────────

function TimelineItem({ entry, isOpen, onToggle, mobile }) {
  const [hovered, setHovered] = useState(false)
  const lift = hovered ? -2 : 0

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        paddingLeft: mobile ? 28 : 36,
        paddingBottom: mobile ? 18 : 22,
      }}
    >
      {/* rail */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: mobile ? 7 : 9,
          top: 0,
          bottom: 0,
          width: 1,
          background: 'var(--rule)',
        }}
      />
      {/* node */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: mobile ? 2 : 4,
          top: 6,
          width: 11,
          height: 11,
          borderRadius: '50%',
          background: hovered || isOpen ? 'var(--accent)' : 'var(--paper)',
          border: `1.5px solid ${hovered || isOpen ? 'var(--accent)' : 'var(--ink-3)'}`,
          transition: 'all .25s cubic-bezier(.2,.7,.3,1)',
          transform: `scale(${hovered || isOpen ? 1.25 : 1})`,
          boxShadow: hovered || isOpen ? '0 0 0 5px color-mix(in oklab, var(--accent) 14%, transparent)' : 'none',
        }}
      />

      <button
        onClick={onToggle}
        style={{
          all: 'unset',
          cursor: 'pointer',
          display: 'block',
          width: '100%',
          padding: mobile ? '4px 6px' : '6px 10px',
          marginLeft: mobile ? -6 : -10,
          marginRight: -10,
          borderRadius: 4,
          transform: `translateY(${lift}px)`,
          transition: 'transform .25s cubic-bezier(.2,.7,.3,1), background .2s',
          background: hovered ? 'var(--paper-2)' : 'transparent',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: mobile ? 10.5 : 11, color: 'var(--ink-3)', letterSpacing: 0.5, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            {entry.year}
          </span>
          {entry.sub && (
            <span style={{ fontFamily: 'var(--mono)', fontSize: mobile ? 9.5 : 10, color: 'var(--ink-4)', letterSpacing: 0.4 }}>
              · {entry.sub}
            </span>
          )}
        </div>

        <div style={{ marginTop: 4, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 19 : 22, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.15, letterSpacing: -0.3 }}>
              {entry.org}
            </div>
            <div style={{ fontSize: mobile ? 12 : 13, color: 'var(--ink-2)', marginTop: 3, fontStyle: 'italic' }}>
              {entry.role}
            </div>
            {entry.sub2 && (
              <div style={{ fontSize: mobile ? 11 : 12, color: 'var(--ink-4)', marginTop: 2 }}>{entry.sub2}</div>
            )}
          </div>
          <span
            aria-hidden
            style={{
              flexShrink: 0,
              fontFamily: 'var(--mono)',
              fontSize: 10,
              color: 'var(--ink-3)',
              transform: `rotate(${isOpen ? 90 : 0}deg)`,
              transition: 'transform .3s cubic-bezier(.2,.7,.3,1)',
              display: 'inline-block',
              width: 12,
            }}
          >
            ▸
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateRows: isOpen ? '1fr' : '0fr',
            transition: 'grid-template-rows .35s cubic-bezier(.2,.7,.3,1), opacity .3s',
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div style={{ overflow: 'hidden', minHeight: 0 }}>
            <div style={{ paddingTop: 10, fontSize: mobile ? 12.5 : 13.5, color: 'var(--ink-2)', lineHeight: 1.55 }}>
              {entry.desc}
            </div>
            {entry.tags && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                {entry.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', padding: '3px 7px', borderRadius: 999, border: '1px solid var(--rule)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </button>
    </div>
  )
}

function Timeline({ entries, mobile }) {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <div>
      {entries.map((e, i) => (
        <TimelineItem
          key={i}
          entry={e}
          mobile={mobile}
          isOpen={openIdx === i}
          onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
        />
      ))}
    </div>
  )
}

// ── Section label ─────────────────────────────────────────────

function SectionLabel({ children, num }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 18 }}>
      {num != null && (
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', letterSpacing: 1.5 }}>
          {String(num).padStart(2, '0')}
        </span>
      )}
      <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--accent)', letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 600 }}>
        {children}
      </span>
      <span style={{ flex: 1, height: 1, background: 'var(--rule)' }} />
    </div>
  )
}

// ── Skills ────────────────────────────────────────────────────

function SkillsBlock({ mobile }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 18 : 28 }}>
      {PORTFOLIO_DATA.skills.map((g) => (
        <div key={g.group}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>
            {g.group}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {g.items.map((it) => (
              <span
                key={it}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: mobile ? 11 : 11.5,
                  color: 'var(--ink)',
                  padding: '5px 10px',
                  background: 'var(--paper-2)',
                  border: '1px solid var(--rule)',
                  borderRadius: 4,
                  letterSpacing: 0.2,
                  cursor: 'default',
                  transition: 'all .2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--rule)'
                  e.currentTarget.style.color = 'var(--ink)'
                }}
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Language bars ─────────────────────────────────────────────

function LanguagesBlock({ mobile }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: mobile ? 14 : 16 }}>
      {PORTFOLIO_DATA.spoken.map((l) => (
        <div key={l.lang}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 17 : 19, color: 'var(--ink)', fontWeight: 500, letterSpacing: -0.2 }}>
              {l.lang}
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--ink-3)', letterSpacing: 0.5 }}>
              {l.note}
            </span>
          </div>
          <div style={{ position: 'relative', height: 2, background: 'var(--rule)' }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: `${l.level * 100}%`,
                background: 'var(--accent)',
                transition: 'width .8s cubic-bezier(.2,.7,.3,1)',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Project card ──────────────────────────────────────────────

function ProjectCard({ project, mobile }) {
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
        cursor: 'default',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, marginBottom: 4 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', letterSpacing: 1 }}>{project.year}</span>
        <span
          aria-hidden
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 14,
            color: hovered ? 'var(--accent)' : 'var(--ink-4)',
            transform: hovered ? 'translateX(3px) translateY(-3px)' : 'translateX(0)',
            transition: 'all .3s cubic-bezier(.2,.7,.3,1)',
          }}
        >
          ↗
        </span>
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

// ── Desktop layout ────────────────────────────────────────────

export function DesktopPortfolio({ photoSrc }) {
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', minHeight: '100vh', padding: '60px 80px 80px', fontFamily: 'var(--sans)' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 56, fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--ink-3)', letterSpacing: 1.5 }}>
        <span>JHL · PORTFOLIO · 2026</span>
        <span>SEOUL ⇋ DAEJEON</span>
        <span>v1.0</span>
      </div>

      {/* Hero */}
      <header style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 56, alignItems: 'center', marginBottom: 88 }}>
        {photoSrc ? (
          <img src={photoSrc} alt={PORTFOLIO_DATA.name} style={{ width: 220, height: 220, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--rule)' }} />
        ) : (
          <PortraitPlaceholder size={220} />
        )}
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--accent)', letterSpacing: 2.5, marginBottom: 14 }}>
            HELLO — I'M
          </div>
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(64px, 8.4vw, 124px)',
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: -2.5,
              margin: 0,
              color: 'var(--ink)',
            }}
          >
            Joshua <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Hyunbin</span> Lee
          </h1>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic', color: 'var(--ink-2)', marginTop: 18, letterSpacing: -0.2 }}>
            {PORTFOLIO_DATA.tagline}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, marginTop: 24 }}>
            {PORTFOLIO_DATA.contacts.map((c) => (
              <a
                key={c.label}
                href={c.href || undefined}
                target={c.href && c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  fontFamily: 'var(--mono)',
                  fontSize: 11.5,
                  color: 'var(--ink-2)',
                  textDecoration: 'none',
                  letterSpacing: 0.3,
                  borderBottom: '1px solid transparent',
                  paddingBottom: 1,
                  transition: 'all .2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.borderBottomColor = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--ink-2)'
                  e.currentTarget.style.borderBottomColor = 'transparent'
                }}
              >
                <ContactIcon kind={c.kind} />
                {c.value}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Experience + Education */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 88 }}>
        <div>
          <SectionLabel num={1}>Experience</SectionLabel>
          <Timeline entries={PORTFOLIO_DATA.experience} />
        </div>
        <div>
          <SectionLabel num={2}>Education</SectionLabel>
          <Timeline entries={PORTFOLIO_DATA.education} />
        </div>
      </section>

      {/* Skills + Languages */}
      <section style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 64, marginBottom: 88 }}>
        <div>
          <SectionLabel num={3}>Skills</SectionLabel>
          <SkillsBlock />
        </div>
        <div>
          <SectionLabel num={4}>Languages</SectionLabel>
          <LanguagesBlock />
        </div>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={5}>Selected Projects</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {PORTFOLIO_DATA.projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: 80, paddingTop: 24, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', letterSpacing: 1 }}>
        <span>© 2026 JOSHUA HYUNBIN LEE</span>
        <span>SET IN EB GARAMOND, INTER & JETBRAINS MONO</span>
        <span>LAST UPDATED · APR 2026</span>
      </footer>
    </div>
  )
}

// ── Mobile layout ─────────────────────────────────────────────

export function MobilePortfolio({ photoSrc }) {
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', padding: '32px 22px 40px', fontFamily: 'var(--sans)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 9.5, color: 'var(--ink-4)', letterSpacing: 1.2, marginBottom: 28 }}>
        <span>JHL · 2026</span>
        <span>v1.0</span>
      </div>

      {/* Hero */}
      <header style={{ marginBottom: 44 }}>
        {photoSrc ? (
          <img src={photoSrc} alt={PORTFOLIO_DATA.name} style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--rule)', marginBottom: 22 }} />
        ) : (
          <PortraitPlaceholder size={110} />
        )}
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9.5, color: 'var(--accent)', letterSpacing: 2, marginTop: 22, marginBottom: 10 }}>
          HELLO — I'M
        </div>
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 54,
            fontWeight: 500,
            lineHeight: 0.92,
            letterSpacing: -1.4,
            margin: 0,
            color: 'var(--ink)',
          }}
        >
          Joshua <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Hyunbin</span> Lee
        </h1>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--ink-2)', marginTop: 12 }}>
          {PORTFOLIO_DATA.tagline}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22, paddingTop: 18, borderTop: '1px solid var(--rule)' }}>
          {PORTFOLIO_DATA.contacts.map((c) => (
            <a
              key={c.label}
              href={c.href || undefined}
              style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-2)', textDecoration: 'none', letterSpacing: 0.3 }}
            >
              <span style={{ width: 14, display: 'inline-flex', color: 'var(--accent)' }}>
                <ContactIcon kind={c.kind} />
              </span>
              {c.value}
            </a>
          ))}
        </div>
      </header>

      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={1}>Experience</SectionLabel>
        <Timeline entries={PORTFOLIO_DATA.experience} mobile />
      </section>

      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={2}>Education</SectionLabel>
        <Timeline entries={PORTFOLIO_DATA.education} mobile />
      </section>

      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={3}>Skills</SectionLabel>
        <SkillsBlock mobile />
      </section>

      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={4}>Languages</SectionLabel>
        <LanguagesBlock mobile />
      </section>

      <section style={{ marginBottom: 24 }}>
        <SectionLabel num={5}>Selected Projects</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {PORTFOLIO_DATA.projects.map((p, i) => (
            <ProjectCard key={i} project={p} mobile />
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 32, paddingTop: 18, borderTop: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink-4)', letterSpacing: 1, textAlign: 'center' }}>
        © 2026 · J. H. LEE
      </footer>
    </div>
  )
}
