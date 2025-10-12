import { Footer } from "../components/elements/Footer";
import { Navbar } from "../components/elements/Navbar";
import { Banner } from "../components/elements/Banner";
import { ContactInfo } from "../components/sections/ContactInfo";
import { FullServices } from "../components/sections/FullServices";

export const Services = () => {
  return (
    <>
      <Navbar />
      <Banner text="Services" />
      <FullServices />
      <ContactInfo />
      <Footer />
    </>
  );
};
