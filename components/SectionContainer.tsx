import { sectionContainer } from "@/lib/section";
import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div className={`${sectionContainer} ${className}`.trim()}>{children}</div>
  );
}
