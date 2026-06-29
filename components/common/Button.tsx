import type { AnchorHTMLAttributes, ReactNode } from "react";

import { joinClassNames } from "@/lib/utils";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={joinClassNames(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300",
        variant === "primary"
          ? "bg-blue-300 text-slate-950 hover:bg-blue-200"
          : "border border-slate-700 bg-slate-950/50 text-slate-100 hover:border-blue-300 hover:text-blue-200",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
