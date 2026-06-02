"use client";

import CoBrandLockup from "@/components/CoBrandLockup";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "The Loire", href: "#manifesto" },
  { label: "Wines", href: "#grapes" },
  { label: "Region", href: "#region" },
  { label: "Ratings", href: "#ratings" },
  { label: "Trade Portal", href: "#trade-portal" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-loire-blue-deep/95 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:text-loire-blue-deep"
      >
        Skip to content
      </a>

      <div className="mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">
        <Link href="#" className="shrink-0" aria-label="Vins de Loire home">
          <CoBrandLockup variant="on-dark" size="sm" />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex lg:gap-2"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:text-[11px] lg:tracking-[0.14em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#trade-portal"
          className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-sm bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-loire-blue transition-colors hover:bg-loire-blue-faint sm:px-5 sm:text-xs"
        >
          Trade Portal
        </a>
      </div>
    </header>
  );
}
