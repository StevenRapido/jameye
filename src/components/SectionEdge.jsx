import { useReveal } from "../hooks/useReveal";
import { useCount } from "../hooks/useCount";
import { C, bebas, mono, plex } from "../constants";

const METRICS = [
  { pct: "45%", label: "Information Edge", desc: '"Did you beat the market?"' },
  { pct: "30%", label: "Allocation", desc: '"Did you size your best bets?"' },
  { pct: "25%", label: "Brier", desc: '"Were your probabilities calibrated?"' },
];

export function SectionEdge() {
  const [ref, visible] = useReveal(0.15);
  const score = useCount(412, visible, 1600);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        background: C.surface,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          background: `radial-gradient(ellipse at right center, ${C.violet}14 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        className="section-edge-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          maxWidth: 1100,
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* Left column */}
        <div>
          <p
            className={`reveal ${visible ? "visible" : ""} reveal-delay-1`}
            style={{
              fontFamily: mono,
              fontSize: "12px",
              color: C.violet,
              marginBottom: "1rem",
            }}
          >
            01 · The Metric
          </p>
          <h2
            className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}
            style={{
              fontFamily: bebas,
              fontSize: "clamp(42px, 5.5vw, 88px)",
              color: C.bone,
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            Your edge score /
            <br />
            <span style={{ color: C.violet }}>is your rank.</span>
          </h2>
          <p
            className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}
            style={{
              fontFamily: plex,
              fontSize: "15px",
              color: C.sage,
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            Edge Score is a composite 0–1000 metric built on your previously closed positions.
            It measures three independent dimensions — you cannot fake it, buy it, or luck into it.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className={`reveal ${visible ? "visible" : ""} reveal-delay-${Math.min(i + 2, 4)}`}
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: mono, fontSize: "14px", color: C.violet }}>{m.pct}</span>
                  <span style={{ fontFamily: plex, fontWeight: 500, fontSize: "14px", color: C.bone }}>{m.label}</span>
                </div>
                <span style={{ fontFamily: plex, fontSize: "13px", color: C.dim, marginLeft: 48 }}>{m.desc}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right column - score card */}
        <div
          className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}
          style={{
            background: C.raised,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: 36,
          }}
        >
          <p
            style={{
              fontFamily: mono,
              fontSize: "9px",
              color: C.violet,
              letterSpacing: "3px",
              marginBottom: "0.5rem",
            }}
          >
            EDGE SCORE
          </p>
          <p
            style={{
              fontFamily: mono,
              fontSize: 80,
              color: C.bone,
              fontWeight: 500,
              lineHeight: 1,
              marginBottom: "0.25rem",
            }}
          >
            {score}
          </p>
          <p
            style={{
              fontFamily: plex,
              fontSize: 12,
              color: C.dim,
              marginBottom: "1rem",
            }}
          >
            / 1000 · Previously closed positions
          </p>
          <div
            style={{
              height: 4,
              background: C.surface,
              borderRadius: 2,
              overflow: "hidden",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${(score / 1000) * 100}%`,
                background: C.violet,
                borderRadius: 2,
                transition: "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginBottom: "1rem",
            }}
          >
            <div style={{ fontFamily: mono, fontSize: 11, color: C.dim }}>
              Ɛ 14,200
              <br />
              <span style={{ color: C.bone }}>Balance</span>
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, color: C.green }}>
              +18 pts
              <br />
              <span style={{ color: C.bone }}>Today</span>
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, color: C.amber }}>
              ×0.94
              <br />
              <span style={{ color: C.bone }}>Decay</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: plex, fontSize: 11, color: C.dim }}>Level</span>
            <span
              style={{
                fontFamily: bebas,
                fontSize: 18,
                color: "#FF9960",
                textShadow: "0 0 12px #FF996066",
              }}
            >
              SKILLED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
