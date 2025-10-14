import { Helmet } from "react-helmet-async";
import { Banner } from "../components/elements/Banner";
import { FullAboutUs } from "../components/sections/FullAboutUs";

export const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Brighton Rx</title>
        <meta
          name="description"
          content="Learn more about Brighton Rx, our history, and our commitment to providing the best pharmacy services in Brighton, Michigan."
        />
      </Helmet>
      <Banner text="About Us" />
      <FullAboutUs />
    </>
  );
};