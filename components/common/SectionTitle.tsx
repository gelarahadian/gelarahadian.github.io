interface SectionTitleProps {
  children: string;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-2xl font-semibold tracking-tight text-white">{children}</h2>;
}
