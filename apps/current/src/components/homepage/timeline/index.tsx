"use client";

import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import {
  type TimelineSectionData,
  type TimelineEvent,
} from "@/data/homepage/timeline";
import { SectionContainer } from "../SectionContainer";

interface TimelineSectionProps {
  timelineData: TimelineSectionData;
}

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  contentHeight: number;
  totalItems: number;
}

const TimelineItem = ({
  event,
  index,
  isHovered,
  onHover,
  contentHeight,
  totalItems,
}: TimelineItemProps) => {
  const isOdd = index % 2 !== 0;
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="group relative">
      <div
        className={classNames(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100"
        )}
      >
        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-spiroDiscoBall/10 to-maastrichtBlue/15 blur-xl" />
      </div>

      <div className="relative flex w-full items-center">
        <div
          className={classNames(
            "hidden w-1/2 px-6 md:flex",
            isOdd ? "order-3 justify-start" : "order-1 justify-end"
          )}
        >
          <div
            className={classNames(
              "relative rounded-lg border px-4 py-2 text-center backdrop-blur-sm transition-all duration-300",
              isHovered
                ? "border-spiroDiscoBall bg-navy/20 text-spiroDiscoBall shadow-lg shadow-spiroDiscoBall/15"
                : "border-battleship bg-pineTree/50 text-gray-300 hover:border-gray-500"
            )}
          >
            <div className="text-sm font-semibold">{event.date}</div>
          </div>
        </div>

        <div className="order-2 hidden flex-col items-center px-4 md:flex">
          {index === totalItems - 1 && (
            <div
              className={classNames(
                "w-0.5 transition-all duration-500",
                isHovered ? "bg-spiroDiscoBall shadow-md" : "bg-battleship"
              )}
              style={{
                height: isHovered ? contentHeight + 60 : contentHeight + 20,
              }}
            />
          )}

          <div className="relative z-10">
            <div
              className={classNames(
                "size-5 rounded-full border-2 transition-all duration-300",
                isHovered
                  ? "border-spiroDiscoBall bg-navy shadow-lg shadow-spiroDiscoBall/30"
                  : "border-battleship bg-pineTree"
              )}
            >
              <div
                className={classNames(
                  "absolute inset-1 rounded-full transition-all duration-300",
                  isHovered && "bg-spiroDiscoBall/20"
                )}
              />
            </div>

            {isHovered && (
              <>
                <div className="absolute inset-0 animate-ping rounded-full border border-spiroDiscoBall/20" />
                <div className="absolute -inset-2 animate-pulse rounded-full border border-spiroDiscoBall/15" />
              </>
            )}
          </div>
          {index < totalItems - 1 && (
            <div
              className={classNames(
                "w-0.5 transition-all duration-500",
                isHovered ? "bg-spiroDiscoBall shadow-md" : "bg-battleship"
              )}
              style={{
                height: isHovered ? contentHeight + 60 : contentHeight + 20,
              }}
            />
          )}
        </div>

        <div
          className={classNames(
            "w-full px-6 md:w-1/2",
            isOdd ? "order-1" : "order-3"
          )}
        >
          <div className="mb-3 block md:hidden">
            <div
              className={classNames(
                "inline-block rounded-lg border px-3 py-1 text-sm font-semibold backdrop-blur-sm transition-all duration-300",
                isHovered
                  ? "border-spiroDiscoBall bg-navy/20 text-spiroDiscoBall"
                  : "border-battleship bg-pineTree/50 text-gray-300"
              )}
            >
              {event.date}
            </div>
          </div>

          <div
            className={classNames(
              "group/card relative cursor-pointer overflow-hidden rounded-xl border-2 p-6 backdrop-blur-sm transition-all duration-300",
              isHovered
                ? "scale-[1.02] transform border-spiroDiscoBall bg-gradient-to-br from-deepSpace/95 to-navy/30 shadow-2xl shadow-spiroDiscoBall/10"
                : "border-battleship bg-deepSpace/80 hover:border-gray-600 hover:bg-deepSpace/90"
            )}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(index)}
            onBlur={() => onHover(null)}
            onClick={event.route}
            tabIndex={0}
            role="button"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-spiroDiscoBall" />
              <div className="absolute bottom-4 left-4 h-4 w-4 rounded-full bg-navy" />
              <div className="absolute left-1/3 top-1/2 h-2 w-2 rounded-full bg-battleship" />
            </div>

            {/* Hover overlay */}
            <div
              className={classNames(
                "absolute inset-0 opacity-0 transition-opacity duration-300",
                isHovered && "opacity-100"
              )}
            >
              <div className="to-navy/8 absolute inset-0 bg-gradient-to-r from-spiroDiscoBall/5" />
            </div>

            <div className="relative">
              <div
                className={classNames(
                  "mb-3 text-xl font-bold transition-colors duration-300",
                  isHovered ? "text-spiroDiscoBall" : "text-white",
                  isOdd ? "text-left md:text-left" : "text-left md:text-right"
                )}
              >
                {event.title}
              </div>

              <div
                ref={contentRef}
                className={classNames(
                  "text-gray-300 transition-all duration-300",
                  isOdd ? "text-left md:text-left" : "text-left md:text-right",
                  isHovered && "text-gray-200"
                )}
              >
                {event.subtitle}
              </div>

              {event.content && (
                <div
                  className={classNames(
                    "mt-4 overflow-hidden whitespace-pre-line text-sm text-gray-400 transition-all duration-500",
                    isOdd ? "text-justify" : "text-justify md:text-right",
                    isHovered
                      ? "max-h-40 text-gray-300 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  {event.content}
                </div>
              )}

              <div
                className={classNames(
                  "mt-4 flex transition-all duration-300",
                  isOdd
                    ? "justify-start md:justify-start"
                    : "justify-start md:justify-end"
                )}
              >
                <div
                  className={classNames(
                    "flex items-center text-sm font-medium transition-all duration-300",
                    isHovered
                      ? "translate-x-1 text-spiroDiscoBall"
                      : "text-battleship"
                  )}
                >
                  {event.route && (
                    <>
                      <span>Learn more</span>
                      <svg
                        className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TimelineSection = ({ timelineData }: TimelineSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (hoveredIndex !== null) {
      setContentHeight(140);
    }
  }, [hoveredIndex]);

  return (
    <SectionContainer className="bg-deepSpace text-white" id="timeline">
      <div className="relative mb-20 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 left-1/4 h-1 w-20 bg-gradient-to-r from-transparent via-spiroDiscoBall to-transparent opacity-20" />
          <div className="absolute -bottom-10 right-1/4 h-1 w-16 bg-gradient-to-r from-transparent via-navy to-transparent opacity-20" />
        </div>

        <div className="relative">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            {timelineData.title}
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-spiroDiscoBall to-transparent opacity-50" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
        </div>

        <div className="relative flex flex-col gap-12 md:gap-0">
          {timelineData.events.map((event, index) => (
            <TimelineItem
              key={index}
              event={event}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={setHoveredIndex}
              contentHeight={contentHeight}
              totalItems={timelineData.events.length}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
