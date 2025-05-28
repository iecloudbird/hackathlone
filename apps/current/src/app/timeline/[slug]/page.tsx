"use client";
{
  /*This is a empty structure for now, keep just in case design require changes to individual page for itinerary.*/
}
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Paper, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { useParams } from "next/navigation";
import React from "react";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import Footer from "../../general/footer";
import NavigationBar from "../../general/navigation-bar";
import { schedule } from "../timeline.dto";

const TimelinePage: React.FC = () => {
  const { slug } = useParams();
  const daySchedule = schedule.find((d) => d.slug === slug);

  if (!daySchedule) {
    return <div>Schedule not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>
      <div className="relative z-10 py-[12px] sm:py-[24px]">
        <NavigationBar />
        <div>
          <div
            id="timeline"
            className="my-32 flex min-h-screen flex-col items-center justify-center py-2 text-hackathone-font-rocket-red md:my-40 lg:mx-[8.68%]"
          >
            <Typography
              variant="h3"
              component="h1"
              className="mb-10 text-center text-3xl font-bold sm:text-4xl"
            >
              {daySchedule.title} Schedule
            </Typography>
            <MuiTimeline position="alternate-reverse">
              {daySchedule.day.map((item, index) => (
                <TimelineItem
                  key={index}
                  className="cursor-pointer"
                  tabIndex={0}
                >
                  <TimelineOppositeContent className="hidden px-4 md:block">
                    <Typography
                      variant="body2"
                      color="white"
                      className="text-center text-base font-normal sm:text-start"
                    >
                      {item.time}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot className="hidden bg-hackathone-font-rocket-red lg:block" />
                    {index < daySchedule.day.length - 1 && (
                      <TimelineConnector className="hidden transition-all duration-500 ease-in-out lg:block" />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      elevation={3}
                      className="relative mb-4 flex-1 rounded-xl p-4 transition-all duration-500 ease-in-out"
                    >
                      <Typography
                        variant="h6"
                        component="h1"
                        className="text-center text-[14px] font-bold text-hackathone-font-rocket-red sm:text-start md:text-xl"
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body1" className="text-white">
                        {item.content}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </MuiTimeline>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TimelinePage;
