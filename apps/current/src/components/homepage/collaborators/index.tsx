import { motion } from "framer-motion";
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
      {/* Top decorative */}
      <div className="flex justify-center">
        <div className="flex rotate-180 flex-col items-center">
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="h-16 w-px origin-top bg-white"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="size-3 rounded-full bg-white"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h2 className="font-nokaTrial text-[28px] font-semibold text-white max-md:text-center lg:text-4xl">
              {title}
            </h2>

            <p className="text-justify font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
              {description}
            </p>

            <ul className="list-disc space-y-4 pl-6">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-justify font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg"
                >
                  <strong className="text-white">{point.title}</strong>{" "}
                  {point.description}{" "}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="hidden lg:block">
              <div className="relative inset-y-6 h-48 w-px -translate-x-4 bg-[#363636]"></div>
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

      {/* Bottom decorative */}
      <div className="flex justify-center">
        <div className="flex rotate-180 flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
            className="size-3 rounded-full bg-white"
          />
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="h-16 w-px origin-bottom bg-white"
          />
        </div>
      </div>
    </SectionContainer>
  );
};
