import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Heritage from "@/components/sections/Heritage";
import HumidorCollection from "@/components/sections/HumidorCollection";
import LoungeAmbiance from "@/components/sections/LoungeAmbiance";
import AgingMetrics from "@/components/sections/AgingMetrics";
import WhiskeyPairings from "@/components/sections/WhiskeyPairings";
import MasterBlender from "@/components/sections/MasterBlender";
import FullLoungeImage from "@/components/sections/FullLoungeImage";
import MembersCounters from "@/components/sections/MembersCounters";
import GentlemansJournal from "@/components/sections/GentlemansJournal";
import DressCode from "@/components/sections/DressCode";
import Endorsements from "@/components/sections/Endorsements";
import MembershipCTA from "@/components/sections/MembershipCTA";
import SmokeBackground from "@/components/SmokeBackground";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <SmokeBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Heritage />
        <HumidorCollection />
        <LoungeAmbiance />
        <AgingMetrics />
        <WhiskeyPairings />
        <MasterBlender />
        <FullLoungeImage />
        <MembersCounters />
        <GentlemansJournal />
        <DressCode />
        <Endorsements />
        <MembershipCTA />
      </main>
    </div>
  );
};

export default Index;
