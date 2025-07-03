import classNames from "classnames";
import Image from "next/image";
import { type FC } from "react";
import Rocket from "@/components/homepage/overview/rocket.png"; // Adjust path as needed

type StatItem = {
  label: string;
  value: string;
};

const largeLabelClass =
  "text-4xl md:text-5xl lg:text-7xl text-brightYellow font-bold";
const largeValueClass =
  "text-4xl md:text-5xl lg:text-8xl text-brightYellow font-bold";

const translateClass = "tranlsate-y-[16px]";

export const StatsCard: FC<{ items: StatItem[] }> = ({ items }) => {
  return (
    <div className="relative w-full rounded-lg bg-[#0b1c3a] text-center lg:text-left">
      <div className="grid grid-cols-1 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-end justify-between border-b border-vividOrange pb-4 lg:pb-8"
          >
            <div className={largeLabelClass}>
              <span className={largeValueClass}>{item.value}</span> {item.label}
            </div>
            {index === 0 && (
              <div className={(classNames("flex justify-end"), translateClass)}>
                <Image
                  src={Rocket}
                  alt="Rocket"
                  width={240}
                  height={320}
                  className={classNames(translateClass, "hidden lg:block")}
                />
                <Image
                  src={Rocket}
                  alt="Rocket"
                  width={120}
                  height={160}
                  className={classNames(translateClass, "block lg:hidden")}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
