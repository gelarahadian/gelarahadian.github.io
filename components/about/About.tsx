import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SECTION_IDS } from "@/lib/constants";
import type { Profile } from "@/types/profile";

export function About({ profile }: { profile: Profile }) {
  return (
    <Section id={SECTION_IDS.about}>
      <SectionTitle>About</SectionTitle>
      <div className="mt-6 max-w-3xl space-y-4 text-slate-400">
        {profile.bio.length > 0 ? profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>Biography content will be added soon.</p>}
      </div>
    </Section>
  );
}
