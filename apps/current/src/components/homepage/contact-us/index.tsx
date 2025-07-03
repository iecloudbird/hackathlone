import { type FC } from "react";
import { RedirectButton } from "@/components/common/shared/RedirectButton";
import { SectionContainer } from "../SectionContainer";

export const ContactSection: FC = () => {
  return (
    <SectionContainer>
      {" "}
      <div className="flex flex-col gap-4">
        <h3 className="font-nokaTrial text-2xl font-bold text-brightYellow lg:text-3xl">
          Ready to Make an Impact <span className="font-sans">?</span>
        </h3>
        <p className="text-vividOrange lg:max-w-3xl lg:text-xl">
          Get in touch with us for sponsorship opportunities and tailor a
          package to your needs!
        </p>
      </div>
      <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-start lg:justify-center">
        <RedirectButton text="Contact Us" href="/contact-us"></RedirectButton>
      </div>
    </SectionContainer>
  );
};
