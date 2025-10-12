import { services } from "../../utils/full-services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const FullServices = () => {
  return (
    <section id="services" className="mb-13 mt-15">
      {" "}
      <Container className="space-y-10 md:space-y-12 -mt-4">
        <div className="text-center  mx-auto space-y-4">
          <Title>
            {" "}
            Our services are designed to enhance your quality of life.
          </Title>
          <Paragraph>
            At Brighton Rx Pharmacy, we are dedicated to improving the health of
            the Brighton, Michigan community. Through personalized services,
            affordable products, and a compassionate staff, we provide the
            support you need to enhance your health and wellness.
          </Paragraph>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
              buttonLink={service.buttonLink}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
