export default function StickerGutter({ side, children }) {
  return (
    <div style={{
      position: 'relative',
      width: 200,
      alignSelf: 'stretch',
      flexShrink: 0,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: side === 'left' ? 'flex-end' : 'flex-start',
        gap: 16,
        paddingTop: 8,
        paddingLeft: side === 'right' ? 24 : 0,
        paddingRight: side === 'left' ? 24 : 0,
      }}>
        {children}
      </div>
    </div>
  )
}
