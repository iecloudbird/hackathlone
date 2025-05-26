"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  slug: string;
}

const CardM: React.FC<CardProps> = ({ imageSrc, title, description, slug }) => (
  <>
    <div className="flex flex-col items-center overflow-hidden rounded-lg shadow-lg">
      <div className="">
        <Image src={imageSrc} alt={title} />
      </div>
      <div className="flex w-full flex-col justify-around bg-transparent p-4">
        <div className="">
          <h2 className="mb-2 text-2xl font-bold text-hackathone-font-rocket-red">
            {title}
          </h2>
          <p className="mb-4 text-sm text-white">{description}</p>
          <a
            href={`/blogs/${slug}`}
            className="rounded border border-white bg-transparent px-4 py-2 text-white hover:text-black"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </>
);

export default CardM;
