export default function PortraitPlaceholder({ size = 220 }) {
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
