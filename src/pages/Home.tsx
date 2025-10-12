import { Footer } from "../components/elements/Footer";
import { Navbar } from "../components/elements/Navbar";
import { AboutUsComp } from "../components/sections/AboutUs";
import { ContactInfo } from "../components/sections/ContactInfo";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="h-16" />

      <Services />
      <div className="h-16" />

      <AboutUsComp />
      <div className="h-16" />
      <ContactInfo />

      <Footer />
    </>
  );
};
