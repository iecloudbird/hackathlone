import Image from "next/image";
import { type FC } from "react";
import { type SpaceAgency } from "@/data/homepage/space-agencies";

interface AgencyCardProps {
  agency: SpaceAgency;
  isLast?: boolean;
}

export const AgencyCard: FC<AgencyCardProps> = ({ agency, isLast = false }) => {
  const handleClick = () => {
    window.open(agency.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="flex cursor-pointer items-center justify-center p-3 transition-transform duration-300 hover:scale-110"
      onClick={handleClick}
    >
      <Image
        src={agency.logo}
        alt={agency.name}
        width={80}
        height={80}
        className={`h-auto w-full object-contain transition-opacity duration-200 ${
          isLast ? "max-w-[240px]" : "max-w-[100px]"
        }`}
        priority={false}
      />
    </div>
  );
};
