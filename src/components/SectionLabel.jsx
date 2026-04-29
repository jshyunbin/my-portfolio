export default function SectionLabel({ children, num }) {
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
