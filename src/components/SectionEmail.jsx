import { useState, useRef } from "react";
import { C, bebas, mono, plex } from "../constants";

export function SectionEmail({ emailRef }) {
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const validate = (email) => {
    const atIdx = email.indexOf("@");
    return atIdx > 0 && atIdx < email.length - 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = inputRef.current?.value?.trim() || "";
    setError("");

    if (!validate(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setState("loading");

    try {
      // Replace with your endpoint: Formspree, Resend, Mailchimp, etc.
      // await fetch("https://formspree.io/f/YOUR_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      await new Promise((r) => setTimeout(r, 1000));
      setState("done");
    } catch {
      setError("Something went wrong. Please try again.");
      setState("idle");
    }
  };

  return (
    <section
      ref={emailRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        background: C.base,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
        overflow: "hidden",
      }}
    >
      {/* Giant EARLY / ACCESS */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: bebas,
          fontSize: "22vw",
          color: C.violet,
          opacity: 0.03,
          textAlign: "center",
          lineHeight: 1.1,
          whiteSpace: "pre",
          zIndex: 0,
        }}
      >
        EARLY{"\n"}ACCESS
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        <p
          style={{
            fontFamily: mono,
            fontSize: "12px",
            color: C.violet,
            marginBottom: "1rem",
          }}
        >
          Be the first
        </p>
        <h2
          style={{
            fontFamily: bebas,
            fontSize: "clamp(42px, 6vw, 72px)",
            color: C.bone,
            lineHeight: 1.05,
            marginBottom: "1rem",
          }}
        >
          Get early /
          <br />
          <span style={{ color: C.violet }}>access.</span>
        </h2>
        <p
          style={{
            fontFamily: plex,
            fontSize: "15px",
            color: C.sage,
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Jameye launches soon. Leave your email and we'll notify you the moment the
          markets open — plus early access before the general public.
        </p>
        {state === "done" ? (
          <div
            style={{
              padding: 28,
              border: `1px solid ${C.green}`,
              borderRadius: 8,
              background: C.surface,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: mono,
                fontSize: 16,
                color: C.green,
                marginBottom: "0.5rem",
              }}
            >
              ✓ You're on the list.
            </p>
            <p style={{ fontFamily: plex, fontSize: 13, color: C.dim }}>
              We'll be in touch when we launch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                background: C.surface,
                border: `1px solid ${error ? "#F8717188" : C.border}`,
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <input
                ref={inputRef}
                type="email"
                name="email"
                placeholder="you@example.com"
                disabled={state === "loading"}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  padding: "16px 20px",
                  fontFamily: plex,
                  fontSize: 14,
                  color: C.bone,
                }}
              />
              <button
                type="submit"
                className="btn-notify"
                disabled={state === "loading"}
                style={{
                  fontFamily: plex,
                  fontWeight: 700,
                  fontSize: 13,
                  background: state === "loading" ? C.raised : C.violet,
                  color: "#FFFFFF",
                  border: "none",
                  borderLeft: `1px solid ${C.border}`,
                  padding: "16px 28px",
                  cursor: state === "loading" ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                }}
              >
                {state === "loading" ? "···" : "Notify Me"}
              </button>
            </div>
            {error && (
              <p
                style={{
                  fontFamily: plex,
                  fontSize: 12,
                  color: C.red,
                  marginTop: 8,
                  textAlign: "left",
                }}
              >
                {error}
              </p>
            )}
            <p
              style={{
                fontFamily: mono,
                fontSize: 9,
                color: C.dim,
                letterSpacing: "1px",
                marginTop: 12,
              }}
            >
              No spam. One email when we launch.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
