import { useTheme } from "../context/ThemeContext";

export default function GridBackground() {
  const { isDark } = useTheme();
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className={"absolute inset-0 " + (isDark ? "opacity-[0.07]" : "opacity-[0.04]")}
        style={{
          backgroundImage: `linear-gradient(${isDark ? "#a78bfa" : "#7c3aed"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#a78bfa" : "#7c3aed"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)"
        }}
      />
      <div className={"absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl " + (isDark ? "bg-violet-600/20" : "bg-violet-400/30")} />
      <div className={"absolute top-1/2 -right-20 w-96 h-96 rounded-full blur-3xl " + (isDark ? "bg-cyan-500/15" : "bg-cyan-300/25")} />
      <div className={"absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl " + (isDark ? "bg-pink-500/15" : "bg-pink-300/20")} />
    </div>
  );
}
