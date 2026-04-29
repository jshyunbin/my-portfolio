import { PORTFOLIO_DATA } from '../data'

function HobbyIcon({ name }) {
  const s = { width: 14, height: 14, stroke: 'currentColor', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (name === 'film') return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M7 4v16M17 4v16M3 8h4M3 12h4M3 16h4M17 8h4M17 12h4M17 16h4"/></svg>)
  if (name === 'coffee') return (<svg viewBox="0 0 24 24" {...s}><path d="M4 8h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2"/><path d="M8 4c0 1 1 1 1 2s-1 1-1 2M12 4c0 1 1 1 1 2s-1 1-1 2"/></svg>)
  if (name === 'cat') return (<svg viewBox="0 0 24 24" {...s}><path d="M4 6l3 4M20 6l-3 4M5 12c0-3.5 3-6 7-6s7 2.5 7 6v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><circle cx="9.5" cy="13" r=".7" fill="currentColor"/><circle cx="14.5" cy="13" r=".7" fill="currentColor"/><path d="M11 15.5c.4.4 1.6.4 2 0"/></svg>)
  if (name === 'controller') return (<svg viewBox="0 0 24 24" {...s}><path d="M7 9h10a4 4 0 0 1 4 4v2a3 3 0 0 1-5.5 1.6L14 15h-4l-1.5 1.6A3 3 0 0 1 3 15v-2a4 4 0 0 1 4-4z"/><path d="M8 12v3M6.5 13.5h3M15 13h.01M17.5 14.5h.01"/></svg>)
  return null
}

export default function HobbiesBlock({ mobile }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 14 : 18 }}>
      {PORTFOLIO_DATA.hobbies.map((h) => (
        <div
          key={h.title}
          style={{ border: '1px solid var(--rule)', background: 'var(--paper)', padding: mobile ? '14px' : '18px', transition: 'all .25s cubic-bezier(.2,.7,.3,1)', cursor: 'default' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--paper-2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, color: 'var(--accent)' }}>
            <HobbyIcon name={h.icon} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 600 }}>{h.note}</span>
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: mobile ? 22 : 24, color: 'var(--ink)', letterSpacing: -0.3, fontWeight: 500, lineHeight: 1.1 }}>
            {h.title}
          </div>
          <div style={{ fontSize: mobile ? 12.5 : 13, color: 'var(--ink-2)', marginTop: 8, lineHeight: 1.55 }}>
            {h.detail}
          </div>
        </div>
      ))}
    </div>
  )
}
