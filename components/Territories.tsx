import Reveal from "@/components/Reveal";
import Strates from "@/components/Strates";
import SectionContainer from "@/components/SectionContainer";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";

const territories = [
  { name: "Nantais", className: "bg-loire-blue-faint text-loire-blue-deep" },
  { name: "Anjou-Saumur", className: "bg-loire-blue-light text-loire-blue-deep" },
  { name: "Touraine", className: "bg-loire-blue-mid text-white" },
  { name: "Centre-Loire", className: "bg-loire-blue-deep text-white" },
] as const;

export default function Territories() {
  return (
    <section
      className={`bg-loire-accent-cream text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="territories-heading"
    >
      <SectionContainer>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-loire-blue-mid sm:text-sm">
            The territories
          </p>
          <h2
            id="territories-heading"
            className={`max-w-4xl font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl lg:text-5xl ${spaceEyebrowToHeadline}`}
          >
            From the Loire Océanique to the Loire Volcanique
          </h2>
          <p
            className={`max-w-3xl text-lg leading-relaxed text-loire-blue sm:text-xl ${spaceHeadlineToBody}`}
          >
            The Loire vineyards stretch from the Atlantic to the volcanic heart
            of France: from Nantes to Clermont-Ferrand, from oceanic freshness
            to inland depth. Four great territories tell the story: Nantais,
            Anjou-Saumur, Touraine, and Centre-Loire.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative mt-12 overflow-hidden rounded-sm border border-loire-blue-faint sm:mt-14">
            <div className="relative h-48 sm:h-56 lg:h-64">
              <Strates className="absolute inset-0" opacity={0.95} />
              <div className="absolute inset-0 bg-linear-to-r from-loire-accent-sage/30 via-transparent to-loire-blue-deep/40" />
            </div>
            <ul className="relative z-10 grid grid-cols-2 gap-px bg-loire-blue-faint/40 lg:grid-cols-4">
              {territories.map((territory) => (
                <li
                  key={territory.name}
                  className={`px-4 py-6 text-center sm:py-8 ${territory.className}`}
                >
                  <p className="font-display text-lg font-semibold sm:text-xl">
                    {territory.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-loire-blue sm:text-base">
            Stylized journey along the Loire. The official appellation map and
            detailed territory tools are available inside the Trade Portal.
          </p>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
