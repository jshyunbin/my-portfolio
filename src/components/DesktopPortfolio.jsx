import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PORTFOLIO_DATA } from "../data";
import PortraitPlaceholder from "./PortraitPlaceholder";
import ContactIcon from "./ContactIcon";
import SectionLabel from "./SectionLabel";
import Timeline from "./Timeline";
import SkillsBlock from "./SkillsBlock";
import LanguagesBlock from "./LanguagesBlock";
import ProjectCard from "./ProjectCard";
import HobbiesBlock from "./HobbiesBlock";
import SpriteRunner from "./SpriteRunner";
import kirbySheet from "../assets/Kirby-run.png";
import kirbySleepSheet from "../assets/Kirby-sleep.png";
import StickerGutter from "./StickerGutter";
import Sticker from "./Sticker";
import ari1 from "../assets/ari-1.png";
import zorro0 from "../assets/zorro-0.png";
import fightclub from "../assets/fight_club.png";

const KIRBY_SIZE = 36 * 3;

function KirbyScene() {
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRunKey((k) => k + 1), 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        height: KIRBY_SIZE,
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
          animation: `kirby-cross 5s linear forwards`,
        }}
      >
        <SpriteRunner
          src={kirbySheet}
          frameWidth={36}
          frameHeight={36}
          scale={3}
          fps={14}
          frames={[0, 1, 2, 3, 4, 5, 6, 7]}
        />
      </div>
      <style>{`
        @keyframes kirby-cross {
          from { left: -${KIRBY_SIZE}px; }
          to   { left: calc(100% + ${KIRBY_SIZE}px); }
        }
      `}</style>
    </div>
  );
}

export default function DesktopPortfolio({ photoSrc }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        minHeight: "100vh",
        fontFamily: "var(--sans)",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <StickerGutter side="left">
        {/* <Sticker
          src={ari0}
          alt="Ari"
          width={140}
          rotate={-6}
          style={{ marginTop: 320 }}
        />*/}
        <Sticker
          src={zorro0}
          alt="Zorro"
          width={120}
          rotate={4}
          style={{ marginTop: 440 }}
        />
        <Sticker
          src={fightclub}
          alt="Fight Club"
          width={110}
          rotate={0}
          style={{ marginTop: 700 }}
        />
      </StickerGutter>

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0, padding: "60px 0 80px" }}>
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 56,
            fontFamily: "var(--mono)",
            fontSize: 8,
            color: "var(--ink-3)",
            letterSpacing: 1.5,
          }}
        >
          <span>JHL · PORTFOLIO · 2026</span>
          <span>v1.1</span>
        </div>

        {/* Hero */}
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: 56,
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={PORTFOLIO_DATA.name}
              style={{
                width: 220,
                height: 220,
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid var(--rule)",
              }}
            />
          ) : (
            <PortraitPlaceholder size={220} />
          )}
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 8,
                color: "var(--accent)",
                letterSpacing: 2.5,
                marginBottom: 14,
              }}
            >
              HELLO — I'M
            </div>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(64px, 8.4vw, 124px)",
                fontWeight: 500,
                lineHeight: 0.95,
                letterSpacing: -2.5,
                margin: 0,
                color: "var(--ink)",
              }}
            >
              Joshua
              <br />
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Hyunbin
              </span>{" "}
              Lee
            </h1>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: 22,
                fontStyle: "italic",
                color: "var(--ink-2)",
                marginTop: 18,
                letterSpacing: -0.2,
              }}
            >
              {PORTFOLIO_DATA.tagline}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 22,
                marginTop: 24,
              }}
            >
              {PORTFOLIO_DATA.contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href || undefined}
                  target={
                    c.href && c.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontFamily: "var(--mono)",
                    fontSize: 9,
                    color: "var(--ink-2)",
                    textDecoration: "none",
                    letterSpacing: 0.3,
                    borderBottom: "1px solid transparent",
                    paddingBottom: 1,
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderBottomColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--ink-2)";
                    e.currentTarget.style.borderBottomColor = "transparent";
                  }}
                >
                  <ContactIcon kind={c.kind} />
                  {c.value}
                </a>
              ))}
            </div>
            {/* Visit Writing CTA */}
            <button
              onClick={() => navigate("/blog")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginTop: 28,
                padding: "12px 18px",
                border: "1px solid var(--ink)",
                background: "var(--ink)",
                color: "var(--paper)",
                fontFamily: "var(--mono)",
                fontSize: 8,
                letterSpacing: 1.6,
                textTransform: "uppercase",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all .25s cubic-bezier(.2,.7,.3,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--ink)";
                e.currentTarget.style.borderColor = "var(--ink)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>Visit Writing</span>
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  textTransform: "none",
                  letterSpacing: 0,
                  fontSize: 14,
                  opacity: 0.85,
                }}
              >
                — a glimpse of my life
              </span>
              <span aria-hidden style={{ marginLeft: 4 }}>
                →
              </span>
            </button>
          </div>
        </header>

        <KirbyScene />

        {/* 01 Education / 02 Experience */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            marginBottom: 88,
          }}
        >
          <div>
            <SectionLabel num={1}>Education</SectionLabel>
            <Timeline entries={PORTFOLIO_DATA.education} />
          </div>
          <div>
            <SectionLabel num={2}>Experience</SectionLabel>
            <Timeline entries={PORTFOLIO_DATA.experience} />
          </div>
        </section>

        {/* 03 Skills / 04 Languages */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.7fr 1fr",
            gap: 64,
            marginBottom: 88,
          }}
        >
          <div>
            <SectionLabel num={3}>Skills</SectionLabel>
            <SkillsBlock />
          </div>
          <div>
            <SectionLabel num={4}>Languages</SectionLabel>
            <LanguagesBlock />
          </div>
        </section>

        {/* 05 Selected Projects */}
        <section style={{ marginBottom: 88 }}>
          <SectionLabel num={5}>Selected Projects</SectionLabel>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {PORTFOLIO_DATA.projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </section>

        {/* 06 Things I Like */}
        <section style={{ marginBottom: 0 }}>
          <SectionLabel num={6}>Things I Like</SectionLabel>
          <HobbiesBlock />
          <div
            style={{
              marginTop: 32,
              display: "flex",
              justifyContent: "flex-start",
              transform: "scaleX(-1)",
            }}
          >
            <SpriteRunner
              src={kirbySleepSheet}
              frameWidth={33}
              frameHeight={33}
              scale={4}
              fps={7}
              frames={[
                0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 8,
                9, 10, 11, 12,
              ]}
            />
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            marginTop: 20,
            paddingTop: 24,
            borderTop: "1px solid var(--rule)",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--mono)",
            fontSize: 8,
            color: "var(--ink-4)",
            letterSpacing: 1,
          }}
        >
          <span>© 2026 JOSHUA HYUNBIN LEE</span>
          <span>LAST UPDATED · MAY 2026</span>
        </footer>
      </div>

      <StickerGutter side="right">
        {/* <Sticker
          src={zorro1}
          alt="Zorro"
          width={130}
          rotate={5}
          style={{ marginTop: 100 }}
        />*/}
        <Sticker
          src={ari1}
          alt="Ari"
          width={115}
          rotate={-4}
          style={{ marginTop: 150 }}
        />
      </StickerGutter>
    </div>
  );
}
