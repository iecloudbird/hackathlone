"use client";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";
import { Paper, Typography, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Tooltip from "../general/tooltip";
import { schedule, type DaySchedule, type ScheduleItem } from "./timeline.dto";

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    weekday: "long",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

const Itinerary: React.FC = () => {
  const router = useRouter();
  const startDate = new Date(2024, 9, 4);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const handleToggleExpand = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="relative z-10 mt-2 py-6 sm:py-6 md:py-6 lg:mx-[8.06%]">
      {schedule.map((day: DaySchedule, dayIndex: number) => {
        const dayDate = new Date(startDate);
        dayDate.setDate(startDate.getDate() + dayIndex);
        return (
          <section
            key={dayIndex}
            id={`day-${dayIndex + 1}`}
            className="mx-6 mb-16 sm:mx-0"
          >
            {/* Day Header and Back Button */}
            <div className="mb-4 flex w-full items-center justify-start gap-4 lg:mb-10">
              {/* Back Button */}
              <Tooltip text="Back to Timeline">
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => router.push("/#timeline")}
                  className="text-white hover:text-hackathone-font-rocket-red sm:mr-4 md:mr-4 lg:mr-4"
                  sx={{
                    fontSize: "3rem",
                    height: "3rem",
                    width: "3rem",
                    position: "relative",
                  }}
                  aria-label="back to timeline"
                >
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="50" fill="#EAFE07" />
                    <path
                      d="M50 76L54.5825 71.4175L36.4475 53.25L76 53.25L76 46.75L36.4475 46.75L54.5825 28.5825L50 24L24 50L50 76Z"
                      fill="black"
                    />
                  </svg>
                </IconButton>
              </Tooltip>

              {/* Day Title */}
              <Typography
                variant="h3"
                component="h1"
                className="text-center font-hackathoneCabinetGrotesk text-3xl font-bold text-hackathone-font-rocket-red sm:text-center sm:text-3xl md:text-center md:text-[3.5rem] lg:text-start lg:text-4xl"
              >
                {day.title}{" "}
                <span className="whitespace-pre-line text-2xl text-white sm:whitespace-pre-line sm:text-2xl md:whitespace-normal md:text-[32.99px] lg:whitespace-normal lg:text-4xl">
                  ({formatDate(dayDate)}&apos;24)
                </span>
              </Typography>
            </div>

            {/* Timeline */}
            <MuiTimeline
              position="right"
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
                [`& .${timelineItemClasses.root}`]: { padding: "0 0 0 1.5rem" },
              }}
            >
              {day.day.map((item: ScheduleItem, index: number) => (
                <TimelineItem
                  key={index}
                  className="cursor-pointer"
                  tabIndex={0}
                >
                  <TimelineSeparator>
                    <TimelineDot className="bg-hackathone-font-rocket-red" />
                    {index < day.day.length - 1 && (
                      <TimelineConnector className="transition-all duration-500 ease-in-out" />
                    )}
                  </TimelineSeparator>
                  <TimelineContent className="mx-4 flex flex-col items-start sm:flex-col sm:gap-4 md:flex-row lg:flex-row">
                    {/* Time Card */}
                    <Paper
                      elevation={3}
                      className="h-10 w-full rounded-lg bg-[rgb(234_254_7)] p-2 text-center sm:h-10 sm:w-full sm:text-center md:h-11 md:w-60 md:text-center lg:h-11 lg:w-60"
                    >
                      <Typography
                        variant="h6"
                        component="h1"
                        className="text-center text-[14px] font-extrabold text-black sm:text-start md:text-center md:text-[1rem]"
                      >
                        {item.time}
                      </Typography>
                    </Paper>

                    {/* Content Card */}
                    <Paper
                      elevation={3}
                      className="relative mb-6 w-full rounded-xl bg-[#1e1e1e] p-4 transition-all duration-500 ease-in-out sm:w-full md:w-[55%]"
                    >
                      <div className="flex items-start justify-between">
                        <Typography
                          variant="h6"
                          component="h1"
                          className="w-full text-center text-[18px] font-bold text-hackathone-font-rocket-red md:whitespace-nowrap md:text-start md:text-xl"
                        >
                          {item.title}
                        </Typography>
                        {/* Expand/Collapse Button (Mobile Only) */}
                        <IconButton
                          onClick={() => handleToggleExpand(index)}
                          size="small"
                          aria-label={
                            expandedItems.includes(index)
                              ? "Collapse"
                              : "Expand"
                          }
                          className="md:hidden lg:hidden"
                          sx={{
                            alignSelf: "flex-start",
                            color: "white",
                            transform: expandedItems.includes(index)
                              ? "rotate(0deg)"
                              : "rotate(180deg)",
                            transition: "transform 0.5s ease-in-out",
                          }}
                        >
                          {expandedItems.includes(index) ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </IconButton>
                      </div>
                      {/* Content (Always Visible on Tablet/Desktop, Collapsible on Mobile) */}
                      <div
                        className={`pt-2 text-center text-white transition-all duration-500 ease-in-out sm:text-start ${expandedItems.includes(index) ? "max-h-[1000px] opacity-100" : "max-h-0 overflow-hidden opacity-0 md:max-h-[1000px] md:opacity-100 lg:max-h-[1000px] lg:opacity-100"}`}
                      >
                        <Typography variant="body1">{item.content}</Typography>
                      </div>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </MuiTimeline>
          </section>
        );
      })}
    </section>
  );
};

export default Itinerary;
