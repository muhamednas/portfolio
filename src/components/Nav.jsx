import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, ArrowUpRight, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "Work",         href: "#work",    id: "work"    },
  { label: "Skills",       href: "#skills",  id: "skills"  },
  { label: "Track Record", href: "#track",   id: "track"   },
  { label: "Certs",        href: "#certs",   id: "certs"   },
  { label: "Contact",      href: "#contact", id: "contact" },
];

export default function Nav() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeId, setActiveId]       = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers = links.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={"fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
          (scrolled
            ? (isDark ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/5" : "bg-white/70 backdrop-blur-xl border-b border-slate-200/60")
            : "bg-transparent")}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[1.5px]">
              <div className={"w-full h-full rounded-[10px] flex items-center justify-center " + (isDark ? "bg-slate-950" : "bg-white")}>
                <span className="font-black text-lg bg-gradient-to-br from-violet-500 to-cyan-400 bg-clip-text text-transparent">M</span>
              </div>
            </div>
            <span className={"font-bold tracking-tight hidden sm:block " + (isDark ? "text-white" : "text-slate-900")}>
              Mohamed<span className="text-violet-500">.</span>
            </span>
          </a>

          {/* Desktop links with active indicator */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const isActive = activeId === l.id;
              return (
                <a
                  key={l.id}
                  href={l.href}
                  className={"relative px-4 py-2 text-sm font-medium rounded-full transition-all " +
                    (isActive
                      ? (isDark ? "text-white" : "text-slate-900")
                      : (isDark ? "text-slate-400 hover:text-white hover:bg-white/5" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"))}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={"absolute inset-0 rounded-full -z-10 " + (isDark ? "bg-white/10" : "bg-violet-50 border border-violet-200")}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={"relative w-10 h-10 rounded-full flex items-center justify-center transition-all " +
                (isDark ? "bg-white/5 hover:bg-white/10 border border-white/10" : "bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10")}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? "moon" : "sun"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <Moon size={16} className="text-violet-300" /> : <Sun size={16} className="text-amber-500" />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className={"hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all " +
                (isDark ? "bg-white text-slate-900 hover:bg-violet-100" : "bg-slate-900 text-white hover:bg-violet-600")}
            >
              Let's talk <ArrowUpRight size={14} />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className={"md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all " +
                (isDark ? "bg-white/5 hover:bg-white/10 border border-white/10" : "bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10")}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen
                    ? <X size={18} className={isDark ? "text-white" : "text-slate-900"} />
                    : <Menu size={18} className={isDark ? "text-white" : "text-slate-900"} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={"md:hidden fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-10 " +
              (isDark ? "bg-slate-950/97 backdrop-blur-xl" : "bg-white/97 backdrop-blur-xl")}
          >
            <nav className="flex flex-col gap-1 flex-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={"text-2xl font-bold py-4 border-b transition-colors " +
                    (activeId === l.id
                      ? (isDark ? "text-violet-300 border-violet-500/30" : "text-violet-600 border-violet-200")
                      : (isDark ? "text-white border-white/10" : "text-slate-900 border-slate-200"))}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 py-4 rounded-full font-bold text-center text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 text-lg"
            >
              Let's talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
