import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { darkBlue } from "../../utils/constants";
import { red } from "../../utils/constants";

export const Hero = () => {
  return (
    <section className="relative pt-5 lg:pt-10 -mt-5 lg:mt-4">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Text section */}
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                      lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2 z-10"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold">
            Welcome to
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #f74d4d, #175a81)",
              }}
            >
              Brighton Rx Pharmacy
            </span>
          </h1>

          <Paragraph className="mt-5">
            You need a pharmacy that does more than filling your prescriptions.
            You deserve a pharmacy that looks out for you. At our pharmacy in
            Brighton, Michigan, we operate with your health as our number one
            priority. Browse the rest of our website to learn how we can help
            you.
          </Paragraph>
        </div>

        {/* Image container with continuous teal glow for all screen sizes */}
        <div className="relative flex flex-1 lg:w-1/2 lg:max-w-none mx-auto max-w-3xl overflow-visible">
          {/* Continuous teal glow behind image */}
          <span
            className="absolute inset-0 rounded-3xl blur-[60px] opacity-40"
            style={{
              background: `radial-gradient(
              circle at center,
              ${darkBlue},
              ${red} 40%,
              ${darkBlue} 70%,
              transparent 100%
            )`,
            }}
          ></span>

          {/* Hero Image on top */}
          <img
            src="https://img.freepik.com/premium-photo/pharmacy-medicine-pharmacist-people-stock-check-reading-label-healthcare-inventory-product-shelf-pills-tablet-box-medical-expert-advice-retail-worker-teamwork-help-desk_590464-144097.jpg"
            alt="Pharmacists helping cutomers at Brighton Rx Pharmacy"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none z-20"
          />
        </div>
      </Container>
    </section>
  );
};
