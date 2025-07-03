import Image from "next/image";
import { type FC } from "react";
import { type motifItem } from "@/data/homepage/brief";

export const BriefCard: FC<{ items: motifItem[] }> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 justify-items-start gap-14 rounded-lg bg-white px-6 py-12">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-start gap-3 text-left"
        >
          <Image
            src={item.iconUrl}
            alt={item.title}
            width={100}
            height={80}
            className="object-cover"
          />
          <div className="mt-8 flex flex-col gap-3">
            <p className="text-xl text-brightYellow">{item.title}</p>
            <p className="text-black">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
