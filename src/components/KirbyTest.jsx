import kirbyRunSheet from "../assets/Kirby-run.png";
import kirbySleepSheet from "../assets/Kirby-sleep.png";
import SpriteRunner from "./SpriteRunner";

export default function KirbyTest() {
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
      <h2 style={{ marginTop: 0 }}>Sprite Runner Test</h2>

      {/* Sprite sheet preview */}
      <details style={{ marginBottom: 32 }}>
        <summary style={{ cursor: "pointer", marginBottom: 8, color: "#aaa" }}>
          Show full sprite sheet
        </summary>
        <img
          src={kirbyRunSheet}
          alt="sprite sheet"
          style={{
            display: "block",
            maxWidth: 543,
            border: "1px solid #444",
            imageRendering: "pixelated",
          }}
        />
      </details>

      <div
        style={{
          marginBottom: 12,
          fontSize: 12,
          color: "#888",
        }}
      >
        Running Kirby Sprite
      </div>

      <SpriteRunner
        src={kirbyRunSheet}
        frameWidth={36}
        frameHeight={36}
        scale={4}
        fps={12}
        frames={[0, 1, 2, 3, 4, 5, 6, 7]}
      />

      {/* Sprite sheet preview */}
      <details style={{ marginBottom: 32 }}>
        <summary style={{ cursor: "pointer", marginBottom: 8, color: "#aaa" }}>
          Show full sprite sheet
        </summary>
        <img
          src={kirbySleepSheet}
          alt="sprite sheet"
          style={{
            display: "block",
            maxWidth: 543,
            border: "1px solid #444",
            imageRendering: "pixelated",
          }}
        />
      </details>

      <div
        style={{
          marginBottom: 12,
          fontSize: 12,
          color: "#888",
        }}
      >
        Sleeping Kirby Sprite
      </div>

      <SpriteRunner
        src={kirbySleepSheet}
        frameWidth={33}
        frameHeight={33}
        scale={4}
        fps={7}
        frames={[
          0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 8, 9, 10,
          11, 12,
        ]}
      />
    </div>
  );
}
