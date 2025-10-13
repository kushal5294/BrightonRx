import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { phone } from "../../utils/constants";
import { Link } from "react-router-dom";
import { darkBlue } from "../../utils/constants";

export const SpecialPackaging = () => {
  return (
    <section id="services" className="mb-13 mt-15">
      <Container className="space-y-10 md:space-y-12 -mt-4">
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="w-full lg:w-2/3 flex flex-col space-y-6 text-center md:text-left">
            <Title> We help you improve your medication adherence. </Title>

            <div className="space-y-4">
              <Paragraph>
                When you are a senior or someone with a medical condition,
                taking multiple medications becomes a part of life. You need a
                variety of medicines to keep your body functioning. However, it
                comes as no surprise that every now and then, you forget to take
                your medicine at the right time. As a solution to this problem,{" "}
                <span style={{ color: darkBlue }} className="font-bold">
                  Brighton Rx Pharmacy
                </span>{" "}
                offers special packaging.
              </Paragraph>

              <Paragraph>
                We can provide up to a month’s worth of prescriptions. We can
                group your medicines according to the time when each medicine
                must be taken during the day. This can be beneficial to those
                who often forget if they had already taken a particular medicine
                already. Our special packaging service is just one of the many
                ways we can help you improve your health and overall quality of
                life.
              </Paragraph>

              <Paragraph>
                Should you have inquiries about this service, you may call us at{" "}
                <a
                  style={{ color: darkBlue }}
                  className="font-semibold hover:underline"
                  href={`tel:${phone}`}
                >
                  <strong>{phone}</strong>
                </a>{" "}
                or{" "}
                <Link
                  to="/contact-us"
                  style={{ color: darkBlue }}
                  className="font-semibold hover:underline"
                >
                  send us a message
                </Link>{" "}
                online.
              </Paragraph>
            </div>
          </div>
          <div className="w-full lg:w-1/3 hidden lg:block">
            <img
              src="https://media.istockphoto.com/id/1419247828/photo/happy-black-female-pharmacist-assisting-senior-couple-in-choosing-medicine-in-a-pharmacy.jpg?s=612x612&w=0&k=20&c=WMrhlqrUnFXlY-t3WCkE9ZBPZMQmKK6H1niUV2r5e0c="
              alt="Pharmacist assisting senior couple"
              className="w-full h-full object-cover rounded-2xl shadow-lg object-[-80px_center]"
              // adjust the var above.
            />
          </div>
        </Container>
      </Container>
    </section>
  );
};
