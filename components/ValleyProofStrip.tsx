import SectionContainer from "@/components/SectionContainer";
import {
  typeStatCompact,
  typeStatLabelLight,
} from "@/lib/typography";

const proofStats = [
  { value: "34 AOP + 1 IGP", label: "Appellations" },
  { value: "33", label: "Grape varieties" },
  { value: "42,000", label: "Hectares under vine" },
  { value: "#1", label: "Global Chenin & Cab Franc" },
] as const;

export default function ValleyProofStrip() {
  return (
    <section
      className="border-b border-loire-blue-faint/40 bg-loire-accent-cream"
      aria-label="Loire Valley at a glance"
    >
      <SectionContainer className="py-12 sm:py-14">
        <ul className="grid min-w-0 grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          {proofStats.map((stat) => (
            <li
              key={stat.label}
              className="text-center lg:border-l lg:border-loire-blue-pale/40 lg:pl-8 lg:text-left first:lg:border-l-0 first:lg:pl-0"
            >
              <p className={typeStatCompact}>{stat.value}</p>
              <p className={`mt-4 ${typeStatLabelLight}`}>{stat.label}</p>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
