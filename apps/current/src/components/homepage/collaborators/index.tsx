import { type FC } from "react";
import { type CollaboratorsSectionData } from "@/data/homepage/collaborators";
import { SectionContainer } from "../SectionContainer";
import { CollaboratorCard } from "./CollaboratorCard";

interface CollaboratorsSectionProps {
  collaboratorsData: CollaboratorsSectionData;
}

export const CollaboratorsSection: FC<CollaboratorsSectionProps> = ({
  collaboratorsData,
}) => {
  const { title, description, bulletPoints, collaborators } = collaboratorsData;

  return (
    <SectionContainer>
      {/* Top decorative*/}
      <div className="flex justify-center">
        <div className="flex rotate-180 flex-col items-center">
          <div className="h-16 w-px bg-white"></div>
          <div className="size-3 rounded-full bg-white"></div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              {title}
            </h2>

            <p className="text-gray-300 lg:text-lg">{description}</p>

            <ul className="list-disc space-y-4 pl-6">
              {bulletPoints.map((point, index) => (
                <li key={index} className="text-gray-300 lg:text-lg">
                  <strong className="text-white">{point.title}</strong>{" "}
                  {point.description}{" "}
                  <a
                    href={point.link}
                    className="text-blue-400 underline hover:text-blue-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {point.linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            {/* Vertical divider */}
            <div className="hidden lg:block">
              <div className="relative inset-y-6 h-96 w-px -translate-x-4 bg-[#363636]"></div>
            </div>
            <div className="flex flex-col gap-8">
              {collaborators.map((collaborator, index) => (
                <CollaboratorCard
                  key={collaborator.id}
                  collaborator={collaborator}
                  isLarge={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative*/}
      <div className="flex justify-center">
        <div className="flex rotate-180 flex-col items-center">
          <div className="size-3 rounded-full bg-white"></div>
          <div className="h-16 w-px bg-white"></div>
        </div>
      </div>
    </SectionContainer>
  );
};
