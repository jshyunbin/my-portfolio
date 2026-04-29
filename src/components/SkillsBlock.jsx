import { PORTFOLIO_DATA } from '../data'

export default function SkillsBlock({ mobile }) {
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
                style={{ fontFamily: 'var(--mono)', fontSize: mobile ? 11 : 11.5, color: 'var(--ink)', padding: '5px 10px', background: 'var(--paper-2)', border: '1px solid var(--rule)', borderRadius: 4, letterSpacing: 0.2, cursor: 'default', transition: 'all .2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.color = 'var(--ink)' }}
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
