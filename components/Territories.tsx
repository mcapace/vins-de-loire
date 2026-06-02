"use client";

import MoodyImage from "@/components/MoodyImage";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import { territories } from "@/lib/territories";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";
import { motion, useReducedMotion } from "framer-motion";
import { revealTransition, staggerChildren } from "@/lib/motion";

export default function Territories() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="territories"
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
            className={`max-w-3xl text-lg leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
          >
            The Loire vineyards stretch from the Atlantic to the volcanic heart
            of France: from Nantes to Clermont-Ferrand, from oceanic freshness
            to inland depth. Four great territories tell the story.
          </p>
        </Reveal>

        <motion.ul
          className="mt-12 grid min-w-0 grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-8% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: staggerChildren } },
          }}
        >
          {territories.map((territory) => (
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
              className="min-w-0"
            >
              <article className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-loire-blue-faint shadow-md transition-shadow duration-300 hover:shadow-xl">
                <MoodyImage
                  src={territory.image}
                  alt={`${territory.name} vineyards in the Loire Valley`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  overlayClassName="moody-overlay"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-loire-blue-deep/90 via-loire-blue-deep/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {territory.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-loire-blue-pale sm:text-base">
                    {territory.descriptor}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={1}>
          <p className="mt-8 text-sm leading-relaxed text-loire-blue-deep/80 sm:mt-10 sm:text-base">
            Stylized journey along the Loire. The official appellation map and
            detailed territory tools are available inside the Trade Portal.
          </p>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
