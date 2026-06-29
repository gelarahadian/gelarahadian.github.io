import type { Socials } from "@/types/profile";

interface SocialLinksProps {
  socials: Socials;
}

const socialLabels: Record<keyof Socials, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  resume: "Resume",
};

function SocialIcon({ name }: { name: keyof Socials }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.9 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.69c0-3.84-2.05-5.63-4.78-5.63a4.13 4.13 0 0 0-3.72 2.05V8.25H9.25V21h3.25v-6.31c0-1.66.31-3.28 2.38-3.28 2.03 0 2.06 1.9 2.06 3.39V21H21v-7.31Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current" strokeWidth="1.8">
      <path d="M7 3h7l4 4v14H7z" /><path d="M14 3v5h5M10 12h5M10 16h5" />
    </svg>
  );
}

export function SocialLinks({ socials }: SocialLinksProps) {
  const availableSocials = Object.entries(socials).filter(
    (entry): entry is [keyof Socials, string] => Boolean(entry[1]),
  );

  if (availableSocials.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Social links">
      {availableSocials.map(([name, url]) => (
        <li key={name}>
          <a
            className="inline-flex size-11 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition duration-200 hover:-translate-y-0.5 hover:border-slate-600 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            href={url}
            target={name === "resume" ? undefined : "_blank"}
            rel={name === "resume" ? undefined : "noreferrer"}
          >
            <span className="sr-only">{socialLabels[name]}</span>
            <SocialIcon name={name} />
          </a>
        </li>
      ))}
    </ul>
  );
}
