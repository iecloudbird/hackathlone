"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  slug: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, slug }) => (
  <>
    <div className="flex flex-row justify-between overflow-hidden rounded-lg shadow-lg">
      <div className="">
        <Image src={imageSrc} alt={title} width={400} height={400} />
      </div>
      <div className="flex w-3/6 flex-col justify-around bg-transparent p-4">
        {/* <Image
        src="/assets/images/general/landing-page/hero_icon.png" // Image path relative to `public`
        alt="Hero Icon"
        width={90} // specify the width
        height={90} // specify the height
        // for loading the image faster, usually used for above-the-fold images
      /> */}

        <div className="">
          <h2 className="mb-2 text-2xl font-bold text-hackathone-font-rocket-red">
            {title}
          </h2>
          <p className="mb-4 text-sm text-white">{description}</p>
          <a
            href={`/blogs/${slug}`}
            className="border-transparent bg-transparent py-2 text-white underline underline-offset-2 hover:text-hackathone-font-rocket-red"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  </>
);

export default Card;
