import { useEffect, useState } from "react";
import kirbySheet from "../assets/Kirby-run.png";

const FRAME_SIZE = 36;
const SCALE = 3;
const FRAMES = 8;
const FPS = 12;

export default function KirbyRunner() {
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRunKey((k) => k + 1), 30000);
    return () => clearInterval(id);
  }, []);

  const size = FRAME_SIZE * SCALE;
  const frameDuration = FRAMES / FPS;

  return (
    <div
      style={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        height: size,
        overflow: "hidden",
        marginBottom: 56,
      }}
      aria-hidden
    >
      <div
        key={runKey}
        style={{
          position: "absolute",
          top: 0,
          width: size,
          height: size,
          overflow: "hidden",
          animation: `kirby-cross 5s linear forwards`,
        }}
      >
        <img
          src={kirbySheet}
          alt=""
          style={{
            height: size,
            imageRendering: "pixelated",
            animation: `kirby-frames ${frameDuration.toFixed(3)}s steps(${FRAMES}) infinite`,
          }}
        />
      </div>
      <style>{`
        @keyframes kirby-frames {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @keyframes kirby-cross {
          from { left: -${size}px; }
          to   { left: calc(100% + ${size}px); }
        }
      `}</style>
    </div>
  );
}
