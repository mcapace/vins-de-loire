import Hero from "@/components/Hero";
import SiteNav from "@/components/SiteNav";
import ValleyProofStrip from "@/components/ValleyProofStrip";
import FeaturedDiscoveries from "@/components/FeaturedDiscoveries";
import LoirePlanner from "@/components/LoirePlanner";
import Manifesto from "@/components/Manifesto";
import GrapesStyles from "@/components/GrapesStyles";
import RegionStats from "@/components/RegionStats";
import Territories from "@/components/Territories";
import WineGrid from "@/components/WineGrid";
import Sustainability from "@/components/Sustainability";
import EducationCTA from "@/components/EducationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="min-w-0 overflow-x-hidden">
        <Hero />
        <ValleyProofStrip />
        <FeaturedDiscoveries />
        <LoirePlanner />
        <Manifesto />
        <GrapesStyles />
        <RegionStats />
        <Territories />
        <WineGrid />
        <Sustainability />
        <EducationCTA />
        <Footer />
      </main>
    </>
  );
}
