export default function Marquee({ isDark }) {
  const techs = [
    "Python", "FastAPI", "PostgreSQL", "LangChain", "React",
    "Power BI", "Machine Learning", "RAG Systems", "Streamlit",
    "Scikit-learn", "Pandas", "SQL", "R", "Plotly", "PostGIS"
  ];

  const items = [...techs, ...techs];

  return (
    <div style={{
      overflow: "hidden",
      borderTop: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
      borderBottom: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
      padding: "0.85rem 0",
      position: "relative",
      background: isDark ? "rgba(139,92,246,0.03)" : "rgba(139,92,246,0.02)"
    }}>
      <div style={{
        maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)"
      }}>
        <div style={{
          display: "flex",
          gap: "2.5rem",
          width: "max-content",
          animation: "marqueeScroll 35s linear infinite"
        }}>
          {items.map((tech, i) => (
            <span key={i} style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.78rem",
              fontWeight: "600",
              letterSpacing: "0.05em",
              color: isDark ? "rgba(148,163,184,0.7)" : "rgba(100,116,139,0.8)",
              whiteSpace: "nowrap",
              padding: "0.2rem 0.8rem",
              borderRadius: "999px",
              border: isDark ? "1px solid rgba(139,92,246,0.15)" : "1px solid rgba(139,92,246,0.12)",
              background: isDark ? "rgba(139,92,246,0.06)" : "rgba(139,92,246,0.04)"
            }}>
              <span style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
                flexShrink: 0
              }} />
              {tech}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
