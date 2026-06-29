import { Container } from "@/components/common/Container";
import type { Profile } from "@/types/profile";

export function Footer({ profile }: { profile: Profile }) {
  return <footer className="border-t border-slate-800 py-8 text-sm text-slate-500"><Container>Built by {profile.name}.</Container></footer>;
}
