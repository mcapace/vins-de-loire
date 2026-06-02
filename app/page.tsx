import Hero from "@/components/Hero";
import TradePortalHub from "@/components/TradePortalHub";
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
    <main className="min-w-0 overflow-x-hidden">
      <Hero />
      <TradePortalHub />
      <Manifesto />
      <GrapesStyles />
      <RegionStats />
      <Territories />
      <WineGrid />
      <Sustainability />
      <EducationCTA />
      <Footer />
    </main>
  );
}
