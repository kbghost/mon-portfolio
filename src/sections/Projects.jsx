import { projects } from "../data/projects";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="MON TRAVAIL"
          title="Projets phares"
          description="Une sélection de projets réels — l'architecture ci-dessous est conçue pour en accueillir d'autres facilement."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.1} featured={p.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
