import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface ContactCardProps {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  href,
  image,
}) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="relative flex h-full flex-col gap-0 rounded-lg border border-hackathone-font-rocket-red">
        <h2 className="m-6 text-center text-2xl font-bold">{title}</h2>
        <p className="m-8 grow text-center text-lg">{description}</p>
        <Image
          src={image}
          alt={`${title} illustration`}
          width={100}
          height={100}
          className="ml-4 h-40 w-full object-contain object-left"
        />
      </div>
      <Link
        href={href}
        className="inline-block rounded-lg bg-hackathone-font-rocket-red p-4 text-center font-bold text-black transition-all hover:bg-hackathone-font-rocket-red/80"
      >
        Connect Now
      </Link>
    </div>
  );
};

export default ContactCard;
