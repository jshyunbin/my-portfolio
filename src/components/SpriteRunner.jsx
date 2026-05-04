import { useEffect, useState } from 'react'

export default function SpriteRunner({
  src,
  frameWidth,
  frameHeight,
  scale = 1,
  fps = 12,
  frames,
}) {
  const [frameIdx, setFrameIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setFrameIdx((i) => (i + 1) % frames.length)
    }, 1000 / fps)
    return () => clearInterval(id)
  }, [fps, frames.length])

  const w = frameWidth * scale
  const h = frameHeight * scale

  return (
    <div
      style={{
        width: w,
        height: h,
        backgroundImage: `url(${src})`,
        backgroundSize: `auto ${h}px`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: -(frames[frameIdx] * w),
        backgroundPositionY: 0,
        imageRendering: 'pixelated',
      }}
    />
  )
}
