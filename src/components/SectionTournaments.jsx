import { useReveal } from "../hooks/useReveal";
import { C, bebas, mono, plex } from "../constants";
import section3Video from "../assets/videos/section3-bg.mp4";

export function SectionTournaments() {
  const [ref, visible] = useReveal(0.2);
  return (
    <section
      ref={ref}
      className="section-compete"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: C.surface,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px",
        overflow: "hidden",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.72) saturate(0.85)",
          zIndex: 0,
          transform: "translateZ(0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        <source src={section3Video} type="video/mp4" />
      </video>
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #0A0C1233 0%, #0A0C12 80%)",
          zIndex: 0,
        }}
      />
      <div style={{ maxWidth: 760, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p
          className={`reveal reveal-compete-delay-1 ${visible ? "visible" : ""}`}
          style={{
            fontFamily: mono,
            fontSize: 10,
            color: C.accent,
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          03 · COMPETE
        </p>
        <h2
          className={`reveal reveal-compete-delay-2 ${visible ? "visible" : ""}`}
          style={{
            fontFamily: bebas,
            fontSize: "clamp(42px, 5.5vw, 88px)",
            color: C.bone,
            lineHeight: 1.05,
          }}
        >
          Prove it.
        </h2>
        <h2
          className={`reveal reveal-compete-delay-3 ${visible ? "visible" : ""}`}
          style={{
            fontFamily: bebas,
            fontSize: "clamp(42px, 5.5vw, 88px)",
            color: C.accent,
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}
        >
          Win something.
        </h2>
        <div
          className={`reveal reveal-compete-delay-4 ${visible ? "visible" : ""}`}
          style={{
            width: 48,
            height: 2,
            background: C.border,
            margin: "0 auto 40px",
          }}
        />
        <p
          className={`reveal reveal-compete-delay-5 ${visible ? "visible" : ""}`}
          style={{
            fontFamily: plex,
            fontSize: 15,
            fontWeight: 400,
            color: C.sage,
            lineHeight: 1.7,
            marginBottom: 24,
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Your Edge Score compounds across every prediction you close — every market you called right when others didn't.
        </p>
        <p
          className={`reveal reveal-compete-delay-6 ${visible ? "visible" : ""}`}
          style={{
            fontFamily: plex,
            fontSize: 15,
            fontWeight: 400,
            color: C.sage,
            lineHeight: 1.7,
            marginBottom: 24,
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          When you're ready to put it on the line, Jameye runs tournaments with real cash prizes.
        </p>
        <p
          className={`reveal reveal-compete-delay-7 ${visible ? "visible" : ""}`}
          style={{
            fontFamily: plex,
            fontSize: 15,
            fontWeight: 600,
            color: C.bone,
            lineHeight: 1.7,
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          The only thing that determines the outcome is how good you are.
        </p>
      </div>
    </section>
  );
}
