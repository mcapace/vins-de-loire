import PhotoFill from "@/components/PhotoFill";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";
import { siteImages } from "@/lib/site-images";
import {
  typeDisplayLight,
  typeEyebrowLight,
  typeStatCaptionLight,
  typeStatCompact,
} from "@/lib/typography";

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      className={`relative overflow-hidden bg-loire-accent-cream text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="sustainability-heading"
    >
      <PhotoFill
        src={siteImages.sustainability.src}
        alt={siteImages.sustainability.alt}
        sizes="(max-width: 1024px) 0px, 55vw"
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[55%] lg:block"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[55%] bg-gradient-to-l from-loire-accent-cream via-loire-accent-cream/75 to-transparent lg:block"
        aria-hidden
      />

      <SectionContainer className="relative z-10">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative min-h-[20rem] w-full min-w-0 lg:hidden">
            <PhotoFill
              src={siteImages.sustainability.src}
              alt={siteImages.sustainability.alt}
              sizes="100vw"
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-loire-accent-cream via-loire-accent-cream/50 to-transparent"
              aria-hidden
            />
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-6 xl:col-span-5">
            <div className="border-l-4 border-loire-accent-forest pl-6 sm:pl-8">
              <p className={`${typeEyebrowLight} !text-loire-accent-forest`}>
                A shared commitment
              </p>

              <h2
                id="sustainability-heading"
                className={`${typeDisplayLight} sm:text-4xl lg:text-[2.5rem] ${spaceEyebrowToHeadline}`}
              >
                Toward a fully sustainable region
              </h2>

              <p
                className={`font-sans text-lg font-light leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
              >
                The vineyards of Loire are advancing together:{" "}
                <span className="font-medium text-loire-blue-deep">
                  85% of vineyards are already certified organic or
                  environmentally sustainable
                </span>
                , with a collective goal of{" "}
                <span className="font-medium text-loire-accent-forest">
                  100% by 2030
                </span>
                .
              </p>
            </div>

            <div className="mt-10 grid min-w-0 grid-cols-2 gap-4 sm:mt-12 sm:gap-5">
              <div className="editorial-glass-cream rounded-sm px-4 py-6 sm:px-6 sm:py-8">
                <p className={typeStatCompact}>85%</p>
                <p className={`mt-4 ${typeStatCaptionLight}`}>
                  Vineyards certified organic or environmentally sustainable
                  today
                </p>
              </div>

              <div className="editorial-glass-cream rounded-sm border-loire-accent-forest/20 px-4 py-6 sm:px-6 sm:py-8">
                <p className={`${typeStatCompact} text-loire-accent-forest`}>
                  2030
                </p>
                <p className={`mt-4 ${typeStatCaptionLight}`}>
                  Target for 100% certified organic or sustainable vineyards
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
