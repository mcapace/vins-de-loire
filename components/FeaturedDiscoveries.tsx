import PhotoFill from "@/components/PhotoFill";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import { featuredCards } from "@/lib/featured";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";
import {
  typeDisplayLight,
  typeEyebrowLight,
  typePhotoCardBody,
  typePhotoCardEyebrow,
  typePhotoCardLink,
  typePhotoCardTitle,
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
                <PhotoFill
                  src={card.image}
                  alt={card.imageAlt}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  imageClassName="motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
                />

                <div className="photo-card-scrim" aria-hidden />

                <div className="photo-card-text">
                  <p className={`photo-card-eyebrow ${typePhotoCardEyebrow}`}>
                    {card.category}
                  </p>
                  <h3 className={`mt-3 ${typePhotoCardTitle}`}>{card.title}</h3>
                  <p className={`mt-3 max-w-[28ch] ${typePhotoCardBody}`}>
                    {card.excerpt}
                  </p>
                  <Link
                    href={card.href}
                    className={`mt-6 inline-flex items-center gap-2 ${typePhotoCardLink} transition-colors hover:text-loire-accent-gold`}
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
