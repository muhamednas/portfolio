import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { PROFILE } from "../constants/data";

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer className={"relative py-10 px-6 md:px-10 border-t " + (isDark ? "border-white/5" : "border-slate-200")}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className={"text-sm " + (isDark ? "text-slate-500" : "text-slate-500")}>
          © 2026 {PROFILE.fullName}
        </div>
        <div className="flex items-center gap-3">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={"w-9 h-9 rounded-full flex items-center justify-center transition-colors " + (isDark ? "bg-white/5 text-slate-300 hover:bg-white/10" : "bg-slate-100 text-slate-700 hover:bg-slate-200")}>
            <Github size={16} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={"w-9 h-9 rounded-full flex items-center justify-center transition-colors " + (isDark ? "bg-white/5 text-slate-300 hover:bg-white/10" : "bg-slate-100 text-slate-700 hover:bg-slate-200")}>
            <Linkedin size={16} />
          </a>
          <a href={"mailto:" + PROFILE.email} aria-label="Email" className={"w-9 h-9 rounded-full flex items-center justify-center transition-colors " + (isDark ? "bg-white/5 text-slate-300 hover:bg-white/10" : "bg-slate-100 text-slate-700 hover:bg-slate-200")}>
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
