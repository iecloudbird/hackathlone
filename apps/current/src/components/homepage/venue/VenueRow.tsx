import { motion } from "framer-motion";
import Image from "next/image";
import { type FC } from "react";

interface VenueProps {
  content: {
    description?: string;
    resources?: {
      title: string;
      items: string[];
      footer: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
  layout: "text-left" | "text-right";
  isFirstRow?: boolean;
  eventVenue?: string;
  title?: string;
}

export const Venue: FC<VenueProps> = ({
  content,
  image,
  layout,
  isFirstRow = false,
  eventVenue,
  title,
}) => {
  const ImageComponent = (
    <div className="flex justify-center lg:justify-start">
      <div className="relative overflow-hidden rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="h-auto w-full object-cover lg:min-w-[600px]"
          />
        </div>
      </div>
    </div>
  );

  const TextComponent = (
    <div className="space-y-6 text-left">
      {isFirstRow && eventVenue && title && (
        <>
          <motion.h5
            className="font-hackathoneCabinetGrotesk text-lg font-semibold text-brightYellow lg:text-xl"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {eventVenue}
          </motion.h5>

          <motion.h2
            className="max-w-md font-nokaTrial text-[28px] font-bold text-white max-md:text-center lg:text-4xl"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {title}
          </motion.h2>
        </>
      )}

      {content.description && (
        <p className="text-justify font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
          {content.description}
        </p>
      )}

      {content.resources && (
        <div className="space-y-3">
          <p className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
            {content.resources.title}
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {content.resources.items.map((item, index) => (
              <li
                key={index}
                className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
            {content.resources.footer}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
      {layout === "text-left" ? (
        <>
          {TextComponent}
          {ImageComponent}
        </>
      ) : (
        <>
          {ImageComponent}
          {TextComponent}
        </>
      )}
    </div>
  );
};
