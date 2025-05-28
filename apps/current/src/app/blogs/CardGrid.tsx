"use client";
import React from "react";
import { cards } from "./blogs.dto";
import Card from "./Card";
import CardM from "./CardM";

const CardGrid: React.FC = () => {
  return (
    <>
      <div className="p-4">
        <div className="m-4 mx-auto hidden max-w-6xl md:block">
          <h1 className="p-4 text-3xl font-bold text-hackathone-font-rocket-red">
            Blogs
          </h1>
          <div className="flex flex-col gap-6">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>

        <div className="m-16 mx-auto flex max-w-6xl flex-col lg:hidden">
          <h1 className="p-4 text-3xl font-bold text-hackathone-font-rocket-red">
            Blogs
          </h1>
          <div className="flex flex-col gap-6">
            {cards.map((card, index) => (
              <CardM key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardGrid;
