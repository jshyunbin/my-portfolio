import { PORTFOLIO_DATA } from '../data'

export default function LanguagesBlock({ mobile }) {
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
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${l.level * 100}%`, background: 'var(--accent)', transition: 'width .8s cubic-bezier(.2,.7,.3,1)' }} />
          </div>
        </div>
      ))}
    </div>
  )
}
