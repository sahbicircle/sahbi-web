import { useRTL } from "./hooks/useRTL";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Concept from "./components/Concept/Concept";
import Pricing from "./components/Pricing/Pricing";
import Features from "./components/Features/Features";
import Waitlist from "./components/Waitlist/Waitlist";
import Privacy from "./components/Privacy/Privacy";
import Footer from "./components/Footer/Footer";

export default function App() {
  useRTL();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Pricing />
        <Features />
        <Waitlist />
        <Privacy />
      </main>
      <Footer />
    </>
  );
}
