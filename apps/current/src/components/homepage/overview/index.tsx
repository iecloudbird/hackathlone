import { StatsCard } from "./statsCard"; // adjust path as needed
import { statsList } from "@/components/homepage/overview/statsList";

export const OverviewSection = () => {
  return (
    <section className="mx-auto mt-[10%] flex flex-col items-center justify-center space-y-20 text-center lg:mx-[6%]">
      {/* ... existing content ... */}

      <div className="w-full">
        <StatsCard items={statsList} />
      </div>
    </section>
  );
};
