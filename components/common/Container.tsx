import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={joinClassNames("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
