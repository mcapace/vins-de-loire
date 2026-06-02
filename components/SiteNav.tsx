"use client";

import CoBrandLockup from "@/components/CoBrandLockup";
import SponsorBar from "@/components/SponsorBar";
import Link from "next/link";
import { typeButton, typeNavLink } from "@/lib/typography";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Know", href: "#manifesto" },
  { label: "Wines", href: "#grapes" },
  { label: "Region", href: "#region" },
  { label: "Ratings", href: "#ratings" },
] as const;

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <SponsorBar />

      <div
        className={`transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-loire-blue-deep/95 shadow-lg backdrop-blur-md"
            : "border-b border-white/5 bg-loire-blue-deep/40 backdrop-blur-sm"
        }`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-12 focus:z-[60] focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:text-loire-blue-deep"
        >
          Skip to content
        </a>

        <div className="mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:gap-4 sm:px-8 lg:px-12">
          <Link href="#" className="shrink-0" aria-label="Vins de Loire home">
            <CoBrandLockup variant="on-dark" size="sm" />
          </Link>

          <nav
            className="hidden items-center gap-0.5 md:flex lg:gap-1"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-sm px-3 py-2 ${typeNavLink} text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#trade-portal"
            className={`inline-flex min-h-10 shrink-0 items-center justify-center rounded-sm bg-white px-4 py-2 ${typeButton} text-loire-blue transition-colors hover:bg-loire-blue-faint sm:px-5`}
          >
            Plan your visit
          </a>
        </div>
      </div>
    </header>
  );
}
