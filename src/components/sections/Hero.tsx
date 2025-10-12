import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const Hero = () => {
  return (
    <section className="relative pt-5 lg:pt-10 overflow-x-hidden">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12 overflow-x-hidden">
        {/* Background glow spans */}
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 overflow-hidden">
          <span
            className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 
              skew-x-12 rounded-3xl blur-xl opacity-60 lg:opacity-95 lg:block hidden"
            style={{ backgroundColor: "#199ca0" }}
          ></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        {/* Text section */}
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                      lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Welcome to
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #199ca0, #185b81)",
              }}
            >
              Brighton Rx
            </span>
          </h1>

          <Paragraph className="mt-8">
            You need a pharmacy that does more than filling your prescriptions.
            You deserve a pharmacy that looks out for you. At our pharmacy in
            Brighton, Michigan, we operate with your health as our number one
            priority. Browse the rest of our website to learn how we can help
            you.
          </Paragraph>
        </div>

        {/* Image */}
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </Container>
    </section>
  );
};
