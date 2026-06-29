import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SECTION_IDS } from "@/lib/constants";
import type { Experience } from "@/types/experience";

export function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <Section id={SECTION_IDS.experience}>
      <SectionTitle>Experience</SectionTitle>
      {experiences.length > 0 ? (
        <ul className="mt-6 space-y-6">
          {experiences.map((experience) => (
            <li key={`${experience.company}-${experience.position}`}>
              <h3 className="font-medium text-white">{experience.position}</h3>
              <p className="text-sm text-slate-400">{experience.company} · {experience.duration}</p>
            </li>
          ))}
        </ul>
      ) : <p className="mt-6 text-slate-400">Experience details will be added soon.</p>}
    </Section>
  );
}
