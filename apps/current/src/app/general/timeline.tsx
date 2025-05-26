"use client";

import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { events } from "./general.dto";

export default function Timeline() {
  const router = useRouter();
  const timelineInfo = useMemo(() => events(router), [router]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && hoveredIndex !== null) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [hoveredIndex]);

  return (
    <section
      id="timeline"
      className="flex flex-col items-center justify-center mx-4 sm:mx-[3.5%] lg:mx-[8.68%] mt-20 mb-32 py-2 text-hackathone-font-rocket-red"
    >
      <div className="text-[30.99px] leading-[34.62px] sm:text-[32.99px] lg:text-4xl font-bold mb-10 font-hackathoneCabinetGrotesk text-center">
        Timeline
      </div>
      <MuiTimeline position="alternate-reverse">
        {timelineInfo.map((event, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <TimelineItem
              key={index}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              onClick={event.route}
              tabIndex={0}
            >
              <TimelineOppositeContent className="hidden md:flex px-4">
                <div
                  className={`text-base font-bold text-white transition-transform duration-300 ease-in-out w-full ${
                    hoveredIndex === index
                      ? `!text-hackathone-font-rocket-red font-extrabold ${
                          isOdd ? "-translate-x-[5%]" : "translate-x-[5%]"
                        }`
                      : "translate-x-0"
                  }`}
                >
                  {event.date}
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-hackathone-font-rocket-red hidden sm:block" />
                {index < timelineInfo.length - 1 && (
                  <TimelineConnector
                    className="transition-all duration-500 ease-in-out hidden sm:block bg-zinc-600"
                    style={{
                      height: hoveredIndex === index ? contentHeight + 20 : 100,
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <div
                  className={`flex-1 p-4 rounded-xl transition-all mb-4 duration-300 ease-in-out bg-[#1e1e1e] ${
                    hoveredIndex === index
                      ? "border-2 border-[#EAFE07]"
                      : "border-2 border-transparent"
                  }`}
                  style={{
                    maxHeight:
                      hoveredIndex === index ? contentHeight + 140 : "auto",
                    height: hoveredIndex === index ? "auto" : 120,
                  }}
                >
                  <div
                    className={`text-[16px] sm:text-xl font-bold text-hackathone-font-rocket-red text-center ${
                      isOdd ? "md:text-start" : "md:text-end"
                    }`}
                  >
                    {event.title}
                  </div>
                  {event.subtitle && (
                    <div
                      ref={contentRef}
                      className={`text-white transition-all duration-500 ease-in-out mt-4 text-[14px] sm:text-[16px] text-center ${
                        isOdd ? "md:text-start" : "md:text-end"
                      }`}
                    >
                      {event.subtitle}
                    </div>
                  )}
                </div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </MuiTimeline>
    </section>
  );
}
