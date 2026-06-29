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
        "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors",
        variant === "primary"
          ? "bg-blue-400 text-slate-950 hover:bg-blue-300"
          : "border border-slate-700 text-slate-100 hover:border-slate-500",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
