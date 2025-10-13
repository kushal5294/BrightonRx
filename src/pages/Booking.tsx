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
              Your health is our priority at{" "}
              <span style={{ color: darkBlue }} className="font-bold">
                Brighton Rx Pharmacy
              </span>
              . Please use the form below to request your vaccination
              appointment. After you submit your details, a member of our team
              will contact you to confirm your date and time.
            </Paragraph>
          </div>
        </Container>
      </section>
      <BookingForm />
    </>
  );
};
