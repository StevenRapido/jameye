import { useReveal } from "../hooks/useReveal";
import { C, LEVELS, bebas, mono, plex } from "../constants";

export function SectionLevels() {
  const [ref, visible] = useReveal(0.15);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        background: C.base,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
      }}
    >
      <p
        className={`reveal ${visible ? "visible" : ""} reveal-delay-1`}
        style={{
          fontFamily: mono,
          fontSize: "12px",
          color: C.violet,
          marginBottom: "1rem",
        }}
      >
        02 · The Progression
      </p>
      <h2
        className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}
        style={{
          fontFamily: bebas,
          fontSize: "clamp(42px, 5.5vw, 88px)",
          color: C.bone,
          lineHeight: 1.05,
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Ten levels. /
        <br />
        <span style={{ color: C.violet }}>One destination.</span>
      </h2>
      <p
        className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}
        style={{
          fontFamily: plex,
          fontSize: "15px",
          color: C.sage,
          lineHeight: 1.7,
          textAlign: "center",
          maxWidth: 520,
          marginBottom: "3rem",
        }}
      >
        Every player starts at Newcomer. Only your Edge Score moves you forward.
        No shortcuts. No purchases. Just skill.
      </p>
      <div
        className={`section-levels-grid reveal ${visible ? "visible" : ""} reveal-delay-4`}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 12,
          maxWidth: 900,
          width: "100%",
        }}
      >
        {LEVELS.map((level) => (
          <LevelBadge key={level.name} level={level} />
        ))}
      </div>
      {/* Gradient bar */}
      <div
        className={`reveal ${visible ? "visible" : ""} reveal-delay-4`}
        style={{
          display: "flex",
          width: "100%",
          maxWidth: 900,
          marginTop: 24,
          height: 4,
        }}
      >
        {LEVELS.map((level) => (
          <div
            key={level.name}
            style={{
              flex: 1,
              background: level.bg,
              ...(level.name === "Legend" && {
                border: "1px solid #5B4FE888",
                boxShadow: "0 0 20px #5B4FE844",
                borderRadius: 2,
              }),
            }}
          />
        ))}
      </div>
    </section>
  );
}

function LevelBadge({ level }) {
  const subtext =
    level.name === "Newcomer"
      ? "Start here"
      : level.name === "Legend"
        ? "The elite"
        : "Top X%";

  return (
    <div
      style={{
        background: level.bg,
        border: `1px solid ${C.border}`,
        borderRadius: 10,
        padding: "20px 12px",
        textAlign: "center",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = `0 12px 32px ${level.text}33`;
        e.currentTarget.style.borderColor = `${level.text}44`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = C.border;
      }}
    >
      <p
        style={{
          fontFamily: bebas,
          fontSize: 18,
          color: level.text,
          textShadow: level.glow ? `0 0 12px ${level.text}66` : "none",
        }}
      >
        {level.name}
      </p>
      <div
        style={{
          width: 20,
          height: 1,
          background: level.text,
          opacity: 0.5,
          margin: "8px auto",
        }}
      />
      <p
        style={{
          fontFamily: mono,
          fontSize: 9,
          color: C.dim,
        }}
      >
        {subtext}
      </p>
    </div>
  );
}
