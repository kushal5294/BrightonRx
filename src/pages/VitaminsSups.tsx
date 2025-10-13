import { Helmet } from "react-helmet-async";
import { Banner } from "../components/elements/Banner";
import { Vitamins } from "../components/sections/Vitamins";
export const VitaminsAndSupplements = () => {
  return (
    <>
      <Helmet>
        <title>Vitamins & Supplements - Brighton Rx</title>
        <meta
          name="description"
          content="Shop a wide selection of high-quality vitamins and supplements at Brighton Rx to support your health and wellness goals."
        />
      </Helmet>
      <Banner text="Vitamins & Supplements" />
      <Vitamins />
    </>
  );
};