import { Helmet } from "react-helmet-async";
import { Banner } from "../components/elements/Banner";
import { FullServices } from "../components/sections/FullServices";

export const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Brighton Rx Pharmacy</title>
        <meta
          name="description"
          content="Explore the wide range of pharmacy services offered at Brighton Rx in Brighton, Michigan, including prescription refills, delivery, consultations, and more."
        />
      </Helmet>
      <Banner text="Services" />
      <FullServices />
    </>
  );
};
