import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { CERTIFICATIONS } from "../constants/data";
import SectionHeader from "./SectionHeader";

export default function CertsSection() {
  const { isDark } = useTheme();
  const [lightboxCert, setLightboxCert] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLightboxCert(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certs" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Credentials"
          title="Continuously leveling up."
          description="Click any card to view the full certificate."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <button
              key={cert.name}
              onClick={() => cert.image && setLightboxCert(cert)}
              className={"text-left p-5 rounded-2xl border transition-all hover:-translate-y-1 " + (isDark ? "bg-white/[0.03] border-white/10 hover:border-white/20" : "bg-white/60 border-slate-200 hover:border-slate-300 hover:shadow-lg") + " " + (cert.image ? "cursor-pointer" : "cursor-default")}
            >
              <div className={"relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 " + (isDark ? "bg-gradient-to-br from-slate-800 to-slate-900" : "bg-gradient-to-br from-slate-100 to-slate-200")}>
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full cursor-default"
            >
              <button onClick={() => setLightboxCert(null)} aria-label="Close" className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
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
}
