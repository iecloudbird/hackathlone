import Image from "next/image";
import { type FC } from "react";
import { type Collaborator } from "@/data/homepage/collaborators";

interface CollaboratorCardProps {
  collaborator: Collaborator;
  isLarge?: boolean;
}

export const CollaboratorCard: FC<CollaboratorCardProps> = ({
  collaborator,
  isLarge = false,
}) => {
  const handleClick = () => {
    window.open(collaborator.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="flex cursor-pointer items-center justify-center p-4 transition-transform duration-300 hover:scale-110"
      onClick={handleClick}
    >
      <Image
        src={collaborator.logo}
        alt={collaborator.name}
        width={isLarge ? 300 : 150}
        height={isLarge ? 150 : 75}
        className={`h-auto object-contain transition-opacity duration-200 ${
          isLarge ? "w-full max-w-[300px]" : "w-full max-w-[150px]"
        }`}
        priority={false}
      />
    </div>
  );
};
