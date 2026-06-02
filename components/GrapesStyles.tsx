"use client";

import MoodyImage from "@/components/MoodyImage";
import Reveal from "@/components/Reveal";
import Strates from "@/components/Strates";
import SectionContainer from "@/components/SectionContainer";
import { grapeCards } from "@/lib/grapes";
import { sectionPadding, spaceEyebrowToHeadline, spaceHeadlineToBody } from "@/lib/section";
import { motion, useReducedMotion } from "framer-motion";
import { revealTransition, staggerChildren } from "@/lib/motion";

export default function GrapesStyles() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={`bg-white text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="grapes-heading"
    >
      <SectionContainer>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-loire-blue-mid sm:text-sm">
            Know the wines
          </p>
          <h2
            id="grapes-heading"
            className={`font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl lg:text-5xl ${spaceEyebrowToHeadline}`}
          >
            Six expressions of one river
          </h2>
          <p
            className={`max-w-3xl text-lg leading-relaxed text-loire-blue sm:text-xl ${spaceHeadlineToBody}`}
          >
            Thirty-three grape varieties thrive across the Loire vineyards.
            These six define the identity trade professionals meet most often
            on the shelf and on the list.
          </p>
        </Reveal>

        <motion.ul
          className="mt-12 grid min-w-0 grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-8% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: staggerChildren } },
          }}
        >
          {grapeCards.map((card) => (
            <motion.li
              key={card.name}
              variants={
                reduceMotion
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: revealTransition,
                      },
                    }
              }
              className="flex min-w-0"
            >
              <article className="flex h-full min-w-0 flex-col overflow-hidden border border-loire-blue-faint bg-loire-accent-cream/30 transition-[border-color,box-shadow] duration-200 hover:border-loire-blue-light hover:shadow-lg">
                <div className="relative aspect-[4/3] w-full">
                  <MoodyImage
                    src={card.image}
                    alt={`${card.name} vineyards in the Loire Valley`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                  <div className="absolute -top-3 right-4 h-6 w-24 overflow-hidden rounded-sm opacity-60">
                    <Strates className="h-full w-full" opacity={0.9} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-loire-blue-deep">
                    {card.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-loire-blue sm:text-base">
                    {card.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-loire-blue-mid">
                    Heartland:{" "}
                    <span className="font-normal normal-case tracking-normal text-loire-blue">
                      {card.heartland}
                    </span>
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
