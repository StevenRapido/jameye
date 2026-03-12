import { C, bebas, mono } from "../constants";

export function Footer() {
  return (
    <footer
      className="footer-grid"
      style={{
        background: C.surface,
        borderTop: "1px solid #242C40",
        padding: "28px 40px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
