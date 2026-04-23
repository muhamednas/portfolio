import { motion } from "framer-motion";
import { Github as GithubIcon, ArrowUpRight, Users } from "lucide-react";

export default function ProjectCard({ project, index, isDark }) {
  const accents = {
    violet: "from-violet-500 to-fuchsia-500",
    cyan: "from-cyan-400 to-blue-500",
    pink: "from-pink-500 to-rose-500",
    amber: "from-amber-400 to-orange-500",
    emerald: "from-emerald-400 to-teal-500"
  };
  const accent = accents[project.accent] || accents.violet;
  const isGroup = project.type === "Group Project";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={"rounded-3xl overflow-hidden border " + (isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm")}
    >
      <div className={"h-1 w-full bg-gradient-to-r " + accent}></div>
      <div className="p-7">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={"text-xs font-bold uppercase px-3 py-1 rounded-full " + (isDark ? "bg-white/5 text-slate-300" : "bg-slate-100 text-slate-600")}>{project.category}</span>
            {isGroup && (<span className={"text-xs font-bold uppercase px-2.5 py-1 rounded-full flex items-center gap-1 " + (isDark ? "bg-emerald-500/10 text-emerald-300" : "bg-emerald-50 text-emerald-700")}><Users size={10} /> Group</span>)}
          </div>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={"w-10 h-10 rounded-full flex items-center justify-center " + (isDark ? "bg-white/5 text-white" : "bg-slate-100 text-slate-900")}><GithubIcon size={16} /></a>
        </div>
        <h3 className={"text-3xl font-black mb-3 " + (isDark ? "text-white" : "text-slate-900")}>{project.name}</h3>
        <p className={"text-sm mb-6 leading-relaxed " + (isDark ? "text-slate-400" : "text-slate-600")}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (<span key={tech} className={"text-xs font-semibold px-3 py-1 rounded-lg border " + (isDark ? "bg-slate-900/50 border-white/10 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700")}>{tech}</span>))}
        </div>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={"inline-flex items-center gap-1.5 text-sm font-bold " + (isDark ? "text-violet-300" : "text-violet-600")}>View code <ArrowUpRight size={14} /></a>
      </div>
    </motion.article>
  );
}
