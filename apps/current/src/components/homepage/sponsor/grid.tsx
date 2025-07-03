import classNames from "classnames";
import Image from "next/image";
import { type FC } from "react";
import { type Sponsor } from "@/data/homepage/sponsor";

interface GridProps {
  items: Sponsor[];
}

export const SponsorGrid: FC<GridProps> = ({ items }) => {
  const rowConfigs = [
    { count: 3, gapClass: "justify-evenly items-center" },
    { count: 2, gapClass: "justify-evenly" },
    { count: 3, gapClass: "justify-evenly" },
  ];

  const renderSponsor = (item: Sponsor | null, index: number) => (
    <div key={index} className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        {item?.imageUrl ? (
          <a href={item.canonicalUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={160}
              height={120}
              className="object-cover"
            />
          </a>
        ) : (
          <div className="flex size-full items-center justify-center bg-gray-500" />
        )}
      </div>
      <p className="mt-2 text-center">{item?.role ? item.role : ""}</p>
    </div>
  );

  return (
    <div className="flex w-full flex-col gap-4">
      {rowConfigs.map((config, rowIndex) => {
        // calculate the starting index and number of items for this row
        const startIndex = rowConfigs
          .slice(0, rowIndex)
          .reduce((sum, c) => sum + c.count, 0);
        const endIndex = startIndex + config.count;
        // Get items for this row
        const rowItems = items.slice(startIndex, endIndex).filter(Boolean);
        // Skip empty rows
        if (rowItems.length === 0 && startIndex >= items.length) return null;

        return (
          <div
            key={rowIndex}
            className={classNames("my-4 flex", config.gapClass)}
          >
            {Array.from({ length: config.count }).map((_, colIndex) => {
              const itemIndex = startIndex + colIndex;
              const item = itemIndex < items.length ? items[itemIndex] : null;
              return renderSponsor(item, itemIndex);
            })}
          </div>
        );
      })}
    </div>
  );
};
