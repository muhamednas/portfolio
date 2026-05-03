import { useTheme } from "./context/ThemeContext";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import TrackRecord from "./components/TrackRecord";
import CertsSection from "./components/CertsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GridBackground from "./components/GridBackground";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const { isDark } = useTheme();
  return (
    <div
      className={"min-h-screen transition-colors duration-500 " + (isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900")}
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <ScrollProgress />
      <GridBackground />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ProjectsSection />
        <SkillsSection />
        <TrackRecord />
        <CertsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
