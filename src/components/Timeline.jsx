import { useState } from 'react'

function TimelineItem({ entry, isOpen, onToggle, mobile }) {
  const [hovered, setHovered] = useState(false)
  const lift = hovered ? -2 : 0

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', paddingLeft: mobile ? 28 : 36, paddingBottom: mobile ? 18 : 22 }}
    >
      <span aria-hidden style={{ position: 'absolute', left: mobile ? 7 : 9, top: 0, bottom: 0, width: 1, background: 'var(--rule)' }} />
      <span
        aria-hidden
        style={{
          position: 'absolute', left: mobile ? 2 : 4, top: 6, width: 11, height: 11, borderRadius: '50%',
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
          all: 'unset', cursor: 'pointer', display: 'block', width: '100%',
          padding: mobile ? '4px 6px' : '6px 10px',
          marginLeft: mobile ? -6 : -10, marginRight: -10, borderRadius: 4,
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
          <span aria-hidden style={{ flexShrink: 0, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', transform: `rotate(${isOpen ? 90 : 0}deg)`, transition: 'transform .3s cubic-bezier(.2,.7,.3,1)', display: 'inline-block', width: 12 }}>
            ▸
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows .35s cubic-bezier(.2,.7,.3,1), opacity .3s', opacity: isOpen ? 1 : 0 }}>
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

export default function Timeline({ entries, mobile }) {
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
