import MoodyImage from "@/components/MoodyImage";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
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
      className={`bg-white text-loire-blue-deep ${sectionPadding}`}
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

        <ul className="mt-12 grid min-w-0 grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-3 lg:gap-8">
          {featuredCards.map((card, index) => (
            <Reveal key={card.id} as="li" delay={index} className="min-w-0">
              <article className="group flex h-full min-w-0 flex-col overflow-hidden border border-loire-blue-faint bg-loire-accent-cream/20 transition-[border-color,box-shadow] duration-300 hover:border-loire-blue-light hover:shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <MoodyImage
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    overlayClassName="moody-overlay"
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <p className="absolute left-4 top-4 rounded-sm bg-loire-blue-deep/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {card.category}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-loire-blue-deep">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-loire-blue-deep/85 sm:text-base">
                    {card.excerpt}
                  </p>
                  <Link
                    href={card.href}
                    className={`mt-6 inline-flex items-center gap-2 ${typeButton} text-loire-blue transition-colors hover:text-loire-blue-deep`}
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
