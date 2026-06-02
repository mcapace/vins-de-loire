import SectionContainer from "@/components/SectionContainer";
import { sectionPadding } from "@/lib/section";

const buttonPrimary =
  "inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-white px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-loire-blue shadow-sm transition-[background-color,box-shadow] duration-200 hover:bg-loire-blue-faint hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:text-base";

const buttonSecondary =
  "inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-loire-blue-pale/50 px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-loire-blue-pale transition-[border-color,color,background-color] duration-200 hover:border-white hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:text-base";

export default function EducationCTA() {
  return (
    <section
      className={`bg-loire-blue text-white ${sectionPadding}`}
      aria-labelledby="education-cta-heading"
    >
      <SectionContainer>
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-loire-blue-pale sm:text-sm">
            Trade resources
          </p>

          <h2
            id="education-cta-heading"
            className="mt-5 font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            Explore, learn, and connect
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-loire-blue-faint sm:mt-8 sm:text-xl sm:leading-relaxed">
            Complimentary registration for trade members unlocks essential tools
            and insights, including the official appellation map, current market
            data and key selling points, and in-depth resources on wine ratings,
            appellations, producers, and opportunities to meet at upcoming
            tastings and events.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-5">
            {/* TODO: Replace href with the approved trade signup URL */}
            <a href="#" className={buttonPrimary}>
              Join the Loire Trade Network
            </a>

            {/* TODO: Replace href with the approved educational asset URL (PDF or landing page) */}
            <a href="#" className={buttonSecondary}>
              Download educational material
            </a>
          </div>

          <p className="mt-10 text-base leading-relaxed text-loire-blue-pale sm:mt-12 sm:text-lg">
            Your Loire wines journey starts here.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
