import { Helmet } from "react-helmet-async";
import { Container } from "../components/shared/Container";
import { Paragraph } from "../components/shared/Paragraph";
import { Banner } from "../components/elements/Banner";
import RefillForm from "../components/forms/RefillForm";

export const Refill = () => {
  return (
    <>
      <Helmet>
        <title>Refill Prescription - Brighton Rx</title>
        <meta
          name="description"
          content="Quickly and easily refill your prescription online at Brighton Rx in Brighton, Michigan. Fill out our simple form to have your medication ready for you."
        />
      </Helmet>
      <Banner text="Refill Prescription" />
      <section id="services" className="mb-13 mt-15">
        <Container className="space-y-10 md:space-y-12 -mt-4">
          <div className="text-center mx-auto space-y-4">
            <Paragraph>
              Do not worry about running out of a particular prescription. We
              can gladly refill it for you. Just fill out the form below with
              the required information.
            </Paragraph>
          </div>
        </Container>
      </section>
      <RefillForm />
    </>
  );
};