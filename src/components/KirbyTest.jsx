import { useState } from "react";
import kirbySheet from "../assets/Kirby-run.png";

export default function KirbyTest() {
  const [frameW, setFrameW] = useState(36);
  const [frameH, setFrameH] = useState(36);
  const [numFrames, setNumFrames] = useState(8);
  const [fps, setFps] = useState(12);
  const [scale, setScale] = useState(4);
  const [row, setRow] = useState(0);

  const duration = numFrames / fps;

  return (
    <div
      style={{
        background: "#1a1a2e",
        minHeight: "100vh",
        padding: 40,
        color: "#eee",
        fontFamily: "monospace",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Kirby Sprite Test</h2>

      {/* Sprite sheet preview */}
      <details style={{ marginBottom: 32 }}>
        <summary style={{ cursor: "pointer", marginBottom: 8, color: "#aaa" }}>
          Show full sprite sheet
        </summary>
        <img
          src={kirbySheet}
          alt="sprite sheet"
          style={{
            display: "block",
            maxWidth: 543,
            border: "1px solid #444",
            imageRendering: "pixelated",
          }}
        />
      </details>

      {/* Controls */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginBottom: 48,
          maxWidth: 640,
        }}
      >
        {[
          {
            label: "Frame width (px)",
            val: frameW,
            set: setFrameW,
            min: 16,
            max: 543,
          },
          {
            label: "Frame height (px)",
            val: frameH,
            set: setFrameH,
            min: 16,
            max: 4763,
          },
          {
            label: "Num frames",
            val: numFrames,
            set: setNumFrames,
            min: 1,
            max: 64,
          },
          { label: "FPS", val: fps, set: setFps, min: 1, max: 60 },
          { label: "Scale", val: scale, set: setScale, min: 1, max: 8 },
          { label: "Row (0-indexed)", val: row, set: setRow, min: 0, max: 20 },
        ].map(({ label, val, set, min, max }) => (
          <label
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              fontSize: 12,
            }}
          >
            {label}
            <input
              type="number"
              value={val}
              min={min}
              max={max}
              onChange={(e) => set(Number(e.target.value))}
              style={{
                padding: "4px 8px",
                background: "#222",
                border: "1px solid #555",
                color: "#eee",
                fontFamily: "monospace",
                fontSize: 14,
                width: "100%",
              }}
            />
          </label>
        ))}
      </div>

      {/* Animated sprite */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>
          animation: {duration.toFixed(2)}s · {numFrames} frames · {fps} fps
        </div>
        <div
          style={{
            width: frameW * scale,
            height: frameH * scale,
            overflow: "hidden",
          }}
        >
          <img
            style={{
              height: frameH * scale,
              imageRendering: "pixelated",
              animation: `kirby-walk ${duration}s steps(${numFrames}) infinite`,
            }}
            src={kirbySheet}
          />
        </div>
      </div>

      {/* Run-across demo */}
      <div style={{ marginBottom: 24, fontSize: 12, color: "#888" }}>
        Run-across preview (800px track)
      </div>
      <div
        style={{
          position: "relative",
          width: 800,
          height: frameH * scale + 20,
          background: "#111",
          overflow: "hidden",
          border: "1px solid #333",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 10,
            width: frameW * scale,
            height: frameH * scale,
            overflow: "hidden",
            animation: "kirby-run 1.5s linear infinite",
          }}
        >
          <img
            style={{
              // width: frameW * scale,
              height: frameH * scale,
              imageRendering: "pixelated",
              animation: `kirby-walk ${duration}s steps(${numFrames}) infinite`,
            }}
            src={kirbySheet}
          />
        </div>
      </div>

      <style>{`
        @keyframes kirby-walk {
          from { transform: translate3d(0px, 0, 0); }
          to   { transform: translate3d(-100%, 0, 0); }
        }
        @keyframes kirby-run {
          from { left: -${frameW * scale}px; }
          to   { left: 820px; }
        }
      `}</style>
    </div>
  );
}
