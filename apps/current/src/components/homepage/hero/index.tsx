import { RedirectButton } from "@/components/common/shared/RedirectButton";
import { Athlone } from "../const";
import { Marquee } from "./Marquee";
import { RegistrationStatus } from "./Status";

export const HeroSection = () => {
  return (
    <section className="mx-auto mt-16 flex w-full flex-col items-center justify-center text-center">
      {/* <div className="relative flex h-[48.15px] w-fit flex-none grow-0 flex-row items-center justify-center overflow-hidden rounded-[38.5233px] bg-[rgba(219,219,219,0.05)] px-4 backdrop-blur-[10px]">
        <span className="font-nokaTrial relative z-10 flex-none grow-0 text-[16px] font-semibold leading-[24px]">
          It is that time of the year again
        </span>
      </div> */}
      <div className="mb-20 flex w-full flex-col items-center gap-8">
        <h1 className="font-nokaTrial text-5xl font-bold">
          Welcome to Hack{Athlone}25
        </h1>
        <p className="max-w-xl text-xl">
          Support the next generation of innovators and problem-solvers. Your
          sponsorship helps us create an unforgettable experience for
          participants and fosters a community of space enthusiasts.
        </p>
        <div className="flex items-center justify-center gap-6">
          <RedirectButton
            href="https://www.spaceappschallenge.org"
            text="Register now"
          />
          <RegistrationStatus />
        </div>
      </div>
      <Marquee speed={250} />
    </section>
  );
};
