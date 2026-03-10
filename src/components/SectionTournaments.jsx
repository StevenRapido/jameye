import { useReveal } from "../hooks/useReveal";
import { C, LEVELS, TOURNAMENTS, bebas, mono, plex } from "../constants";

const TOTAL_PRIZE = "3 035 000";

export function SectionTournaments() {
  const [ref, visible] = useReveal(0.15);

  const getLevelStyle = (name) => {
    const l = LEVELS.find((x) => x.name === name);
    return l || { bg: C.surface, text: C.bone };
  };

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        background: C.surface,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
        backgroundImage: `
          linear-gradient(to right, ${C.border}20 1px, transparent 1px),
          linear-gradient(to bottom, ${C.border}20 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
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
        03 · Real Prizes
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
        Nine tournaments. /
        <br />
        <span style={{ color: C.violet }}>Real money.</span>
      </h2>
      <p
        className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}
        style={{
          fontFamily: plex,
          fontSize: "15px",
          color: C.sage,
          lineHeight: 1.7,
          textAlign: "center",
          maxWidth: 560,
          marginBottom: "3rem",
        }}
      >
        Each level unlocks its own tournament. Reach your level, register, and compete.
        Top performers split a real prize pool funded by Jameye — not by other players.
      </p>
      <div
        className={`section-tournaments-grid reveal ${visible ? "visible" : ""} reveal-delay-4`}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
          maxWidth: 700,
          width: "100%",
          marginBottom: "1.5rem",
        }}
      >
        {TOURNAMENTS.map((t) => {
          const levelStyle = getLevelStyle(t.level);
          const isFeatured = t.level === "Legend" || t.level === "Expert";
          return (
            <div
              key={t.name}
              style={{
                position: "relative",
                background: isFeatured ? C.raised : C.base,
                border: `1px solid ${isFeatured ? "#5B4FE866" : C.border}`,
                borderRadius: 12,
                padding: 28,
              }}
            >
              {t.flagship && (
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    fontFamily: mono,
                    fontSize: 8,
                    color: C.violet,
                    padding: "4px 8px",
                    border: `1px solid ${C.violet}`,
                    borderRadius: 4,
                  }}
                >
                  FLAGSHIP
                </span>
              )}
              <span
                style={{
                  display: "inline-block",
                  fontFamily: plex,
                  fontSize: 10,
                  padding: "4px 8px",
                  background: levelStyle.bg,
                  color: levelStyle.text,
                  borderRadius: 6,
                  marginBottom: "0.75rem",
                }}
              >
                {t.level}
              </span>
              <p
                style={{
                  fontFamily: bebas,
                  fontSize: 26,
                  color: C.bone,
                  marginBottom: "0.5rem",
                }}
              >
                {t.name}
              </p>
              <p style={{ marginBottom: 4 }}>
                <span style={{ fontFamily: mono, fontSize: 28, color: C.bone }}>
                  {t.prize}
                </span>
                <span style={{ fontFamily: plex, fontSize: 13, color: C.dim, marginLeft: 4 }}>
                  SEK
                </span>
              </p>
              <p style={{ fontFamily: plex, fontSize: 11, color: C.dim }}>
                Prize pool · Active registration required
              </p>
            </div>
          );
        })}
      </div>
      <div
        className={`reveal ${visible ? "visible" : ""} reveal-delay-4`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "16px 24px",
          background: C.raised,
          border: `1px solid ${C.border}`,
          borderRadius: 8,
          maxWidth: 700,
          width: "100%",
        }}
      >
        <span style={{ fontFamily: plex, fontSize: 13, color: C.dim }}>
          Total prize money across all nine tournaments
        </span>
        <span style={{ fontFamily: mono, fontSize: 18, color: C.violet }}>
          {TOTAL_PRIZE} SEK
        </span>
      </div>
    </section>
  );
}
