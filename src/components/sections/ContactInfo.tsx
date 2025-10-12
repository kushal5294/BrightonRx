import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const ContactInfo = () => {
  return (
    <section id="contact-info" className="py-4 md:py-12">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left side - Title and content */}
        <div className="w-full flex flex-col justify-center text-center lg:text-left">
          <p className="text-lg text-gray-600">
            Better medicines, better life.
          </p>
          <Title>Contact Information</Title>
          <Paragraph className="mt-4 max-w-2xl">
            Do not hesitate to get in touch with us. We gladly welcome your
            feedback, inquiries, and suggestions.
          </Paragraph>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:col-span-1 w-full">
              <div className="flex items-start gap-4">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <div>
                  <p>11460 E 12 Mile Rd.</p>
                  <p>Warren, Michigan 48093</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
                  />
                </svg>
                <div>
                  <p>Phone: 586-722-2842</p>
                  <p>Fax: 586-279-1215</p>
                </div>
              </div>
              <div className="flex items-start gap-4 col-span-2 md:col-span-1 justify-center md:justify-start">
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
                  <p>11460 E 12 Mile Rd.</p>
                  <p>Warren, Michigan 48093</p>
                </div>
              </div>
            </div>
            <div className="w-full h-[250px] md:h-[280px] md:col-span-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.858947121342!2d-83.024699684549!3d42.48399497917878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d9e31f3130c7%3A0x6e6de5f7f3f7f2e4!2s11460%20E%2012%20Mile%20Rd%2C%20Warren%2C%20MI%2048093%2C%20USA!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.5rem" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
