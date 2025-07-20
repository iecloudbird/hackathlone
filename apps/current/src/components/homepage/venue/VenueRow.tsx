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
          <h5 className="text-lg font-semibold text-brightYellow lg:text-xl">
            {eventVenue}
          </h5>
          <h2 className="max-w-md text-3xl font-bold text-white lg:text-4xl">
            {title}
          </h2>
        </>
      )}

      {content.description && (
        <p className="text-gray-300 lg:text-lg">{content.description}</p>
      )}

      {content.resources && (
        <div className="space-y-3">
          <p className="text-gray-300 lg:text-lg">{content.resources.title}</p>
          <ul className="list-disc space-y-2 pl-6">
            {content.resources.items.map((item, index) => (
              <li key={index} className="text-gray-300 lg:text-lg">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-300 lg:text-lg">{content.resources.footer}</p>
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
