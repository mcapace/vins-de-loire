import SectionContainer from "@/components/SectionContainer";

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
      <SectionContainer className="py-10 sm:py-12">
        <ul className="grid min-w-0 grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {proofStats.map((stat) => (
            <li key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-3xl font-semibold leading-none text-loire-blue-deep sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-loire-blue sm:text-sm">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
