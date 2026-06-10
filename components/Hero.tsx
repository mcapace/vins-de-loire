"use client";

import CoBrandLockup from "@/components/CoBrandLockup";
import MoodyImage from "@/components/MoodyImage";
import Strates from "@/components/Strates";
import { typeBodyDark, typeButton, typeHero } from "@/lib/typography";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { externalLinkProps, tradeNetworkUrl } from "@/lib/site";
import { siteImages } from "@/lib/site-images";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen min-h-[100dvh] w-full min-w-0 items-end overflow-hidden pt-[7.25rem] sm:pt-[7.5rem]"
      aria-label="The Wines of a Lifetime"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 h-full w-full motion-safe:animate-ken-burns"
          initial={reduceMotion ? false : { scale: 1.02 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <MoodyImage
            src={siteImages.hero.src}
            alt={siteImages.hero.alt}
            fill
            priority
            sizes="100vw"
            overlayClassName="moody-overlay-strong"
            className="h-full w-full"
          />
        </motion.div>
      </div>

      <div className="hero-scrim pointer-events-none absolute inset-0 z-[1]" aria-hidden />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl px-5 pb-28 sm:px-8 sm:pb-32 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 1, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-left"
        >
          <CoBrandLockup variant="on-dark" size="xl" priority />

          <h1 className={`text-shadow-hero mt-8 ${typeHero}`}>
            The Wines of a Lifetime
          </h1>

          <p className={`mt-6 max-w-xl ${typeBodyDark}`}>
            From the Loire Océanique to the Loire Volcanique, a single river
            carries centuries of savoir-faire. Discover the most diverse wine
            landscape in France, now through the lens of Wine Spectator.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={tradeNetworkUrl}
              {...externalLinkProps}
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-white px-6 py-3 sm:w-auto sm:px-8 ${typeButton} text-loire-blue transition-[background-color,box-shadow] duration-200 hover:bg-loire-blue-faint hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
            >
              Join the Trade Network
            </Link>
            <Link
              href="#grapes"
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-white/50 bg-white/10 px-6 py-3 sm:w-auto sm:px-8 ${typeButton} text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
            >
              Explore the Loire
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-16 sm:h-20">
        <Strates className="h-full w-full" opacity={0.85} />
      </div>
    </section>
  );
}
