import { Helmet } from "react-helmet-async";
import { AboutUsComp } from "../components/sections/AboutUs";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Brighton Rx - Your Local Pharmacy</title>
        <meta
          name="description"
          content="Your friendly neighborhood pharmacy in Brighton, Michigan, offering prescription refills, delivery, and personalized health services."
        />
      </Helmet>
      <Hero />
      <div className="h-16" />

      <Services />
      <div className="h-16" />

      <AboutUsComp />
      <div className="h-16" />
    </>
  );
};