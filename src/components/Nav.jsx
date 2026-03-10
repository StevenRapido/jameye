import { useState, useEffect } from "react";
import { C, bebas, mono } from "../constants";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        background: scrolled ? "#1E261EEE" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <span
        style={{
          fontFamily: bebas,
          fontSize: "22px",
          letterSpacing: "5px",
          color: C.bone,
        }}
      >
        JAMEYE
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: C.green,
            boxShadow: `0 0 8px ${C.green}`,
          }}
        />
        <span
          style={{
            fontFamily: mono,
            fontSize: "10px",
            color: C.dim,
          }}
        >
          Coming Soon
        </span>
      </div>
    </nav>
  );
}
