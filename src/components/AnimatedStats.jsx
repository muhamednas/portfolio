import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatItem({ value, label, isDark, start }) {
  const numericValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCountUp(numericValue, 1800, start);

  return (
    <div style={{
      borderLeft: isDark ? "2px solid rgba(167,139,250,0.5)" : "2px solid rgba(124,58,237,0.5)",
      paddingLeft: "1rem"
    }}>
      <div style={{
        fontSize: "2rem",
        fontWeight: "900",
        color: isDark ? "white" : "#0f172a",
        lineHeight: 1
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        fontWeight: "500",
        marginTop: "0.25rem",
        color: isDark ? "rgba(148,163,184,1)" : "rgba(100,116,139,1)"
      }}>
        {label}
      </div>
    </div>
  );
}

export default function AnimatedStats({ isDark }) {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "8+", label: "Projects" },
    { value: "4yr", label: "Retail Data" },
    { value: "7+", label: "Certifications" }
  ];

  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: "32rem", marginTop: "3.5rem" }}>
      {stats.map((stat, i) => (
        <StatItem key={i} value={stat.value} label={stat.label} isDark={isDark} start={started} />
      ))}
    </div>
  );
}
