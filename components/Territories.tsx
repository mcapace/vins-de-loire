"use client";

import PhotoFill from "@/components/PhotoFill";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import { territories } from "@/lib/territories";
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
  typePhotoCardTitleLg,
} from "@/lib/typography";
import { motion, useReducedMotion } from "framer-motion";
import { revealTransition, staggerChildren } from "@/lib/motion";

export default function Territories() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="territories"
      className={`relative overflow-hidden bg-loire-accent-cream text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="territories-heading"
    >
      <SectionContainer>
        <Reveal>
          <p className={typeEyebrowLight}>The territories</p>
          <h2
            id="territories-heading"
            className={`max-w-4xl ${typeDisplayLight} ${spaceEyebrowToHeadline}`}
          >
            From the Loire Océanique to the Loire Volcanique
          </h2>
          <p
            className={`max-w-3xl font-sans text-lg font-light leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
          >
            The Loire vineyards stretch from the Atlantic to the volcanic heart
            of France: from Nantes to Clermont-Ferrand, from oceanic freshness
            to inland depth. Four great territories tell the story.
          </p>
        </Reveal>

        <motion.ul
          className="mt-12 grid min-w-0 grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-8% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: staggerChildren } },
          }}
        >
          {territories.map((territory, index) => (
            <motion.li
              key={territory.name}
              variants={
                reduceMotion
                  ? undefined
                  : {
                      hidden: { opacity: 1, y: 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: revealTransition,
                      },
                    }
              }
              className={`min-w-0 ${index === 1 || index === 2 ? "lg:mt-8" : ""}`}
            >
              <article className="group relative aspect-[3/4] min-h-[18rem] overflow-hidden">
                <PhotoFill
                  src={territory.image}
                  alt={territory.imageAlt}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  imageClassName="motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.05]"
                />

                <div className="photo-card-scrim" aria-hidden />

                <div className="photo-card-text">
                  <p className={`photo-card-eyebrow ${typePhotoCardEyebrow}`}>
                    Territory
                  </p>
                  <h3 className={`mt-2 ${typePhotoCardTitleLg}`}>
                    {territory.name}
                  </h3>
                  <p className={`mt-2 ${typePhotoCardBody}`}>
                    {territory.descriptor}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={1}>
          <p className="mt-8 text-sm font-light leading-relaxed text-loire-blue-deep/80 sm:mt-10 sm:text-base">
            Stylized journey along the Loire. The official appellation map and
            detailed territory tools are available inside the Trade Portal.
          </p>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
