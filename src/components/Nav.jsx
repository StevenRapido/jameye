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
        height: 52,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        background: scrolled ? "#101420EE" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #242C40" : "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <span
        style={{
          fontFamily: bebas,
          fontSize: 22,
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
          gap: 8,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: C.green,
            boxShadow: "0 0 8px #4ADE8099",
          }}
        />
        <span
          style={{
            fontFamily: mono,
            fontSize: 10,
            color: C.dim,
            letterSpacing: "2px",
          }}
        >
          COMING SOON
        </span>
      </div>
    </nav>
  );
}
