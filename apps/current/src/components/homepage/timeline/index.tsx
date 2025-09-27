"use client";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
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

const highlightTimes = (text: string) =>
  text.replace(
    /\b(\d{1,2}:\d{2}\s?(?:AM|PM|am|pm)?)\b/g,
    "<strong>$1</strong>"
  );

const TimelineItem = ({
  event,
  index,
  isHovered,
  onHover,
  contentHeight,
  totalItems,
}: TimelineItemProps) => {
  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div
        className={classNames(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100"
        )}
      >
        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-brightYellow/10 to-maastrichtBlue/15 blur-xl" />
      </div>

      <div className="relative flex w-full items-start">
        {/* Desktop side date pill */}
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
                ? "border-brightYellow bg-navy/20 text-brightYellow shadow-lg shadow-brightYellow/15"
                : "border-battleship bg-pineTree/50 text-gray-300 hover:border-gray-500"
            )}
          >
            <div className="font-hackathoneCabinetGrotesk text-sm font-semibold tracking-wide">
              {event.date}
            </div>
          </div>
        </div>

        {/* Timeline line + dot */}
        <div className="order-2 hidden flex-col items-center px-4 pt-6 md:flex">
          {index === totalItems - 1 && (
            <div
              className={classNames(
                "w-0.5 transition-all duration-500",
                isHovered ? "bg-brightYellow shadow-md" : "bg-battleship"
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
                  ? "border-brightYellow bg-navy shadow-lg shadow-brightYellow/30"
                  : "border-battleship bg-pineTree"
              )}
            />
          </div>

          {index < totalItems - 1 && (
            <div
              className={classNames(
                "w-0.5 flex-1 transition-all duration-500",
                isHovered ? "bg-brightYellow shadow-md" : "bg-battleship"
              )}
              style={{
                minHeight: isHovered ? contentHeight + 80 : contentHeight + 40,
              }}
            />
          )}
        </div>

        {/* Card */}
        <div
          className={classNames(
            "w-full px-6 md:w-1/2",
            isOdd ? "order-1" : "order-3"
          )}
        >
          {event.link ? (
            <Link href={event.link}>
              <div
                className={classNames(
                  "group/card relative cursor-pointer overflow-hidden rounded-xl border-2 p-6 backdrop-blur-sm transition-all duration-300",
                  isHovered
                    ? "scale-[1.02] transform border-brightYellow bg-gradient-to-br from-deepSpace/95 to-navy/30 shadow-2xl shadow-brightYellow/10"
                    : "border-battleship bg-deepSpace/80 hover:border-gray-600 hover:bg-deepSpace/90"
                )}
                onMouseEnter={() => onHover(index)}
                onMouseLeave={() => onHover(null)}
                onFocus={() => onHover(index)}
                onBlur={() => onHover(null)}
                tabIndex={0}
                role="button"
              >
                {/* Mobile date pill */}
                <div className="mb-3 block md:hidden">
                  <div
                    className={classNames(
                      "inline-block rounded-lg border px-3 py-1 font-hackathoneCabinetGrotesk text-sm font-semibold backdrop-blur-sm transition-all duration-300",
                      isHovered
                        ? "border-brightYellow bg-navy/20 text-brightYellow"
                        : "border-battleship bg-pineTree/50 text-gray-300"
                    )}
                  >
                    {event.date}
                  </div>
                </div>

                <div className="relative">
                  <div
                    className={classNames(
                      "mb-3 text-xl font-bold transition-colors duration-300",
                      isOdd
                        ? "text-left md:text-left"
                        : "text-left md:text-right"
                    )}
                  >
                    {event.title}
                  </div>

                  <div
                    className={classNames(
                      "font-hackathoneCabinetGrotesk text-gray-300 transition-all duration-300",
                      isOdd
                        ? "text-left md:text-left"
                        : "text-left md:text-right",
                      isHovered && "text-gray-200"
                    )}
                  >
                    {event.subtitle}
                  </div>

                  {event.content && (
                    <div
                      className={classNames(
                        "prose prose-invert mt-4 overflow-hidden whitespace-pre-line font-hackathoneCabinetGrotesk text-sm text-gray-400 transition-all duration-500",
                        isHovered
                          ? "max-h-none text-gray-300 opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                      dangerouslySetInnerHTML={{
                        __html: highlightTimes(event.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <div
              className={classNames(
                "group/card relative cursor-pointer overflow-hidden rounded-xl border-2 p-6 backdrop-blur-sm transition-all duration-300",
                isHovered
                  ? "scale-[1.02] transform border-brightYellow bg-gradient-to-br from-deepSpace/95 to-navy/30 shadow-2xl shadow-brightYellow/10"
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
              {/* Mobile date pill */}
              <div className="mb-3 block md:hidden">
                <div
                  className={classNames(
                    "inline-block rounded-lg border px-3 py-1 font-hackathoneCabinetGrotesk text-sm font-semibold backdrop-blur-sm transition-all duration-300",
                    isHovered
                      ? "border-brightYellow bg-navy/20 text-brightYellow"
                      : "border-battleship bg-pineTree/50 text-gray-300"
                  )}
                >
                  {event.date}
                </div>
              </div>

              <div className="relative">
                <div
                  className={classNames(
                    "mb-3 text-xl font-bold transition-colors duration-300",
                    isOdd ? "text-left md:text-left" : "text-left md:text-right"
                  )}
                >
                  {event.title}
                </div>

                <div
                  className={classNames(
                    "font-hackathoneCabinetGrotesk text-gray-300 transition-all duration-300",
                    isOdd
                      ? "text-left md:text-left"
                      : "text-left md:text-right",
                    isHovered && "text-gray-200"
                  )}
                >
                  {event.subtitle}
                </div>

                {event.content && (
                  <div
                    className={classNames(
                      "prose prose-invert mt-4 overflow-hidden whitespace-pre-line font-hackathoneCabinetGrotesk text-sm text-gray-400 transition-all duration-500",
                      isHovered
                        ? "max-h-none text-gray-300 opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                    dangerouslySetInnerHTML={{
                      __html: highlightTimes(event.content),
                    }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const TimelineSection = ({ timelineData }: TimelineSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (hoveredIndex !== null) {
      setContentHeight(200); // Increased base height
    }
  }, [hoveredIndex]);

  return (
    <SectionContainer className="mb-20" id="timeline">
      <div className="relative mb-12 text-center">
        <motion.h2
          className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-nokaTrial text-[28px] font-semibold text-transparent max-md:text-center lg:text-4xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {timelineData.title}
        </motion.h2>
      </div>

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col gap-12 md:gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
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
      </motion.div>
    </SectionContainer>
  );
};
