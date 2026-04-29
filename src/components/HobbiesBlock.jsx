import { Film, Coffee, Cat, Gamepad2, Landmark } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data'

const ICONS = { film: Film, coffee: Coffee, cat: Cat, controller: Gamepad2, landmark: Landmark }

function HobbyIcon({ name }) {
  const Icon = ICONS[name]
  return Icon ? <Icon size={14} strokeWidth={1.5} /> : null
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
