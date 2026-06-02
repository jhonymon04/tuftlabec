import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import BackgroundGlow from "@/components/background-glow";
import CursorGlow from "@/components/cursor-glow";
import SmoothScroll from "@/components/smooth-scroll";

import Hero from "@/sections/hero";
import Categories from "@/sections/categories";
import DesignerCTA from "@/sections/designer-cta";
import Showcase from "@/sections/showcase";
import Faq from "@/sections/faq";
import HowItWorks from "@/sections/how-it-works";
import DesignerPreview from "@/sections/designer-preview";
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="relative text-zinc-900 overflow-hidden">

      <ScrollProgress />      
      <SmoothScroll />
      <CursorGlow />
      <BackgroundGlow />
      <Navbar />
      <Hero />
      <Showcase />      
      <HowItWorks />
      <Faq />      
      <Footer />

    </main>
  );
}