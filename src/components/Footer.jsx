import { C, bebas, mono } from "../constants";

export function Footer() {
  return (
    <footer
      className="footer-grid"
      style={{
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        padding: "28px 40px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: 24,
      }}
    >
      <span
        style={{
          fontFamily: bebas,
          fontSize: 18,
          letterSpacing: "4px",
          color: C.bone,
        }}
      >
        JAMEYE
      </span>
      <span
        style={{
          fontFamily: mono,
          fontSize: 9,
          color: C.dim,
          textAlign: "center",
        }}
      >
        Luck runs out. Skill compounds. · © 2026
      </span>
      <span
        style={{
          fontFamily: mono,
          fontSize: 9,
          color: C.dim,
          textAlign: "right",
        }}
      >
        Ɛ jameye.com
      </span>
    </footer>
  );
}
