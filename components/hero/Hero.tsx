import { Container } from "@/components/common/Container";
import { SocialLinks } from "@/components/common/SocialLinks";
import type { Profile, Socials } from "@/types/profile";
import type { Statistic } from "@/types/statistics";

interface HeroProps {
  profile: Profile;
  socials: Socials;
  statistics: Statistic[];
}

export function Hero({ profile, socials, statistics }: HeroProps) {
  return (
    <header className="py-24 sm:py-32">
      <Container>
        <p className="text-sm font-medium text-blue-300">{profile.role}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-400">{profile.tagline}</p>
        <div className="mt-8"><SocialLinks socials={socials} /></div>
        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((statistic) => (
            <div key={statistic.title} className="rounded-lg border border-slate-800 p-4">
              <dt className="text-sm text-slate-400">{statistic.title}</dt>
              <dd className="mt-1 text-xl font-semibold text-white">{statistic.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </header>
  );
}
