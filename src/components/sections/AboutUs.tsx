import { BtnLink } from "../shared/BtnLink";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const AboutUsComp = () => {
  return (
    <section id="about-us">
      {" "}
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              alt="About Our Mission"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col space-y-4 text-center md:text-left">
          <Title> Mission Statement </Title>
          <Paragraph>
            Our mission is to improve our clients’ overall quality of health and
            wellness by encouraging the proper effective use of medications
            through exceptional products and services.
          </Paragraph>

          <div className="pt-4 md:pt-8 flex justify-center lg:justify-start gap-4">
            <BtnLink href="/about-us" text="About Us" />
            <BtnLink href="/contact-us" text="Contact Us" />
          </div>
        </div>
      </Container>
    </section>
  );
};
