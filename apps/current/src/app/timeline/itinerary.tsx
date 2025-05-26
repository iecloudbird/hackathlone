"use client";

import { ExpandLess } from "@mui/icons-material";
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
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Tooltip from "../general/tooltip";
import { schedule, type DaySchedule, type ScheduleItem } from "./timeline.dto";

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

const Itinerary: React.FC = () => {
  const router = useRouter();
  const startDate = new Date(2024, 9, 4);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const handleToggleExpand = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index)); // Collapse
    } else {
      setExpandedItems([...expandedItems, index]); // Expand
    }
  };

  const sharedView = () => {
    return (
      <div className="relative z-10 mt-2 py-[24px] TabletScreen:mx-[8.06%] DesktopScreen:mx-[8.06%]">
        <div>
          {schedule.map((day: DaySchedule, dayIndex: number) => {
            const dayDate = new Date(startDate);
            dayDate.setDate(startDate.getDate() + dayIndex);
            return (
              <section
                key={dayIndex}
                id={`day-${dayIndex + 1}`}
                className="mb-16"
              >
                {/*Desktop Screen*/}
                <div className="MobileScreen:hidden TabletScreen:hidden">
                  <div className="mb-10 flex items-center">
                    <Tooltip text="Back to Timeline">
                      <IconButton
                        size="large"
                        color="primary"
                        onClick={() => router.push("/#timeline")}
                        className="mr-4 text-white hover:text-hackathone-font-rocket-red MobileScreen:hidden TabletScreen:hidden"
                        edge="start"
                        sx={{
                          width: "4rem",
                          height: "4rem",
                          fontSize: "5rem",
                          transition:
                            "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                        aria-label="back to home"
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
                    <Typography
                      variant="h3"
                      component="h1"
                      className="text-start font-hackathoneCabinetGrotesk text-4xl font-bold text-hackathone-font-rocket-red md:text-[3.5rem] MobileScreen:hidden"
                    >
                      {day.title}
                      <span className="text-4xl text-white md:text-[32.99px]">
                        {" (" + formatDate(dayDate) + "'24)"}
                      </span>
                    </Typography>
                    <Typography
                      variant="h3"
                      component="h1"
                      className="pl-4 text-start font-hackathoneCabinetGrotesk text-3xl font-bold text-hackathone-font-rocket-red sm:text-[3.5rem] TabletScreen:hidden DesktopScreen:hidden"
                    >
                      <span className="MobileScreen:whitespace-pre">
                        {" "}
                        {day.title}
                      </span>
                      <span className="text-2xl text-white sm:text-[32.99px] MobileScreen:whitespace-pre">
                        {"\n (" + formatDate(dayDate) + "'24)"}
                      </span>
                    </Typography>
                  </div>
                  <MuiTimeline
                    position="right"
                    sx={{
                      [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                      },
                      [`& .${timelineItemClasses.root}`]: {
                        padding: "0 0 0 1.5rem",
                      },
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
                        <div className="mx-4 w-72 items-center justify-center text-center">
                          <TimelineContent>
                            <Paper
                              elevation={3}
                              className="h-11 w-60 rounded-lg p-2 transition-all duration-500 ease-in-out"
                              style={{
                                backgroundColor: "rgb(234 254 7)",
                              }}
                            >
                              <Typography
                                variant="h6"
                                component="h1"
                                className="whitespace-nowrap text-center text-[14px] !font-extrabold text-black md:!text-[1rem]"
                                style={{
                                  backgroundColor: "rgb(234 254 7)",
                                }}
                              >
                                {item.time}
                              </Typography>
                            </Paper>
                          </TimelineContent>
                        </div>
                        <div className="w-[55%] translate-y-[-30%]">
                          <TimelineContent>
                            <Paper
                              elevation={3}
                              className="relative my-4 flex-1 rounded-xl p-4 transition-all duration-500 ease-in-out"
                              style={{
                                backgroundColor: "#1e1e1e",
                              }}
                            >
                              <Typography
                                variant="h6"
                                component="h1"
                                className="text-start font-bold text-hackathone-font-rocket-red md:text-xl lg:whitespace-nowrap"
                              >
                                {item.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                className="text-start text-white"
                              >
                                {item.content}
                              </Typography>
                            </Paper>
                          </TimelineContent>
                        </div>
                      </TimelineItem>
                    ))}
                  </MuiTimeline>
                </div>
                {/*Mobile and Tablet Screen*/}
                <div className="DesktopScreen:hidden">
                  <div className="mb-4 flex flex-row items-center justify-center text-center TabletScreen:mb-10">
                    <div className="MobileScreen:ml-8 MobileScreen:flex MobileScreen:w-full MobileScreen:flex-row TabletScreen:w-1/5 TabletScreen:text-left">
                      {/*Button Sizing for Tablet Screen*/}
                      <IconButton
                        size="medium"
                        color="primary"
                        onClick={() => router.push("/#timeline")}
                        className="mr-4 object-left text-white hover:text-hackathone-font-rocket-red MobileScreen:hidden"
                        edge="start"
                        sx={{
                          width: "3.5rem",
                          height: "3.5rem",
                          fontSize: "5rem",
                          transition:
                            "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                        aria-label="back to home"
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
                      {/*Button Sizing for Mobile Screen*/}
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => router.push("/#timeline")}
                        className="object-left text-white hover:text-hackathone-font-rocket-red TabletScreen:hidden"
                        edge="start"
                        sx={{
                          width: "2.5rem",
                          height: "2.5rem",
                          fontSize: "2.5rem",
                          position: "relative",
                          top: "0",
                          left: "-0.5rem",
                        }}
                        aria-label="back to home"
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
                      {/*Header for Mobile Screen*/}
                      <Typography
                        variant="h3"
                        component="h1"
                        className="pl-4 text-start font-hackathoneCabinetGrotesk text-3xl font-bold text-hackathone-font-rocket-red sm:text-[3.5rem] TabletScreen:hidden"
                      >
                        <span className="MobileScreen:whitespace-pre">
                          {" "}
                          {day.title}
                        </span>
                        <span className="text-2xl text-white sm:text-[32.99px] MobileScreen:whitespace-pre">
                          {"\n (" + formatDate(dayDate) + "'24)"}
                        </span>
                      </Typography>
                    </div>
                    <div className="MobileScreen:hidden TabletScreen:flex TabletScreen:w-[90%] TabletScreen:items-center TabletScreen:justify-center TabletScreen:text-center">
                      <Typography
                        variant="h3"
                        component="h1"
                        className="text-center font-hackathoneCabinetGrotesk text-3xl font-bold text-hackathone-font-rocket-red sm:text-[3.5rem] TabletScreen:text-start"
                      >
                        {day.title}
                        <span className="text-3xl text-white sm:text-[32.99px] MobileScreen:whitespace-pre">
                          {"\n (" + formatDate(dayDate) + "'24)"}
                        </span>
                      </Typography>
                    </div>
                  </div>
                  <MuiTimeline
                    position="right"
                    sx={{
                      [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                      },
                      [`& .${timelineItemClasses.root}`]: {
                        padding: "0 0 0 1.5rem",
                      },
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
                        <div className="mx-4 w-full items-center justify-center space-x-4 text-center">
                          <TimelineContent>
                            <Paper
                              elevation={3}
                              className="h-10 MobileScreen:h-fit MobileScreen:w-4/5 TabletScreen:mx-[15%]"
                              style={{
                                backgroundColor: "rgb(234 254 7)",
                              }}
                            >
                              <Typography
                                variant="h6"
                                component="h1"
                                className="rounded-lg p-2 text-center text-[14px] font-extrabold text-black md:text-[1rem] MobileScreen:pl-4 MobileScreen:text-start"
                                style={{
                                  backgroundColor: "rgb(234 254 7)",
                                }}
                              >
                                {item.time}
                              </Typography>
                            </Paper>
                            <Paper
                              elevation={3}
                              className="relative my-6 flex-1 rounded-xl p-4 transition-all duration-500 ease-in-out MobileScreen:mb-6 MobileScreen:mt-4"
                              style={{
                                backgroundColor: "#1e1e1e",
                              }}
                            >
                              {/* Mobile View */}
                              <div className="flex items-start justify-between TabletScreen:hidden">
                                <Typography
                                  variant="h6"
                                  component="h1"
                                  className="text-center text-[18px] font-bold text-hackathone-font-rocket-red md:text-xl lg:whitespace-nowrap MobileScreen:text-start"
                                >
                                  {item.title}
                                </Typography>
                                {/* Expand/Collapse Button */}
                                <IconButton
                                  onClick={() => handleToggleExpand(index)}
                                  size="small"
                                  aria-label={
                                    expandedItems.includes(index)
                                      ? "Collapse"
                                      : "Expand"
                                  }
                                  sx={{
                                    color: "white",
                                    alignSelf: "flex-start", // Align button to the top
                                    transition: "transform 0.5s ease-in-out", // Transition for transform property
                                    transform: expandedItems.includes(index)
                                      ? "rotate(180deg)"
                                      : "rotate(0deg)",
                                  }}
                                >
                                  {expandedItems.includes(index) ? (
                                    <ExpandLess />
                                  ) : (
                                    <ExpandLess />
                                  )}
                                </IconButton>
                              </div>

                              {/* Tablet View */}
                              <div className="MobileScreen:hidden">
                                <Typography
                                  variant="h6"
                                  component="h1"
                                  className="text-center text-[18px] font-bold text-hackathone-font-rocket-red md:text-xl lg:whitespace-nowrap MobileScreen:text-start"
                                >
                                  {item.title}
                                </Typography>
                                {/* Expand/Collapse Button */}
                              </div>
                              <Typography
                                variant="body1"
                                className="pt-2 text-center text-white MobileScreen:hidden MobileScreen:text-start"
                              >
                                {item.content}
                              </Typography>
                              {/* Conditional Rendering for Expanded Content */}
                              <div
                                className={`transition-all duration-500 ease-in-out ${expandedItems.includes(index) ? "max-h-[1000px] opacity-100" : "max-h-0 py-0 opacity-0"} TabletScreen:hidden`}
                              >
                                <Typography
                                  variant="body1"
                                  className="pt-2 text-center text-white MobileScreen:text-start"
                                >
                                  {item.content}
                                </Typography>
                              </div>
                            </Paper>
                          </TimelineContent>
                        </div>
                      </TimelineItem>
                    ))}
                  </MuiTimeline>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    );
  };

  return <section>{sharedView()}</section>;
};

export default Itinerary;
