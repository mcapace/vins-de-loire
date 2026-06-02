"use client";

import MoodyImage from "@/components/MoodyImage";
import Strates from "@/components/Strates";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-47.jpg";

const LOGO_SRC =
  "/logos/Logo-Vins-de-Loire-BLANC/Logo-Vins-de-Loire-BLANC.png";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen min-h-[100dvh] w-full min-w-0 items-center justify-center overflow-hidden"
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
            src={HERO_IMAGE}
            alt="Panoramic Loire Valley vineyards at golden hour, wide landscape view"
            fill
            priority
            sizes="100vw"
            overlayClassName="moody-overlay-strong"
            className="h-full w-full"
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-32 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-sm bg-loire-blue-deep/40 px-4 py-3 backdrop-blur-[2px] sm:px-6"
        >
          <Image
            src={LOGO_SRC}
            alt="Vins de Loire full logo in white on darkened photography"
            width={320}
            height={120}
            priority
            className="h-auto w-44 sm:w-56 md:w-64 lg:w-72"
          />
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-loire-blue-pale sm:text-sm"
        >
          Presented by Wine Spectator
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35 }}
          className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          The Wines of a Lifetime
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-loire-blue-faint sm:text-lg md:text-xl"
        >
          From the Loire Océanique to the Loire Volcanique, a single river
          carries centuries of savoir-faire. Discover the most diverse wine
          landscape in France, now through the lens of Wine Spectator.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10"
        >
          <Link
            href="#trade-portal"
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-loire-blue transition-[background-color,box-shadow] duration-200 hover:bg-loire-blue-faint hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Enter the Trade Portal
          </Link>
        </motion.div>
      </div>

      <a
        href="#manifesto"
        className="absolute bottom-28 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-loire-blue-pale transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:bottom-32"
        aria-label="Begin the journey, scroll to manifesto"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] sm:text-xs">
          Begin the journey
        </span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-loire-blue-pale/60 p-1.5">
          <span className="h-2 w-1 animate-hero-scroll rounded-full bg-loire-blue-pale" />
        </span>
      </a>

      <div className="absolute inset-x-0 bottom-0 z-10 h-16 sm:h-20">
        <Strates className="h-full w-full" opacity={0.85} />
      </div>
    </section>
  );
}
