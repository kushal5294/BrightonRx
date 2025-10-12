import { Footer } from "../components/elements/Footer";
import { Navbar } from "../components/elements/Navbar";
import { AboutUs } from "../components/sections/AboutUs";
import { Brands } from "../components/sections/Brands";
import { CTA } from "../components/sections/CallToAction";
import { Hero } from "../components/sections/Hero";
import { Pricing } from "../components/sections/Pricing";
import { Services } from "../components/sections/Services";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="h-16" />

      <Services />
      <div className="h-16" />

      <AboutUs />
      <div className="h-16" />

      <Pricing />
      <div className="h-16" />

      <CTA />
      <Footer />
    </>
  );
};
