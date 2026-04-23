import { useEffect, useState } from "react";

const roles = [
  "Data Science Student",
  "AI Systems Builder",
  "RAG Pipeline Engineer",
  "LangChain Developer",
  "Retail Automation Builder",
  "Problem Solver"
];

export default function Typewriter({ isDark }) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 75);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <div style={{
      marginBottom: "2rem",
      padding: "1rem 1.5rem",
      borderRadius: "1rem",
      background: isDark ? "rgba(139,92,246,0.08)" : "rgba(139,92,246,0.06)",
      border: isDark ? "1px solid rgba(139,92,246,0.2)" : "1px solid rgba(139,92,246,0.2)",
      display: "inline-block",
      minWidth: "320px"
    }}>
      <p style={{
        fontSize: "0.75rem",
        fontWeight: "700",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: isDark ? "#a78bfa" : "#7c3aed",
        marginBottom: "0.4rem"
      }}>
        Currently
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{
          fontSize: "1.15rem",
          fontWeight: "600",
          background: "linear-gradient(90deg, #a78bfa, #22d3ee)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          minHeight: "1.8rem",
          display: "inline-block"
        }}>
          {text}
        </span>
        <span style={{
          display: "inline-block",
          width: "2px",
          height: "1.4rem",
          background: "#a78bfa",
          animation: "blink 1s steps(1) infinite",
          flexShrink: 0
        }} />
      </div>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
}
