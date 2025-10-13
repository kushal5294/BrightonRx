import { Banner } from "../components/elements/Banner";
import { BookingForm } from "../components/forms/BookingForm";
import { Container } from "../components/shared/Container";
import { Paragraph } from "../components/shared/Paragraph";
import { darkBlue } from "../utils/constants";

export const Booking = () => {
  return (
    <>
      <Banner text="Book An Appointment" />
      <section id="services" className="mb-13 mt-15">
        <Container className="space-y-10 md:space-y-12 -mt-4">
          <div className="text-center mx-auto space-y-4">
            <Paragraph>
              <span style={{ color: darkBlue }} className="font-bold">
                Brighton Rx Pharmacy
              </span>{" "}
              cares about you. If you have any questions, concerns, or
              suggestions, we encourage you to send us a message using the form
              provided. One of our representatives will get back to you as soon
              as possible.
            </Paragraph>
          </div>
        </Container>
      </section>
      <BookingForm />
    </>
  );
};
