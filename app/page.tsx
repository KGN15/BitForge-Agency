import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import SpotlightCTA from "@/components/SpotlightCTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <TechStack />
        <Process />
        <SpotlightCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
