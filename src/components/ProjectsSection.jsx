import { PROJECTS } from "../constants/data";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
  return (
    <section id="work" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects that ship."
          description="A mix of personal entrepreneurial builds and university group work."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
