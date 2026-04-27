import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, Brain, Sparkles } from "lucide-react";
import { PROFILE } from "../constants/data";
import Typewriter from "./Typewriter";
import AnimatedStats from "./AnimatedStats";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Hero({ isDark }) {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="visible" className="lg:col-span-7 order-2 lg:order-1">
          <motion.div variants={item} className="mb-6">
            <span className={"inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase " + (isDark ? "bg-violet-500/10 text-violet-300 border border-violet-400/20" : "bg-violet-100 text-violet-700 border border-violet-200")}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1 variants={item} className={"font-black tracking-tighter leading-tight text-6xl md:text-7xl mb-6 " + (isDark ? "text-white" : "text-slate-900")}>
            <span className="block italic font-light">Hey, I am</span>
            <span className="block">
              <span className="bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">{PROFILE.name}</span>
              <span className={isDark ? "text-white" : "text-slate-900"}>.</span>
            </span>
          </motion.h1>

          <motion.div variants={item}>
            <Typewriter isDark={isDark} />
          </motion.div>

          <motion.p variants={item} className={"text-base md:text-lg mb-10 max-w-xl leading-relaxed " + (isDark ? "text-slate-400" : "text-slate-500")}>
            {PROFILE.bio}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a href="#work" className="px-7 py-4 rounded-full font-semibold text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:shadow-2xl transition-all flex items-center gap-2">
              See my work <ArrowUpRight size={16} />
            </a>
            <a      
              href="/portfolio/MohamedNasir_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={"flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm transition-all " + (isDark ? "bg-white/5 text-white border border-white/10 hover:bg-white/10" : "bg-slate-900/5 text-slate-900 border border-slate-900/10 hover:bg-slate-900/15")}
            >
              Download CV
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className={"flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm " + (isDark ? "bg-white/5 text-white border border-white/10" : "bg-slate-900/5 text-slate-900 border border-slate-900/10")}>
              <Github size={16} /> GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={"flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm " + (isDark ? "bg-white/5 text-white border border-white/10" : "bg-slate-900/5 text-slate-900 border border-slate-900/10")}>
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>

          <motion.div variants={item}>
            <AnimatedStats isDark={isDark} />
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 rounded-[2rem] blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 rounded-[2rem] blur-md opacity-70"></div>
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[1.8rem] overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[2px]">
              <div className={"w-full h-full rounded-[1.7rem] overflow-hidden " + (isDark ? "bg-slate-900" : "bg-slate-100")}>
                <img src={PROFILE.photo} alt={PROFILE.fullName} className="w-full h-full object-cover" />
              </div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className={"absolute -top-4 -left-6 px-4 py-2.5 rounded-2xl border shadow-2xl " + (isDark ? "bg-white/10 border-white/20 text-white" : "bg-white/90 border-slate-200 text-slate-900")}>
              <div className="flex items-center gap-2">
                <Brain size={16} className="text-violet-400" />
                <span className="text-xs font-bold">AI Builder</span>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className={"absolute -bottom-4 -right-6 px-4 py-2.5 rounded-2xl border shadow-2xl " + (isDark ? "bg-white/10 border-white/20 text-white" : "bg-white/90 border-slate-200 text-slate-900")}>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-xs font-bold">RAG and Agents</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}