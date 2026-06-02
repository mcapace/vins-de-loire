import Reveal from "@/components/Reveal";
import Strates from "@/components/Strates";
import SectionContainer from "@/components/SectionContainer";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";

const unlocks = [
  "Official appellation map and territory guides",
  "Current market data and key selling points",
  "In-depth resources on ratings, appellations, and producers",
  "Opportunities to connect at tastings and trade events",
] as const;

const buttonPrimary =
  "inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-white px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-loire-blue shadow-sm transition-[background-color,box-shadow] duration-200 hover:bg-loire-blue-faint hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:text-base";

const buttonSecondary =
  "inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-loire-blue-pale/50 px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-loire-blue-pale transition-[border-color,color,background-color] duration-200 hover:border-white hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:text-base";

export default function EducationCTA() {
  return (
    <section
      id="trade-portal"
      className={`relative overflow-hidden bg-loire-blue-deep text-white ${sectionPadding}`}
      aria-labelledby="education-cta-heading"
    >
      <Strates className="absolute inset-0 opacity-20" />
      <SectionContainer className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl lg:mx-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-loire-blue-pale sm:text-sm">
              For the trade
            </p>

            <h2
              id="education-cta-heading"
              className={`font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight ${spaceEyebrowToHeadline}`}
            >
              Your Loire toolkit, in one place
            </h2>

            <p
              className={`text-lg leading-relaxed text-loire-blue-faint sm:text-xl ${spaceHeadlineToBody}`}
            >
              Complimentary registration for trade members unlocks the resources
              you need to sell, teach, and celebrate the Loire with confidence.
            </p>

            <ul className="mt-8 list-inside list-disc space-y-3 text-base leading-relaxed text-loire-blue-pale sm:text-lg">
              {unlocks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
              {/* TODO: Replace href with the approved trade signup URL */}
              <a href="#" className={buttonPrimary}>
                Join the Loire Trade Network
              </a>

              {/* TODO: Replace href with the approved educational guide URL */}
              <a href="#" className={buttonSecondary}>
                Download the educational guide
              </a>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
