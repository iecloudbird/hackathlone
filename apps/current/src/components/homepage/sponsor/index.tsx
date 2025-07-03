import { sponsorsList } from "@/data/homepage/sponsor";
import { SponsorGrid } from "./grid";

export const SponsorSection = () => {
  return (
    <section className="mx-auto mt-[10%] flex w-full flex-col items-center justify-center text-center">
      <div className="flex flex-col gap-4">
        <h3 className="font-nokaTrial text-3xl font-bold text-brightYellow">
          Sponsors
        </h3>
        <p className="max-w-xl text-xl text-vividOrange">
          Who makes this event possible? Our sponsors!
        </p>
      </div>
      <div className="mt-12 flex w-full flex-col items-center justify-center">
        <SponsorGrid items={sponsorsList} />
      </div>
    </section>
  );
};
