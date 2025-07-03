import Image from "next/image";
import { type FC } from "react";

interface RegistrationStatusProps {
  items?: AvatarItem[];
  count?: number | string;
}

interface AvatarItem {
  imageUrl: string;
  name?: string;
}

const placeholderImage = [
  { imageUrl: "https://i.pravatar.cc/48?img=3", name: "Avatar 1" },
  { imageUrl: "https://i.pravatar.cc/48?img=4", name: "Avatar 2" },
  { imageUrl: "https://i.pravatar.cc/48?img=5", name: "Avatar 3" },
];

export const RegistrationStatus: FC<RegistrationStatusProps> = ({
  items = placeholderImage,
  count = "100+",
}) => {
  const circleSize = 48;
  const overlapPercentage = 0.5;
  const overlapOffset = circleSize * overlapPercentage;
  const totalWidth = circleSize * 3 - overlapOffset * 2;

  const displayItems = items.slice(0, 3);

  return (
    <div className="hidden max-w-[240px] items-center justify-center text-center sm:flex">
      <div
        className="relative flex items-center"
        style={{ width: `${totalWidth}px` }}
      >
        {/* Three overlapping avatars */}
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="absolute overflow-hidden rounded-full border-[3px] border-brightYellow"
            style={{
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              left: `${index * (circleSize - overlapOffset)}px`,
              zIndex: index,
            }}
          >
            {item.imageUrl ? (
              <Image
                src={item.imageUrl}
                alt={item.name || `Avatar ${index + 1}`}
                width={circleSize}
                height={circleSize}
                className="object-cover"
              />
            ) : (
              <div
                className="flex size-full items-center justify-center bg-black"
                style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
              />
            )}
          </div>
        ))}
      </div>
      <p className="ml-8 text-left">
        <span className="font-bold italic text-brightYellow">{count}</span>{" "}
        registered already
      </p>
    </div>
  );
};
