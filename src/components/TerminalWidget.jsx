import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const lines = [
  { type: "cmd", text: "analyze candidate.json"  },
  { type: "ok",  text: "Skills loaded: 18"       },
  { type: "ok",  text: "Projects shipped: 9"     },
  { type: "ok",  text: "Published @ ADScAI 2026" },
  { type: "ok",  text: "Available for hire"      },
];

export default function TerminalWidget() {
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisible((v) => Math.max(v, i + 1)), 700 + i * 480)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={"w-full rounded-2xl border overflow-hidden font-mono text-xs " +
        (isDark ? "bg-slate-900/80 border-white/10" : "bg-white/90 border-slate-200 shadow-md")}
    >
      {/* Window chrome */}
      <div className={"flex items-center gap-1.5 px-4 py-2.5 border-b " +
        (isDark ? "border-white/5 bg-white/[0.03]" : "border-slate-100 bg-slate-50")}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className={"ml-auto text-[10px] font-medium " + (isDark ? "text-slate-500" : "text-slate-400")}>
          terminal — zsh
        </span>
      </div>

      {/* Lines */}
      <div className="px-4 py-3 space-y-1.5 min-h-[112px]">
        {lines.slice(0, visible).map((line, i) => (
          <div key={i} className="flex items-center gap-2 leading-none">
            <span className={"select-none " + (line.type === "cmd" ? "text-violet-400" : "text-emerald-400")}>
              {line.type === "cmd" ? "›" : "✓"}
            </span>
            <span className={
              line.type === "cmd"
                ? (isDark ? "text-slate-200" : "text-slate-700")
                : (isDark ? "text-slate-400" : "text-slate-500")
            }>
              {line.text}
            </span>
          </div>
        ))}

        {visible >= lines.length && (
          <div className="flex items-center gap-2">
            <span className="text-violet-400 select-none">›</span>
            <span className="inline-block w-[7px] h-[13px] bg-violet-400" style={{ animation: "blink 1s steps(1) infinite" }} />
          </div>
        )}
      </div>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </motion.div>
  );
}
