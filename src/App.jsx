import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Sun, Moon,
  Award, GraduationCap, Briefcase, X
} from "lucide-react";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ScrollProgress from "./components/ScrollProgress";
import Marquee from "./components/Marquee";
import {
  PROFILE, PROJECTS, EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILL_GROUPS
} from "./constants/data";

const GridBackground = ({ isDark }) => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className={"absolute inset-0 " + (isDark ? "opacity-[0.07]" : "opacity-[0.04]")}
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

const Nav = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Track Record", href: "#track" },
    { label: "Certs", href: "#certs" },
    { label: "Contact", href: "#contact" }
  ];
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-500 " + (scrolled ? (isDark ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/5" : "bg-white/70 backdrop-blur-xl border-b border-slate-200/60") : "bg-transparent")}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[1.5px]">
            <div className={"w-full h-full rounded-[10px] flex items-center justify-center " + (isDark ? "bg-slate-950" : "bg-white")}>
              <span className="font-black text-lg bg-gradient-to-br from-violet-500 to-cyan-400 bg-clip-text text-transparent">M</span>
            </div>
          </div>
          <span className={"font-bold tracking-tight hidden sm:block " + (isDark ? "text-white" : "text-slate-900")}>muhammed<span className="text-violet-500">.</span>dev</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={"px-4 py-2 text-sm font-medium rounded-full transition-all " + (isDark ? "text-slate-300 hover:text-white hover:bg-white/5" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100")}>{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className={"relative w-12 h-12 rounded-full flex items-center justify-center transition-all " + (isDark ? "bg-white/5 hover:bg-white/10 border border-white/10" : "bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10")}>
            <AnimatePresence mode="wait">
              <motion.div key={isDark ? "moon" : "sun"} initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.3 }}>
                {isDark ? <Moon size={18} className="text-violet-300" /> : <Sun size={18} className="text-amber-500" />}
              </motion.div>
            </AnimatePresence>
          </button>
          <a href="#contact" className={"hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all " + (isDark ? "bg-white text-slate-900 hover:bg-violet-100" : "bg-slate-900 text-white hover:bg-violet-600")}>
            Let us talk <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

const SectionHeader = ({ eyebrow, title, description, isDark }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="mb-14 max-w-3xl">
    <div className={"inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase mb-4 " + (isDark ? "text-violet-300" : "text-violet-600")}>
      <span className="w-8 h-[1px] bg-current" />{eyebrow}
    </div>
    <h2 className={"text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-5 " + (isDark ? "text-white" : "text-slate-900")} style={{ fontFamily: "Instrument Serif, Georgia, serif" }}>{title}</h2>
    {description && (<p className={"text-lg md:text-xl font-light leading-relaxed " + (isDark ? "text-slate-400" : "text-slate-600")}>{description}</p>)}
  </motion.div>
);

const ProjectsSection = ({ isDark }) => (
  <section id="work" className="relative py-32 px-6 md:px-10">
    <div className="max-w-7xl mx-auto">
      <SectionHeader eyebrow="Selected Work" title="Projects that ship." description="A mix of personal entrepreneurial builds and university group work." isDark={isDark} />
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (<ProjectCard key={p.name} project={p} index={i} isDark={isDark} />))}
      </div>
    </div>
  </section>
);

const SkillsSection = ({ isDark }) => (
  <section id="skills" className="relative py-32 px-6 md:px-10">
    <div className="max-w-7xl mx-auto">
      <SectionHeader eyebrow="Capabilities" title="What I bring." description="Technical depth, analytical thinking, and the people skills to turn it into impact." isDark={isDark} />
      <div className="grid lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div key={group.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: gi * 0.1 }} className={"p-7 rounded-3xl border " + (isDark ? "bg-white/[0.03] border-white/10" : "bg-white/60 border-slate-200")}>
            <div className="mb-6">
              <div className={"text-xs font-bold uppercase mb-2 " + (isDark ? "text-violet-300" : "text-violet-600")}>{group.title}</div>
              <h3 className={"text-xl font-bold " + (isDark ? "text-white" : "text-slate-900")}>{group.description}</h3>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className={"flex items-center gap-2.5 px-3 py-2.5 rounded-xl border " + (isDark ? "bg-white/[0.04] border-white/10" : "bg-white border-slate-200")}>
                    <Icon size={14} className={isDark ? "text-violet-300" : "text-violet-600"} />
                    <span className={"text-xs font-semibold truncate " + (isDark ? "text-slate-200" : "text-slate-700")}>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TrackRecord = ({ isDark }) => (
  <section id="track" className="relative py-32 px-6 md:px-10">
    <div className="max-w-7xl mx-auto">
      <SectionHeader eyebrow="Track Record" title="Where I have been." description="Education, work, and the through-line: turning raw data into systems that scale." isDark={isDark} />
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className={"flex items-center gap-3 mb-6 " + (isDark ? "text-violet-300" : "text-violet-600")}>
            <GraduationCap size={22} /><span className="text-sm font-bold uppercase">Education</span>
          </div>
          {EDUCATION.map((edu, i) => (
            <div key={i} className={"p-7 rounded-3xl border mb-4 " + (isDark ? "bg-white/[0.03] border-white/10" : "bg-white/60 border-slate-200")}>
              <div className={"text-xs font-semibold mb-2 " + (isDark ? "text-slate-500" : "text-slate-500")}>{edu.period}</div>
              <h3 className={"text-2xl font-black mb-2 " + (isDark ? "text-white" : "text-slate-900")}>{edu.degree}</h3>
              <div className={"text-sm font-semibold mb-3 " + (isDark ? "text-violet-300" : "text-violet-600")}>{edu.institution}</div>
              <div className={"text-sm " + (isDark ? "text-slate-400" : "text-slate-600")}>{edu.focus}</div>
            </div>
          ))}
        </div>
        <div>
          <div className={"flex items-center gap-3 mb-6 " + (isDark ? "text-violet-300" : "text-violet-600")}>
            <Briefcase size={22} /><span className="text-sm font-bold uppercase">Experience</span>
          </div>
          <div className="space-y-4">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className={"p-7 rounded-3xl border " + (isDark ? "bg-white/[0.03] border-white/10" : "bg-white/60 border-slate-200")}>
                <div className={"text-xs font-semibold mb-2 " + (isDark ? "text-slate-500" : "text-slate-500")}>{exp.period} · {exp.location}</div>
                <h3 className={"text-2xl font-black mb-1 " + (isDark ? "text-white" : "text-slate-900")}>{exp.role}</h3>
                <div className={"text-sm font-semibold mb-4 " + (isDark ? "text-violet-300" : "text-violet-600")}>{exp.company}</div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className={"text-sm flex gap-3 " + (isDark ? "text-slate-400" : "text-slate-600")}>
                      <span className={"mt-2 w-1 h-1 rounded-full flex-shrink-0 " + (isDark ? "bg-violet-400" : "bg-violet-500")} />{h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CertsSection = ({ isDark }) => {
  const [lightboxCert, setLightboxCert] = useState(null);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLightboxCert(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <section id="certs" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Credentials" title="Continuously leveling up." description="Click any card to view the full certificate." isDark={isDark} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <button key={cert.name} onClick={() => cert.image && setLightboxCert(cert)}
              className={"text-left p-5 rounded-2xl border transition-all hover:-translate-y-1 " + (isDark ? "bg-white/[0.03] border-white/10 hover:border-white/20" : "bg-white/60 border-slate-200 hover:border-slate-300 hover:shadow-lg") + " " + (cert.image ? "cursor-pointer" : "cursor-default")}>
              <div className={"relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 " + (isDark ? "bg-gradient-to-br from-slate-800 to-slate-900" : "bg-gradient-to-br from-slate-100 to-slate-200")}>
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Award size={32} className={isDark ? "text-violet-300" : "text-violet-600"} />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className={"text-[10px] font-bold uppercase px-2.5 py-1 rounded-full " + (isDark ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-500")}>{cert.category}</span>
                <Award size={14} className={isDark ? "text-violet-300" : "text-violet-600"} />
              </div>
              <h3 className={"font-bold leading-snug mb-1 text-sm " + (isDark ? "text-white" : "text-slate-900")}>{cert.name}</h3>
              <div className={"text-xs font-medium " + (isDark ? "text-slate-500" : "text-slate-500")}>{cert.issuer}</div>
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lightboxCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxCert(null)} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md cursor-pointer">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full cursor-default">
              <button onClick={() => setLightboxCert(null)} className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center">
                <X size={18} />
              </button>
              <div className="rounded-2xl overflow-hidden bg-white">
                <img src={lightboxCert.image} alt={lightboxCert.name} className="w-full h-auto" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-lg">{lightboxCert.name}</h3>
                <p className="text-white/70 text-sm">{lightboxCert.issuer} · {lightboxCert.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ContactSection = ({ isDark }) => (
  <section id="contact" className="relative py-32 px-6 md:px-10">
    <div className="max-w-6xl mx-auto">
      <div className={"relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 border " + (isDark ? "bg-gradient-to-br from-violet-950/40 via-slate-900/60 to-cyan-950/40 border-white/10" : "bg-gradient-to-br from-violet-50 via-white to-cyan-50 border-slate-200")}>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className={"inline-flex items-center gap-2 text-xs font-bold uppercase mb-4 " + (isDark ? "text-violet-300" : "text-violet-600")}>
              <span className="w-8 h-[1px] bg-current" />Get in touch
            </div>
            <h2 className={"text-5xl md:text-6xl font-black leading-[0.95] mb-6 " + (isDark ? "text-white" : "text-slate-900")}>
              Let us build something real.
            </h2>
            <p className={"text-lg font-light mb-8 " + (isDark ? "text-slate-300" : "text-slate-600")}>
              Open to internships, freelance AI projects, and technical co-founder conversations.
            </p>
            <a href={"mailto:" + PROFILE.email} className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white mb-8">
              <Mail size={18} />{PROFILE.email}<ArrowUpRight size={16} />
            </a>
            <div className="space-y-3">
              {[
                { icon: Phone, label: "Mobile", value: PROFILE.phone, href: "tel:" + PROFILE.phone },
                { icon: Linkedin, label: "LinkedIn", value: "muhamadns44", href: PROFILE.linkedin },
                { icon: MapPin, label: "Location", value: "Mount Lavinia, Sri Lanka", href: null }
              ].map((it, i) => {
                const Icon = it.icon;
                const inner = (
                  <>
                    <div className={"w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 " + (isDark ? "bg-white/10" : "bg-white border border-slate-200")}>
                      <Icon size={16} className={isDark ? "text-violet-300" : "text-violet-600"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={"text-xs font-semibold uppercase " + (isDark ? "text-slate-500" : "text-slate-500")}>{it.label}</div>
                      <div className={"font-semibold truncate text-sm " + (isDark ? "text-white" : "text-slate-900")}>{it.value}</div>
                    </div>
                    {it.href && <ArrowUpRight size={14} className={isDark ? "text-slate-400" : "text-slate-400"} />}
                  </>
                );
                return it.href ? (
                  <a key={i} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className={"flex items-center gap-3 p-3 rounded-2xl border " + (isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white/60 border-slate-200 hover:bg-white")}>
                    {inner}
                  </a>
                ) : (
                  <div key={i} className={"flex items-center gap-3 p-3 rounded-2xl border " + (isDark ? "bg-white/5 border-white/10" : "bg-white/60 border-slate-200")}>{inner}</div>
                );
              })}
            </div>
          </div>
          <div>
            <ContactForm isDark={isDark} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
const Footer = ({ isDark }) => (
  <footer className={"relative py-10 px-6 md:px-10 border-t " + (isDark ? "border-white/5" : "border-slate-200")}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className={"text-sm " + (isDark ? "text-slate-500" : "text-slate-500")}>(c) 2026 Mohamed Nasir Mohamed</div>
      <div className="flex items-center gap-3">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className={"w-9 h-9 rounded-full flex items-center justify-center " + (isDark ? "bg-white/5 text-slate-300" : "bg-slate-100 text-slate-700")}><Github size={16} /></a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={"w-9 h-9 rounded-full flex items-center justify-center " + (isDark ? "bg-white/5 text-slate-300" : "bg-slate-100 text-slate-700")}><Linkedin size={16} /></a>
        <a href={"mailto:" + PROFILE.email} className={"w-9 h-9 rounded-full flex items-center justify-center " + (isDark ? "bg-white/5 text-slate-300" : "bg-slate-100 text-slate-700")}><Mail size={16} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);
  return (
    <div className={"min-h-screen transition-colors duration-500 " + (isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900")} style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <ScrollProgress />
      <GridBackground isDark={isDark} />
      <Nav isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero isDark={isDark} />
        <Marquee isDark={isDark} />
        <ProjectsSection isDark={isDark} />
        <SkillsSection isDark={isDark} />
        <TrackRecord isDark={isDark} />
        <CertsSection isDark={isDark} />
        <ContactSection isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
