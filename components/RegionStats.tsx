import SectionContainer from "@/components/SectionContainer";
import { sectionPaddingCompact } from "@/lib/section";

const stats = [
  {
    value: "34",
    label: "AOPs from the Atlantic to the heart of France",
  },
  {
    value: "2nd",
    label: "Largest AOP sparkling production after Champagne",
  },
  {
    value: "#1",
    label: "Global producer of Chenin Blanc and Cabernet Franc",
  },
  {
    value: "#2",
    label: "Source of AOP rosé in France",
  },
] as const;

export default function RegionStats() {
  return (
    <section
      className={`bg-loire-blue text-white ${sectionPaddingCompact}`}
      aria-labelledby="region-stats-heading"
    >
      <SectionContainer>
        <h2
          id="region-stats-heading"
          className="text-center font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-left"
        >
          Loire Valley at a glance
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 sm:grid-cols-2 sm:gap-12 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <li
              key={stat.value + stat.label}
              className="flex min-w-0 flex-col items-center text-center sm:items-start sm:text-left lg:items-center lg:text-center"
            >
              <p className="font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-loire-blue-pale sm:mt-5 sm:text-base sm:leading-relaxed">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
