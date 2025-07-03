import Image from "next/image";
import { type FC } from "react";
import Rocket from "@/components/homepage/overview/rocket.png"; // add your image to assets

type StatItem = {
  label: string;
  value: string;
};

export const StatsCard: FC<{ items: StatItem[] }> = ({ items }) => {
  return (
    <div className="relative w-full space-y-10 rounded-lg bg-[#0b1c3a] px-6 py-16 text-center font-bold text-orange-400">
      {/* Rocket Image */}
      <div className="-mt-20 flex justify-center">
        <Image src={Rocket} alt="Rocket" width={80} height={80} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {items.map((item, idx) => (
          <div key={idx} className="border-t border-orange-400 pt-4 text-2xl">
            <span className="text-4xl">{item.value}</span> {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
