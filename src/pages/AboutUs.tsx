import { Footer } from "../components/elements/Footer";
import { Navbar } from "../components/elements/Navbar";
import { Banner } from "../components/elements/Banner";
import { ContactInfo } from "../components/sections/ContactInfo";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Banner text="About Us" />
      <ContactInfo />
      <Footer />
    </>
  );
};
