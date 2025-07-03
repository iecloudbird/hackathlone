"use client";

import classNames from "classnames";
import { type FC } from "react";
import { timelineData } from "@/data/homepage/timeline";
import { SectionContainer } from "../SectionContainer";

export const TimelineSection: FC = () => {
  return (
    <SectionContainer>
      <div className="flex w-full flex-col gap-4">
        <h3 className="font-nokaTrial text-3xl font-bold text-brightYellow">
          Timeline
        </h3>
        <p className="text-xl text-vividOrange">What you can expect</p>
      </div>
      <div className="mt-8 flex flex-col items-center lg:flex-row lg:items-start lg:justify-center lg:space-x-12">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={classNames(
              "relative z-10 w-full transform rounded-lg bg-vividOrange p-6 shadow-lg transition-all duration-300 hover:scale-105 lg:w-1/3",
              index === 0 ? "mt-0" : "mt-4 lg:mt-0"
            )}
          >
            <div className="flex items-center justify-center lg:justify-start">
              <div className="mr-4">
                <Rocket className="size-12 text-white" />{" "}
                {/* Replace with Icons please, I can't find suitable ones :((())) */}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.day}</h3>
                <p className="mt-2 text-sm">{item.title}</p>
                <a
                  href="#"
                  className="mt-2 inline-block text-sm text-blue-300 hover:text-blue-400"
                >
                  {item.description}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

const Rocket: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);
