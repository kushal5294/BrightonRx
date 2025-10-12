import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { phone, fax, email, address } from "../../utils/constants";

export const ContactInfo = () => {
  return (
    <section id="contact-info" className="py-4 md:py-12 -mt-8">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left side - Title and content */}
        <div className="w-full flex flex-col justify-center text-center lg:text-left border border-heading-1 rounded-3xl p-6 md:p-8">
          <p className="text-lg text-gray-600">
            Better medicines, better life.
          </p>
          <Title>Contact Information</Title>
          <Paragraph className="mt-4 max-w-2xl">
            Do not hesitate to get in touch with us. We gladly welcome your
            feedback, inquiries, and suggestions.
          </Paragraph>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
            {/* Address */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:col-span-1 w-full">
              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-primary flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s6-5.373 6-11a6 6 0 1 0-12 0c0 5.627 6 11 6 11z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <div>
                  <p>{address}</p>
                </div>
              </div>

              {/* Phone + Fax */}
              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="w-8 h-8 text-primary flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p>Call: {phone}</p>
                  <p>Fax: {fax}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 col-span-2 md:col-span-1 justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-primary flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <div>
                  <p>{email}</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-[250px] md:h-[280px] md:col-span-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11759.247922109671!2d-83.78533797228832!3d42.53804857227368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88234f8af2baedad%3A0x6e0d996d4397fc78!2s8688%20W%20Grand%20River%20Ave%2C%20Brighton%2C%20MI%2048116!5e0!3m2!1sen!2sus!4v1760290643019!5m2!1sen!2sus"
                className="w-full h-full rounded-2xl"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block w-full h-80 sm:h-96 md:h-full min-h-[400px]">
          <img
            src="https://cdn.sanity.io/images/0vv8moc6/drugtopics/1ada8d1ec0a3eae647595989386d73c2046720a5-5673x3782.jpg"
            className="w-full h-full object-cover rounded-3xl"
            alt="Pharmacist assisting a customer"
          />
        </div>
      </Container>
    </section>
  );
};
