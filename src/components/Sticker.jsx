export default function Sticker({ src, alt = '', width = 120, rotate = 0, style = {} }) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      style={{
        width,
        height: 'auto',
        display: 'block',
        transform: `rotate(${rotate}deg)`,
        imageRendering: 'auto',
        filter: `
          drop-shadow(0    3px  0 white)
          drop-shadow(3px  0    0 white)
          drop-shadow(0   -3px  0 white)
          drop-shadow(-3px 0    0 white)
          drop-shadow(2px  2px  0 white)
          drop-shadow(-2px 2px  0 white)
          drop-shadow(2px -2px  0 white)
          drop-shadow(-2px -2px 0 white)
          drop-shadow(2px 4px 6px rgba(0,0,0,0.12))
        `,
        userSelect: 'none',
        ...style,
      }}
    />
  )
}
