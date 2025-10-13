import { Helmet } from "react-helmet-async";
import { Banner } from "../components/elements/Banner";
import { SpecialPackaging } from "../components/sections/SpecialPackaging";
export const SpecialPackage = () => {
  return (
    <>
      <Helmet>
        <title>Special Packaging - Brighton Rx</title>
        <meta
          name="description"
          content="Learn about our special packaging services to help manage your medications safely and effectively. Ideal for multi-dose regimens."
        />
      </Helmet>
      <Banner text="Special Packaging" />
      <SpecialPackaging />
    </>
  );
};