import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SECTION_IDS } from "@/lib/constants";
import type { Profile } from "@/types/profile";

export function About({ profile }: { profile: Profile }) {
  return (
    <Section id={SECTION_IDS.about} className="border-t border-slate-900">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-300 uppercase">
            01 / Introduction
          </p>
          <SectionTitle>About me</SectionTitle>
        </div>

        <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
          {profile.bio.map((paragraph, index) => (
            <p className={index === 0 ? "text-slate-200" : undefined} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
