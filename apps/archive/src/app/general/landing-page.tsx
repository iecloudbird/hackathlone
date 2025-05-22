"use client";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import NavigationBar from "@/app/general/navigation-bar";
import HeroPage from "./hero-page";
import JoinUsPage from "./join-us-page";
import SpaceAgencies from "./space-agencies";
import GlobalCollabrators from "./global-collabrators";
import Shannon from "./shannon";
import TeamStories from "./team-stories";
import HackathoneTimeline from "./timeline";
import Socials from "./socials-page";
import Footer from "./footer";
import BackToTopButton from "../general/back-to-top";
import DesignBrew from "./design-brew";

const LandingPage = () => {
  const [token, setToken] = useState("");
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState("");

  // Function to send the token to the API
  const sendTokenToApi = async (token: string) => {
    console.log(token);
    try {
      const response = await fetch("https://yds-online.com/api/save-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Token sent successfully:", data);
    } catch (error) {
      console.error("Error sending token:", error);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>

      {/* Main contents */}
      <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
        <NavigationBar />
        <HeroPage />
        <JoinUsPage />
        <SpaceAgencies />
        <GlobalCollabrators />
        <Shannon />
        <TeamStories />
        <HackathoneTimeline />
        <Socials />
        <BackToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
