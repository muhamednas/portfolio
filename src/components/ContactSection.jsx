import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { PROFILE } from "../constants/data";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const { isDark } = useTheme();

  const contactItems = [
    { icon: Phone, label: "Mobile", value: PROFILE.phone, href: "tel:" + PROFILE.phone.replace(/\s/g, "") },
    { icon: Linkedin, label: "LinkedIn", value: "muhamadns44", href: PROFILE.linkedin },
    { icon: MapPin, label: "Location", value: PROFILE.location, href: null }
  ];

  return (
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
                Let's build something real.
              </h2>
              <p className={"text-lg font-light mb-8 " + (isDark ? "text-slate-300" : "text-slate-600")}>
                Open to internships, freelance AI projects, and technical co-founder conversations.
              </p>
              <a
                href={"mailto:" + PROFILE.email}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white mb-8"
              >
                <Mail size={18} />{PROFILE.email}<ArrowUpRight size={16} />
              </a>
              <div className="space-y-3">
                {contactItems.map((it, i) => {
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
                    <div key={i} className={"flex items-center gap-3 p-3 rounded-2xl border " + (isDark ? "bg-white/5 border-white/10" : "bg-white/60 border-slate-200")}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
