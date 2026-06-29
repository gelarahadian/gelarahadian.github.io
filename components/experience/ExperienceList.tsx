import { Button } from "@/components/common/Button";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SECTION_IDS } from "@/lib/constants";
import type { Experience } from "@/types/experience";

interface ExperienceListProps {
  experiences: Experience[];
  resumeUrl: string;
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="size-4 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function ExperienceList({ experiences, resumeUrl }: ExperienceListProps) {
  return (
    <Section id={SECTION_IDS.experience} className="border-t border-slate-900">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-300 uppercase">
            02 / Experience
          </p>
          <SectionTitle>Where I’ve worked</SectionTitle>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
            A record of professional work and open-source contributions.
          </p>
        </div>

        <div>
          <ol className="relative ml-2 border-l border-slate-800 sm:ml-3">
            {experiences.map((experience, index) => (
              <li
                key={`${experience.company}-${experience.position}`}
                className={index === experiences.length - 1 ? "pb-2 pl-8 sm:pl-10" : "pb-12 pl-8 sm:pb-14 sm:pl-10"}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] mt-2 size-2.5 rounded-full border-2 border-slate-950 bg-blue-300 ring-4 ring-slate-950"
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {experience.position}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-300">
                      {experience.company}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-slate-500">{experience.duration}</p>
                </div>

                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">
                  {experience.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Technologies used at ${experience.company}`}>
                  {experience.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          {resumeUrl ? (
            <div className="mt-10 sm:ml-3">
              <Button href={resumeUrl} variant="secondary" target="_blank" rel="noreferrer">
                View full résumé
                <ArrowIcon />
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
