import { useState, useEffect } from "react";
import { C, BTN, bebas, mono, plex } from "../constants";
import heroBg from "../assets/videos/hero-bg.mp4";

export function Hero({ emailRef }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1500);
    const t4 = setTimeout(() => setPhase(4), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const scrollToEmail = () => {
    emailRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const reveal = (p) => ({
    opacity: phase >= p ? 1 : 0,
    transform: phase >= p ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
  });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: C.base,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
        <source src={heroBg} type="video/mp4" />
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
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(#7B9FE812 1px, transparent 1px), linear-gradient(90deg, #7B9FE812 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          zIndex: 0,
        }}
      />
      {/* Giant Ɛ */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: bebas,
          fontSize: "55vw",
          color: C.accent,
          opacity: 0.04,
          animation: "pulse 8s ease-in-out infinite",
          zIndex: 0,
        }}
      >
        Ɛ
      </div>
      {/* Scanline */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, #7B9FE822, transparent)",
          animation: "scanline 8s linear infinite",
          zIndex: 0,
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 900,
        }}
      >
        <p
          style={{
            fontFamily: mono,
            fontSize: "clamp(12px, 1.8vw, 14px)",
            color: C.accent,
            letterSpacing: "4px",
            marginBottom: "1.5rem",
            ...reveal(1),
          }}
        >
          The prediction market for serious forecasters
        </p>
        <h1
          style={{
            fontFamily: bebas,
            fontSize: "clamp(40px, 12vw, 96px)",
            color: C.bone,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "0.25rem",
            ...reveal(2),
          }}
        >
          Luck runs out.
        </h1>
        <h1
          style={{
            fontFamily: bebas,
            fontSize: "clamp(40px, 12vw, 96px)",
            color: C.accent,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            ...reveal(3),
          }}
        >
          Skill compounds.
        </h1>
        <div style={{ ...reveal(4) }}>
          <p
            style={{
              fontFamily: plex,
              fontSize: "clamp(14px, 1.8vw, 18px)",
              color: C.sage,
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto 1.5rem",
            }}
          >
            Jameye is the gamified prediction market where your Edge Score — not your luck — determines everything.
          </p>
          <button
            onClick={scrollToEmail}
            style={{
              fontFamily: plex,
              fontWeight: 700,
              fontSize: 14,
              padding: "12px 36px",
              background: BTN.primaryBg,
              color: BTN.primaryText,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            Get Early Access
          </button>
          <p
            style={{
              fontFamily: mono,
              fontSize: 10,
              color: C.dim,
              letterSpacing: "1px",
              marginTop: 14,
            }}
          >
            No spam. Just a heads-up when we launch.
          </p>
        </div>
      </div>
      {/* Scroll indicator */}
      {phase >= 4 && (
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: 1,
            animation: "fadeUp 0.6s ease-out",
          }}
        >
          <span
            style={{
              fontFamily: mono,
              fontSize: 8,
              color: C.dim,
              letterSpacing: "3px",
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: 1,
              height: 32,
              background: "linear-gradient(to bottom, #6878A0, transparent)",
            }}
          />
        </div>
      )}
    </section>
  );
}
