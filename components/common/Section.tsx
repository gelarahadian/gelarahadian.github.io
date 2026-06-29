import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/utils";

import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={joinClassNames("py-20 sm:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}
