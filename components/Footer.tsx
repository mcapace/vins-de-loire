import Image from "next/image";
import SectionContainer from "@/components/SectionContainer";
import { sectionPaddingCompact } from "@/lib/section";

const VINS_DE_LOIRE_LOGO =
  "/logos/Logo-Vins-de-Loire-Bleu/Logo-Vins-de-Loire-BLEU.png";

const footerLinks = [
  { label: "Loire Wines", href: "#" },
  { label: "Wine Spectator", href: "#" },
  { label: "Trade Portal", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-loire-blue-pale/20 bg-loire-blue-deep text-loire-blue-faint ${sectionPaddingCompact}`}
    >
      <SectionContainer>
        <div className="flex min-w-0 flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          <Image
            src={VINS_DE_LOIRE_LOGO}
            alt="Vins de Loire logo in brand blue"
            width={240}
            height={80}
            className="h-auto w-44 sm:w-52"
          />

          <p
            className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl"
            aria-label="Wine Spectator"
          >
            Wine Spectator
          </p>
        </div>

        <p className="mt-10 max-w-3xl text-center text-sm leading-relaxed text-loire-blue-pale sm:mt-12 sm:text-left sm:text-base">
          Sponsored content presented by Vins de Loire
          <span className="mt-2 block text-xs uppercase tracking-[0.14em] text-loire-blue-light">
            Legal review pending
          </span>
        </p>

        <nav
          className="mt-10 border-t border-loire-blue-pale/15 pt-10"
          aria-label="Footer"
        >
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:justify-start">
            {footerLinks.map((link) => (
              <li key={link.label}>
                {/* TODO: Replace placeholder href with final URLs */}
                <a
                  href={link.href}
                  className="text-sm font-medium text-loire-blue-pale underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-10 text-center text-xs leading-relaxed text-loire-blue-light sm:mt-12 sm:text-left sm:text-sm">
          © {year} Wine Spectator. All rights reserved.
        </p>
      </SectionContainer>
    </footer>
  );
}
