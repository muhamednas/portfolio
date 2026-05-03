import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function SectionHeader({ eyebrow, title, description }) {
  const { isDark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="mb-14 max-w-3xl"
    >
      <div className={"inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase mb-4 " + (isDark ? "text-violet-300" : "text-violet-600")}>
        <span className="w-8 h-[1px] bg-current" />{eyebrow}
      </div>
      <h2
        className={"text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-5 " + (isDark ? "text-white" : "text-slate-900")}
        style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
      >
        {title}
      </h2>
      {description && (
        <p className={"text-lg md:text-xl font-light leading-relaxed " + (isDark ? "text-slate-400" : "text-slate-600")}>{description}</p>
      )}
    </motion.div>
  );
}
