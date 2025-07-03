"use client";

import classNames from "classnames";
import Image from "next/image";
import { type FC, useState } from "react";
import { tabs, tabContent, type Tab } from "@/data/homepage/perks";
import { SectionContainer } from "../SectionContainer";

const PerksSection: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const currentContent = tabContent[activeTab.title];
  // Hidding this for mobile view for now WIP.
  return (
    <SectionContainer className="hidden lg:block">
      <div className="flex flex-col gap-4">
        <h3 className="font-nokaTrial text-3xl font-bold text-brightYellow">
          Perks and Prizes
        </h3>
        <p className="text-vividOrange lg:text-xl">
          Pitch your solutions for a chance to win amazing prizes and exclusive
          souvenirs!
        </p>
      </div>
      <div className="mt-8 flex w-full flex-col lg:flex-row">
        {/* Tabs (Left Side) */}
        <div className="mb-6 flex w-full flex-col gap-3 lg:mb-0 lg:w-1/3">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.title}
                className={classNames(
                  "flex w-full items-center rounded-lg px-4 py-3 text-xl font-bold transition-colors duration-300",
                  activeTab === tab
                    ? "bg-spiroDiscoBall text-white"
                    : "bg-maastrichtBlue text-gray-300 hover:bg-gray-600"
                )}
                onClick={() => setActiveTab(tab)}
              >
                <span className="mr-2">
                  <IconComponent />
                </span>
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Content (Right Side) */}
        <div className="ml-5 w-full lg:w-2/3">
          <div className="flex h-full flex-col items-center justify-center rounded-lg bg-spiroDiscoBall p-6">
            <Image
              src={currentContent.imageUrl}
              alt={`${currentContent.title} image`}
              width={120}
              height={120}
              className="mb-4"
            />
            <h3 className="mb-2 text-xl font-semibold text-black">
              {currentContent.title}
            </h3>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PerksSection;
