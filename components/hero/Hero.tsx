import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SocialLinks } from "@/components/common/SocialLinks";
import { SECTION_IDS } from "@/lib/constants";
import type { Profile, Socials } from "@/types/profile";
import type { Statistic } from "@/types/statistics";

interface HeroProps {
  profile: Profile;
  socials: Socials;
  statistics: Statistic[];
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

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="size-4 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <path d="M10 3v9m0 0 4-4m-4 4L6 8M4 16h12" />
    </svg>
  );
}

export function Hero({ profile, socials, statistics }: HeroProps) {
  return (
    <header className="relative flex min-h-svh items-center overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-300/50 to-transparent"
      />

      <Container className="relative">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-blue-300 uppercase sm:text-sm">
            <span className="h-px w-8 bg-blue-300" aria-hidden="true" />
            {profile.role}
          </p>

          <h1 className="mt-7 text-5xl font-semibold tracking-[-0.04em] text-balance text-white sm:text-7xl lg:text-[5.5rem] lg:leading-[0.98]">
            {profile.name}
          </h1>

          <p className="mt-7 text-xl font-medium text-slate-200 sm:text-2xl">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            {profile.introduction}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={`#${SECTION_IDS.projects}`}>
              View projects
              <ArrowIcon />
            </Button>
            {socials.resume ? (
              <Button href={socials.resume} variant="secondary" download>
                Download résumé
                <DownloadIcon />
              </Button>
            ) : null}
          </div>

          <div className="mt-8">
            <SocialLinks socials={socials} />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {statistics.map((statistic) => (
            <div key={statistic.title} className="bg-slate-950/95 px-6 py-5 sm:px-7 sm:py-6">
              <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {statistic.value}
              </dd>
              <dt className="mt-1 text-sm leading-6 text-slate-500">{statistic.title}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </header>
  );
}
