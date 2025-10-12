import { services } from "../../utils/full-services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { phone } from "../../utils/constants";
import { Link } from "react-router-dom";
export const FullServices = () => {
  return (
    <section id="services" className="mb-13 mt-15">
      <Container className="space-y-10 md:space-y-12 -mt-4">
        <div className="text-center mx-auto space-y-4">
          <Title>
            Our services are designed to enhance your quality of life.
          </Title>
          <Paragraph>
            At Brighton Rx Pharmacy, we are dedicated to improving the health of
            the Brighton, Michigan community. Through personalized services,
            affordable products, and a compassionate staff, we provide the
            support you need to enhance your health and wellness.
          </Paragraph>
        </div>

        {/* Center last row items */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
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
        <div className="text-center mx-auto space-y-4">
          <Paragraph>
            For further details about our services, you may call us at{" "}
            <strong>{phone}</strong> or{" "}
            <Link to="/contact-us">
              <strong>send us a message</strong>
            </Link>{" "}
            online.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};
