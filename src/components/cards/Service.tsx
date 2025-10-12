import { Paragraph } from "../shared/Paragraph";
import { BtnLink } from "../shared/BtnLink";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonLink: string;
  buttonText: string;
}

export const Service = ({ title, description, icon, buttonLink, buttonText }: ServiceProps) => {
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                    shadow-box-shadow relative overflow-hidden"
    >
      <div className="flex items-center justify-center gap-4 sm:block">
        <div className="hidden sm:block rounded-xl bg-body p-3 text-heading-1 w-max relative flex-shrink-0">
          {icon}
        </div>
        <h2 className="text-lg md:text-xl font-semibold text-heading-2 sm:mt-6 text-center sm:text-left">
          {title}
        </h2>
      </div>
      <div className="mt-4 space-y-4 relative">
        <Paragraph className="hidden sm:block"> {description}</Paragraph>
        <div className="pt-4 text-center sm:text-left">
          <BtnLink href={buttonLink} text={buttonText} />
        </div>
      </div>
    </div>
  );
};
