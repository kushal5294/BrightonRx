import { Container } from "../components/shared/Container";
import { Paragraph } from "../components/shared/Paragraph";
import { Banner } from "../components/elements/Banner";
import { darkBlue } from "../utils/constants";
import ConsultForm from "../components/forms/ConsultForm";

export const Consult = () => {
  return (
    <>
      <Banner text="Talk To Our Pharmacist" />
      <section id="services" className="mb-13 mt-15">
        <Container className="space-y-10 md:space-y-12 -mt-4">
          <div className="text-center mx-auto space-y-4">
            <Paragraph>
              It is common to have questions about your medicines and health. If
              you want expert advice regarding your concerns, you can turn to
              our pharmacists at{" "}
              <span style={{ color: darkBlue }} className="font-bold">
                Brighton Rx Pharmacy
              </span>
              . They are readily available to assist you with your medicine and
              health-related issues. Schedule an appointment by filling out the
              form below.
            </Paragraph>
          </div>
        </Container>
      </section>
      <ConsultForm />
    </>
  );
};
