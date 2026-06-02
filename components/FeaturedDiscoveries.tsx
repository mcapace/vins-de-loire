import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import SilhouettePlate from "@/components/SilhouettePlate";
import { featuredCards } from "@/lib/featured";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";
import {
  typeButton,
  typeDisplayLight,
  typeEyebrowLight,
} from "@/lib/typography";
import Link from "next/link";

export default function FeaturedDiscoveries() {
  return (
    <section
      id="featured"
      className={`relative overflow-hidden bg-white text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="featured-heading"
    >
      <SectionContainer>
        <Reveal>
          <p className={typeEyebrowLight}>Discover the Loire</p>
          <h2
            id="featured-heading"
            className={`${typeDisplayLight} ${spaceEyebrowToHeadline}`}
          >
            Where every mile tells a story
          </h2>
          <p
            className={`max-w-3xl font-sans text-lg font-light leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
          >
            Start with the river that shaped two millennia of savoir-faire, the
            grapes that define the shelf, and the territories from the Atlantic
            to the volcanic heart of France.
          </p>
        </Reveal>

        <ul className="mt-12 grid min-w-0 grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-3 lg:gap-7">
          {featuredCards.map((card, index) => (
            <Reveal key={card.id} as="li" delay={index} className="min-w-0">
              <article
                className={`group relative min-h-[26rem] overflow-hidden sm:min-h-[28rem] ${
                  index === 1 ? "lg:-mt-6 lg:min-h-[32rem]" : ""
                }`}
              >
                <SilhouettePlate
                  src={card.image}
                  alt={card.imageAlt}
                  variant="fade-bottom"
                  tone="dark"
                  wrapperClassName="absolute inset-0"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-loire-blue-deep via-loire-blue-deep/55 to-loire-blue-deep/10"
                  aria-hidden
                />

                <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end p-7 sm:p-8">
                  <p className="font-sans text-[11px] font-normal uppercase tracking-[0.28em] text-loire-accent-gold">
                    {card.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-white sm:text-[1.75rem]">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-white/85 sm:text-base">
                    {card.excerpt}
                  </p>
                  <Link
                    href={card.href}
                    className={`mt-6 inline-flex items-center gap-2 ${typeButton} text-white/90 transition-colors hover:text-white`}
                  >
                    Read more
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
