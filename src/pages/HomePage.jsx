import Hero from "../components/Hero/Hero";
import Concept from "../components/Concept/Concept";
import ProblemSection from "../components/sections/ProblemSection";
import WhatSahbiSection from "../components/sections/WhatSahbiSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import SafetyTrustSection from "../components/sections/SafetyTrustSection";
import EmotionalBrandSection from "../components/sections/EmotionalBrandSection";
import Pricing from "../components/Pricing/Pricing";
import Waitlist from "../components/Waitlist/Waitlist";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Concept />
        <ProblemSection />
        <WhatSahbiSection />
        <HowItWorksSection />
        <SafetyTrustSection />
        <EmotionalBrandSection />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
