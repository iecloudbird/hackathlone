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
      className="mx-4 mb-32 mt-20 flex flex-col items-center justify-center py-2 text-hackathone-font-rocket-red sm:mx-[3.5%] lg:mx-[8.68%]"
    >
      <div className="mb-10 text-center font-hackathoneCabinetGrotesk text-[30.99px] font-bold leading-[34.62px] sm:text-[32.99px] lg:text-4xl">
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
              <TimelineOppositeContent className="hidden px-4 md:flex">
                <div
                  className={`w-full text-base font-bold text-white transition-transform duration-300 ease-in-out ${
                    hoveredIndex === index
                      ? `font-extrabold !text-hackathone-font-rocket-red ${
                          isOdd ? "-translate-x-[5%]" : "translate-x-[5%]"
                        }`
                      : "translate-x-0"
                  }`}
                >
                  {event.date}
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="hidden bg-hackathone-font-rocket-red sm:block" />
                {index < timelineInfo.length - 1 && (
                  <TimelineConnector
                    className="hidden bg-zinc-600 transition-all duration-500 ease-in-out sm:block"
                    style={{
                      height: hoveredIndex === index ? contentHeight + 20 : 100,
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <div
                  className={`mb-4 flex-1 rounded-xl bg-[#1e1e1e] p-4 transition-all duration-300 ease-in-out ${
                    hoveredIndex === index
                      ? "border-2 border-hackathone-background-yellow"
                      : "border-2 border-transparent"
                  }`}
                  style={{
                    maxHeight:
                      hoveredIndex === index ? contentHeight + 140 : "auto",
                    height: hoveredIndex === index ? "auto" : 120,
                  }}
                >
                  <div
                    className={`text-center text-[16px] font-bold text-hackathone-font-rocket-red sm:text-xl ${
                      isOdd ? "md:text-start" : "md:text-end"
                    }`}
                  >
                    {event.title}
                  </div>
                  {event.subtitle && (
                    <div
                      ref={contentRef}
                      className={`mt-4 text-center text-[14px] text-white transition-all duration-500 ease-in-out sm:text-[16px] ${
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
