import SectionContainer from "@/components/SectionContainer";
import { proofStats } from "@/lib/proof-stats";
import {
  typeStatProofLabel,
  typeStatProofSuffix,
  typeStatProofValue,
} from "@/lib/typography";

export default function ValleyProofStrip() {
  return (
    <section
      className="border-b border-loire-blue-faint/40 bg-loire-accent-cream font-sans"
      aria-label="Loire Valley at a glance"
    >
      <SectionContainer className="py-12 sm:py-14">
        <ul className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-4 lg:gap-8">
          {proofStats.map((stat) => (
            <li
              key={stat.id}
              className="text-center lg:border-l lg:border-loire-blue-pale/40 lg:pl-8 lg:text-left first:lg:border-l-0 first:lg:pl-0"
            >
              <p className={`break-words ${typeStatProofValue}`}>
                <span>{stat.primary}</span>
                {stat.suffix ? (
                  <span
                    className={`mt-1 block sm:mt-0 sm:ml-2 sm:inline ${typeStatProofSuffix}`}
                  >
                    {stat.suffix}
                  </span>
                ) : null}
              </p>
              <p className={`mt-3 sm:mt-4 ${typeStatProofLabel}`}>
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
