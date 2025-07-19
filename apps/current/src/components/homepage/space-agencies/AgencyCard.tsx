import Image from "next/image";
import { type FC } from "react";
import { type SpaceAgency } from "@/data/homepage/space-agencies";

interface AgencyCardProps {
  agency: SpaceAgency;
}

export const AgencyCard: FC<AgencyCardProps> = ({ agency }) => {
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
        className="h-auto w-full max-w-[80px] object-contain transition-opacity duration-200"
        priority={false}
      />
    </div>
  );
};
