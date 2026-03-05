import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import Concept from "../components/Concept/Concept";
import Pricing from "../components/Pricing/Pricing";
import Features from "../components/Features/Features";
import Countdown from "../components/Countdown/Countdown";
import ImageSlides from "../components/ImageSlides/ImageSlides";
import Waitlist from "../components/Waitlist/Waitlist";
import FAQ from "../components/FAQ/FAQ";
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <ImageSlides />
        <Concept />
        <Pricing />
        <Features />
        <Waitlist />
        <FAQ />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}
