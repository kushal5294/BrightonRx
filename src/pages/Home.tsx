import { AboutUsComp } from "../components/sections/AboutUs";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="h-16" />

      <Services />
      <div className="h-16" />

      <AboutUsComp />
      <div className="h-16" />
    </>
  );
};
