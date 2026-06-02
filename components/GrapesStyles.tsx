"use client";

import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import SilhouettePlate from "@/components/SilhouettePlate";
import { grapeCards } from "@/lib/grapes";
import { sectionPadding, spaceEyebrowToHeadline, spaceHeadlineToBody } from "@/lib/section";
import { typeDisplayLight, typeEyebrowLight } from "@/lib/typography";
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
                <SilhouettePlate
                  src={card.image}
                  alt={card.imageAlt}
                  variant="arch"
                  tone="dark"
                  wrapperClassName="absolute inset-0"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-loire-blue-deep/90 via-loire-blue-deep/30 to-transparent"
                  aria-hidden
                />

                <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-white">
                    {card.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/85 sm:text-base">
                    {card.description}
                  </p>
                  <p className="mt-4 font-sans text-[11px] font-normal uppercase tracking-[0.22em] text-loire-accent-gold">
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
