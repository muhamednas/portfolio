import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { SKILL_GROUPS } from "../constants/data";
import SectionHeader from "./SectionHeader";

function SkillTile({ skill }) {
  const { isDark } = useTheme();
  const Icon = skill.icon;

  if (skill.featured) {
    return (
      <div className={"col-span-2 flex items-start gap-3 px-4 py-3.5 rounded-xl border " +
        (isDark
          ? "bg-violet-500/[0.08] border-violet-500/20 hover:border-violet-400/40"
          : "bg-violet-50 border-violet-200 hover:border-violet-300") +
        " transition-colors"}>
        <div className={"w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 " +
          (isDark ? "bg-violet-500/20" : "bg-violet-100")}>
          <Icon size={16} className={isDark ? "text-violet-300" : "text-violet-600"} />
        </div>
        <div>
          <div className={"text-sm font-bold " + (isDark ? "text-white" : "text-slate-900")}>{skill.name}</div>
          <div className={"text-xs mt-0.5 " + (isDark ? "text-slate-400" : "text-slate-500")}>{skill.tagline}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={"flex items-center gap-2.5 px-3 py-2.5 rounded-xl border " +
      (isDark ? "bg-white/[0.04] border-white/10 hover:border-white/20" : "bg-white border-slate-200 hover:border-slate-300") +
      " transition-colors"}>
      <Icon size={14} className={isDark ? "text-violet-300" : "text-violet-600"} />
      <span className={"text-xs font-semibold truncate " + (isDark ? "text-slate-200" : "text-slate-700")}>{skill.name}</span>
    </div>
  );
}

export default function SkillsSection() {
  const { isDark } = useTheme();
  return (
    <section id="skills" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Capabilities"
          title="What I bring."
          description="Technical depth, analytical thinking, and the people skills to turn it into impact."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className={"p-7 rounded-3xl border " +
                (isDark ? "bg-white/[0.03] border-white/10" : "bg-white/60 border-slate-200")}
            >
              <div className="mb-5">
                <div className={"text-xs font-bold uppercase mb-2 " + (isDark ? "text-violet-300" : "text-violet-600")}>
                  {group.title}
                </div>
                <h3 className={"text-xl font-bold " + (isDark ? "text-white" : "text-slate-900")}>
                  {group.description}
                </h3>
              </div>

              {/* Bento grid: featured spans 2 cols, regular takes 1 */}
              <div className="grid grid-cols-2 gap-2.5">
                {group.skills.map((skill) => (
                  <SkillTile key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
