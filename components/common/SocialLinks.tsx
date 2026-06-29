import type { Socials } from "@/types/profile";

interface SocialLinksProps {
  socials: Socials;
}

const socialLabels: Record<keyof Socials, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  resume: "Resume",
};

export function SocialLinks({ socials }: SocialLinksProps) {
  const availableSocials = Object.entries(socials).filter(
    (entry): entry is [keyof Socials, string] => Boolean(entry[1]),
  );

  if (availableSocials.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-4" aria-label="Social links">
      {availableSocials.map(([name, url]) => (
        <li key={name}>
          <a
            className="text-sm text-slate-400 transition-colors hover:text-blue-300"
            href={url}
            target={name === "resume" ? undefined : "_blank"}
            rel={name === "resume" ? undefined : "noreferrer"}
          >
            {socialLabels[name]}
          </a>
        </li>
      ))}
    </ul>
  );
}
