import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BookOpen, Award, Github, Clock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { EDUCATION, EXPERIENCE, PUBLICATIONS } from "../constants/data";
import SectionHeader from "./SectionHeader";

function TimelineEntry({ children, index, isLast }) {
  const { isDark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative flex gap-5"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={"w-3 h-3 rounded-full border-2 mt-6 z-10 flex-shrink-0 " +
          (isDark ? "border-violet-400 bg-slate-950 shadow-[0_0_8px_rgba(139,92,246,0.6)]" : "border-violet-500 bg-white shadow-[0_0_8px_rgba(139,92,246,0.3)]")} />
        {!isLast && (
          <div className={"flex-1 w-[1px] mt-1 " + (isDark ? "bg-gradient-to-b from-violet-500/40 to-violet-500/05" : "bg-gradient-to-b from-violet-400/40 to-violet-400/05")} />
        )}
      </div>
      {/* Card */}
      <div className={"flex-1 mb-6 p-6 rounded-2xl border " +
        (isDark ? "bg-white/[0.03] border-white/10" : "bg-white/70 border-slate-200 shadow-sm")}>
        {children}
      </div>
    </motion.div>
  );
}

function TimelineColumn({ icon: Icon, label, entries }) {
  const { isDark } = useTheme();
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={"flex items-center gap-3 mb-6 " + (isDark ? "text-violet-300" : "text-violet-600")}
      >
        <Icon size={20} />
        <span className="text-sm font-bold uppercase tracking-widest">{label}</span>
      </motion.div>
      <div>
        {entries.map((entry, i) => (
          <TimelineEntry key={i} index={i} isLast={i === entries.length - 1}>
            {entry}
          </TimelineEntry>
        ))}
      </div>
    </div>
  );
}

export default function TrackRecord() {
  const { isDark } = useTheme();
  const date   = "text-xs font-semibold " + (isDark ? "text-slate-500" : "text-slate-400");
  const head   = "font-black " + (isDark ? "text-white" : "text-slate-900");
  const accent = "text-sm font-semibold " + (isDark ? "text-violet-300" : "text-violet-600");
  const body   = "text-sm leading-relaxed " + (isDark ? "text-slate-400" : "text-slate-600");

  const leftEntries = [
    ...EDUCATION.map((edu) => (
      <div>
        <div className={date + " mb-1"}>{edu.period}</div>
        <h3 className={"text-xl mb-1 " + head}>{edu.degree}</h3>
        <div className={accent + " mb-2"}>{edu.institution}</div>
        <div className={body}>{edu.focus}</div>
      </div>
    )),
    ...PUBLICATIONS.map((pub) => (
      <div>
        <div className={date + " mb-1"}>{pub.year}</div>
        <h3 className={"text-base mb-1 " + head}>{pub.title}</h3>
        <div className={accent + " mb-3"}>{pub.venue}</div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className={"text-xs font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 " +
            (isDark ? "bg-emerald-500/10 text-emerald-300" : "bg-emerald-50 text-emerald-700")}>
            <Award size={10} />{pub.type}
          </span>
          {pub.githubUrl ? (
            <a
              href={pub.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={"inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border transition-colors " +
                (isDark ? "border-white/10 text-slate-300 hover:text-white hover:border-white/20" : "border-slate-200 text-slate-600 hover:text-slate-900")}
            >
              <Github size={10} /> View repo
            </a>
          ) : (
            <span className={"inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border " +
              (isDark ? "border-white/10 text-slate-600" : "border-slate-200 text-slate-400")}>
              <Clock size={10} /> GitHub repo coming soon
            </span>
          )}
        </div>
      </div>
    )),
  ];

  const rightEntries = EXPERIENCE.map((exp) => (
    <div>
      <div className={date + " mb-1"}>{exp.period} · {exp.location}</div>
      <h3 className={"text-xl mb-1 " + head}>{exp.role}</h3>
      <div className={accent + " mb-3"}>{exp.company}</div>
      <ul className="space-y-2">
        {exp.highlights.map((h, j) => (
          <li key={j} className={"text-sm flex gap-2.5 " + (isDark ? "text-slate-400" : "text-slate-600")}>
            <span className={"mt-[7px] w-1 h-1 rounded-full flex-shrink-0 " + (isDark ? "bg-violet-400" : "bg-violet-500")} />
            {h}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <section id="track" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Track Record"
          title="Where I've been."
          description="Education, work, and the through-line: turning raw data into systems that scale."
        />
        <div className="grid lg:grid-cols-2 gap-10">
          <TimelineColumn icon={GraduationCap} label="Education & Publications" entries={leftEntries} />
          <TimelineColumn icon={Briefcase} label="Experience" entries={rightEntries} />
        </div>
      </div>
    </section>
  );
}
