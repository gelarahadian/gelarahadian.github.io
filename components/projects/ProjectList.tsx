import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SECTION_IDS } from "@/lib/constants";
import type { Project } from "@/types/project";

export function ProjectList({ projects }: { projects: Project[] }) {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);
  return (
    <Section id={SECTION_IDS.projects}>
      <SectionTitle>Featured Projects</SectionTitle>
      {featuredProjects.length > 0 ? (
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <li key={project.title} className="rounded-lg border border-slate-800 p-5">
              <h3 className="font-medium text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{project.description}</p>
            </li>
          ))}
        </ul>
      ) : <p className="mt-6 text-slate-400">Featured projects will be added soon.</p>}
    </Section>
  );
}
