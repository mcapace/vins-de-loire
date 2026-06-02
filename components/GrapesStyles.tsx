"use client";

import PhotoFill from "@/components/PhotoFill";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import { grapeCards } from "@/lib/grapes";
import { sectionPadding, spaceEyebrowToHeadline, spaceHeadlineToBody } from "@/lib/section";
import {
  typeDisplayLight,
  typeEyebrowLight,
  typePhotoCardBody,
  typePhotoCardEyebrow,
  typePhotoCardTitle,
} from "@/lib/typography";
import { motion, useReducedMotion } from "framer-motion";
import { revealTransition, staggerChildren } from "@/lib/motion";

export default function GrapesStyles() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="grapes"
      className={`relative overflow-hidden bg-loire-accent-cream/40 text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="grapes-heading"
    >
      <SectionContainer>
        <Reveal>
          <p className={typeEyebrowLight}>Know the wines</p>
          <h2
            id="grapes-heading"
            className={`${typeDisplayLight} ${spaceEyebrowToHeadline}`}
          >
            Six expressions of one river
          </h2>
          <p
            className={`max-w-3xl font-sans text-lg font-light leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
          >
            Thirty-three grape varieties thrive across the Loire vineyards.
            These six define the identity trade professionals meet most often
            on the shelf and on the list.
          </p>
        </Reveal>

        <motion.ul
          className="mt-12 grid min-w-0 grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-8% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: staggerChildren } },
          }}
        >
          {grapeCards.map((card, index) => (
            <motion.li
              key={card.name}
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
              className={`min-w-0 ${index === 1 || index === 4 ? "lg:mt-6" : ""}`}
            >
              <article className="group relative aspect-[4/5] min-h-[20rem] overflow-hidden">
                <PhotoFill
                  src={card.image}
                  alt={card.imageAlt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  imageClassName="motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.04]"
                />

                <div className="photo-card-scrim" aria-hidden />

                <div className="photo-card-text">
                  <h3 className={typePhotoCardTitle}>{card.name}</h3>
                  <p className={`mt-2 line-clamp-3 ${typePhotoCardBody}`}>
                    {card.description}
                  </p>
                  <p className={`mt-4 ${typePhotoCardEyebrow}`}>
                    {card.heartland}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </SectionContainer>
    </section>
  );
}
