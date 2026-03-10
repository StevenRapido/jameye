import { useState, useEffect, useRef } from "react";
import { C, bebas, mono, plex } from "../constants";

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
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, ${C.border} 1px, transparent 1px),
            linear-gradient(to bottom, ${C.border} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
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
          color: C.violet,
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
          background: `linear-gradient(90deg, transparent, ${C.violet}44, transparent)`,
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
            color: C.dim,
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
            color: C.violet,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "2rem",
            ...reveal(3),
          }}
        >
          Skill compounds.
        </h1>
        <div style={{ ...reveal(4) }}>
          <button
            onClick={scrollToEmail}
            style={{
              fontFamily: plex,
              fontWeight: 700,
              fontSize: "14px",
              padding: "16px 32px",
              background: C.violet,
              color: C.bone,
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Get Early Access
          </button>
        </div>
      </div>
      {/* Scroll indicator */}
      {phase >= 4 && (
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            animation: "fadeUp 0.6s ease-out",
          }}
        >
          <span
            style={{
              fontFamily: mono,
              fontSize: "10px",
              color: C.dim,
              letterSpacing: "2px",
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: 1,
              height: 40,
              background: `linear-gradient(to bottom, ${C.border}, transparent)`,
            }}
          />
        </div>
      )}
    </section>
  );
}
